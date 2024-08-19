---
title: "How to Develop AI Projects inside a Docker Container"
date: 2024-08-12T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "Developing like a PRO (via SSH or into a container)"
---


Develop inside Docker container, without worrying about dependencies.

1. Install VsCode
2. Install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
3. Follow [the instructions to connect](https://code.visualstudio.com/docs/remote/ssh)
* For SSH, you can do:
  * CTRL+SHIFT+P ->> Remote SSH (Connect to Host)
  * Add the IP and the user name
  * Authenticate and Select the Platform (Linux?)
* For container, do this instead
  * 

https://www.youtube.com/watch?v=J0NuOlA2xDc

> Never install locally

Remote Development with VSCode (SSH) :
https://www.youtube.com/watch?v=miyD4c1dnTU

### Python

```yml
version: '3.8'

services:
  my_python_dev_container:
    image: python:3.8
    container_name: python_dev
    ports:
      - "8501:8501"
    working_dir: /app
    #command: python3 app.py
    command: tail -f /dev/null #keep it running
```

### WEBS

#### Gatsby

```yml
version: '3.8'

services:
  gatsby-dev:
    image: gatsby-dev:latest
    ports:
      - "8001:8000"
    volumes:
      - app_data:/usr/src/app
      - node_modules:/usr/src/app/node_modules
    # environment:
    #   - NODE_ENV=development
    command: tail -f /dev/null #keep it running      

volumes:
  node_modules:
  app_data:
```

### HUGO


* <https://hub.docker.com/r/klakegg/hugo>


```yml
version: "3.9"

services:
  hugo:
    image: 0.107.0-ext-ubuntu-onbuild #klakegg/hugo:ext-alpine
    volumes:
      - ./mysite:/src
    ports:
      - "1313:1313"
```

### Jekyll

* <https://wowthemesnet.github.io/mundana-theme-jekyll/index.html>

```yml
version: '3'
services:
  jekyll:
    image: my-jekyll-site
    ports:
      - "4000:4000"  # Map the container's port to the host
    volumes:
      - jekyll-site:/app  # Mount the named volume into the container
      #- .:/app  # Mount your Jekyll site files into the container
    command: tail -f /dev/null #keep it running
volumes:
  jekyll-site:  # Define the named volume her
```

### Node

```yml
version: '3'
services:
  app:
    image: node:14
    volumes:
      - .:/app
    working_dir: /app
    command: bash -c "npm install && npm run dev"
    ports:
      - 5000:5000
```