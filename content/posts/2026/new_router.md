---
date: '2026-10-29'
title: 'Issues When Upgrading My Router'
tags: ["Home IT"]
---

Yesterday my UniFi router stopped working. The failure was a bit unexpected, but there was a newer model available, and I used this as an excuse to upgrade to a newer and better version. That should not take too much time, right?

UniFi routers can back up their configuration, but I hadn’t used that feature. Instead, I decided to start from scratch so I would know my own setup.

## First issue – Re-adopting all my UniFi devices

Not really a problem, but if you don’t disconnect your UniFi controller properly, then you must reset all devices to re-adopt them to the new router. It is doable, but I found out I had 5 devices in my home network, and not all were easily accessible.

## Second issue – Network address spaces and fixed IP machines

My Proxmox server had a fixed IP address on the old router’s `192.168.1.1/24` network. The new router used `192.168.0.1/24` and without a route between the networks there was no way of getting to the server. I had used a fixed IP because that is the recommended setup for Proxmox servers.

Why not just add a network for `192.168.1.0/24`? That was my next idea, but the UniFi router rejected it because it overlapped with the upstream address range. My ISP's upstream gateway had suddenly placed me behind NAT, handing my router an IP in the `192.168.1.0/24` range on the WAN side.

To access the Proxmox server, I connected it directly to a spare switch alongside a laptop, configured the laptop with a manual IP in the old `192.168.1.x` subnet, and accessed the web console to update the server's network configuration to match the new LAN.

## Third issue – Workarounds for double NAT

Until this swap, I had been able to host services through my public IP address, with the router updating my Dynamic DNS settings. My Internet provider usually assigns me a new IP address when I reboot the router, but this was the first time I found myself behind an additional layer of NAT (double NAT).

Exposing local ports to the internet isn't ideal from a security standpoint anyway, so I used the opportunity to shift Home Assistant and internal services onto my Tailscale tailnet. I still need an externally reachable endpoint for certain Home Assistant callbacks (like notifications when the washing machine finishes), which I plan to route via a Cloudflare Tunnel or Tailscale Funnel.

*(After a few more router reboots, my router had its own IP address again, i.e., no longer behind a NAT.)*

## Lessons

- Things are never as easy as you think, especially if you have not done it before.
- External forces can create extra obstacles.
