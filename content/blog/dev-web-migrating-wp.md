---
title: "From Wordpress to a Cool Website"
date: 2024-09-23T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Migrating Wordpress to Cool Websites'
url: 'wordpress-migration-to-ssg'
---

I was talking with my father about websites the other day and...

I realized how much more we can do with SSG's than with wordpress.

It all started trying to add Web Analytics to his site.

We wanted to add Umami Analytics - The same im using for this site (which is GDPR compliant out of the box and non invasive for the readers).

> It turned out that you need a business suscription to add Plugins (WPCode could have solve it).

We tried to add the Umami script on the wordpress Theme, but the option was also not available.

## Why there are better options?

![Wordpress Carbon vs SSG](/blog_img/web/carbon-comparison.png)

![Wordpress Google Page Speed Desktop](/blog_img/web/jmodels-google-pagespeed-desktop.png)

![Wordpress Google Page Speed Mobile](/blog_img/web/jmodels-google-pagespeed-mobile.png)

![Pinging Wordpress vs SSG](/blog_img/web/ping_comparison.png)


{{< hextra/feature-grid >}}
 
{{< hextra/feature-card
  title="Google Speed Test"
  subtitle="Test the speed and performance with PageSpeed Insights."
  style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
  link="https://pagespeed.web.dev/"
>}}

{{< hextra/feature-card
  title="Website Carbon"
  subtitle="Website’s carbon footprint and environmental impact."
  style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,50%,0));"
  link="https://www.websitecarbon.com/"
>}}

{{< hextra/feature-card
  title="Web-Check"
  subtitle="Performance and uptime using Web-Check's analytics tool."
  style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
  link="https://web-check.xyz/"
>}}


{{< /hextra/feature-grid >}}

### SSG Alternatives

* https://github.com/CaiJimmy/hugo-theme-stack
  * Supports https://photoswipe.com/ out of the box!


### The challenges

Writing posts on md a IDE...that can cause some friction.

I proposed to have a look to:

* https://vscode.dev/
  * Alternatively Github Codespaces or Gitlab Web IDE can do
  * You can also provide [VSCode as a container](https://github.com/JAlcocerT/Docker/blob/main/Dev/vscode-server_Docker-compose.yml)
* letsMarkdown

{{< details title="A quick look on how to use markdown 📌" closed="true" >}}

```sh
docker run --rm -dp 3030:3030 cveinnt/letsMarkdown #https://github.com/Cveinnt/LetsMarkdown.com
```

{{< /details >}}

## How to Migrate WordPress

### Scrapping Wordpress Content

### Creating the markdown posts with AI


---

## FAQ

{{< details title="Free SSG Deployment 📌" closed="true" >}}

* With Firebase

```sh
firebase init #configure files for firebase hosting / public directory is normal public for HUGO and dist for Astro/nodes
firebase deploy #you will get something like -> https://jalcocertech.web.app/
```

> Yes, **free web.app subdomain**!

* With Cloudflare Pages

> Here you get a **pages.dev subdomain**, also for free

{{< /details >}}

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


{{< details title="Do I have broken links? 📌" closed="true" >}}

```sh
#podman run --rm -it ghcr.io/linkchecker/linkchecker:latest --verbose https://fossengineer.com > linkchecker_output.txt

docker run --rm -it -u $(id -u):$(id -g) ghcr.io/linkchecker/linkchecker:latest --verbose https://www.example.com
```

* Option 2: with the [python Package](https://pypi.org/project/LinkChecker/)

```sh
pip3 install linkchecker #Check links in web documents or full websites
```

You will get a report with what’s link working and what not when it comes to Links in your Site.

{{< /details >}}

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