---
date: '2023-11-28'
title: 'Authenticode Signing'
---

A long time ago my employer needed to sign a shrink-wrapped software package using Authenticode. This was my first experience with code signing. Below I summarize what code signing is, why it matters, the 2023 HSM requirements, and practical options for signing in local and CI environments. I have used Azure Key Vault for HSM-backed signing.

## What is code signing and why use it?

A digital signature is an encrypted checksum of a file. It can be verified with the public key to ensure the file was not modified after signing and that the signer controls the corresponding private key.

Windows EXE files can be signed with Microsoft Authenticode. Java has a similar mechanism for JAR files. These specifications define which file parts are checksummed and where the signature and public key are stored.

You need a code signing certificate (public/private key pair). It can be self-signed for testing but for production you should get one from a trusted CA. Signed code provides more trust and a better user experience on platforms that surface signature information. Examples where signing matters:

- PowerShell defaults to blocking unsigned scripts; Excel (VBA) may block unsigned macros.
- Windows and macOS present friendlier warnings for signed downloads.
- Drivers for Windows require an Extended Validation (EV) code signing certificate.
- Signing lets you verify a file hasn’t changed since signing.

## Obtaining a certificate

Historically, code signing private keys could be exported (e.g., PFX files) and shared. Starting in 2023, industry rules require private keys for standard code signing certificates to be stored in hardware certified to FIPS 140 Level 2, Common Criteria EAL4+, or equivalent. CAs will only issue certificates that are non-exportable and tied to supported HSMs or USB tokens. This restricts which CAs and HSMs you can use.

The HSM requirement makes theft and misuse of signing keys much harder.

## How to sign on Windows with a local certificate

On Windows the common tool is signtool.exe (part of the Windows SDK). Typical minimum options:

- `/fd sha256` — set the file digest algorithm
- `/a` or `/sha1` — `/a` auto-selects a certificate (works if you have a single cert); `/sha1 <thumbprint>` selects by thumbprint

Example:
```
signtool /a /fd sha256 filetosign.exe
```

Signtool supports other file types via SIPs (e.g., Office) and can be extended to use non-local certificates with custom providers, though that is more complex.

## Timestamping

Certificates expire (commonly up to 3 years today). A signature without a timestamp becomes invalid when the signing certificate expires. Timestamping records when the file was signed using a trusted timestamp authority so the signature remains valid even after the certificate expires. Signtool uses /tr to specify a timestamp server.

Timestamping can be slower and occasionally fails; if you sign many files, add verification and retry logic in your pipeline.

## 2023 requirement: store private keys in an HSM

Per vendor guidance (for example DigiCert), private keys for standard code signing must be stored in FIPS/EAL-certified hardware. That means certificates will often be issued onto:

- USB tokens (e.g., YubiKey, SafeNet) that expose the key via drivers, or
- HSM appliances, or
- Cloud HSM-backed key stores.

Each option has trade-offs.

### USB tokens (YubiKey / SafeNet)

- Pros: Simple, meets the hardware requirement, gives strong physical protection.
- Cons: Requires drivers and a PIN prompt when accessing the key. Not practical for unattended build pipelines that must sign many files without manual PIN entry.

Conclusion: USB tokens are not a good fit for automated CI/CD signing unless you accept insecure workarounds.

### HSM appliances

- Pros: Enterprise-grade hardware, strong isolation.
- Cons: Expensive (often many thousands of dollars) and operationally heavy. I have not tested appliance-based setups in CI.

### Cloud HSM / Key Vault (recommended)

Cloud providers (Azure Key Vault, AWS KMS/CloudHSM, Google Cloud KMS) offer HSM-backed key storage and signing operations. This is usually far cheaper and easier to integrate with CI/CD than a physical appliance. Access is managed via the cloud provider’s IAM.

I have used Azure Key Vault successfully. Azure pricing is modest (e.g., a small monthly fee plus a per-operation cost). Signtool can be made to use cloud key stores with additional tooling; a convenient option for Azure is AzureSignTool (github.com/vcsjones/AzureSignTool).

## Summary

- Code signing verifies origin and integrity and improves user trust.
- Since 2023, CA-issued code signing private keys must be stored in certified hardware (HSM/USB token/cloud HSM).
- USB tokens are secure but inconvenient for automated pipelines.
- HSM appliances are costly and operationally heavy.
- Cloud HSM/key vault services are a practical, cost-effective choice for CI/CD signing; Azure Key Vault + AzureSignTool is one working solution.

References:
- Authenticode: https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode
- Signtool: https://learn.microsoft.com/en-us/windows/win32/seccrypto/signtool
- DigiCert changes: https://knowledge.digicert.com/alerts/code-signing-changes-in-2023
- AzureSignTool: https://github.com/vcsjones/AzureSignTool
- YubiKey: https://www.yubico.com/no/product/yubikey-5c-nfc/
- SafeNet / Thales eToken: https://cpl.thalesgroup.com/access-management/authenticators/pki-usb-authentication/etoken-5110-usb-token
- Samsung key leak example: https://arstechnica.com/gadgets/2022/12/samsungs-android-app-signing-key-has-leaked-is-being-used-to-sign-malware/
