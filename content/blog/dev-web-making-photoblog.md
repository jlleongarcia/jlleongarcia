---
title: "Creating a Photo Centered Blog"
date: 2024-09-29T23:50:59+01:00
draft: false
tags: ["dev"]
summary: 'How I used HUGO to create a Photo Centered Web for a Digital Creator'
url: 'creating-photo-centric-blog-with-hugo'
---

For this **client**, I had to make something **special**.

She's a traveler, **photo adict**, content creator and artist.

* https://nicokaiser.github.io/hugo-theme-gallery/animals/cats/

---

## New Web Workflow

These days I have improved my Web creation/edition Workflow.

Im now using Github+Cloudflare and Gitlab+Cloudflare for deployments.

Time to say bye to my old friend Firebase. At least for now.

And to make the dev workflow smoother when Im switching devices...

* I develop via SSH with VSCode with the Opi5 as server
* Everything gets synced thanks to this script


{{< details title="Testing Astro with Gitlab at Opi 📌" closed="true" >}}

```sh
git clone https://gitlab.com/fossengineer1/cyclingthere
cd ./cyclingthere/pacamara
```

With a regular SSH, I can just use **nano to develop**
```sh
time npm install #~30s
#npm audit fix --force

npm run dev
npm run build
```

But its possible to use VSCode with SSH and **see all the dev environment files**

```sh

```

{{< /details >}}



{{< details title="Automatic Sync Scrypt 📌" closed="true" >}}




{{< /details >}}