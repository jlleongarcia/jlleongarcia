---
title: "CSS like a Pro"
date: 2024-08-12T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "CSS Frameworks I find amazing"
---

In case you dont know yet, CSS is oart of the [front-end of websites](https://roadmap.sh/frontend).

And you can make cool things, easily.

## Tailwind

https://tailwindui.com/components

## Material UI - MUI

https://mui.com/material-ui/
https://mui.com/material-ui/react-image-list/

## DaisyUI

https://daisyui.com/components/diff/

When you add Daisy UI to your project...

```sh
npm install daisyui
```

In the `tailwind.config.cjs` file, add DaisyUI to the plugins section:

```md
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], #add this
};
```

 automatically you can use:

* https://daisyui.com/components/toggle/

```html
<input type="checkbox" class="toggle toggle-success" checked="checked" />
```

### More CSS Resources

* https://ui.shadxn.com/docs/registries/shadxn

* https://blog.logto.io/css-only-infinite-scroll


{{< details title="Infinite Scroll for Astro with CSS 📌" closed="true" >}}

Just with CSS!

```astro
---
// Frontmatter script area (JavaScript goes here if needed, but for this example, it's not required)
---

<style>
  .carousel {
    margin: 0 auto;
    padding: 20px 0;
    max-width: 700px;
    overflow: hidden;
    display: flex;
  }

  .carousel > * {
    flex: 0 0 100%;
  }

  .group {
    display: flex;
    gap: 20px;
    padding-right: 20px;
    will-change: transform;
    animation: scrolling 10s linear infinite;
  }

  .card {
    width: 100%;
    color: white;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 10%) 5px 5px 20px 0;
    padding: 20px;
    font-size: xx-large;
    justify-content: center;
    align-items: center;
    min-height: 200px;
  }

  .card:nth-child(1) {
    background: #7958ff;
  }

  .card:nth-child(2) {
    background: #5d34f2;
  }

  .card:nth-child(3) {
    background: #4300da;
  }

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .carousel:hover .group {
    animation-play-state: paused;
  }
</style>

<div class="carousel">
  <div class="group">
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
  </div>
  <div aria-hidden="true" class="group">
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
  </div>
</div>
```

{{< /details >}}

---

## FAQ

Check that its performing with:

* https://pagespeed.web.dev/
* https://web-check.xyz/
