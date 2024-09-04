---
title: "What I've learnt about websites"
date: 2025-11-05T23:20:21+01:00
draft: true
tags: ["dev"]
description: 'Must know data concepts and techniques for your career in Analytics.'
summary: 'The essential concepts of data modeling and key terms in this introductory course for effective data analytics and informed decision-making. Learn how to structure and represent data efficiently to unlock valuable insights and optimize your analytical capabilities.'
url: 'create-your-website'
---

## What Ive Learnt about Astro


{{< details title="Better SEO for Astro 📌" closed="true" >}}


import { AstroSeo } from '@astrolib/seo';

as in the [Minimal Studio Theme by michael-andreuzza ](https://github.com/IoTechCrafts/minimalstudio-ssg)

{{< /details >}}

## Tweaking HUGO Themes


If you are using HUGO, embedd your images with [this shortcode](https://raw.githubusercontent.com/gohugoio/hugo/master/tpl/tplimpl/embedded/templates/shortcodes/figure.html)

{{< details title="How to Include Search 📌" closed="true" >}}

| **Description**                        | **Link**                                   |
|----------------------------------------|--------------------------------------------|
| PageFind with Astro      | [VisVRS/AstroVerse Example](https://github.com/IoTechCrafts/astroverse)    |
| FuseJS with Astro      | [AstroEngineeringBlog Example](https://github.com/EddyVinck/astro-engineering-blog)    |
| FuseJS with HUGO      | [AstroEngineeringBlog Example](https://github.com/EddyVinck/astro-engineering-blog)    |
| Ghost                | [Compose Overview](https://docs.docker.com/compose/) |


{{< /details >}}

{{< details title="Themes I love for Galleries 📌" closed="true" >}}

| **Description**                        | **Link**                                   |
|----------------------------------------|--------------------------------------------|
| PHP          | [NovaGallery](https://github.com/novafacile/novagallery)    |
| Ghost                | [Compose Overview](https://docs.docker.com/compose/) |

Ghost Themes: Handlebars, HTML, CSS, JavaScript, JSON.
WordPress Themes: PHP, HTML, CSS, JavaScript, WordPress-specific template tags, and hooks.

{{< /details >}}

---

## FAQ

* https://roadmap.sh/frontend
* https://roadmap.sh/backend

{{< details title="Free SSG Deployment 📌" closed="true" >}}

* With Firebase

```sh
firebase init #configure files for firebase hosting / public directory is normall public for HUGO and dist for Astro/nodes
firebase deploy #you will get something like -> https://jalcocertech.web.app/
```

{{< /details >}}

### Is my website performing well?

* https://pagespeed.web.dev/
* https://search.google.com/search-console/

* https://trends.google.es/trends/

* https://github.com/Lissy93/web-check
    * https://web-check.xyz/

* You will need proper favicons
    * https://mariushosting.com/how-to-install-favicon-downloader-on-your-synology-nas/

### CDN and Videos for your Website

* https://github.com/orthdron/subatic - Extremely simple video hosting Site that scales with you



### Interesting Search Engines

* Ecosia.org / qwant.com / Brave / DuckDuckGo
* [Whoogle/SearXNG](https://jalcocert.github.io/RPi/posts/selfh-internet-better/)
* Bing 

It's worth to try few of them - not all the content is indexed in the same way across engines

{{< callout type="info" >}}
**Thanks to Ecosia** I could find how to add Web Analytics to the Jekyll Chirpy Theme!
{{< /callout >}}