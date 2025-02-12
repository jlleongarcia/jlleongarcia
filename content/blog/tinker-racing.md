---
title: "Racing, IoT and Data"
date: 2025-12-10
draft: true
tags: ["Tinkering"]
description: OBD Data
---


{{< details title="OBD...CANBUS...? 📌" closed="true" >}}

**OBD-II (On-Board Diagnostics II):**

OBD-II is a standardized system used in most cars since the mid-1990s.  Its primary purpose is to monitor the vehicle's emissions systems and report any faults.  When a problem is detected (like a misfiring engine or a faulty sensor), a Diagnostic Trouble Code (DTC) is stored, and the "check engine" light (or similar warning light) is illuminated on the dashboard.

OBD-II also provides access to a wealth of real-time data from the car's various sensors and systems, such as engine speed (RPM), vehicle speed, coolant temperature, and more.  This data can be very useful for diagnostics, performance monitoring, and even custom applications.

**CAN Bus (Controller Area Network):**

CAN bus is a robust and efficient communication protocol widely used in vehicles.  It's a serial communication system that allows different electronic control units (ECUs) within the car to communicate with each other.  For example, the engine control unit (ECU), transmission control unit, anti-lock braking system (ABS), and airbag control unit can all communicate over the CAN bus.

Think of CAN bus as the *nervous system* of the car, allowing different components to exchange information.  OBD-II typically uses CAN bus as its physical layer for communication.  So, when you access OBD-II data, you're usually doing so by reading data transmitted over the CAN bus.

{{< /details >}}

{{< details title="ELM327...ESP32? 📌" closed="true" >}}


**The ELM327 Chip:**

The ELM327 is a **popular microcontroller** chip that acts as a bridge between a computer (or other device) and the car's OBD-II port (and thus, the CAN bus).  It's a pre-programmed chip that handles the complex task of translating OBD-II requests into CAN bus messages and vice versa.

Here's why it's so famous:

* **Ease of Use:**  The ELM327 simplifies OBD-II access significantly.  It provides a standardized command set that makes it relatively easy to read data from the car's systems. You don't need to deal with the low-level details of the CAN bus protocol directly.
* **Cost-Effective:** ELM327-based devices are readily available and affordable.  This has led to a proliferation of OBD-II scanners and software.
* **Open Source and Community Support:**  There's a large community of developers who have created open-source tools and libraries for working with the ELM327.  This makes it easier to develop custom applications.

**ELM327 vs. ESP32:**

While both are microcontrollers, they serve different purposes in this context:

* **ELM327:** Specifically designed for OBD-II communication. It has built-in firmware to handle the intricacies of OBD-II protocols and CAN bus.
* **ESP32:** A general-purpose microcontroller with Wi-Fi and Bluetooth capabilities.  It can be used for a wide range of tasks.  To use an ESP32 for OBD-II communication, you would typically need to add a CAN bus transceiver chip (like the MCP2515) and write firmware to implement the OBD-II protocols.

Think of it this way:  The ELM327 is like a specialized translator for OBD-II.  The ESP32 is a more general-purpose computer that *could* be used for OBD-II communication, but it requires more setup and programming.

**In summary:**

* OBD-II is the standardized diagnostic system.
* CAN bus is the communication network used by OBD-II.
* The ELM327 is a chip that makes it easy to interface with OBD-II over CAN bus.
* The ELM327 is purpose-built for OBD-II, while the ESP32 is a general-purpose microcontroller that can be *used* for OBD-II with additional hardware and software.


{{< /details >}}


### Android Apps

1. Torque
2. inCarDoc
3. Car Scanner
4. ScanMaster-ELM
5. https://github.com/fr3ts0n/AndrOBD/

> Android **OBD** diagnostics with any ELM327 adapter

* https://f-droid.org/packages/com.fr3ts0n.ecu.gui.androbd/


### OnBoard Telemetry

OBS to MQTT

A budget lap timer - https://www.youtube.com/watch?v=mdGOuhEq6g8

		ACELEROMETER BASED
https://racechrono.com/article/faq/which-obd-ii-adapter-should-i-buy		

GPS BASED		
ublox m8n		
HGLRC M100 Mini	How to Install and Setup a GPS on your FPV Drone (4K) - YouTube	HGLRC M100 Mini GPS module - a small, cheap and accurate GPS module for all your FPV builds - YouTube
F9P?		
Lora GPS?		

https://www.youtube.com/watch?v=dQeNONerxEU
https://www.youtube.com/watch?v=ibNzG1tMblE

#### TorqueLite

#### PhyPhox


{{< cards cols="1" >}}
  {{< card link="https://www.firecrawl.dev" title="FireCrawl API ↗ " >}}
  {{< card link="https://docs.firecrawl.dev/features/scrape#extracting-without-schema-new" title="API Docs ↗" >}}
{{< /cards >}}


#### GoPros Telemetry Data


{{< cards cols="1" >}}
  {{< card link="https://www.firecrawl.dev" title="FireCrawl API ↗ " >}}
  {{< card link="https://docs.firecrawl.dev/features/scrape#extracting-without-schema-new" title="API Docs ↗" >}}
{{< /cards >}}


### CANBUS with UBUNTU


Yes, you can read and interact with a CAN bus using the Ubuntu command-line interface (CLI).  However, it requires some setup and the use of specialized tools.  Here's a breakdown of how you can do it:

**1. Hardware Requirements:**

* **CAN Interface:** You'll need a CAN interface device. This could be a USB-to-CAN adapter, a PCI card with CAN capabilities, or even a Raspberry Pi with a CAN shield.  There are many options available.  The key is that it needs to be compatible with Linux and have drivers available.
* **Cables:** You'll need the appropriate cables to connect your CAN interface to the CAN bus of your target system (e.g., a car, industrial equipment, etc.).

**2. Software Installation (using `apt`):**

The primary tools you'll need are from the `can-utils` package:

```bash
sudo apt update  # Update package lists
sudo apt install can-utils
```

This package provides command-line utilities for working with CAN buses.

**3. Configuring the CAN Interface:**

* **Bring Up the Interface:**  After connecting your CAN interface, you'll need to bring it up.  The exact command depends on your interface, but it's often something like this (replace `can0` with the actual interface name if different):

   ```bash
   sudo ip link set up can0 type can bitrate 500000  # Set bitrate (adjust as needed)
   ```

   The bitrate (500000 in this example) *must* match the bitrate of the CAN bus you're trying to connect to.  If you don't know the bitrate, you might need to experiment or consult documentation.  You can find out existing interface names and their status by running `ip a`.

* **Verify Interface:** Check if the interface is up:

   ```bash
   ip a  # Look for the can0 (or your interface) and check its status. It should say "UP"
   ```

**4. Reading CAN Data:**

* **`candump`:** This utility displays CAN messages in real-time:

   ```bash
   candump can0  # Listen on can0
   candump can0 -c 10 # Listen on can0 for 10 messages
   candump can0 -t a # Add timestamps to the messages
   ```

   This will show you the CAN ID, data bytes, and other information for each message.

**5. Sending CAN Messages:**

* **`cansend`:** This utility allows you to transmit CAN messages:

   ```bash
   cansend can0 123#0102030405060708  # Send message with ID 123 and data 01 02 03 04 05 06 07 08
   ```

   Replace `123` with the CAN ID and the data bytes with the information you want to send.

**6. Other Useful Tools:**

* **`can-config`:**  Used for configuring CAN interfaces.
* **`cananalyze`:** A simple GUI tool for analyzing CAN traffic (you might need to install it separately: `sudo apt install cananalyzer`).

**Example Workflow:**

1. Connect your CAN interface.
2. `sudo ip link set up can0 type can bitrate 500000` (adjust bitrate).
3. `candump can0` (to see what's on the bus).
4. `cansend can0 123#...` (to send messages).

**Important Considerations:**

* **Bitrate:** Getting the correct bitrate is crucial.  If it's wrong, you won't be able to communicate.
* **CAN ID:**  You need to know the correct CAN IDs to send messages to specific devices.
* **Data Format:**  CAN data is raw bytes.  You'll need to understand the protocol used on the CAN bus to interpret the data correctly.  This often involves looking at the documentation for the device you're communicating with.
* **Safety:** When working with CAN bus, especially in vehicles, be very careful. Sending incorrect messages can have unintended consequences.  Always double-check your commands and make sure you understand what you're doing.

**Python Integration (Optional):**

You can also use Python libraries like `python-can` to interact with CAN buses programmatically.  This gives you more flexibility for processing and analyzing CAN data.  You would still need to install the `can-utils` and configure the interface as described above.

This information should get you started with reading and writing to a CAN bus using the Ubuntu CLI. Remember to consult the documentation for your specific CAN interface and the device you're communicating with.

#### CANBUS and Py

* https://python-can.readthedocs.io/en/stable/

<!-- 
https://www.youtube.com/watch?v=fKz4TSvme6Q
-->

{{< youtube "fKz4TSvme6Q" >}}


---

## Interesting Racing Software

For bookings

https://www.aim-sportline.com/en/sw-fw-download.htm
https://www.aim-sportline.com/docs/racestudio3/html/release/download-release.html
https://www.youtube.com/watch?v=qhyeRS892uM

---

## Outro

* https://upstash.com/

Serverless Data Platform (redis, vector DBs....)


