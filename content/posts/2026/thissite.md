---
date: '2026-11-18T21:01:55+01:00'
title: 'How and why I created www.arvesv.com'
description: 'How and why I built www.arvesv.com using Markdown, Hugo, GitHub Pages, PostHog analytics, Cloudflare Workers and D1, and AI agents.'
tags: ["DevOps", "Web"]
---

This site, like many personal websites created by technology enthusiasts, is probably over-engineered. The ratio of content to infrastructure is low. Still, the technology stack might be interesting to others, so here is a breakdown of my choices and the reasoning behind them

## The purpose of this site

The purpose of a blog is usually to spread the word about something. My primary purpose was to learn and get experience on running a blog both from the technical and the content side. You don't become good at something without actually doing the work. There is also a bit of self-promotion involved, but only if the site turns out reasonably well 🙂.

My requirements were:

- articles and their URLs must survive a switch of the hosting platform
- custom domain support, [arvesv.com](https://www.arvesv.com/)
- low cost and simple management
- room to experiment 

## Markdown - data portability for the future

I did not want to be dependent upon a service or a platform. Having the option to move to a different platform meant that my articles would have to be done in something platform independent. And for text that format is [Markdown](https://daringfireball.net/projects/markdown/). I did not want to use [WordPress](https://wordpress.org/) because it stores content in a database rather than as portable files.

## Static site hosting - cheap and simple

Having a web site that requires a database is more complex than just serving a bunch of files. Static hosting is often cheap or free and simple to manage. You can get it on [GitHub](https://github.com/), [Azure](https://azure.microsoft.com/en-us/products/app-service/static) and many other places. Various static site generators can transform Markdown files into a complete website.

Initially I chose [GitHub Pages](https://pages.github.com/) and the [Hugo](https://gohugo.io/) static site generator. The reason for GitHub Pages was that I was already on GitHub and it is free. I chose Hugo largely because it seemed popular and straightforward. I didn't know much about the alternatives at the time, but it has worked well so far.

## Initial version up and running, and the road to web analytics

At this point I had the site running at [www.arvesv.com](https://www.arvesv.com/) and it met my requirements. I wrote some articles about doing or fixing something, so that I could just send a link if anyone with a similar problem asked me. I think I have sent a link once.

I wanted to know more. Was anyone actually visiting the site? Does GitHub Pages offer any analytics? No. I looked at a few analytics platforms and tried [PostHog](https://posthog.com/). They had a free tier, and the implementation was simple. Just insert some JavaScript that sends page-view events to PostHog, and that allowed me to look at a dashboard and see that I had a few - fewer visitors than I could count on one hand -  each week.

PostHog also recommended that I use a [reverse proxy](https://posthog.com/docs/advanced/proxy) for the telemetry to work around ad-blockers. (I am not doing ads, but I do want real numbers for visitors.) Normally, a reverse proxy adds complexity and cost, but Cloudflare includes Workers in their free tier. Cloudflare sits in front of a significant portion of the internet's websites.

I set up a [Cloudflare Worker](https://developers.cloudflare.com/workers/) that proxied my whole site, and PostHog then revealed a few more visitors - it almost doubled the number of real daily visitors. And since Cloudflare can show the HTTP log it showed that there were scans of arvesv.com several times a day. Some are probably search engines and agents. Others appear to be scanning for exposed secrets, administrative interfaces, and vulnerable APIs. It is a bit scary, but we all know that the internet is not a safe place.

## Agents

[AI agents](/posts/2026/ai_sept_2026/) have become useful over the last year and I have used them to do a few things:

- Optimise the [GitHub Actions](https://github.com/features/actions) deploy pipeline. For example I now see the SHA of the commit that was deployed in the footer.
- Improve [Search Engine Optimisation (SEO)](/posts/2026/aibusywork/): The agent added and consolidated tags and descriptions, and set up a sitemap (which I then registered in [Google Search Console](https://search.google.com/search-console).
- Track unique visitors: Add a [Cloudflare D1](https://developers.cloudflare.com/d1/) database so the number of unique visitors could be displayed on the front page.

The text on this site is mine. While I trust agents to write good code, I don’t trust them with text (yet). But they are allowed to come with suggestions.

This site has become more than a place to publish a few articles. It has given me hands-on experience with static site generation, GitHub Actions, Cloudflare Workers, analytics, SEO, reverse proxies, databases, and AI-assisted development. And there is more to explore.

Would I make the same choices today? Mostly yes. Static hosting, Markdown, GitHub, and Cloudflare have kept costs close to zero while giving me opportunities to experiment and learn.

