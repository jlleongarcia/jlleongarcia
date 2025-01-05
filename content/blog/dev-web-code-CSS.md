---
title: "CSS like a Pro"
date: 2024-08-12T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "CSS Frameworks I find amazing to make nice UI/X for Websites"
---

In case you dont know yet, CSS is oart of the [front-end of websites](https://roadmap.sh/frontend).

And you can make cool things, easily.


## Tailwind

* https://tailwindui.com/components

### Libraries Built on Top of Tailwind CSS

1. **[Flowbite](https://github.com/themesberg/flowbite)**: Offers interactive components such as modals, dropdowns, and tooltips that can be customized using Tailwind CSS classes.
2. **[DaisyUI](https://github.com/saadeghi/daisyui)**: A popular component library for Tailwind CSS, providing a range of accessible and customizable UI elements like buttons, alerts, and forms.
3. **[Headless UI](https://github.com/tailwindlabs/headlessui)**: Developed by the Tailwind team, Headless UI offers unstyled, accessible components that focus on behavior, leaving the styling to Tailwind.
4. **[Tailwind UI](https://tailwindui.com/)**: A premium collection of fully responsive, pre-built components made by the creators of Tailwind CSS.
5. **[Kitwind](https://github.com/whizkydee/kitwind)**: A component library that provides pre-built UI elements for Tailwind CSS.

### DaisyUI

Component based CSS built on top of TailwindCSS utilities.

* https://daisyui.com/components/diff/

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

Automatically you can use:

* https://daisyui.com/components/toggle/

```html
<input type="checkbox" class="toggle toggle-success" checked="checked" />
```

### Flowbite

* https://flowbite.com/docs/getting-started/introduction/
* https://flowbite.com/#components
* https://flowbite.com/blocks/
  * https://flowbite.com/blocks/marketing/login/

{{< details title="Using FlowBite CSS 📌" closed="true" >}}

* https://flowbite.com/blocks/marketing/login/
  * Show the code and **copy the html** and the `tailwind.config.js`
  * Thanks to [Coding for Entrepreneur YT video](https://www.youtube.com/watch?v=J5n1qZNNxfo) and [code](https://github.com/codingforentrepreneurs/kwesforms-landing)

```sh
npm install flowbite
```

```js
//.....
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('flowbite/plugin'), //this one has to be added
	],
```

```html
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
```

{{< /details >}}

## Competitors to Tailwind CSS

1. **[Bootstrap](https://github.com/twbs/bootstrap)**: One of the most popular CSS frameworks, known for its pre-built components and grid system. Bootstrap differs from Tailwind’s utility-first approach by offering more predefined styles and components.
2. **[Bulma](https://github.com/jgthms/bulma)**: A modern CSS framework that provides a flexible grid system, focusing on simplicity and ease of use.
3. **[Foundation](https://github.com/foundation/foundation-sites)**: A responsive front-end framework providing a variety of pre-built components and layouts.
4. **[Materialize](https://github.com/Dogfalo/materialize)**: Based on Google’s Material Design, Materialize offers pre-styled components with a focus on consistency and aesthetics.
5. **[Chakra UI](https://github.com/chakra-ui/chakra-ui)**: A component library for React that provides customizable, accessible, and modular components, which can be compared to Tailwind when used with libraries like Headless UI.

These libraries and competitors offer different strengths depending on the type of project you are working on, with Tailwind CSS being more flexible and customizable due to its utility-first nature.

## More CSS Resources

* https://ui.shadxn.com/docs/registries/shadxn

{{< details title="Infinite Scroll for Astro with CSS 📌" closed="true" >}}

Just with CSS! and thanks to [logto blog post](https://blog.logto.io/css-only-infinite-scroll)

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

### Material UI - MUI

A Comprehensive **React component library** that implements Google's Material Design. Free forever.

* https://mui.com/material-ui/
* https://mui.com/material-ui/react-image-list/

{{< details title="MUI vs Tailwind CSS 📌" closed="true" >}}

**Material UI** (now called **MUI**) is different from **Tailwind CSS** in many ways, though both are popular in modern web development. Here's a comparison:

### 1. **Philosophy**:
- **Tailwind CSS**: A **utility-first** CSS framework. It provides low-level utility classes (like `flex`, `mt-4`, or `text-center`) that allow developers to build custom designs directly in their HTML without writing CSS. It's highly flexible and doesn't enforce a design system.
- **MUI**: A **component-based** library built for **React** applications, following **Material Design** guidelines by Google. It provides pre-styled, higher-level components like buttons, cards, and modals with consistent styling. It aims to give developers a consistent design system right out of the box.

### 2. **Customization**:
- **Tailwind CSS**: Highly customizable via utility classes, making it easy to tailor every element's appearance. There's no predefined design system, allowing complete control over the look and feel of an app.
- **MUI**: Customizable through theming and style overrides, but its design is inherently tied to Google's Material Design system. Customization is possible, but you're working within the bounds of Material Design unless you make significant changes.

### 3. **Usage**:
- **Tailwind CSS**: Suitable for any front-end framework or plain HTML/CSS projects, making it very flexible. It doesn't assume any specific design style, so it requires more work upfront to define the UI.
- **MUI**: Primarily built for **React** applications, with pre-built React components that can speed up development, especially for those who like Material Design.

### 4. **Component Library**:
- **Tailwind CSS**: Does not come with pre-built components. However, libraries like **Flowbite** or **DaisyUI** can be added to provide components based on Tailwind's utilities.
- **MUI**: Provides a rich set of pre-built, fully accessible components that adhere to Material Design guidelines, making it a good choice if you want a coherent UI out of the box.

### 5. **Design System**:
- **Tailwind CSS**: No enforced design system. You create your own design language.
- **MUI**: Based on **Material Design**, which is a widely recognized design system from Google. This ensures consistency, but also limits creativity unless heavily customized.

### Conclusion:
- **MUI** is better suited if you want a pre-defined, consistent UI system (Material Design) and are working with React.
- **Tailwind CSS** is ideal if you prefer flexibility and control over your design and don't mind building components from scratch or using third-party libraries.

### Links:
- [Material UI GitHub](https://github.com/mui/material-ui)
- [Tailwind CSS GitHub](https://github.com/tailwindlabs/tailwindcss)

{{< /details >}}

---

## FAQ

Check that a website is performing properly with:

* https://pagespeed.web.dev/
* https://web-check.xyz/
