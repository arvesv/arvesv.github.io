---
date: '2026-03-24T19:37:38+01:00'
draft: true
title: 'Learning React - Part 1 - Unlearing old stuff'
---
I have never been a UI person, but these days you have to know some React as most frontends are written in it. This is my journey to try to understand some React. I don't know how other people feel, but I need to understand at least the basics to be productive as a devceloper.

For a long time I only knew basic HTML. My knowledge was limited to ASP.NET Razor/MVC or Ruby on Rails. I thought that all apps generated HTML on the server side and returned it as  the response of the request. The Web server, written using a templating language and C#, Ruby or something
else like PHP generated HTML.

I had played a little with Agular, and liked databinding and calling server side functions, but that did not to change my point of view: Web application was mostly generated HTML pages on the server side.

React if different diffrently. You create the frontend separately in JavaScript/JSX/TypeScript and it handles the UI/HTML updates. It runs only on the browser. It can call WebApi functions but that only fetches the data, not any HTML formatting.

So my first lesson can be summarized: React apps are not UI and data bundeled together on the serer side. A React app is more like a "normal" app compiled separately that calles API when it needs to. It is compiled (npm build..) and and may be deployed separately from the backend.

That a React app is an "app" also affects authentication. The server sidee rendered app used cookies for session management. A Web app thar lives in a browser uses JWT auth flow for authentication.

This is my current understanding of React. Next time may say somthing about components and rouiting'
