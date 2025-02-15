---
title: "A closer look to Google Cloud Platform"
date: 2025-02-16
draft: false
tags: ["dev"]
description: 'Learning more about GCP. Compared with other Clouds and OnPrem.'
url: 'understanding-google-cloud-platform'
---

## Google Cloud Platform

### Data Analytics with GCP

Bigtable: While Bigtable is a distributed NoSQL database good for very high volumes of data, it's not a relational database and doesn't offer the same level of transactional consistency as Cloud Spanner.

Cloud SQL: Cloud SQL is a relational database service, but it's not globally distributed in the same way as Cloud Spanner, and it might not be the best choice for applications requiring very high scalability and availability across multiple regions.

BigQuery: BigQuery is a data warehouse designed for analytics and business intelligence, not for transactional workloads or CRUD operations. It's used for analyzing large datasets, not for serving real-time application requests.

{{< cards cols="1" >}}
  {{< card link="https://www.firecrawl.dev" title="FireCrawl API ↗ " >}}
  {{< card link="https://docs.firecrawl.dev/features/scrape#extracting-without-schema-new" title="API Docs ↗" >}}
{{< /cards >}}


#### GCS

**Google Cloud Storage**

The correct sequence of the data storage hierarchy is:

Tables -> File storage -> Block storage

Tables:  At the highest level, you have tables in a database. These tables organize data in a structured format with rows and columns.

File storage:  Tables are often stored as files on a file system. These files can be organized in various ways depending on the database system.

Block storage:  File systems themselves are built on top of block storage. Block storage is the most basic level, where data is stored in raw blocks on physical storage devices (hard drives, SSDs, etc.).

{{< callout type="warning" >}}
Tables are a structured view of data, which are typically stored as files, and those files reside on block storage.
{{< /callout >}}

#### Big Query

Simply speaking, BQ *is just [SQL](https://jalcocert.github.io/JAlcocerT/sql-data-analytics/)*.

But its actually much more than an interface to write your SQL queries.


{{< cards cols="1" >}}
  {{< card link="https://www.firecrawl.dev" title="FireCrawl API ↗ " >}}
  {{< card link="https://docs.firecrawl.dev/features/scrape#extracting-without-schema-new" title="API Docs ↗" >}}
{{< /cards >}}


#### Big Table

**Bigtable** is highly consistent for multi-row updates: TRUE. Bigtable is designed for low-latency, high-throughput operations and supports atomic row-level mutations, ensuring consistency even with multiple updates.

{{< callout type="info" >}}
Retirements 
{{< /callout >}}

Bigtable has lesser administrative overhead: TRUE. As a fully managed NoSQL database service, Bigtable handles infrastructure management, including scaling, replication, and failover, reducing administrative overhead.

Bigtable is highly scalable: TRUE. Bigtable is designed to scale massively to handle petabytes of data and massive read/write throughput, making it suitable for demanding applications.

#### Google Cloud SQL

Allows the end user to enable automatic backup of data: TRUE. Cloud SQL provides the functionality for users to configure and enable automatic backups of their databases.

Cloud SQL enables bug fixing to improve performance: TRUE. Google, as the provider of Cloud SQL, continuously works on bug fixes and performance improvements for the underlying infrastructure and software.

Enable high availability fail over replica: TRUE. Cloud SQL supports high availability configurations with failover replicas to minimize downtime in case of an instance failure.


#### Cloud Spanner

Consistent Schema: Cloud Spanner enforces a consistent schema across all of its distributed nodes.  This means that all reads will see the same schema, and you won't encounter inconsistencies where different parts of your database have different structures.  Schema changes are carefully managed to ensure consistency.

Automatic Replication: Cloud Spanner automatically replicates your data across multiple zones (and optionally, multiple regions) for high availability and fault tolerance.  You don't have to manually configure replication.  Spanner handles the distribution and synchronization of data behind the scenes.  This ensures that your database remains available even if some zones experience outages.

Transaction Processing: Cloud Spanner is specifically designed for high-volume transaction processing, making it suitable for applications with demanding transactional workloads like those in the retail industry.

Distributed Relational Database: Cloud Spanner is a globally distributed, scalable, and strongly consistent database. It combines the benefits of a relational database (structure, ACID properties) with the scalability of a distributed system.

CRUD Operations: Cloud Spanner excels at handling CRUD (Create, Read, Update, Delete) operations, which are fundamental to most application's data management needs.

### Compute Engine

If you are into **linux**, CLI and so on, probably this is the service you have heard of.

Sometime ago, I used **GCP CE free tier** to tinker with their **VMs**.

* https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#gcp




{{< details title="GCE Costs  📌" closed="true" >}}


Google Compute Engine charges are based on Compute Instance: This is fundamental. You are charged for the virtual machines (instances) you use, based on their type, size, and how long they run.
Google Compute Engine charges are based on Storage use: You are charged for the storage you use for your virtual machine disks, snapshots, and other data.
Google Compute Engine charges are based on Network use: Network egress (data leaving your instances) is generally charged. Ingress (data coming in) is usually free, but there might be charges for specific services or configurations.

{{< /details >}}


#### Other Clouds vs GCP CE

#### GCP CE vs SBCs

Before going into the cloud, I got familiar with linux thanks to a raspberry Pi 4.

But there are other single board computers out there, so far I tried:

1. Raspberry Pi 4 2/4GB
2. Orange pi 5 8GB 

{{< cards >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/minipc-vs-pi/" title="Orange vs Raspberry" image="/blog_img/hardware/sbcs-x13.jpg" subtitle="Battle of Pi SBCs" >}}
{{< /cards >}}

If you are wondering if you need a Pi or a MiniPC, you can have a look to [this](https://jalcocert.github.io/RPi/posts/minipc-vs-pi/).

Most SBCs (not all) are ARM based CPUs and we will be seeing more and more ARM adoption on cloud providers.


#### GCP CE vs Mini PCs

Not so long ago I was lucky to try the following mini PCs:

1. BMax B4
2. Asrock x300
3. [Firebat AK2 Plus](https://jalcocert.github.io/JAlcocerT/firebat-ak2-plus-minipc-review/)


{{< cards >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/minipc-vs-pi/" title="Asrock x300" image="/blog_img/hardware/bmax-b4.jpg" subtitle="Building a MiniPC as Server" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers" title="BMax B4 Review" image="/blog_img/hardware/bmax-b4.jpg" subtitle="Small Factor x86 MiniPC" >}}
{{< /cards >}}

Mini PCs tend to have x86 CPU architecture.

They tend to behave better if you plan to reproduce high resolution video, but in general are less efficient per W.

<!-- https://studio.youtube.com/video/4qLgpJc2Ghs/edit -->

{{< youtube "4qLgpJc2Ghs" >}}

## Conclusions



---

## FAQ

### Compute vs Cost

