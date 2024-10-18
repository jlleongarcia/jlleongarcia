---
title: "Customizing a Web for Real Estate"
date: 2024-09-27T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Creating a responsive Astro site - Real Estate oriented'
url: 'astro-web-setup'
---

* Competitors / Ideas :
  * https://www.inmobiliariacano.es/
  * https://casaensol.pl/
  * https://syrenare.com/


### Demo with Cloudflare Pages

{{< details title="Ready to Demo, with Free Cloudflare Pages 📌" closed="true" >}}

```sh
npm install
npm run dev
```

* it also has **starlight for the docs**!
* Output -->> `./dist` or `.vercel/output/static/`

```sh
npx wrangler pages project create
```

* Project name: **moises**
  * Images are at `./src/images`


```sh
#npx wrangler pages project list
npx wrangler pages deploy .vercel/output/static #dist 
```

* https://moises-era.pages.dev/
  * https://a75e88ca.moises-era.pages.dev
* https://pagespeed.web.dev/analysis/https-moises-era-pages-dev

> Powered by [Astro 😍 ScrewFast](https://github.com/mearashadowfax/ScrewFast)

{{< /details >}}

https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/