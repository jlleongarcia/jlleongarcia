---
title: "Crafting a Website for Knitting. Blog and more. "
date: 2024-09-23
draft: false
tags: ["dev"]
summary: 'SquareSpace to Cloudflare. From Firebase and Google Domains to Web with Cloudflare Pages'
url: 'squarespace-to-cloudflare-website'
---

Continue with the free option.

Now you need to go to the SquareSpace UI, select the domain and go to: DNS -> Domain NameServers.

Select `Use custom nameservers`, we will replace the ns-cloud-b1.googledomains.com and so on, with the ones that cloudflare assigns.

There will be 2 records, like: `fattouche.ns.cloudflare.com`

* https://cozyknittingclub-web.pages.dev/



![Uptime Ira](/blog_img/web/success1-ckc/Cloudflare-SquareSpace-DNS.png)

![Uptime Ira](/blog_img/web/success1-ckc/Cloudflare-SquareSpace-DNSChange.png)

![Uptime Ira](/blog_img/web/success1-ckc/Cloudflare-SquareSpace-DNSChangeUpdate.png)


Once updated, we can connect the real domains with the build:

* https://cozyknittingclub.com


### Proposed Themes

Astro Stablo

---

