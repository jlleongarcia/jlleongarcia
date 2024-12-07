---
title: "What I've learnt about Python"
date: 2024-09-04T10:20:21+01:00
draft: false
tags: ["dev"]
summary: 'Interesting stuff Ive learn along the way when trying to use Python'
url: 'useful-python-stuff'
---

If you have [Python Installed](https://jalcocert.github.io/JAlcocerT/guide-python/#installing-python-) already.

You can do very cool things with it.

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

## Python Apps Reliability

A good readme does the trick for any project.

This is a [good Python Project Readme.](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/README.md)




### Python Virtual Envs


There are several ways to install [Python Dependencies](https://fossengineer.com/python-dependencies-for-ai/).

{{< details title="Make the dependencies Work: Venv's in Python 📌" closed="true" >}}

```sh
python -m venv solvingerror_venv #create the venv

solvingerror_venv\Scripts\activate #activate venv (windows)
source solvingerror_venv/bin/activate #(linux)
```

Install them with:

```sh
pip install beautifulsoup4 openpyxl pandas numpy==2.0.0
pip install -r requirements.txt #all at once
#pip freeze | grep langchain

pip show beautifulsoup4
pip list
#pip freeze > requirements.txt #generate a txt with the ones you have!
```

```sh
source .env
#export OPENAI_API_KEY="your-api-key-here"
#set OPENAI_API_KEY=your-api-key-here
#$env:OPENAI_API_KEY="your-api-key-here"
echo $OPENAI_API_KEY
```

{{< /details >}}


### Containers for Python Apps

Making sure a Python app will *always* work is by [building & using containers](https://fossengineer.com/building-docker-container-images/).

{{< details title="Local container build 📌" closed="true" >}}

```sh
#docker build -t trip_planner .
DOCKER_BUILDKIT=1 docker build --no-cache --progress=plain -t trip_planner .
```

{{< /details >}}


{{< details title="CI/CD container build 📌" closed="true" >}}

You can use tools like: Jenkins, or Github Actions CI/CD Workflows

{{< /details >}}