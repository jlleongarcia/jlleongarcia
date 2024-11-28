---
title: "Getting Cool (and secure) Website with https"
date: 2024-09-28
draft: false
tags: ["dev"]
summary: 'Creating a secure Site with no https errors'
url: 'transforming-and-securing-a-website'
---

* Initial website `http://englishwithira.pl/`
    * **No https** / SSL certificates 💥
    * ~500 ms response time
    * Pretty mediocre speed results as seen by [Google pages Speed](https://pagespeed.web.dev/analysis/http-englishwithira-pl/fxrli277be?form_factor=mobile)

<!-- Iryna Valovych
valovych.iryna@gmail.com -->

{{< details title="Initial Status, with Numbers 📌" closed="true" >}}

![Uptime Ira](/blog_img/web/success4-ira/uptime-ira.png)

![Speed ira mobile](/blog_img/web/success4-ira/ira_mobile.png)

![Speed ira desktop](/blog_img/web/success4-ira/ira_desktop.png)

{{< /details >}}


As per [webcheck](https://web-check.xyz/check/http%3A%2F%2Fenglishwithira.pl%2F) the servers are with [ehost](https://ehost.pl/) or [xip](https://www.xip.pl/cennik.php)
* Domain at ~20 usd/y, server from 15 $/y, plus VAT. SSL seems to be extra 10 $/y, making ~50 $/y
* For some reason there was a external link to a totally unrelated site - `https:// koloroweprojekty . pl/` 
* Not only its not secured, but its also harming the planet with a [E Carbon Rating](https://www.websitecarbon.com/website/englishwithira-pl/)

> This person **deserves a better website**, which also respect our environment

## Landing Page Demo

Proposing the Astro [landing single pager](https://github.com/mhyfritz/astro-landing-page), which is MIT **Licensed**.

![Speed astro landing](/blog_img/web/success4-ira/ira_demo_astro_pagesspeed.png)

{{< details title="Testing Proposed Astro Themes 📌" closed="true" >}}

```sh
git clone https://github.com/mhyfritz/astro-landing-page

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

### Landing Page Result

* **Carbon footprint A+** - cleaner than 96% of all GLOBAL PAGES

![Speed astro landing](/blog_img/web/success4-ira/ira_demo_carbon_aplus.png)


https://github.com/JAlcocerT/ira-web
  * <https://ira-english.pages.dev/>

---


## Some Goodies for the Website

### How to add Calendars

* I like to use **Cal.com** (you can also try calendly or [acuityscheduling](https://es.acuityscheduling.com/))

### Adding Newsletter with MailerLite

---

## Other things I learnt recently

* **Business Cards**
    * On reddit I Saw: [moo](https://www.moo.com/us/), Vistaprint...
        * https://barcik.pl/en/business-cards/
        * https://www.bizay.pl/en/business-cards