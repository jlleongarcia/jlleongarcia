---
title: "Weddings are expensive. Be smart with the right software."
date: 2025-01-18
draft: false
tags: ["OSS"]
summary: 'Interesting software for Weddings. Including how to deploy it with Dokploy (to Pi's, VPS)'
url: 'software-for-weddings'
---

<!-- 
* Weddings...
* bodas.net
http://divephiphiisland.com/ -->


## Website for Weddings

With astro, you can build pretty cool weddings ssgs:

1. https://github.com/Boston343/horizon
* Ive forked it to https://github.com/JAlcocerT/horizon

## Selfhostable Software for Weddings

1. Few [Selfhostable Alternatives](https://noted.lol/event-photos-and-self-hosting/) for events
2. https://github.com/Cirx08/WeddingShare

> GPL3.0 | A place for guests to view and drop pictures of the big day

### WeddingShare Setup

* https://docs.wedding-share.org/
  * https://docs.wedding-share.org/docs/Setup/docker
  * https://hub.docker.com/r/cirx08/wedding_share
  * https://www.redditmedia.com/r/selfhosted/comments/1gugnku/weddingshare_a_basic_selfhosted_drop_box_and/


```yml
services:
  wedding-share:
    container_name: WeddingShare
    image: cirx08/wedding_share:latest
    ports:
      - '${HTTP_PORT:-8080}:5000/tcp'
    environment:
      TITLE: 'WeddingShare'
      LOGO: 'Url'
      GALLERY_COLUMNS: 4
      ALLOWED_FILE_TYPES: '.jpg,.jpeg,.png'
      MAX_FILE_SIZE_MB: 10
      SECRET_KEY: 'password'
    volumes:
      - data-volume-config:/app/config
      - data-volume-thumbnails:/app/wwwroot/thumbnails
      - data-volume-uploads:/app/wwwroot/uploads
    network_mode: bridge
    hostname: wedding-share
    restart: always

volumes:
  data-volume-config:
    name: WeddingShare-Config
  data-volume-thumbnails:
    name: WeddingShare-Thumbnails
  data-volume-uploads:
    name: WeddingShare-Uploads
```

Default credentials to `localhost:8080/Admin` are...`admin/admin`


![Interest to Principal Ratio](/blog_img/apps/weddingshare.png)


## Making Deployments Easy


{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers/" title="With a Raspberry/SBC/MiniPC" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/" title="Or with a Server" >}}
{{< /cards >}}

Once you are **connected** to the device/server:

```sh
192.168.0.232 #pi 2gb
192.168.0.155 #pi 4gb
```



{{< callout type="info" >}}
**Cloudflare tunnels** is one of my go to options, yet you also have: [ngrok](https://www.reddit.com/r/selfhosted/comments/10n1h0p/cloudflare_tunnel_alternative/), [nginx](https://jalcocert.github.io/JAlcocerT/get-started-with-flask/),...
{{< /callout >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/" title="Astro Github + Cloudflare Pages" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/cool-link-in-bios/" title="Gitlab + Cloudflare Pages" >}}
{{< /cards >}}

### DokPloy

An alternative to vercel and netlify!

* https://github.com/Dokploy/dokploy
* https://dokploy.com/

> Open Source **Alternative to Vercel, Netlify and Heroku**.

---

## FAQ

### Getting a Domain Name

* https://sered.net/dominios

With an API...

0. Porkbun
1. NameCheap
2. Cloudflare Domains