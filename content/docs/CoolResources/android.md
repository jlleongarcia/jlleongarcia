---
title: Android
type: docs
prev: /docs/privacy/
next: docs/arch/
draft: false
---

## For Android Users

Android is based on Linux, but there are many great projects outside Google Store.

This is were **F-Droid** enters - you can [get F/OSS Apps](https://f-droid.org/en/packages/)

<details>
  <summary>Curious how to get some Android Apps? 🤘</summary>
  &nbsp;

* [F-Droid](https://f-droid.org/en/) -> F/OSS [Android App Repository](https://gitlab.com/fdroid/fdroidclient) 

* Audio recorder 
    * https://github.com/Dimowner/AudioRecorder
    * https://f-droid.org/en/packages/org.fossify.voicerecorder/

* Syncthing - https://github.com/syncthing/syncthing
* Nextcloud - https://github.com/nextcloud/android

* https://github.com/bitwarden/clients
* https://f-droid.org/packages/net.mullvad.mullvadvpn/

* PixelFed client - https://f-droid.org/app/com.h.pixeldroid {F-Droid}
* Matrix Element - https://github.com/vector-im/element-android
* Matrix Fluffy Chat - https://gitlab.com/KrilleFear/fluffychat

* Browsers: Firefox, Brave, Bromite, Kiwi

* Organic Maps - https://github.com/organicmaps/organicmaps
* MapsMe - https://github.com/mapsme/api-android

* Readrops (RSS) - https://github.com/readrops/Readrops - Android multi-services RSS client


* PhyPhox - https://github.com/phyphox/phyphox-android
* https://f-droid.org/en/packages/github.umer0586.sensorserver/

* Media - 
    * [Jellyfin](https://f-droid.org/en/packages/org.jellyfin.androidtv/index.html) - https://github.com/jellyfin/jellyfin
    * Client for Navidrome - https://gitlab.com/ultrasonic/ultrasonic
    * Substreamer
    * YT with: [NewPipe](https://f-droid.org/packages/org.schabi.newpipe/), [Clipious](https://f-droid.org/packages/com.github.lamarios.clipious/) or [LibreTube](https://f-droid.org/en/packages/com.github.libretube/)

</details>

* You can check more [here](https://brainfucksec.github.io/android-foss-apps-list#android-based-operating-systems) and [in the known repositories thread](https://forum.f-droid.org/t/known-repositories/721)

---

## FAQ

### How to send files to Android TV?

We can use [Local Send](https://github.com/localsend/localsend?tab=readme-ov-file#download), a F/OSS cross-platform alternative to AirDrop.

Install it with [FlatHub](https://flathub.org/apps/org.localsend.localsend_app):

```sh
flatpak install flathub org.localsend.localsend_app
```

And send that F-Droid APK to your Android TV - Then enjoy any of the apps available in there.

### How to Check Android Apps Permissions

Use the [Exodus App](https://github.com/Exodus-Privacy/exodus-android-app) 

### Awsome Lists for Android Apps

{{% details title="Get to Know! 🚀" closed="true" %}}


* https://github.com/albertomosconi/foss-apps
* https://github.com/offa/android-foss
* https://github.com/Generator/Awesome-Android-TV-FOSS-Apps

* https://gitlab.com/bitfireAT/NoPhoneSpam
* https://github.com/thunderbird/thunderbird-android


{{% /details %}}

### How to control Linux from Android

* With VNCViewer
* With RustDesk

### How to use Linux on Android with Termux

You can have an emulated [Debian](https://jalcocert.github.io/Linux/docs/debian/) inside Android with [**Termux**](https://termux.dev/en/).

{{% details title="Start using Termux with [Alpine Linux](https://alpinelinux.org/downloads/)! 🚀" closed="true" %}}

* https://github.com/termux/termux-app
* https://f-droid.org/es/packages/com.termux/

* Check [available Packages](https://packages.termux.dev) and install them as:

```sh
pkg install htop
pkg install openssh
#pkg install tigervnc-viewer
#vncviewer 192.168.1.100::5902

```

You can also [Virtualize](https://jalcocert.github.io/Linux/docs/debian/virtualization) with [QEMU](https://jalcocert.github.io/Linux/docs/debian/virtualization).

```sh
# pkg install root-repo
# pkg install unstable-repo
# pkg install x11-repo
# pkg install qemu-system-x86_64-headless
# termux-setup-storage

pkg update
pkg install pkg install qemu-system-x86_64-headless qemu-utils wget -y


#Virtual & x86_64 
#wget https://dl-cdn.alpinelinux.org/alpine/v3.19/releases/x86_64/alpine-virt-3.19.1-x86_64.iso
```

Here you can [find more packages](https://github.com/may215/awesome-termux-hacking).
<!-- 
https://www.youtube.com/watch?v=ISvdxtW-Cls&t=543s
https://www.youtube.com/watch?v=prpa58OEmzs
https://www.youtube.com/watch?v=pR5jOQnfNtY
https://www.youtube.com/watch?v=izydeK8eTGw
https://www.youtube.com/watch?v=g8mQdICewis -->

{{% /details %}}

### How to Run Docker on Android

We will be using Termux to run Docker on Android (without Root).


### How to use Andronix to Run Linux

https://github.com/AndronixApp

https://github.com/AndronixApp/termux-packages

https://www.youtube.com/watch?v=M4GYxkzCobA

### How to use VSCode from Android

https://dev.to/dotnetdreamer/using-android-phone-as-a-development-machine-3f39


### Better Android OS

* Android alternatives: <https://www.privacytools.io/android-alternatives>
  * Ubuntu Touch
  
{{% details title="Private Android with LineageOS" closed="true" %}}

> SUpported devices list: <https://wiki.lineageos.org/devices/>

{{% /details %}} 

You can also have a look to [CalyxOS](https://calyxos.org/install/)

{{% details title="Private Android with GrapheneOS" closed="true" %}}

> Google Pixels Only - https://grapheneos.org/releases

{{% /details %}}

{{% details title="How to Change Android ROMs" closed="true" %}}

* How to do it - https://www.linuxfordevices.com/tutorials/openandroidinstaller-android-rom
* Other custom ROMs: https://www.xda-developers.com/tag/custom-rom/

{{% /details %}}

{{% details title="How to remove undesired Android Apps - Hail Project" closed="true" %}}

https://github.com/aistra0528/Hail

> Disable / Hide / Suspend / Uninstall Android apps without root.

{{% /details %}}


{{% details title="How to get Android Updates Directly from the source with Obtanium" closed="true" %}}


https://github.com/ImranR98/Obtainium

{{% /details %}}



<!-- 
https://www.youtube.com/watch?v=qxAnWYUvDxg
https://www.youtube.com/watch?v=KBWlB9f_SAo
 -->


### My Fav Android Apps

* Syncthyng
* SatStat
* Sensor Server
* PhyPhox
* RacheChrono
* Tello FPV
* Immich
* F-Droid
Audio recorder, ultrasonic, readdrops, fluffy chat, organic maps, nophonespam
2fas auth, bitwarden, signal, rvnc viewer, element, tailscale, mullvad vpn
