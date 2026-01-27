---
date: '2026-01-27T21:33:32+01:00'
title: 'Home IT - extra work'
---
It  started when I bought a new IKEA smart device that supports Matter over Threads. Getting this up and running with my
Home Assistant running on a Proxmox server should be easy, right? That was the original idea.

I ended up doing the following.
1. Buy new anteanna for Threads and try to access it from a VM on Proxmox.
2. I should probably upgrade Proxmox 8 to 9 before adding the anthenna?
3. I should do a backup of all VMs on Proxmox  (I am very glad I did this)
4. Start upgrade - it fails. It does not boot - probably caused by a combination of secure boot and unsigned drivers that the proxmox installer warned me about.
  I don't try to troubleshoot - I reinstall Proxmox 9 from scratch. This is actually a good thing, I got a few more settings proxmox settings right this time (better disk/filesystem)
5. Move the Proxtmox server - if I clean up the server, why not improve its location as well.
6. Restore VMs - this works very well.
7. Add antenna, try to pair the IKEA device - It fails


# Current status
* Does the IKEA device work - Not yet

* The Proxmox server is quicker and up to date
* Backup routines for Proxmox VMs are tested and works 
* Cleaned up the the real world location of the Proxmox server

Looking at comments from the Home Assistant community, I am not the only one with this problem and I think the community will solve the issue in the future. The problem is not something I could fix alone.

In some ways this project was a failure, I did not reach the orginal goal (yet). The goal was unrealistic (for now), but the project improved my homelab in significant ways. I am happy with the preliminary results. 









