---
date: '2026-09-15'
title: 'Agentic develoment - September 2026 edition'
tags: []
categories: []
---
I sometimes write these summaries to document my thoughts on AI agents — and to have something to look back on
(and probably cringe at) in the future. The last [update was in May](../moreaidevelopment) and a few things have changed
since then:

-	I switched to Google Antigravity from GitHub Copilot after receiving a one-year Google AI Pro subscription
-	The frontier models are good, and have gotten a lot better over the last year. Some are probably better than others but they have all been 
good enough for my tasks. I don't think I could tell the models apart based on their output.
-	We are moving from AI-assisted pair programming towards agentic development, basically relaxing how much we supervise the agent. 



### The journey to AI Agents
> I have seen a “maturity” spectrum of AI Agents adoption on the internet:  
> **Code completion → Pair programming → Agentic development**


I have been doing pair programming with coding assistants for a while, where you are in the loop.  Agents work means more independent AI.
I was initially sceptical to letting agents work on their own as I thought that if I was not in the loop, then I would not learn. 
But I trust the agents more and more, and don't review as much as before so I guess I am using more agentic development.

It has been a while since I have looked at for example build pipeline failures. I basically tell Antigravity to fix the GitHub Actions error,
and so far it has been successful.  I read the summary, and refresh tokens or access if that is needed, but I have not written GitHub Actions YAML for a while 
and I think that is a good thing.

And AntiGravity and GitHub Copilot identifies as AI Agent Platforms so I guess I am developing with agents now.


### Models are getting better

The Google AI subscription limits the models I can use, but this does noe feel like a problem as Gemini 3.8 Flash is pretty good.
It has done all the things I told it, I have not seen any erros, but some design decisions were different than mine.


When the AI agent struggle, then it is often caused by me. Example: I told it to do something and gave it an
access token that did not have all the needed rights. The Agent iterated multiple times without solving the issue, until I
looked at it and realized my error.

Maybe agents could give better feedback to humans when we cause problems.


I have not yet run out of tokens included in the Google AI Pro subscription so I think that part is pretty generous. But Google
is the most restrictive about using the subscription tokens in other products like Hermes, Pi og OpenClaw so I am missing out in that area.




### Using Agents for other things

On social media I saw different people say they had used AI agents to configure their Unifi network so I
[tried it](../moreai) with good results. I later used it to review machine setup, suggesting how to free more disk space.
I have asked Antigravity to convert oddly formatted audio files to MP3. I could figure out the arguments to [FFmpeg](https://ffmpeg.org/)
but I am glad I don't have to.

AI agents are definently useful beyond software development, but access control needs more work.

### Agent experiments

I have  started a couple of experiments to see if I can get more value from agents.

- Use [Obisdian](https://obsidian.md/) for notes, as the notes are stored as agent friendly markdown files. Give the agent
access to the Obdisdian folder and ask it to clean up an structure the notes. Hopefully if I get enough notes in there the agents will
be able to extract some usefull information.
- I have a folder where I run all the configurations using agents. And have the AI write logs that the future AI can learn from. I don't
know if this is a good idea, but I hear about self improving agents and why not try it.



### Thoughts

I see I can get more value out of agents, not limited to software development. 

Agents makes it easier to do complex things (in code, in machine configuration), but is the complexity needed?  For example I used and agent to
configure my home network to best practices, but maybe Unifi could have simplified the UI and made it easier to configure the network in the best way.

My major use cases for agents:
- Explaining things
- "Getting the details right" when I use tools or libtaries that I don't use too often.
- Reviewing and improving stuff
- Writing code
- One-shot new disposable projects for experimenting









