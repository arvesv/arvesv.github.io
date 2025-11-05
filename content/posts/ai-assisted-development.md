---
date: '2025-11-05'
title: 'My Experience with AI Coding Assistants'
---

I use GitHub Copilot (Pro) and Google Gemini CLI. Do coding assistants help me develop faster, improve code, or cause other effects?

The way we use AI in development will continue to evolve. These are my current thoughts and experiences with coding assistants as of November 2025.
I expect to look back on this post and feel embarrassed - but that’s part of the journey.

I have used AI coding assistants in different ways, each with its own impact.

### Use of AI to explain code

This is one of the features I use most. AI explanations make it much easier to understand unfamiliar code. I still use Google Search and Stack Overflow, but less frequently now.

- Does this make me develop faster? **Maybe**  
- Does this make the code better? **Probably not**  
- Do I learn new things?: **Yes**

### Use of AI/LLM to review code

AI reviews usually surface things I have missed. The feedback is often useful but not always correct; it can miss context or suggest brittle fixes.

- Does this make me develop faster? **No** (reviews still take time)  
- Does this make the code better? **Yes** (when used well)  
- Do I learn new things? **Yes**

### Use of AI/LLM for small code and autocompletion

This was the original GitHub Copilot use case: better IntelliSense. It works well but the time saved is hard to quantify.

- Does this make me develop faster? **Probably**  
- Does this make the code better? **No**
- Do I learn new things? **No**

### Use of coding agents on an existing, long-lived project

I’m cautious when an agent touches a mature codebase. I have seen it introduce issues like:

- Add outdated dependencies (tools, NuGet/NPM packages, GitHub Actions)  
- Small mistakes (e.g., placing files in the wrong folder when updating a JavaScript library)  
- Generates code that’s harder to read or maintain; I’ve seen this a few times. Example: https://x.com/arvesv/status/1973004027144405470.

Custom instructions can help, but at the moment I let the agent do work in a separate folder or workspace. If I like the output, I manually type or paste the changes — there's no better review than retyping the code yourself. See also David Heinemeier Hansson’s perspective on AI-assisted programming: https://thenewstack.io/dhh-on-ai-vibe-coding-and-the-future-of-programming/

- Does this make me develop faster? **Maybe**  
- Does this make the code better? **Maybe**  
- Do I learn more? **Maybe**

### Coding agents for Greenfield and Disposable Projects

Agents are impressive at bootstrapping new apps and prototypes. They excel at throwaway or single-use projects: one-off data extraction scripts, quick prototypes.

- Will this make development faster: **Yes** (for greenfield/disposable projects only)  
- Does this make the code better: **Probably not**, but code quality is often secondary for throwaway work. The important stuff is does it work.
- Do I learn more: **Maybe**

### My current take on AI

AI-assisted coding is good tool for a developer. It’s a great sparring partner for learning, trying new approaches, getting inspiration or reviewing your code.

For "one off" projects "vibe" coding really works, as long as you can verify that the results are correct.

However, when agents modify established codebases they can make mistakes, and that makes me not trust them. I often end up typing the code myself, inspired by the AI-generated suggestions.
With better models, improved prompting, domain-specific instruction files etc I might start to trust the AI, but not now.


(This post has been reviewed by AI 🙂)