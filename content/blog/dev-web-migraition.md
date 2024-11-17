---
title: "Streamlit MigrAItion - Making cool Webs from old ones "
date: 2024-11-14
draft: false
tags: ["AI"]
description: ""
summary: 'Using AI to migrate websites to SSG. For Real Estate and Wordpress projects.'
url: 'how-to-migrate-a-website'
---


It's always great to having a look to the initial pages to know what to expect from them.


{{< details title="Checking that a Website works - or in this case, what we will have to Migrate 📌" closed="true" >}}

* WebCheck - 
* Gte all url/pages of a website - A must to migrate everything!
* Are there any broken links?

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

## A Wordpress Migration

https://jalcocert.github.io/JAlcocerT/wordpress-migration-to-ssg/