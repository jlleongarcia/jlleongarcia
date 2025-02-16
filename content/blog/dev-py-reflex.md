---
title: "Reflex. Cooler Web Apps?"
date: 2025-02-12
draft: false
tags: ["Dev"]
description: 'Using (Python) Reflex to display Real Estate and Job Market Trends as Web Apps.'
url: 'tinkering-with-reflex'
---

* https://reflex.dev/templates/dashboard/


## The Reflex Package

* https://github.com/reflex-dev/reflex

> Apache v2 | 🕸️ Web apps in pure Python 🐍


What I want to use it for?

How about enhancing this streamlit projects?

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/python-real-estate-mortage-calculator/" title="RE Calculator - Post"  >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/when-to-apply-for-a-job/" title="Job Offers and CV Creation" >}}
{{< /cards >}}


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
reflex run #this compiles and execute the sample app
```

The front end UI will be at `localhost:3000`


{{< callout type="info" >}}
You will also need `localhost:8000` for the BE (which can conflict with Portainer!) 
{{< /callout >}}


{{< youtube "ITOZkzjtjUA" >}}

> Learn to code by building series from Coding Entrepreneur is great (and not only for Reflex) https://www.youtube.com/watch?v=ITOZkzjtjUA&list=PLEsfXFp6DpzRDEA6ElMF_NuLu9cvoK49v

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

If you inspect, this is how the reflex `main.py` looks:

```py
"""Welcome to Reflex! This file outlines the steps to create a basic app.""" #Shown as title

import reflex as rx

from rxconfig import config


class State(rx.State):
    """The app state."""

    ...


def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Welcome to Reflex!", size="9"),
            rx.text(
                "Get started by editing ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )


app = rx.App()
app.add_page(index)
```

Now, its all about adding components to the `def index()`, like: https://reflex.dev/docs/library/data-display/moment/

```py
rx.moment(MomentState.date_now), #you will need to define its associated MomentState(), also given in the docs
```

Not long after get that working, you will **build some demo, using graph components**:

* https://reflex.dev/docs/library/graphing/charts/barchart/
* https://reflex.dev/docs/library/graphing/charts/composedchart/


{{< details title="testing Sample Components with Reflex 📌" closed="true" >}}

```py
#pip install reflex
#reflex init

import reflex as rx

from datetime import datetime, timezone


class MomentState(rx.State):
    date_now: datetime = datetime.now(timezone.utc)

    @rx.event
    def update(self):
        self.date_now = datetime.now(timezone.utc)


def moment_update_example():
    return rx.button(
        "Update",
        rx.moment(MomentState.date_now),
        on_click=MomentState.update,
    )

##

data = [
    {"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400},
    {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210},
    {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290},
    {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000},
    {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181},
    {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500},
    {"name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100},
]

def bar_simple():
    return rx.recharts.bar_chart(
        rx.recharts.bar(
            data_key="uv",
            stroke=rx.color("accent", 9),
            fill=rx.color("accent", 8),
        ),
        rx.recharts.x_axis(data_key="name"),
        rx.recharts.y_axis(),
        data=data,
        width="100%",
        height=250,
    )

def composed():
    return rx.recharts.composed_chart(
        rx.recharts.area(
            data_key="uv", stroke="#8884d8", fill="#8884d8"
        ),
        rx.recharts.bar(
            data_key="amt", bar_size=20, fill="#413ea0"
        ),
        rx.recharts.line(
            data_key="pv",
            type_="monotone",
            stroke="#ff7300",
        ),
        rx.recharts.x_axis(data_key="name"),
        rx.recharts.y_axis(),
        rx.recharts.cartesian_grid(stroke_dasharray="3 3"),
        rx.recharts.graphing_tooltip(),
        data=data,
        height=250,
        width="100%",
    )
#####

"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from rxconfig import config


class State(rx.State):
    """The app state."""

    ...

def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Welcome to Reflex!", size="9"),
            rx.heading("Yessss, this works!", size="5"),
            
            rx.callout(
                "One step closer to do cool things :)",
                icon="info",
            ),
            rx.moment(MomentState.date_now),
            #moment_update_example(),
            bar_simple(),
            composed(),
            
            rx.text(
                "Get started by editing ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )

app = rx.App()
app.add_page(index)
```

{{< /details >}}

![Reflex 101](/blog_img/apps/reflex/reflex-101.png)



---

## Building with Reflex



### Historical Job Market Data with Reflex

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/when-to-apply-for-a-job/" title="When to apply?" image="/videos/job_offers.png" subtitle="Post where I tinkered with scrapping tools." >}}
  {{< card link="https://github.com/JAlcocerT/Scrap_Tools" title="Scrapping Tools" image="/blog_img/apps/gh-jalcocert.svg" subtitle="Source Code for using BS4, AI Scraps..." >}}
{{< /cards >}}


{{< details title=" 📌" closed="true" >}}


{{< /details >}}

### Real Estate with Reflex

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/python-real-estate-mortage-calculator/" title="Understanding Real Estate" image="/blog_img/data-experiments/buyr_mortage_NAV_norent.png" subtitle="Post where I tinkered with Math for Real Estate." >}}
  {{< card link="https://gitlab.com/fossengineer1/py_stocks/-/tree/main/EDA_Mortage?ref_type=heads" title="Scrapping Tools" image="/blog_img/apps/gh-jalcocert.svg" subtitle="Source CodeEDA French Amortization" >}}
{{< /cards >}}

{{< details title=" 📌" closed="true" >}}


{{< /details >}}

## Conclusions

I find it easier to iterate with streamlit, as there is no waiting time for compiling.

But definitely, Reflex apps can look really cool.


---

## FAQ


{{< details title="There is a good range of Python web UI frameworks... 📌" closed="true" >}}


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


{{< /details >}}

**Which one should you choose?**

* **Reflex:** If you need to build a complex, interactive web application with real-time updates and a rich UI.
* **Flet:** If you want to create a cross-platform application that runs on both desktop and web from a single codebase.
* **Streamlit:** If you're building a data-driven web app or dashboard quickly and easily, especially for data science projects.
* **PySimpleGUI:** If you need to create a simple desktop utility or tool with a basic UI.
* **NiceGUI:** If you want to create a simple web UI quickly and easily, with a focus on data visualization and interactivity.