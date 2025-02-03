---
title: "One link for Social Bios: LinkinBios vs Bento like websites"
date: 2025-01-24
draft: false
tags: ["OSS"]
summary: 'Simple Link Hosting Services, for all. With a website, of course.'
url: 'linktree-web-alternative'
---

I know we cant know about everything.

But the amount of close people that its trying to build something on social media, yet does not have a website still amazes me.

Why not giving a try to linktree, many.link... pricing?

Then, lets have a look to solutions that will just require your time:

## SSG Solutions for LinkInBios



{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/using-astro-as-website/" title="Astro 101" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/" title="HUGO 101" >}}
{{< /cards >}}

**Hugo example** and Lynx

We can use [HUGO SSG](https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/) together with the [Lynx Theme](https://jalcocert.github.io/JAlcocerT/portfolio-website-for-social-media/) and have a quick Linktree alternative.

You dont really need anything to get started, as we can make this work [with Github Pages](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/).

**Astro** Link examples

1. https://github.com/nevthereal/linktree-template
2. https://astro.build/themes/details/ltree/




### SSG LinkinBio with CMS

1. [Astro + Tina](https://darko.io/posts/linktree-and-linkinbio-clone-with-astro-and-tinacms/)

---

## SelfHosted Solutions for LinkinBio


### Little Link

[Little Link](https://noted.lol/littlelink/)

## Bento Portfolio as LinkinBio Alternative

There is the possibility to use **Bento Themes with Astro**:

1. For example, this astro bento portfolio, which I used with Github Pages for the web3 sample blog:

{{< cards cols="2" >}}
  {{< card link="https://github.com/IoTechCrafts/astro-bento-portfolio-ssg" title="Astro Bento Template">}}
  {{< card link="https://jalcocert.github.io/Web3/" title="Example of bento Portfolio - Web3 blog with Astro and Github Pages Setup" >}}
{{< /cards >}}

You can also have a look to:

2. https://github.com/tim-hub/techtim-astro-bento-portfolio


> I have forked this one here - https://github.com/JAlcocerT/techtim-astro-bento-portfolio

And you can use it by:

```sh
npm install

npm run dev
#npm run build

#rm -rf .git
```

Remember to tweak:

1. All content from `/public` and `/src/content` as per the original theme License
2. The `index.astro` file calls the individual components, like `../components/sections/AboutMe.astro`


<!-- 
libreportfolio.fyi
https://gitlab.com/fossengineer1/libreportfolio 
-->


{{< callout type="warning" >}}
Gitlab wont let you upload **>100mb individual files**
{{< /callout >}}

```sh
git ls-tree -r HEAD | grep f35b79d689c8cbc89c0fd03f04dd35d1aa198b6a

du -sh src/assets/memes/cable-rojo.gif

gifsicle --resize 480x480 --colors 64 --optimize=3 src/assets/memes/cable-rojo.gif -o src/assets/memes/cable-rojo-optimized.gif
```

--- 

## Interesting Posts

1. https://darko.io/posts/but-auth-is-hard