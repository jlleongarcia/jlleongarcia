---
title: "IoT Meets AI. With a Raspberry Pi"
date: 2024-09-30T10:20:21+01:00
draft: true
tags: ["Tinkering"]
summary: 'IoT Meets AI.'
url: 'edge-ai-with-raspberry-pi'
---

Internet of the things.

AI

And now AI on the edge? AI-IOT?

https://jalcocert.github.io/RPi/

<!-- 
Expertise:
    MQTT
    CAN Bus
    Sensors: ESP32…
    https://esp32io.com/tutorials/esp32-gps
    
    
Vscode
    platformIO
    C/C++
    Clang-format

Android App -> Monitoring -->

### IDE for IoT

* Thonny

### IoT with DataBricks

![Karting Adventure](/blog_img/dev/databricks-mongo.JPG)


### Python picoW

```py
import time
import paho.mqtt.client as mqtt


def on_publish(client, userdata, mid):
    print("message published")


client = mqtt.Client("rpi_client2") #this name should be unique
client.on_publish = on_publish
client.connect('127.0.0.1',1883)
# start a new thread
client.loop_start()

k=0
while True:
    k=k+1
    if(k>20):
        k=1 
        
    try:
        msg =str(k)
        pubMsg = client.publish(
            topic='rpi/broadcast',
            payload=msg.encode('utf-8'),
            qos=0,
        )
        pubMsg.wait_for_publish()
        print(pubMsg.is_published())
    
    except Exception as e:
        print(e)
        
    time.sleep(2)

```

### PiAlert

```yml
version: "3"
services:
  pialert:
    container_name: pialert
    image: "jokobsk/pi.alert:latest"      
    network_mode: "host"        
    restart: always
    volumes:
      - ~/Docker/pialert/config:/home/pi/pialert/config
      - ~/Docker/pialert/db/pialert.db:/home/pi/pialert/db/pialert.db
      - ~/Docker/pialert/log/:/home/pi/pialert/log
    environment:
      - TZ=Europe/Berlin
      - PORT=20211
      - HOST_USER_ID=1000
      - HOST_USER_GID=1000
```

---


## Outro

### IoT Projects I Worked on

* https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/
* https://jalcocert.github.io/RPi/posts/rpi-iot-dht11-influxdb/

If you like those, there are [more here](https://jalcocert.github.io/RPi/categories/iot-data-analytics/)

Push to MongoDB. See the data properly.

* https://github.com/anasjaber/mongo-explorer