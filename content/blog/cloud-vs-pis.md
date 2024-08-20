---
title: "Cloud vs Pi's"
date: 2024-08-10T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Comparing SBCs performance with the Cloud
---


* https://jalcocert.github.io/RPi/posts/minipc-vs-pi/

| Device         | CPU                                       | GPU           | RAM | Dimensions                | Idle Power | Max Power | Power Adapter Requirements |
| :------------- | :---------------------------------------- | :------------- | :-- | :------------------------- | :--------- | :-------- | :-------------------------- |
| Raspberry Pi 4 | Broadcom BCM2711 Quad-core (4x ARM Cortex-A72) | VideoCore VI   | 2 GB | 85.6mm × 56.5mm × 17mm (0.082L) | 2-3W        | 6W        | 5V 3A           |
| Orange Pi 5    | Rockchip RK3588S (4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz) | Mali G510 MP4 | 8 GB | 100mm × 62mm × 18mm (0.112L) | ~2W & 45°C | 8W    | 5V 4A     |
| BMAX B4        | Intel N95 (x4 cores Alder-Lake)                       | -              | 16 GB | 12.5 x 11.2 x 4.4 cm  (0.608L) | 9W  | 16W & 37°C | -   |


**Additional notes**:

* The Orange Pi 5 quickly goes back to ~45°C after the stress test.
* The BMAX B4 with Intel N95 CPU scored 66°C and 15W peak power during a stress test with the fan enabled at full speed.
* Disabling Wi-Fi on the BMAX B4 can improve power efficiency by ~10% (~1W).

* https://jalcocert.github.io/RPi/posts/pi-vs-orange/

| Device         | Docker Build Time | Max Temp | CPU Benchmark (4 threads) | CPU Benchmark (8 threads) | Peak Temp (Docker Build) | Avg Temp (Docker Build) |
| :------------- | :----------------- | :------- | :------------------------- | :------------------------- | :----------------------- | :----------------------- |
| Raspberry Pi 4 | ~3672s             | -        | ~11.3k events/s            | -                         | ~46°C                   | ~39°C                   |
| Orange Pi 5    | ~1777s             | 80°C    | ~10.2k events/s            | ~13.4k events/s            | ~65°C                   | ~50°C                   |
| BMAX B4        | 45 seconds         | 64°C    | -                          | -                         | -                       | -                       |


* https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#hetzner

The Hetzner x4 SkyLake and 8GB RAM provides similar performance to the BMAX (when used to build the trip-planner container image).

Hetzner Shared vCPU (2x Skylake @2ghz) 4GB	~77s
Hetzner Shared vCPU (4x Skylake @2ghz) 8GB	~45s

---

## FAQ

Sysbench

```sh
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
```