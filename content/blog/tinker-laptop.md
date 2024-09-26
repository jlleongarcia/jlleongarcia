---
title: "Reviewing a Laptop: ThinkPad x13 G2"
date: 2024-09-21T23:20:21+01:00
draft: true
tags: ["Dev"]
summary: Checking a new Laptop
url: laptop-benchmark
---

## Benchmarks

{{< details title="Results - SysBench 📌" closed="true" >}}

| Device | CPU Benchmark (4 threads) | CPU Benchmark (8 threads) |
| :-- | :-- | :-- |
| Raspberry Pi 4 2GB | ~1.7k events | - |
| Raspberry Pi 4 4GB | ~28k events | - |
| Orange Pi 5 | ~38k events | ~50k events |
| AMD 5600G | - | - |
| AMD 5850U | ~72k events | ~121k events |
| Intel i3 5005U | ~7.3k events | - |


```sh
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
```

{{< /details >}}
