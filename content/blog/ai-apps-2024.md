---
title: "SelfHosting Python AI Apps - My 2024 Favs"
date: 2024-12-16T23:20:21+01:00
#Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'How to get your custom MultiChat, Youtube Summarizer and more ready for SelfHosting with Caddy. Bonus Traefik and NGINX Proxies.'
summary: 'A recap on Python AI Apps that I have been working on during 2024'
url: 'selfhosting-python-ai-apps-caddy'
---


The goal of **this post** is:

1. To review some of the [AI projects](#ai-apps) that are helpful on my workflow
2. To learn how to use [Caddy](#how-to-setup-caddy) as [NGINX](#how-to-install-nginx)/[Traefik](#how-to-install-traefik) alternative to get HTTPs certificates

https://doc.traefik.io/traefik/plugins/
https://plugins.traefik.io/plugins

<!-- https://www.youtube.com/watch?v=vVKMey6SfSw -->

{{< youtube "vVKMey6SfSw" >}}

{{< details title="What is Traefik? 📌" closed="true" >}}

**Traefik is an open-source reverse proxy** and load balancer that's designed to be easy to use, flexible, and scalable. It's written in Go, which makes it lightweight and efficient. Traefik is ideal for modern web applications, microservices, and containerized environments.

**Benefits of Traefik**

Ease of use, high performance, and flexibility. You'll learn how Traefik can help you simplify your infrastructure, improve your application's scalability, and reduce errors.

Traefik offers a range of features that make it an attractive choice for developers. Some of its key features include:

Automatic service discovery
Load balancing and routing
SSL termination and encryption
Support for multiple protocols (HTTP, WebSocket, TCP)
Integration with popular technologies like Docker, Kubernetes, and Mesos
Conclusion
Traefik is a powerful and flexible reverse proxy that's worth considering for your next project. With its ease of use, high performance, and scalability, Traefik can help you improve your application's reliability and performance.

{{< /details >}}




<!-- https://www.youtube.com/watch?v=XH9XgiVM_z4 -->
{{< youtube "XH9XgiVM_z4" >}}

{{< details title="DNS challenge | PorkBun 📌" closed="true" >}}

As seen during the [Flask Setup post on a VPS](https://jalcocert.github.io/JAlcocerT/get-started-with-flask/).

{{< /details >}}

## AI Apps

1. YT Summarizer
* https://github.com/JAlcocerT/phidata
* https://jalcocert.github.io/JAlcocerT/summarize-yt-videos/
* Get your Groq API for the app <https://console.groq.com/keys>

2. Streamlit MultiChat
* https://github.com/JAlcocerT/Streamlit-MultiChat
* https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt
* Get (at least) OpenAI API for this app - <https://platform.openai.com/api-keys>

![Streamlit MultiChat](https://github.com/JAlcocerT/Streamlit-MultiChat/raw/main/streamlit-multichat.png)

{{< callout type="info" >}}
People out there is doing way cooler projects, like [LibreChat](https://fossengineer.com/free-open-source-llm-tools/)
{{< /callout >}}

And you will just need to:

1. Get docker/podman installed
2. Get the API's
3. [Optional] Install Portainer

```mermaid
graph LR
    A[Get docker/podman installed]-->B{Get the APIs};
    B-->C[Use the APIs];
    B-->D[Optional: Install Portainer];
```

This is the [configuration file](https://github.com/JAlcocerT/Docker/blob/main/AI_Gen/Project_AIs/docker-compose.yml):

```yml
services:

  streamlit-multichat:
    image: ghcr.io/jalcocert/streamlit-multichat:v1.1
    container_name: streamlit_multichat
    volumes:
      - ai_streamlit_multichat:/app
    working_dir: /app
    command: /bin/sh -c "\
      mkdir -p /app/.streamlit && \
      echo 'OPENAI_API_KEY = \"sk-proj-openaiAPIhere\"' > /app/.streamlit/secrets.toml && \
      echo 'GROQ_API_KEY = \"gsk_groqAPIhere\"' >> /app/.streamlit/secrets.toml && \
      echo 'ANTHROPIC_API_KEY = \"sk-ant-yourANTHROPICapihere\"' >> /app/.streamlit/secrets.toml && \
      streamlit run Z_multichat.py"
    ports:
      - "8501:8501"
    restart: always
    environment:
      MODEL_API_KEY: sk-proj-openaiAPIhere #https://platform.openai.com/api-keys
      MODEL: gpt-4o-mini      #gpt-4
      TEMPERATURE: 0 #don't be creative :)
      
  phidata_yt_groq:
    image: ghcr.io/jalcocert/phidata:yt-groq 
    container_name: phidata_yt_groq
    ports:
      - "8502:8501"
    environment:
      - GROQ_API_KEY=your_api_key_here #https://console.groq.com/keys
    command: tail -f /dev/null
    restart: unless-stopped

  streamlit-chat-pdfs:
    image: ghcr.io/jalcocert/ask-multiple-pdfs:v1.0
    container_name: chat_multiple_pdf
    volumes:
      - ai_chat_multiple_pdf:/app
    working_dir: /app  # Set the working directory to /app
    command: /bin/sh -c "export OPENAI_API_KEY='your_api_key_here' && streamlit run appv3_pass.py"
    ports:
      - "8501:8501"
    restart: unless-stopped

volumes:
  ai_streamlit_multichat:
  ai_chat_multiple_pdf:
```

> I have combined those into the AIssistant as different agents/tabs 

## How to Setup Caddy

* https://github.com/serfriz/caddy-custom-builds
* https://github.com/lucaslorentz/caddy-docker-proxy

```sh
mkdir -p containers/caddy && touch containers/caddy/Caddyfile
```


<!-- 
https://www.youtube.com/watch?v=qj45uHP7Jmo -->
{{< youtube "qj45uHP7Jmo" >}}


```yml
#https://gist.github.com/BlueHippoGithub/1a6b6569cea8520ea5b6119e8877c70a

version: '3.3'

networks:
  caddy:

services:

  phidata_service: #https://github.com/JAlcocerT/phidata/blob/main/Z_DeployMe/Docker-Compose.yml
    image: ghcr.io/jalcocert/phidata:yt-groq #phidata:yt_summary_groq
    container_name: phidata_yt_groq
    ports:
      - "8502:8501"    
    environment:
      - GROQ_API_KEY=your_api_key_here # your_api_key_here!
    command: tail -f /dev/null #streamlit run cookbook/llms/groq/video_summary/app.py
    networks:
      - caddy    

  # portainer:
  #   image: portainer/portainer-ce:latest
  #   container_name: portainer
  #   restart: unless-stopped
  #   security_opt:
  #     - no-new-privileges:true
  #   volumes:
  #     - /etc/localtime:/etc/localtime:ro
  #     - /var/run/docker.sock:/var/run/docker.sock:ro
  #     - /home/blue/containers/portainer/portainer-data:/data
  #   networks:
  #     - caddy
  #   ports:
  #     - 9000:9000
      
  caddy:
    image: caddy:latest
    restart: unless-stopped
    container_name: caddy
    ports:
      - 80:80
      - 443:443
    volumes:
      - /home/jalcocert/containers/caddy/Caddyfile:/etc/caddy/Caddyfile
      - /home/jalcocert/containers/caddy/site:/srv
      - /home/jalcocert/containers/caddy/caddy_data:/data
      - /home/jalcocert/containers/caddy/caddy_config:/config
    networks:
      - caddy
volumes:
  caddy_data:
    external: true
  caddy_config:
```

### HTTPS with Caddy

{{< callout type="info" >}}
This is
{{< /callout >}}

### SelfHosting AI Apps with HTTPs


---

## Conclusion


| Feature | Traefik | Nginx | Caddy |
|---|---|---|---|
| **Ease of Use** | High | Medium | High |
| **Performance** | Medium | High | Medium |
| **Flexibility** | High | High | Medium |
| **Dynamic Configuration** | Excellent | Requires more manual configuration | Supports some dynamic configuration |
| **HTTPS Support** | Good | Requires manual configuration | Excellent |
| **Learning Curve** | Medium | High | Low |

* **Choose Traefik if:** You prioritize automatic service discovery and a wide range of plugins.
* **Choose Nginx if:** You need maximum performance and flexibility, even if it means a steeper learning curve.
* **Choose Caddy if:** You value simplicity and ease of use, especially for HTTPS setup.


[![Star History Chart](https://api.star-history.com/svg?repos=lucaslorentz/caddy-docker-proxy,NginxProxyManager/nginx-proxy-manager,traefik/traefik&,type=Date)](https://star-history.com/#lucaslorentz/caddy-docker-proxy&NginxProxyManager/nginx-proxy-manager&traefik/traefik&Date)


* **Caddy Strengths:**
    * **Simplicity:** Known for its user-friendly configuration syntax, making it easier to learn and use compared to Nginx.
    * **Automatic HTTPS:** Supports automatic HTTPS certificate acquisition and management, simplifying security setup.
    * **Plugins:** Offers a growing ecosystem of plugins for various functionalities.
* **Weaknesses:**
    * **Performance:** While generally performant, it may not match Nginx's raw performance in very high-traffic scenarios.
    * **Maturity:** While gaining popularity, it's not as mature or widely used as Nginx.

I have tried Caddy with a OVH VPS Server with 2GB RAM.

Similar to the one in which I tried to deploy Wireguard (~300/1.88GB)

```sh
ssh ubuntu@57.128.public.ip
```





---

## FAQ

### How to Install NGINX

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/firebat-ak2-plus-minipc-review/" title="NGINX Setup" image="/blog_img/mini_pc/firebat.jpg" subtitle="On a Firebat MiniPC" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/" title="Flask and NGINX" image="/blog_img/mini_pc/firebat.jpg" subtitle="Using NGINX with a VPS to deploy FLASK" >}}
{{< /cards >}}

* https://github.com/NginxProxyManager/nginx-proxy-manager
* https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/


* **Strengths:**
    * **High Performance:** Known for its exceptional performance and scalability, making it suitable for high-traffic environments.
    * **Flexibility:** Highly configurable and customizable, allowing for fine-grained control over traffic routing and other aspects.
    * **Mature and Widely Used:** A well-established and widely used reverse proxy with extensive community support and documentation.
* **Weaknesses:**
    * **Steeper Learning Curve:** Configuration can be more complex and require more technical expertise compared to Traefik or Caddy.
    * **Less Automatic:** Requires more manual configuration compared to Traefik's dynamic discovery.


### How to Install Traefik

Not enough with Caddy or Caddy?

Have a look to **Traefik**

We can also get SSL certificates thanks to LetsEncrypt.

And it also provides a UI dashboard.

* https://github.com/traefik/traefik
* https://doc.traefik.io/traefik/user-guides/docker-compose/basic-example/


* **Strengths:**
    * **Dynamic Configuration:** Traefik excels at automatically discovering and configuring services based on service discovery mechanisms like Docker, Kubernetes, and Consul.
    * **Extensive Plugin Ecosystem:** Offers a wide range of plugins for various use cases, including authentication, rate limiting, and middleware.
    * **Ease of Use:** Relatively easy to set up and configure, especially with dynamic configurations.
* **Weaknesses:**
    * **Configuration Complexity:** While dynamic configuration is a strength, it can also lead to complex configurations for more advanced setups.
    * **Performance:** May not be as performant as Nginx for very high-traffic scenarios.


> Container first proxy, configurable via code

<!-- https://www.youtube.com/watch?v=XH9XgiVM_z4 -->
{{< youtube "XH9XgiVM_z4" >}}

{{< details title="More about Caddy Reverse Proxy 📌" closed="true" >}}

This report summarizes a YouTube video by Blue Hippo that demonstrates how to set up a reverse proxy and automatically enable SSL using Caddy and Docker Compose. 

**Key Steps:**

* **Environment Setup:**
    * Create a directory and a Caddyfile for configuration.
    * Use Docker Compose to manage containers, networks, and configurations.
    * Define a Docker network for containers.
* **Caddy Configuration:**
    * Configure the Caddyfile with email, domain, and reverse proxy settings.
    * Enable SSL certificates using Let's Encrypt.
* **Network and DNS:**
    * Open necessary ports (80 and 443) on the network.
    * Configure DNS with a wildcard host or specify each subdomain.

**Benefits:**

* Efficiently manage multiple containers/applications on a single domain.
* Automatically enable SSL certificates for secure connections.
* Flexible DNS configuration options (wildcard or specific subdomains).


{{< /details >}}

1. Docker
2. NGINX to serve a website
3. Traefik providing SSL with your Domain



{{< callout type="info" >}}
To validate that we own the domain, we can do **DNS or TLS Challenge** (this one requires Port FWD)
{{< /callout >}}

For the **DNS Challenge**, we just need the API access.

With that, LetsEncrypt will login to the Domain registrar and creates a temporary record.

Then, it will know that you are the one that really own the domain and therefore you can get certificates for that domain.

**How to get API Token from Cloudflare**

Go to My Profile on the top right -> `API Tokens` -> `Create Token` -> Select the Edit Zone DNS Template

Keep Permissions Zone:DNS And as Zone Resources you can specify the particular domain (optional).

You will get a way to verify it works:

```sh
curl -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
     -H "Authorization: Bearer some-cf-token" \
     -H "Content-Type:application/json"
```

You can use that API into the **Traefik docker-compose below** at `CF_DNS_API_TOKEN`

See that we also have a `traefik.yml` linked in the volumes of this compose.

And the docker network:

```sh
sudo docker network create proxy
```

Acme files can be blank, we will fill `traefik.yml`

```sh
mkdir -p ./docker/traefik && \
touch ./docker/traefik/acme.json && \
touch ./docker/traefik/acme.yml && \
touch ./docker/traefik/traefik.yml
```

```sh
chmod 600 ./docker/traefik/acme.json && \
chmod 600 ./docker/traefik/traefik.yml #or it will be a security risk for other users to see the privatekey
```

With such info:

```yml
#https://github.com/JamesTurland/JimsGarage/blob/main/Traefik/traefik-config/traefik.yml

api:
  dashboard: true
  debug: true
entryPoints:
  http:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: https
          scheme: https
  https:
    address: ":443"
serversTransport:
  insecureSkipVerify: true
providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    exposedByDefault: false
  file:
    filename: /config.yml
certificatesResolvers:
  cloudflare:
    acme:
      email: your@email.com #add your email
      storage: acme.json
      dnsChallenge:
        provider: cloudflare
        #disablePropagationCheck: true # uncomment this if you have issues pulling certificates through cloudflare, By setting this flag to true disables the need to wait for the propagation of the TXT record to all authoritative name servers.
        resolvers:
          - "1.1.1.1:53"
          - "1.0.0.1:53"
```

And last but not least:

```sh
sudo apt install apache2-utils

#generating a hashed password for the user "admin" using the htpasswd utility
echo $(htpasswd -nb "admin" "admin") | sed -e s/\\$/\\$\\$/g #place the full result into the dockercompose for the dash creds
```

Right on this label `traefik.http.middlewares.traefik-auth.basicauth.users`


```yml
#https://github.com/JamesTurland/JimsGarage/blob/main/Traefik/docker-compose.yml

version: '3.5'

services:
  traefik:
    image: traefik:latest
    container_name: traefik
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    networks:
       proxy:
    ports:
      - 80:80
      - 443:443
    environment:
      - CF_API_EMAIL=your@email.com
      - CF_DNS_API_TOKEN=your-api-key
      # - CF_API_KEY=YOU_API_KEY
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /home/ubuntu/docker/traefik/traefik.yml:/traefik.yml:ro
      - /home/ubuntu/docker/traefik/acme.json:/acme.json
      - /home/ubuntu/docker/traefik/config.yml:/config.yml:ro
      - /home/ubuntu/docker/traefik/logs:/var/log/traefik
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.traefik.entrypoints=http"
      - "traefik.http.routers.traefik.rule=Host(`traefik-dashboard.yourdomain.co.uk`)" # if you want a internal domain, get the wildcard cert for it and then choos traefik-dashboard.home.yourdomain.co.uk or what you want
      - "traefik.http.middlewares.traefik-auth.basicauth.users=YOUR_USERNAME_PASSWORD"
      - "traefik.http.middlewares.traefik-https-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https"
      - "traefik.http.routers.traefik.middlewares=traefik-https-redirect"
      - "traefik.http.routers.traefik-secure.entrypoints=https"
      - "traefik.http.routers.traefik-secure.rule=Host(`traefik-dashboard.yourdomain.co.uk`)" # if you want a internal domain, get the wildcard cert for it and then choos traefik-dashboard.home.yourdomain.co.uk or what you want
      - "traefik.http.routers.traefik-secure.middlewares=traefik-auth"
      - "traefik.http.routers.traefik-secure.tls=true"
      - "traefik.http.routers.traefik-secure.tls.certresolver=cloudflare"
      #- "traefik.http.routers.traefik-secure.tls.domains[0].main=home.yourdomain.co.uk" # If you want *.home.yourdomain.co.uk subdomain or something else, you have to get the certifcates at first.
      #- "traefik.http.routers.traefik-secure.tls.domains[0].sans=*.home.yourdomain.co.uk" # get a wildcard certificat for your .home.yourdomain.co.uk
      - "traefik.http.routers.traefik-secure.tls.domains[0].main=yourdomain.co.uk" #if you use the .home.yourdomain.co.uk entry you have to change the [0] into [1]
      - "traefik.http.routers.traefik-secure.tls.domains[0].sans=*.yourdomain.co.uk" # same here, change 0 to 1
      - "traefik.http.routers.traefik-secure.service=api@internal"


networks:
  proxy:
    name: proxy
    external: true
```


* https://www.jimgogarty.com/installing-traefik-on-docker-with-docker-compose/
