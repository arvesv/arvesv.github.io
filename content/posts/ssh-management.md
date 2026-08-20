---
date: '2025-11-03T11:05:31+01:00'
title: 'SSH Keys Management'
tags: ["Security"]
---

This is how I manage my SSH private keys. I think this is a good balance between security and usability, but this setup is for me. Your situation may be different so read this as potential inspiration, not as a blueprint.

I have a "master" key that gives access to all the clouds, linux machines and Git/GitHub. This gives lots of access so it must be protected. But I also use it often, so it must be easy to use. The way I solve this is using 1Password. It allows the keys to be used on multiple devices while keeping them secure through biometric authentication.

On some devices like phone and tablets I can't use 1Password for SSH management. But the shell I use, blink.sh on iPad/iPhone, supports SSH keys in the secure enclave. And these keys cannot be stolen unless the whole device gets taken so I think this is quite secure.

This 1Password SSH key is rotated regularly, and I have a script that updates my machines and the keys in Google Cloud. This automation ensures that key rotation doesn't become a manual burden while maintaining good security practices.

### Workarounds for WSL

I work on a Windows machine, and use the Windows Subsystem for Linux. This means that the SSH keys must also be available from WSL. There are ways to work around this, but they all have issues.
- Install the 1password CLI on WSL and download the keys. I don't like the security implications of this as the keys will be in clear text on the disk, and the biometric access is not used.
- Call the windows 'ssh.exe' insted of the Unix ssh. This is the solution suggested from 1password. While this works for basic SSH and Git, it does not work for Ansible.
- Forward the Windows SSH agent pipeline to a Linux socket. This would enable biometic access (it is the Windows 1password app that owns SSH agent), it it difficult to setup and fails easily.
- You can use SSH agent forwarding (-A flag to SSH). This means that any keys available on the client machine, is also available on the machine you log into. The thing it requires is that you first
SSH into WSL, and you can do this by installing the openssh server on WSL. That maked the keys available in WSL if you SSH into WSL first.



### Management Strategy

- **Primary Key**: Stored in 1Password with biometric access
- **Device-Specific Keys**: Generated in secure enclaves for mobile devices
- **Rotation**: Automated script handles key updates across infrastructure
- **Access Control**: Single key provides access to all necessary resources

This approach minimizes the number of keys to manage while maintaining security through secure storage and regular rotation.




