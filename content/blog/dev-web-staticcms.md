---
title: "Having a look to Static CMS"
date: 2025-02-07
draft: false
tags: ["dev"]
summary: ''
description: 'KeyStatic. Creating a website for a moto blogger.'
url: 'understanding-static-cms'
---


## KeyStatic

I got to know about Keystatic CMS thanks to:

* https://github.com/Boston343/landingpad
* https://landingpad.cosmicthemes.com/

> Made by https://webreaper.dev/ | GPL3.0 | A free and open source template to host your links and socials. Built with Astro, Tailwind CSS, and Keystatic CMS by Cosmic Themes.


- [KeyStack](https://keystatic.com/) CMS
- https://github.com/Thinkmill/keystatic

> MIT | First class **CMS experience**, TypeScript API, Markdown & YAML/JSON based, no DB

<!-- https://www.youtube.com/watch?v=N3pywDv-0Tg -->

{{< youtube "N3pywDv-0Tg" >}}


I love such kind of theme, to get a one pager of all our [important links/ linkinbios](https://jalcocert.github.io/JAlcocerT/cool-link-in-bios/).

```sh
git clone https://github.com/Boston343/landingpad
#rm -rf .git

npm install
npm run dev
```

And thats it! We can see `localhost:4321` and keystatic applied to the theme at `localhost:4321/admin`.

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/landingpad-keystaticCMS.png)

* https://keystatic.cloud/signin?from=teams

### Local vs Github Mode

https://keystatic.com/docs/github-mode

One of the important files is `keystatic.config.tsx`:

For local mode, we just used:

```tsx
import { config } from "@keystatic/core";
import { collection, fields, singleton } from "@keystatic/core";

export default config({
	// works in local mode in dev, then cloud mode in prod
	storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
	// cloud deployment is free to sign up (up to 3 users per team)
	// docs: https://keystatic.com/docs/cloud
	// create a Keystatic Cloud account here: https://keystatic.cloud/
	cloud: { project: "cosmic-themes/landingpad" },
	ui: {
		brand: { name: "Cosmic Themes" },
	},
```

But for Github mode:

http://127.0.0.1:4321/keystatic/setup

```sh

```
I followed the steps of the video and got this:

It looks like you just tried to create a GitHub App for Keystatic but there is already a GitHub App configured for Keystatic.

You may be here because you started creating a GitHub App but then started the process again elsewhere and completed it there. You should likely go back to Keystatic and sign in with GitHub to continue.

Then, I went back to `localhost:4321/admin` and could see

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/keystaticCMS-github.png)

> keystatic101 was the name i gave to the app

Then I went to github general settings, developer settings:

* https://github.com/settings/apps/keystatic101

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/install-keystatic-app-github.png)

Now, you wont see any error like: **

And whatever you edit with the theme via `localhost:4321/admin` will be automatically pushed to main.

{{< callout type="warning" >}}
When GH Mode is active, the changes wont be happening in the local files, you will need to do `git pull`
{{< /callout >}}

### Github Mode with Github Pages

Im a big fan if github pages.

And this was resonating so much with this setup.

https://jalcocert.github.io/JAlcocerT/github-actions-use-cases/#astro

<!-- https://youtu.be/BAnfePGzkbg -->

{{< youtube "BAnfePGzkbg" >}}

### Adding KeyStatic to Astro Themes

* https://keystatic.com/docs/installation-astro

The text you've quoted indicates that the guide for adding Keystatic to an Astro project assumes you're using Server-Side Rendering (SSR) mode, specifically with the `output: 'hybrid'` or `output: 'server'` configuration options in your Astro project.  This implies that the guide *doesn't* directly address how to use Keystatic with Static Site Generation (SSG) mode.

Here's a breakdown of why this distinction is important and what it likely means:

* **SSR (Server-Side Rendering):**  In SSR, your Astro components are rendered on the server when a user requests a page.  This means the server generates the HTML and sends it to the client (the user's browser).  Keystatic, as a content management system (CMS), likely needs a server-side component to interact with its data and serve it to your Astro components.  The server can dynamically fetch content from Keystatic and incorporate it into the page before sending it to the user.

* **SSG (Static Site Generation):** In SSG, your Astro project is built into a set of static HTML files at build time.  This means there's no server involved when a user visits your site; the pre-generated HTML is simply served.  This presents a challenge for Keystatic because it typically requires a server to function.  If you're generating static pages, there's no server to dynamically fetch content from Keystatic *during runtime*.

**Why the guide likely focuses on SSR:**

The guide probably focuses on SSR because it's the more straightforward approach for integrating a CMS like Keystatic.  With SSR, you have a server that can:

1. **Connect to Keystatic:**  The server can make requests to Keystatic's API to retrieve content.
2. **Dynamically generate pages:** Based on the content from Keystatic, the server can render the appropriate Astro components and generate the HTML.
3. **Serve the HTML:** The server sends the generated HTML to the user's browser.

**Can you use Keystatic with SSG?**

It's *possible* to use Keystatic with SSG, but it usually requires a different approach.  Here are some potential strategies:

1. **Build-time fetching:** You could fetch the content from Keystatic *during the build process*.  This would involve using a build script or plugin that connects to Keystatic, retrieves the necessary data, and then uses that data to generate the static HTML files.  This means your content would be "baked into" the static site.  Any changes in Keystatic would require a rebuild of your site.

2. **Client-side fetching (with limitations):**  You might be able to use Keystatic's API directly in your Astro components on the client-side.  However, this approach often has limitations, especially if Keystatic requires any server-side logic or authentication.  It also might not be ideal for SEO, as the content would be loaded after the initial HTML is rendered.

3. **Hybrid approach:**  You could potentially use a hybrid approach where some parts of your site are statically generated, and other parts (like a blog or news section) are rendered using SSR.  This would allow you to use Keystatic for the dynamic parts of your site.

**In summary:** The guide you quoted likely focuses on SSR because it's the most common and easiest way to integrate Keystatic with Astro.  Using Keystatic with SSG is possible but generally requires more advanced techniques like build-time fetching or a hybrid approach.  You'll need to consult Keystatic's documentation or community forums for specific instructions on how to use it with SSG.


---

## Other Static CMS

### 