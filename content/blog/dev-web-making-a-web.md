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
  * They are performing at up to ~1 second initial loading time!

![Uptime Ira](/blog_img/web/success3-realestate/uptime-realestate-demo.png)

![Uptime Ira](/blog_img/web/success3-realestate/uptime-casaensol.png)

![Uptime Ira](/blog_img/web/success3-realestate/uptime-cano.png)


### Demo with Cloudflare Pages

* I created a [Private repo with Github](https://github.com/JAlcocerT/ScrewFastMoiRealEstate)

> Powered by [Astro 😍 ScrewFast](https://github.com/JAlcocerT/ScrewFast)


{{< details title="Ready to Demo, with Free Cloudflare Pages 📌" closed="true" >}}

```sh
npm install
npm run dev
```

* It also has **starlight for the docs**!

```sh
npm run build
```
* Output -->> `./dist` or `.vercel/output/static/`


```sh
npm install -g serve #serve with npm

#serve -s dist
serve -s .vercel/output/static #http://localhost:3000

#cd dist #serve with python
cd .vercel/output/static
python3 -m http.server 8000
```

```sh
npx wrangler pages project create
```

* Project name: **moises**
  * Images are at `./src/images`


```sh
#npx wrangler pages project list
npx wrangler pages deploy .vercel/output/static #dist 
```

* Demo deployed with [Cloudflare Pages](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/#setup-cloudflare-workers-and-pages): `https://moises-era.pages.dev/`
  * https://a75e88ca.moises-era.pages.dev
* https://pagespeed.web.dev/analysis/https-moises-era-pages-dev

> Thanks to [Astro & mearashadowfax](https://github.com/mearashadowfax/ScrewFast)

{{< /details >}}

Just as we did [here](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/#setup-cloudflare-workers-and-pages), but this time, **with a private repo**.


![Cloudflare will build HUGO for us](/blog_img/web/success3-realestate/Cloudflare-GithubPages-HUGO.png)

Normally, Astro pages push the build files to `./dist`, but this theme does it differently:

![Cloudflare will build HUGO for us](/blog_img/web/success3-realestate/Cloudflare-BuildAstro.png)

When you hit deploy, the process will start: build environment -> clone git repo -> build web files/

{{< callout type="info" >}}
  The domain and pages are [handled by Cloudflare](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/)
{{< /callout >}}



## Extra Functionality

* Newsletters and contact form added [with MailerLite](https://jalcocert.github.io/JAlcocerT/blog/dev-forms/#mailerlite)
* GDPR Compliant out of the box