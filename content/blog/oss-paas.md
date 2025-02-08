---
title: "Deploying with PaaS: Coolify, Dokku and more"
date: 2025-03-07
draft: false
tags: ["Dev"]
description: 'Coolify, Dokku, Caprover, Openfaas'
summary: 'Testing Operative System for a NAS'
url: 'deploying-software-with-paas-to-servers'
---

## PaaS

**Platform as a Service** (PaaS) is a cloud computing model that provides a platform for customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.

*   **Complete development and deployment environment:** PaaS provides a comprehensive suite of tools and services needed for the entire application lifecycle, from coding and testing to deployment and management.
*   **Abstraction of infrastructure:** PaaS handles the underlying infrastructure, including servers, storage, and networking. This allows developers to focus solely on writing code and building their applications.
*   **Support for various programming languages and frameworks:** PaaS platforms typically support a wide range of programming languages, frameworks, and databases, offering developers flexibility in their technology choices.
*   **Scalability and flexibility:** PaaS solutions offer easy scalability, allowing applications to automatically adjust resources based on demand. This ensures optimal performance even during peak usage.
*   **Managed services:** PaaS providers handle routine tasks such as updates, security patches, and backups, freeing up development teams to focus on strategic initiatives.

Examples of popular PaaS providers include:

* AWS Elastic Beanstalk: Amazon's PaaS offering.   
* Google App Engine: Google's PaaS platform.
* Microsoft Azure App Service: Microsoft's PaaS offering.   
* Heroku: A popular PaaS platform.   
* Platform.sh: A unified platform for web development and hosting.   
* Netlify: A platform for building and deploying static websites and web applications.   
* Vercel: A platform for front-end development, specializing in Next.js deployments.   


## PaaS for your Servers

[![Star History Chart](https://api.star-history.com/svg?repos=caprover/caprover,coollabsio/coolify,dokku/dokku&,type=Date)](https://star-history.com/#caprover/caprover&coollabsio/coolify&dokku/dokku&Date)


### CapRover

* https://github.com/caprover/caprover
    * https://caprover.com/
    * https://caprover.com/docs/get-started.html
> Apache v2 | Scalable PaaS (automated Docker+nginx) - aka Heroku on Steroids

```sh
docker run -p 80:80 -p 443:443 -p 3000:3000 -e ACCEPTED_TERMS=true -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover
```

```yml
version: "3.8"  # Or a suitable version

services:
  caprover:
    image: caprover/caprover
    ports:
      - "80:80"
      - "443:443"
      - "3000:3000"
    environment:
      ACCEPTED_TERMS: "true"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /captain:/captain
```

<!-- 
https://www.youtube.com/watch?v=VPHEXPfsvyQ 
-->

{{< youtube "VPHEXPfsvyQ" >}}

{{< details title="More a out CapRover 📌" closed="true" >}}

**CapRover**, a **free** and **open-source** **Platform-as-a-Service (PaaS)** for **easy application deployment**.

**What is CapRover?**

**CapRover** is a **user-friendly**, **fully automated** application platform, similar to a **self-hosted**, **open-source Heroku**. It simplifies deploying various applications like **NodeJS**, **PHP**, **Java**, **WordPress**, **MongoDB**, and **MySQL**.

**Setting Up CapRover:**

Requires a **domain** and a **Virtual Private Server (VPS)**. The tutorial uses **DigitalOcean** for the **VPS** and **Google Domains** for the **domain**. Setup involves:

*   **Installing CapRover** on the server.
*   **Setting up a wildcard domain**.
*   **Installing the CapRover client** on your local machine.

**Deploying Applications:**

**CapRover** supports deploying **custom applications** and **one-click apps**. The tutorial demonstrates deploying a custom **NodeJS application** and a **one-click WordPress blog**, highlighting the **straightforward process**.

**Key Features:**

*   **HTTPS:** Automatic **Let's Encrypt** integration for **free SSL certificates**.
*   **Monitoring:** Built-in **NetData** monitoring for **CPU** and **RAM** usage, with **customizable alerts**.
*   **One-Click Apps:** Over **100 pre-configured applications**, including **databases**, **frameworks**, and **CMS**.
*   **Auto-Deployment:** Integration with **GitHub**, **GitLab**, or **Bitbucket** for **automated deployments** on **Git push**.

**Takeaways:**

*   **CapRover** is a **free** and **open-source PaaS** simplifying application deployment.
*   Supports a **wide range of applications** (**NodeJS**, **PHP**, **Java**, **WordPress**, etc.).
*   **Straightforward setup** and **quick application deployment**.
*   Offers valuable additional features like **HTTPS**, **monitoring**, **one-click apps**, and **auto-deployment**.


{{< /details >}}

### Coolify

Application could be any type of web application.

It **could be a static site**, a NodeJS application, a PHP application, etc.

* https://github.com/coollabsio/coolify-examples/tree/main

For complex applications, you can use Docker Compose based deployments or the one-click services.

* https://github.com/coollabsio/coolify
    * https://coolify.io/docs/installation
    * https://coolify.io/

> Apache v2 | An open-source & self-hostable Heroku / Netlify / Vercel alternative.

```yml

```

* No Features Behind Paywall. Everything is included in the open-source software (OSS) version. And will always be.
* No Limitations. You have the freedom to host an unlimited number of websites on any quantity of servers without any restrictions.
* Nice UI. You get a simple and easy to use UI to manage your servers and applications.
* Open Source. You can see the source code and contribute to it, if you want. You can shape the future of the software.

```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
```

https://www.reddit.com/r/selfhosted/comments/1dbmv4d/alternatives_to_vercel_coolify_dokploy_or_caprover/


### Dokku

* https://github.com/dokku/dokku
    * https://dokku.com/docs/getting-started/installation/
    * https://dokku.com/docs/getting-started/install/docker/

> MIT | A docker-powered PaaS that helps you build and manage the lifecycle of applications

```yml

```

```sh
docker exec -it dokku bash

dokku --version
#dokku version 0.35.15
```

* https://dokku.com/docs/deployment/application-deployment/

<!-- https://www.youtube.com/watch?v=O_-KxC9FjuA -->
{{< youtube "O_-KxC9FjuA" >}}

https://www.youtube.com/watch?v=KMPKw5VS9pI

```sh
# from your local machine
git clone https://github.com/heroku/ruby-getting-started
# on the Dokku host
dokku apps:create ruby-getting-started
```


### QuickStack

* https://github.com/biersoeckli/QuickStack
    * https://quickstack.dev/
    * https://quickstack.dev/docs/intro

> GPL v3 | Build, run and monitor your apps on any server from a single, easy-to-use UI.

https://www.reddit.com/r/selfhosted/comments/1igktsv/alternative_to_caprover_and_coolify_quickstack/


```sh
curl -sfL https://get.quickstack.dev/setup.sh | sh -
#systemctl --type=service --state=running #see that its running
```

![PaaS QuickStack](/blog_img/selfh/pass-quickstack.png)

Go to `localhost:30000`

* https://quickstack.dev/docs/getting-started/installation
    * https://quickstack.dev/docs/managing-apps/from-container-registry
    * https://quickstack.dev/docs/managing-apps/from-git-source

### OpenFAAS

* https://github.com/openfaas/faas
    * https://www.openfaas.com/

> CE for boddy only | OpenFaaS - Serverless Functions Made Simple