---
title: "How to use Astro Web Templates"
date: 2024-09-03T23:20:21+01:00
draft: true
tags: ["Dev"]
summary: 'How to get started with a free Astro Template'
url: 'using-astro-templates'
---

## Astro Websites 101

{{% steps %}}

### Find the Theme Source Code

Github is a good starting point.

### Clone it

Make sure you are free to use the theme as per its License and then **clone it**:

```sh
git clone https://github.com/Ruben-Winant/astro_spark_template ./astro_template
cd ./astro_template
rm -rf .git #remove existing git
```

### Try the Theme

```sh
npm run build
npm run dev
```

{{% /steps %}}

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-your-website/" title="Resources to Create Cool Websites" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/understanding-astro-ssg-components/" title="Astro Components 101" >}}
{{< /cards >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/wordpress-migration-to-ssg/" title="Wordpress to SSG" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/guide-web3/" title="Web 3 with Astro" >}}
{{< /cards >}}


You will have a similar project structure to:

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