---
title: "Cloud vs Pi's"
date: 2024-08-10T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Comparing SBCs performance with the Cloud
---


* https://jalcocert.github.io/RPi/posts/minipc-vs-pi/

| Device | CPU | RAM | Dimensions | Idle Power | Max Power | Docker Build Time | Sysbench Score | Phoronix Score | Max Temp |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Raspberry Pi 4 | ARM Cortex-A72 | 2 GB | - | - | - | 1700 seconds | - | - | - |
| Orange Pi 5 | Rockchip RK3588S | 8 GB | - | - | 8 W | 3600 seconds | - | 38 seconds | 80°C |
| BMAX B4 | Intel N95 (4 cores) | 16 GB | 12.5 x 11.2 x 4.4 cm | 9 W | 16 W | 45 seconds | - | - | 64°C |

**Additional notes**:

* The Orange Pi 5 quickly goes back to ~45°C after the stress test.
* The BMAX B4 with Intel N95 CPU scored 66°C and 15W peak power during a stress test with the fan enabled at full speed.
* Disabling Wi-Fi on the BMAX B4 can improve power efficiency by ~10% (~1W).
* The BMAX B4 was able to run the Gemma 2B LLM model using Docker, with replies taking ~30 seconds and a max temperature of ~70°C.

* https://jalcocert.github.io/RPi/posts/pi-vs-orange/

| Specification | Raspberry Pi 4 | Orange Pi 5 |
| :-- | :-- | :-- |
| CPU | Quad-core ARM Cortex-A72 | Rockchip RK3588S (4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz) |
| GPU | VideoCore VI | Mali G510 MP4 |
| Dimensions | 85.6mm × 56.5mm × 17mm (0.082L) | 100mm × 62mm × 18mm (0.112L) |
| CPU Benchmark (4 threads) | ~11.3k events/s | ~10.2k events/s |
| CPU Benchmark (8 threads) | - | ~13.4k events/s |
| Docker Build Time | ~3672s | ~1777s |
| Peak Temperature (Docker Build) | ~46°C | ~65°C |
| Average Temperature (Docker Build) | ~39°C | ~50°C |
| Idle Power Consumption | - | ~2W |

* https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#hetzner

The Hetzner x4 SkyLake and 8GB RAM provides similar performance to the BMAX (when used to build the trip-planner container image).

Hetzner Shared vCPU (2x Skylake @2ghz) 4GB	~77s
Hetzner Shared vCPU (4x Skylake @2ghz) 8GB	~45s