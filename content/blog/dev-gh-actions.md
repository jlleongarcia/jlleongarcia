---
title: "How ive used Github Actions CI/CD"
date: 2024-11-17
draft: false
tags: ["Dev"]
description: 'How to use Github Actions CI/CD in your workflow. From Pages to Container Creation.'
summary: 'Setup GH Actions'
url: 'github-actions-use-cases'
---

If you are familiar with container technology, you might wonder if there is a way for containers to get built by themselves.

Thats were CI/CD comes into play, and in particular **Github Actions**.

To setup GHA is as simple as adding the proper `.github/workflows/ci_cd_config.yml` file with the use case for you.

It can be helpful for [Python](#actions-cicd-for-python-projects) or [Web projects](#github-actions-for-web-projects) (and much much more).

## Actions CI/CD for Python Projects

I was using GH Actions to **create x86 container** images and push them to **ghcr** like so:

```yml
name: CI/CD Pipeline x86 Container Image

# on:
#   push:
#     branches:
#       - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_MultiChat }} #Settings -> Dev Settings -> PAT's -> Tokens +++ Repo Settings -> Secrets & variables -> Actions -> New repo secret 

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: ghcr.io/jalcocert/streamlit-multichat:v1.0
```

### MultiArch Containers - QEMU 

But there is a better way - Create **MultiArch images thanks to QEMU** andpush them to ghcr:

```yml
#https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/Streamlit_GHA_MultiArch.yml

name: CI/CD Build and push MultiArch Container

on:
  # push:
  #   branches:
  #     - main
  workflow_dispatch:

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up QEMU
      uses: docker/setup-qemu-action@v1

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_MultiChat }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        platforms: linux/amd64,linux/arm64
        tags: |
          ghcr.io/jalcocert/streamlit-multichat:v1.1
          ghcr.io/jalcocert/streamlit-multichat:latest
```


{{< callout type="info" >}}
[Sample repo - multichat](https://github.com/JAlcocerT/Streamlit-MultiChat) 
{{< /callout >}}

You can also push **containers to Dockerhub from GHA**:

```yml
#https://github.com/JAlcocerT/Py_Trip_Planner/blob/main/.github/workflows/ci-cd-dockerhub.yml
name: CI/CD Pipeline Build and Push to DockerHub

on:
  workflow_dispatch: #trigger button
  # push:
  #   branches:
  #     - main

jobs:
  build-and-push-x86:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository #get the source code
      uses: actions/checkout@v2

    - name: Set up Docker Buildx #install docker
      uses: docker/setup-buildx-action@v1
        
    - uses: actions/checkout@v1
    - name: Build & Push Image to DockerHub
      run: |
        echo "${{ secrets.CICD_DASH_TOKEN_DOCKERHUB }}" | docker login -u "your_dockerhub_user" --password-stdin
        docker image build -t your_dockerhub_user/trip_planner:amd64 .
        docker push your_dockerhub_user/trip_planner:2-amd64
```

## Github Actions for Web Projects

And [Github Actions combined with static websites](https://jalcocert.github.io/JAlcocerT/how-to-use-github-pages/) is pretty useful as well.

{{< callout type="info" >}}
You can create really cool [WorkFlows with Github/Gitlab and **Cloudflare Workers and Pages**](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/)
{{< /callout >}}

> You can also see my [docs for websites](https://jalcocert.github.io/JAlcocerT/create-your-website/#select-the-deployment-method)

### Astro

With [Astro, you can make beautiful websites](https://jalcocert.github.io/JAlcocerT/using-astro-as-website/)

```yml
#https://github.com/JAlcocerT/web3/blob/main/.github/workflows/deploy_astro.yml
name: Deploy Astro to GitHub Pages

on:
  push: #option 1
    branches: [main]
  workflow_dispatch: #option2

permissions:
  contents: read
  pages: write
  id-token: write


jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out your repository using git
        uses: actions/checkout@v2

      - name: Use Node.js 18
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Astro
        run: npm run build --if-present

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy Astro Generated files to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

{{< callout type="info" >}}
[Sample repo - web3](https://github.com/JAlcocerT/web3), particularly, [**here**](https://github.com/JAlcocerT/web3/blob/main/.github/workflows/deploy_astro.yml).
{{< /callout >}}

### Hugo

If you dont know about it, with [**HUGO** you can make very quick websites](https://jalcocert.github.io/JAlcocerT/using-hugo-as-website/)

```yml
https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml
name: Deploy Hugo site to GH Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.117.0
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Go
        uses: actions/setup-go@v4
        with:
          go-version: '1.21'
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.117.0'
          extended: true
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo --gc --minify --baseURL "https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  # Test job (can be skipped if it fails)
  test:
    runs-on: ubuntu-latest
    needs: build
    continue-on-error: true  # This allows the job to fail without failing the entire workflow
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install linkchecker
        run: sudo apt-get install -y linkchecker
      - name: Run LinkChecker
        run: |
          linkchecker ./public/ \
            --ignore-url "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/" || echo "LinkChecker found errors, but continuing..."

  # Deploy job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

{{< callout type="info" >}}
[Sample repo - web3](https://github.com/JAlcocerT/JAlcocerT) 
{{< /callout >}}

### SliDev

With [Slidev we can do PPTs as a Code](https://jalcocert.github.io/JAlcocerT/docs/coolresources/diagrams_ppts/#slidev), which pretty much resonates with [AI assistants](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/)

{{< callout type="info" >}}
[Sample repo - slidev+multichat](https://github.com/JAlcocerT/JAlcocerT) 
{{< /callout >}}

```yml
#https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/SliDev_CICD.yml

name: Deploy Slidev site to GH Pages

on:
  # push:
  #   branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NODE_VERSION: 18
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ env.NODE_VERSION }}
      - name: Install dependencies
        run: |
          cd ./slidev
          npm install
      - name: Build Slidev project
        run: |
          cd ./slidev
          npm install -g @slidev/cli #npm install --save-dev @slidev/cli
          npm i -D playwright-chromium
          slidev build --base /Streamlit-MultiChat/ 
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./slidev/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Jekyll

```yml
#https://github.com/JAlcocerT/RPi/blob/main/.github/workflows/pages-deploy.yml

name: "Build and Deploy Jekyll to GH Pages"
on:
  push:
    branches:
      - main
      - master
    paths-ignore:
      - .gitignore
      - README.md
      - LICENSE

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          # submodules: true
          # If using the 'assets' git submodule from Chirpy Starter, uncomment above
          # (See: https://github.com/cotes2020/chirpy-starter/tree/main/assets)

      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.3
          bundler-cache: true

      - name: Build site
        run: bundle exec jekyll b -d "_site${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: "production"

      # - name: Test site
      #   run: |
      #     bundle exec htmlproofer _site \
      #       \-\-disable-external \
      #       \-\-ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"

      - name: Upload site artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "_site${{ steps.pages.outputs.base_path }}"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

As implemented in the RPI Project - https://github.com/JAlcocerT/RPi/

---

## GHA for R Projects

### Actions CI/CD for Shiny

### Github CI/CD for Flexdashboards

