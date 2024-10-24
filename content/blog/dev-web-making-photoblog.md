---
title: "Creating a Photo Centered Blog"
date: 2024-09-29T23:50:59+01:00
draft: false
tags: ["dev"]
summary: 'How I used HUGO to create a Photo Gallery / Blog, for a Digital Creator'
url: 'creating-photo-centric-blog-with-hugo'
---

For this **client**, I had to make something **special**.

She's a traveler, **photo adict**, content creator and artist.

* https://nicokaiser.github.io/hugo-theme-gallery/animals/cats/


{{< details title="How to create a Photo Gallery with Hugo 📌" closed="true" >}}

```sh
git clone https://github.com/nicokaiser/hugo-theme-gallery
cd ./hugo-theme-gallery/exampleSite
hugo server
```

And the theme requires at least hugo 0.121.2, and Im having `hugo v0.117.0-....`

You can see that requirements at the `theme.toml` file.

So time for an **upgrade for [go and HUGO](https://fossengineer.com/changing-hugo-theme/)**:

```sh
wget https://go.dev/dl/go1.23.2.linux-arm64.tar.gz
sudo tar -C /usr/local -xzf go1.23.2.linux-arm64.tar.gz
nano ~/.bashrc
#write this in the end of the file
export PATH=$PATH:/usr/local/go/bin
#save
source ~/.bashrc

go version #Go is updated!
```

And now, HUGO:
```sh
#CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest #The latest
#wget https://github.com/gohugoio/hugo/releases/download/v0.127.0/hugo_0.127.0_linux-arm64.deb
wget https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_0.121.2_linux-arm64.deb
sudo dpkg -i hugo_*.deb

hugo version #HUGO is ready and >=0.121.2!
```

As per the sampleSite readme, we need to do:

```sh
hugo mod get # Install Hugo module

./pull-images.sh #Pull example images from Unsplash
```

And just **enjoy**:

```sh
#hugo server
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" 
hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1319
```

> And you will have the **amazing HUGO sample theme** at `http://192.168.0.117:1319`

{{< /details >}}


{{< callout type="info" >}}
You can dia it via [SSH with VSCode](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) thanks to **[Nicokaiser](https://github.com/nicokaiser/hugo-theme-gallery/) MIT Project**
{{< /callout >}}




{{< details title="A container for HUGO - Dockerfile/Compose 📌" closed="true" >}}

```sh
#docker-compose up --build
docker build -t hugo_gallery .
```

You need both `dockerfile` and `docker-compose.yml`:

```dockerfile
# Use the official Golang image which is based on Debian Bullseye
FROM golang:1.23.2-bullseye 
#https://hub.docker.com/_/golang/tags

# Set working directory
WORKDIR /usr/src/app

# Install Hugo
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_0.121.2_linux-arm64.deb && \
    dpkg -i hugo_0.121.2_linux-arm64.deb && \
    rm hugo_0.121.2_linux-arm64.deb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Clone the Hugo theme repository
RUN git clone https://github.com/nicokaiser/hugo-theme-gallery /hugo-theme-gallery

# Set the working directory to the exampleSite within the cloned theme
WORKDIR /hugo-theme-gallery/exampleSite

# Expose port 1319 for Hugo server
EXPOSE 1319

# Start Hugo server
CMD ["hugo", "server", "--bind=0.0.0.0", "--baseURL=http://192.168.0.117", "--port=1319"]

#docker build -t hugo_gallery .
#docker run -d -p 1319:1319 --name hugo_gallery_instance --restart unless-stopped hugo_gallery tail -f /dev/null
#docker exec -it hugo_gallery_instance /bin/bash
#go version
#hugo version
```

```yml
version: '3.8'
services:
  hugo_gallery:
    image: hugo_gallery  # Ensure this matches the image name you have built
    container_name: hugo_gallery_instance
    ports:
      - "1319:1319"
    restart: unless-stopped
    command: tail -f /dev/null


# version: '3.8'
# services:
#   hugo:
#     build: .
#     ports:
#       - "1319:1319"
#     # volumes:
#     #   - ./hugo-theme-gallery/exampleSite:/usr/src/app
#     environment:
#       - HUGO_BASE_URL=http://192.168.0.117

############

# #docker build -t hugo_gallery .
# #docker-compose up --build
```

{{< /details >}}



{{< details title="Tweaking Hugo Theme Gallery 📌" closed="true" >}}


* The content for the main page is it `_index.md`
* Every folder has photos and a `index.md`
    * In those files you can choose the **featured_image** and..
    * If you want to add some description to the imgs

```md
resources:
  - src: alexander-london-mJaD10XeD7w-unsplash.jpg
    title: Brown tabby cat on white stairs by Alexander London
```

* it supports several langauges with **i18n**, the file is `en.yaml`
* it also support image zoom and download (in full quality)
{{< /details >}}



---

## New Web Workflow

These days I have improved my **Web creation/edition Workflow**.

Im now using **Github+Cloudflare** and Gitlab+Cloudflare for deployments.

Time to say bye to my old friend Firebase.

At least for now.

And to make the dev workflow smoother when Im switching devices...

* I develop via [SSH with VSCode](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) with the Opi5 as server
* Everything gets synced thanks to [this script](https://github.com/JAlcocerT/JAlcocerT/tree/main/Z_Clone_Repos)


{{< details title="Testing Astro with Gitlab at Opi 📌" closed="true" >}}

```sh
git clone https://gitlab.com/fossengineer1/cyclingthere
cd ./cyclingthere/pacamara
```

With a regular SSH, I can just use **nano to develop**
```sh
time npm install #~30s
#npm audit fix --force

npm run dev
npm run build
```

But its possible to use VSCode with SSH and **see all the dev environment files**

```sh

```

{{< /details >}}



{{< details title="Automatic Sync Scrypt 📌" closed="true" >}}




{{< /details >}}