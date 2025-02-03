---
title: "Trying a Nuxt Theme and a SSG Recap"
date: 2025-02-23
draft: false
tags: ["dev"]
summary: ''
description: 'Testing NUXT Themes. Looking back to the learnings with other SSGs like HUGO and Astro'
url: 'trying-nuxt-themes'
---

New year, time to **try out some new SSG**.

This time it is the turn of **Nuxt**

* https://github.com/HugoRCD/canvas

1. the first thing I noticed, it takes much more time to load compared to Astro or NextJS sites, and much more than HUGO.

You just need **2 things**: NPM and NodeJS.

* https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* https://nodejs.org/en/download/package-manager


{{< details title="Setup Node and NPM - x86/ARM64/ARM32 📌" closed="true" >}}

```sh
sudo apt update && sudo apt upgrade

#install NodeJS https://deb.nodesource.com/
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# Verify installation
node -v   # Should show Node.js version - 20.18.1
npm -v    # Should show npm version - 10.8.2
```

{{< /details >}}

Now you can spin a server and make **ASTRO [Remote Development](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker)** in it.


---

## A SSG Recap

{{< callout type="info" >}}
Im assuming that you are already aware [about CSS](https://jalcocert.github.io/JAlcocerT/blog/dev-css/) and [JS tricks](https://jalcocert.github.io/JAlcocerT/javascript-for-static-websites)
{{< /callout >}}

Most SSGs will be powered by node.

Certainly! Below is an improved version of the table that provides a comparison of **Hugo**, **Astro**, **Next.js**, **Jekyll**, **Gatsby**, and **Nuxt**. It highlights key aspects of each static site generator or framework.

| About | Hugo | Astro | Next.js | Jekyll | Gatsby | Nuxt |
|-------|------|-------|---------|--------|--------|------|
| **Source Code** | [Hugo on GitHub](https://github.com/gohugoio/hugo?ref=fossengineer.com) | [Astro on GitHub](https://github.com/withastro/astro?ref=fossengineer.com) | [Next.js on GitHub](https://github.com/vercel/next.js?ref=fossengineer.com) | [Jekyll on GitHub](https://github.com/jekyll/jekyll?ref=fossengineer.com) | [Gatsby on GitHub](https://github.com/gatsbyjs/gatsby?ref=fossengineer.com) | [Nuxt on GitHub](https://github.com/nuxt/nuxt.js?ref=fossengineer.com) |
| **License** | [Apache License 2.0](https://github.com/gohugoio/hugo/blob/master/LICENSE?ref=fossengineer.com) ✅ | [MIT License](https://github.com/withastro/astro/blob/main/LICENSE?ref=fossengineer.com) ✅ | [MIT License](https://github.com/vercel/next.js/blob/canary/LICENSE?ref=fossengineer.com) ✅ | [MIT License](https://github.com/jekyll/jekyll/blob/master/LICENSE.txt?ref=fossengineer.com) ✅ | [MIT License](https://github.com/gatsbyjs/gatsby/blob/master/LICENSE.md?ref=fossengineer.com) ✅ | [MIT License](https://github.com/nuxt/nuxt.js/blob/main/LICENSE?ref=fossengineer.com) ✅ |
| **Performance** | ⚡️ Lightning-fast static website generation | ⚡️ Optimized for static sites with partial hydration | ⚡️ Full-stack with static site generation, hybrid support | ⏳ Slow generation, suited for simpler blogs | ⚡️ Excellent performance with static content & optimized builds | ⚡️ Fast, universal applications with server-side rendering and static site generation |
| **Type** | Static Site Generator | Static Site Generator (with partial SSR) | Full-stack Framework (with SSR & Static Generation) | Static Site Generator | Static Site Generator (React-based) | Full-stack Framework (with SSR & Static Generation) |
| **Built With** | Go | JavaScript (React) | JavaScript (React) | Ruby | JavaScript (React) | JavaScript (Vue.js) |
| **Key Feature** | **Blazing speed** for static sites | **Hybrid Static & SSR** with partial hydration | **SSR & SSG** (static generation and server-side rendering) | Easy blog setup using Ruby and Markdown | Rich React ecosystem, GraphQL support | Full-stack, **Vue.js** framework with server-side rendering |
| **Best For** | Developers looking for **speed** and simplicity in static sites | Developers who need a **modern hybrid approach** (static + SSR) | Building **complex web applications** with both static and dynamic content | Simple blogs and personal websites | Content-rich websites with React | Building modern web apps using **Vue.js** |

[![Star History Chart](https://api.star-history.com/svg?repos=gohugoio/hugo,withastro/astro,vercel/next.js,jekyll/jekyll,gatsbyjs/gatsby,nuxt/nuxt.js&type=Date)](https://star-history.com/#gohugoio/hugo&withastro/astro&vercel/next.js&jekyll/jekyll&gatsbyjs/gatsby&nuxt/nuxt.js&Date)


<!-- [![Star History Chart](https://api.star-history.com/svg?repos=gohugoio/hugo&type=Date)](https://star-history.com/#gohugoio/hugo&Date) -->


For HUGO you will need to use GO, as explained [here](https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/).

For Jekyll, you will need Ruby.

If you plan to use [Github Pages with these SSGs](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/), create the proper **[Github Actions](https://jalcocert.github.io/JAlcocerT/github-actions-use-cases) workflow**.


{{< details title="To use HUGO, you just need to Setup GO & HUGO  📌" closed="true" >}}


* https://github.com/gohugoio/hugo/releases
* https://go.dev/dl/


Example with [v0.108.0](https://github.com/gohugoio/hugo/releases/tag/v0.108.0)

```sh
sudo apt update -y
sudo apt install wget

#install go
wget https://go.dev/dl/go1.21.1.linux-armv6l.tar.gz
sudo tar -C /usr/local -xvzf go1.21.1.linux-armv6l.tar.gz
export PATH=$PATH:/usr/local/go/bin
source ~/.bashrc
go version

#https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_0.108.0_linux-amd64.deb
go version && \
wget https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_0.108.0_linux-amd64.deb -O hugo_specific_version.deb && \
sudo dpkg -i hugo_specific_version.deb && \
rm hugo_specific_version.deb
```
{{< /details >}}


### HUGO

https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml

### Astro       


1. https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/
2. https://jalcocert.github.io/JAlcocerT/using-astro-as-website/
3. https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/
    * Example - https://github.com/JAlcocerT/web3/actions
    https://github.com/JAlcocerT/web3/blob/main/.github/workflows/deploy_astro.yml

{{< details title="What it is Pydantic? 📌" closed="true" >}}


1. Find the Theme Source Code

Github is a good starting point.

You can **take components ideas**, like: `::github{repo="saicaca/fuwari"}`

2. Clone The Theme

Make sure you are free to use the theme as per its License and then **clone it**:

```sh
git clone https://github.com/Ruben-Winant/astro_spark_template ./astro_template #it has a cool carousel!
cd ./astro_template
rm -rf .git #remove existing git
```

3. Try the Theme

```sh
npm run build
npm run dev
```

> Explore the results, most likely at: `http://localhost:4321`


{{< /details >}}

A typical astro project structure:

{{< filetree/container >}}
  {{< filetree/folder name="content" >}}
    {{< filetree/file name="_index.md" >}}
    {{< filetree/folder name="docs" state="closed" >}}
      {{< filetree/file name="_index.md" >}}
      {{< filetree/file name="introduction.md" >}}
      {{< filetree/file name="introduction.fr.md" >}}
    {{< /filetree/folder >}}
  {{< /filetree/folder >}}
  {{< filetree/file name="hugo.toml" >}}
{{< /filetree/container >}}

Astro Themes I find interesting:

1. Fuwari
2. VisVRS ()
3. AstroWind (which uses [Tailwind CSS](https://jalcocert.github.io/JAlcocerT/blog/dev-css/#competitors-to-tailwind-css))

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-your-website/" title="Resources to Create Cool Websites" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/understanding-astro-ssg-components/" title="Astro Components 101" >}}
{{< /cards >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/wordpress-migration-to-ssg/" title="Wordpress to SSG" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/guide-web3/" title="Web 3 with Astro" >}}
{{< /cards >}}


### NextJS


<!-- https://github.com/steven-tey/precedent -->
<!-- https://github.com/shadcn-ui/taxonomy 
https://tx.shadcn.com/
-->


<!-- PUBLIC APIs!!!
https://github.com/sozonome/pub-apis?ref=statichunt.com
https://publicapis.sznm.dev/all
also good to filter cards -->

<!-- filter cards for fossengineer - daisy UI??
https://github.com/steamwebapi/steam-inventory-next.js?ref=statichunt.com 
https://github.com/hassonor/apps-play?ref=statichunt.com
-->



<!-- 
 Full-Stack DApp Boilerplate for Substrate and ink! Smart Contracts 

https://github.com/scio-labs/inkathon?ref=statichunt.com -->

<!-- 
 A responsive Proptech dashboard built with Nextjs, Tailwind, and Typescript 

 https://github.com/stephengade/veerage-dashboard?ref=statichunt.com -->



 <!-- ChatGPT Plugin starter template built with Next.js 13 App Router, Edge Functions, and Vercel 
https://github.com/steven-tey/weathergpt?ref=statichunt.com#try-the-plugin -->

<!-- 
REAL STATE

https://github.com/nikolovlazar/frontend-horse-ui?ref=statichunt.com
web app ->> https://github.com/lazyfuhrer/Real-Estate-Web-App?tab=coc-ov-file#readme

pwa
https://github.com/kiri-art/stable-diffusion-react-nextjs-mui-pwa?ref=statichunt.com

ecommerce
https://github.com/riteshk-007/nextjs-store?ref=statichunt.com -->

<!-- Scribbly is a web application (not SSG)!!!! that provides a platform for users to create and manage their digital journal
https://github.com/subhamBharadwaz/scribbly -->


{{< details title="What it is Pydantic? 📌" closed="true" >}}

{{< /details >}}

Whether you’re building a blog, a corporate website, or an e-commerce platform, Next.js provides the tools and scalability to meet your project's demands.

### Gatsby

### Jekyll

Example [Jekyll GHA WF](https://github.com/JAlcocerT/RPi/blob/main/.github/workflows/pages-deploy.yml)

--- 

## FAQ


{{< details title="Good Practices for Web Repositories📌" closed="true" >}}

* Add a `.gitignore` and include the `node_modules` folder

```
node_modules
```

* Add a **docker ignore** if you plan to build images:

```
#add .env files if any
```

{{< /details >}}

### Free Hosting and Free Domain

Free Hosting Options with Free domain
  - **Firebase**: Host your Next.js SSG on Firebase for scalable hosting and integrated services like authentication, database, and analytics.
  - **Cloudflare Pages**: Deploy your Next.js SSG on Cloudflare Pages for fast and secure global distribution with built-in CDN and SSL/TLS encryption.
  - **GitHub Pages**: Easily host your Next.js SSG on GitHub Pages, perfect for static sites with seamless integration with your GitHub repository.

### Outro

* Where to get Free SVGs for my SSG:
  * https://www.svgrepo.com/svg/424489/adventure-journey-location?ref=fossengineer.com
  * https://fontawesome.com/?ref=fossengineer.com

* How to choose proper HEX colors:
  * https://github.com/Toinane/colorpicker?ref=fossengineer.com -  A mininal but complete colorpicker desktop app 
    * https://colorpicker.fr/app/?ref=fossengineer.com - you can try it online as well
  * https://github.com/eigenmiao/rickrack?ref=fossengineer.com -  Generate harmonious colors freely. 
  * https://huey.design/?ref=fossengineer.com

Brand colors with F/OSS

* https://colorpicker.fr/app/?ref=fossengineer.com
* https://huey.design/?ref=fossengineer.com
* https://leonardocolor.io?ref=fossengineer.com
  * https://github.com/adobe/leonardo?ref=fossengineer.com -  Generate colors based on a desired contrast ratio  - Apache v2

  Icons for NextJS

* https://github.com/twbs/icons?ref=fossengineer.com (MIT ❤️ Licensed SVG icons)
  * https://icons.getbootstrap.com?ref=fossengineer.com

```sh
npm i bootstrap-icons
```

> Official open source SVG icon library for Bootstrap.

* Look for icons with - https://github.com/antfu-collective/icones (MIT ❤️)
  * https://icones.js.org/

> ⚡️ Icon Explorer with Instant searching, powered by Iconify

* https://github.com/iconify/iconify (MIT ❤️)
  * https://iconify.design/docs/iconify-icon/
  * example - https://icon-sets.iconify.design/uil/bitcoin-circle/

```sh
npm install --save-dev @iconify-icon/react
```

> Universal icon framework. One syntax for FontAwesome, Material Design Icons, DashIcons, Feather Icons, EmojiOne, Noto Emoji and many other open source icon sets (over 150 icon sets and 200k icons). SVG framework, React, Vue and Svelte components!

* https://fontawesome.com/v5/search?o=r&m=free
  * https://fontawesome.com/license/free
  * https://github.com/FortAwesome/Font-Awesome

> And more! Font Awesome works with Require.js, Rails with Turbolink, and jQuery!

* https://github.com/lightvue/light-icons (MIT ❤️)
  * https://icons.lightvue.org/icons

add this to your css

```css
@import "../../node_modules/light-icons/dist/light-icon.css";
```

> Handpicked collection of premium & light-wighted icons as font





* https://github.com/tabler/tabler-icons
* https://icons.getbootstrap.com/
* https://github.com/tabler/tabler-icons
* https://iconoir.com/
* https://github.com/iconic/open-iconic#License-1-ov-file

* https://github.com/feathericons/feather (MIT Licensed)

> Simply beautiful open-source icons

* Icons for dashboards
  * https://github.com/walkxcode/dashboard-icons?tab=readme-ov-file

FavIcons for NextJS

* Just use {{< newtab url="https://realfavicongenerator.net/" text="Real Fav Icon Generator 😍" >}} and place in the the proper folder (where the default icons are on your Theme).


* Cool **FavIcon** with: https://favicon.io/favicon-converter/ - You can **upload an image**, then you will get the `favicon.ico` and other artifacts to make the web icons look amazing in any device.

1. Go to the theme folder
2. Add a `/static` folder
3. Add the files generated with the website


<!-- 
### Useful Resources for a Better Website

* Adding the project details as a post image thanks to https://socialify.git.ci/vercel/next.js/image?language=1&name=1&theme=Auto
  * https://socialify.git.ci/

### How to COnfigure Web analytics for NextJS

Umami for NextJS Sites 
Matomo
https://www.goatcounter.com/

Use fonts

https://wowchemy.com/docs/getting-started/customization/

Forms / Pop Ups

/how-to-customize-a-hugo-website/#including-leaflet-map-as-html

-->

<!-- ### How to notify Google about your site

* To ping **Google's engine** to review your site's sitemap:

```sh
curl "https://www.google.com/ping?sitemap=https://www.example.com/sitemap.xml"
```

* Don't forget about **Bing Search** as well:

```sh
curl "https://www.bing.com/ping?sitemap=https://www.example.com/sitemap.xml"
```  -->


<!-- ### How to use turbostrapi

STRAPI + NEXTJS MONOREPO STARTER

* https://github.com/sawden/turbostrapi/blob/master/apps/backend/README.md
* https://github.com/sawden/turbostrapi?ref=statichunt.com
https://github.com/sawden/turbostrapi?ref=statichunt.com
https://turbo.build/repo/docs/installing

```sh
yarn install
``` -->

<!-- Build a Blog with Next.js and a Headless CMS (Strapi)
https://www.youtube.com/watch?v=NNWX2flw5mg -->


<!-- 
NEXTJS + Strapi
https://www.youtube.com/watch?v=SlhZvwl9qtI&list=PL7Q0DQYATmvjXSuHfB8CY_n_oUeqZzauZ&index=9 -->

<!-- ### Other F/OSS SSG's

This addition suggests other Static Site Generators (SSGs) that readers might find interesting based on their enjoyment of the Next.js post. Let me know if you need any further adjustments!

    HUGO: Lightning-fast speed.
    Astro: Built-in support for server-side rendering (SSR).
    Jekyll: Simplicity and ease of use, particularly for blogging.
    Gatsby: Rich ecosystem of plugins and a vibrant community.

If you have enjoyed the Next.js post, you might be interested to explore other SSGs like HUGO, Astro, Jekyll, and Gatsby. -->


<!-- Cloudflare runners -->



<!-- - **Gatsby**: Gatsby is a popular static site generator within the **React** ecosystem, leveraging React for building static sites and offering a rich plugin ecosystem.
  - **Pros**:
    - Ability to pull data from various sources, including CMSs and APIs.
    - React-based, enabling component-based development and rich interactivity.
    - Extensive plugin ecosystem for adding functionality and integrating with third-party services.
  - **Cons**:
    - Longer build times for large projects due to complex data fetching and processing.
    - Steeper learning curve for developers unfamiliar with React.
    - Requires a Node.js environment for development and building.

- **Next.js**: Next.js is primarily known as a **React** framework for SSR and CSR, but it also offers SSG capabilities, providing flexibility for different project needs.
  - **Pros**:
    - Versatility to choose between SSR, CSR, or SSG based on project requirements.
    - Seamless integration with React for building dynamic user interfaces.
    - Hybrid capabilities for blending static and dynamic content in a single application.
  - **Cons**:
    - Complex configuration compared to simpler static site generators.
    - Requires familiarity with React and Node.js for effective usage.
    - Limited built-in features compared to dedicated static site generators like Hugo. -->

<!-- 

https://developers.cloudflare.com/pages/framework-guides/nextjs/

<https://jamstack.org/generators/next/>

<https://nextjs.org/>


<https://vercel.com/templates/next.js>

<https://jamstackthemes.dev/theme/nextjs-notion-starter-kit/>
<https://transitivebullsh.it/nextjs-notion-starter-kit>

<https://transitivebullsh.it/>

## With streamlit

https://ui.shadcn.com/themes
https://github.com/ObservedObserver/streamlit-shadcn-ui


## Themes

<https://vercel.com/templates>

### My Favourite Themes

* https://nextra.site/
* https://github.com/shadcn-ui/taxonomy

* SaaS
    * https://github.com/nextacular/nextacular


### nextjs-notion-starter-kit

https://jamstackthemes.dev/theme/nextjs-notion-starter-kit/


Fork / clone this repo
Change a few values in site.config.ts
npm install
3. `npm install` or npm install --legacy-peer-deps
npm run deploy to deploy to vercel 💪
npm run build
npm run start



---

## FAQ

    SSG (Static Site Generation):
    Static Site Generation involves generating HTML pages at build time, typically using a site generator or build tool. The generated HTML pages contain all the necessary content and assets, and they are served to clients as-is without the need for server-side processing. This approach offers benefits such as fast loading times, security, and scalability. Popular static site generators include Gatsby, Next.js (with static site generation), Jekyll, and Hugo.

    SSR (Server-Side Rendering):
    Server-Side Rendering involves generating HTML pages dynamically on the server in response to each client request. With SSR, the server processes the request, renders the page with the necessary data, and sends the fully rendered HTML to the client's browser. SSR is commonly used in web applications built with frameworks like Next.js, Nuxt.js, and Angular Universal. SSR can offer benefits such as improved SEO, faster initial page loads, and better support for dynamic content.

    ISR (Incremental Static Regeneration):
    Incremental Static Regeneration is a hybrid approach that combines the benefits of static site generation and dynamic content updates. With ISR, pages are initially generated statically at build time, but they can also be updated dynamically in the background. When a user requests a page that has been updated since the last build, the server regenerates the page with fresh data and serves the updated version. ISR is a feature available in frameworks like Next.js, enabling developers to pre-render dynamic content while still benefiting from static site performance.

In summary, SSG generates HTML pages at build time, SSR generates HTML pages dynamically on the server in response to requests, and ISR combines static site generation with dynamic content updates for improved performance and flexibility. Each approach has its strengths and use cases, and the choice depends on the specific requirements of the project. -->

<!-- 

https://www.youtube.com/watch?v=Sklc_fQBmcs


Next.js in 100 Seconds // Plus Full Beginner's Tutorial
Overview

Welcome to our report on the video "Next.js in 100 Seconds // Plus Full Beginner's Tutorial" by Fireship. In this report, we'll delve into the world of Next.js, a React-based framework for building fast and scalable web applications. If you're new to Next.js or looking to improve your skills, this report is a must-read.
What is Next.js?

Next.js is a popular framework for building server-rendered, statically generated, and performance-optimized React applications. It allows developers to create fast, scalable, and SEO-friendly web apps with zero configuration. In traditional React apps, content is rendered on the client-side, which can lead to slow page loads and poor SEO. Next.js solves this problem by rendering content on the server, providing a better user experience and search engine optimization.
Features of Next.js

Next.js provides several features that make it an ideal choice for building modern web applications. Some of these features include:

    Server-side rendering: Next.js allows you to render content on the server, providing a faster and more SEO-friendly experience.
    Static site generation: Next.js can pre-render pages at build time, making it ideal for blogs and applications with infrequently changing data.
    Incremental static regeneration: Next.js can also regenerate pages dynamically, allowing for flexibility in data updating.
    API routes: Next.js provides a way to create server-only API routes, which can be useful for tasks that require server-side processing.

Building a Next.js App

To get started with Next.js, you can create a new project using the npx create-next-app command. This will set up a basic Next.js project with a pages directory, where you can define your application's routes.

In the pages directory, you can create separate files for each route, which will export a default React component. Next.js will then use these components to render the application.
Data Fetching in Next.js

Next.js provides several strategies for fetching data, including:

    getStaticProps: This function allows you to fetch data at build time and pre-render pages.
    getServerSideProps: This function allows you to fetch data on each request and render pages dynamically.

Conclusion

In conclusion, Next.js is a powerful framework for building fast, scalable, and SEO-friendly web applications. With its features, such as server-side rendering, static site generation, and data fetching strategies, Next.js provides a robust set of tools for building modern web applications.
Takeaways

    Next.js is a React-based framework for building fast and scalable web applications.
    Next.js provides server-side rendering, static site generation, and incremental static regeneration.
    Next.js has built-in support for API routes and data fetching strategies.

Report generated on: May 5, 2024, 11:05:57 AM -->
