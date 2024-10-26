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
  * All are **performing slooow** at up to ~1 second initial for a simple http request!

![Uptime Ira](/blog_img/web/success3-realestate/uptime-realestate-demo.png)

![Uptime Ira](/blog_img/web/success3-realestate/uptime-casaensol.png)

![Uptime Ira](/blog_img/web/success3-realestate/uptime-cano.png)

{{< callout type="info" >}}
How much better is **the result**? [Jump to it](#real-estate-web---results)
{{< /callout >}}



### Demo with Cloudflare Pages

Lets do this.

![A quick project - meme](/blog_img/memes/zinedine-zidane-materazzi.gif#center)


{{< callout type="info" >}}
I created a [**Private repo with Github**](https://github.com/JAlcocerT/ScrewFastMoiRealEstate)
{{< /callout >}}


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
Who said, **embedded Chatbot**?
{{< /callout >}}

### Real Estate Bot Agent

* Follow up questions from the real state agent etc
* Do you have family / car / pool

> From Idea to Impact, **with AI**

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