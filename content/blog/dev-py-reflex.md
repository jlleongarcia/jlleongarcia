---
title: "Reflex. Cooler Web Apps?"
date: 2025-02-12
draft: false
tags: ["Dev"]
description: 'Using (Python) Reflex to display Job Market Trends as a simple web app.'
url: 'tinkering-with-reflex'
---

* https://reflex.dev/templates/dashboard/


## The Reflex Package


{{< details title="Compile Python on a Pi 📌" closed="true" >}}

```sh
wget https://www.python.org/ftp/python/3.11.5/Python-3.11.5.tgz
tar xzf Python-3.11.5.tgz

cd Python-3.11.5
./configure --enable-optimizations --with-ensurepip --prefix=/usr/local/python311  # Adjust path and version if needed


#compile
make -j$(nproc)  # Use all available cores for faster compilation
#install
sudo make altinstall  #  "altinstall" is IMPORTANT!
```

```sh
nano ~/.bashrc  # Or nano ~/.zshrc if you use zsh

export PATH="/usr/local/python311/bin:$PATH"
source ~/.bashrc  # Or source ~/.zshrc
```

```sh
python3.11 --version  # Or python3.x if you installed a different minor version
pip3.11 --version
pip3.11 install --upgrade virtualenv --user
```


{{< /details >}}

```sh
sudo apt-get install python3-virtualenv

python3.11 -m venv my_env  # Creates a virtual environment named my_env
source my_env/bin/activate  # Activates the environment
```


### Reflex 101

```sh
pip install reflex
reflex init
reflex run
```

The front end will be at `localhost:3000`


{{< callout type="info" >}}
You will also need `localhost:8000` for the BE (which can conflict with Portainer!) 
{{< /callout >}}

<!-- 
https://imfing.github.io/hextra/docs/guide/shortcodes/filetree/
-->

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

---

## Historical Job Market Data with Reflex


## Conclusions



---

## FAQ


You're asking about a good range of Python web UI frameworks! Here's a breakdown of the key differences between Reflex, Flet, Streamlit, and PySimpleGUI (often referred to as "PyNiceGUI" due to its original name):

**1. Reflex:**

* **Focus:** Building interactive web apps with a reactive programming model.  It's designed for complex UIs where you need real-time updates and dynamic behavior.
* **Technology:** Uses a Python backend (typically FastAPI) and a frontend built with React.  This allows for a rich, single-page application (SPA) experience.
* **Strengths:** Excellent for data-driven applications, dashboards, and anything requiring frequent UI updates.  The reactive model makes complex interactions manageable.
* **Weaknesses:** Steeper learning curve compared to some other frameworks due to the reactive paradigm and the use of both Python and JavaScript (React under the hood, though you mostly interact with it through Python).  Can be overkill for very simple UIs.

**2. Flet:**

* **Focus:** Creating cross-platform desktop and web applications using Flutter (Google's UI toolkit).
* **Technology:** Python backend with a Flutter frontend.  This enables native-like performance on desktop and a good web experience.
* **Strengths:**  Fast development for both desktop and web from a single codebase.  Good performance and a modern UI.  Relatively easy to learn.
* **Weaknesses:**  While it handles web, its primary strength is cross-platform desktop development.  The UI might not feel *completely* native on the web compared to frameworks specifically designed for the web.

**3. Streamlit:**

* **Focus:** Rapidly building data-driven web applications and dashboards, especially for machine learning and data science.
* **Technology:** Pure Python, and it handles the frontend rendering for you.
* **Strengths:** Extremely easy to learn and use.  Excellent for quickly prototyping and deploying data science tools.  Has built-in support for displaying data visualizations and interactive widgets.
* **Weaknesses:**  Not ideal for complex, highly interactive applications.  The UI is more basic compared to Reflex or Flet.  Not as suitable for apps that require fine-grained UI control or complex event handling.

**4. PySimpleGUI (PyNiceGUI):**

* **Focus:** Making it easy to create simple GUIs in Python.  Its primary focus is on desktop applications.
* **Technology:** Wraps various GUI toolkits (Tkinter, Qt, WxPython, etc.) to provide a simplified API.
* **Strengths:** Very beginner-friendly.  Great for quickly creating simple desktop utilities or tools.
* **Weaknesses:**  Limited in terms of UI customization and modern look and feel.  Not designed for web applications.  While there is a project called NiceGUI which is a separate project from PySimpleGUI that allows you to create web UIs, it's not a direct web equivalent of PySimpleGUI. NiceGUI is more comparable to Streamlit, but with a different syntax and approach.

**Here's a table summarizing the key differences:**

| Feature         | Reflex                 | Flet                    | Streamlit              | PySimpleGUI/NiceGUI        |
|-----------------|-------------------------|--------------------------|-----------------------|-----------------------------|
| Primary Focus   | Complex web apps       | Cross-platform (desktop & web) | Data-driven web apps | Simple desktop GUIs / web |
| Technology      | Python/React             | Python/Flutter           | Pure Python           | Python/Various GUI toolkits |
| Learning Curve  | Steeper                 | Moderate                  | Easiest                | Easiest (PySimpleGUI) / Moderate (NiceGUI) |
| UI Complexity   | High                    | Moderate                  | Low                   | Low (PySimpleGUI) / Moderate (NiceGUI) |
| Web Capabilities| Excellent               | Good                      | Good                  | Not designed for web (PySimpleGUI) / Good (NiceGUI) |
| Data Science    | Good                    | Moderate                  | Excellent               | Limited (PySimpleGUI) / Good (NiceGUI) |

**Which one should you choose?**

* **Reflex:** If you need to build a complex, interactive web application with real-time updates and a rich UI.
* **Flet:** If you want to create a cross-platform application that runs on both desktop and web from a single codebase.
* **Streamlit:** If you're building a data-driven web app or dashboard quickly and easily, especially for data science projects.
* **PySimpleGUI:** If you need to create a simple desktop utility or tool with a basic UI.
* **NiceGUI:** If you want to create a simple web UI quickly and easily, with a focus on data visualization and interactivity.

Remember to consider the complexity of your project, your team's familiarity with the technologies involved, and your deployment requirements when making your decision.
