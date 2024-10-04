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


{{< details title="How to Setup Flask 📌" closed="true" >}}

- **Flask Installation:**
```sh
pip install Flask #https://pypi.org/project/Flask/
```

- **Basic Flask Application Structure:**
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

{{< /details >}}

{{< details title="Concepts for Flask 📌" closed="true" >}}

* WSGI, which stands for Web Server Gateway Interface, is a standard interface between web servers and Python web applications or frameworks. It allows different web servers and Python applications to communicate with each other in a standardized way.



- **Routing:**
  - Define routes using the `@app.route()` decorator, mapping URLs to functions.

- **Request and Response:**
  - Access request data via `flask.request` (e.g., `request.method`, `request.args`, `request.form`).
  - Return responses using strings, HTML templates, JSON, etc.

- **Templates:**
  - Use **Jinja2 templates** for rendering HTML:
    ```html
    <!doctype html>
    <html>
    <head><title>{{ title }}</title></head>
    <body>
        <h1>{{ message }}</h1>
    </body>
    </html>
    ```

- **Static Files:**
  - Serve static files (CSS, JS, images) from the `static` directory.

- **Forms and User Input:**
  - Handle forms using `request.form` for POST data, and validate inputs as needed.

- **Flask Extensions:**
  - Extend functionality with various extensions (e.g., Flask-SQLAlchemy for database, Flask-Migrate for migrations, Flask-WTF for forms).

- **Error Handling:**
  - Customize error pages using error handlers:
    ```python
    @app.errorhandler(404)
    def not_found(error):
        return 'Page not found', 404
    ```

- **Deployment:**
  - Use production-ready servers like Gunicorn or uWSGI for deployment.

- **Documentation and Resources:**
  - Official Flask Documentation: [Flask Documentation](https://flask.palletsprojects.com/)
  - Community Resources: Flask tutorials, forums, and GitHub repositories for additional learning and examples.


{{< /details >}}

{{< details title="Jinja Templates for Flask 📌" closed="true" >}}

- **What is Jinja2?**
  - Jinja2 is a powerful templating engine for Python, commonly used with web frameworks like Flask. It enables the creation of dynamic HTML pages by embedding Python-like expressions in HTML documents.

- **Syntax**:
  - Jinja2 uses a straightforward syntax that includes:
    - **Variables**: Encapsulated in double curly braces `{{ variable }}` to output the value of a variable.
    - **Control Structures**: Such as loops and conditionals, defined with `{% %}` tags.
      - **Example of a loop**:
        ```jinja
        <ul>
          {% for item in items %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
        ```

- **Filters**:
  - Jinja2 supports filters to modify variables for output. Filters are applied using the pipe symbol (`|`).
  - **Example**:
    ```jinja
    {{ username|capitalize }}  <!-- Capitalizes the username -->
    ```

- **Template Inheritance**:
  - Jinja2 supports inheritance, allowing the creation of a base template that can be extended in other templates. This promotes reusability and cleaner code.
  - **Example**:
    ```jinja
    <!-- base.html -->
    <html>
      <head><title>{% block title %}My Site{% endblock %}</title></head>
      <body>
        <header>{% block header %}Header{% endblock %}</header>
        <main>{% block content %}{% endblock %}</main>
        <footer>Footer</footer>
      </body>
    </html>
    ```
    ```jinja
    <!-- page.html -->
    {% extends "base.html" %}
    {% block title %}Home{% endblock %}
    {% block content %}
      <h1>Welcome to My Site</h1>
    {% endblock %}
    ```

- **Whitespace Control**:
  - Jinja2 provides mechanisms to control whitespace, which can help maintain a clean output.
  - **Example**:
    - Using `-{%` and `-%}` will strip whitespace around control statements.

- **Security**:
  - Jinja2 automatically escapes variables to prevent Cross-Site Scripting (XSS) attacks, unless explicitly marked as safe.
  - **Example**:
    ```jinja
    {{ user_input|safe }}  <!-- Outputs raw HTML -->
    ```

- **Integration with Flask**:
  - In Flask, Jinja2 is the default templating engine. Templates are typically stored in a `templates` directory and rendered using the `render_template` function.
  - **Example**:
    ```python
    from flask import Flask, render_template

    app = Flask(__name__)

    @app.route('/')
    def home():
        return render_template('home.html', username='John Doe')
    ```

- **Conclusion**:
  - Jinja2 templates provide a robust way to create dynamic web pages in Python applications. With powerful features like variable rendering, control structures, template inheritance, and filters, it enables developers to maintain clean and efficient code for rendering HTML.

{{< /details >}}


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

To run a flask app do:

```sh
flask run
```

And the UI will appear at: `localhost:5000`

### DASH uses Flask!

Dash, a **web application framework for Python**, is primarily built on top of Flask.

It utilizes Flask as its underlying web server and integrates several other libraries and components to facilitate the development of interactive web applications, particularly for data visualization.


{{< cards cols="2" >}}
  {{< card link="https://github.com/plotly/dash" title="Dash in Github" >}}
  {{< card link="https://github.com/JAlcocerT/Py_Trip_Planner/" title="Dash project example - Trip Planner with Weather" >}}
{{< /cards >}}

## Simpler Data Apps

### Streamlit

{{< cards cols="1" >}}
  {{< card link="https://github.com/streamlit/streamlit" title="Streamlit in Github" >}}
{{< /cards >}}
{{< cards cols="2" >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs" title="Streamlit Ask PDF" >}}
  {{< card link="https://github.com/JAlcocerT/Streamlit-MultiChat" title="MultiChat: OpenAI, Anthropic, Ollama,..." >}}
{{< /cards >}}
<!-- 
  {{< card link="https://github.com/JAlcocerT/Py_Double_Pendulum" title="Streamlit Double Pendulum" >}} -->



<!-- https://github.com/AIAnytime/Document-Buddy-App -->

---

## Interesting stuff I learnt recently

* https://github.com/Scale3-Labs/langtrace - Langtrace 🔍 is an open-source, Open Telemetry based end-to-end observability tool for LLM applications, providing real-time tracing, evaluations and metrics for popular LLMs, LLM frameworks, vectorDBs and more.. Integrate using Typescript, Python.

* Model Garden, Vertex AI - https://cloud.google.com/model-garden?hl=es