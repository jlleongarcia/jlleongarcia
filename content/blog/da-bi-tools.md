---
title: "BI Tools for the AI era"
date: 2024-12-26T00:20:21+01:00
#Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'Setting up Data Analytics Visualization tools.'
summary: 'Setting up Data Analytics Visualization tools.'
url: 'setup-bi-tools-docker'
---

### Metabase

* https://github.com/JAlcocerT/Docker/tree/main/IoT/Metabase


{{< callout type="info" >}}
IoT Project with [Metabase+MongoDB+DHT Sensor](https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/)
{{< /callout >}}

#### Metabase with MariaDB

https://www.metabase.com/data_sources/mariadb
https://www.metabase.com/docs/latest/databases/connections/mariadb

```yml
version: '3'
services:
  metabase:
    image: metabase/metabase
    container_name: metabase
    ports:
      - "3000:3000"
    volumes:
      - metabase_data:/metabase-data
    restart: always

  mariadb:
    image: mariadb:10.5
    container_name: mariadb-db
    environment:
      - MYSQL_ROOT_PASSWORD=rootpassword
      - MYSQL_DATABASE=chinook
      - MYSQL_USER=myuser
      - MYSQL_PASSWORD=mypassword
    volumes:
      - ./mariadb-data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  metabase_data:
```

### Superset

https://github.com/JAlcocerT/Docker/tree/main/IoT/Superset

#### Superset with

### Redash

https://github.com/JAlcocerT/Docker/tree/main/IoT/Redash

#### Redash with

```yml

```


---



<!-- https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0 -->

{{< gist JAlcocerT 953cab1052af58f4241f28dbc0a314a0>}}
<!-- {{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - PayoutRatioEvolution.JPG" >}} -->
