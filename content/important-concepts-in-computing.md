---
title: "Some computing concepts described, according to Arve"
date: '2026-10-01'
hiddenInHomeList: true
---
My very limited list of important conputer stuff to know.

## DevOps

DevOps is an overused term and means many things to different people. In my mind it means putting most of the build/deploy processes in code. Some examples of
devops code is Dockerfiles and GitHub Actions workflows.

### Containers

I think most applications we run today are packaged in containers. You build a container using a Dockerfile and it it can run almost
anywhere. You can run container on your computer with Docker, Podman and other things. It runs in all the clouds.
Kubernetes is the most popular system for organising running containers on a cluster of machines.

### GitHub Actions

GitHub Actions is an example of a system for automating builds and deployments. It is not nessecarily great but it has a generous free quota. And if you
successfully deploy an application from a generic runner, then you might learn some secret management as well.

### Use tools like for automating configuring machines or cloud setup

Example: Use Ansible for machines and Terraform for Cloud Infrastructur of putting configuration in code.

## Security

### Session management for Web/Apps

Web Application can usually manage with Cookie based authentication. Public APIs, mobile clients or microservices should use OAUTH2/OIDC with short lived
JWT tokens.

### Identity providers

It is usually a good idea to use identity providers. I.e. social login (Google, facebook) or use a dedicated provider. Making a secure identity provider is hard.

### Public private key encryption

Try to know the basics. It is used in SSH, TLS and a lot of other things you use.

### Find your wany to manage secrets

There are many options. I use 1Password because I especially like the SSH key management.

## Cloud computing

### The hyperscalers

Microsoft Azure, Amazon Web Servcies, Google Cloud Platform and others allow you to rent almost any computing service.
If you need to run a service 24x7 it might be cheaper to own a machine, but renting makes sense if you need varies over time.
Be aware that managing cloud servcies requires knowledge and effort.

### The others

There are specialized companies deliverering a few services. I think  fly.io and Cloudflare devliver good services.

## AI or agentic coding

A good AI agent/assistant will make you a better developer as it can:

* Write code
* Remove obstacles (doing thing to would not have the time to di)
* Explain things

It will make everyone else better developers as well so the market for developers will change.
I think this means that you have to use AI, otherwise you will loose in the competition with
your peers.

There are moral problems with AI. But I don't think a single developer can afford not to use it.
