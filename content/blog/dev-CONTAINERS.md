---
title: "Reasons why I love Containers. With Cloudflared and AI Apps."
date: 2025-01-04
draft: false
tags: ["Dev"]
description: 'Reasons to use containers: selfhosting with Cloudflare tunnels, App bunddle, dev environments, CI/CD...'
summary: 'A Container and related tools recap'
url: 'why-i-love-containers'
---

<!-- https://fossengineer.com/understanding-containers-for-selfhosting/ -->

{{< callout type="info" >}}
We will be combining [Docker](#container-tech-is-cool)+[Cloudflare Tunnels](#exposing-apps-safely-with-cloudflare-tunnels)+[Streamlit as AI App](#ai-apps-with-containers-and-cloudflare-tunnels). Using [Containers to pack all Python dependencies](https://jalcocert.github.io/JAlcocerT/ai-projects-python-dependencies/#with-containers)
{{< /callout >}}

## Container Tech is Cool

Containers are an essential tool for simplifying self-hosting software. They give us:

- **Portability**: Containers ensure that your software runs consistently across different environments (development, testing, production).
- **Scalability**: Easily replicated and orchestrated, containers allow for dynamic scaling, particularly in cloud environments.
- **Isolation**: Containers isolate applications, preventing conflicts between dependencies.
- **Efficiency**: Containers share the host OS kernel, making them more resource-efficient and faster than virtual machines. 

More? **Coderized** have a couple of very interesting and well edited videos [about containers](https://www.youtube.com/watch?v=J0NuOlA2xDc&t=7s).
{{< youtube "ilkZ27TwYVg" >}}
<!-- https://www.youtube.com/watch?v=ilkZ27TwYVg -->


{{< details title="Why Docker got easier? 📌" closed="true" >}}

Simplifying Containerization with Docker

*   **Docker Init:** Simplifies containerizing new and existing projects by offering pre-configured development templates.  This automates setup, enabling faster building and deployment.

*   **Docker Debug:** Streamlines container debugging by injecting necessary packages at runtime without filesystem modifications. Includes a built-in toolbox, access to the Nix package repository, remote debugging, metadata analysis, and log auditing.

*   **Docker Compose Watch:**  Improves the development workflow by synchronizing local files with containers and enabling actions like filtering, restarting, and rebuilding containers based on file changes.

*   **Docker Build Cloud:** Offloads container building to a cloud service, significantly reducing build times (up to 39x) and saving developers an average of one hour per day.

*   **Docker Scout:** Enhances container security by identifying and addressing vulnerabilities, policy violations, and outdated dependencies, often automatically.

Takeaways

*   **Ease of Use:** Docker init simplifies project containerization.
*   **Efficient Debugging:** Docker debug provides versatile and efficient debugging tools.
*   **Streamlined Development:** Docker compose watch improves the development loop with live file synchronization.
*   **Increased Productivity:** Docker Build Cloud accelerates build times and saves developer time.
*   **Enhanced Security:** Docker Scout proactively addresses security issues in containers.

{{< /details >}}


**What Are Containers?**

Containers are **lightweight, portable, and self-contained units of software** that package an application along with its dependencies, libraries, and configurations.

This makes it possible to run the software seamlessly across different environments.

Unlike virtual machines, containers share the host system’s OS kernel, making them faster to deploy and more efficient.

**Prerequisites for Containers**

Before you can use containers, you need to set up the required tools. Below are the steps for setting up **Docker** and **Podman**, two of the most popular containerization tools.

{{< callout type="info" >}}
You can use the SelfHosting script I prepared [here](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/)
{{< /callout >}}

### Docker Setup

1. **Install Docker**:
   - **On Linux**:
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```
- For more installation details, check Docker's [official guide](https://docs.docker.com/get-docker/).

2. **Verify Installation**:
   - Check Docker version:
```bash
docker --version
```
   - Run a simple container to test:
```bash
docker run hello-world
```

3. **Post-Installation**:
   - To avoid using `sudo` with Docker commands on Linux:
```bash
sudo usermod -aG docker $USER
```

4. **Start Using Docker**:
   - Common commands: `docker build`, `docker run`, `docker ps`. Try pulling images from Docker Hub (e.g., `docker pull ubuntu`).

### Podman Setup

1. **Install Podman**:
   - **On Linux**:
```bash
sudo apt update
sudo apt install podman
```

2. **Verify Installation**:
   - Check the Podman version:
```bash
podman --version
```

3. **Test Podman**:
   - Run a test container:
```bash
podman run hello-world
```

4. **Post-Installation**:
   - Add your user to the Podman group:
```bash
sudo usermod -aG podman $USER
```

5. **Start Using Podman**:
   - Podman commands are similar to Docker’s. Start using commands like `podman build`, `podman run`, and `podman ps`.



{{< details title="UI Tools for Managing Containers 📌" closed="true" >}}



While Docker and Podman are command-line tools, there are several **UI tools** that make managing containers easier and more intuitive. Here are some popular options:

1. **Portainer**

- **Platform**: Linux, Windows, macOS
- Portainer is a popular open-source web-based UI for managing Docker and Podman containers.
- **Installation Command**:
  ```bash
  sudo docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
  ```
  Access Portainer at: `http://localhost:9000`.

![Portainer Docker UI](path_to_image)

2. **Dockge**

- **Platform**: Docker-based UI for container management.
- **Installation Command**:
  ```bash
  docker run -d \
    --name dockge \
    --restart unless-stopped \
    -p 5001:5001 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /home/your_user/Desktop/Dockge/data:/app/data \
    louislam/dockge:1
  ```
  Access Dockge at: `http://localhost:5001`.

3. **Cockpit**

- **Platform**: Linux (CentOS, Fedora, Ubuntu)
- Cockpit is a server management tool with a web-based UI for container management.
- **Installation Command**:
  ```bash
  sudo apt install cockpit
  sudo systemctl enable --now cockpit.socket
  ```

4. **Kitematic (for Docker)**

- **Platform**: Windows/macOS
- Kitematic is a simple GUI for Docker that makes it easier to create, configure, and run containers.

5. **Yacht**

- **Platform**: Web-based UI for Docker containers.
- Learn more about Yacht from [this video](https://www.youtube.com/watch?v=Xc94HJn1nNo) or check its [GitHub page](https://github.com/SelfhostedPro/Yacht).


{{< /details >}}


<!-- https://youtube.com/shorts/ox3IsWH-o7g -->
{{< youtube "ox3IsWH-o7g" >}}


These tools simplify the process of managing containers, especially if you prefer not to work exclusively with the command line.

Setting up Docker or Podman is straightforward, and with UI tools like Portainer, Dockge, and others, managing your containers has never been easier.

## Easy SelfHosting with Containers
<!-- 
https://www.youtube.com/watch?v=fuZoxuBiL9o&t=717s
 -->
{{< youtube "fuZoxuBiL9o" >}}

{{< details title="Why Docker is great to deploy to a VPS? 📌" closed="true" >}}

Dreams of Code, a Senior NYT Reporter, explains their preference for Docker Stack over Docker Compose for VPS deployments.

*   **Secrets Management:** Docker Stack allows external secrets management, separate from the Docker Stack YAML file, which can be linked to environment variables for database and web app services.  This promotes secure secret storage.
*   **Redeploying Applications:** Docker Compose can lead to downtime during redeployments as it shuts down running services before deploying upgrades.  Manually copying the Docker Compose YAML file also hinders agile deployments.
*   **Docker Stack Deployment:** Docker Stack extends Docker Compose by deploying Docker Compose files on a Docker Swarm enabled node. Swarm mode provides features like blue-green deployments, rolling releases, secure secrets management, service rollbacks, and clustering.
*   **Automated Deployments:** Docker Stack integrates with GitHub Actions for automated deployments. GitHub Actions pipeline workflow files manage the Docker Stack deployment process.

**Key Takeaways:**
    *   Docker Stack improves upon Docker Compose for seamless and secure VPS application deployments.
    *   Docker Context simplifies managing and deploying to multiple VPS instances from a workstation.
    *   Docker Stack's secrets management, rollback capabilities, and built-in load balancing enhance production services and developer experience.
    *   Combining Docker Stack with GitHub Actions streamlines CI/CD, ensuring fast, secure deployments with minimal manual effort.

{{< /details >}}


### Exposing Apps Safely with Cloudflare Tunnels

<!-- https://www.youtube.com/watch?v=k75PviBQeA0 -->
<!-- https://youtu.be/k75PviBQeA0 -->


Learn how to securely expose your self-hosted services (Including AI Apps!) using Cloudflare's Zero Trust Tunnel with Docker

**What is Cloudflare Zero Trust Tunnel?**

Cloudflare Zero Tunnel creates a secure connection between your local machine and Cloudflare's global edge network.

It allows private resources to be accessed without exposing them to the public internet, providing enhanced security and privacy.

**Key Benefits:**
- **Improved Security:** End-to-end encryption (TLS 1.3) for safe data transmission.
- **Increased Privacy:** Avoid exposing private resources to the public internet.
- **Global Accessibility:** Access your services securely from anywhere.
- **Faster Connections:** QUIC protocol for more reliable and faster connections.


Docker allows you to containerize and deploy applications easily.

By combining **Docker with Cloudflare Zero Tunnel**, we can securely expose services on the internet.

1. **Create a Docker container for your service**  
   Use Docker to package your application, such as a Python-based web service, in a container.

2. **Install Cloudflare Zero Tunnel Client**  
   - Use the Cloudflare [cloudflared Docker image](https://hub.docker.com/r/cloudflare/cloudflared).
   - Configure the Cloudflare Zero Tunnel by setting up a token in the Cloudflare Dashboard.

3. **Set Up Cloudflare Tunnel with Docker**  
   - Run `cloudflared` as a container linked to your own services:
   
```bash
docker network create tunnel
```

```yml
version: '3.8'

services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    command: tunnel --no-autoupdate run --token token_from_cloudflare_webUI #see video below
    networks:
      - tunnel #a name for the Cloudflare Network
    restart: always #unless-stopped

networks:
  tunnel: #a name for the Cloudflare Network
```

4. **Connect Your Service to the Tunnel Network**  
   Add your service container to the Cloudflare tunnel network:
   
```bash
docker network connect tunnel your_service_container
```

5. **Configure a Public Hostname on Cloudflare**  
   In the Cloudflare Dashboard, create a public hostname for your service, linking it to the service container using the format `your_service_name:docker_port`.


- [Cloudflare Dash](https://dash.cloudflare.com/)
- [Cloudflare One Dash](https://one.dash.cloudflare.com/)
- [Cloudflare Docker Image](https://hub.docker.com/r/cloudflare/cloudflared)



{{< details title="Is my home IP safe with Cloudflare? 📌" closed="true" >}}


How to check my local IP address?
```bash
ifconfig
```

How to check the exposed service IP?
Cloudflare Tunnel ensures your service is securely exposed **without revealing your local IP**:

```bash
curl your_selected_domain.com
```

{{< /details >}}


{{< youtube "k75PviBQeA0" >}}

By following this guide, you can expose your services securely **without the need for port forwarding or exposing your home IP**.

Cloudflare's Zero Trust Tunnel with Docker is a powerful solution to enhance both security and accessibility of your self-hosted applications.

{{< callout type="info" >}}
If you are using a Cloud/VPS, you dont need to PortForward and can get [HTTPs with NGINX](https://jalcocert.github.io/JAlcocerT/get-started-with-flask/#deploying-a-flask-app-like-a-pro)
{{< /callout >}}

### Creating Containers

{{< callout type="info" >}}
You can **create Containers Automatically** thanks to [CI/CD Tools, like Github Actions](https://jalcocert.github.io/JAlcocerT/github-actions-use-cases/)
{{< /callout >}}

Just **recently**, we can use not only x86 VM with github to build our containers, but **also native ARM** (we can skip emulating it with QEMU).

if you want to create containers on your own hardware (but automatically), you can use:

1. Github/Gitlab Runners
2. Gitea Act Runner
3. Jenkins CI/CD
4. Argo CI/CD

{{< details title="Is my home IP safe with Cloudflare? 📌" closed="true" >}}

**Argo CD** is a declarative, **GitOps continuous delivery tool** specifically designed for **Kubernetes**.

It operates based on the principle that your Git repository serves as the single source of truth for your desired application state. 

How Argo CD works?

1. **Define Desired State:** You define your desired application state (e.g., deployments, services, configurations) in your Git repository using Kubernetes manifests.
2. **Argo CD Monitors:** Argo CD continuously monitors your Git repository for changes.
3. **Automatic Synchronization:** When changes are detected, Argo CD automatically synchronizes your Kubernetes cluster to match the desired state defined in Git.
4. **Continuous Reconciliation:** Argo CD constantly compares the actual state of your cluster with the desired state in Git. If discrepancies are found, it takes corrective actions to bring the cluster back in sync.

**Comparison with Jenkins and GitHub Actions:**

| Feature | Argo CD | Jenkins | GitHub Actions |
|---|---|---|---|
| **Focus** | Kubernetes-native GitOps CD | General-purpose CI/CD | CI/CD specifically for GitHub |
| **Deployment Model** | Pull-based (Git as source of truth) | Push-based (CI/CD system triggers deployments) | Push-based |
| **Strengths** | Excellent for Kubernetes deployments, strong GitOps implementation, declarative approach | Highly flexible and customizable, vast plugin ecosystem | Tight integration with GitHub, user-friendly interface |
| **Weaknesses** | Primarily focused on Kubernetes, might have a steeper learning curve for non-Kubernetes users | Can become complex for intricate pipelines, potential for configuration drift | Limited to GitHub repositories |

**In essence:**

* **Argo CD** excels in Kubernetes environments, emphasizing GitOps principles for streamlined and reliable deployments.The bestThe best choice depends on your specific requirements, team expertise, and the complexity of your CI/CD pipelines.
 choice depends on your specific requirements, team expertise, and the complexity of your CI/CD pipelines.

* **Jenkins** is a versatile platform suitable for various CI/CD needs, offering extensive customization options.
* **GitHub Actions** provides a user-friendly, integrated solution for CI/CD workflows within the GitHub ecosystem.



{{< /details >}}


### Using Containers


{{< callout type="info" >}}
Make sure to understand [docker volumes vs bind mounts](https://dev.to/aijeyomah/docker-volumes-vs-bind-mounts-choosing-the-right-storage-for-your-containers-3pb8)!
{{< /callout >}}




## AI Apps with Containers and Cloudflare Tunnels







---

## FAQ

**Cloudflare alternatives?**

https://github.com/rapiz1/rathole

> A lightweight and high-performance reverse proxy for NAT traversal, written in Rust. An alternative to frp and ngrok.

* https://noted.lol/cgnat-and-rathole/

### SelfHosting Best Practices

* https://www.reddit.com/r/selfhosted/comments/1beoi4l/best_practices_for_selfhosted_services/
* https://www.reddit.com/r/homelab/wiki/index/

### What about NIX?

Recently I heard about Flox and NIX...