---
title: "Interesting IT Concepts"
date: 2024-08-23T10:20:21+01:00
draft: false
tags: ["Dev"]
description: 'IT Concepts for Projects: CI/CD, webhooks, API calls...'
summary: 'Github Actions'
url: ''
---

1. CI/CD and Github Actions
2. How to Code on the go
3. More: Microservices, WebHooks, API Calls...

## What it is CI/CD?

### How to use Github Actions CI/CD?

GitHub Actions, a **CI/CD framework** provided by GitHub, allows you to automate the build, test, and deployment processes for your software projects.


{{< details title="About GH Actions 📌" closed="true" >}}

With GitHub Actions, you can define workflows to automate tasks such as compiling code, running tests, performing code analysis, and generating build artifacts.

It supports various programming languages and offers great flexibility in customizing your CI pipeline.

In addition to Continuous Integration (CI), GitHub Actions also supports Continuous Deployment (CD) by integrating with different deployment strategies and environments.

This allows you to automate the deployment of your application to various platforms and hosting services, such as cloud providers or dedicated servers, ensuring a seamless release process.
{{< /details >}}

This is how I've used **GH Actions in my projects:**

{{< hextra/feature-grid >}}
 
  {{< hextra/feature-card
    title="Streamlit MultiChat"
    subtitle="Chat across LLM Providers with Python and Streamlit"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
    link="https://github.com/JAlcocerT/Streamlit-MultiChat"
  >}}

  {{< hextra/feature-card
    title="Trip Planner"
    subtitle="Tool to simulate these projects in the browser"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,50%,0));"
    link="https://github.com/JAlcocerT/Py_Trip_Planner/"
  >}}

    {{< hextra/feature-card
    title="Even the Web3 Astro Website"
    subtitle="Use Astro with Github Actions to build Websites like a Pro"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
    link="https://jalcocert.github.io/web3/"
  >}}
{{< /hextra/feature-grid >}}


{{< callout type="info" >}}
  Also this webpage is created with [HUGO and GH Actions!](https://github.com/JAlcocerT/JAlcocerT/blob/main/.github/workflows/pages.yaml)
{{< /callout >}}

GitHub Workflows enable automatic Docker container creation given conditions (like a new push). To start, go to your repository, click on **Actions**, and then **New workflow**.

You can select a workflow template that suits your project or follow the steps below to create your own `.yml` file for CI/CD.

The CI/CD workflow configuration is stored in `.github/workflows/ci_cd.yml`:

```yml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
```

This setup prepares your Docker image.

Next, you can **push the image to a container registry**, such as [GitHub Container Registry](#pushing-containers-to-ghcr) or [DockerHub](#pushing-docker-containers-to-dockerhub).

### Pushing Containers to GitHub Container Registry

To push the created container to GitHub Container Registry, add the following to your workflow:

```yml
    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_For_This_WF }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: ghcr.io/your_github_username/your_repo_name:v1.0        
```

You’ll need a **CICD_TOKEN_For_This_WF** secret so GitHub can authenticate the action.

Obtain this token from **GitHub Settings** under `Developer Settings -> Personal Access Tokens`.

Next, add this token as a repository secret under `Repo Settings -> Secrets & variables -> Actions -> New repository Secret`.

{{< callout type="warning" >}}
  Ensure the secret name matches the variable used in your `.yml` configuration.
{{< /callout >}}

To make your Docker image publicly accessible, set the package visibility to public under `https://github.com/yourGHuser?tab=packages` and update the **Visibility of the Package**.

Now, anyone can pull your Docker image using:

```sh
docker pull ghcr.io/your_github_username/your_repo_name:v1.0
```

### Testing GH Actions Workflows locally

* https://github.com/nektos/act

> Run your GitHub Actions locally 🚀

## Coding on The Go

### Github CodeSpaces

* https://github.com/codespaces

### VSCode Through Docker

### Github Authenticating

```sh
sudo apt update
sudo apt install gh #https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls
gh auth login #you can use HTTPs
```

* https://github.com/login/device and paste the Code the CLI will give you

---

## Other Concepts

### What are microservices?

### What are Web-Hooks?

A webhook is like a doorbell. When certain events happen in one system (like a new post on a blog or a new commit in a repository), it automatically sends a notification to another system. It's a way for apps to provide other applications with real-time information.

* How It Works: A webhook delivers data to other applications as it happens, meaning you get data immediately. You set up a webhook by providing a URL to the system you want to receive the notifications. When an event occurs, the system makes an HTTP request (usually POST) to the URL you provided.

* Use Case Example: A common use of webhooks is in Continuous Integration/Continuous Deployment (CI/CD) pipelines. For example, GitHub can use a webhook to notify a CI server like Jenkins to start a new build whenever code is pushed to a repository.

### What are API calls?

An API call is like making a phone call to a specific service. You request the information or service you need, and the system responds back. It's a way for applications to interact and request data from each other.

* How It Works: An API call is a manual process; you have to make the request to get the data. It’s like asking, "Do you have any new data?" The request is usually made via HTTP (GET, POST, PUT, DELETE), and the server processes the request and sends back a response.

* Use Case Example: If you have an application that needs to get the latest weather data, it can make an API call to a weather service. The application sends a request, and the weather service responds with the latest weather information.

### WebHooks vs API Calls

* Initiation:
  * Webhook: Automatically initiated by the source system when an event occurs.
  * API Call: Manually initiated by the requesting system.
* Purpose:
  * Webhook: Used for real-time notifications.
  * API Call: Used for requesting or sending data on demand.
* Direction:
  * Webhook: One-way from the source to the receiver.
  * API Call: Two-way communication between the requester and the server.