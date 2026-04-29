---
date: '2026-04-29T20:45:16+02:00'
draft: true
title: 'Githubshatool'
---
GitHub Actions SHA pinning tool

We all know that we should pin the GitHub Actions we reference from other repositories. If a repository is compromised, pinning to a specific commit SHA can protect you from malicious code gaining access to your secrets in a GitHub Actions workflow.
We also know that we rarely do this. There are a few reasons why I didn’t:
•	It requires extra work
•	The SHA is hard to read and verify
•	Dependabot does not work with SHA-pinned actions (I thought)
After reading this tweet (recommended reading), I discovered a way to combine SHA pinning with Dependabot updatability. The trick is to specify the human readable version as a comment after the SHA.

Why not create a tool that does this? I have a few GitHub Copilot premium requests remaining, so why not let an agent do the work. The result is https://github.com/arvesv/ActionsSHAPinner, which I’ve also published as an npm package: https://www.npmjs.com/package/actionsshapinner.

I use it, it works for me
Now you have to ask yourself: Do I trust this random tool enough to run it?
