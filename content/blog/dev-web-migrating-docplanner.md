---
title: "Customizing a Web for Health Care"
date: 2024-09-29
draft: false
tags: ["dev"]
summary: 'From docplanner to owning a responsive Website'
url: 'docplanner-web-migration'
---

* Competitors / The initial site:
    * https://www.docplanner.com/
    * https://www.doktortakvimi.com/
        * https://pro.doktortakvimi.com/fiyatlandirma
    * https://www.psikolognevinkeskin.com/
    * https://www.psikolojisaati.com/
* Chosen Domain: `psikolognevinkeskin.info`


Currently paying **80 USD a MONTH** for that website (and...marketplace)


{{< callout type="info" >}}
Time to use [**FireCrawl** as scrap tool](https://github.com/JAlcocerT/Scrap_Tools), to get the content
{{< /callout >}}

## Analyzing the Initial Status

{{< dropdown title="Broken links? LinkChecker ⏬" closed="true" >}}

* Use LinkChecker with the [GHCR Container Image](https://github.com/linkchecker/linkchecker/pkgs/container/linkchecker)
    * Its x86 only

```sh
# docker run --rm -it -u $(id -u):$(id -g) ghcr.io/linkchecker/linkchecker:latest --verbose https://https://www.psikolognevinkeskin.com/

podman run --rm -it ghcr.io/linkchecker/linkchecker:latest --verbose https://www.psikolognevinkeskin.com/ > linkchecker_psyc.txt
```

Resulting at:

```txt
That's it. 53 links in 53 URLs checked. 5 warnings found. 0 errors found.
Stopped checking at 2024-10-19 07:34:09+000 (12 seconds)
```

{{< /dropdown >}}

### FireCrawl Setup

So 53 urls on the site, sounds like the moment to use [FireCrawl](https://github.com/mendableai/firecrawl) and get the content.



{{< details title="FireCrawl with Python 📌" closed="true" >}}

Full code is in [my repo, here](https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_UseCase1-Nevin).

You will need the [FireCrawl API](https://www.firecrawl.dev/app) and a code like below, which **scraps a single url**.

We dont need the crawling capabilities, as the web is **a single pager**.

```py
from firecrawl import FirecrawlApp
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the API key from environment variable
api_key = os.getenv('FIRECRAWL_API_KEY')
# #app = FirecrawlApp(api_key='fc-yourapi')

if api_key is None:
    raise ValueError("API key not found in environment variables")

# Initialize the FirecrawlApp with the API key
app = FirecrawlApp(api_key=api_key)

# URL to scrape
url = 'https://www.psikolognevinkeskin.com'

# Scrape the data
scraped_data = app.scrape_url(url)

# Write the output to a file using UTF-8 encoding
with open("output_nevin2.txt", "a", encoding="utf-8") as f:
    f.write(str(scraped_data) + "\n")
```


{{< /details >}}

The magic happened, and now we have **json like web information** saved in a txt.

{{< details title="Tools for easier JSON 📌" closed="true" >}}

In the [Big Data PySpark post](https://jalcocert.github.io/JAlcocerT/guide-python-PySpark/#faq), we got to use: [jsonformatter](https://jsonformatter.org/), but there are more.

* https://github.com/josdejong/jsoneditor - A web-based tool to view, edit, format, and validate JSON

* https://github.com/AykutSarac/jsoncrack.com - ✨ Innovative and open-source visualization application that transforms various data formats, such as JSON, YAML, XML, CSV and more, into interactive graphs.


{{< /details >}}

But actually, **FireCrawl provides markdown**, ready for LLMs:

{{< callout type="warning" >}}
  But actually, **FireCrawl provides markdown**, ready for LLMs.
{{< /callout >}}



{{< details title="Tools for easier markdown 📌" closed="true" >}}

* https://markdownlivepreview.com/



{{< /details >}}

And time to translate. Yea, the original site its in turkish, and initially I went the [googletranslation](https://pypi.org/project/googletrans/#history) way, but the pkg is outdated and i got conflicts with httpx.

Time to try [deep_translator](https://pypi.org/project/deep-translator/). And [the test](https://github.com/JAlcocerT/Scrap_Tools/blob/main/FireCrawl/Z_UseCase1-Nevin/firecrawl_output_parsertransdeepL.py) went fine.

{{< callout type="info" >}}
FireCrawl can be integrated with: [CrewAI](https://fossengineer.com/ai-agents-crewai/), LangChain, [Flowise](https://fossengineer.com/selfhosting-flowise-ai/), DifyAI, Zapier...
{{< /callout >}}


### Proposed Themes

* https://agencex-astro.vercel.app/
* https://astroship.web3templates.com/

Both probably an overkill, coming from a single pager.

So I proposed this as a [landing single pager](https://github.com/mhyfritz/astro-landing-page) or this as sth more advance with blog as well, **[portfolio](https://github.com/withastro/astro/tree/main/examples/portfolio)** - Both **MIT Licensed**.



{{< details title="Testing Proposed Astro Themes 📌" closed="true" >}}

```sh
git clone https://github.com/withastro/astro
cd ./examples/portfolio

npm install
npm run dev
```

Everything worked, so i created this [repo for the project](https://github.com/JAlcocerT/morita-web)


```sh
npm run build
npm install -g serve #serve with npm

serve -s dist #http://localhost:3000
```
{{< /details >}}

And I used [Cloudflare together with github](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/), for the demo deployment.

The result was available, after few minutes here: <https://morita-web.pages.dev/>