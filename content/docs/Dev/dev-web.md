---
title: "What I've learnt about Websites"
date: 2024-09-04T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Interesting stuff Ive learn along the way when trying to make better Websites. A Non-WebDev perspective.'
url: 'create-your-website'
---

You can create cool static websites with these frameworks, and also with [Remix](https://github.com/jacob-ebey/remix-ssg).

I mean, with HUGO, Astro, NodeJS, jekyll...

And if you are new to Websites, do it (The Web [Deployment](#select-the-deployment-method)) with [Github Pages](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/) to get a free subdomain with it.

{{< details title="Important Files for all Webs 📌" closed="true" >}}


Look always for the `<head>` - It will guide you to a `Base.astro`, `BaseLayout.astro`, `head.html`...

In there you can do interesting things, like adding web analytics.

{{< /details >}}


{{< details title="About favicons 📌" closed="true" >}}

as in the [withastro/starlight Theme](https://github.com/IoTechCrafts/starlight-SSG) or Pacamara

{{< /details >}}


{{< details title="How to get OpenGraph - OGImage right 📌" closed="true" >}}
* As seen in [Web3Templates - Stablo Theme](https://github.com/IoTechCrafts/stablo-astro-SSG) or in [AstroVerse/VisVRS](https://github.com/IoTechCrafts/astroverse)
* For HUGO, [HUGO Theme Gallery](https://github.com/nicokaiser/hugo-theme-gallery) has OG done right
{{< /details >}}


## What Ive Learnt about Astro


{{< callout type="info" >}}
[Astro **Setup**](https://jalcocert.github.io/JAlcocerT/using-astro-as-website/) once and for all
{{< /callout >}}


{{< details title="How to Install Dependencies 📌" closed="true" >}}

checking dependencies

```sh
npm list @astrojs/starlight
npm install @astrojs/starlight
npm install @astrojs/starlight --legacy-peer-deps #if you have some dep issues
```


{{< /details >}}




{{< details title="Better SEO for Astro 📌" closed="true" >}}

* Seo Package for astro:

```astro
import { AstroSeo } from '@astrolib/seo';
```

as in the [Minimal Studio Theme by michael-andreuzza ](https://github.com/IoTechCrafts/minimalstudio-ssg)

{{< /details >}}

{{< details title="WebSearch in Astro 📌" closed="true" >}}


as in the [withastro/starlight Theme](https://github.com/IoTechCrafts/starlight-SSG)

one of the most complete Astro themes ive seen - also supporting several languages
* https://starlight.astro.build/guides/i18n/
{{< /details >}}

{{< details title="Optimized images in Astro 📌" closed="true" >}}

You will **need astrojs/mdx installed** first and use it within .mdx files:

```astro
import { Image } from 'astro:assets'

import photopost1b from '../../assets/image.jpg';

<figure>
  <Image src={photopost1b} width={500} height={200} alt="Exploring Astro Images" />
  <figcaption class="caption">Say hi to Astro</figcaption>
</figure>
```

{{< /details >}}

---

## Tweaking HUGO Themes

[HUGO](https://fossengineer.com/web-guide-Hugo/) is great.

The [HUGO **Setup**](https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/) was the first SSG that I could get working back in the days.


{{< details title="HUGO Themes I Like📌" closed="true" >}}

* You can combine HUGO with RevealJS to create [awsome presentations](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#slides-creation-agent)!
  * Similarly to what we can do with [**SliDev** - Example at MultiChat](https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt/#a-multichat-with-streamlit)
  * HUGO + RevealJS - [Sample1](https://github.com/joshed-io/reveal-hugo), [Sample2](https://github.com/RealOrangeOne/hugo-theme-revealjs)

{{< /details >}}

If you are using HUGO, embedd your images with [this shortcode](https://raw.githubusercontent.com/gohugoio/hugo/master/tpl/tplimpl/embedded/templates/shortcodes/figure.html)

{{< details title="How to Include Search 📌" closed="true" >}}

| **Description**                        | **Link**                                   |
|----------------------------------------|--------------------------------------------|
| PageFind with Astro      | [VisVRS/AstroVerse Example](https://github.com/IoTechCrafts/astroverse)    |
| FuseJS with Astro      | [AstroEngineeringBlog Example](https://github.com/EddyVinck/astro-engineering-blog)    |
| FuseJS with HUGO      | [AstroEngineeringBlog Example](https://github.com/EddyVinck/astro-engineering-blog)    |
| Ghost                | [Compose Overview](https://docs.docker.com/compose/) |


{{< /details >}}

{{< details title="How to add `ads.txt` to HUGO 📌" closed="true" >}}

1. **Create an `ads.txt` file** in your Hugo project’s `static` directory. The `static` folder in Hugo is where you put any files you want to be copied directly to the root of your build output.

2. **Add your content** to the `ads.txt` file:

```plaintext
   google.com, pub-123456, DIRECT, abcdef123456
```

3. **Build your Hugo site**:

4. **Verify the output** by checking the `public` directory (Hugo's default output folder). You should find the `ads.txt` file in the root of `public`:


5. **Deploy your site** as usual. The `ads.txt` file should now be available at `https://yourdomain.com/ads.txt`. 

This method ensures that `ads.txt` is part of your site’s root directory in the final build output, as required by ad networks.

![Firebase Custom Domain](/blog_img/web/ads-txt-public-hugo.png)

{{< /details >}}

### HUGO with Github Pages & CICD

Its very important to know the **HUGO Version** that makes the theme work.

Laos when you are using [Github Actions Workflow](https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml).

{{< callout type="info" >}}
The workflow configures [the base path to work properly](https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml#L57) as per your repo name
{{< /callout >}}

This Hextra Theme, as it is, for example, [runs fine with v0.117.0](https://github.com/gohugoio/hugo/releases/tag/v0.117.0):

```sh
hugo v0.117.0-b2f0696cad918fb61420a6aff173eb36662b406e+extended linux/amd64 BuildDate=2023-08-07T12:49:48Z VendorInfo=gohugoio
```

But **not with higher versions like v0.124**.

{{< callout type="info" >}}
[Setup HUGO ](https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/)properly!
{{< /callout >}}

---

## Deployments


{{% steps %}}

### Select a SSG

This is the first step.


### Tweak the Theme and Build

This is the second step.

### Select the Deployment Method

* [Firebase](https://fossengineer.com/hosting-with-firebase/)
* [Github Pages](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/) or Gitlab Pages
* [Cloudflare](https://fossengineer.com/hosting-with-cloudflare-pages/)
* AWS S3 Buckets - https://blog.cavelab.dev/2021/08/deploying-hugo-blog-to-s3/
* Others - Netlify, Server with NGINX... 

> See a [benchmark of Static Hosting](https://simplyexplained.com/blog/benchmarking-static-website-hosting-providers/)

{{< details title="Free SSG Deployment 📌" closed="true" >}}

* With **Firebase**, the Free Tier allows for up to 10GB for ppl to download your content.
  * Per month, and at least at the time of writing. This might (or not) change.

```sh
firebase init #configure files for firebase hosting / public directory is normall public for HUGO and dist for Astro/nodes
firebase deploy #you will get something like -> https://jalcocertech.web.app/
```

* You can also try with [Cloudflare](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/#faq) or Github Pages.

{{< /details >}}

### Get Better at Webs

* https://stateofjs.com/en-US
* Web Analytics: with Umami or Tianji

{{% /steps %}}


---

## FAQ

{{< details title="Check that the SiteMap Works 📌" closed="true" >}}

```sh
#curl -s https://example.com/sitemap.xml -o /dev/null -w "%{http_code}\n"
curl -s https://jalcocertech.xyz/sitemap.xml -o /dev/null -w "%{http_code}\n" #200 means its there!
curl -s https://cyclingthere.com/sitemap.xml -o /dev/null -w "%{http_code}\n"
curl -s https://cyclingthere.com/sitemap-index.xml -o /dev/null -w "%{http_code}\n" #its here!
curl -s https://iotechcrafts.com/sitemap.xml -o /dev/null -w "%{http_code}\n" 

curl -s https://fossengineer.com/sitemap.xml -o /dev/null -w "%{http_code}\n" #hugo paper mod has it

#optional - check robots.txt
curl -s https://jalcocertech.xyz/robots.txt | grep -i sitemap #look for sitemap direction
curl -s https://iotechcrafts.com/robots.txt | head -n 10 #see the first 10 lines

#example of path with robots
curl -s https://bachatafests.com/sitemap.xml -o /dev/null -w "%{http_code}\n"
curl -s https://bachatafests.com/robots.txt | head -n 10 #see the first 10 lines
curl -s https://bachatafests.com/robots.txt | grep -i sitemap #look for sitemap direction
curl -s https://bachatafests.com/sitemap_index.xml -o /dev/null -w "%{http_code}\n"
```

> Search for any **references to a sitemap URL** within the `robots.txt` file.

If found sth, you can use that URL to check for the sitemap instead

{{< /details >}}



{{< details title="How to Optimize Web Images - WebP 📌" closed="true" >}}

* https://simplyexplained.com/blog/implementing-webp-images-on-eleventy-site/

{{< /details >}}

{{< cards cols="2" >}}
  {{< card link="https://roadmap.sh/frontend" title="Front End RoadMap" >}}
  {{< card link="https://roadmap.sh/backend" title="Back End RoadMap" >}}
{{< /cards >}}



* How to get the **HEX colors** of websites - [SmartColorPicker extension](https://chromewebstore.google.com/detail/smart-color-picker/ilifjbbjhbgkhgabebllmlcldfdgopfl?hl=en)
* Explore HEX colors with [Color Picker Chrome extension](https://chromewebstore.google.com/detail/color-picker-chrome-exten/apldhonppojnaadpeoghllcjealkkmem?gad_source=1&gclid=Cj0KCQjwveK4BhD4ARIsAKy6pMKC6wDlkEkSh9SsQ9wirszcseVvgQ1BAuWXai5FtBzsS66YMrB65YsaAp95EALw_wcB)

You need markdown for these SSGs - https://github.com/Cveinnt/LetsMarkdown.com

```sh
docker run --rm -dp 3030:3030 cveinnt/letsMarkdown
```



### Is my website performing well?

* https://pagespeed.web.dev/
* https://search.google.com/search-console/

* https://trends.google.es/trends/

* https://www.websitecarbon.com/

* https://github.com/Lissy93/web-check
    * https://web-check.xyz/

* You will need proper favicons
    * https://mariushosting.com/how-to-install-favicon-downloader-on-your-synology-nas/
    * https://github.com/seadfeng/favicon-downloader

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

### Enhancing a Site

* https://blog.cavelab.dev/2022/01/comments-again/