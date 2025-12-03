---
date: '2025-12-03T18:40:45+01:00'
title: 'Smart Home frustrations'
---
Smart Home stuff is complex. This is some things I learned the hard way.

## Grouping devices and group names

There are two types of smart devices, like Alexa, Siri, Google Home that talk to humans. And there are things/apps/services that controls devices, like Hue, Netatmo and Roborock. Almost all of them can manage groups of devices. You do want to have the human facing devices managing the groups with the generic/easy names. 

Example. Philips Hue defines a group "living room" for lights in the living room. You connect Alexa connects to Hue to get voice control, and Alexa will the automatically import/reflect "living room" but you can't non-Hue things to it.  I have a policy that only the human facing devices (Alexa, Google Home, Home Assistant) uses generic terms like "living room".  If Hue need a group for the lights in the living room, then that group can be called "Hue - Living Room". The Alexa group "living room" can include the group "hue - living room" and potentially other thins.

## Communication between devices is difficult - Just a fact of life

Many new devices require internet services to work. Some devices don’t integrate, like my tube leds and Home Assistant. They both talk to SmartThings so I use that as a middleman. But this is a complex solution. 

Accept that running a Smart Home will not always work, and it will require time.

## Hubs are not equal

In most cases you need a Hub to manage your stuff. A Hub works best (more features/easier setup) within it’s own ecosystem. The new standards thread/matter aims to improve this, but the world is not there yet.   An example of this is that Home Assistant can only turn on or off my bathroom light, but the dedicated app can adjust the dimming.

## Home Assistant

I am running Home Assistant as it is open source and hackable. I don't know how well other newer Hub's work. I also have Alexa and Google Home and Siri for voice commands. 


## In Short:
* For learning and customization: Go for it (expect to dedicate time).
* For maximum reliability/simplicity: Try to stay within one ecosystem.
* Or wait for future improvements

