---
date: '2026-08-29T08:59:34+02:00'
title: 'Where AI - and people - can get trapped'
tags: []
categories: []
---


### Getting stuck in a loop

A typical workflow is:
1. Ask AI to make something
2. Test it
3. If it fails, ask the AI to fix it
4. Repeat…

Sometimes you get stuck bouncing between steps 2 and 3. Each iteration adds more patches, more complexity — but the underlying problem remains.


### You may need a redesign

When you end up in that loop, you need to break out of it before it uses too much human or machine cognitive capacity.
The right move is often to step back and challenge the premise of what you’re trying to do. In my experience, getting caught in a loop like this is a indication that you’re fighting the system.

Fighting the system is often a bad idea.


Instead, find the root cause and work with the system to reach your objective — even if that means adjusting your plan, your architecture, or your assumptions.

### Example 

An example from my homelab: I got a new machine that I want to run Ubuntu Server on.

My goal was that all machine configuration should be done using Ansible. This gives me repeatability, consistency, and simpler management. It was a "quality of life" objective to make life easier for future me.


The design was straightforward: one ansible user with passwordless sudo and one SSH key managed by 1Password. This works well once the user exists. But how do you set up the user initially?

I asked an AI to generate a “bootstrap” Ansible script that creates the ansible user. I tested it on a cloud VM first — it worked. When I tried it on the real machine, it failed with a timeout waiting for a sudo password. I pasted the error into the AI, it suggested a fix, it failed again, and I repeated this loop several times.

Eventually, I realized I needed to stop prompting and understand the actual failure mechanism.

For security reasons Ubuntu requires a interactive tty when entering the sudo password, basically blocking using a password for the Ansible “become” root feature. I tried to do something that was impossible without configuring the machine first. But the reason I wanted the “become” root feature was to configure the machine. The end result is that I readjusted the objective. All configurations should be Ansble scripts, except setting up the ansible user - that must be done manually.

The reason the script worked on my cloud test machine was that GCP sets up passewordless sudo for my default user.

These kind of confiuration can also be done using cloud-init, but that may be a project for another day.




