---
title: Arch Based Distros
type: docs
prev: docs/first-page
next: docs/Debian/docker
sidebar:
  open: false
---

Arch Linux is a popular, **rolling-release Linux distribution** known for its simplicity, customization, and minimalist design.

It follows a "do-it-yourself" philosophy, allowing users to build their Linux environment from the ground up.

* Arch's **package manager, Pacman**, provides easy access to a vast repository of software packages
* And the **Arch User Repository (AUR)** offers even more community-contributed packages.(not officially maintained by Arch Linux developers).

While Arch Linux demands a deeper understanding of Linux and requires users to configure many aspects of their system manually, it rewards users with a highly personalized and efficient computing experience. It's a favorite among Linux enthusiasts and experienced users seeking a lightweight and highly customizable operating system.

## WHY a rolling release?

* Continuous Updates: You’re always running the latest software versions without waiting for a new release.
* Less Disruption: No need to perform major version upgrades, which can sometimes require a lot of time and effort.
* Access to New Features: You can access new features and improvements as soon as they’re available.

{{% details title=" WHY a fixed release like Debian?" closed="true" %}}

* Stability: Software updates are thoroughly tested before being released, which can lead to a more stable experience.
* Predictability: You know when major releases will occur, allowing for better planning.
* Long-term Support: Some fixed-release distributions offer long-term support (LTS) versions, which receive updates and security patches for an extended period.

{{% /details %}}

## Ways to Manage Packages in Arch

* [Flatpak](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#flatpak)
  * Yes, Flatpak is a universal package format! Feel Free to explore them at [FlatHub](https://flathub.org/) and install them in Arch Based just like you [would in Debian](https://jalcocert.github.io/Linux/docs/debian/content_creation/#audio-editing-in-linux).
  * Dont Forget to leverage Flatpak with **[Warehouse](https://www.linuxfordevices.com/tutorials/linux/install-setup-warehouse-flatpak)** or with [Flatseal](https://www.linuxfordevices.com/tutorials/linux/manage-flatpak-app-permissions-with-flatseal )

* [Nix](https://jalcocert.github.io/Linux/docs/nix/)
  * And [installing common Apps with NIX](https://jalcocert.github.io/Linux/docs/nix/fav-apps/) is as simple as one command.

* [Pacman](https://jalcocert.github.io/Linux/docs/arch/garuda/#pacman---garuda-package-manager)

> Here you have [**this Gist**](https://gist.github.com/JAlcocerT/9865a045b2b86adb41fad71e4beddc06) with some usefull installs on Arch.♻️*There are similar ones for [Ubuntu](https://gist.github.com/JAlcocerT/197667ec5ec0da53e78eb58c4253a73f), even [Windows](https://gist.github.com/JAlcocerT/76f22ddf886277ef2653f82898c634d8)* ♻️.

### SelfHosting with Arch

If you are used to deploy your favourite Apps with [Docker](https://jalcocert.github.io/Linux/docs/debian/docker/) (or [Podman](https://jalcocert.github.io/Linux/docs/debian/podman/)), congratulations, you can use them seamlessly with Arch as you do with Debian, mac or Windows.

{{% details title="Some examples" closed="true" %}}

* [Analytic Tools](https://jalcocert.github.io/Linux/docs/linux__cloud/analytics/)
* Local Gen AI - [LLMs](https://jalcocert.github.io/Linux/docs/linux__cloud/llms/)
* [SelfHosting](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/)

{{% /details %}}


### Benchmark with Arch

```sh
paru -S phoronix-test-suite
phoronix-test-suite benchmark smallpt
```