---
title: "Pixel8 Pro - Tricks with a New Android phone."
date: 2024-04-27T23:20:21+01:00
draft: false
tags: ["Dev"]
description: 'Tricks for Google Pixel 8 Pro. Together with Android Apps I enjoy.'
url: 'pixel-8-pro-tricks'
---

I Got a new phone recently.

It promises years of updates. 

Will it be better value for money than the Xiami PocoPhone F1 I got in 2019 for ~325$?

With the poco, I had available:

1. https://wiki.lineageos.org/devices/beryllium/

{{< details title="What about LineageOS 📌" closed="true" >}}

LineageOS is a free and open-source operating system for smartphones and tablets, based on the Android mobile platform. It is the successor to CyanogenMod, from which it was forked in December 2016. 

**What is LineageOS?**

* **Custom Android:** LineageOS is essentially a modified version of Android. It takes the open-source code of Android and adds its own customizations and features.
* **Community-driven:** It's developed and maintained by a community of developers, rather than a single company like Google or a phone manufacturer.
* **Focus on customization:** LineageOS is known for its focus on user customization and privacy. It often includes features that aren't found in the stock version of Android.
* **Extending device lifespan:** It can breathe new life into older devices that may no longer receive updates from their manufacturers.

**Is it Google compatible?**

* **Mostly yes:** LineageOS itself doesn't come with Google apps (like the Play Store, Gmail, etc.) pre-installed. This is because these apps are proprietary to Google.
* **You can add Google services:** However, you can usually install Google services and apps separately if you want to use them. This involves a process called "flashing" a Google package (often called "GApps") onto your device.
* **Some limitations:** While most Google apps work fine, there might be occasional compatibility issues with some Google services.

**What's the difference with Android?**

* **Stock Android vs. LineageOS:** Think of stock Android as the "vanilla" version of Android, while LineageOS is a customized version with added features and tweaks.
* **Key differences:**
    * **Customization:** LineageOS typically offers more customization options than stock Android, allowing you to tweak things like themes, icons, and system behavior.
    * **Features:** It may include features not found in stock Android, such as enhanced privacy settings, advanced theming options, and performance improvements.
    * **Updates:** LineageOS often provides updates for devices that are no longer supported by their manufacturers, extending the lifespan of your device.
    * **Bloatware:** LineageOS generally doesn't include the bloatware (pre-installed, unnecessary apps) that often comes with stock Android from manufacturers.
    * **Google apps:** As mentioned earlier, Google apps are not pre-installed on LineageOS, giving you more control over what apps you have on your device.

**In summary:** LineageOS is a popular choice for Android enthusiasts who want more control over their devices, more customization options, and a potentially longer lifespan for their older devices.

{{< /details >}}

2. https://devices.ubuntu-touch.io/device/beryllium/release/xenial/

3. It was also interesting https://grapheneos.org/usage

Leeeet's see.

But there would always be time for the Pixel 8 Pro and https://calyxos.org/docs/guide/device-support/

## Pixel 8 Pro - How to

### Connecting Pixel 8 Pro to HDMI

1. **Activate developer mode** by: 

Go to `Settings->About phone`, scroll all the way down and tap the Build number 7 times. After entering your screen lock, developer options will be enabled.

You can access them from `Settings->System->Developer options`. 

2. **Then, activate the settings** as per: https://www.youtube.com/watch?v=Z0ausMrkrik

you will need to restart and HDMI cable to enjoy :)

### Connecting a external drive

* How To [Transfer Photos & Videos From Flash Drive To Google Pixel 8 / 8 Pro](https://www.youtube.com/watch?v=iF0mmzGUSnc)


## Pixel 8 Pro Conclusions

1. **For photos it is a beast**. 

And I had a Huawei P30 Pro before.

It can make **8160x4590 photos**, which you can apply zoom with easy and not loosing much quality.

I also enjoy the night mode (but make sure to have a tripod).

2. For videos, its up to **3840x2160 (4k UHD) at 60 fps** and 63.6 Mbit/s bitrate.

> Get ready for some serious backup setup!

---

## FAQ

* See information about your Android Phone with [CPU-Info](https://play.google.com/store/apps/details?id=com.kgurgul.cpuinfo&hl=es) or with [DevCheck](https://play.google.com/store/apps/details?id=flar2.devcheck)

* CPU: Tensor G3 (4x Cortex A510 + 4xCortex A715 + 1x Cortex X3) - ARMv8a 64bits
* GPU: Mali-G715

> Making [Android better](https://jalcocert.github.io/Linux/docs/privacy/android/#better-android-os)

### Android Apps I love!

* [Obtanium](https://github.com/ImranR98/Obtainium) - Android Apps from its Source, [in FDroid](https://f-droid.org/es/packages/dev.imranr.obtainium.fdroid/)
* [F-Droid](https://f-droid.org/es/)
    * CAPod - It works for Airpods Pro and for Sony WF-1000XM3
    * Weather
    * [OrganicMaps](https://f-droid.org/es/packages/app.organicmaps/)
    * Sound [Recorder](https://f-droid.org/es/packages/com.danielkim.soundrecorder/)
    * [Ultrasonic](https://f-droid.org/es/packages/org.moire.ultrasonic/)
    * [Aegis 2fa](https://f-droid.org/es/packages/com.beemdevelopment.aegis/)
    * [Mullvad](https://f-droid.org/es/packages/net.mullvad.mullvadvpn/)
    * [TailScale](https://f-droid.org/es/packages/com.tailscale.ipn/)
    * [Syncthing](https://f-droid.org/es/packages/com.nutomic.syncthingandroid/)
    * [Element](https://f-droid.org/es/packages/im.vector.app/)
    * [RSS - Wallabag](https://f-droid.org/es/packages/fr.gaulupeau.apps.InThePoche/)
    * [RSS ReadDrops](https://f-droid.org/es/packages/com.readrops.app/)

* [2FAS](https://play.google.com/store/apps/details?id=com.twofasapp)
* [Bitwarden](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)


### Running Windows on Android

* https://github.com/brunodev85/winlator


### Other Android Stuff

You can also **emulate Linux inside Android**, like I did [with Termux, here](https://jalcocert.github.io/Linux/docs/privacy/android/#how-to-use-linux-on-android-with-termux).