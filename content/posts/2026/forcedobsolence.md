---
date: '2026-08-20T08:20:27+02:00'
title: 'Forced Obsolescence'
---
I recently let AI review my Unifi setup (this will be a separate blog post). One consequence was that I
tightened security on my main network by enforcing WPA3. For older devices I already had
[a separate IoT](../../specialitnetwork) less secure network on 2.4 GHz and WPA2, so in theory
this should have been a simple migration.

In practice, it wasn’t.

Several IoT devices were still connected to the main network and didn’t support WPA3, so they had to be moved.
Modern devices are easy to reconfigure because they use Bluetooth Low Energy (BLE) for provisioning. Only
one of mine — the Withings Body Cardio — was new enough to support BLE but still old enough to lack WPA3.
That device moved over without much trouble.

The rest used the old method: creating a temporary Wi‑Fi network you connect to during setup. My affected
devices were an original Amazon Echo and some TP‑Link smart switches. I tried for a while to get the Echo
working, but the app no longer supports it directly. I found workarounds online, but eventually decided it
wasn’t worth the hassle.

I did manage to reconfigure the TP‑Link switches, but it was still a pain. Recently I’ve been buying
IKEA Grillplats smart plugs, and they connect instantly to Home Assistant using Matter over Thread.
They’re cheap (99 NOK), use only 0.5 W when idle — about 70% less than the TP‑Link switches — and
are easier to manage. So for convenience and lower power consumption, I ended up throwing away
the working TP‑Link switches.


Is there a lesson here?
*   Any configuration change can have unforeseen consequences.
*   Companion apps to smart devices may drop support for your model.
*   Increasing security is rarely a bad idea, but it can accelerate obsolescence.
*   It is better to do these changes on your own time, rather than as a result of external security exploits in the wild.

Was it the right decision to follow the AI’s recommendation? I learned something, I improved my network security, and I simplified my setup. But I also threw away devices that still worked.




