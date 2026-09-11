---
date: '2026-09-11T10:53:25+02:00'
draft: true
title: 'Agentic develoment - September 2026 edition'
tags: []
categories: []
---
I sometimes write these summaries to document my thoughts on AI agents — and to have something to look back on
(and probably cringe at) in the future. The last [update was I May](../moreaidevelopment) some things have changes
in the last 4 months:

-	I switched to Google Antigravity from GitHub Copilot after receiving a one-year Google AI Pro subscription
-	The models are good enough so we know that can help, but should we trust them to do with real execution.
-	We are moving from AI-assisted pair programming towards agentic development, where the system can work with less supervision.



### The journey to AI Agents
> There is apparently a “maturity” spectrum of AI Agents adoption:  
> **Code completion → Pair programming → Agentic development**


I have been doing pair programming with coding assistants for a while, where you are in the loop.  Agents work more independently.
My initial feeling is skepticism as I don't want to be left out, but in reality more of my requests lately have been “agentic”.

For example if a GitHub Actions fail, then I will tell Antigravity to fix it. It will then use GitHub CLI to look at the logs,
pushes changes and verifies that the build finished OK. It also gives a report on what is done.

Both AntiGravity and GitHub Copilot identifies as AI Agent Platforms so I guess I am developing with agents now.


### Models are getting better

The Google subscription limits the models I can use, but this does noe feel like a problem as Gemini 3.8 Flash is pretty good.
It has done all the things I told it, I have not seen any erros, but some design decisions were different than mine.


When the AI agent struggle, then it is often caused by me. Example: I told it to do something and but gave it an
access token that did not have all the needed rights. The Agent iterated multiple times without solving the issue, until I
looked at it and realiused my error.

Maybe agents could give better feedback to humans when we cause problems.


I have not yet run out of tokens included in the Google AI Pro subscription so I think that part is pretty generous. But Google
is the most restrictive about using the subscription tokens in other products like Hermes, Pi og OpenClaw so I am missing out in that area.




### Using Agents for other things

On social media I saw different people say they had used AI agents to configure their Unifi network so I
[tried it](../moreai) with good results. I later used it to review machine setup, suggesting how to free more disk space.
I have asked Antigravity to convert audio files to MP3. 

AI agents are definently useful beyond software development, but access control needs more work.

### Agent experiments

I have  started a couple of experiments to see if I can get more value from agents.

- Use [Obisdian](https://obsidian.md/) for notes, as pages agent friendly markdown files. Then I give the agent
access to the Obdisdian folder and ask it to clean up an structure the notes. Hopefully if I get enough notes in there the agents will
be able to extract some usefull information.
- I have a folder where I run all the configurations using agents. And have the AI write logs that the future AI can learn from. I don't
know if this is a good idea, but I hear about self improving agents and why not try it.



### Thoughts

I see I can get more value of of agents, not limited to software development. 

But I also have some worries. AI gives us a simple way to do complex tasks. can let small prompts do much work, but all the needed information is already in the prompt. So instead of letting
AI give us a simple interface to a complex task, could we simply the task

But there is st







