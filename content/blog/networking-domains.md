---
title: "Networking - Understading Domains"
date: 2024-10-23T10:20:21+01:00
draft: true
tags: ["Dev"]
description: 'Tinkering with a Raspberry Pi and Networking.'
summary: 'Raspberry Pi - Wifi2Ethernet Bridge (With Wireguard) and more'
url: 'raspberry-pi-networking'
---


1. Porkbun
2. Cloudflare
3. SquareSpace - Forced to use it after Google said bye to Google Domains

* https://pypi.org/project/porkbun-api/
    * Buy Domains - https://porkbun.com/api/json/v3/documentation#Domain%20Pricing
    * Or update DNS Settings - 

* https://github.com/cloudflare/cloudflare-python
    * https://developers.cloudflare.com/api

To point a subdomain to an IPv4 or IPv6 address, you need to create specific DNS records. Here’s what you need to do:

### 1. **Pointing to an IPv4 Address**

- **Record Type:** `A`
- **Name:** `subdomain.yourdomain.com`
- **Value:** The IPv4 address you want to point to.

### Example:
If your subdomain is `app.example.com` and the IPv4 address is `192.168.1.1`, your DNS record should look like:

| Type | Name            | Value        |
|------|-----------------|--------------|
| A    | app.example.com | 192.168.1.1  |

### 2. **Pointing to an IPv6 Address**

- **Record Type:** `AAAA`
- **Name:** `subdomain.yourdomain.com`
- **Value:** The IPv6 address you want to point to.

### Example:
If your subdomain is `app.example.com` and the IPv6 address is `2001:0db8:85a3:0000:0000:8a2e:0370:7334`, your DNS record should look like:

| Type  | Name            | Value                                   |
|-------|-----------------|-----------------------------------------|
| AAAA  | app.example.com | 2001:0db8:85a3:0000:0000:8a2e:0370:7334 |

### **Summary:**

- Use an `A` record to point a subdomain to an IPv4 address.
- Use an `AAAA` record to point a subdomain to an IPv6 address.

Make sure to replace `subdomain.yourdomain.com` with your actual subdomain, and `yourdomain.com` with your actual domain name.