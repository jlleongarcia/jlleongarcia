---
title: "BI Tools for the AI era"
date: 2025-01-07T00:20:21+01:00
#Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'Setting up Data Analytics Visualization (BI) tools with docker'
summary: 'Setting up Data Analytics Visualization tools.'
url: 'setup-bi-tools-docker'
---



## Business Intelligence and IoT (BIA & IoT)
- [Superset](https://superset.apache.org/)
  - [Superset UI](https://apache-superset.github.io/superset-ui/?path=/story/legacy-chart-plugins-legacy-plugin-chart-map-box--basic)
  - [Superset GitHub](https://github.com/apache/superset)
- [Metabase](https://www.metabase.com/)
  - [Metabase Docker Hub](https://hub.docker.com/r/metabase/metabase)
  - [Static Embedding in Metabase](https://www.metabase.com/embedding-demo)
- [Redash](https://redash.io/)

How about real time data analytics?

Real-Time Analytics with ClickHouse
- [ClickHouse Use Cases](https://clickhouse.com/use-cases/real-time-analytics)
- **Superset**: An open-source data exploration and visualization platform that supports ClickHouse as a data source.
- **Metabase**: An open-source business intelligence tool with ClickHouse integration.
- **Tableau, Looker, Power BI**: Commercial BI tools that may have connectors or integrations with ClickHouse.

### Metabase

* https://github.com/JAlcocerT/Docker/tree/main/IoT/Metabase


{{< callout type="info" >}}
IoT Project with [Metabase+MongoDB+DHT Sensor](https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/)
{{< /callout >}}

#### Metabase with MariaDB

https://www.metabase.com/data_sources/mariadb
https://www.metabase.com/docs/latest/databases/connections/mariadb

* https://hub.docker.com/r/metabase/metabase/
* https://github.com/metabase/metabase

```yml
services:
  metabase:
    image: metabase/metabase
    container_name: metabase
    ports:
      - "3000:3000"
    volumes:
      - metabase_data:/metabase-data
    restart: always
    depends_on:
      - mariadb
    environment:
      MB_DB_TYPE: mysql
      MB_DB_DBNAME: chinook
      MB_DB_USER: myuser
      MB_DB_PASS: mypassword
      MB_DB_HOST: mariadb-db

  mariadb:
    image: mariadb:10.5
    container_name: mariadb-db
    environment:
      - MYSQL_ROOT_PASSWORD=rootpassword
      - MYSQL_DATABASE=chinook
      - MYSQL_USER=myuser
      - MYSQL_PASSWORD=mypassword
    volumes:
      - mariadb_data:/var/lib/mysql
    ports:
      - "3399:3306"
      
volumes:
  metabase_data:
  mariadb_data:
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


### Analytics Tools
- [KNIME](https://www.knime.com/)
- [Superset](https://www.opensourcealternative.to/project/Superset)
- [Metabase](https://www.metabase.com/)
- [Redash](https://github.com/getredash/redash)
- [Chartbrew](https://github.com/chartbrew/chartbrew)
- [Lightdash](https://github.com/lightdash/lightdash)
- [MongoDB tutorial: Building Metabase Dashboards](https://www.youtube.com/watch?v=utMxX014na4)

### Additional Databases and Tools
- **MongoDB**
- **Elasticsearch (ES)**
- **InfluxDB**
- **Graphite**
- **OPENFoam**