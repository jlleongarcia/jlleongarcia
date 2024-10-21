---
title: "Interesting Telecom Concepts"
date: 2023-12-31T23:20:21+01:00
draft: false
tags: ["Self-Hosting","Web"]
description: 'Interesting Telecom stuff I got to know'
summary: ''
url: 'telecom-concepts-101'
---


{{< callout type="info" >}}
Get Ready for Diagrams: mermaid or DrawIO
{{< /callout >}}

## Telecom Concepts

### Linear TV (LTV)
**Linear TV** refers to traditional television broadcasting where content is transmitted according to a scheduled lineup on predetermined channels. Viewers tune in at specific times to watch programs and commercials.

- Operates on fixed channels accessed via antenna or cable/satellite connections.
- Requires a predetermined schedule set by the broadcaster.

#### Alternatives to Linear TV:
1. **Streaming Services**  
   Platforms like Netflix, Hulu, Amazon Prime Video, offering on-demand content.
   
2. **Video-on-Demand (VOD) Services**  
   Platforms like iTunes, Google Play, and Vudu offer users the ability to rent/purchase movies and TV shows.
   
3. **Catch-Up TV**  
   Broadcasters offer previously aired shows for a limited time, e.g., BBC iPlayer, NBC app.
   
4. **Live Streaming Platforms**  
   Twitch and Facebook Live offer live content, including gaming and performances.
   
5. **Over-the-Top (OTT) Services**  
   Sling TV, YouTube TV, and Hulu + Live TV deliver content over the internet without cable or satellite providers.
   
6. **Social Media Platforms**  
   Facebook, Instagram, and Twitter allow video sharing within networks.

### Optical Network Terminal (ONT)

An **ONT (Optical Network Terminal)** is a device used in fiber optic networks. It connects the optical fiber from the service provider to the customer's home equipment, such as a router or set-top box.

### Cable Modem Termination System (CMTS)
A **CMTS (Cable Modem Termination System)** is a core component of cable internet networks, managing communication between cable modems (CM) and the internet.

#### Key Functions of a CMTS:
1. **Cable Modems**  
   Connect customers to the internet via a cable TV network.
   
2. **Downstream Data**  
   Sends internet data (websites, videos, etc.) from the CMTS to cable modems.
   
3. **Upstream Data**  
   Collects data from modems (requests, uploads) and forwards it to the internet.
   
4. **IP Address Assignment**  
   Assigns unique IP addresses to each cable modem on the network.
   
5. **Quality of Service (QoS)**  
   Prioritizes traffic for smooth performance in applications like streaming or VoIP.
   
6. **Network Monitoring**  
   Monitors performance, identifies issues, and ensures optimal network operation.

The CMTS acts as a gateway between the cable network and the internet, enabling high-speed access and maintaining network performance.

**CMTS (Cable Modem Termination System)** is a device located at a cable provider’s headend or hubsite that provides high-speed data services to cable subscribers. It communicates with **Cable Modems (CM)** in homes using Hybrid Fiber-Coaxial (HFC) networks.

- **Functions**:
  1. **Modulation**: Converts digital signals to analog and vice versa.
  2. **Routing**: Manages data flow and session handling between modems and the internet.

- **Context**: Similar to the OLT, but used in cable networks rather than fiber networks.

### ACS (Auto Configuration Server)

**ACS (Auto Configuration Server)** is a crucial component in the management of network devices in telecommunications. It facilitates the **remote configuration and management of customer-premises equipment (CPE)** such as: modems, routers, gateways, and set-top boxes - STBs.


- **Purpose**: ACS is primarily used to automate the initial setup of devices, ongoing management, and firmware updates. It ensures that devices are always running with the latest software and settings, improving security and performance.

- **Based on TR-069 Protocol**: ACS typically operates using the TR-069 protocol, a standard developed by the Broadband Forum. This protocol allows broadband service providers to manage devices remotely over an IP network.

- **Functionality**:
  - **Provisioning**: Automatically configures network devices when they connect to the network for the first time. This simplifies the setup process for new services and equipment.
  - **Monitoring**: Continuously monitors the status and performance of network devices, providing valuable data that can help in optimizing network operations.
  - **Updating**: Manages firmware updates and configuration changes remotely, ensuring that all connected devices are up-to-date with the latest security patches and features.
  - **Diagnostics**: Provides tools for troubleshooting and resolving issues remotely, reducing the need for on-site visits and improving customer satisfaction.

- **Benefits**:
  - **Efficiency**: Automates many routine tasks associated with device management, reducing the workload on technical staff and minimizing human errors.
  - **Scalability**: Enables service providers to manage thousands of devices simultaneously, making it easier to scale operations as the customer base grows.
  - **Customer Experience**: Enhances the customer experience by ensuring that services are delivered with minimal disruptions and at the optimum performance level.

- **Security**: Given the remote nature of access, security is a critical aspect of ACS. Implementations typically include robust authentication and encryption mechanisms to protect against unauthorized access and ensure data privacy.


ACS plays a vital role in modern telecommunications networks by enabling efficient and secure management of customer-premises equipment. It supports the dynamic needs of both service providers and customers, ensuring high levels of service availability and reliability.


### MoCA (Multimedia over Coax Alliance)

**MoCA (Multimedia over Coax Alliance)** refers to a technology standard used in home networking for the distribution of digital video and data **over existing coaxial cables**.

It is particularly useful for traffic transmission within home networks, leveraging the coaxial cables that are already installed in many homes for cable TV. 

Here’s a closer look at MoCA and its application in traffic transmission:

- **Purpose**: MoCA technology is designed to carry high-speed internet data, video, and other digital media content over the coaxial wiring within a home or building, without the need to install new networking infrastructure.

- **High-Speed Data Transmission**:
  - MoCA can deliver up to 2.5 Gbps of bandwidth, making it suitable for high-definition video streaming, online gaming, and other bandwidth-intensive applications.
  - The technology supports a robust and reliable connection that is less prone to interference and signal degradation compared to wireless networks.

- **Coexistence with Other Services**:
  - MoCA technology operates on a different frequency range than cable TV and DOCSIS services (used for cable internet), which allows it to coexist with these services without interference.
  - This makes MoCA an ideal solution for enhancing connectivity in homes where coaxial cables are already used for cable TV or internet services.

- **Network Setup**:
  - Setting up a MoCA network typically involves installing MoCA adapters at various connection points. For example, one adapter would be connected to a router and another to a device requiring internet access, such as a smart TV or gaming console.
  - The adapters communicate over the coaxial cables to create a wired network backbone that can be more reliable and faster than Wi-Fi in some cases.

- **Advantages**:
  - **Reliability**: Provides a stable and reliable network connection that is not as susceptible to the range and obstruction issues commonly associated with Wi-Fi.
  - **Ease of Installation**: Utilizes existing coaxial cable infrastructure, reducing the need for drilling or running new cables.
  - **Low Latency**: Offers low latency connections, which are crucial for applications like online gaming and real-time video conferencing.

- **Applications**:
  - Ideal for homes and small offices where coaxial cables are already installed and where Wi-Fi signals may be weak or unreliable.
  - Used to connect data-intensive devices that require stable, high-speed internet connections.

MoCA technology provides an effective way to enhance home network performance by leveraging existing coaxial cable infrastructure for high-speed data transmission. It offers a practical solution for improving connectivity and network reliability, especially in environments where Wi-Fi may face limitations due to distance, barriers, or interference.

### Optical Network Terminal (ONT)

**ONT (Optical Network Terminal)** is a device used in fiber-optic internet setups like Fiber to the Home (FTTH) or Fiber to the Building (FTTB). It converts the optical signal from the carrier’s network into electronic signals that can be used by home devices (computers, routers, TVs).

- **Function**: Converts light signals into electronic signals.
- **Ports**: Provides Ethernet, telephone, and sometimes video outputs.
- **Placement**: Located at the customer's premises.

### Optical Line Terminal (OLT)

**OLT (Optical Line Terminal)** is the counterpart to the ONT, located at the telecom provider's central office. It communicates with multiple ONTs to deliver internet services in a **Passive Optical Network (PON)**, sending signals over fiber without requiring powered equipment between the OLT and ONTs.

- **Function**: Manages communication, bandwidth allocation, and error monitoring for ONTs.
- **Placement**: Located at the provider's end.


### DOCSIS vs Fiber

**DOCSIS (Data Over Cable Service Interface Specification)** and **Fiber** refer to different internet technologies:

#### DOCSIS (Cable)

- Uses a mix of **fiber-optic and coaxial cable** to deliver data.
- Requires a **cable modem** to access the internet.
- **Shared** connection in a neighborhood, which can lead to congestion.
- Versions like **DOCSIS 3.0 and 3.1** offer faster speeds but may still experience slowdowns during peak times.


{{< details title="More about DocSIS 📌" closed="true" >}}

**DOCSIS** is an international telecommunications standard that allows the addition of high-speed data transfer to an existing cable TV (CATV) system. It is widely used by many cable television operators to provide internet access (over their existing hybrid fiber-coaxial infrastructure) in addition to television services. Here are key aspects of DOCSIS:

- **Purpose**: DOCSIS technology enables cable operators to efficiently utilize their existing coaxial cable infrastructure to deliver high-speed broadband internet access, along with voice and video services.

- **Versions of DOCSIS**:
  - **DOCSIS 1.x**: Introduced features like BPI (Baseline Privacy Interface) for security and QoS (Quality of Service).
  - **DOCSIS 2.0**: Improved upstream data rates suitable for voice and video applications.
  - **DOCSIS 3.0**: Introduced channel bonding, significantly increasing downstream and upstream data rates by combining multiple channels.
  - **DOCSIS 3.1**: Enhanced capacity and efficiency with OFDM (Orthogonal Frequency-Division Multiplexing) and improved modulation schemes, supporting up to 10 Gbps downstream and 1-2 Gbps upstream.
  - **DOCSIS 4.0**: Currently in development, aiming to further increase efficiency and capacity, potentially supporting up to 10 Gbps symmetric (downstream and upstream) speeds.

- **Components**:
  - **CMTS (Cable Modem Termination System)**: Located at the cable provider’s facility, this equipment routes data between the internet and local cable networks.
  - **Cable Modem**: Installed at the user’s premises, this device modulates and demodulates data signals to interface between the digital data network and the coaxial network used in homes and businesses.

- **Advantages**:
  - **Utilization of Existing Infrastructure**: Uses the existing coaxial cable setups, which allows cable operators to offer broadband without the need for new wiring.
  - **High-Speed Internet Access**: Provides high bandwidth for internet access, which is competitive with fiber-optic networks in many scenarios.
  - **Scalability**: The technology can be scaled by upgrading CMTS and modem equipment to newer DOCSIS standards without overhauling the entire infrastructure.

- **Applications**:
  - Primarily used by cable TV operators to provide high-speed internet access and VoIP services.
  - It also supports functionalities like IPTV and on-demand services, integrating seamlessly with digital TV offerings.


DOCSIS is a cornerstone technology for cable service providers, enabling them to leverage existing coaxial cable infrastructure to deliver high-speed internet and other digital services. As technology evolves with newer versions like DOCSIS 3.1 and 4.0, it continues to enhance the capacity, efficiency, and performance of cable broadband services, making it a competitive option against other types of broadband delivery technologies such as fiber optics.

{{< /details >}}


{{< details title="CCer for Cable Modems 📌" closed="true" >}}

**CCer refers to Correctable Codeword Errors** in the context of cable modems, specifically those using DOCSIS (Data Over Cable Service Interface Specification) standards.

This term is related to the way data is transmitted and maintained for integrity over cable networks. Here’s an overview:

- **Purpose of CCer**: 
  - **Correctable Codeword Errors** indicate instances where data packets transmitted over the cable network have encountered errors due to noise or interference but have been corrected by the modem’s error-correction algorithms. 
  - CCer is a metric used to measure the quality and reliability of a cable network connection. A high number of correctable errors might not immediately affect the user's experience but can be an early indicator of potential issues in the network that could escalate to uncorrectable errors.

- **How it Works**:
  - Cable modems use a type of error correction called **Forward Error Correction (FEC)**. This method adds redundant data to the transmitted information, which helps the receiving device (cable modem) to detect and correct errors that may have occurred during transmission.
  - CCer counts the codewords (blocks of data) that have had errors but were corrected by the FEC. It is different from UCer (Uncorrectable Codeword Errors), which refers to data errors that could not be fixed by FEC.

- **Applicability to Cable Modems**:
  - CCer is specifically relevant to cable modems because of their reliance on coaxial cable networks, which are susceptible to various types of interference and signal degradation.
  - In optical networks, such as those using GPON (Gigabit Passive Optical Network) or XGS-PON technologies, data integrity issues are handled differently, often with different error correction and detection mechanisms due to the nature of optical transmission.

- **Implications**:
  - Regular monitoring of CCer and UCer rates is crucial for maintaining the health of a cable network. A sudden increase in error rates can signal physical issues with the cables, connectors, or interference from external sources.
  - Service providers often analyze these metrics to decide when maintenance or upgrades are necessary to prevent service degradation.

While CCer (Correctable Codeword Errors) is **a critical signal metric for cable modems in DOCSIS-based networks**, indicating the effectiveness of error correction in maintaining data integrity, it is not applicable to optical networks.

Optical networks use different technologies and standards, which include distinct methods for ensuring data integrity and handling errors.

{{< /details >}}


#### Fiber
- Uses **fiber-optic cables** to transmit data as light, offering extremely fast speeds.
- Provides a **dedicated connection**, avoiding congestion.
- **Symmetric speeds** for uploads and downloads (unlike cable).
  
**Key Difference**: DOCSIS uses coaxial cables (shared) and may have network slowdowns, while fiber provides higher performance through dedicated fiber-optic lines.

### XGS-PON vs GPON


Both GPON and XGS-PON are types of **Passive Optical Networks (PON)** used for broadband services, they differ significantly in their performance and application scenarios:

- **Speed**: The most significant difference is in their speed. GPON offers asymmetric speeds of up to 2.5 Gbps downstream and 1.25 Gbps upstream, whereas XGS-PON provides symmetric speeds of up to 10 Gbps both downstream and upstream.

- **Symmetry**: GPON is asymmetric, which was suitable for earlier internet usage patterns where downloading was predominant. XGS-PON, however, offers symmetric speeds, catering to modern internet activities that require substantial upstream bandwidth like video conferencing, online gaming, and uploading large files.

- **Upgrade Path**: XGS-PON is considered an evolution of GPON, designed to meet the increasing demands for higher bandwidth and greater symmetry in network traffic. It uses the same infrastructure as GPON, making it a cost-effective upgrade for service providers to deliver multi-gigabit services.

XGSPOM is an acronym in the field of telecommunications. It stands for:

* X: 10 (Roman numeral X)
* G: Gigabit
* S: Symmetric
* PON: Passive Optical Network

XGS-PON refers to a type of **Passive Optical Network technology** that supports symmetric data rates of up to 10 Gigabits per second (Gbps) both downstream and upstream.

This technology is a part of the broader category of fiber-optic access technologies used to deliver high-speed broadband services.


{{< details title="More about XGSPON 📌" closed="true" >}}

- **XGS-PON (10 Gigabit Symmetric Passive Optical Network)**: A high-speed, high-capacity broadband standard used in telecommunication networks to deliver advanced triple-play services such as voice, video, and data.

- **Speed and Capacity**: Offers symmetric speeds of up to 10 Gbps, both downstream and upstream, supporting bandwidth-intensive applications like ultra-high-definition video streaming, cloud computing, and virtual reality.

- **Technology Upgrade**: An evolutionary step **beyond older GPON technology**, XGS-PON enhances both capacity and efficiency without requiring a complete overhaul of existing fiber infrastructure.

- **Fiber to the Home (FTTH) Deployments**: Deployed in FTTH scenarios where a single fiber from the central office is split to serve multiple homes or businesses, enabling telecom operators to provide ultra-fast internet services directly to consumer premises.

- **Network Simplification and Cost Efficiency**: Provides high bandwidth over a single type of connection, simplifies network architecture, reduces operational costs, supports longer distances between equipment without active components, reduces maintenance, and improves reliability.

- **Future-Proofing Networks**: As data demand grows, XGS-PON is seen as a future-proof technology that can accommodate next-generation network demands without immediate upgrades, providing a pathway for seamless upgrades to higher capacity systems like 25G or 50G PON.

- **Application in Multiple Sectors**: Applicable in residential broadband, business services, mobile backhaul, and smart city applications, providing a versatile solution for various high-speed data requirements.

- **Conclusion**: XGS-PON is a significant advancement in telecom fiber-optic technology, offering high-speed, symmetric bandwidth that supports a wide range of modern applications and services, pivotal for telecom operators to meet current and future data demands efficiently and cost-effectively.

{{< /details >}}


{{< details title="More about GPON - Gigabit Passive Optical Network 📌" closed="true" >}}


- **Definition**: GPON is a widely used broadband access technology based on fiber optics. It primarily delivers internet, voice, and video services through optical fiber cables to residential and commercial premises.

- **Speed and Capacity**: GPON supports higher bandwidth compared to older PON technologies, offering downstream capacities up to 2.5 Gbps and upstream capacities up to 1.25 Gbps.

- **Technology Components**:
  - **Optical Line Terminal (OLT)**: Located at the service provider's central site, this device coordinates the fiber optic traffic from multiple premises.
  - **Optical Network Unit (ONU)**: Installed at the user's premises, this device converts optical signals into electrical signals suitable for use by consumer devices.
  - **Splitter**: This component divides the optical signal sent from the OLT, allowing a single fiber to serve multiple ONUs.

- **Efficiency and Cost-Effectiveness**: By using passive splitters in the fiber distribution network, GPON reduces the amount of fiber and central office equipment required compared to traditional point-to-point architectures.

- **Service Integration**: GPON is capable of delivering high-speed internet, VoIP (Voice over Internet Protocol), and IPTV services over a single optical fiber, providing a triple-play solution that is efficient and scalable.

{{< /details >}}


## Signals for Telecom

* SNR
* rssi

## Other Acronyms

{{< details title="What it is BackHaul 📌" closed="true" >}}

**Backhaul** in the context of telecommunications refers to the intermediate links between the core network, or backbone network, and the small subnetworks at the "edge" of the entire hierarchical network. Here is a concise breakdown of what backhaul involves:

- **Purpose**: Backhaul is used to transport data from cell sites (cell towers) or access nodes to the central network or the internet. It is a crucial component in ensuring that data travels efficiently from local areas to high-capacity network segments capable of handling large volumes of traffic.

- **Types of Backhaul**:
  - **Wired Backhaul**: Often involves fiber optic cables or other high-capacity cabling systems capable of carrying large amounts of data. Copper lines were traditionally used but are increasingly replaced by fiber due to its superior bandwidth and reliability.
  - **Wireless Backhaul**: Utilizes wireless communication systems, such as microwave or satellite links, to transmit data. This is often used in areas where laying cables is impractical or too expensive.

- **Importance in Mobile Networks**: In mobile networks, backhaul connections are what link cell towers with the mobile operator's main network. These connections are vital for transmitting voice, video, and data traffic from users to the internet and other networks.

- **Evolution with Technology**: As mobile data traffic increases exponentially, the capacity and speed of backhaul networks need to be upgraded. Technologies like 5G necessitate even more robust and higher-capacity backhaul to handle the increased data throughput and lower latency requirements.

- **Backhaul in Broadband**: Similarly, in broadband networks (like those using technologies such as DSL, cable, or fiber to the premises), backhaul refers to the segments of the network that connect local access networks to larger, more central networks.

In summary, backhaul is a fundamental part of the telecommunications infrastructure, ensuring that data can be transported efficiently from local networks to the broader internet, supporting everything from mobile phone calls and streaming video to high-speed internet access and cloud applications.

{{< /details >}}


- **OFT (Open Field Test)**: This refers to testing conducted in a wide, open space to evaluate the performance and functionality of devices (commonly wireless communication devices) in an unobstructed environment. It helps in assessing the range, signal strength, and overall behavior of the device in open-air conditions.

- **TFT (Thin Film Transistor)**: This technology pertains to the type of liquid crystal display (LCD) that uses thin-film transistor technology to improve image qualities such as addressability and contrast. TFT is commonly used in a variety of screens including computer monitors, televisions, and mobile phones, providing high-resolution display performance.

- **RDK-B (Reference Design Kit for Broadband)**: RDK-B is an open-source software stack for broadband devices that is designed to standardize certain elements of these devices and accelerate the deployment of new services. It provides a common framework for powering customer-premises equipment (CPE) such as gateways, routers, and modems.

<!-- OFW will have FirmwareVersion / ParentFirmwareVersion == LG-RDK 
mv2 are legacy routers
-->



{{< callout type="info" >}}
While RDK-B is focused on software standardization for broadband devices, OFT (Open Field Test) is a method for testing the performance of these devices in an open environment. 
{{< /callout >}}



---

{{< tabs items="JSON,YAML,TOML" >}}

  {{< tab >}}**JSON**: JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.{{< /tab >}}
  {{< tab >}}**YAML**: YAML is a human-readable data serialization language.{{< /tab >}}
  {{< tab >}}**TOML**: TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics.{{< /tab >}}

{{< /tabs >}}

---

## FAQ
<!-- 
wifi pod/connect box -- plume cloud --- aws s3 bucket --- ODH preprocessing --- country specific data feed
right now is 3hours
phase 1 (28 weeks) --- 90 min
phase 2 = phase 1 + 12 weeks --- 20/40 min
 -->

| GW Type       | GW Model  | Comment                                                                 |
|---------------|-----------|-------------------------------------------------------------------------|
| TG2492LG(-xx) | Arris Mv1 | Arris/CommScope This has an issue and can have a case when              |
| TG3492LG(-xx) | MV2       | This model has a fan and reports its speed                              |
| CH7465LG(-xx) | Compal MV1| Most popular in CH (Jan 2023) [Compal CH7465LG-VM](https://portforward.com/compal/ch7465lg-vm/) |
| F3896LG       | MV2+      | Hub5 in Virgin Media they call it                                       |
| F5685LGB      | MV3 Bosa  |                                                                         |
| F5685LGE      | MV3 Eth   |                                                                         |

{{< callout type="info" >}}
To Analyze such data, [PySpark is highly beneficial](https://jalcocert.github.io/JAlcocerT/guide-python-PySpark/)
{{< /callout >}}

{{< details title="PySpark Examples 📌" closed="true" >}}

```py
#Countdistinct one column when another a certain condition

import pandas as pd
from pyspark.sql.functions import countDistinct

# List of values to filter
filter_values = ["9994", "9994", "9995", "9996", "2005"]

streamparser_kafka \
    .groupBy("modelName") \
    .agg(
        countDistinct(when(col('ErrorReport_code').isin(filter_values), col("viewerID"))).alias("dist_viewerID_witherror"),
        countDistinct("viewerID").alias("dist_viewerID")
    ) \
    .withColumn("kpi_stbmodel", col("dist_viewerID_witherror") / col("dist_viewerID")) \
    .sort(desc("kpi_stbmodel"))\
    .show(30,truncate=False)
```
{{< /details >}}



{{< details title="Sometimes you need Data Engineering Magic 📌" closed="true" >}}
- **Pod as Root Node**: For customers without a Cable Modem (CM) provided by LibG, control over these pods is not possible; only monitoring of pod behavior is feasible.
- **TCID Usage**: Instead of using MAC addresses, an ODH-generated ID (TCID) should be considered as a primary key for these cases.
   - **Data Filtering**: It may be necessary to introduce a filter in our pipelines to identify scenarios where the pods act as root nodes and no CM is present.
   - **Data Collection by Plume**: Pods equipped with **OpenSync software** can send their logs to the Plume cloud for monitoring. This includes pods that do not have a parent CM but are capable of sending data due to the presence of OpenSync software.
{{< /details >}}

{{< details title="Streaming vs Batch - kafka vs HDFS 📌" closed="true" >}}
rdkb  - its streaming so we probably dont have HDFS

{{< /details >}}


{{< details title="It all started testing this Astro Theme 📌" closed="true" >}}

{{< /details >}}


### Why Grafana is Great for IoT Data

<!-- facebook from fbprophet prophet model also (takes seasonality and trend into account) -->


{{< details title="What it is Cardinality and Why it matters 📌" closed="true" >}}

{{< /details >}}

#### Kibana and ES have something to say

### Workflow for Effectiveness

* To Groom
   * Wiki
   * Jira
* To be Picked (For Sprint WK123Y45)
   * Wiki
   * Jira
* Going On - Per Week Stuff happening

{{< details title="Going On Example 📌" closed="true" >}}

<!-- - **To create tickets / to groom**: 
  - [ODH Ticket Template](https://wikiprojects.upc.biz/display/STCONB2B/ODH+Ticket+Template)
    - [Additional Info](https://wikiprojects.upc.biz/pages/viewpage.action?pageId=519038574)
  - **Created**: [Product Deployment - Analysts pipelines](https://wikiprojects.upc.biz/display/STCONB2B/Product+Deployment+-+Analysts+pipelines) -->

- **To create / to groom**: 
  - [ODH Ticket Template](#faq)
    - [Additional Info](#faq)
  - **Created**: [Product Deployment - Analysts pipelines](#faq)
  - **Groomed**

- **Under Development (Data Engineering)**:

- **To be Deployed to PRD (DevOps)**:
  - **Dev**: 
    - Jira-12345 which does abcd
  - **Validations**:
    - [Unclaim pods wikikpiutilization](#faq)
    - [PODs never online](#faq)

- **Peer Review**: if anything interesting

- **My Tickets**:
  - [Template for v1.0](#faq)
  - **Looker**:
    - [Ticket abcd](#faq)
      - [Looker Browse](#faq)
      - [Template for Looker](#faq)
  - **Corrected & Validated** Wiki Jira123456
  - [An Detec Adding 999x 2005 2017](#faq)

- **Planning**:
  - **Product Owner**:
    - Vision and roadmap, represents user needs - to bring the PM vision to life
    - Prioritizes features in the backlog

- **MTG Notes**:
  - **MTG1**:
    - How to have topology above the site? In streamparser the biggest we have is SITE, because tap, groupamp etc is closer to customer

- **Info**: something that can be useful for the future
  - **Duty Engineer (Data Transformation Team)**:
    - [Duty Engineer Info](#faq)
  - **DIAGRAMS**:
    - Mermaid
    - Drawio    

{{< /details >}}

{{< callout type="info" >}}
Managing **Project Expectations** with a [Project Charter](https://github.com/Azure/Azure-TDSP-ProjectTemplate/blob/master/Docs/Project/Charter.md  "Microsoft Project Charter Example {rel='nofollow'}").
{{< /callout >}}

#### More T-Shaped Skills


### Prompts for Telecom Learning

You are an expert telecom and network engineer who can summarize concepts in simple terms in markdown. You will use for readability bullet points, bold and underlines, but never h1 h2 or any header.