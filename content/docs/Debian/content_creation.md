---
title: Apps Content Creation
type: docs
prev: docs/Debian/
---


## Video

### Screen Recording in Linux

Just use OBS Studio:

```sh
flatpak install flathub com.obsproject.Studio
flatpak run com.obsproject.Studio

#nix-shell -p obs-studio
```

### Snapshots

* [Spectacle](https://github.com/KDE/spectacle) 


### Editing Videos in Linux

Probably the simplest will be KDEnlive. But here you have few options.
<!-- 
https://www.youtube.com/watch?v=EHnAV6fObGI -->

```sh
sudo snap install blender --classic #https://github.com/blender/blender/archive/refs/tags/v4.1.1.tar.gz
#snap install freecad && snap install openscad && snap install cura-slicer 

sudo snap install shotcut -- classic && snap install photoscape  && snap install inkscape

#curl -o docker-compose.yaml https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml
#docker compose -p penpot -f docker-compose.yaml up -d
#docker exec -ti penpot-penpot-backend-1 python3 ./manage.py create-profile
#sudo snap install penpot-desktop


#Flameshot
#kdenlive video editor
flatpak install flathub org.kde.kdenlive
flatpak run org.kde.kdenlive

#openshot
#sudo snap install shotcut --classic
```

Watch your videos with VLC:

```sh
flatpak install flathub org.videolan.VLC
```

<!-- {{% details title="Private Android with LineageOS" closed="true" %}}

> SUpported devices list: <https://wiki.lineageos.org/devices/>

{{% /details %}} 
https://gist.githubusercontent.com/JAlcocerT/197667ec5ec0da53e78eb58c4253a73f/raw/d1fe2b51e68fe35b4301c50979e10c1ac18fae9c/Z_design.sh -->


## Photo Editing in Linux

* The one and only - **GIMP**:

```sh
sudo snap install gimp
```

* Resize Images without loosing quality - **Upscayl**

A great project that provides us with 3 different ways to install (For Debian any of these will do): [snap](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#snap) / [flatpak](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#flatpak) / [AppImage](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#ui)

```sh
#sudo snap install upscayl
flatpak install flathub org.upscayl.Upscayl

#https://github.com/upscayl/upscayl/releases
#sudo wget https://github.com/upscayl/upscayl/releases/download/v1.5.5/Upscayl-1.5.5.AppImage
#chmod +x ./*.AppImage
```

* [Krita](https://krita.org/en/): full-featured digital art studio.

```sh
flatpak install flathub org.kde.krita
```

## Audio Editing in Linux

* Audacity

```sh
wget https://github.com/audacity/audacity/releases/download/Audacity-3.4.2/audacity-linux-3.4.2-x64.AppImage
#flatpak install flathub org.audacityteam.Audacity
```

And shortly we will get the Plugin OpenVino ready in Linux which will bring AI to Audacity: https://github.com/intel/openvino-plugins-ai-audacity/releases

* [Mixxx](https://flathub.org/apps/org.mixxx.Mixxx)

```sh
flatpak install flathub org.mixxx.Mixxx
```


---

## FAQ

{{% details title="How to check for duplicate images - dupeGuru" closed="true" %}}

```sh
```

{{% /details %}} 