---
title: "Astro with Cloudflare Pages and CI/CD"
date: 2024-10-27T23:20:21+01:00
draft: true
tags: ["Web","Dev"]
description: 'Setup CI/CD for Astro website with Cloudflare Pages'
summary: 'Astro Websites Automatic deployment with Cloudflare Pages and CICD'
url: 'astro-web-cloudflare-pages'
---

We can upload the manually generated static astro content to [Cloudflare Pages via CLI as explained here](https://jalcocert.github.io/JAlcocerT/understanding-astro-ssg-components/#faq).

But how about just pushing the changes to a **Github Repository and let the CI/CD** magic happen?

> Let's do it with the [hugo theme gallery ssg as example](https://github.com/IoTechCrafts/hugo-theme-gallery-ssg) and following the [Cloudflare Devs YT Video](https://www.youtube.com/watch?v=O4jV8Zz2w9I)


{{% steps %}}

### Astro Site to Github Repository

This is the first step.

### Setup Cloudflare to with with Github

Go to Cloudflare UI. Worker & Pages -> Overview. Create -> Pages -> Connect Git.

You will Need a Github Account Authentication

### Setup Cloudflare Workers and Pages


{{% /steps %}}



{{< details title="Detailed Process - Cloudflare and Github 📌" closed="true" >}}

![Wordpress Google Page Speed Desktop](/blog_img/web/Cloudflare-GithubPages.png)


![Wordpress Google Page Speed Desktop](/blog_img/web/Cloudflare-Github-Connection.png)


![Wordpress Google Page Speed Desktop](/blog_img/web/Cloudflare-Github-Connection-Authorize.png)


![Wordpress Google Page Speed Desktop](/blog_img/web/Cloudflare-Github-Connection-Deploy.png)


![Wordpress Google Page Speed Desktop](/blog_img/web/Cloudflare-GithubPages-HUGO.png)


> It does similarly as the [GH Action Workflow to Send HUGO to GH Pages](https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml)

{{< /details >}}

