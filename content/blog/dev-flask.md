---
title: "Getting started with Flask"
date: 2024-10-02T05:20:21+01:00
draft: false
tags: ["Dev","Python"]
description: 'How to use Flask. Get HTTPs with your domain for Flask Apps.'
summary: 'How I learnt the basics to use Python Flask.'
url: 'get-started-with-flask'
---

A friend asked me recently to help him to [setup Python](https://jalcocert.github.io/JAlcocerT/guide-python/#installing-python-) and **he alredy made his first App!**

I had to get a little bit familiar with this Python Framework.

And we got his [Flask App with https and custom domain](https://jalcocert.github.io/JAlcocerT/get-started-with-flask/#deploying-a-flask-app-like-a-pro).

A **Flask App** configured on a server, publically, **ready for anyone to use**.

{{< callout type="info" >}}
[Get your own Flask App Deployed](https://jalcocertech.xyz/) or a [Custom Speech Rater AI App](https://github.com/JAlcocerT/Streamlit-Speech)
{{< /callout >}}



## Flask 101

* The **main Flask file** is named `__init__.py`, this indicates that your Flask application is structured as a package.
    * You can run it with: `flask run`

{{< callout type="info" >}}
  This free [book from Miguel](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates) helped me a lot to understand Flask
{{< /callout >}}



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
  - [Jinja2 templates](https://jinja.palletsprojects.com/en/3.1.x/) provide a robust way to create dynamic web pages in Python applications. With powerful features like variable rendering, control structures, template inheritance, and filters, it enables developers to maintain clean and efficient code for rendering HTML.

{{< /details >}}


{{< details title="Example - Flask Project Structure 📌" closed="true" >}}


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

{{< /details >}}



To **run a flask app**, do:

```sh
flask run
```

And the UI will appear at: `localhost:5000`

### DASH uses Flask!

Dash, a **web application framework for Python**, is primarily built on top of Flask.

{{< callout type="info" >}}
  I used DASH for building a [Trip Planner as per Historical Weather](https://github.com/JAlcocerT/Py_Trip_Planner/) conditions
{{< /callout >}}

Dash utilizes Flask as its underlying web server and integrates several other libraries and components to facilitate the development of interactive web applications, particularly for data visualization.


{{< cards cols="2" >}}
  {{< card link="https://github.com/plotly/dash" title="Dash in Github" >}}
  {{< card link="https://github.com/JAlcocerT/Py_Trip_Planner/" title="Dash project example - Trip Planner with Weather" >}}
{{< /cards >}}

## Deploying a Flask App like a Pro

Let'serve the Flask App with a Cloud Server. **With https and custom domain.**

1. Get a server, for example [with Hetzner](https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers)
2. Setup the server with [docker and all goodies](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/)
* Portainer is recommended for UI container management
3. Clone your Flask App into the server, [build the container (similarly like for a DASH App)](https://jalcocert.github.io/JAlcocerT/dash-docker-gcr/)
4. Run your containerized Flask App with [Docker-Compose - similar to this one](https://jalcocert.github.io/JAlcocerT/dash-docker-gcr/)

> Now your App is running! but you can just access it via the Server IP and the port 5000

5. To get **https and your custom domain** for the Flask App, use [NGinX Proxy Manager as another container](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/)
6. Point your **DNS to the Server IP as an A record** (with whatever domain registrar you chose)

{{< details title="DuckDNS is a Free Option | We made it with Cloudflare Domains 📌" closed="true" >}}


* If you need something **free**, you can try with a [**duckdns subdomain**: ](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/#how-to-get-https-locally-with-docker-services)
  * Remember to add the DSN Challenge with the **duckDNS** token when you'll be at the SSL tab (I placed 60s as propagation)
* To get **https with NGINX on a custom domain bought at Cloudflare**...
  * Get the Cloudflare [API Token](https://dash.cloudflare.com/profile/api-tokens)
  * Go to Edit zone DNS. Zone Resources -> Include all zones (or a specific domain only) and create it. Add it as `dns_cloudflare_api_token=`
  * Thanks to [TechHut](https://www.youtube.com/watch?v=79e6KBYcVmQ), [DistroDomain](https://www.youtube.com/watch?v=JNFQOJP5VY0) for the related YT Videos
* In NginX UI, you will add the: **container name and port** of the Flask App

![Flask Https NginX Setup](/blog_img/apps/flask-nginx-duckdns.png)


{{< /details >}}

This is how the **Python Flask APP https** got configured:

![Flask Https NginX Setup Cloudflare Domain](/blog_img/apps/flask-nginx-cloudflare.png)

{{< details title="Useful CLI commands to manage your Server for the Flask App 📌" closed="true" >}}

The HTTPs config, works with DNS proxied with Cloudflare and also without it:

```sh
ping 188.public.server.IP

ping wella.jalcocertech.xyz #dns might take a while to propagate
ping flask.jalcocertech.xyz #also works if cloudflare DNS record is proxied

ping welladesk.duckdns.org
```

> If you proxy it, your server IP will be hidden.

```yml
version: "3"
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    container_name: nginx    
    ports:
      # These ports are in format <host-port>:<container-port>
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port - UI
      # Add any other Stream port you want to expose
      # - '21:21' # FTP
    volumes:
      - ~/Docker/Nginx/data:/data
      - ~/Docker/Nginx/letsencrypt:/etc/letsencrypt
#     volumes:
#       - nginx_data:/data #  - ~/Docker/Nginx/data:/data
#       - nginx_letsencrypt:/etc/letsencrypt #  - ~/Docker/Nginx/letsencrypt:/etc/letsencrypt    


# volumes:
#   nginx_data:
#   nginx_letsencrypt:      

networks:
  nginx_default:
    name: nginx_default      
```

{{< /details >}}

{{< callout type="info" >}}
  **Alternative:** use a [Home Server](https://jalcocert.github.io/JAlcocerT/firebat-ak2-plus-minipc-review/) together with [Cloudflare tunnels](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/) to get https with your domain.
{{< /callout >}}

### User Management with Flask

{{< details title="Sample Flask UM Architecture 📌" closed="true" >}}

To implement a user authentication system in **Flask** that handles user sign-up and sign-in with a **SQLite** database and shows different UI based on the login status, here are some tools and extensions:

### 1. **Flask**: Core framework
   - **Flask** will serve as the web framework for routing, templating, and managing user sessions.

### 2. **SQLite + SQLAlchemy**: Database and ORM
   - **SQLite** is a lightweight file-based database, ideal for simple projects or development.
   - **SQLAlchemy** is the Object-Relational Mapper (ORM) that will interact with the SQLite database. It abstracts away raw SQL and makes database interaction cleaner.

### 3. **Flask-SQLAlchemy**: SQLAlchemy integration with Flask
   - This extension simplifies integrating SQLAlchemy with Flask and managing the database (creating tables, defining models).
   
### 4. **Flask-Login**: User session management
   - **Flask-Login** handles user sessions, tracking whether a user is logged in or not, and protecting routes that require authentication. It also provides the utilities for login/logout functionality.

### 5. **Flask-WTF**: Form handling and validation
   - **Flask-WTF** makes it easy to create and validate forms (e.g., sign-up and login forms). It integrates **WTForms** with Flask, handling things like CSRF protection and validation.

### 6. **Flask-Migrate** (optional): Database migrations
   - **Flask-Migrate** allows you to easily manage database migrations using Alembic. It’s helpful if your database schema evolves over time (e.g., adding more fields to the user model).

### 7. **Flask-Bcrypt** (optional but recommended): Password hashing
   - **Flask-Bcrypt** allows you to securely hash and verify passwords, ensuring your app stores user passwords in a secure, non-plain-text format.

---

### How These Tools Work Together:
#### 1. **User Sign-Up**:
   - A user signs up by submitting a form (handled by **Flask-WTF**) that collects a username, email, and password.
   - The password is hashed using **Flask-Bcrypt** before storing it in the SQLite database through **SQLAlchemy**.
   
#### 2. **User Sign-In**:
   - The login form verifies the entered email/username and compares the hashed password using **Flask-Bcrypt**.
   - Once authenticated, **Flask-Login** manages the session, storing whether the user is logged in.

#### 3. **UI Display**:
   - **Flask-Login** tracks if a user is authenticated. You can use this in your templates to conditionally display different UI elements. For example, if the user is logged in, show their profile and a logout button; otherwise, show a login/sign-up link.

### Summary of Tools:
1. **Flask** – Core framework for routing and templating.
2. **SQLite** – Simple, file-based database.
3. **SQLAlchemy** – ORM to interact with SQLite.
4. **Flask-SQLAlchemy** – Integration of SQLAlchemy with Flask.
5. **Flask-Login** – Managing user sessions (login, logout).
6. **Flask-WTF** – Form handling with CSRF protection.
7. **Flask-Bcrypt** – For securely hashing passwords.

These tools combined will allow your Flask app to handle user registration, login, session management, and UI rendering based on login status.

{{< /details >}}

{{< details title="Flask UM with MailerLite and Stripe 📌" closed="true" >}}


To implement a system where user registration, payments, and content access are tied together using **Flask**, **Stripe**, and **MailerLite**, you can break down the logic as follows:

### 1. **User Sign-Up and Newsletter Subscription (MailerLite)**
   - **MailerLite** will handle newsletter subscriptions. Users first sign up using their email.
   - After subscribing, the user receives a confirmation email containing a **verification code** (which you generate). This code will allow them to create an account in the Flask app.

   **Tools:**
   - **MailerLite API**: To manage email subscriptions.
   - **Flask**: For handling user interactions and generating the verification code.
   - **Flask-WTF**: For the form used to collect the email and verification code.

   **Flow**:
   - The user signs up with their email on your Flask app.
   - The Flask app makes an API call to MailerLite to add the user to your newsletter.
   - Upon successful subscription, the Flask app generates a unique verification code and sends an email (via MailerLite or Flask-Mail) to the user.

### 2. **Account Creation with Verification Code**
   - The user can now use the verification code they received to create a username and password for logging into the Flask app.
   
   **Tools:**
   - **Flask-Login**: To manage user authentication.
   - **Flask-SQLAlchemy**: To store users and verification codes in an SQLite database.
   - **Flask-Bcrypt**: For hashing passwords securely.

   **Flow**:
   - The user enters their verification code, email, and sets a password.
   - The Flask app verifies the code and creates a new user account.
   - The user can now log in using their email/username and password.

### 3. **User Dashboard with Password Management and Services**
   - After logging in, the user can manage their account (e.g., change their password) and see a list of services that can be purchased via **Stripe**.
   
   **Tools:**
   - **Stripe API**: To list services/products and handle payments.
   - **Flask-WTF**: For password change forms.
   - **Flask-Login**: To protect routes and check if a user is authenticated.

   **Flow**:
   - Once logged in, users can update their password and view a list of available services fetched via the Stripe API.
   - They can initiate a payment for any service.

### 4. **Stripe Payment Integration**
   - After a successful payment, the Stripe API will capture the email used for payment.
   - The system will verify if the payment email matches the email tied to the logged-in user. If they match, the user will get access to premium content or additional services.

   **Tools:**
   - **Stripe API**: For payment processing and webhook integration.
   - **Flask-SQLAlchemy**: To store and check payment status against the user’s email.

   **Flow**:
   - When the user makes a payment, a Stripe webhook can notify your Flask app of the successful transaction.
   - The Flask app will check if the Stripe payment email matches the logged-in user's email.
   - If they match, the user gains access to restricted content or services.

---

### Example Flow and Tool Summary:

1. **Sign-Up (MailerLite Integration)**:
   - User submits their email on Flask app.
   - Flask calls MailerLite API to add the user to the newsletter.
   - Flask generates a verification code and emails it to the user (via MailerLite or Flask-Mail).

2. **Create Account**:
   - User enters their email, verification code, and sets a password.
   - Flask verifies the code and creates a new user in SQLite.

3. **User Dashboard**:
   - User logs in and sees a dashboard with options to:
     - Change password.
     - View available services/products fetched from Stripe.
   
4. **Stripe Payment**:
   - User selects a service/product and pays via Stripe.
   - Stripe webhook sends payment confirmation to Flask.
   - Flask checks if the payment email matches the user's email.
   - If matched, Flask unlocks premium content or features.

---

### Required Libraries:
1. **Flask** – Core framework.
2. **Flask-SQLAlchemy** – ORM for interacting with SQLite database.
3. **Flask-Login** – User session management.
4. **Flask-WTF** – Form handling.
5. **Flask-Bcrypt** – For password hashing.
6. **MailerLite API** – For handling newsletter signups.
7. **Stripe API** – For payments and product listings.


{{< /details >}}


{{< callout type="info" >}}
  You can also use [tools like LogTo](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/)
{{< /callout >}}

---

### Flask Alternatives

#### FastAPI

* FastAPI: Fully supports Jinja2 templates.


#### Django

* Django: Can use Jinja2, but its native templating engine is preferred.

---

## Simpler Data Apps

* <https://docs.chainlit.io/get-started/overview>

### Streamlit

I've been using this one for a while now:

{{< cards cols="1" >}}
  {{< card link="https://github.com/streamlit/streamlit" title="Streamlit in Github" >}}
{{< /cards >}}
{{< cards cols="2" >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs" title="Streamlit Ask PDF" >}}
  {{< card link="https://github.com/JAlcocerT/Streamlit-MultiChat" title="MultiChat: OpenAI, Anthropic, Ollama,..." >}}
{{< /cards >}}
<!-- 
  {{< card link="https://github.com/JAlcocerT/Py_Double_Pendulum" title="Streamlit Double Pendulum" >}} -->


* https://pypi.org/project/streamlit-oauth/
* https://ecoagi.ai/topics/Streamlit/streamlit-authentication

* https://github.com/ObservedObserver/streamlit-shadcn-ui


### More Dashboarding Tools

* Metabase
* Superset
* Grafana

* Shiny in Python: For now I just used [Shiny with R](https://jalcocert.github.io/JAlcocerT/R-Stocks/)
  * <https://shiny.rstudio.com/py/gallery/>
  * <https://shiny.rstudio.com/py/gallery/>


pygwalker

* https://kanaries.net/pygwalker
* https://github.com/Kanaries/pygwalker

* https://docs.kanaries.net/pygwalker/use-pygwalker-with-streamlit
* https://github.com/Kanaries/pygwalker-in-streamlit
* https://docs.kanaries.net/pygwalker/use-pygwalker-with-streamlit.en
  * https://github.com/Kanaries/pygwalker?tab=readme-ov-file#tested-environments

> PyGWalker: Turn your pandas dataframe into an interactive UI for visual analysis


<!-- https://github.com/AIAnytime/Document-Buddy-App -->

---

## Off-Topics 

### Flask and WebSockets

Unlike HTTP connections, a **WebSocket connection is a permanent, bi-directional** communication channel between a client and the server, where either one can initiate an exchange.

Once established, the connection remains available until one of the parties disconnects from it.

WebSocket connections are useful for games or web sites that need to display live information with very low latency.

| Framework  | WebSocket Support                       |
|------------|-----------------------------------------|
| **Flask**      | [Supported via Flask-SocketIO](https://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent)            |
| Django     | Supported via Django Channels            |
| FastAPI    | Built-in support                        |
| Tornado    | Built-in support                        |
| Sanic      | Native support                          |
| Streamlit  | Limited support (using custom components) |
| Dash       | Limited support (using WebSocket-based components) |

#### Other Communication Protocols

| Feature               | WebSockets                         | MQTT                               | RabbitMQ                           |
|-----------------------|------------------------------------|-------------------------------------|------------------------------------|
| Connection Type       | Permanent, bi-directional          | Publish/subscribe                   | Message broker with various patterns|
| Initiation            | Either party can initiate          | Clients subscribe/publish           | Producers send to queues            |
| Connection Duration    | Long-lived until closed            | Long-lived with session persistence | Can be transient or persistent      |
| Use Cases             | Real-time apps (chat, gaming)     | IoT, telemetry, low-bandwidth apps  | Microservices, task queues         |
| Latency               | Low latency                        | Generally low latency               | Higher latency due to routing      |


{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/rpi-mqtt/" title="I was learning MQTT with a RPI here" icon="user" >}}
{{< /cards >}}
{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/microcontrollers-setup-101/" title="MQTT with ESP32 and a Pico W" >}}
  {{< card link="https://github.com/JAlcocerT/RPi/tree/main/Z_MQTT" title="MQTT Source Files" >}}
{{< /cards >}}

* WebSockets are best for real-time communication where low latency is crucial.
* MQTT excels in low-bandwidth environments and is optimized for IoT applications.
* RabbitMQ is suitable for scenarios requiring reliable message delivery and complex routing logic.

### Interesting stuff I learnt recently

* https://github.com/Scale3-Labs/langtrace - Langtrace 🔍 is an open-source, Open Telemetry based end-to-end observability tool for LLM applications, providing real-time tracing, evaluations and metrics for popular LLMs, LLM frameworks, vectorDBs and more.. Integrate using Typescript, Python.

* Model Garden, Vertex AI - https://cloud.google.com/model-garden?hl=es