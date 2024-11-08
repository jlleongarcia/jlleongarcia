---
title: "Life is Short. Dont waste it with the `Wront` Website."
date: 2024-09-30
draft: false
tags: ["dev"]
summary: 'Helping people by making them Websites. What I have built so far.'
url: 'portfolio-websites'
---


It all started few years ago with my **own travel blog**.

Later on, my first business website followed.

{{< cards >}}
  {{< card link="https://cyclingthere.com" title="My Travel Adventures" image="/blog_img/web/WebsSnapshots/Web_CyclingThere.png" subtitle="I can write and also create interesting photo galleries about my travel experiences" >}}
  {{< card link="https://iotechcrafts.com/" title="Business Website" image="/blog_img/web/WebsSnapshots/Web_IoTechCrafts.png" subtitle="A Website for Agency - AI & IoT Consulting Services" >}}
{{< /cards >}}

And then I saw **people close to me, who needed help**.

## Custom Websites

Then...started customizing websites:

{{< cards >}}
  {{< card link="https://cozyknittingclub.com/" title="Content Creator Blog" image="/blog_img/web/WebsSnapshots/Web_CKC.png" subtitle="For an instagramer who loves knitting" >}}
  {{< card link="https://morita-web.pages.dev//" title="Health Care Site" image="/blog_img/web/WebsSnapshots/Web_Nevin.png" subtitle="Because the brain is as important as the body" >}}
    {{< card link="https://dm-real-estate.com/" title="Real Estate Official Site" image="/blog_img/web/WebsSnapshots/Web_realestate.png" subtitle="A Real Estate Business Site for Spain" >}}
    {{< card link="https://jmodels.net/" title="Scale Modelling Blog" image="/blog_img/web/WebsSnapshots/Web-jmodels.png" subtitle="Fantastic Blog with ~1K Posts about Modelling" >}}
    {{< card link="https://ira-english.pages.dev/" title="Personal Business Landing" image="/blog_img/web/WebsSnapshots/Web_EnglishIra.png" subtitle="Landing Page for a well Known English Teacher" >}}
    {{< card link="https://enjoylittlethings.org/" title="Travel Adict Photo Gallery" image="/blog_img/web/WebsSnapshots/Web_PhotoGalleryAGA.png" subtitle="Because Photo & Travel lovers need something more than instagram" >}}    
    {{< card link="https://jalcocert.github.io/Portfolio/" title="All your Links" image="/blog_img/web/WebsSnapshots/Web_PortfolioLinks.png" subtitle="Sleek collection of important Links" >}} 
    {{< card link="https://iodoctor.iotechcrafts.com/" title="Doctor Consultation" image="/blog_img/web/WebsSnapshots/Web_IoDoctor.png" subtitle="Landing and WebApp for Scheduling Doctor Appointments" >}}            
{{< /cards >}}


{{< details title="All powered by HUGO & Astro 📌" closed="true" >}}

* https://github.com/JAlcocerT/cozyknittingclub-web
* https://github.com/JAlcocerT/morita-web
* https://github.com/JAlcocerT/ScrewFastMoiRealEstate
  * https://jalcocert.github.io/JAlcocerT/astro-web-setup/
* https://jalcocert.github.io/JAlcocerT/wordpress-migration-to-ssg/
* https://github.com/JAlcocerT/ira-web
* https://github.com/JAlcocerT/agutek-portfolioweb
  * https://jalcocert.github.io/JAlcocerT/creating-photo-centric-blog-with-hugo/
* https://github.com/JAlcocerT/Portfolio


```sh
npm run dev

#hugo server
hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.171" --port=1319
```

> The baseURL if you are doing dev in a server 

{{< /details >}}

---

## Next Steps

Making a better [LinkTree](https://linktr.ee/s/pricing/) or [linkbio](https://www.linknbio.com/pricing)

At the moment of writing, they are charging 5$/m for the first paid tier.

It goes to 9$/m to have newsletter and web analytics...or customize the UI.

<!-- {{< callout type="info" >}}
A cool UI is mostly [a matter of CSS](https://jalcocert.github.io/JAlcocerT/blog/dev-css/)
{{< /callout >}} -->



<!-- 
Gain deeper insights with comprehensive location/referrer based analytics and conversion tracking
Collect email addresses and phone numbers directly from your Linktree to build your own visitor list
Marketing tech capabilities including SEO settings, Google Analytics, Zapier, and Mailchimp integrations -->

### Scaling Ideas

* Examples, this [artist profile](https://linktr.ee/bogusia.adryan) and this [awsome designer profile](https://linktr.ee/karwozniak)
    * And somethin' like:
        * https://github.com/jpanther/lynx - MIT!
        * https://github.com/SofiDevO/allmylinks
        * https://github.com/DBozhinovski/astro-theme-ltree - TinaCMS!

{{< callout type="info" >}}
Like we did at the **Social Media Project!**
{{< /callout >}}

* **Automatic Invoices**
  * With Stripe as payment gateway, they create the invoices for your product/services automatically
  * There are some project to [create invoices with open software](https://fossengineer.com/open-source-invoice-creator/).


{{% details title="ServerLess-Invoices Setup 🚀" closed="true" %}}

Create and manage invoices in your browser. Serverless Invoices is a free invoicing tool for freelancers and small businesses. 

**Made with Vue.js.** 

```sh
git clone https://github.com/mokuappio/serverless-invoices.git
#https://github.com/JAlcocerT/serverless-invoices

cd serverless-invoices
#rm -rf .git

docker build . -t mokuappio/serverless-invoices
docker run -p 89:8080 -d --rm mokuappio/serverless-invoices
```

You can print to pdf, add your logo, taxes, CSS...

* Or use their Saas: https://app.mokuapp.io/login

{{% /details %}}

<!-- * Proposed: bogusiabachata.pro -->

<!-- More ppl to help - future CLIENTS

* you dont need to pay for wordpress themes, its already there and it works
  * https://generatepress.com/pricing/

* Pablo Couto - https://www.buildingfuturecapital.com/

https://web-check.xyz/check/https%3A%2F%2Fwww.buildingfuturecapital.com%2F

Registry Expiry Date - 26 April 2025

* Miguel alcocer photo blog

* JoseLuis Github

* Sofia - zofienkagram
  * https://wnba.pl/ - another wordpress (good looking)
  * monika ciolkowska - monikacio
    * https://monikaciolkowska.portfoliobox.net/
    * Using the low tier without domain of https://www.portfoliobox.net/pricing (46$/y)
      * Interesting section with a table comparing services and faq (go below)

* Gym Trainer - https://trenujswiadomie.pl/kokpit/

* ecommerce - https://outficik.pl/

---

To try Astro+Ghost headlessCMS as described 
https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#gatsby

-->