---
title: "A closer look to GCP"
date: 2025-02-15
draft: false
tags: ["dev"]
summary: ''
description: 'Learning more about GCP. Compared with other clouds.'
url: 'understanding-google-cloud-platform'
---

## Google Cloud Platform

### Big Data with GCP

#### Big Query

Simply speaking, BQ *is just [SQL](https://jalcocert.github.io/JAlcocerT/sql-data-analytics/)*.

But its actually much more than an interface to write your SQL queries.

### Compute Engine

If you are into linux, CLI and so on, probably this is the service you have heard of.

Sometime ago, I used GCP CE free tier to tinker with their VMs.

* https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#gcp

#### Other Clouds vs GCP CE

#### GCP CE vs SBCs

Before going into the cloud, I got familiar with linux thanks to a raspberry Pi 4.

But there are other single board computers out there, so far I tried:

1. Raspberry Pi 4 2/4GB
2. Orange pi 5 8GB 

{{< cards >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/minipc-vs-pi/" title="Orange vs Raspberry" image="/blog_img/hardware/sbcs-x13.jpg" subtitle="Battle of Pi SBCs" >}}
{{< /cards >}}

If you are wondering if you need a Pi or a MiniPC, you can have a look to [this](https://jalcocert.github.io/RPi/posts/minipc-vs-pi/).

Most SBCs (not all) are ARM based CPUs and we will be seeing more and more ARM adoption on cloud providers.


#### GCP CE vs Mini PCs

Not so long ago I was lucky to try the following mini PCs:

1. BMax B4
2. Asrock x300
3. [Firebat AK2 Plus](https://jalcocert.github.io/JAlcocerT/firebat-ak2-plus-minipc-review/)


{{< cards >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/minipc-vs-pi/" title="Asrock x300" image="/blog_img/hardware/bmax-b4.jpg" subtitle="Building a MiniPC as Server" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers" title="BMax B4 Review" image="/blog_img/hardware/bmax-b4.jpg" subtitle="Small Factor x86 MiniPC" >}}
{{< /cards >}}

Mini PCs tend to have x86 CPU architecture.

They tend to behave better if you plan to reproduce high resolution video, but in general are less efficient per W.

<!-- https://studio.youtube.com/video/4qLgpJc2Ghs/edit -->

{{< youtube "4qLgpJc2Ghs" >}}

## Conclusions



---

## FAQ

### Compute vs Cost

