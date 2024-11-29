---
title: "[IoT] Setup RPi Pico W and ESP32 "
date: 2024-09-02T23:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: What Ive learnt while using a ESP32 and a Raspberry Pi Pico W [Microcontrollers]
url: 'microcontrollers-setup-101'
---

Last year I bough a couple of **companions for my Raspberry Pi 4 2GB**:

1. [ESP32](#the-esp32)
2. [Pi Pico W](#the-raspberry-pi-pico-w)

And Recently, this new release got my attention:

3. Raspberry Pi Pico 2 -  A brand new model, with both **ARM and RISC-V cores**


{{< cards >}}
  {{< card link="https://www.youtube.com/watch?v=BS9IgyAp3I0" title="How to Connect Parts - Electronics" icon="book-open" >}}
  {{< card link="https://jalcocertech.xyz" title="Collaborations ↗" icon="user" >}}
{{< /cards >}}

Let me show you **how to get started with MicroControllers**

What you need to know about microcontrollers:

* They dont need an OS
* They run in loop whatever logic is loaded
* The are low consumption devices (much more than even SBC's)

They are great companions for SBC's like a RPi:

![SBC Raspberry Pi 4](/blog_img/iot/Rpi4_4gb_size.jpg)


<!-- I know this is supposed to be a RPi centered repo and web, but couldn't resist to add some small project that uses the ESP32. -->


{{< hextra/feature-grid >}}
 
  {{< hextra/feature-card
    title="Raspberry Pi and MLX90614 Temp Sensor"
    subtitle="Raspberry Pi together with Infrared Sensors [Grafanaand InfluxDB]"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
    link="https://jalcocert.github.io/RPi/posts/rpi-iot-MLX90614/"
  >}}

  {{< hextra/feature-card
    title="Simulate IoT Projects"
    subtitle="Tool to simulate these projects in the browser"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,50%,0));"
    link="https://wokwi.com/"
  >}}

    {{< hextra/feature-card
    title="Raspberry Pi and DHT11/22 Sensors"
    subtitle="Using a Raspberry Pi 4 with DHT Temperature Sensors [MongoDB and MetaBase]"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
    link="https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/"
  >}}

{{< /hextra/feature-grid >}}

## The ESP32

Connecting ESP32 to Linux - https://github.com/tio/tio
IDE - Thonny

### Testing ESP32


I have to say thanks to Tomasz and his great content that helped me get started with this: <https://www.youtube.com/watch?v=tc3Qnf79Ny8&t=0s>

* <https://github.com/ttarnowski/get-started-with-esp32/blob/main/src/main.cpp>



To 'upload' the code to the ESP32, please make sure that you **have the proper DATA cable** (*I was expending too many hours because of this*).

{{% details title="ESP32 - Blinking Lights in Cpp 🚀" closed="true" %}}


```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(921600);
  Serial.println("Hello from the setup");
}

void loop() {
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.println("Hello from the loop");
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
}
```

{{< callout type="info" >}}
Find more **C sample Codes for ESP32** MicroController [here](https://github.com/JAlcocerT/RPi/tree/main/Z_MicroControllers/ESP32/esp32-c)
{{< /callout >}}

{{% /details %}}



{{% details title="Connecting ESP32 to WIFI 🚀" closed="true" %}}

* <https://www.youtube.com/watch?v=aAG0bp0Q-y4>
* <https://github.com/ttarnowski/esp32-wifi-connect>
* <https://github.com/ttarnowski/esp32-wifi-connect/blob/nonblocking/src/main.cpp>


```cpp

#define WIFI_SSID "wifi_network_name"
#define WIFI_PASSWORD "wifi_password"

void setup() {
  Serial.begin(921600);
  pinMode(LED_BUILTIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.println("starting");
}

bool isConnected = false;

void loop() {
  if (WiFi.status() == WL_CONNECTED && !isConnected) {
    Serial.println("Connected");
    digitalWrite(LED_BUILTIN, HIGH);
    isConnected = true;
  }

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println(".");
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    delay(1000);
    isConnected = false;
  }
}
```

{{% /details %}}

## The Raspberry Pi Pico W


* Consumption: ~50-150mA and can be powered via a PC usb
    * Compared to the RPi 4b 2gb: 5v3A which idles at 5V0.6A ~2/3w

* Codes - https://github.com/JAlcocerT/RPi/tree/main/Z_MicroControllers/RPiPicoW

Ideas for Readme's - https://github.com/STJRush/handycode/tree/master/Raspi%20Pico

> you can visualize the pinout

<https://picockpit.com/raspberry-pi/everything-about-the-raspberry-pi-pico/>


The chip: RP2040

```sh
lsusb #Bus 003 Device 010: ID XYZ MicroPython Board in FS (File System) mode

#ls /dev/tty*

sudo apt-get install picocom
sudo picocom -b 115200 /dev/ttyACM0

```

The schema: <https://docs.micropython.org/en/latest/rp2/quickref.html>

W version (wifi): <https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html#raspberry-pi-pico-w-and-pico-wh>


### Pico W and MicroPython


Thanks to [core-electronics](https://core-electronics.com.au/guides/raspberry-pi-pico-w-connect-to-the-internet/)

1. Hold the BOOTSEL button on the Pico W
2. Connect the Pico W to your computer via the USB cable
3. Release the BOOTSEL button -> you will see a new device in the PC.

[Download a MicroPython Release](https://github.com/micropython/micropython/releases) and move it to the Pico folder:

* Mip: <https://github.com/micropython/micropython-lib>
    * installing from fork: 

```py    
import mip
mip.install(PACKAGE_NAME, index="https://USERNAME.github.io/micropython-lib/mip/BRANCH_NAME")
```

<https://micropython.org/download/rp2-pico-w/rp2-pico-w-latest.uf2>

unplug usb and plug

To install libraries, i have observed that recently **upip has been depricated in favour of mip**

{{% details title="Raspberry Pi Pico W - IDE Setup" closed="true" %}}

* PicoW + VSCode - <https://www.youtube.com/watch?v=Q1Kfg8k54jM>
* Pico in Arduino IDE
    * Tools -> Board -> Boards Manager -> Install Arduino MBed OS RP2040 Boards - <https://www.youtube.com/watch?v=5YOEauk9bLo>
* Pico with Thony
{{% /details %}}

### Testing the Raspberry Pi Pico W

{{% details title="PicoW - Blinking Led Example with MicroPython 🚀" closed="true" %}}


The led is the pin 25 as per the schema

<https://www.youtube.com/watch?v=_ouzuI_ZPLs>

Run -> Configure Interpreter -> Interpreter -> MicroPython (Raspberry Pi Pico)

View -> files

The Pico will look for a **main.py** to execute in loop
View -> plotter

CTRL+D for soft reboot and load the program


```py
from machine import Pin
from time import sleep

#led = Pin(25, Pin.OUT)
led = Pin("LED", Pin.OUT) #For Pico W: Thanks to Easy Learning Video https://www.youtube.com/watch?v=PvH_yKwtoEA

n=0

while True:
    led.toggle()
    print("13 times {} is {}".format(n,13))
    n = n+1
    sleep(0.5)

```

{{% /details %}}



{{% details title="PicoW - Reading internal temp sensor with MicroPython 🚀" closed="true" %}}

<https://www.youtube.com/watch?v=PYOaO1yW0rY>

<https://pypi.org/project/machine/>

```py
import machine
import utime
sensor_temp = machine.ADC(4)
conversion_factor = 3.3 / (65535) #pico's datasheet
while True:
    reading = sensor_temp.read_u16() * conversion_factor
    temperature = 27 - (reading - 0.706)/0.001721
    print(temperature)
    utime.sleep(2)
```

{{% /details %}}


{{% details title="Connecting the Pico to Wifi 🚀" closed="true" %}}


<https://www.youtube.com/watch?v=GiT3MzRzG48>


```py
# A simple example that:
# - Connects to a WiFi Network defined by "ssid" and "password"
# - Performs a GET request (loads a webpage)
# - Queries the current time from a server

import network   # handles connecting to WiFi
import urequests # handles making and servicing network requests

# Connect to network
wlan = network.WLAN(network.STA_IF)
wlan.active(True)

# Fill in your network name (ssid) and password here:
ssid = 'HUAWEI P30'
password = 'mokradupa68' #Funny, isn't it?
wlan.connect(ssid, password)


# Example 1. Make a GET request for google.com and print HTML
# Print the html content from google.com
print("1. Querying the Web.com:")
r = urequests.get("https://fossengineer.com")
print(r.content)

r = urequests.get("http://date.jsontest.com/")
print(r.json())
print(r.json()['time'])
```
{{% /details %}}



{{< callout type="info" >}}
Name the file different than `main.py` to avoid the automatic execution.
{{< /callout >}}


### Temperature Sensors with Pi Pico

https://www.youtube.com/watch?v=eNF3X3D0cH4

https://github.com/neeraj95575/Temperature-sensor-connect-to-raspberry-pi-pico


---

## MQTT With MicroControllers



{{% details title="Setup Eclipse Mosquitto and NodeRed 🚀" closed="true" %}}

Open a web browser and navigate to `http://raspberry_pi_ip:1880` (replace raspberry_pi_ip with your Raspberry Pi's IP address).

You should see the Node-RED user interface.

```yml
version: '3'
services:
  mosquitto:
    image: eclipse-mosquitto
    container_name: mosquitto
    ports:
      - "1883:1883"
      - "9001:9001"
    restart: always
    volumes:
      - /path/to/mosquitto/config:/mosquitto/config

  nodered:
    image: nodered/node-red
    container_name: nodered
    ports:
      - "1880:1880"
    restart: always
    volumes:
      - /path/to/nodered/data:/data
    environment:
      - TZ=your_time_zone

```
{{% /details %}}


### MQTT with the RPi and ESP32

Let's setup MosquiTTO and make sure that we understand **how Pub/Sub works** with a dummy example:

<https://www.youtube.com/watch?v=ebsXSCKsHeQ&t=302s>
<https://helloworld.co.in/article/mqtt-raspberry-pi-esp32>

```sh
sudo apt install -y mosquitto
sudo apt install -y mosquitto-clients

#sudo apt install python3-pip
sudo pip3 install paho-mqtt

sudo systemctl status mosquitto.service
```

Publish sample data (from the RPi to the Rpi): https://github.com/jiteshsaini/mqtt-demo/blob/main/rpi_mqtt_clients/client_pub.py

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

This will **receive the sample data** when both scripts are running - (in the RPi): <https://github.com/jiteshsaini/mqtt-demo/blob/main/rpi_mqtt_clients/client_sub.py>

```py
import paho.mqtt.client as mqtt
import time

def on_connect(client, userdata, flags, rc):
   global flag_connected
   flag_connected = 1
   client_subscriptions(client)
   print("Connected to MQTT server")

def on_disconnect(client, userdata, rc):
   global flag_connected
   flag_connected = 0
   print("Disconnected from MQTT server")
   
# a callback functions 
def callback_esp32_sensor1(client, userdata, msg):
    print('ESP sensor1 data: ', msg.payload.decode('utf-8'))


def callback_esp32_sensor2(client, userdata, msg):
    print('ESP sensor2 data: ', str(msg.payload.decode('utf-8')))

def callback_rpi_broadcast(client, userdata, msg):
    print('RPi Broadcast message:  ', str(msg.payload.decode('utf-8')))

def client_subscriptions(client):
    client.subscribe("esp32/#")
    client.subscribe("rpi/broadcast")

client = mqtt.Client("rpi_client1") #this should be a unique name
flag_connected = 0

client.on_connect = on_connect
client.on_disconnect = on_disconnect
client.message_callback_add('esp32/sensor1', callback_esp32_sensor1)
client.message_callback_add('esp32/sensor2', callback_esp32_sensor2)
client.message_callback_add('rpi/broadcast', callback_rpi_broadcast)
client.connect('127.0.0.1',1883)
# start a new thread
client.loop_start()
client_subscriptions(client)
print("......client setup complete............")


while True:
    time.sleep(4)
    if (flag_connected != 1):
        print("trying to connect MQTT server..")
```

{{< callout type="info" >}}
Now we are **ready for the cool stuff**
{{< /callout >}}

Now, to publish data from the ESP32: <https://github.com/jiteshsaini/mqtt-demo/blob/main/esp32_clients/esp_mqtt_client1/esp_mqtt_client1.ino>

You will need <https://registry.platformio.org/libraries/knolleary/PubSubClient/installation> in the `platformio.ini` as

![CV with a RPI4](/blog_img/iot/platformio.JPG)


lib_deps = knolleary/PubSubClient@^2.8


{{% details title="PubSub from ESP32 to Raspberry Pi" closed="true" %}}


```cpp
/*********
  Author: Jitesh Saini
  This code is built upon the example code in pubsubclient library 
  Complete project details at https://helloworld.co.in
*********/

#include <WiFi.h>
#include <PubSubClient.h>

// Replace the SSID/Password details as per your wifi router
const char* ssid = "yourSSID";
const char* password = "yourPassword";

// Replace your MQTT Broker IP address here:
const char* mqtt_server = "192.168.1.45";

WiFiClient espClient;
PubSubClient client(espClient);

long lastMsg = 0;

#define ledPin 2

void blink_led(unsigned int times, unsigned int duration){
  for (int i = 0; i < times; i++) {
    digitalWrite(ledPin, HIGH);
    delay(duration);
    digitalWrite(ledPin, LOW); 
    delay(200);
  }
}

void setup_wifi() {
  delay(50);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  int c=0;
  while (WiFi.status() != WL_CONNECTED) {
    blink_led(2,200); //blink LED twice (for 200ms ON time) to indicate that wifi not connected
    delay(1000); //
    Serial.print(".");
    c=c+1;
    if(c>10){
        ESP.restart(); //restart ESP after 10 seconds
    }
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  
}

void connect_mqttServer() {
  // Loop until we're reconnected
  while (!client.connected()) {

        //first check if connected to wifi
        if(WiFi.status() != WL_CONNECTED){
          //if not connected, then first connect to wifi
          setup_wifi();
        }

        //now attemt to connect to MQTT server
        Serial.print("Attempting MQTT connection...");
        // Attempt to connect
        if (client.connect("ESP32_client1")) { // Change the name of client here if multiple ESP32 are connected
          //attempt successful
          Serial.println("connected");
          // Subscribe to topics here
          client.subscribe("rpi/broadcast");
          //client.subscribe("rpi/xyz"); //subscribe more topics here
          
        } 
        else {
          //attempt not successful
          Serial.print("failed, rc=");
          Serial.print(client.state());
          Serial.println(" trying again in 2 seconds");
    
          blink_led(3,200); //blink LED three times (200ms on duration) to show that MQTT server connection attempt failed
          // Wait 2 seconds before retrying
          delay(2000);
        }
  }
  
}

//this function will be executed whenever there is data available on subscribed topics
void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();

  // Check if a message is received on the topic "rpi/broadcast"
  if (String(topic) == "rpi/broadcast") {
      if(messageTemp == "10"){
        Serial.println("Action: blink LED");
        blink_led(1,1250); //blink LED once (for 1250ms ON time)
      }
  }

  //Similarly add more if statements to check for other subscribed topics 
}

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);

  setup_wifi();
  client.setServer(mqtt_server,1883);//1883 is the default port for MQTT server
  client.setCallback(callback);
}

void loop() {
  
  if (!client.connected()) {
    connect_mqttServer();
  }

  client.loop();
  
  long now = millis();
  if (now - lastMsg > 4000) {
    lastMsg = now;

    client.publish("esp32/sensor1", "88"); //topic name (to which this ESP32 publishes its data). 88 is the dummy value.
    
  }
  
}
```

<https://www.youtube.com/watch?v=Q2HL8rwZ20A>


{{% /details %}}


{{< callout type="info" >}}
Another try mqtt ESP32: <https://www.youtube.com/watch?v=x5A5S0hoyJ0&t=211s>
{{< /callout >}}

---

## FAQ

### Interesting IoT Resources

* https://maps.sensor.community/#16/51.1295/16.9902
* https://opensensemap.org/explore/5fe22454c31ca0001caa780f


### ESP32 with AWS

 ESP32 GPIO pins in real-time with AWS API Gateway WebSockets

<https://www.youtube.com/watch?v=z53MkVFOnIo>

- PlatformIO project with ESP32 WebSocket Client (C/C++)
- Serverless Framework project utilizing AWS API Gateway WebSockets, AWS Lambda, and AWS DynamoDB to handle the communication between clients (TypeScript)
- Web Application to control ESP32 from the browser (ReactJS)

### ESP32 as WebServer

* <https://www.youtube.com/watch?v=Ra3iWgOfveQ>

### PicoW Web Server

pico w web server c - https://www.youtube.com/watch?v=C_O0MXGBHsw

### Cool Stuff with Raspberry Pi

{{< details title=" Raspberry Pi together with: Dht11, Python InfluxDB and Docker 📌" closed="true" >}}


If you already have a RPi at home and a DHT11 sensor, you can perfectly get started with this project.

We are going to read **Temperature and Humidity data** from the sensor, save it into an InfluxDB (*say Hi to time-series DBs*) and display the output in Grafana (*Because terminal is great, but we want to make a cool end to end project*).

And docker? yes, let's put everything together and create a reliable Stack that we can share across any other RPi and forget about dependencies. Lets get started.

**We can use Raspberry Pi 32/64 bits for this project.**

## Python

Credits to <https://www.thegeekpub.com/236867/using-the-dht11-temperature-sensor-with-the-raspberry-pi/> for the initial scheleton of the code.

I have adapted it so that instead of printing the values, it will push them to an InfluxDB that we are going to self-host as well.

```py
import Adafruit_DHT
import time
from influxdb import InfluxDBClient

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

# Configure InfluxDB connection
influx_client = InfluxDBClient(host='influxdb', port=8086)

# Try to create the database, or use it if it already exists
database_name = 'sensor_data'
existing_databases = influx_client.get_list_database()

if {'name': database_name} not in existing_databases:
    influx_client.create_database(database_name)
    print(f"Database '{database_name}' created.")

influx_client.switch_database(database_name)

while True:
    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        data = [
            {
                "measurement": "dht_sensor",
                "tags": {},
                "time": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                "fields": {
                    "temperature": temperature,
                    "humidity": humidity
                }
            }
        ]
        influx_client.write_points(data)
        print("Data sent to InfluxDB")
    else:
        print("Sensor failure. Check wiring.")
    time.sleep(3)
```

You can give it a try to the initial version (that just prints) to know that everything works for you, or just go to the next step.

Remember to save that consistently, for example: `your_python_script.py`


## Docker

Im a big fan of Docker and the first thing I thought when this worked was to put it in a container.

For the [Docker image building process](https://fossengineer.com/docker-first-steps-guide-for-data-analytics/#how-to-use-docker-to-containerize-your-application) you will need this dockerfile and of course to [have Docker installed!](https://jalcocert.github.io/RPi/projects/selfhosting_101/)

### The Dockerfile

```dockerfile
# Use an official Python runtime as the base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Install system-level dependencies
RUN apt-get update && \
    apt-get install -y python3-dev python3-pip && \
    python3 -m pip install --upgrade pip setuptools wheel

# Copy the local code to the container
COPY your_python_script.py /app/

# Install additional dependencies
RUN pip install Adafruit_DHT influxdb

# Run the Python script
CMD ["python", "your_python_script.py"]
```

When saved, just run: docker build -t dht_sensor_app_influxdb .

This will create the Docker image that incorporates the Python script above.

### The Stack

Deploy this Portainer Stack or Docker-compose to run the Python container with the script, InfluxDB and Grafana for visualization

```yml
version: '3'
services:
  dht_sensor_app:
    image: dht_sensor_app_influxdb
    container_name: dht_sensor_app
    privileged: true
    depends_on:
      - influxdb

  influxdb:
    image: influxdb #:1.8 for arm32
    container_name: influxdb
    ports:
      - "8086:8086"
    volumes:
      - influxdb_data:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=sensor_data
      - INFLUXDB_ADMIN_USER=admin
      - INFLUXDB_ADMIN_PASSWORD=mysecretpassword

  grafana:
    image: grafana/grafana #:9.5.7 was using this one instead of latest for stability
    container_name: grafana
    ports:
      - "3000:3000"
    depends_on:
      - influxdb
    volumes:
      - grafana_data:/var/lib/grafana  # Add this line to specify the volume

volumes:
  influxdb_data:
  grafana_data:  # Define the volume for Grafana
```


## InfluxDB

<https://hub.docker.com/_/influxdb/tags>

If you go inside the InfluxDB container, you can execute the following to check that everything is working as it should:

influx
show databases
use sensor_data
show measurements

```sql
SELECT * FROM dht_sensor
SELECT * FROM dht_sensor ORDER BY time DESC LIMIT 10
```

### Running InfluxDB *in the Cloud*

And we will expose it with [Cloudflare Tunnels](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/).

```yml
version: '3'
services:

  influxdb:
    image: influxdb 
    container_name: influxdb
    ports:
      - "8086:8086"
    volumes:
      - influxdb_data:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=sensor_data
      - INFLUXDB_ADMIN_USER=admin
      - INFLUXDB_ADMIN_PASSWORD=mysecretpassword

volumes:
  influxdb_data:

networks:
  cloudflare_tunnel:
    external: true
```


I have tagged and uploaded it to my DockerHub so that it works with InfluxDB:

docker tag dht_sensor_appv2 docker.io/fossengineer/iot:dht11_sensor_to_influxdb

docker push docker.io/fossengineer/iot:dht11_sensor_to_influxdb

Check it at <https://hub.docker.com/repository/docker/fossengineer/iot/general>

### Connecting the Python Script to InfluxDB *in the Cloud*


```py

import Adafruit_DHT
import time
from influxdb import InfluxDBClient
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

# Configure InfluxDB connection
logging.debug("Configuring InfluxDB connection...")
influx_client = InfluxDBClient(host='influxdb.fossengineer.com', port=8086, #host='192.168.1.50', port=8086 
    ssl=True,
    verify_ssl=True,
    username='TecoT$eko1',
    password='CWw7%*!5Mgdf^T'
)

logging.info("Connected to InfluxDB")

try:
    # Try to create the database, or use it if it already exists
    database_name = 'sensor_data'
    existing_databases = influx_client.get_list_database()

    if {'name': database_name} not in existing_databases:
        influx_client.create_database(database_name)
        logging.info(f"Database '{database_name}' created.")

    influx_client.switch_database(database_name)

    while True:
        humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
        if humidity is not None and temperature is not None:
            data = [
                {
                    "measurement": "dht_sensor",
                    "tags": {},
                    "time": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                    "fields": {
                        "temperature": temperature,
                        "humidity": humidity
                    }
                }
            ]
            influx_client.write_points(data)
            logging.debug("Data sent to InfluxDB")
        else:
            logging.warning("Sensor failure. Check wiring.")
        time.sleep(3)

except Exception as e:
    logging.error(f"An error occurred: {e}")


```


```py
import Adafruit_DHT
import time
from influxdb import InfluxDBClient

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

# Configure InfluxDB connection
influx_client = InfluxDBClient(host='influxdb.fossengineer.com', port=8086, #host='192.168.1.50', port=8086 
    ssl=True,   # Enable SSL/TLS encryption
    verify_ssl=True,  # Verify the SSL certificate (set to False if not required)
    username='TecoT$eko1',
    password='CWw7%*!5Mgdf^T'
)

print("Connected to InfluxDB")

# Try to create the database, or use it if it already exists
database_name = 'sensor_data'
existing_databases = influx_client.get_list_database()

print("Checking InfluxDB Database list...")

if {'name': database_name} not in existing_databases:
    influx_client.create_database(database_name)
    print(f"Database '{database_name}' created.")

influx_client.switch_database(database_name)

print("Start sending DHT data...")

while True:
    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        data = [
            {
                "measurement": "dht_sensor",
                "tags": {},
                "time": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                "fields": {
                    "temperature": temperature,
                    "humidity": humidity
                }
            }
        ]
        influx_client.write_points(data)
        print("Data sent to InfluxDB")
    else:
        print("Sensor failure. Check wiring.")
    time.sleep(3)

```


### Tweaking Python for better Sec-Ops

This is pretty good, but how about not hard coding passwords in the Python Script?

Lets use environment variables by changing slightly the Python code:

```py
import Adafruit_DHT
import time
from influxdb import InfluxDBClient
import os

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

# Get InfluxDB credentials from environment variables
influx_host = os.getenv("INFLUXDB_HOST")
influx_port = int(os.getenv("INFLUXDB_PORT"))
influx_dbname = os.getenv("INFLUXDB_DBNAME")
influx_user = os.getenv("INFLUXDB_USER")
influx_password = os.getenv("INFLUXDB_PASSWORD")

# Configure InfluxDB connection
influx_client = InfluxDBClient(host=influx_host, port=influx_port,
                               username=influx_user, password=influx_password)

# Try to create the database, or use it if it already exists
existing_databases = influx_client.get_list_database()

if {'name': influx_dbname} not in existing_databases:
    influx_client.create_database(influx_dbname)
    print(f"Database '{influx_dbname}' created.")

influx_client.switch_database(influx_dbname)

while True:
    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        data = [
            {
                "measurement": "dht_sensor",
                "tags": {},
                "time": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                "fields": {
                    "temperature": temperature,
                    "humidity": humidity
                }
            }
        ]
        influx_client.write_points(data)
        print("Data sent to InfluxDB")
    else:
        print("Sensor failure. Check wiring.")
    time.sleep(3)

```

```dockerfile
# Use an official Python runtime as the base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Install system-level dependencies
RUN apt-get update && \
    apt-get install -y python3-dev python3-pip && \
    python3 -m pip install --upgrade pip setuptools wheel

# Copy the local code to the container
COPY your_python_script.py /app/

# Install additional dependencies
RUN pip install Adafruit_DHT influxdb

# Run the Python script
#CMD ["python", "your_python_script.py"]
```

The dockerfile will be the same presented before, just run again the build command: **docker build -t dht11_python_to_influxdb .**

Or alternatively use:

```yml
version: "3"
services:
  python_app:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - INFLUXDB_HOST= influxdb.yourdomain.com #influxdb to use the local one like before 
      - INFLUXDB_PORT=8086
      - INFLUXDB_DBNAME=sensor_data
      - INFLUXDB_USER=admin
      - INFLUXDB_PASSWORD=mysecretpassword
    command: ["python", "your_python_script.py"]
    command: tail -f /dev/null #keep it running

```

```yml
version: "3"
services:

  python_dht:
    container_name: python_dht
    image: dht11_python_to_influxdb  # Use the name of your pre-built Python image
    privileged: true
    environment:
      - INFLUXDB_HOST=influxdb
      - INFLUXDB_PORT=8086
      - INFLUXDB_DBNAME=sensor_data
      - INFLUXDB_USER=admin
      - INFLUXDB_PASSWORD=mysecretpassword
    command: ["python", "your_python_script.py"]

    # depends_on:
    #   - influxdb

  # influxdb: #this is running in other device, so make sure that the container is running before executing the python one
  #   image: influxdb:latest
  #   environment:
  #     - INFLUXDB_DB=sensor_data
  #     - INFLUXDB_ADMIN_USER=admin
  #     - INFLUXDB_ADMIN_PASSWORD=adminpass
  #     - INFLUXDB_USER=user
  #     - INFLUXDB_USER_PASSWORD=userpass

```


## FAQ

### How to add the InfluxDB Source to Grafana?

Make sure to use: http://192.device.local.ip:8086/, for me http://localhost:8086 did not work.

### Why priviledge flag?

The container needs access to the GPIO port, otherwise, you will observe this error in the container:

```py
Traceback (most recent call last):

  File "dht11_python_timescale.py", line 34, in <module>

    humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)

  File "/usr/local/lib/python3.8/site-packages/Adafruit_DHT/common.py", line 81, in read

    return platform.read(sensor, pin)

  File "/usr/local/lib/python3.8/site-packages/Adafruit_DHT/Raspberry_Pi_2.py", line 34, in read

    raise RuntimeError('Error accessing GPIO.')

RuntimeError: Error accessing GPIO.
```

{{< /details >}}

{{< details title="Ansible with a Raspberry Pi 4 📌" closed="true" >}}

So you have a **Raspberry Pi** and want to get started with **IoT Project**.

But let me guess, you dont have time to read all the Docs, you just want to connect the wirings and get the **Data Flowing**.

If that resonates with you, keep reading - I will show you how to **leverage Ansible**.

[Ansible is an automation tool](https://jalcocert.github.io/Linux/docs/linux__cloud.md/ansible/) that Pros are using all around and it can Spin up with one liners your IoT Projects with the RPi.

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/Linux/docs/linux__cloud/ansible/" title="Linux Ansible 101 ↗" icon="book-open" >}}
{{< /cards >}}

> Yep, still, you will have to connect the cables 😝
{: .prompt-info }

## Ansible with Raspberry Pi

1. Get Raspbian Installed
2. Install Ansible - Just like you would [in any other Debian](https://jalcocert.github.io/Linux/docs/linux__cloud.md/ansible/#installing-ansible).

```sh
#sudo apt update
#sudo apt upgrade
sudo apt install ansible

#ansible --version
```

3. Clone this Repo

```sh
git clone https://github.com/JAlcocerT/RPi ./RPi
#cd ./RPi/Z_ansible
```

So this is it from the Setup side. Now choose the IoT Project you want to have running and execute just one more command.

## IoT Projects with Ansible

### Mongo Project

> Im Talking about: [Raspberry Pi - DHT to MongoDB](https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/)
{: .prompt-info }

So you want to have the project that pulls data from DHT11 or DHT22, sends it from Python to Mongo and then Display it in Metabase?

No issues, just execute:

```sh
ansible-playbook ./RPi/Z_ansible/Ansible_py_dht_mongo_arm32.yml -i inventory.ini #execute Meta Project Playbook
#ansible-playbook ./RPi/Z_ansible/Ansible_py_dht_mongo_arm64.yml -i inventory.ini #execute Meta Project Playbook


#docker-compose -f ./RPi/Z_IoT/DHT-to-MongoDB/Ansible_py_dht_mongo_arm64.yml up -d # Basically it spins up Docker and This Stack
```

You can always get inside the created containers with:

```sh
docker exec -it mongodb sh
docker exec -it dht_sensor_mongo sh
```


> Working for me on [RaspiOS Bullseye](https://downloads.raspberrypi.com/raspios_armhf/images/raspios_armhf-2023-05-03/), **not in Bookworm** due to Adafruit not detecting the platform properly.
{: .prompt-info }


### Influx Project

```sh
ansible-playbook ./RPi/Z_ansible/Ansible_py_dht_influx_grafana.yml -i inventory.ini #execute Influx Project Playbook
```

> This is the one: [Raspberry Pi - DHT to InfluxDB](https://jalcocert.github.io/RPi/posts/rpi-iot-dht11-influxdb/)
{: .prompt-info }

---

## FAQ

### Containers? What's that?

Container are a way to encapsule all Software Project dependencies.

For example to encapsule: MongoDB, Influx or the Python Script with all the libraries installed at a specified version.

To run containers, Ansible is actually using [Docker](https://jalcocert.github.io/RPi/posts/selfhosting-with-docker/).

You can check the installed versions with:

```sh
docker --version
docker-compose --version
```

### Why Ansible for SelfHosting?

Because it as a powerful Automation Tool that the Pros are using to do crazy stuff with the cloud.

Why shouldnt we do it with our Pi's?

### Why Docker for SelfHosting?

<https://jalcocert.github.io/RPi/posts/selfhosting-with-docker/>

You can also try [containers with Podman](https://fossengineer.com/docker-alternatives-for-data-analytics/)

{{< /details >}}