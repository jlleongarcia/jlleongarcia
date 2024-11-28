---
title: "Streamlit MigrAItion - Making cool Webs from old ones "
date: 2024-11-14
draft: false
tags: ["AI"]
description: "Using AI to migrate websites to SSG. Faster, Cooler and Cleaner."
summary: 'Using AI to migrate websites to SSG. For Real Estate and Wordpress projects.'
url: 'how-to-migrate-a-website'
---


It's always great to having a look to the initial pages to know what to expect from them.

Is it everything working?

Hows the initial Performance of the Site?

{{< details title="Checking that a Website works - or in this case, what we will have to Migrate 📌" closed="true" >}}

* WebCheck - 
* Gte all url/pages of a website - A must to migrate everything!
* Are there [any broken links](https://fossengineer.com/nextjs-ssg/#do-i-got-any-broken-links)?

```sh
#podman run --rm -it ghcr.io/linkchecker/linkchecker:latest --verbose https://fossengineer.com > linkchecker_output.txt

docker run --rm -it -u $(id -u):$(id -g) ghcr.io/linkchecker/linkchecker:latest --verbose https://www.jmodels.net

pip3 install linkchecker
```

{{< /details >}}

{{< details title="Check SiteMap/Robots.txt of a Web 📌" closed="true" >}}

```sh
#curl -s https://example.com/sitemap.xml -o /dev/null -w "%{http_code}\n"
curl -s https://jmodels.net/sitemap.xml -o /dev/null -w "%{http_code}\n" #hugo paper mod has it

#optional - check robots.txt
curl -s https://jmodels.net/robots.txt | grep -i sitemap #look for sitemap direction
curl -s https://jmodels.net/robots.txt | head -n 10 #see the first 10 lines
```

{{< /details >}}

I was expecting to just use the latest [AI Scrapping tools that I learnt here](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/)...

...but **Python+BS4** can do very interesting tricks.

{{< callout type="info" >}}
It was very helpful to have thes [Scraping Tools Repo](https://github.com/JAlcocerT/Scrap_Tools) and to have [this related post](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/) 💻 
{{< /callout >}}

Lets have a look.


## For the Real Estate Project

* https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_AIgents/WebMigrAItion

* https://jalcocert.github.io/JAlcocerT/astro-web-setup/

{{< details title="Getting All the Images from the Web to Migrate [BS4] 📌" closed="true" >}}

You can do the following:

1. explore the website content
2. find the html section where all the photo links are stored
3. Use LLMs so that they give you a Python Code to: Find the photo links + Download them in a folder
4. Repeat for every link you have (leverage the previous functions)
5. [Optional] Include the folder to the `.gitignore`


> This is what I made with [this sample code here, just using BS4](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/WebMigrAItion/OpenAI_MigrateWebInfo_v2.py)

{{< /details >}}


{{< callout type="info" >}}
See how the [Real Estate Web Project was created](https://jalcocert.github.io/JAlcocerT/astro-web-setup/) from Scratch with Astro.
{{< /callout >}}

## A Wordpress Migration

{{< callout type="info" >}}
See how these Themes were [proposed as alternative to a Wordpress Web](https://jalcocert.github.io/JAlcocerT/wordpress-migration-to-ssg/).
{{< /callout >}}

{{% steps %}}

### Inspect SiteMap with Python

I created this Python Script to [Inspect (and save) the SiteMaps](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/WebMigrAItion/GetUrls/check_sitemapv1.py)

### Use AI Generated Script to get all URLs

I used chatgpt to create the following...

Another [Py scripts that saves as `.csv` all the different urls](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/WebMigrAItion/GetUrls/check_sitemapv3_geturls.py) Links as per the SiteMap

> For the future, you can do these 2 steps with ONE SCRIPT

Always good to check if there are broken links referenced in each original posts - For correction.

### Scrap & Get all info (as it is of one Link)

For Scrapping, there are few options [as we saw: Crawl4AI, ScrapeGraph, FireCrawlAI...](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/)

But we can have a custom tool with BS4.


### Leverage Time - Get info...of ALL Links

In this case, we had to go through ~1k different urls.

That was a good reason to go with a HUGO Theme as well. Fuwari Astro was also an alternative.

Big thanks yo CaiJimmy/hugo-theme-stack-starter.

Each post has 2 different languages.

{{% /steps %}}

### Custom BS4 Tool

Making sure that all info is there by knowing the web categories

#### Category 1 Posts

Example - *De hombres y maquinas* <https://jmodels.net/2020/08/10/de-hombres-maquinas-554-ilyushin-db-3/>

1) See how the html is structured
* In this case, they are under `<div class="content clear fleft" id="content">`
2) Create a BS4 scrpt to get the content
* Here, it redirects to this link - https://jmodels.net/de-hombres-y-maquinas/aire-air/ilyushin-db-3/
* It was not flagged in the sitexml, but checking the robots...there is another sitemap `https://jmodels.net/news-sitemap.xml`

```sh
curl -s https://jmodels.net/robots.txt | grep -i sitemap #look for sitemap direction
```

* And its also not there...**TBC!!!**

3) Inspecting a URL with content - https://jmodels.net/de-hombres-y-maquinas/aire-air/ilyushin-db-3/
* Inspecting it, we have content at `<div class="post-content clear">`

4) Plug the scrapped content to an LLM to **get the markdown**, while preserving the initial structure
* This script takes the [info from the given div, and feeds it to OpenAI API to get `.md`](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/WebMigrAItion/Fetch_Post_Info/get_postwithcontent_openai_v2a.py)
5) If you already have a theme selected, you ar every close to have one post migrated



---

## FAQ

