---
title: "Some JS to make Cooler Webs"
date: 2025-01-12T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "Javascript Frameworks I find amazing to make nice UI/X for Websites"
url: 'javascript-for-static-websites'
---

Ive learnt all of this **about JS** thanks to tinkering with the [Astro](https://jalcocert.github.io/JAlcocerT/create-your-website/#what-ive-learnt-about-astro) and [NextJS](https://fossengineer.com/nextjs-ssg/) web frameworks.


### JS Dependency Management

1. NPM
2. BUM

{{% details title="Put simply 🌍" closed="true" %}}

{{% /details %}}

## VueJS

* https://dev.to/truex/top-10-vue-js-libraries-3gj0

{{< details title="What it is Pydantic? 📌" closed="true" >}}

{{< /details >}}

## PhotoSwipe

{{< details title="What it is Pydantic? 📌" closed="true" >}}

{{< /details >}}

## Interesting Functionalities with JS

alpineJS

```sh
npm list alpinejs
```

### World Map

### Search

1. FuseJS
2. pageFind - as astro starlight

* google
* whoogle
* fusejs (hugo papermod)

### Image Galleries



* Photoswipe - https://github.com/dimsemenov/PhotoSwipe
  * https://www.launchfa.st/blog/photoswipe-astro
  * https://photoswipe.com/getting-started

```sh
npm install photoswipe react react-dom
```

---

## FAQ

### More JS Related Ideas


#### Skulpt

Skulpt is an entirely **in-browser implementation of Python**.


* <https://skulpt.org/>
    * <https://github.com/skulpt/skulpt>

> Skulpt is a **JavaScript implementation of the Python** programming language.

It allows you to write Python code and execute it directly in a web browser without needing a Python interpreter installed on the client's machine.

Skulpt achieves this by transpiling Python code into equivalent JavaScript code, which can then be executed by the browser's JavaScript engine.

Here are some things you can do with Skulpt:

1. **Interactive Python Console**: You can embed a Python console directly into your web application, allowing users to enter Python code and see the results immediately. This can be useful for educational purposes or for providing a sandbox environment for experimenting with Python code.

2. **Web-Based Python IDE**: You can build a web-based Integrated Development Environment (IDE) for Python development using Skulpt. This would include features like syntax highlighting, code completion, and live code execution.

3. **Educational Resources**: Skulpt can be used to create interactive tutorials, quizzes, and coding exercises for learning Python. Students can write and run Python code directly in the browser, making the learning process more interactive and engaging.

4. **Web Applications**: You can build web applications entirely in Python using Skulpt for the client-side logic. While this approach may not be suitable for performance-critical applications, it can be useful for prototyping, small-scale projects, or applications where Python is the preferred language.

5. **Data Visualization**: You can use libraries like matplotlib and numpy, which have been ported to Skulpt, to create interactive data visualizations directly in the browser using Python code.

It's important to note that while Skulpt allows you to write and execute Python code in the browser, there are limitations compared to running Python code on a traditional Python interpreter.

Skulpt may not support all Python features or libraries, and performance may be slower due to the overhead of transpilation and execution in the browser environment. However, for many use cases, Skulpt can be a convenient and effective tool for bringing Python to the web.


Yes, you can create a **fully static astro site with Plotly graphs using Skulpt for Python code** execution in the browser. Here's how you can approach it:

1. **Static HTML/CSS/JavaScript files**: Create static HTML, CSS, and JavaScript files for your astro site. These files will define the structure, layout, and interactivity of your site.

2. **Include Skulpt and Plotly.js**: Include the Skulpt library and Plotly.js library in your HTML files. You can either download these libraries and include them locally or use CDN links to include them in your web page.

3. **JavaScript for Skulpt integration**: Write JavaScript code to integrate Skulpt into your web page. This code will capture user input, pass it to Skulpt for execution, and display the results back to the user.

4. **Python code for Plotly**: Write Python code using Skulpt to generate the data and configure the Plotly graphs. This Python code will be executed in the browser using Skulpt, and the resulting Plotly graphs will be rendered in the HTML page.

5. **Static hosting**: Host your static astro site on a web server or a static hosting platform. This can be done using services like GitHub Pages, Netlify, or Vercel, which allow you to deploy static websites easily.

By following these steps, you can create a fully static astro site with Plotly graphs, where the Python code for generating the graphs is executed in the browser using Skulpt. Users can interact with the site without the need for a backend server, making it lightweight and easy to deploy.