---
date: '2026-05-18T16:14:54+02:00'
title: 'AI/LLM Assisted Development — May 2026 Edition'
tags: ["AI"]
---

I write these summaries to structure my own thinking about AI/LLM-assisted development — and to have something to look back on (and probably cringe at) in the future.

What has happened in the last 3–6 months
* AI/LLM prices are increasing
* Local and mobile models are surprisingly capable
* CLI-based AI tools continue to work extremely well
* AI/LLMs remain excellent for search, explanation, and learning
* A wave of buzzwords: skills, multi-agent, CLI, MCP, plan mode
* AI tools still make mistakes, especially in uncharted territory

### AI/LLM prices are going up
GitHub Copilot is changing its pricing structure this month. Anthropic and others are restricting the use of fixed-price subscription keys with third‑party tools like OpenClaw. The trend is clear: pricing will increasingly reflect actual resource usage — and it will be higher.

I don’t love higher prices, but I do like reducing waste. Aligning cost with compute usage is probably healthy for the ecosystem.

As a developer, I’ll likely adapt by reducing context size, giving clearer instructions, and working in smaller steps. This mirrors good engineering practice anyway: single responsibility, tighter focus, and more deliberate iteration.

### Local and mobile models
My phone has 12 GB RAM, and it can run several local models that are more capable than I expected. Smaller versions of Google Gemma 4 can write and explain code — not at frontier level, but good enough for React, F#, and general development tasks.

Offline AI-assisted development now feels realistic. I may eventually invest in a GPU/AI machine, but I’ll wait for the hardware market to settle. I’m curious how the on‑prem model marketplace will evolve.

### Command-line access to AI/LLMs
It’s been a year since Claude Code launched, and a CLI category of developer tools is here. I’ve used Copilot CLI, Gemini CLI, and Pi.dev for tasks like:
* Generating code that I review
* Explaining what code does
* Reviewing my code and suggesting improvements

AI/LLMs are fantastic for experimentation, prototyping, and throwaway projects. Those have never been easier.

For real projects — where mistakes matter — progress is slower. I want code that humans can understand so we can debug it when things break. That requirement hasn’t changed.

### LLMs as search engines and learning tools

AI/LLMs are excellent at explaining code, error messages, and unfamiliar concepts. If you’re stuck, asking an LLM usually gives a decent answer.

Code review from an LLM can also be educational — but it’s easy to get trapped in satisfying a pedantic AI instead of delivering value to real users.

### Agents, multi-agent systems, MCP, CLI, OpenClaw, and other buzzwords

There’s a lot of work happening around connecting AIs to tools. MCP was the first wave, but now models are also good at using command-line tools, especially when described in a “skill” file. I hope the CLI trend continues — it’s portable and works outside development contexts.

I’ve experimented with OpenClaw as a personal assistant, but without connecting it to anything important. The potential is huge, but I haven’t yet found a practical, useful task to automate. The opportunity is definitely there.

There’s also a trend toward giving AIs “roles” (frontend, backend, QA, etc.) and having multiple agents collaborate. I’m not convinced this is the right direction. It feels like non‑developers trying to impose traditional team structures on AI systems without understanding their actual strengths.

### Can AI be trusted?
Not yet. I’ve seen too many mistakes.

Code is cheap. Battle‑tested code is still expensive.


### The current value of AI/LLMs developer assistance
Experiments, prototypes, and one-off projects are dramatically faster

General development is faster

Leaning stuff have never been easier

Battle-testing “real” code is still slow

We ship more — and we ship more bugs (Several tech influencers have noted the same trend)



