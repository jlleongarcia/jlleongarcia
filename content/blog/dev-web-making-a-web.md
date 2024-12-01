---
title: "Customizing a Web for Real Estate"
date: 2024-09-27T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Creating a responsive Astro site - Real Estate Oriented'
url: 'astro-web-setup'
---

How to make a **cool website for Real Estate?**

**[Astro](https://jalcocert.github.io/JAlcocerT/create-your-website/) SSG** is the Answer.

* Competitors / Ideas :
  * https://www.inmobiliariacano.es/
  * https://casaensol.pl/
  * https://syrenare.com/
  * All are **performing slooow** at up to ~1 second initial for a simple http request!
* **Result**: <https://dm-real-estate.com/>

![Competitor 1](/blog_img/web/success3-realestate/uptime-realestate-demo.png)

![Competitor 2](/blog_img/web/success3-realestate/uptime-casaensol.png)

![Competitor 3](/blog_img/web/success3-realestate/uptime-cano.png)

{{< callout type="info" >}}
How much better is **the result**? [Jump to it](#real-estate-web---results)
{{< /callout >}}



### Demo with Cloudflare Pages

Lets do this.

![A quick project - meme](/blog_img/memes/zinedine-zidane-materazzi.gif#center)


{{< callout type="info" >}}
I created a [**Private repo with Github**](https://github.com/JAlcocerT/ScrewFastMoiRealEstate) with the **Real Estate Web** Project
{{< /callout >}}

Which is deployed with [CF Pages](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/): **<screwfastmoirealestate.pages.dev>**


> Powered by [Astro 😍 ScrewFast](https://github.com/JAlcocerT/ScrewFast) and some ideas from [Nebulix Shop](https://nebulix.unfolding.io/shop/buy-me-a-cocktail/)

{{< callout type="info" >}}
[Nebulix](https://github.com/unfolding-io/nebulix) supports Static CMS
{{< /callout >}}

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

Now pushing the generated content to Cloudflare:

```sh
#npx wrangler pages project list #check existing projects
npx wrangler pages deploy .vercel/output/static #dist 
```

* Demo deployed with [Cloudflare Pages](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/#setup-cloudflare-workers-and-pages): `https://moises-era.pages.dev/`
  * https://a75e88ca.moises-era.pages.dev
* https://pagespeed.web.dev/analysis/https-moises-era-pages-dev

> Thanks to [Astro & mearashadowfax](https://github.com/mearashadowfax/ScrewFast)

{{< /details >}}

Just as we did [here](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/#setup-cloudflare-workers-and-pages), but this time, **with a private repo**.

<!-- {{< callout type="warning" >}}
I had to create a separate project with the wrangler (belonging to the repo).
{{< /callout >}} -->


Normally, Astro pages push the build files to `./dist`, but this theme does it differently to `./vercel/...`

![Cloudflare will build Astro for us](/blog_img/web/success3-realestate/Cloudflare-BuildAstro.png)

When you hit deploy, the process will start: build environment -> clone git repo -> build web files/

> Astro will take a little bit longer than HUGO to build.

![Cloudflare workers building Astro](/blog_img/web/success3-realestate/Cloudflare-WorkersnPages-Astro.png)


{{< callout type="info" >}}
  The domain and pages are [handled by Cloudflare](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/)
{{< /callout >}}

After it's deployed, you can just hit `Add custom domain`, in this case for `screwfastmoirealestate.pages.dev`, we will choose: `dm-real-estate.com`

A CName record will be added automatically:

![Cloudflare workers pages custom domain DNS Setup](/blog_img/web/success3-realestate/RealEstate-DNS.png)

You can also add the `www.dm-real-estate.com` if you hit again `Set up a custom domain`.

After Verification is completed, your Web deployment Workflow is Ready with **Cloudflare Pages and Workers plus a private Github Repository**.

![Cloudflare workers subdomain Setup](/blog_img/web/success3-realestate/RealEstate-Domains.png)

### Real Estate Web - Results

You can have a look to the **crafted Website**:

{{< cards cols="1" >}}
  {{< card link="https://dm-real-estate.com/" title="Real Estate Demo" >}}
{{< /cards >}}

{{< cards cols="2" >}}
  {{< card link="https://github.com/JAlcocerT/ScrewFastMoiRealEstate/" title="Source Code" icon="github" tag= "Code" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/blog/dev-css/" title="CSS for Cool Sites" >}}
{{< /cards >}}



{{< cards >}}
  {{< card link="../callout" title="Callout" icon="warning" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/" title="CF WnP Setup" tag= "YT Channel" >}}
  {{< card link="../callout" title="Card with blue tag" tag="tag text sample" tagType="info" >}}
  {{< card link="https://dm-real-estate.com/" title="Real Estate Demo" >}}
{{< /cards >}}

<!-- 

* [Source Code](https://github.com/JAlcocerT/ScrewFastMoiRealEstate). -->

<!-- * [Source Code](https://github.com/IoTechCrafts/ScrewFastMoises). -->

And it seems that **Google likes it**:

![RealEstate Web - Performance](/blog_img/web/success3-realestate/RealEstate-Results.png)


---

## Extra Functionality

* Newsletters and contact form added [with MailerLite](https://jalcocert.github.io/JAlcocerT/blog/dev-forms/#mailerlite)
* GDPR Compliant out of the box

{{< callout type="info" >}}
Who said, **embedded Chatbot**? Maybe [Flowise AI](https://fossengineer.com/selfhosting-flowise-ai/)? Or just a [LLM over custom data](#real-estate-bot-agent)?
{{< /callout >}}

![Flowise AI Example](/blog_img/GenAI/pdf-flowise.png)

{{% details title="More Embedded ChatBots for your website... 🚀" closed="true" %}}

* Paid/Chat Options - ChaPort
* **SelfHosted Options:** [ChatWoot](https://fossengineer.com/selfhosting-chatwoot/), [LangFlow](https://fossengineer.com/free-open-source-chat-bots/)

{{% /details %}}

### Real Estate Bot Agent

But, if you really want something to perform with your data...

...**make it yourself**.

* Features it should be able to reply:
  * Follow up questions from the real state agent etc
  * Do you have family / car / pool

> From Idea to Impact, **with AI**


{{< callout type="info" >}}
You could say this is all **a [Data-ChatBot](https://github.com/JAlcocerT/Data-Chat)**. LlamaIndex + Mem0 does the trick.
{{< /callout >}}

<!-- 
Observability Platform for LLMs
  https://github.com/traceloop/openllmetry
  https://github.com/langfuse/langfuse
  
  Epam Dial + prometheus + grafana
  Or with LangSmith
Also DataDog - https://docs.datadoghq.com/llm_observability/ -->

<!-- Goals:
  • AI Gen
    LangChain
    LocalModels: with Docker
    From Streamlit to Chainlit / Gradio: https://pypi.org/project/gradio/
    LLMOps: MLFlow, Airflow, VectorDBs… Onboarding Guide - GenAI-X Innovation Team - EPAM Knowledge Base
      mlflow/mlflow: Open source platform for the machine learning lifecycle (github.com)
    GPT4-Turbo
  • V3 of ML trainnings - To include MLFlow
Airflow to start some job? -->

### AI Driven Website Migration

Do you have tons of images in and old website?

Maybe a Wordpress, Ghost or Wix?

Not a problem. You can quickly use **AI to create a migration script**.

In the end, Astro (and other SSGs) are all about markdown files and images.

{{< callout type="info" >}}
For this Real Estate Web project I used [this assistant](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_AIgents/WebMigrAItion), migrating the images with this [**AI script**](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/WebMigrAItion/OpenAI_MigrateWebInfo_v2.py).
{{< /callout >}}

### Checks Before Web Delivery

{{% details title="How to Use LinkChecker... 🚀" closed="true" %}}

Links can be checked with **LinkChecker**.

* Use LinkChecker with the [GHCR Container Image](https://github.com/linkchecker/linkchecker/pkgs/container/linkchecker)

```sh
# docker run --rm -it -u $(id -u):$(id -g) ghcr.io/linkchecker/linkchecker:latest --verbose https://https://www.psikolognevinkeskin.com/

podman run --rm -it ghcr.io/linkchecker/linkchecker:latest --verbose https://www.psikolognevinkeskin.com/ > linkchecker_psyc.txt
```

Resulting at:

```txt
That's it. 53 links in 53 URLs checked. 5 warnings found. 0 errors found.
Stopped checking at 2024-10-19 07:34:09+000 (12 seconds)
```

**Alternatively, linkchecker can do its job during the build with Github Actions.**

Create a WF with 3 jobs: build, test (Linkcheck here, informative), deploy. Like this one with HUGO.

{{% /details %}}