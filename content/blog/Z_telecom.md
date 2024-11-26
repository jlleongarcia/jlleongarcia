---
title: "Interesting Telecom Concepts"
date: 2023-12-31T23:20:21+01:00
draft: false
tags: ["Self-Hosting","Web"]
description: 'Interesting Telecom stuff I got to know while using Data lakehouse'
summary: ''
url: 'telecom-concepts-101'
---

Building the data lakehouse by Bill Inmon. Helped me a lot. 

https://jalcocert.github.io/RPi/posts/self-internet-monit/

{{< callout type="info" >}}
Measure your Home Internet Speed with: [WYL and OpenSpeedTest/SpeedTest Tracker](https://jalcocert.github.io/RPi/posts/self-internet-monit/)
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
   
6. **Social M. Platforms**  
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

**ONT (Optical Network Terminal)** is a device used in fiber-optic internet setups like Fiber to the Home (FTTH) or Fiber to the Building (FTTB).

It converts the optical signal from the carrier’s network into electronic signals that can be used by home devices (computers, routers, TVs).

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

{{< details title="SNR, RSSi, and T3/T4 Timeouts in Telecom Signals 📌" closed="true" >}}

In telecommunications, various metrics and signals like SNR, RSSI, and T3/T4 timeouts are crucial for assessing the quality and reliability of network connections. Below is an overview of each:

#### SNR (Signal-to-Noise Ratio)
- **Definition**: SNR measures the ratio of signal power to noise power within a communication channel. It is a critical parameter in determining the quality of a transmission channel and its capacity to transmit data effectively without errors.
- **Importance**: A higher SNR indicates a clearer signal with less background noise, leading to higher data throughput and fewer transmission errors. It is particularly important in environments with potential interference, such as wireless communications and broadband over coaxial cables.

#### RSSI (Received Signal Strength Indicator)
- **Definition**: RSSI is a measure of the power level that a receiving device picks up from the wireless signal. It is typically measured in decibels from 0 (zero) to -120dBm (a lower or more negative number means a weaker signal).
- **Usage**: RSSI is used to estimate how well a device can hear a signal from a router or an access point, impacting the quality of the connection. It is crucial for setting up wireless networks to ensure sufficient coverage and performance.

#### T3 and T4 Timeouts
- **T3 Timeout**:
  - **Definition**: A T3 timeout occurs when a cable modem does not receive a response from the CMTS (Cable Modem Termination System) after multiple retries of sending a request. It often indicates a problem in the upstream path in cable networks.
  - **Implications**: Frequent T3 timeouts can lead to degraded service, increased latency, and intermittent connection issues.
- **T4 Timeout**:
  - **Definition**: A T4 timeout is declared when the cable modem has been unable to achieve upstream synchronization with the CMTS for a period extending beyond the maximum allowable time, typically 30 seconds.
  - **Consequences**: This is more severe than a T3 timeout and can result in the modem failing to connect or dropping the connection entirely, often requiring a restart or intervention.

### Practical Applications and Monitoring
- **Network Performance Monitoring**: Service providers continuously monitor these parameters to manage network health. Adjustments are made based on SNR and RSSI readings to optimize performance, while T3/T4 timeouts help identify and troubleshoot connectivity issues.
- **Installation and Maintenance**: Proper setup and regular maintenance of network equipment are crucial to maintaining good SNR and RSSI levels, thereby minimizing T3/T4 timeouts and ensuring reliable service delivery.

Understanding and managing SNR, RSSI, and T3/T4 timeouts are fundamental aspects of maintaining high-quality and reliable telecommunications services. These metrics provide valuable insights into network conditions, helping technicians and engineers optimize infrastructure and address issues proactively.

{{< /details >}}

{{< details title="2.4G vs 5G 📌" closed="true" >}}

In telecommunications, terms like 2.4G, 5G, 5GL, and 5GU refer to different wireless communication standards and frequency bands.

 Each has specific characteristics that make them suitable for various applications:

2.4G (2.4 GHz Wi-Fi) 2.4G refers to the 2.4 GHz frequency band used by Wi-Fi networks (IEEE 802.11 standards). It is one of the most common frequencies for wireless networking worldwide.
- **Characteristics**:
  - **Range**: Generally offers greater coverage area than higher frequencies due to its longer wavelength, which can better penetrate walls and other structures.
  - **Interference**: More prone to interference as many devices (microwaves, Bluetooth devices, and other Wi-Fi networks) operate in this band.
  - **Bandwidth**: Typically provides slower speeds compared to the 5 GHz band due to congestion and limited channel options.

 5G (5 GHz Wi-Fi) 5G in this context refers to the 5 GHz frequency band also used for Wi-Fi networks. It is not to be confused with 5G cellular technology.
- **Characteristics**:
  - **Range**: Shorter range than 2.4 GHz due to higher frequency, which has more difficulty penetrating solid objects.
  - **Interference**: Less congested than the 2.4 GHz band, leading to less interference and typically faster, more reliable connections.
  - **Bandwidth**: Supports higher data rates, ideal for bandwidth-intensive applications like streaming high-definition video.

5GL (5G Low Band) 5GL refers to the low-band spectrum of 5G cellular networks. These frequencies are typically below 1 GHz.
- **Characteristics**:
  - **Coverage**: Excellent wide-area coverage and building penetration due to the long wavelengths of low-band frequencies.
  - **Speed**: Lower data rates compared to mid-band and high-band 5G, but more consistent coverage across vast areas.
  - **Application**: Ideal for providing broad 5G coverage, especially in rural areas where higher frequencies may not reach effectively.

5GU (5G Ultra Wideband, often 5G High Band) 5GU often refers to the ultra-wideband or high-band spectrum used in 5G cellular networks, typically known as mmWave (millimeter wave) frequencies ranging from 24 GHz to 40 GHz and beyond.
- **Characteristics**:
  - **Speed**: Provides extremely high data rates and capacity, suitable for high-demand applications in dense urban environments.
  - **Range**: Very limited coverage and poor building penetration due to the high frequency and short wavelengths.
  - **Application**: Best used in densely populated urban areas or specific venues like stadiums and convention centers where large bandwidth is needed over a small area.

The terms 2.4G and 5G when referring to Wi-Fi indicate different frequency bands, each with its advantages in terms of range, interference, and bandwidth. In the context of cellular technology, 5GL and 5GU distinguish between the low and high ends of the 5G spectrum, affecting coverage, speed, and application suitability.

Understanding these differences is crucial for optimizing wireless network performance and selecting the right technology for specific needs.

{{< /details >}}

## Other Acronyms


{{< details title="VoIP 📌" closed="true" >}}

- **VoIP (Voice over Internet Protocol)**: A technology that allows voice communications and multimedia sessions over Internet Protocol (IP) networks, such as the internet.
  
- **Functionality**:
  - Converts analog voice signals into digital data packets.
  - Data is transmitted over the internet or other packet-switched networks.
  - At the destination, data packets are converted back into voice signals.

- **Advantages**:
  - **Cost-Effective**: Reduces call costs, especially for long-distance and international calls.
  - **Scalability**: Easily scalable to accommodate growing business needs without significant infrastructure changes.
  - **Flexibility**: Allows users to make and receive calls from multiple devices, including smartphones, laptops, and VoIP-specific handsets.
  - **Rich Features**: Supports advanced call features like call forwarding, voicemail to email, and conference calling.

- **Applications**:
  - Used extensively in both personal communications and by businesses for daily operations.
  - Integral to modern unified communications solutions, integrating with other communications technologies like video conferencing and instant messaging.

- **Requirements**:
  - Reliable high-speed internet connection.
  - VoIP-enabled devices or software.
  - Proper configuration and maintenance to ensure quality of service (QoS) and security.


VoIP (Voice over Internet Protocol) typically involves devices or applications specifically designed to handle voice communications over internet protocols, rather than devices primarily intended for other functions like streaming media. Here are some typical devices and setups that are commonly used for VoIP:

### Dedicated VoIP Phones
- **Hardware-based VoIP Phones**: These look similar to traditional telephones but connect to the internet instead of a standard telephone line. They have built-in IP technology to manage the routing of voice data over an internet connection.

### Computers
- **Softphones**: Software applications installed on computers that enable voice calls over the internet using a microphone and speakers or a headset. Examples include Skype, Zoom, or Google Voice.

### Mobile Devices
- **VoIP Apps on Smartphones and Tablets**: Mobile devices can use apps like WhatsApp, Viber, or FaceTime Audio to make voice calls over the internet. These apps use the device’s data connection (Wi-Fi or cellular data) to transmit voice.

### Analog Telephone Adapters (ATA)
- **ATA Devices**: These devices allow traditional analog telephones to be connected to the internet for VoIP services. They convert analog voice signals into digital data that can be transmitted over the internet.

### Specialized VoIP Adapters and Routers
- **Integrated VoIP Routers**: Some routers come with built-in VoIP support, allowing direct connection of traditional phones and routing of VoIP calls alongside normal internet traffic.

### Not Typically VoIP Devices
- **Smart TVs**: While smart TVs are capable of internet connectivity and can support apps for streaming services like Netflix, they are generally not used for VoIP communications. Their primary function is media consumption rather than voice communication.

VoIP technology is versatile and can be implemented across various devices, but it primarily revolves around voice communication capabilities rather than media streaming. Devices used for VoIP need to support audio input and output, have a stable internet connection, and be equipped with the necessary software to manage voice data packets.

{{< /details >}}
<!-- 
Anomaly Detection - Video over IP

- **Workshop - Anomaly Detection - Video over IP**

  - **Current Setup for EOS Streamparser**:
    - Anomaly detection is already in place for Vodafone Ziggo.
    - Monitoring error code 2004.
    - **Grafana Production Dashboard**: NL/EOS-Linear-Site-Anomaly_Detection-NL
    - **Useful Grafana Dashboards**:
      - **NL/VodafoneZiggo_SMC_FIXED**: [EOS Linear Site Anomaly Detection Details NL](https://dashboard.horizon.tv/d/ROz0DyMGz/eos-linear-site-anomaly-detection-details-nl?tab=visualization&orgId=1&from=1665054293989&to=1665140693990&var-site=AL04&var-severity=Critical%20%20%20Major%20%20%20Minor&var-alarm_state=Activate%20%20%20Confirmed%20%20%20Detected) - Focuses on unique EOS set-top boxes with errors.
      - **NL/Apollo-ErrorDescriptions-NL**: [Apollo Error Descriptions NL](https://dashboard.horizon.tv/d/wHgSrQ3Mk/apollo-errordescriptions-nl?orgId=1)

  - **Expansion to Apollo Set-Top Box**:
    - Need to establish another model type and monitor additional error codes.
    - **Error Codes for Apollo**:
      - **2005**: Buffering error due to low bandwidth, applicable only for IP channels.
      - **9994**: Connection problem - modem disconnected from the internet.
      - **9995**: Connection problem - disconnected over WiFi.
      - **9996**: Connection problem - disconnected over Ethernet.
      - Collectively referred to as triple 9 x's (999x errors).
    - Initial implementation with error code 2005, followed by the addition of other codes.

  - **Considerations**:
    - Determine if a separate dashboard is needed.
    - Consider monitoring alarms for specific issues like DS SNR dropping, HFC related issues, or local signal issues.
    - Trace back issues to specific CMTS or modem types.

  - **Impact Assessment**:
    - Monitor error codes 2005, 9994, 9995, 9996.
    - Correlate these errors with modem models (MV1, MV2, M3...).
    - Determine if the issue pertains to Apollo or EOS set-top boxes.
    - Identify CM model/brand and relevant topology (e.g., AD16, AP03...).
    - Utilize ServeAssure for mapping topology and adding CMTS names (Casa, Cisco, etc.).
    - Analyze connection types (Ethernet/WiFi) and their correlation with errors.
    - Identify common patterns such as WiFi connections with specific devices and firmware encountering frequent errors. -->

{{< details title="What's a Set-top box📌" closed="true" >}}

Set-top boxes (STBs) are primarily devices that receive and decode digital television broadcasts from satellite, cable, or broadband sources to display on a television or similar display device. They are not inherently Voice over Internet Protocol (VoIP) devices.

 However, with the advancement in technology and integration of various services, some modern set-top boxes can support VoIP functionality if they are connected to the internet and have the necessary software and hardware capabilities to handle voice communications.

Here's a breakdown of their functionalities:

- **Primary Function of Set-Top Boxes**:
  - Receive, decode, and display digital television signals.
  - Provide access to on-demand content, streaming services, and interactive television applications.

- **VoIP Functionality**:
  - Some advanced set-top boxes can integrate VoIP features, allowing users to make voice calls over the internet.
  - This integration typically requires the set-top box to be connected to the internet and configured with VoIP software.

- **Device Integration**:
  - Integration of multiple services like internet browsing, media streaming, and VoIP on a single device like a set-top box offers a unified home entertainment and communication solution.

In summary, while traditional set-top boxes are not VoIP devices, the convergence of home technology can enable them to support VoIP services alongside their primary functions.

{{< /details >}}

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


- **OTT (Over-The-Top)** refers to content and services provided over the internet that bypass traditional distribution. In the context of telecommunications, OTT services relate to media streaming, communication, and other internet-based services that do not require users to subscribe to traditional cable or satellite pay-TV services. Here’s a detailed look at OTT and its relevance:

{{< details title="More about OTT 📌" closed="true" >}}

- **Over-The-Top**: The term "over-the-top" implies that these services go 'over' a traditional cable or satellite TV system to provide content directly to viewers via the internet.
- **Types of Services**:
  - **Video Streaming**: Services like Netflix, Hulu, Amazon Prime Video, and Disney+ that offer on-demand content.
  - **Audio Streaming**: Platforms such as Spotify, Apple Music, and Pandora.
  - **Communication Services**: Applications like WhatsApp, Skype, and Zoom that provide messaging, voice, and video calling functionalities without the need for traditional telecommunication services.

Relation to Telecom
- **Data Traffic**: OTT services contribute significantly to data traffic on telecom networks. As more users stream high-definition video or engage in video conferencing, the demand for robust and high-speed data services increases.
- **Revenue Models**: While OTT providers primarily generate revenue through subscriptions, advertisements, or pay-per-view models, telecom operators may leverage this demand by offering bundled data packages, high-speed internet plans, or partnering with OTT platforms.
- **Network Infrastructure**: The rising popularity of OTT services pushes telecom companies to invest in upgrading their network infrastructure to handle increased data loads and provide uninterrupted, high-quality service.

Impact and Trends
- **Consumer Behavior**: The convenience and variety of content offered by OTT platforms have led to a shift in consumer behavior, with more users opting for internet-based entertainment solutions over traditional TV.
- **Regulatory Attention**: The growth of OTT services has attracted regulatory scrutiny regarding issues like data privacy, net neutrality, and fair competition practices.
- **Innovation and Competition**: The OTT space is highly competitive and drives continuous innovation in content delivery technologies, such as improved compression algorithms and adaptive streaming techniques.

OTT services in telecommunications represent a significant shift in how content is delivered and consumed. They bypass traditional broadcast methods to provide direct-to-consumer streaming services via the internet. This shift not only affects consumer preferences and behaviors but also influences the strategic operations and infrastructure development of telecom companies. As OTT continues to grow, it remains a critical area for innovation, investment, and regulation in the telecom sector.

{{< /details >}}



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

A Common Data Model (**CDM**) / unified pipeline / wide table can help to correlate issues.
<!-- 
wifi pod/connect box -- plume cloud --- aws s3 bucket --- ODH preprocessing --- country specific data feed
right now is 3hours
phase 1 (28 weeks) --- 90 min
phase 2 = phase 1 + 12 weeks --- 20/40 min
 -->

Typical Gateways (Routers) Models: remember the **differences between DSL<COAX<Fiber**.

| GW Type       | GW Model  | Comment                                                                 |
|---------------|-----------|-------------------------------------------------------------------------|
| TG2492LG(-xx) | Arris Mv1 | Arris/CommScope This has an issue and can have a case when              |
| TG3492LG(-xx) | MV2       | This model has a fan and reports its speed                              |
| CH7465LG(-xx) | Compal MV1| Most popular in CH (Jan 2023) [Compal CH7465LG-VM](https://portforward.com/compal/ch7465lg-vm/) |
| F3896LG       | MV2+      | Hub5 in Virgin Media                                   |
| F5685LGB      | MV3 Bosa  |                                                                         |
| F5685LGE      | MV3 Eth   |                                                                         |

{{< callout type="info" >}}
To Analyze such data, [PySpark is highly beneficial](https://jalcocert.github.io/JAlcocerT/guide-python-PySpark/)
{{< /callout >}}

{{< details title="PySpark Examples 📌" closed="true" >}}

* https://jalcocert.github.io/JAlcocerT/guide-python/
* https://jalcocert.github.io/JAlcocerT/guide-python-PySpark/

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

{{< details title="Streaming vs Batch - Kafka Topics vs HDFS 📌" closed="true" >}}

* RDKb  - its streaming pipeline so we probably dont have HDFS paths

{{< /details >}}


{{< details title="How to read Kafka Topics with JHub 📌" closed="true" >}}

{{< /details >}}


### Why Grafana is Great for IoT Data

<!-- facebook from fbprophet prophet model also (takes seasonality and trend into account) -->


{{< details title="What it is Cardinality and Why it matters 📌" closed="true" >}}

{{< /details >}}

#### Kibana and ES have something to say

You can use DSL queries to explore data within Kibana, which pulls from Elastic Search DB.

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


{{< details title="Meeting Creation - Scheduler Template 📌" closed="true" >}}

- **Meeting Creation**
  - **How/what - Always use them!**
    - The context of this meeting is ....
    - The objectives of this meeting is to ... project planning, solving a problem, setting a goal, making a decision, or mapping out a customer journey...:
      - **Inputs**:
        
      - **Challenges**:
        
      - **Understanding trade-offs**:
        - **Option A**: Using existing unified pipeline
        - **Option B**: Using only streamparser
      - **Decision to be made**: @someone
        - Which of the 2 routes to take?
        - How can it be prioritized?
      - **Estimations**: @someone
        - What are the blockers that we might find?


<!-- 
Scheduling time in the only time slot where all stakeholders have availability for tomorrow.

The objectives of this meeting are to plan and prioritize the workload to deploy the Anomaly Detection Model that has been prepared on the Unified Pipeline:
   • Given the following inputs: 
      ○ The notebooks with the model (it trains itself with the last 7d of HDFS data @Mishra, Ankur
      ○ The high-level diagram
      ○ Comment on the data aggregation column name
   • How can the model be deployed on-prem?
      ○ Is the Docker base image checked ready to accept this model?
      ○ Will its execution affect any other pipelines?
   • Estimations:
      ○ How many story points will this activity take?
      ○ What are any other blockers that we might find that can affect the ETA?

   • Decisions to be made:
      ○ How can the model be evaluated?
         § Agreement on the Grafana (non-ML) and Kibana solution
         § Further iterations when getting from client 'ground truth data' to the model hyperparameters
      ○ Which Priority will get in the development queue?

After model deployment and its validation, DA team will require 1-2 story points to be ready for the demo with the Grafana panels that will read from Graphite the model's output. -->

{{< /details >}}

{{< details title="Meeting Creation - Bug RCA 📌" closed="true" >}}

- **BUG** - [Jira-123](#faq)

  - **Context**:
  
  - **RCA** (Root Cause Analysis):
  
  - **Solution**:
  
  - **Next Steps**:

{{< /details >}}

{{< details title="Meeting Summary - Always! 📌" closed="true" >}}

- **Meeting Details**
  - **Date**: [Insert date]
  - **Time**: [Insert time]
  - **Location/Platform**: [Insert location or virtual platform used]
  - **Attendees**: [List attendees and their roles or departments]

- **Objective**
  - Briefly state the purpose of the meeting. [E.g., To review project progress, discuss challenges, and plan next steps.]

- **Key Discussion Points**
  - **Topic 1**: [Summary of discussion]
    - **Sub-point**: [Details]
  - **Topic 2**: [Summary of discussion]
    - **Sub-point**: [Details]
  - **Topic 3**: [Summary of discussion]
    - **Sub-point**: [Details]

- **Decisions Made**
  - **Decision 1**: [Details of the decision and who is responsible]
  - **Decision 2**: [Details of the decision and who is responsible]
  - **Decision 3**: [Details of the decision and who is responsible]

- **Action Items**
  - **[Action Item 1]**:
    - **Assigned to**: [Name]
    - **Deadline**: [Date]
  - **[Action Item 2]**:
    - **Assigned to**: [Name]
    - **Deadline**: [Date]
  - **[Action Item 3]**:
    - **Assigned to**: [Name]
    - **Deadline**: [Date]

- **Challenges and Concerns**
  - **Challenge 1**: [Description and proposed mitigation or solution]
  - **Challenge 2**: [Description and proposed mitigation or solution]

- **Next Steps**
  - **[Next Step 1]**: [Details and responsible person or team]
  - **[Next Step 2]**: [Details and responsible person or team]

- **Additional Notes**
  - [Any other information that attendees need to remember or consider]

- **Follow-Up Meeting**
  - **Scheduled Date**: [Insert date]
  - **Objective**: [Insert objective of the follow-up meeting]

- **Feedback on Meeting**
  - [Optional: Any feedback from attendees or suggestions for improving future meetings]


<!-- Summarizing what we have discussed in this meeting - The issue we discussed is: how close to real time we can get the anomaly detection:
   • By using the existing unified pipeline:
      ○ Constrains: 
         § PLUME data gets processed to start our pipeline already ~4h behind
         § From that point the unified pipeline gets executed - I have checked and to perform all the joins in pick hours have found between 30-45 min
         § Then, the aggregations to feed the model starts - This is around 5-10 min
      ○ After this, that aggregated table has to be synced to GCS and feed the model.
What we know for now, is that given the current topology (cmts, GW Type and GW Firmware), the model can predict anomalies in 5-10min.
      ○ Finally, get the output to Graphite, so that its displayed on Grafana.
      ○ Important: As we are using the unified pipeline, we will predict error on WIFI connected STB's only. Also the STB's that act as their own GW are not considered here.
   • What we called, plan B - Model feed using only Streamparser: 
Since the information that we are using for the anomaly detection (cmts, GW Type and GW Firmware) is found in Streamparser kafka topic, we could bypass waiting time of the plume data and perform:
      ○ Perform the aggregation to feed the model with streamparser data only.
      ○ Sync to GCS that table and execute the model.
      ○ Get the output to grafana for the final display.
      ○ Important: with this approach we will be detecting anomalies in both, WIFI and ETH connected STB's (we avoided client_stats). Also we would see SMT's as well. This might increase the processing time of the model to detect anomalies. But as our current data refresh it would be already accelerating everything by 4h.
The next steps:
   • We will continue with the first option for the upcoming demo of the dashboard with the anomaly detection.
   • We expect that on WK10 (From next Tuesday) we can work with MLOps on the integration of the Trained Model into GCP.
Please let me know if any further questions. -->
<!-- 
[Project Enhancement] Assistance Requested for Data Integration in Pipeline

**Context:**
To enhance our current project model, we require:
  - Linking specific device data from the data parsing system with user statistics, focusing on individual device identifiers rather than group identifiers.
  - Inclusion of devices connected to the latest generation hardware, which is currently missing from our data.

**Objectives:**
  - Address issues noted in internal tracking system entries #10501 and #10464.
    - For the existing data flow: [Data Pipeline URL](#faq)
    - Integrating data related to the latest hardware generation into the pipeline.
    - Ensuring device identifiers (similar to user statistics identifiers) are included in the data parsing output.
  - Collaborate with the Data Engineering and Data Science teams to decide on future actions and prioritize tasks.
  - Discuss potential challenges and explore solutions to mitigate them.

Please confirm your attendance by accepting the meeting invitation. If you are unable to attend, inform me at your earliest convenience so we can arrange another suitable time if needed. -->


{{< /details >}}

{{< callout type="info" >}}
Get Ready for Diagrams: Mermaid / DrawIO / Python Diagrams / ExcaliDraw
{{< /callout >}}

It a good idea to use [Diagrams, like Mermaid Charts](https://fossengineer.com/free-diagram-tools/#mermaidjs):

```mermaid
graph LR
    A[STB Mac to Streamparser] --> B[EDA Design Modify Unified Pipeline per STB mac]
    B --> C[EDA Design to bring new attributes]
    C --> D[Pipeline Implementation - Dev/DE]
    D --> E[DSMLE 1159/1160/1161]
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

{{< callout type="info" >}}
Managing **Project Expectations** with a [Project Charter](https://github.com/Azure/Azure-TDSP-ProjectTemplate/blob/master/Docs/Project/Charter.md  "Microsoft Project Charter Example {rel='nofollow'}").
{{< /callout >}}

![Cat product Meme](/blog_img/memes/features-vs-needs.png)

#### More T-Shaped Skills


#### Prompts for Telecom

Learning Telecom concepts its now possible with AI:


You are an expert telecom and network engineer who can summarize concepts in simple terms in markdown.

You will use for readability bullet points, bold and underlines, but never h1 h2 or any header.







<!-- 34:2C:C4:12:34:56
342CC4B123456
Loc_id: 6108a72c1970e1234567890
 
ROUTER WSW: Compal Broadband Networks CH7465LG-LC 

gmd -- 'id_type ---' CH7465LG === COMPAL MV1


CH7465LG-NCIP-6.15.32p3-NOSH

CH7465LG(-xx) - Compal MV1
CH7465CE

Plume agent NOC - needs to be activated
-->



<!-- # Data Analytics

My expertise in data analytics spans diverse industries, including Fast-Moving Consumer Goods (FMCG), Crypto, and Telecom.

Through meticulous data exploration and analysis, I have harnessed actionable insights that drive informed decision-making and foster innovation in each of these dynamic fields. From optimizing supply chain strategies in FMCG to deciphering blockchain trends in the crypto sphere and extracting meaningful patterns from IoT data, my passion for data-driven solutions has consistently delivered value across a wide spectrum of industries.

## Python

My Python journey began during my university studies and has since become an essential tool in my professional toolkit. From data analysis to web development and machine learning, Python has been my go-to language for solving complex problems and delivering efficient solutions.

Some hands-on examples I've personally crafted, from idea to live deployment, to give you a taste of my full-stack capabilities:

### DASH

I've also worked on exciting projects involving DASH, harnessing its capabilities for creating interactive and data-rich web applications.

* You can see one Open Source DASH App in my Github: <https://github.com/JAlcocerT/Py_Trip_Planner>

### Streamlit

I've leveraged Streamlit to build intuitive and user-friendly data-driven applications that streamline decision-making processes. Plus, it combines perfectly with AI.

* And one sample Python Streamlit App <https://github.com/JAlcocerT/Py_RouteTracker>

## R

In both data science and the dynamic realm of cryptocurrency, I've utilized my expertise in R to unearth valuable insights, conduct data-driven analysis, and shape strategies that navigate the complexities of the crypto landscape.

### Shiny

With Shiny, I've consistently exceeded my clients' expectations by delivering dynamic dashboards that replaced static reports. This interactive approach not only enhances their data visualization experience but also empowers them with real-time insights and actionable information, elevating the value I bring to each engagement.

* I published one public Shiny App on my Github: <https://github.com/JAlcocerT/R_Stocks> -->