---
title: "How to use iGPU's for local AI" 
date: 2024-04-06
draft: false
tags: ["Gen-AI"]
description: 'Activating APU on Bios Setup to improve local AI generation.'
url: 'ai-with-iGPU'
---

<!-- Doesn't ROCm support AMD's integrated GPU (APU)? #2216
https://github.com/ROCm/ROCm/issues/2216 -->

Having **AI usable by anyone** its not just avoid having [Generative Open Source Models](https://fossengineer.com/tags/gen-ai/) and F/OSS Software supporting.

It is also about the Hardware - **WHERE the Models will be executed**.

And with this post my aim is to lower the required hardware expenses to make Gen AI Models run smoother.

In previous tutorials I focused on how to run with CPU, so that we dont need expensive Hardware.

Today, Im showing you **how to run AI faster**, thanks to iGPUs, aka AMD APUs.

> Kudos to [Tech-Practice](#big-thanks) for sharing this.

## Activating iGPUs for AI

<!-- https://youtube.com/shorts/xsvTEzTirlQ -->

{{< youtube "xsvTEzTirlQ" >}}


* https://www.reddit.com/r/StableDiffusion/comments/15t6uct/run_stable_diffusion_without_discrete_gpu_i/

* https://www.youtube.com/watch?v=H9oaNZNJdrw

{{< youtube id="H9oaNZNJdrw" autoplay="false" >}}

* <https://agieverywhere.com/apuguide/AMDAPU/APU>
* <https://agieverywhere.com/apuguide/AMDAPU/APU_Linux#amdlin>
* <https://www.youtube.com/watch?v=HPO7fu7Vyw4>

---

## FAQ

### Big Thanks

I came across a post on reddit who pointed to:

* This YT channel: <https://www.youtube.com/@tech-practice9805>
* And this project: <https://agieverywhere.com/>

I have tried this with a **APU 2200g**, also with 4600G and 5600G and it worked.

This tutorial has also been helpful for me.

**Thanks https://github.com/ttio2tech/agieverywhere** ❤️

### How to asign VRAM to an AMD GPU for AI?

Generally, it depends on your Motherboard.

You have to find **UMA Frame Buffer Side** option an enable it.

* https://www.youtube.com/shorts/xsvTEzTirlQ


According to Steam records:
* Popular GPUs: <https://store.steampowered.com/hwsurvey/videocard/>
* CPUs: <https://store.steampowered.com/hwsurvey/cpus/>

### LLMs

<https://github.com/Mooler0410/LLMsPracticalGuide>


<!-- ### What can I use to run BIG AI Models?

* RunPOD
( simplepod.ai)
* MassedCompute -->

### Virtual Machines

* QEMU

* TERMUX

* https://ugeek.github.io/blog/post/2022-03-25-termux-una-distro-linux-en-android-con-la-que-crear-tus-aplicaciones.html


```sh
sudo apt-get update
sudo apt-get install qemu qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager
```

qemu-img create -f qcow2 mydisk.img 10G
qemu-system-x86_64 -boot d -cdrom path/to/your/minimal.iso -m 512 -hda mydisk.img


Follow the prompts to install the OS. Since you are using a minimal ISO, the installation process will be CLI-based.

Once the OS is installed, boot the VM from the virtual disk image:

```sh
qemu-system-x86_64 -boot c -m 512 -hda mydisk.img

```



### AI on Servers

* https://www.runpod.io/serverless-gpu
* https://rundiffusion.com/