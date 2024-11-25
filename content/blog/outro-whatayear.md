---
title: "What a year..."
date: 2024-11-17
draft: false
tags: ["Dev"]
description: 'Looking back to the learnings of this year'
summary: 'Looking back to the learnings of this year'
url: 'this-year-was-crazy'
---

One of the most interesting concepts Ive learn this year:

1) **bikeshedding** 
2) **show your work**
3) **finish what you start**


Most interesting things ive completed.

A very **impactful video** I saw:

<!-- 
{{< youtube id="v=KSaS9m8O2Rc" autoplay="false" >}}
-->

{{< youtube "KSaS9m8O2Rc" >}}


With this channels: https://www.youtube.com/@TheDiaryOfACEO

And cool **food for thoughs** on these posts:

* https://www.nickgracilla.com/posts/stop-doing-a-place/

## Webs

{{% steps %}}

### Webs101

This is the first step.

```sh
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" 
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1313
#hugo server --bind="0.0.0.0" --baseURL="http://100.104.143.77" --port=1319
```

### Webs with AI

This is the second step.

### CMS for SSGs

* DecapCMS

### Get Better at Webs

* https://stateofjs.com/en-US
* Web Analytics: with Umami or Tianji

{{% /steps %}}


{{< details title="Python is the most popular language - Again 📌" closed="true" >}}

- **Python** has surpassed **JavaScript** as the most-used language on GitHub, largely due to the growing focus on **data science** and **machine learning**.
- There has been a **59% increase** in contributions to **generative AI** projects, showing the rise of AI-related work on the platform.
- **1.4 million new developers** joined open source globally, with most contributing to **AI and commercially backed projects**.
- Python's **simple syntax** and strong capabilities in **data handling** have made it especially popular with newcomers, particularly those entering the **AI field**.
- As a feature of **Linux distributions**, Python is easy to access and commonly used to create **desktop applications** with frameworks like **Qt** and **GTK**.
- **Jupyter Notebooks** experienced a significant surge in usage, thanks to its adoption for **AI/ML** tasks.
- Despite the **hype** around **Rust**, its usage still lags behind Python, JavaScript, TypeScript, and Java.
- The rise in **Python projects** may also be fueled by **GitHub Copilot**, which aids developers working on **AI/LLM** projects.
- **India** is expected to surpass the **USA** in the number of developers on GitHub sooner than anticipated.

{{< /details >}}


## Servers

{{% steps %}}

### Better SelfHosting

With this post and this script


### Doing Better with Pi's

I got an additional **Pi4** (this time 4GB Ram, 64 bits) and was helpful to:
* Explore Computer vision
  * With a RPi Camera - https://jalcocert.github.io/JAlcocerT/raspberry-pi-camera-setup/
  * And a DJI Drone that can be controlled with python - https://jalcocert.github.io/JAlcocerT/dji-tello-python-programming/
* Tinker with VPNs, Wireguard and Wifi2Eth bridge


### Built a new PC!

* The x300 - https://jalcocert.github.io/JAlcocerT/asrock-x300-home-server/
* And learnt more about benchmarks 

{{% /steps %}}


{{< details title="Starting with a RPi-101 | version 2024 📌" closed="true" >}}

* Get an OS for the RPi - https://jalcocert.github.io/RPi/posts/getting-started/
  * I suggest BullsEye/Debian11
  * I got some docker image issue with some [IoT Project](https://jalcocert.github.io/RPi/categories/iot-data-analytics/) 
    * Was unable to install the Python sensor dependencies with Bookworm (strange, I know)

```sh
lsfblk -f #check whats the SD Card to install the OS
sudo umount /dev/sda1
#sudo lsof +f -- /dev/sda1 #whats using the partition?
```

* Use the **SelfHosting Script** - https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/

```sh
curl -O https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh
#nano Selfhosting_101.sh #MAKE SURE YOU UNDERSTAND WHAT YOU WILL BE RUNNING

chmod +x Selfhosting_101.sh
sudo ./Selfhosting_101.sh
```

* Get to know the relevant private IPs of your Pi with:

```sh
ifconfig
#ifconfig eth0 | grep "inet " | awk '{ print $2 }' #if ETH Connected
#ifconfig tailscale0 | grep "inet " | awk '{ print $2 }' #for Tailscale
```

**Optional** - Save the OS image and share it with the torrent for others.

Normally the RPi team keeps them [here](https://www.raspberrypi.com/software/operating-systems/), with links pointing to [this repo](https://downloads.raspberrypi.com/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2024-10-28/), but just in case!

```sh
wget https://downloads.raspberrypi.com/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64-lite.img.xz.torrent
```

{{< /details >}}


{{< callout type="info" >}}
You can share with others the RPi OS Image via Torrent [with Docker, QBitrorrent & VPN](https://fossengineer.com/selfhosting-qBittorrent-with-docker-and-VPN/)
{{< /callout >}}

{{< details title="Better Server Management and Networking 📌" closed="true" >}}

* I got one of these [portable 4g usb routers with sim - OLAX-U90](https://allegro.pl/oferta/modem-router-4g-lte-wifi-olax-car-audio-hotspot-13172600554)
  * Once plugged in, you get a wifi SSID to connect to and manage the router: `192.168.0.1`
    * Credentials are written on the device & it will ask you about SIM pin
  * If a valid sim is plugged, you can see the SMS and also make it provide internet connectivity

![4g-OLAX-Portable-Router](/blog_img/mini_pc/4g-router.png)

* Networking with the Pi was improved
  * [Wifi2Ethernet bridge with Wireguard](https://jalcocert.github.io/JAlcocerT/raspberry-pi-networking/)

* And I learnt a few things about Servers with the [X300](https://jalcocert.github.io/JAlcocerT/asrock-x300-home-server/)
  * Better Benchmarks
  * Easier SelfHosting
  

{{< /details >}}

{{< details title="Crypto is...back? 📌" closed="true" >}}


{{< /details >}}


{{< details title="Not more, but better SelfHosting 📌" closed="true" >}}

* <https://Selfhosted.show>
* <https://selfh.st/>

{{< /details >}}

As always, a new year comes with **opportunities to get better**.

{{< details title="SuperProductivity... 📌" closed="true" >}}

* https://github.com/johannesjo/super-productivity

Super Productivity is a comprehensive to-do list app designed to enhance productivity through time management and tracking features.

- It integrates with platforms like **Jira**, **GitHub**, and **GitLab** to import tasks directly.
  
- The app allows users to **organize tasks** with sub-tasks, projects, and tags, promoting effective time management.

- **Timeboxing** and **tracking** features enable users to create detailed reports for time sheets.

- Built-in tools include:
  - **Break reminders** to promote healthy work habits.
  - An **anti-procrastination feature** to help users stay focused.
  - A **Pomodoro timer** for structured work sessions.

- The app emphasizes **privacy** by not collecting user data or requiring accounts.

- It's **free** and **open-source**, ensuring accessibility to all.

Conclusions: Super Productivity merges task management with time tracking, enhancing productivity without compromising privacy. 

Similar projects include **Todoist** and **Trello**, which also focus on task management but may require user accounts and collect data.


{{< /details >}}


Would be amazing **to be better at what matters the most for us**.

In the meantime...



{{< details title="Im getting better at photo/video edditing 📌" closed="true" >}}

* https://github.com/JAlcocerT/YT-Video-Edition

And to be investigated...

* https://github.com/k4yt3x/video2x
* You could also do it by applying UpScayl to each photogram of a video...

{{< /details >}}


{{< callout type="info" >}}
For Photos I am using [this kind of Hugo Gallery](https://jalcocert.github.io/JAlcocerT/creating-photo-centric-blog-with-hugo/) - <https://while.cyclingthere.com/>
{{< /callout >}}


## D&A

{{% steps %}}

### Big Data

* Got the chance to work with Google Cloud/GCP

> Domain Knowledge is always key - https://jalcocert.github.io/JAlcocerT/telecom-concepts-101/

### Cloud

This is the second step.

### Python is Easy!

* Environments are not a secret anymore 
  * https://jalcocert.github.io/JAlcocerT/guide-python/
  * https://jalcocert.github.io/JAlcocerT/guide-python-PySpark/

### Cool AI Stuff with python

{{% /steps %}}




## Stop Coding as in 2023


{{< details title="AI Asisted Dev Tools...Codeium? Copilot?Aide?Cursor...? 📌" closed="true" >}}

{{< /details >}}




{{< details title="AI Asisted Web Search... 📌" closed="true" >}}

Perplexity? Or **Perplexica**?



{{< /details >}}

---

{{< details title="Maybe next year... 📌" closed="true" >}}

**Go**

Go has become a popular language due to several key strengths that align with the needs of modern software development. Here's why:

- **Performance**: As a compiled language, Go provides high execution speed, making it ideal for performance-critical applications.
- **Concurrency**: With built-in support for concurrency through goroutines and channels, Go excels in managing multiple tasks simultaneously, which is essential for scalable systems.
- **Simplicity**: Go's minimal and clean syntax reduces complexity, making it easy to write and maintain code.
- **Type Safety**: Static typing in Go catches errors during compilation, reducing the chance of runtime issues and ensuring more reliable code.
- **Tooling**: Go has a powerful standard library and extensive third-party tools that help developers build efficient and maintainable applications.

The popularity of **Go** has been further driven by the rise of **Kubernetes**, which is written in Go and has become a core part of cloud-native environments.

### Summary of Transitioning to Go for Node.js Developers:

- **Go's Performance**: As a compiled language, it offers faster execution compared to interpreted languages like JavaScript.
- **Concurrency in Go**: Goroutines and channels allow for easy management of concurrent tasks, making Go ideal for scalable applications.
- **Simplicity**: Go’s clean, minimal syntax makes it easier to learn and reduces cognitive load.
- **Type Safety**: Static typing ensures fewer runtime errors, making Go more reliable.
- **Tooling**: Go provides an excellent set of libraries and tools that help streamline the development process.

For Node.js developers, learning Go can open doors to better performance and scalability, especially when working with cloud-native technologies like **Kubernetes**.

### Personal Takeaways for Node.js Developers:

- Embrace Go's **strict type system** and **error handling** methods to write robust code.
- Take time to understand **Go's concurrency model** to fully utilize its potential.
- Leverage **tutorials** and **community resources** to ease the learning curve.

In conclusion, Go is a great language for developers aiming to build high-performance, scalable applications, and it serves as a valuable addition to a developer’s toolkit. Similar languages, like **Rust** and **Deno**, also focus on performance and safety, making them worth exploring.

{{< /details >}}





{{< details title="Maybe next year...[Linux Stuff] 📌" closed="true" >}}

SysLinuxOS is a specialized Debian-based Linux distribution tailored for system administrators. 

It addresses the need for a robust operating system equipped with tools for networking and system management. 

**Key Features:**
1. Debian-based with extensive networking and systems tools pre-installed.
2. Supports multiple languages; offers GNOME and MATE desktop environments.
3. Includes a variety of security and monitoring tools for enhanced system management.

**Pros:**
- Comprehensive selection of pre-installed tools for system administration.
- User-friendly with improved hardware support and customization options.
- Regular updates aligned with Debian releases.

**Cons:**
- Desktop may appear cluttered due to numerous monitoring displays.
- May require additional configuration for specific user needs.

**Alternatives:**
- Ubuntu Server
- CentOS
- Fedora Server

SysLinuxOS provides a solid foundation for system administrators, but users should be aware of its potential clutter.


{{< /details >}}

