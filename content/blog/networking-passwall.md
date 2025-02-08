---
title: "How to setup TinyAuth"
date: 2025-02-08
draft: false
tags: ["Dev"]
description: 'TinyAuth Setup, together with Traefik Reverse Proxy.'
url: 'testing-tinyauth'
---

I was having a look to https://selfh.st/newsletter/2025-02-07/ and found out about **TinuAuth**

https://tinyauth.doesmycode.work/docs/guides/github-oauth.html

https://github.com/steveiliop56/tinyauth


### Example TinyAuth

https://tinyauth.doesmycode.work/docs/getting-started.html

```yml

```

This `docker-compose.yml` file defines a setup using Traefik as a reverse proxy, Nginx as a web server, and TinyAuth for authentication.

Let's break down each service:

**1. `traefik` Service:**

*   `container_name: traefik`: Assigns the name "traefik" to the container.
*   `image: traefik:v3.3`: Specifies the Traefik image version to use.
*   `command: --api.insecure=true --providers.docker`: Configures Traefik.
    *   `--api.insecure=true`: Enables the Traefik API in insecure mode.  **This is generally discouraged for production.**  It's useful for development and testing, but in production, you should use a secure API.
    *   `--providers.docker`: Tells Traefik to use Docker as a provider, meaning it will automatically discover and configure routing for other containers based on their labels.
*   `ports: - 80:80`: Maps port 80 on the host to port 80 in the container.  This means that requests to port 80 on your host machine will be forwarded to Traefik.
*   `volumes: - /var/run/docker.sock:/var/run/docker.sock`: Mounts the Docker socket into the Traefik container. This is how Traefik can communicate with the Docker daemon to discover other containers and configure routing.  **This is a security consideration.**  Only grant access to the Docker socket to trusted containers.
*   `labels:`: These labels are used by Traefik to configure routing and middleware.
    *   `traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth`: Defines a middleware named "tinyauth".  This middleware uses forward authentication, meaning it will send authentication requests to the TinyAuth service running at `http://tinyauth:3000/api/auth`.

**2. `nginx` Service:**

*   `container_name: nginx`: Assigns the name "nginx" to the container.
*   `image: nginx:latest`: Specifies the Nginx image to use.
*   `labels:`:  Traefik uses these labels for configuration.
    *   `traefik.enable: true`: Tells Traefik to enable routing for this container.
    *   `traefik.http.routers.nginx.rule: Host(\`nginx.example.com\`)`: Defines a router named "nginx".  This router will handle requests to the host `nginx.example.com`.
    *   `traefik.http.services.nginx.loadbalancer.server.port: 80`: Defines a service that points to port 80 of the Nginx container.
    *   `traefik.http.routers.nginx.middlewares: tinyauth`: Applies the "tinyauth" middleware to the "nginx" router.  This means that requests to `nginx.example.com` will be authenticated by TinyAuth before being forwarded to Nginx.

**3. `tinyauth` Service:**

*   `container_name: tinyauth`: Assigns the name "tinyauth" to the container.
*   `image: ghcr.io/steveiliop56/tinyauth:latest`: Specifies the TinyAuth image to use.
*   `environment:`: Sets environment variables for TinyAuth.
    *   `SECRET=some-random-32-chars-string`: Sets the secret used for JWT signing.  **Change this to a strong, randomly generated secret.**
    *   `APP_URL=https://tinyauth.example.com`: Sets the URL of your application.
    *   `USERS=user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u`: Defines a user "user" with a bcrypt hashed password.  **You should generate a strong password and hash it using bcrypt.**  The `$$` are needed because `$` has a special meaning in YAML.
*   `labels:`:
    *   `traefik.enable: true`: Enables Traefik routing for this container.
    *   `traefik.http.routers.tinyauth.rule: Host(\`tinyauth.example.com\`)`: Defines a router for `tinyauth.example.com`.
    *   `traefik.http.services.tinyauth.loadbalancer.server.port: 3000`: Defines a service pointing to port 3000 of the TinyAuth container.

**How it Works Together:**

1.  A request comes in to `nginx.example.com`.
2.  Traefik, acting as a reverse proxy, receives the request.
3.  Traefik checks the labels and sees that the "tinyauth" middleware is applied to this route.
4.  Traefik forwards the request to the TinyAuth service at `http://tinyauth:3000/api/auth`.
5.  TinyAuth checks the credentials (if any) and authenticates the user.
6.  If authentication is successful, TinyAuth redirects the request back to Traefik.
7.  Traefik then forwards the request to the Nginx container.
8.  Nginx serves the content.

**Key Security Considerations:**

*   **`--api.insecure=true`:**  **Do not use this in production.**  Use a secure API with TLS.
*   **`SECRET`:** Change the `SECRET` environment variable to a strong, randomly generated value.
*   **`USERS`:** Generate a strong password and hash it using bcrypt.  Do not store passwords in plain text.
*   **Docker Socket:** Mounting the Docker socket is a security risk.  Only do this if you trust all the containers that have access to it.  Consider alternative methods if possible.

This setup provides a basic example of how to use Traefik, Nginx, and TinyAuth together.  Remember to address the security concerns before deploying this in a production environment.


## About Traefik

* https://doc.traefik.io/traefik/plugins/
* https://plugins.traefik.io/plugins

<!-- https://www.youtube.com/watch?v=vVKMey6SfSw -->

{{< youtube "vVKMey6SfSw" >}}

**Traefik is an open-source reverse proxy** and load balancer that's designed to be easy to use, flexible, and scalable. 

It's written in Go, which makes it lightweight and efficient. Traefik is ideal for modern web applications, microservices, and containerized environments.


{{< details title="Benefits of Traefik? 📌" closed="true" >}}

Ease of use, high performance, and flexibility. You'll learn how Traefik can help you simplify your infrastructure, improve your application's scalability, and reduce errors.

Traefik offers a range of features that make it an attractive choice for developers.

Some of its key features include:

* Automatic service discovery
* Load balancing and routing
* SSL termination and encryption
* Support for multiple protocols (HTTP, WebSocket, TCP)
* Integration with popular technologies like Docker, Kubernetes, and Mesos

{{< /details >}}

Traefik is a powerful and flexible reverse proxy that's worth considering for your next project. With its ease of use, high performance, and scalability, Traefik can help you improve your application's reliability and performance.


### How to Install Traefik

Not enough with Nginx or Caddy?

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



#### Traefik JimGarage



1. Docker
2. NGINX to serve a website
3. Traefik providing SSL with your Domain

{{< callout type="info" >}}
To validate that we own the domain, we can do **DNS or TLS Challenge** (this one requires Port FWD)
{{< /callout >}}

For the **DNS Challenge**, we just need the **API access**.

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