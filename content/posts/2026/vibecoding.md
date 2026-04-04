---
date: '2026-03-20T03:25:08+01:00'
title: 'Another Experience with AI Coding Assistants'
---

I watched the DHH's demo of the [Once](https://www.youtube.com/watch?v=yZankuDQQmw) deployment tool and where he vibe coded a demo app, and I figured I should try to do the same. Three hours and roughly twenty prompts later, I had a publicly available web app up and running.

It is written in ASP.NET, has database access, schema migrations,
zero-downtime updates, social login and a semi-generic system for reporting. It works -- and I didn’t write or modify a single line of code myself. The AI/LLM coding capabilities impressed me.  I could have built the same thing without AI, but it would have taken far longer.

My role was configuring the environment in Once, GitHub, and Google Cloud, then telling Gemini CLI to fix bugs or add features. As a developer, I understand how the pieces fit together, and I think that is important. I suspect a non‑developer would struggle to replicate the process.

Reviewing the generated code, there were a few things I would have done differently:

* It committed binary objects files to Git, before it fixed the gitignore file
* Lack of structure - all is lumped together  in a single project
* Code is repeated - I would have centralized date formatting, and table layouts in generic functions.

All the above is to make the code easier to understand for me, not for the compiler or the LLM/AI. Do I still need to care about that
if the LLM/AI creates all the code? At this point in time,I think the answer is yes. When things fail in strange ways the AI may not be able to help you, and the easier the code is to understand, the easier it is to fix.

Does AI make me a faster developer. Yes, for small project - small is defined as "fits in the LLM context window". I do not want to develop without it.

Next step: let's see if I can prompt the LLM/AI to structure the code in a way I find more readable.
