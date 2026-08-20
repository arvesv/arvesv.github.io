---
date: '2026-04-13T09:32:55+02:00'
title: 'Solving the "Ghost" Printer: Why Your Network Printer Keeps Disconnecting'
tags: ["Home IT"]
---
Like many IT people I do technial support for friends and family. When I see the same issue in multiple households,
it’s time to find a permanent fix rather than a quick patch.

## The Symptom

A printer connected to the local network suddenly appears "offline" or "disconnected" in Windows. Reinstalling the printer fixes it temporarily, but this isn't a sustainable solution for a household that just wants things to work.

## The Root Cause

When Windows automatically configures a printer, it often maps it directly to the printer’s current IP address. (A consequence of using WSD or mDNS when trying to find the printer). However, most home routers assign addresses dynamically via DHCP for IPv4 and IPv6 (or SLAAC for IPv6). Because it is standard behavior for these addresses to change periodically, Windows eventually loses the "path" to the device.

## The Solution

There are two ways to fix this:

* _DHCP Reservation_: Access the router settings to assign a static IP address to the printer's MAC address.
* _Use the printer’s DNS name_: during the Windows printer setup instead of using the raw IP.

Both methods are easy for technical people, but not so obvious for non‑technical users. When I set up printers for friends and family, I try to do both so the setup stays stable.

## Summary

If your printer keeps "disappearing", it’s almost always because its IP address changed. Give it a stable identity — either through DHCP reservation or DNS — and the ghost printer problem goes away.
