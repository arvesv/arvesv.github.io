---
title: "Where Should You Run Your Web Application? It Depends."
date: 2025-11-11
author: "Arve Svendsen"
tags: ["deployment", "web development", "containers", "VPS", "DevOps"]
categories: ["Projects", "Infrastructure"]
summary: "Exploring deployment options for a web app with a focus on cost, speed, and learning."
---

I’ve built a web application—and now it needs a home. What should I deploy it to? There are many platforms to choose from, I decided to turn the deployment decision into a mini project with three phases:

1. **Design** the ideal platform and deployment process  
2. **Implement** the design  
3. **Learn** from the experience  

I’m usually skeptical of too much upfront planning—real-world constraints tend to surprise you—but I’m giving it a shot.

---

## 🧾 Requirements

Here’s what I need from the platform:

- Must support a web server and a database  
- Must allow zero-downtime deployments  
- Must be internet-accessible with HTTPS  
- Occasional downtime for patching is acceptable  
- Downtime due to hardware failure is fine—recovery should be reasonable  
- Monthly operating cost should be **≤ 6€** (e.g., Hetzner’s cheapest VPS)  
- Fast deployment turnaround—code changes should go live quickly  
- Code is hosted on GitHub. Deoploys should be possible both from GitHub actions and the local developer machine  
- This is a **learning project**, optimized for fast iteration and feedback  

---

## 🧱 Design Choices

### ✅ Containers

Containers offer consistent runtimes and portability. There is no reason to choose anything else.  


### ☁️ Scale-to-Zero Container Runtimes

Platforms like **Fly.io**, **Google Cloud Run**, and **Azure Container Apps** let you run containers that can scale to zero when idle. They also handle updates, load balancing, and HTTPS certificates.

**Pros:**

- Easy deployment  
- Managed infrastructure  
- HTTPS out of the box  

**Cons:**

- Cold starts can be slow  
- Longer deployment turnaround  
- Higher cost if always running  

These platforms are excellent—but for this project, I think there’s a better alternative.

**Fly.io** deserves a shoutout: it’s affordable and can build your container directly, eliminating the need for a separate registry.

---

## Databases in the Cloud?

Hosting web apps in the cloud is cheap. Hosting databases? Not so much.

Managed databases come with replicas, backups, and high availability—and those features cost money. I don’t need them (yet).

Serverless databases exist, but startup latency is a concern.

---

## 🧑‍🔧 Self-Hosting on a VPS

The downside of self-hosting? You manage everything.

The upside? A **5€ Hetzner VPS** (4GB RAM, 40GB SSD) or even my **Intel N150 mini machine** can host multiple apps and databases.

There are tools that help you manage web apps on your own infrastructure:

- [Kamal Deploy](https://kamal-deploy.com)  
- [Uncloud](https://uncloud.run)  
- Local Docker + custom scripts  

You learn a lot by manually setting up an reverse proxy and running containers yourself.

**Kamal Deploy** works well, though complexity is growing as it adds features. I haven’t tried **Uncloud** yet, but it looks promising.

---

## Kubernetes

Given my requirements, I believe a small server where I install a one node "mini" Kubernetes is the best option. A machine with 4 GB of RAM can run **microk8s** or **k3s**, with enough power to host multiple apps and databases. I can run a local registry  can even run **Valkey** if needed.

- Kubernetes is made for running web apps with, it handles updates without downtime
- I can run a databases, redis etc.
- I will learn a lot of Kubernetes
- With a local build/registry on the Kubernetes machine the turnaround time (for code change to live) will be way faster than any other container based deployment. 

It will be a lot of work, but a lot of learing. Is this the best option for you? It depends.


I hope to revist this in the future with some benchmark numbers.

<<<<<<< HEAD

=======
This is not the full-package Kubernetes, I am only running one machine/node.

Kubernetes is made for running web apps with, it handles updates, HTTPS, and even databases. 
And with a local registry, then the turnaround time will be unmatched.
>>>>>>> e1dd6eb8e421dfad5ec1f97e6006200a81e61dbf
