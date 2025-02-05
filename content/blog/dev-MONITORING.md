---
title: "Server Monitoring. Beszel and more"
date: 2025-02-05
draft: false
tags: ["Dev"]
description: 'Container Monitoring with Beszel. Compared with Netdata, Grafana...'
summary: 'Monitoring tools recap'
url: 'how-to-setup-beszel-monitoring'
---

Recently I was setting a VPS to [software for weddings](https://jalcocert.github.io/JAlcocerT/software-for-weddings/).

And i found this on reddit - https://www.reddit.com/r/selfhosted/comments/1eb4bi5/i_just_released_beszel_a_server_monitoring_hub/

So I went back to https://console.hetzner.cloud/projects



## Beszel

* https://github.com/henrygd/beszel
    * https://hub.docker.com/r/henrygd/beszel
    * https://beszel.dev/

> MIT | Lightweight server monitoring hub with historical data, docker stats, and alerts.



Following the docs - https://beszel.dev/guide/getting-started

```yml
services:
  beszel:
    image: henrygd/beszel:latest
    container_name: beszel
    restart: unless-stopped
    extra_hosts:
      - host.docker.internal:host-gateway
    ports:
      - 8090:8090
    volumes:
      - ./beszel_data:/beszel_data

  beszel-agent:
    image: henrygd/beszel-agent:latest
    container_name: beszel-agent
    restart: unless-stopped
    network_mode: host
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    environment:
      PORT: 45876
      # Do not remove quotes around the key
      KEY: 'UPDATE WITH YOUR PUBLIC KEY (copy from "Add system" dialog)' #you will take it from the UI when adding a new monitor, copy the compose for the agent, and there it is
```

> Then, you will create the admin user at first login

![Beszel](/blog_img/Monitoring/beszel.png)


<!-- https://www.youtube.com/watch?v=Bz7gPYBH0AU -->
{{< youtube "Bz7gPYBH0AU" >}}

{{< callout type="info" >}}
Remember to add the Public server IP as host.
{{< /callout >}}

![Beszel](/blog_img/Monitoring/beszel-hetzner.png)

{{< youtube "a-a-Xk1hXBQ" >}}
<!-- 
https://www.youtube.com/watch?v=a-a-Xk1hXBQ -->


## Other Monitoring Solutions

### Tianji


Its not just a web analytics tool!

![Tianji Server Monitoring](/blog_img/Monitoring/tianji-server-monit.png)

https://fossengineer.com/setup-tianji-with-docker/

You just need to setup the given script on your server that pops up when you try to add it.

![Tianji Server Setup](/blog_img/Monitoring/tianji-server-script.png)




### Netdata

https://fossengineer.com/selfhosting-netdata/

### Grafana

https://jalcocert.github.io/RPi/posts/selfh-grafana-monit/
https://jalcocert.github.io/RPi/posts/self-internet-monit/
https://fossengineer.com/selfhosting-internet-speed-tracker-with-docker/
https://fossengineer.com/selfhosting-WatchYourLAN-docker/


<!-- https://www.youtube.com/watch?v=vlifG8dCqU8 -->
{{< youtube "vlifG8dCqU8" >}}
