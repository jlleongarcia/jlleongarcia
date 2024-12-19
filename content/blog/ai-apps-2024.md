---
title: "SelfHosting Python AI Apps - My 2024 Favs with Caddy"
date: 2024-12-16T23:20:21+01:00
#Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'How to get your custom MultiChat, Youtube Summarizer and more ready for SelfHosting with Caddy'
summary: 'A recap on Python AI Apps that I have been working on during 2024'
url: 'selfhosting-python-ai-apps-caddy'
---


The goal of this post is:

1. To review some of the [AI projects](#ai-apps) that are helpful on my workflow
2. To learn how to use [Caddy](#how-to-setup-caddy) as [NGINX](#how-to-install-nginx)/[Traefik](#how-to-install-traefik) alternative to get HTTPs certificates

## AI Apps

1. YT Summarizer
* https://github.com/JAlcocerT/phidata
* https://jalcocert.github.io/JAlcocerT/summarize-yt-videos/

2. Streamlit MultiChat
* https://github.com/JAlcocerT/Streamlit-MultiChat
* https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt



And you will just need to:

1. Get docker/podman installed
2. Get the API's
3. [Optional] Install Portainer

```mermaid


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
      MODEL_API_KEY: sk-proj-openaiAPIhere
      MODEL: gpt-4o-mini      #gpt-4
      TEMPERATURE: 0 #don't be creative :)
      
  phidata_yt_groq:
    image: ghcr.io/jalcocert/phidata:yt-groq
    container_name: phidata_yt_groq
    ports:
      - "8502:8501"
    environment:
      - GROQ_API_KEY=your_api_key_here
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


---

## Conclusion


[![Star History Chart](https://api.star-history.com/svg?repos=lucaslorentz/caddy-docker-proxy,NginxProxyManager/nginx-proxy-manager,traefik/traefik&,type=Date)](https://star-history.com/#lucaslorentz/caddy-docker-proxy&NginxProxyManager/nginx-proxy-manager&traefik/traefik&Date)

### SelfHosting AI Apps with HTTPs


---

## FAQ

### How to Install NGINX

* https://github.com/NginxProxyManager/nginx-proxy-manager
* https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/

### How to Install Traefik

* https://github.com/traefik/traefik
* https://doc.traefik.io/traefik/user-guides/docker-compose/basic-example/

* https://www.jimgogarty.com/installing-traefik-on-docker-with-docker-compose/