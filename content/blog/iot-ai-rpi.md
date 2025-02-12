---
title: "[IoT] Meets AI. With a Raspberry Pi"
date: 2025-12-31
draft: true
tags: ["Tinkering"]
summary: 'IoT Meets AI. Using MQTT and AI Together'
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

## Edge AI - AIoT

https://github.com/9tigerio/db2rest

> Instant no code DATA API platform. Connect any database, run anywhere. Power your GENAI application function/tools calls in seconds.

postman

hoppscotch

Hoppscotch is indeed similar to Postman in its core functionality.  Both are tools designed to help developers work with APIs (Application Programming Interfaces).  Think of them as specialized tools for sending and receiving messages to different software services.

Here's a breakdown of what Hoppscotch is and how it compares to Postman:

**What Hoppscotch Does:**

* **API Testing:**  It allows you to send various types of HTTP requests (GET, POST, PUT, DELETE, etc.) to APIs.  You can specify headers, parameters, and request bodies (data).
* **Response Inspection:**  You can view the responses from the API, including status codes, headers, and the response body (often in JSON or XML format). This helps you understand how the API works and debug any issues.
* **Collaboration:** Hoppscotch, like Postman, often offers features to collaborate with other developers, sharing API collections, environments, and tests.
* **Documentation:**  It can be used to generate or interact with API documentation.

**How Hoppscotch is Similar to Postman:**

* **Core Functionality:**  Both tools serve the same primary purpose: simplifying API development and testing.
* **User Interface:**  Both provide a user-friendly interface to construct and send requests, inspect responses, and manage API collections.
* **Collaboration Features:**  Both offer ways to share your work with team members.

**How Hoppscotch is Different from Postman:**

* **Open Source:** Hoppscotch is an open-source project, while Postman has a free version but also offers paid plans for advanced features.  This means Hoppscotch is free to use and modify.
* **Focus on Simplicity:** Hoppscotch often emphasizes a cleaner, more streamlined interface, aiming to be easier to learn and use, particularly for those new to API testing.  Postman, while powerful, can have a steeper learning curve due to its extensive feature set.
* **Real-time Collaboration:** Hoppscotch has a greater focus on real-time collaboration features, making it easier for teams to work together on API development simultaneously.
* **Web-Based vs. Desktop App:** Hoppscotch is primarily a web-based application, accessible directly in your browser.  Postman, while also having a web version, started as a desktop application.

**In essence:**

Hoppscotch is a strong contender and alternative to Postman, especially if you prioritize open-source software, a simpler interface, and real-time collaboration.  Postman remains a very powerful and feature-rich tool, but Hoppscotch provides a compelling option for many developers.  The best choice depends on your specific needs and preferences.


### Running LLMs in SBCs


https://www.youtube.com/watch?v=N0718RfpuWE

https://github.com/tensorchord/Awesome-LLMOps
https://github.com/tensorchord/Awesome-LLMOps?tab=readme-ov-file#llmops


* Open-source tools for prompt testing and experimentation, with support for both LLMs (e.g. OpenAI, LLaMA) and vector databases (e.g. Chroma, Weaviate, LanceDB).

https://github.com/hegelai/prompttools

---

## FAQ

### How to Enhance a Raspberry Pi for AI

* Edge TPU on RPi - Coral Edge TPU (Tensor Processing Unit - an USB acccelerator )

TPU (Tensor Processing Unit):

Focus: TPUs are specifically **designed for running Google's TensorFlow** machine learning framework. They are optimized for high-performance matrix multiplication, a fundamental operation in many deep learning algorithms.
Architecture: TPUs are custom-designed by Google with a focus on maximizing performance for TensorFlow workloads. They prioritize speed and efficiency for specific tasks within the TensorFlow ecosystem.

> You will hear more and more about NPU - Neural Processing Units


While both are designed to **handle AI workloads**, they have distinct differences in their focus, architecture, and availability.

NPUs are designed to mimic the structure and function of the human brain, excelling at tasks that involve large-scale parallel processing.

They are particularly well-suited for **various AI applications**, including:

- 🖼️ Image recognition
- 💬 Natural language processing
- 🗣️ Speech recognition


NPUs typically utilize a manycore architecture with specialized instructions and data formats optimized for AI algorithms. This allows them to handle complex neural networks efficiently.

NPUs are often integrated into mobile processors from companies like Apple, Huawei, and Samsung. They are also available as standalone chips from some manufacturers.

### How to Deploy Node-Red with Docker


---


## Outro

### IoT Projects I Worked on

* https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/
* https://jalcocert.github.io/RPi/posts/rpi-iot-dht11-influxdb/

If you like those, there are [more here](https://jalcocert.github.io/RPi/categories/iot-data-analytics/)

Push to MongoDB. See the data properly.

* https://github.com/anasjaber/mongo-explorer