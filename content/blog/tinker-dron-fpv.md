---
title: "Using DJI Tello Drone with Python"
date: 2025-12-30T23:20:21+01:00
draft: true
tags: ["Tinkering"]
summary: Learning drone programming with Python and a DJI Tello drone.
url: 'fpv-programming'
---

![DJI Tello Dron](/blog_img/hardware/dji-dron.png)

## BetaFlight

Betaflight is **open-source firmware for flight controllers** used in multirotor aircraft (drones), primarily racing drones and freestyle drones. 

{{< details title="What it is betaflight 📌" closed="true" >}}

 Think of it as the operating system for your drone.  It takes the inputs from your radio transmitter (your remote control), interprets them, and then translates those commands into actions for the drone's motors, allowing you to control its flight.

Here's a breakdown of what Betaflight does and why it's popular:

**Key Functions of Betaflight:**

* **Flight Control:**  This is the core function.  Betaflight stabilizes the drone, maintains its orientation, and allows you to precisely maneuver it.  It handles complex calculations to keep the drone flying smoothly and predictably, even when you're performing acrobatic maneuvers.
* **Receiver Input:** Betaflight receives signals from your radio receiver and translates them into commands.  It understands what you want the drone to do based on the stick positions and switch settings on your transmitter.
* **Motor Output:**  Betaflight controls the speed of each individual motor to achieve the desired flight movements.  It constantly adjusts the motor speeds to maintain balance, execute your commands, and compensate for external forces like wind.
* **Sensor Integration:** Betaflight integrates with various sensors on the drone, such as gyroscopes, accelerometers, barometers, and magnetometers.  These sensors provide data about the drone's orientation, movement, and altitude, which Betaflight uses to improve flight performance.
* **Configuration:**  Betaflight is highly configurable.  You can adjust numerous settings to fine-tune the flight characteristics of your drone, customize the way it responds to your inputs, and optimize it for your flying style.
* **Telemetry:** Betaflight can send telemetry data back to your transmitter or a separate display.  This data can include information about the drone's battery voltage, signal strength, altitude, and other parameters.
* **Features:**  Betaflight supports a wide range of features, including flight modes (like angle mode, acro mode, and horizon mode), arming/disarming, failsafe mechanisms, and support for GPS and other advanced features.

**Why Betaflight is Popular:**

* **Open Source:**  Being open source means it's free to use, and a large community of developers constantly improves and updates it.
* **Highly Customizable:**  The extensive configuration options allow pilots to tailor the firmware to their specific needs and preferences.
* **Active Community:**  A large and active community provides support, shares tips and tricks, and develops new features and improvements.
* **Frequent Updates:**  Betaflight is regularly updated with new features, bug fixes, and performance enhancements.
* **Performance:**  Betaflight is known for its excellent flight performance, particularly in acro mode for freestyle flying.




{{< /details >}}

**In simpler terms:** Imagine Betaflight as the brain of your drone. It takes your commands, processes information from the drone's sensors, and tells the motors what to do to make the drone fly the way you want it to.  Its open-source nature and extensive configurability have made it the go-to choice for many drone enthusiasts, especially those who enjoy racing and freestyle flying.


https://www.youtube.com/watch?v=FfrRiPhn-LA&t=343s

{{< youtube "FfrRiPhn-LA" >}}


Yes, there are other open-source flight controller firmware options besides Betaflight, although Betaflight is by far the most popular.  Here are a few notable alternatives:

* **ArduPilot:** This is a very powerful and versatile open-source autopilot software suite. It's often used on larger drones, autonomous vehicles, and even planes and rovers. ArduPilot is known for its advanced features, including GPS navigation, waypoint following, and support for a wide range of hardware.  It's more complex to configure than Betaflight, making it less common for smaller racing or freestyle drones.
* **INAV:**  INAV is a fork of Betaflight that focuses on navigation and autonomous flight.  It's particularly well-suited for long-range flights and missions where GPS functionality is important.  While it can be used for acro, its strength lies in its navigation capabilities.
* **EmuFlight:**  EmuFlight is another fork of Betaflight that aims to improve performance and stability. It's often used by pilots looking for a slightly different feel than Betaflight.
* **Butterflight:** Similar to EmuFlight, Butterflight is a Betaflight fork focused on performance and handling.
* **Quicksilver:**  A newer flight controller firmware written in Rust.  It's designed to be more efficient and safer than some of the older, C-based firmwares. It's gaining some traction but is still under development.

It's worth noting that some of these are forks of Betaflight, meaning they share a common codebase but have diverged in their development and features.  Betaflight's large community and constant development make it a moving target, so some of the other options may have features or performance characteristics that are temporarily better, but Betaflight often catches up.


## Mark5 Dron

**What is a Mark5 Drone?**

A "Mark5" drone isn't a specific type of drone in the same way that, say, a "cinewhoop" is.  Instead, "Mark5" (or sometimes "MK5") usually refers to a specific *frame* design, often for FPV (First Person View) drones.

It's a **popular frame style** known for its durability, performance, and often its aesthetic design.

Here's what you should know about Mark5 frames:

* **Frame Design:**  Mark5 frames typically have a "deadcat" or similar configuration.  This means the front arms are angled slightly backward, moving the props out of the pilot's view in the FPV goggles. This gives a cleaner view.
* **Size:**  Mark5 frames are usually in the 5-inch class (meaning they use 5-inch propellers), which is a very common size for FPV drones.
* **Material:**  They're almost always made of carbon fiber for its strength and light weight.
* **Manufacturer/Designer:**  There isn't one single "Mark5" manufacturer.  The design has become popular, and several companies produce frames based on or inspired by it.  So, you might see frames called "Mark5 style" or similar.
* **Purpose:**  Mark5 frames are versatile and can be used for freestyle flying, racing, or even cinematic FPV.

So, when someone says "Mark5 drone," they are likely referring to an FPV drone built using a frame that follows the Mark5 design principles.  It's not a complete, ready-to-fly drone itself, but rather a frame onto which you would add all the other components (motors, ESCs, flight controller, receiver, camera, etc.).
