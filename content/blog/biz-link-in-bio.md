---
title: "Cool Link in Bios (with SSGs)"
date: 2025-01-22
draft: false
tags: ["Web"]
description: "Have a cool LinkInBio website with HUGO and Astro. Alternative to linktree with Gitlab and Cloudflare WnP Setup."
summary: 'HUGO and Astro as linkinbio websites'
url: 'cool-link-in-bios'
---


Having a cool **website for you linkinbio** can be a good experience to get started with SSGs.

And they will provide a **similar experience** to linktree, linkbio,...

{{< callout type="info" >}}
https://jalcocert.github.io/JAlcocerT/create-your-website/
{{< /callout >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/using-astro-as-website/" title="Astro 101" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/" title="HUGO 101" >}}
{{< /cards >}}


{{< callout type="info" >}}
And you can use these [SSGs with **GHPages**](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/)
{{< /callout >}}


## HUGO as Link in Bio

HUGO with one of my fav themes - [Lynx](https://jalcocert.github.io/JAlcocerT/portfolio-website-for-social-media)


## Astro as Link in Bio

`Treelink` and and `astro-link-in-bio-theme` are really cool imo!

1. https://github.com/nevthereal/linktree-template

2. https://astro.build/themes/details/ltree/

3. https://github.com/Boston343/landingpad
* https://landingpad.cosmicthemes.com/

> GPL 3.0 A free and open source template to host your links and socials. Built with Astro, Tailwind CSS, and Keystatic CMS by Cosmic Themes.



Thanks to Boston343, I got to know about **keystack CMS**


[KeyStack](https://keystatic.com/) CMS - https://github.com/Thinkmill/keystatic

> MIT | First class CMS experience, TypeScript API, Markdown & YAML/JSON based, no DB

<!-- https://www.youtube.com/watch?v=E65Fx9all04&t=9s -->
{{< youtube "E65Fx9all04" >}}

4. https://github.com/trevortylerlee/treelink
* https://treelink.app/
* https://example.treelink.app/
* https://docs.treelink.app/guides/quick-start/

> **MIT** | Free, open source Linktree alternative built with Astro & Tailwind CSS

```sh
git clone https://github.com/trevortylerlee/treelink

npm install
npm run dev

#rm -rf .git
npm run build
```

It worked and **I Forked it**! https://github.com/JAlcocerT/treelink

* https://pagespeed.web.dev/analysis/https-example-treelink-app/l6prjspv4k?form_factor=mobile

What I lived about this one?

It allow you to have a exposed static built site and also provides the capability to edit also online and export the `/src/siteConfig.json`



5. https://github.com/SofiDevO/allmylinks

6. https://github.com/MarcosKlender/AstroLinkHub

> MIT | Open source links page, customizable via JSON. Made with Astro 4.

7. https://github.com/ctrimm/astro-link-in-bio-theme

* https://lib.corytrimm.com/
* https://astro.build/themes/details/link-in-bio-theme/

> Link In Bio Theme for Astro

{{< callout type="info" >}}
Thanks to Ctrimm's theme, I got to know about the https://www.avatartion.com/ [project](https://github.com/wilmerterrero/Avatartion) to generate avatars in notion style. Also MIT Licensed!
{{< /callout >}}

```sh
git clone https://github.com/ctrimm/astro-link-in-bio-theme

npm install
npm run dev #

#rm -rf .git
npm run build
```

LayoutSwitcher can be commented from `layout.astro` and in `config.js` you have everything you need to tweak the theme!

{{< callout type="info" >}}
It uses [fontawsome icons](https://fontawesome.com/search), great reference for icons!
{{< /callout >}}


8. https://github.com/flamrdevs/astrolinkt

> MIT | Link in Bio Template using Astro, React & TailwindCSS

9. https://github.com/apvarun/linkverse

10. https://github.com/saminnet/astro-simple-portfolio

It has a very cool moving background

> MIT | Very simple portfolio built using Astro

11. https://github.com/vito8916/simple-portfolio

Really cool ig like portfolio, [had to fork this one](https://github.com/JAlcocerT/simple-portfolio)!

It looks amazing in phones

> MIT | A simple but beautiful portfolio created with Astro

12. https://github.com/alamguardin/Astrolink

This is how they can look:

{{< cards >}}
  {{< card link="https://whoisyarnness.cozyknittingclub.com" title="Link in Bio for Knitting" image="/blog_img/web/WebsSnapshots/Web_CyclingThere.png" subtitle="Astro treelink Customization" >}}
  {{< card link="https://cozyknittingclub.com/" title="Content Creator Blog" image="/blog_img/web/WebsSnapshots/Web_CKC.png" subtitle="For an instagramer who loves knitting" >}}
{{< /cards >}}

And like this:

{{< cards >}}
  {{< card link="https://financeinmotion.fyi/" title="LinkinBio" image="/blog_img/web/WebsSnapshots/Web_IoTechCrafts.png" subtitle="Links with astro-link-in-bio-theme" >}}
  {{< card link="https://jalcocert.github.io/Portfolio/" title="Links with HUGO LYNX" image="/blog_img/web/WebsSnapshots/Web_PortfolioLinks.png" subtitle="Collection of important Links" >}}             
{{< /cards >}}

### LinkInBio as Personal CV

While I was investigating those astro linkinbio theme, I found out also about some themes that can be actually be our personal CV, in a website, with links as well!

1. https://github.com/mmouzo/astro-cv-esquelete

> MIT | A free, easy-to-use CV template with a clean design. Just fill in your details and you're ready to go!



## How to Deploy SSGs Link in bio

0. With Firebase or **Cloudflare CLI**

```sh
npm run build

```

```sh
npx wrangler pages project create #this will install the wrangler CLI package
#npx wrangler pages project list
#npx wrangler pages deployment list

#npm run build

#https://developers.cloudflare.com/pages/configuration/build-configuration/#framework-presets
npx wrangler pages deploy dist # normally will be dist, but whatever <BUILD_OUTPUT_DIRECTORY>
```

We will upload the `./dist` folder, as its the place where the static files are built.

{{< callout type="warning" >}}
This approach does not use CI/CD for improved workflow as the following ones!
{{< /callout >}}

**You can use these 2 other methods as an alternative, it also works with private repositories**

1. Github + Cloudflare Workers and Pages

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages" title="Example of Github + CF Pages" >}}
{{< /cards >}}

2. **Gitlab + Cloudflare WnP**

<!-- https://gitlab.com/fossengineer1/financeinmotion -->


1. Get a domain name with Cloudflare as **Authoritative Name Server**

![CF Custom Domain2 ](/blog_img/web/Cloudflare/CF-CustomDomain-DNSManagement.png)

![CF Custom Domain2 ](/blog_img/web/Cloudflare/CF-NameServers.png)

![CF Custom Domain2 ](/blog_img/web/Cloudflare/CF-Porkbun-NS.png)

2. 


{{% steps %}}

### Astro Site to Github Repository

Push your code to a [Github Repository](https://jalcocert.github.io/JAlcocerT/github-gists).

### Setup Cloudflare to with with Github

Go to [Cloudflare UI](https://dash.cloudflare.com/).

Compute (workers) -> **Worker & Pages** -> Overview.

Create -> Pages -> Connect Git.

You will Need a Github Account Authentication

### Setup Cloudflare Workers and Pages


{{% /steps %}}

Go to the [Cloudflare UI](https://dash.cloudflare.com), and...