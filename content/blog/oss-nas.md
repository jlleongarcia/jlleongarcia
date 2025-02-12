---
title: "Which OS for a NAS?"
date: 2025-03-17
draft: false
tags: ["Gen-AI","Python","Dev"]
summary: 'Testing Operative System for a NAS'
url: 'os-for-nas'
---

Ive been pretty much confortable with these OS:

1. Ubuntu
2. Zorin OS
3. Garuda Linux (with this one you unlock the superpower of saying: I use Arch, btw)


Time to try something new, getting ready for a **network attached storage**:

* OpenMediaVault (OMV)
* Synology

### Tailscale

```sh
tailscale status
```

{{< details title="How to Setup Tailscale DNS 📌" closed="true" >}}

TBD

{{< /details >}}

### Benchmarks

```sh
sudo apt install hardinfo
```

**Testing the Memory**

```sh
sudo apt install hwinfo
hwinfo --memory

sudo apt install sysbench
sysbench memory run
```

> The x13 got ~8164 MiB/sec and the Pi 4 4GB ~175MiB/sec (x46)

Your server *most likely* will be in between.

---

## Conclusions

At the time of writing, my **energy costs** are ~0.28$/Kwh


### Better PKG management in Debian

From time to time you will need to make some clean up to keep things perfect.

Are you getting some error when doing `apt update`?

Then, just...

### Maintainance in Linux

1. https://github.com/oguzhaninan/Stacer

> GPL 3.0 |  Linux System Optimizer and Monitoring - https://oguzhaninan.github.io/Stacer-Web 


---

## Other 

You can check from time to time https://haveibeenpwned.com/.

They also provide an [API](https://haveibeenpwned.com/API/Key), which you would have to pay for.

### Cool Blogs Ive found recently

1. https://selfhosted.show/
2. https://selfh.st/
3. https://theselfhostingblog.com/
4. https://howitlooks.dev/
5. https://www.reddit.com/r/selfhosted/?rdt=43112
6. https://www.reddit.com/r/SelfHosting/
7. https://akashrajpurohit.com/blogs/?ref=nav
8. https://alternateoss.com/
9. https://star-history.com/blog/knowledge-management

### Interesting Software for Servers

https://github.com/moghtech/komodo

> 🦎 a tool to build and deploy software on many servers 🦎

<!-- https://www.youtube.com/watch?v=acDVwwLklas -->
{{< youtube "acDVwwLklas" >}}