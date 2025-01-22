---
title: "Tools for better Photo Management"
date: 2025-01-15
draft: false
tags: ["OSS"]
summary: 'Testing tools for photo management and better backup techniques.'
url: 'photo-management-tools'
---


## SelfHosted


1. Lychee
2. Piwigo
3. [Photoview](https://fossengineer.com/selfhosting-Photoview-docker/)
4. Ente, PhotoPrism, Immich...


### Home Gallery


[Home Gallery](https://noted.lol/home-gallery-a-simple-self-hosted-photo-gallery/)

---


You can give it a try to [PhotoQT](https://photoqt.org/) or [digiKam](https://www.digikam.org/about/)

```sh
sudo apt install photoqt
```


## Lately...

I have learnt to **export photo frames** from a video (with ffmpeg).

Im still impress that with ffmpeg I dont need to re-render videos, which makes joining them really fast.

{{< callout type="info" >}}
Everything is captured here - https://github.com/JAlcocerT/YT-Video-Edition
{{< /callout >}}

PS: You can also do it with Google photos (at least at this moment)

---

## FAQ

### Proper Photo BackUps

1. Home SSD
2. Home HDD
3. Cloud

The typical **read and write speeds*8 for different interfaces are as follows:

| Interface | Read Speed (MB/s) | Write Speed (MB/s) |
|---|---|---|
| USB 3.0 | 60 | 30 |
| USB 3.1 Gen 1 | 5 | 5 |
| USB 3.1 Gen 2 | 10 | 10 |
| USB 3.2 Gen 1x1 | 20 | 20 |
| USB 3.2 Gen 2x2 | 40 | 40 |
| USB 4 | 40 | 40 |
| Thunderbolt 4 | 40 | 40 |
| SATA III | 600 | 600 |
| NVMe PCIe 3.0 x4 | 3500 | 3000 |
| NVMe PCIe 4.0 x4 | 7000 | 6000 |

I have been exploring also **NAS** as a reliable options for home backups.

Synlogy seems to be a good alternative, but...in my opinion its just a PC with couple of 3.5 bays.

Im exploring other options at this point.

I just need the space and Linux with containers!


#### Cold Storage

For example, [Amazon Glacier](https://www.geeksforgeeks.org/what-is-amazon-glacier/)

https://aws.amazon.com/s3/storage-classes/glacier/