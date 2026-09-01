---
date: '2026-08-22T17:06:22+02:00'
title: 'Use AI Agents for More'
tags: ['AI']
categories: []
---
Until recently, I mostly used AI agents as context-aware search tools or partners for writing and coding. While valuable,
I struggled to see where else they fit into a practical workflow. I kept seeing claims that autonomous
agents could "run your business," yet rarely saw clear examples of what work they were actually doing.
If a process could already be automated with standard scripts, why involve an AI agent at all?

The turning point came when I saw several people using LLMs to review their UniFi network
configurations. They provided API credentials, and the agent returned
practical network optimizations. _I want to try this._

I set up a .env file with the connection details for my UniFi controller and prompted the agent: “Analyze my UniFi setup using the credentials in the .env file.”

It worked remarkably well. The agent identified obsolete firewall rules to prune, flagged misconfigured VLANs, and recommended security toggles I had overlooked.
I used to think AI agents were confined to raw text. They can evaluate nearly any environment they can reach—whether over HTTP, SSH, or direct API integrations. That shifted my mental model from "What can I ask an AI?" to "What systems can I safely grant access to?"

I now have a clean, AI-generated inventory of my home network with concrete steps to improve it—and a broader view of what agents can do.
