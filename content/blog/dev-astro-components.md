---
title: "ASTRO - SSG: Components & How to use Them"
date: 2024-01-27T23:20:21+01:00
draft: false
tags: ["Web","Dev"]
description: 'Tutorial - Making ASTRO Website better.'
summary: 'How to get better with ASTRO as SSG (for non web-devs). My favourite components for Astro.'
url: 'understanding-astro-ssg-components'
---

There is one thing that you need to understand to be on the top percentile of webs.

![Just use Astro - IQ Percentiles](/blog_img/IQ_default.jpg)

And it is **how to use components**.

<!-- Add dynamic content about you
https://docs.astro.build/en/tutorial/2-pages/3/ -->

<!-- https://www.youtube.com/watch?v=NniT0vKyn-E -->

<!-- 
CSS Link ---> -->

* https://www.geeksforgeeks.org/how-to-add-chartjs-in-nextjs-13/

1. [Spinning World Map](#spinning-world-map)
2. Charts
* MermaidJS
* ChartJS
3. [OG and SEO](#astro-opengraph-and-seo-metadata)
4. RSS
5. SiteMap

## Spinning World Map

* Found it at theme: https://github.com/Ladvace/astro-bento-portfolio
  * https://github.com/IoTechCrafts/astro-bento-portfolio-ssg/blob/master/src/components/Globe.tsx

{{< dropdown title="Extra nerdy details - Get your world Map for Astro 👇" closed="true" >}}

You need the `d3` and the `solid-js` package. Dont forget to add it to `astro.config.mjs` as integration.

```mjs
import solidJs from "@astrojs/solid-js";


export default defineConfig({
  integrations: [solidJs(),],
  site: "https://yourwebsite.com",
});
```

```json
"d3": "^7.9.0",
"@astrojs/solid-js": "^3.0.2",
"solid-js": "^1.8.7"
```

```json

{
  "name": "astro-bento-portfolio",
  "type": "module",
  "version": "0.0.2",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/netlify": "^3.1.1",
    "@astrojs/rss": "^4.0.1",
    "@astrojs/sitemap": "^3.0.3",
    "@astrojs/solid-js": "^3.0.2",
    "astro": "^4.0.5",
    "astro-icon": "^0.8.2",
    "astro-robots-txt": "^1.0.0",
    "mdast-util-to-string": "^4.0.0",
    "reading-time": "^1.5.0",
    "solid-js": "^1.8.7",
    "d3": "^7.9.0"
  },
  "devDependencies": {
    "motion": "^10.16.4",
    "autoprefixer": "^10.4.16",
    "@unocss/astro": "^0.58.0",
    "@unocss/postcss": "^0.58.0",
    "@unocss/preset-uno": "^0.58.0",
    "@unocss/reset": "^0.58.0",
    "markdown-it": "^14.0.0",
    "sanitize-html": "^2.11.0",
    "unocss": "^0.58.0"
  }
}

```

{{< /dropdown >}}


## FAQ with AlpineJS and TailwindCSS

{{< dropdown title="Get a cool FAQ for Astro 👇" closed="true" >}}



{{< /dropdown >}}

## SSG Search


### FuseJS

* FuseJS - https://www.fusejs.io/

> Also works with HUGO!

### PageFind

* PageFind - https://github.com/cloudcannon/pagefind
  * https://github.com/cloudcannon/pagefind?tab=MIT-1-ov-file#readme
  * https://www.npmjs.com/package/astro-pagefind?activeTab=dependents
    * https://github.com/shishkin/astro-pagefind - MIT Licensed

> Pagefind runs after Hugo, Eleventy, Jekyll, Next, Astro, SvelteKit, or any other website framework!

## Convert the Images to WebP

### Interesting Post Slider with React

https://github.com/gio-del/Astro-Theme-Astroway
https://github.com/gio-del/Astro-Theme-Astroway?tab=MIT-1-ov-file#readme

---

## FAQ

{{< dropdown title="How can I try an Astro Project? ⏬" closed="true" >}}

```sh
npm install
npm run dev
npm run build
npm run preview
#npm run astro --help
```

{{< /dropdown >}}

{{< dropdown title="How can I avoid rendering posts which are draft? ⏬" closed="true" >}}

Define the content collections properly Go to the `astro.config.mjs` or to the `config.ts` file.


```ts
import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        intro: z.string(),
        tag: z.string(),
        pubDate: z.date(),
        draft: z.boolean().optional(), // Add this line!!
        type: z.string().optional(),
    }),
});

const pageCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        intro: z.string(),
        image: image().optional(),
        type: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'author': authorCollection,
    'page': pageCollection,
};
```

Then, use it in your astro templates like:

```js
  const allPosts = (await getCollection('blog'))
        // Filter out posts that have draft: true
        .filter(post => !post.data.draft)
        // Sort the remaining posts by pubDate in descending order
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
```

{{< /dropdown >}}

{{< dropdown title="How to deploy Astro to Cloudflare Pages? ⏬" closed="true" >}}


* Create the project (you will need to [authenticate to Cloudflare](https://fossengineer.com/hosting-with-cloudflare-pages/)):

```sh
npx wrangler pages project create #this will install wrangler CLI the first time
npx wrangler pages deploy dist #<BUILD_OUTPUT_DIRECTORY>
```

Use **Wrangler** to obtain a list of all available projects for Direct Upload:

```sh
npx wrangler pages project list #this are the ones you uploaded already
npx wrangler pages deployment list
```

One **Final Step** (Thanks to [Project Brackets YT Video!](https://www.youtube.com/watch?v=aRYt02Mgy90)

Remember to go to `Cloudflare Web UI` -> Workers and pages -> Select the project name as you uploaded with the CLI -> Custom Domains

* If your domain is not with Cloudflare, they will ask you to use their **Name Authoritative NameServers**

Something like: `fattouche.ns.cloudflare.com, leanna.ns.cloudflare.com`

![Wordpress Google Page Speed Desktop](/blog_img/web/CloudFlarePages_CustomDomain_DNS.png)

{{< /dropdown >}}

### ASTRO SEO PACKAGES

* robots.txt - https://www.npmjs.com/package/astro-robots-txt#why-astro-robots-txt` (MIT Licensed ❤️)

* rss

* Image Optimization

### Astro Cookies

https://docs.astro.build/en/reference/api-reference/#astrocookies

### Astro OpenGraph and SEO Metadata

* Example - https://github.com/IoTechCrafts/stablo-astro-SSG/blob/main/src/layouts/Layout.astro#L42

### Interesting Tools

#### Primitives

https://github.com/radix-ui/primitives - Unstyled, accessible, open source React primitives for high-quality web apps and design systems.


> Radix Primitives is an open-source UI component library for building high-quality, accessible design systems and web apps. Maintained by @workos.

#### ChartJS

https://github.com/chartjs/Chart.js
https://www.chartjs.org/
https://github.com/chartjs/Chart.js?tab=MIT-1-ov-file#readme

> Simple yet flexible JavaScript charting library for the modern web
Simple HTML5 Charts using the <canvas> tag



#### MermaidJS

https://github.com/mermaid-js/mermaid
https://github.com/mermaid-js/mermaid-cli

* [More about diagrams](/free-diagram-tools/)


### User Management / Authentication

https://authjs.dev/
https://github.com/nextauthjs/next-auth
https://github.com/nextauthjs/next-auth?tab=ISC-1-ov-file#readme

https://authjs.dev/getting-started/integrations

> Authentication for the Web.

it works with Authentik! - https://authjs.dev/getting-started/providers/authentik

with wordpress, mastodon as well