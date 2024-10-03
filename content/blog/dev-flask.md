---
title: "Getting started with Flask"
date: 2024-10-02T05:20:21+01:00
draft: false
tags: ["Dev","Python"]
description: 'How to use Flask'
summary: 'How I learnt the basics to use Python Flask'
url: 'get-started-with-flask'
---

## Flask 101

* The **main Flask file** is named `__init__.py`, this indicates that your Flask application is structured as a package.
    * You can run it with: `flask run`

```
/flask_project_app
│
├── /app
│   ├── __init__.py  (the main file)
│   ├── routes.py  (App routes - all the route (URL) definitions for your Flask app. Routes define the different endpoints that users can access in the web application.
)
│   ├── /DbModels  (your database models - contains the definitions for the database models that represent the structure of the data in your application.)
│       └── models.py
```

* Each route is tied to a specific URL pattern and a function that Flask will call when that URL is visited. These functions are known as view functions.
    * They usually handle requests, interact with the database or other logic, and return responses (such as rendering an HTML page or sending JSON data).
    * Keeping route definitions in routes.py ensures that the main application file (like your `__init__.py`) doesn't get cluttered with all the URL logic. It allows you to keep things organized, especially as your application grows. When there are many routes, they can even be split into multiple files for different parts of the app (e.g., auth_routes.py, admin_routes.py).

* Placing your models in a dedicated `models.py` (or even splitting into multiple files for large applications) keeps all your database-related code in one place. It improves maintainability by decoupling the data structure from the business logic (routes) and app initialization.


### DASH uses Flask!

Dash, a **web application framework for Python**, is primarily built on top of Flask.

It utilizes Flask as its underlying web server and integrates several other libraries and components to facilitate the development of interactive web applications, particularly for data visualization.


{{< cards cols="2" >}}
  {{< card link="https://github.com/plotly/dash" title="Dash in Github" >}}
  {{< card link="https://github.com/JAlcocerT/Py_Trip_Planner/" title="Dash project example - Trip Planner with Weather" >}}
{{< /cards >}}

---

## Interesting stuff I learnt recently

* https://github.com/Scale3-Labs/langtrace - Langtrace 🔍 is an open-source, Open Telemetry based end-to-end observability tool for LLM applications, providing real-time tracing, evaluations and metrics for popular LLMs, LLM frameworks, vectorDBs and more.. Integrate using Typescript, Python.

* Model Garden, Vertex AI - https://cloud.google.com/model-garden?hl=es