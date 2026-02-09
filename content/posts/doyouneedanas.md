---
date: '2026-02-09'
title: 'Network Attached Storage: Replacing the Synology box'
---

After more than a decade of running Synology NAS devices in my home, I'm making a significant change to my setup. This post explores why and what I am will be doing.

## Why Have a NAS?

I've had multiple Network Attached Storage (NAS) devices in my home over the last 15 years - Synology boxes for more than 10 years. A NAS can serve many needs like:
*   It can replace OneDrive, DropBox, iCloud, Google Drive. 
*   It can host your media
*   Automatic backups of computers
*   Depending on the NAS, the more capable Synology supports lots of applications for domain management, office work, and run Docker containers.
*   It can provide disks to other machines using iSCSI

and more that I have not explored.

## The Problems

The maximum capacity I had was 15 TB, and that is too much - you become a data hoarder. Just dump everything on the NAS and don't think about the structure. My problems include:

*   Finding stuff is difficult without structure. I did not have a good structure
*   Many spinning disks running at 24x7 is visible on the electricity bill
*   As the Synology runs lots of services, you become afraid of touching it in case something stopped working. This is not good for potential disaster recovery
*   Backup of the Synology is difficult

## The New Plan

The 10 year old Synology box will no longer get software updates from Synology - I am not complaining as 10 years of updates is very good. But it's an opportunity for me to change things. The plan is:

* All services (databases, applications) will run from a power efficient NUC with an SSD. Apps and services will run from Proxmox, Docker, k3s. 
* I will also have a backup NUC where I can experiment - and test backup and recovery scenarios
* Maybe attach an external USB drive that hosts the photos and media for Immich, Jellyfin, Calibre. This should hopefully be in suspended mode when not used (i.e. most of the time)
* I will take away the extension cabinet on the NAS and only use it as a fileshare with Wake On Lan

## Expected Benefits

I hope this will give me better structure on my files, lower electricity bill, faster databases and applications.

