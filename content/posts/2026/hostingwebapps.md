---
date: '2026-02-23T13:54:38+01:00'
title: 'Web Application Hosting - My Way'
---
There are _many_  ways to host web applications. You can run them it in the cluod or on-premises, using everything from “copy some PHP files into a folder” to full container orchestration on Kubernetes — and everything in between.

### My Requirements

I optimize for deployments with:

* Zero downtime — users shouldn’t get kicked out during updates. This means the application must be stateless, with all state stored externally.
    (Also useful when I inevitably get millions of users 😊)
* Proper HTTPS
* Low operating cost
* Fast and easy to updates


Your requirements may be different, but mine are tuned for a homelab software developer who deploys often to a professional‑looking “test environment.”
Updates should be simple, quick, and not disrupt anyone using the app.


### The Small Computer in My Homelab

In my homelab I run an Intel N150‑based NUC with 16 GB RAM and an NVMe SSD. The CPU is a bit slow, but it’s very power‑efficient — around 7 W idle, which is roughly 100 NOK / $10 per year to run 24×7. The SSD keeps the database snappy; operations on a million‑row table take about a second.

The machine runs Ubuntu Server, and hosts:
* Docker 
    - Nginx Proxy Manager
    - Various databases like postgres, valkey and more
    - "Stable" web apps like [Immich](https://immich.app/)
* MicroK8S
    - Kubernetes registery
    - Web applications under active development
* And other software like [Tailscale], GitHub Actions agent, 

When deploying a new service, I typically:
- Package the web app in a container
- Create Docker Compose files for databases and supporting services
- Push the container image to the local Kubernetes registry
- Create a Kubernetes deployment and expose it as a NodePort
- Add a reverse‑proxy forwarder for the desired URL


To update an app I need to
* Rebuild and push the container
* Run database migrations if needed (not often)
* kubectl restart deployment ...

A full update takes about 45 seconds when no migration is required, and the whole process is easily scriptable.

### Questions

* Why not use cloud options like Google Cloud Run or Azure Container Apps?
These services are great — especially Google’s, which can be nearly free. Azure’s offering is less attractive because you often need a paid Azure Container Registry.
But the real issue is databases: managed cloud databases are expensive.

* Could this be run on a VM in the cloud?
Yes, I have run this setup on the cheapest [Hetzner](https://www.hetzner.com/) VM, and it works great. I have Ansible scripts that sets it up in minutes.

* Could I use Debian instead of Ubuntu, or K3s instead of MicroK8s?
Yes. I’ve tried both, and they worked perfectly.

* Could I use a Raspberry Pi instead of an Intel N150 based machine?
Maybe. A Pi is slower, but it should work. Use an SSD and make sure you have enough RAM. Both Docker and K3S runs on a Pi.





