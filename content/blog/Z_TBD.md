---
title: "Topics to be covered - [Maybe]"
date: 2025-12-25T23:20:21+01:00
draft: true
tags: ["Self-Hosting","Web"]
description: 'A quick guide to Raspberry Pi 4'
summary: 'I have just deployed on Github Pages content regarding Raspberry Pi'
url: 'tbd-topics'
---


## General Web Resources
- [Open Source Alternative - Add Project](https://www.opensourcealternative.to/add-project)
- [Privacy Tools](https://www.privacytools.io/)


## Privacy Tools
- [AdguardHome](https://github.com/AdguardTeam/AdGuardHome#getting-started)
- [Pi-hole](https://github.com/AdguardTeam/AdGuardHome#getting-started)
- [Unbound](https://nlnetlabs.nl/projects/unbound/about/)
- **No-IP**
- [PostHog](https://posthog.com/)

## Internet of Things (IoT)
- **MQTT on Raspberry Pi with Docker**
- **SuperHouse #41: Data logging with MQTT, Node-RED, InfluxDB, and Grafana**
- **Home Assistant (HA) with InfluxDB and Grafana**
  
### Home Assistant Integrations
- [Raspberry Pi Installation](https://www.home-assistant.io/installation/raspberrypi/)
- [Raspberry Pi GPIO](https://www.home-assistant.io/integrations/remote_rpi_gpio)
- [GPIO Zero Remote GPIO Documentation](https://gpiozero.readthedocs.io/en/stable/remote_gpio.html)
- [Blockchain Integration](https://www.home-assistant.io/integrations/blockchain/)
- [Bitcoin Integration](https://www.home-assistant.io/integrations/bitcoin/)
- **AddGuardHome**
- **Jellyfin**
- **ESPHome**
- **MQTT**
- **MySensors**
- **Plex**
- **Raspberry Pi Power Supply Checker**
- **Radarr**
- **Sonarr**
- **Tailscale**
- **Transmission + TG**

## Voice Assistant
- [HeyWillow](https://heywillow.io/#)
- [Willow on GitHub](https://github.com/toverainc/willow)

## Large Language Models (LLMs)
- [StreamingLLM Framework](https://www.reddit.com/r/LocalLLaMA/comments/16xzxwv/streamingllm_a_simple_and_efficient_framework/)
- [Best 13B LLM Models Discussion](https://www.reddit.com/r/LocalLLaMA/comments/16s701v/this_is_one_of_the_best_13b_models_ive_tested_for/)



## FOSS (Free and Open-Source Software)
- [FOSS Gist](https://gist.github.com/rxaviers/7360908)


## Data Visualization with Kibana and Grafana

### Lucene Queries in Kibana & Grafana
- **KQL**: Kibana Query Language for data filtering.
- **Lucene Queries**: Used in Grafana for more complex data analysis and machine learning.

| Feature     | KQL (Kibana) | DSL (Grafana)           |
|-------------|--------------|-------------------------|
| Purpose     | Query language for Kibana | Query language for Elasticsearch |
| Syntax      | Simple text-based | More complex and verbose |
| Use Cases   | Filtering data in Kibana dashboards, visualizations, and Discover | Querying Elasticsearch for data analysis and machine learning |


## Edge Computing
- **Edge Computing**: Info collecting and processing closer to the source (IoT).

---

# Raspberry Pi (Rpi) and Web

## IoT on Raspberry Pi
- **MQTT**
- **GCP IoT Core** vs [ThingsBoard](https://thingsboard.io/)
  - [ThingsBoard on Open Source Alternative](https://www.opensourcealternative.to/project/ThingsBoard)



## Home Assistant Core
- [Open Source Alternative for Home Assistant Core](https://www.opensourcealternative.to/project/Core)



## GitHub Runners on Raspberry Pi
- Self-hosted GitHub runner setup:
  - **Repo Settings** > **Actions** > **Runners** > **New Self-hosted Runner**
  - Choose runner architecture: `x86/arm/arm86`
  - Follow the steps for download, configuration, and use.
- Docker permissions: 
  - `sudo usermod -a -G docker <USER>`
  - Example: `sudo docker run -p 8050:8050 --name trip-planner reisikei/pytripplanner:2`

## Multi-Architecture Docker
- Docker multi-architecture image example: `reisikei/pytripplanner:2-multiarch`
  - Manifest structure:
    ```yaml
    manifests:
      - image: reisikei/pytripplanner:2-amd64
        platform:
          architecture: amd64
          os: linux
      - image: reisikei/pytripplanner:2-arm32
        platform:
          architecture: arm
          os: linux
    ```
- Commands for pushing Docker images:
  - `sudo docker run -v /home/reisipi:/folder mplatform/manifest-tool push from-spec /folder/someimage.yaml`
  - Use credentials stored in variables:
    ```bash
    user="reisikei"
    pass="somepass"
    sudo docker run -v /home/reisipi:/folder mplatform/manifest-tool push from-spec /folder/someimage.yaml --username ${user} --password ${pass}
    ```
  - Query Docker image architecture: 
    - `sudo docker run --rm mplatform/mquery golang:latest`
    - `sudo docker run --rm mplatform/mquery reisikei/pytripplanner:latest`

## Wi-Fi Setup on Raspberry Pi
- Configure network priority in `/etc/wpa_supplicant/wpa_supplicant.conf`
  - [StackExchange Guide](https://raspberrypi.stackexchange.com/questions/58304/how-to-set-wifi-network-priority)
