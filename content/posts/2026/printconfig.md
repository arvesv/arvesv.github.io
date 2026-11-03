---
date: '2026-11-03'
title: 'Solving the "Ghost" Printer: Why Your Network Printer Keeps Disconnecting'
description: 'Fixing the recurring ghost printer offline issue in Windows caused by dynamic DHCP reassignments and WSD port drops.'
tags: ["Home IT"]
---

> **Update (3 Nov 2026):** Added guidance on resolving WSD port issues by switching to a Standard TCP/IP port.

Like many IT people I do technical support for friends and family. When I see the same issue in multiple households, it’s time to find a permanent fix rather than a quick patch.

## The Symptom

A printer connected to the local network suddenly appears "offline" or "disconnected" in Windows. Reinstalling the printer fixes it temporarily, but this isn't a sustainable solution for a household that just wants things to work.

## The Root Cause

When Windows automatically configures a network printer, two main issues often arise:

1. **Dynamic IP Changes:** Windows often maps directly to the printer’s current IP address. Most home routers assign addresses dynamically via DHCP (or SLAAC for IPv6). When the lease expires and the address changes, Windows loses the connection path.
2. **Unreliable WSD Ports:** Automatic setup usually defaults to a **WSD (Web Services on Devices)** port. WSD relies on multicast discovery packets across the local network. If the router or Wi-Fi drops these packets (or if the printer goes into deep sleep), Windows falsely reports the printer as "offline."

## The Solution

Here are a few ways to make the connection permanent and reliable:

* **DHCP Reservation:** Access the router settings to assign a static IP address to the printer's MAC address so its IP never changes.
* **Printer DNS Name:** Use the printer’s network hostname or local DNS name during Windows setup rather than its raw IP.
* **Standard TCP/IP Port:** In the printer's Windows port settings, add and switch to a **Standard TCP/IP Port** pointing to the printer's reserved IP address or DNS name. Unlike WSD, direct TCP/IP doesn't depend on multicast discovery packets.

These steps are easy for technical people, but not so obvious for non-technical users.

## Summary

If your printer keeps "disappearing", it’s almost always because its IP address changed or multicast drops are breaking its WSD connection. Give it a stable identity — either through DHCP reservation or DNS — and switch to a Standard TCP/IP port, and the ghost printer problem goes away.
