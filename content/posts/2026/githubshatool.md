---
date: '2026-04-29T20:45:16+02:00'
title: 'GitHub Actions SHA pinning tool'
tags: ["DevOps"]
---
We all know that we _should_ pin GitHub Actions that come from external repositories. If a repository is compromised, pinning to a specific commit SHA can prevent malicious code from accessing your secrets during a workflow run.

We also know that we rarely do this. My reasons were:

-	It adds extra work
-	SHAs is hard to read and verify
-	I assumed Dependabot did not work with SHA-pinned actions


After reading this [tweet](https://x.com/acolombiadev/status/2038990002609078399) (recommended reading), I learned that you can actually combine SHA pinning with Dependabot updates. The trick is to include the human‑readable version as a comment after the SHA.

At that point, the obvious question was: why not build a tool that formats this correctly? I had a few GitHub Copilot Premium requests left, so I let an agent generate it. The result lives in this [repository](https://github.com/arvesv/ActionsSHAPinner) and it’s published as my first  [npm package](https://www.npmjs.com/package/actionsshapinner) .


I use it myself, and it works for me.

Now the question is: Do you trust this random tool enough to run it?
