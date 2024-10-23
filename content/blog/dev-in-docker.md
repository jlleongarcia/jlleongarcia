---
title: "How to Develop AI Projects inside a Docker Container"
date: 2024-08-17T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "Developing like a PRO (via SSH or into a container)"
---


Develop inside a **Docker container / Server**, without worrying about dependencies.

First, you need to do the following:

1. Install VSCode
2. Install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
3. Follow [the instructions to connect](https://code.visualstudio.com/docs/remote/ssh)


### VSCode Dev via SSH

For SSH connection, you can do:
* `CTRL+SHIFT+P` ->> `Remote SSH (Connect to Host)`
* Add the user name amd the IP/Domain: `youruser@192.168.3.200`
* Authenticate and Select the Platform (Linux?)

You will see that **you are connected to the server in VSCode via SSH**.

Pay attention to the bottom left side:

![VSCode SSH Dev](/blog_img/selfh/remote-dev-ssh.png)


{{< callout type="info" >}}
Thanks to [this YT Video](https://www.youtube.com/watch?v=miyD4c1dnTU), I could replicate it with my OrangePi5
{{< /callout >}}

### VSCode Dev via Containers

For container, do this instead. 

**Option 1**

1. Get your Dockerfile Ready
2. `CTRL+SHIFT+P` -> **Attach to running container**. Accept to run docker in wsl
3. Steting up Dev Containers....

**Option 2**

1. Get your Dockerfile Ready
2. `CTRL+SHIFT+P` -> **Add development container configuration files**. ->> `From Dockerfile`
3. a `devcontainer.json` will be created
4. Update the forwardPorts field of the json, for example with `"forwardPorts": [4321,4321],`
5. Re-open command palette `CTRL+SHIFT+P`, select **DevContainer: reopen in container**


```sh
docker exec -it webcyclingthere /bin/bash #see what happens inside the container
```

**Thanks to** this [Maksim Ivanov YT Video](https://www.youtube.com/watch?v=mi8kpAgHYFo)

{{< youtube "J0NuOlA2xDc" >}}
<!-- https://www.youtube.com/watch?v=J0NuOlA2xDc -->

> Remember, **Never install locally**

---

## Setup Containers for Development

Dont forget about: `.gitignore`, `.dockerignore`

### Containers for Python Apps

{{< details title="Python Docker Compose 📌" closed="true" >}}
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
{{< /details >}}


{{< details title="Python Dockerfile 📌" closed="true" >}}

{{< /details >}}

{{< callout type="info" >}}
Sample [Python Project](https://github.com/JAlcocerT/Streamlit-MultiChat) with these files
{{< /callout >}}


### Containers for WEBS

Node is a very popular one.

But you may also need [GO](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#hugo), or [Ruby...](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#jekyll)


### Node

It will work for **Astro sites, NextJS,...**


{{< details title="Node Dockercompose 📌" closed="true" >}}

```sh
docker exec -it webcyclingthere /bin/bash
#git --version
#npm -v
#node -v #you will see the specified version in the image
npm run dev

#npm uninstall react-slick slick-carousel #to fix sth
```

```yml
version: '3'
services:
  app:
    image: mynode_webapp:cyclingthere #node:20.12.2
    container_name: webcyclingthere
    volumes:
      - /home/reisipi/dirty_repositories/cyclingthere:/app
      - .:/app
    working_dir: /app
    command: tail -f /dev/null
    #command: bash -c "npm install && npm run dev"
    ports:
      - 4321:4321
      - 3000:3000
```

Other raw docker-compose:

```yml
version: '3'
services:
  app:
    image: node:20.12.2
    volumes:
      - .:/app
    working_dir: /app
    command: bash -c "npm install && npm run dev"
    ports:
      - 5000:5000
```

{{< /details >}}

{{< details title="Node Dockerfile 📌" closed="true" >}}

```sh
sudo docker pull node:20.12.2
docker build -t mynode_webapp:cyclingthere .
```

Depending where you run this, it will take more or less time.

With a Opi5 I had ~2min33s

```dockerfile
# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.12.2 #
#https://hub.docker.com/layers/library/node/20.12.2/images/sha256-740804d1d9a2a05282a7a359446398ec5f233eea431824dd42f7ba452fa5ab98?context=explore

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install Astro globally
#RUN npm install -g astro

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .
```

{{< /details >}}

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

### Gatsby

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
