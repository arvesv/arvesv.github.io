---
date: '2026-03-03T19:24:50+01:00'
title: 'The true purpose of a FIDO2 security key'
---

I often find that you need to use a product for a while before you understand its “true purpose.” Reading about it only gets you so far. The real use case tends to
reveal itself after some time in the real world.

This is my experices with FIDO2 security keys.

###  What a FIDO2 security key actually is

Before buying my first keys — a YubiKey and a Google Titan — I hadn’t done much research. I just knew that some of the “cool kids” used them to protect their accounts.

A FIDO2 security key is essentially a passwordless authenticator. It stores a private cryptographic key that cannot be extracted. When you log in, the service sends a
challenge, and the key signs it. This proves that you physically possess the key. No password is involved, so there’s nothing to steal or reuse. Phishing becomes
difficult.

To use the key, you connect it via USB or tap it using NFC on mobile devices. You also unlock it with a PIN, which is required before the key can sign anything.

In many ways, a FIDO2 key behaves like a physical key:
- It cannot be stolen over the internet.
- It can be lost or stolen in the real world.

### Why you may not need a security key

Passkeys offer the same passwordless model, but the private key is stored on your device (phone or computer) and protected by biometrics or a device PIN. For most people, passkeys are equally secure and much easier to use than a physical key.


Security keys also come with a practical downside. They are protected by a PIN and a PUK, similar to a SIM card, and enter the wrong PIN/PUK too many times and the key wipes itself. It
has happened to me a few times, which means I don’t fully trust them to always work.

Because of this, I’m not ready to replace all my existing authentication methods with a security key. And since the password still exists as a fallback, phishing isn’t eliminated entirely.

### When is a FIDO2 security key a good idea?

There are still situations where a hardware key makes sense:
- Passwordless login on shared or untrusted devices, where you can’t install a passkey.
- A backup authentication method if you lose your phone with all your other factors (please review how you access your account in case you loose your phone)
- Work requirements, especially in high‑security environments.
- Learning and experimenting with FIDO2 security keys

If any of these use cases resonate with you, a security key is worth buying. But for most people, passkeys alone are probably enough.

