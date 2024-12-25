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

{{< callout type="info" >}}
The [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh&ssr=false#version-history) do the trick as well. Go to Version History. Download .vsix pkg. Go to VS Code extensions -> 3 dots -> Install from vsix
{{< /callout >}}

### VSCode Dev via SSH

For SSH connection, you can do:
* `CTRL+SHIFT+P` ->> `Remote SSH (Connect to Host)`
* Add the user name amd the IP/Domain: `youruser@192.168.1.117`
* Authenticate and Select the Platform (Linux?)

You will see that **you are connected to the server in VSCode via SSH**.

{{< callout type="info" >}}
If you want to use it with Gitlab and dont want to input user/pass all the time, [get Gitlab WorkFlow extension](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow) for VSCode + CTRL SHIFT P + GitLab: Authenticate, just once.
{{< /callout >}}

Pay attention to the bottom left side:

![VSCode SSH Dev](/blog_img/selfh/remote-dev-ssh.png)


{{< callout type="info" >}}
Thanks to [this YT Video](https://www.youtube.com/watch?v=miyD4c1dnTU), I could replicate it with my OrangePi5
{{< /callout >}}

### VSCode Dev via Containers

Tested at - https://github.com/JAlcocerT/Py_Trip_Planner/tree/main/Development

<!-- 
* In vs code, get ms-vscode-remote.remote-containers -->
<!-- https://www.youtube.com/watch?v=dihfA7Ol6Mw
 -->
<!-- 
In vscode you can try with: remote development (ms-vscode-remote.vscode-remote-extensionpack)

https://www.youtube.com/watch?v=mi8kpAgHYFo -->

For container, do this instead. 

1. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

```sh
ext install ms-vscode-remote.remote-containers
```
2. Clone your repository:

For Docker Desktop: Start VS Code and clone your repo [in a container volume.](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)
For Docker Engine: Clone your repo locally, then [open it in a container](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-an-existing-folder-in-a-container) via VS Code.

3. Wait for the Dev Containers setup to complete.

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

I enjoy creating Data Driven apps with python.

And I like to do them so that they work reliably and sistematically.

Docker helps me with it.

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

You will also need a `Dockerfile` and most likely a `requirements.txt`

{{< callout type="info" >}}
Sample [Python Project](https://github.com/JAlcocerT/Streamlit-MultiChat) with these files
{{< /callout >}}

---

### Containers for WEBS

Node is a very popular one.

But you may also need [GO](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#hugo), or [Ruby...](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#jekyll)


#### Node

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

{{< /details >}}

{{< details title="Node Dockerfile 📌" closed="true" >}}

```sh
sudo docker pull node:20.12.2
#docker build -t mynode_webapp:cyclingthere .
docker build -t mynode_web:web3 .
```

Depending where you run this, it will take more or less time.

* With a [Opi5](https://jalcocert.github.io/RPi/posts/pi-vs-orange/) I had ~2min33s
* With a Pi4 4GB ~2min18s

```sh
sudo docker run -d -p 4321:4321 --name astro-web3 mynode_web:web3 tail -f /dev/null
#docker run -d -p 3000:3000 --name astro-web3 mynode_web:web3
docker exec -it astro-web3 bash
npm run dev --host

#docker run -d -p 3001:3000 --name astro-web33 mynode_web:web3 npm run dev
```


```dockerfile
# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.12.2
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

#If you'd like to set npm run dev as the default command for the container
# Add this line at the end of your Dockerfile
#CMD ["npm", "run", "dev"]
```

{{< /details >}}

#### HUGO

{{< callout type="info" >}}
This Website is made with HUGO! - See [Source Code](https://github.com/JAlcocerT/JAlcocerT)
{{< /callout >}}

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


#### Jekyll

{{< callout type="info" >}}
I have used Jekyll with the [RPi Web project](https://jalcocert.github.io/RPi/) as covered on [this post](https://jalcocert.github.io/JAlcocerT/raspberrypi-starting-guide/)
{{< /callout >}}



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


#### Gatsby

Thanks to Gatsby, I heard for the first time about **headless CMS**

There is a way to integrate **Ghost as CMS and use Gatsby as SSG**. Having the bost of both worlds.



{{< details title="Ghost and Gatsby Together - headless CMS sample 📌" closed="true" >}}


A starter template to build lightning fast websites with [Ghost](https://ghost.org/) & [Gatsby](https://gatsbyjs.org)

**Demo:** https://gatsby.ghost.org/

&nbsp;

![gatsby-starter-ghost](https://user-images.githubusercontent.com/120485/50913567-8ab8e380-142c-11e9-9e78-de02ded12fc6.jpg)

&nbsp;


**Installing**

```bash
# With Gatsby CLI
gatsby new gatsby-starter-ghost https://github.com/TryGhost/gatsby-starter-ghost.git
```

```bash
# From Source
git clone https://github.com/TryGhost/gatsby-starter-ghost.git
cd gatsby-starter-ghost
```

Then install dependencies

```bash
yarn
```

&nbsp;

**Running**

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```
{{< /details >}}



---

## Releted Concepts I discovered

### Testing Astro with Ghost as HeadlessCMS

* https://astro-ghostcms.xyz/
  * https://gitlab.com/matthiesenxyz/astro-ghostcms
  * https://github.com/MatthiesenXYZ/astro-ghostcms

And with some interesting Themes supported!

* https://github.com/MatthiesenXYZ/demo-starlightghostcms
  * https://starlightdemo.astro-ghostcms.xyz/

> Thanks to matthiesenxyz!