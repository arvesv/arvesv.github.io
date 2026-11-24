---
date: '2026-11-30'
title: 'Thoughts on Passkeys and Secure Hardware Devices'
description: 'Why most passkeys live in software password managers rather than non-exportable secure hardware, and how I split accounts between FIDO2 security keys and passkeys.'
tags: ["Security"]
---

I believe you have to use a thing for a while to really know how it works. Well, I have now used [security keys](/posts/2026/fido2security/) and passkeys for a while, and they have a limitation I did not think about. They are still good, but they do not quite work the way I thought they did.

## What I assumed vs. what actually happens

From my [code signing](/posts/authenticode-signing/) experience, I knew the theory behind hardware-backed security keys. There is hardware that can store private keys in a non-exportable way. You prove your possession of the private key by having the hardware sign a challenge, while the key itself never leaves the hardware — it can't leave the hardware. This makes it impossible to steal the key over the internet; the only way to steal it is to steal the actual hardware. Apple's Secure Enclave, YubiKey, and Google Titan keys are examples of such secure hardware.

I assumed that if I added a passkey from a website on a Mac, the key would be stored in a non-exportable way. That is not the case: the passkey is saved in iCloud Keychain or your password manager, which is software. Your password manager is probably very secure, and it may use secure hardware to verify that you have access to your passwords and passkeys. But the passkey itself is stored encrypted on the local machine or in the cloud, not inside the secure hardware. That means there is a small, non-zero chance that your passkey could be stolen.

## Why not use secure hardware?

Why not store every passkey in non-exportable hardware? There are two main reasons. First, secure hardware has limited capacity: my old YubiKey can only store 25 passkeys. Most newer devices can store more, but there is still a limit. Second, and perhaps more importantly, passkeys are designed to sync across devices and survive losing a phone or laptop. If a passkey were locked inside a single device's Secure Enclave with no way to export or sync it, losing that device would lock you out of your accounts. That is the core trade-off between device-bound passkeys (like hardware security keys) and synced passkeys (like iCloud Keychain or password managers).

## My current approach

So my current policy is to use FIDO2 security keys only for important accounts. For the rest of the sites, I use passkeys when available and store the credentials (passwords or passkeys) in my password manager. Even when synced in software, passkeys are still phishing-resistant and unique per site — so they are still a big security improvement, just not quite as hardware-bound as I assumed they were.
