---
title: "What I've learnt about Python"
date: 2024-09-04T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Interesting stuff Ive learn along the way when trying to make better Websites. A Non-WebDev perspective.'
url: 'create-your-website'
---


{{< details title="Make the dependencies Work: Venv's in Python 📌" closed="true" >}}

```sh
python -m venv solvingerror_venv #create the venv

solvingerror_venv\Scripts\activate #activate venv (windows)
source solvingerror_venv/bin/activate #(linux)
```

Install them with:

```sh
pip install beautifulsoup4 openpyxl pandas numpy
pip install -r requirements.txt #all at once


pip show beautifulsoup4
pip list
#pip freeze > requirements.txt #generate a txt with the ones you have!
```
{{< /details >}}


{{< details title="Why I love Streamlit for Quick UI's 📌" closed="true" >}}

Streamlit uses a combination of front-end technologies to create its user interface, primarily leveraging React.js, a popular JavaScript library for building user interfaces.

- **React.js**: Used for building dynamic and responsive user interfaces.
- **WebSockets**: Maintains a real-time connection between the client and server for instant updates.
- **Tornado**: A Python framework that handles long-lived connections and supports the server's real-time operations.
- **Custom Components**: Allows integration of additional web technologies like JavaScript, enhancing functionality.
- **Bootstrap**: Provides styling and theming capabilities to customize the appearance of applications (CSS Framework).
- **Widgets and Markdown**: Supports a variety of interactive widgets and Markdown for easy UI development.

This setup enables you to **quickly create interactive web apps using Python**, without needing extensive frontend development skills.

{{< /details >}}