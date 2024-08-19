---
title: "How to use iGPU's for local AI" 
date: 2024-08-15T23:20:21+01:00
draft: true
tags: ["Docker","Gen-AI"]
description: ''
summary: ''
url: 'ai-with-iGPU'
---

<!-- Doesn't ROCm support AMD's integrated GPU (APU)? #2216
https://github.com/ROCm/ROCm/issues/2216 -->

Having **AI usable by anyone** its not just avoid having [Generative Open Source Models](https://fossengineer.com/tags/gen-ai/) and F/OSS Software supporting.

It is also about the Hardware - WHERE the Models will be executed. And with this post my aim is to lower the required hardware expenses to make Gen AI Models run smoother.

In previous tutorials I focused on how to run with CPU, so that we dont need expensive Hardware. Today, Im showing you **how to run AI faster**, thanks to iGPUs, aka AMD APUs.

> Kudos to [Tech-Practice]() for sharing this.

## iGPUs for AI

<https://www.reddit.com/r/StableDiffusion/comments/15t6uct/run_stable_diffusion_without_discrete_gpu_i/>

https://www.youtube.com/watch?v=H9oaNZNJdrw

{{< youtube id="H9oaNZNJdrw" autoplay="false" >}}

<https://agieverywhere.com/apuguide/AMDAPU/APU>
<https://agieverywhere.com/apuguide/AMDAPU/APU_Linux#amdlin>
<https://www.youtube.com/watch?v=HPO7fu7Vyw4>

---

## FAQ

### Big Thanks

I am an using an **APU 2200g** to write this and yes, I came across a post on reddit who pointed to:

* This YT channel: <https://www.youtube.com/@tech-practice9805>
* And this project: <https://agieverywhere.com/>

Which resonates with the idea of this Site, FOSSEngineer and which tutorial have been helpful for me.

**Thanks https://github.com/ttio2tech/agieverywhere** ❤️

### How to asign VRAM to an AMD GPU for AI?

Generally, it depends on your Motherboard. You have to find **UMA Frame Buffer Side** option an enable it.

https://www.youtube.com/shorts/xsvTEzTirlQ

Popular GPUs: <https://store.steampowered.com/hwsurvey/videocard/>
CPUs: <https://store.steampowered.com/hwsurvey/cpus/>

### LLMs

<https://github.com/Mooler0410/LLMsPracticalGuide>


<!-- ### What can I use to run BIG AI Models?

* RunPOD
* MassedCompute -->

### Virtual Machines

* QEMU


* TERMUX

https://ugeek.github.io/blog/post/2022-03-25-termux-una-distro-linux-en-android-con-la-que-crear-tus-aplicaciones.html


### Servers

https://www.runpod.io/serverless-gpu
https://rundiffusion.com/