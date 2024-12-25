---
title: "How to use LangChain to Chat with Sensor Data"
date: 2024-12-22T21:20:21+01:00
#Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'Using LangChain with OpenAI API to get information about Temperature and Humidity of a DHT22 sensor'
summary: 'Using LangChain with OpenAI API to get information about Temperature and Humidity of a DHT22 sensor'
url: 'langchain-chat-with-sensor-data'
---



It all started with the RPi projects I published here about a [Pi working together with a DHT22 sensor.](https://jalcocert.github.io/RPi/posts/rpi-iot-dht11-influxdb/).

Then, I learnt how to use [LangChain to chat with a DB](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/#chat-with-a-db-with-langchain).

The next step is pretty much clear.

To join both worlds.

And be able to **chat with a DB where the DHT22 sensor data (temp and humidity) is being stored**.

## Chat with DHT22 Sensor

**Pre-Requisites**

1. Get the DB Ready - We will do it with a [MariaDB SQL Container](https://github.com/JAlcocerT/Docker/blob/main/Dev/DBs/MariaDB_docker-compose.yml), but you can use a [MYSQL container](https://github.com/JAlcocerT/Docker/blob/main/Dev/DBs/MySQL_docker-compose.yml) or with [MYSQL baremetal as in the initial example post](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/#chat-with-a-db-with-langchain)

```yml
version: '3'

services:
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
```

```sh
#docker-compose up -d

#docker exec -it mariadb-db bash
#mysql -u root -p

# CREATE DATABASE chinook;
# USE chinook;
# SOURCE /path/to/chinook.sql; -- Update this path to your SQL file
# SOURCE /path/to/Chinook_MySql.sql; -- Update this path to your SQL file if needed

#SHOW TABLES;
```

### Hardware Setup

### Software Setup


---

## FAQ