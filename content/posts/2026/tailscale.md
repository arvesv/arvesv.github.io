---
date: '2026-07-14'
title: 'Software I use - Tailscale'
---
I think there is value in sharing what software you use—and, more importantly, how you use it. I often
think that real life usage examples are easier to understand than presentations. 

This is not sponsored -- this are simply my impressions of tools I use.

### Tailscale – a better VPN, or a virtual intranet?

My high-level explanation of [Tailscale](https://tailscale.com/) is that it is a essentially virtual intranet -- a tailnet -- that connects your devices
no matter where they are. There are also some other useful services and it has a free tier.

The tailnet is a subnet with a DNS name like somename.ts.net. The name is assigned to you, you cannot choose it.  I would have liked to have  a more personal name. 

### How I use Tailscale:

*   VPN
*   Simplified SSH access on mobile devices
*	Hosting internal applications behind real https certificates.
*   VPN for cloud machines

My usage is connected to having a home lab.  I have machines running Home Assistant, Proxmox and a one-node Kubernetes cluster. If you don’t have a home lab or machines you need to reach, then you don’t need Tailscale.



### A better VPN 

I have a home network and a router with good VPN support, but I mosly use Tailscale to reach my home machines with SSH, RDP or HTTP(S) and more. 

Another use case for VPNs is accessing geo-restricted content when traveling abroad. Tailscale supports this through exit nodes, which routes
all your traffic through a device on your home network.  I use exit nodes only when I want to pretend to services that I am at home. 
I have a homelab running 24/7 so setting up and exit node is doamble. If you have an Apple TV, it can also act as an exit node, which is a neat power saving option.

### Tailscale SSH

Tailscale SSH takes over the SSH protocol on your tailnet and removes the need to manage SSH keys. The idea is simple: if you’re authenticated on your tailnet, you’re already trusted.

For traditional setups, I use 1Password to manage SSH keys on my computers. However, handling 1Password SSH keys on phones and tablets is much less convenient.
Tailscale simplifies this by removing the need to have SSH keys on devices connected to your tailnet. 
It took a while before I understood how Tailscale SSH worked, but now I think it is my favorite feature that makes it management simpler overall.

### Tailscale Serve, Services and Funnel

If you run your own applications, Tailscale makes it easy to expose them inside your tailnet.
With Tailscale Serve, you can expose an app behind a clean HTTPS URL for internal use. This is possible in other ways but Tailscale makes it easier. 

You can use the Tailscale ingress controller to expose services to your tailnet for your Kubernetes cluster.

For a developer that has a homelab, then tailscale allows your apps to look more professional with a clean URL and HTTPS.

For applications on the tailnet you can also let Tailscale handle the authentication and access control - this isn’t very useful in my network
since only two people use it. 

### VPN for cloud machines

Cloud VPN solutions exist, but they often cost money or require more setup. Tailscale gives me secure access without exposing public IPs


Tailscale also have support for ephemeral nodes, so that you can connect the default GitHub Actions runners to your tailnet.



### Summary

It is rare to see a product that has so many services that I find useful. Tailscale solves real problems me, and the free tier covers everything I need.
