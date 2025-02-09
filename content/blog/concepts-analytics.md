---
title: Analytic Tools
type: docs
prev: /docs/gcp/
next: docs/ansible/
draft: true
---

## BI Tools

### Metabase


Get Metabase running locally with [docker-compose](https://github.com/JAlcocerT/Docker/tree/main/IoT/Metabase)


<!-- 

{{< gist "JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-metabase" >}} -->
<!-- 
<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-metabase"></script> -->


<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-metabase.js"></script>

{{< callout type="info" >}}
IoT Project example with Metabase: <https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/#metabase>
{{< /callout >}}

> IoT Projec tith [Metabase](https://jalcocert.github.io/RPi/posts/rpi-iot-dht1122-mongo/)


### Redash

[Redash is an open-source]() data visualization and dashboarding tool that is commonly used in the field of data analytics and business intelligence. It helps organizations and individuals query, visualize, and share data from various data sources to gain insights and make data-driven decisions.


{{% details title="More About Redash" closed="true" %}}

1. Data Connection: Redash allows users to connect to a wide range of data sources, including relational databases (e.g., PostgreSQL, MySQL), NoSQL databases (e.g., MongoDB), data warehouses (e.g., Amazon Redshift, Google BigQuery), REST APIs, and more. This versatility enables data analysts to work with data from multiple sources in a unified platform.

2. Querying: Users can create SQL queries and run them within Redash to extract and transform data. The tool provides a user-friendly query builder interface, making it accessible to users with varying levels of SQL expertise.

3. Visualization: Redash offers a variety of visualization options, including charts, graphs, and pivot tables, to help users explore and understand their data. It supports popular charting libraries like Chart.js, Plotly, and more, allowing for customizable and interactive visualizations.

4. Dashboards: Users can combine multiple visualizations and queries into interactive dashboards. These dashboards can be customized and shared with others, making it easy to communicate insights and monitor key performance indicators (KPIs).

5. Collaboration: Redash supports collaboration among team members by allowing them to share queries, dashboards, and insights. This promotes knowledge sharing and facilitates data-driven decision-making within organizations.

6. Scheduled Reports: Redash enables users to schedule and automate the generation of reports and dashboards, which can be sent via email or other channels. This feature is useful for regularly distributing updated data and insights to stakeholders.

7. Embedding: Redash provides options for embedding visualizations and dashboards into other applications or websites, allowing for seamless integration of data analytics capabilities into existing workflows.

8. Data Governance: Redash provides role-based access control and data source integration, helping organizations maintain data security and governance standards.

Redash is a versatile data analytics tool that simplifies the process of querying, visualizing, and sharing data from various sources. It plays a crucial role in helping organizations harness the power of their data for informed decision-making and data-driven strategies.


{{% /details %}}

> You can use this [Docker-Compose to SelfHost Redash](https://github.com/JAlcocerT/Docker/tree/main/IoT/Redash).

Get Redash running locally with [docker-compose](https://github.com/JAlcocerT/Docker/tree/main/IoT/Redash)


> IoT Project example [with Redash]().

<!-- 
<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-redash"></script> -->
<!-- 
{{< gist "JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-redash" >}} -->

<!-- ```sh
git clone https://github.com/getredash/setup
cd setup
rm -rf .git


chmod +x ./setup.sh
./setup.sh
``` -->

### Apache Superset

Get Superset running locally with [docker-compose](https://github.com/JAlcocerT/Docker/tree/main/IoT/Superset).

<!-- > IoT Project example [with Superset](). -->

<!-- 
<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-superset"></script> -->


<!-- 
<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-superset"></script>

{{< gist "JAlcocerT/953cab1052af58f4241f28dbc0a314a0#file-superset" >}} -->

<!-- ```sh
git clone https://github.com/apache/superset.git
cd Superset
rm -rf .git


docker compose up -d

git checkout 3.0.0
TAG=3.0.0 docker compose -f docker-compose-non-dev.yml pull
TAG=3.0.0 docker compose -f docker-compose-non-dev.yml up
``` -->

{{< callout type="info" >}}
IoT Project example with Superset: <https://jalcocert.github.io/RPi/posts/rpi-gps-superset/#apache-superset-setup>
{{< /callout >}}


## Databases


```sh
flatpak install flathub io.dbeaver.DBeaverCommunity

#flatpak install flathub io.conduktor.Conduktor #Kafka Desktop Client

#https://flathub.org/apps/dev.k8slens.OpenLens #k8s IDE
```

<!-- ### MariaDB

### MongoDB

### InfluxDB

TimeScale


Airtable alternatives:
https://github.com/nocodb/nocodb
https://noted.lol/nocodb-contact-form-gmail-smtp/


https://github.com/bram2w/baserow
 -->

 ## AI Assisted Analytics

 * Github Copilot
 * Codeium
 * Tabby - https://fossengineer.com/selfhosting-Tabby-coding-assistant/
 * [Bito AI](https://docs.bito.ai/feature-guides/ai-that-understands-your-code/how-it-works)

* IDE's:
    * Zed - https://zed.dev/download
    * Rivet - https://github.com/Ironclad/rivet/releases - Integrate it with Ollama/Claude/GPT4...
    * cursor.sh - use it with your own OpenAI/Anthropic/Azure keys


```sh
wget https://github.com/Ironclad/rivet/releases/download/app-v1.7.8/rivet_1.7.8_amd64.AppImage
chmod +x rivet_1.7.8_amd64.AppImage
./rivet_1.7.8_amd64.AppImage
```


{{% details title="VS Extensions" closed="true" %}}

```sh
code --list-extensions

#https://marketplace.visualstudio.com/items?itemName=Bito.Bito
#ext install Bito.Bito

#https://marketplace.visualstudio.com/items?itemName=ex3ndr.llama-coder&ssr=false#review-details
#ext install ex3ndr.llama-coder

#https://marketplace.visualstudio.com/items?itemName=Codeium.CodeiumVS
#https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs
```


{{% /details %}}

You can also try [PandasAI](https://pypi.org/project/pandasai/) and [Sketch](https://pypi.org/project/sketch/) with Python

<!-- 
https://www.quadratichq.com/

Infinite spreadsheet with Python, SQL, and AI.


https://github.com/quadratichq/quadratic/tree/main
https://github.com/quadratichq/quadratic/issues/416
docker build -t quadratic --platform=linux/amd64 . -->



## Product Analytics

* [Umami](https://fossengineer.com/selfhosting-umami-with-docker/)
* PostHog - https://github.com/JAlcocerT/Docker/tree/main/Web/Analytics




---

## FAQ


### Other Tools For Data Analytics

#### Airflow

* <https://fossengineer.com/airflow-docker/>

* Alternatives:
    * Mage - https://www.youtube.com/watch?v=sNagAw91PW0
    * Prefect - https://www.youtube.com/watch?v=f_MPmRj7P_w


https://fossengineer.com/airflow-docker/

### SelfHost These Tools with Docker

<script src="https://gist.github.com/JAlcocerT/953cab1052af58f4241f28dbc0a314a0.js"></script>




Compare with Apache Superset - https://superset.apache.org/

You can use serverless version of it at - https://preset.io/

https://github.com/jmlcas/metabase

```yml
version: '3'
services:
  metabase:
    image: metabase/metabase
    container_name: metabase
    ports:
      - "3000:3000"
    volumes:
      - metabase-data:/metabase-data
    restart: always

volumes:
  metabase-data:
```

## Metabase Embedded Analytics

https://www.metabase.com/product/embedded-analytics

node.js
ruby
python...

### Static Embedding

### FlexDashboards

---

## FAQ

### Other F/OSS BI Tools



#### Kibana

#### Grafana

### F/OSS Databases to use them with

#### Elastic Search

#### Prometheus

#### Graphite

#### MongoDB

#### MariaDB / PostreSQL (?)

#### DRUID

Druid is an open-source, high-performance, real-time analytics database system that is designed to handle large volumes of data and provide fast querying capabilities for data analytics. It was developed by Metamarkets (now part of Salesforce) and is commonly used in big data and real-time analytics scenarios.

Here are some key features and aspects of Druid in the context of data analytics:

1. **Real-Time Data Ingestion:** Druid is designed to ingest and process data in real-time, making it well-suited for applications that require up-to-the-minute insights and analytics. It can handle high-throughput data streams, such as event data and log files.

2. **Columnar Storage:** Druid stores data in a columnar format, which is highly optimized for analytics queries. This storage format allows for efficient aggregation, filtering, and querying of data.

3. **Query Performance:** Druid is known for its fast query performance, especially when dealing with large datasets. It supports complex queries and aggregations, making it suitable for interactive data exploration and reporting.

4. **Time-Series Data:** Druid is particularly well-suited for time-series data, which is common in applications like monitoring, IoT (Internet of Things), and log analysis. It can efficiently handle time-based data and provide real-time insights.

5. **Data Retention Policies:** Druid allows users to define data retention policies, which specify how long data should be stored in the system. This is important for managing storage costs and complying with data retention regulations.

6. **Scalability:** Druid is horizontally scalable, meaning you can add more nodes to a cluster to handle increasing data volumes and query loads. This scalability makes it suitable for big data analytics.

7. **Integration:** Druid can integrate with various data sources and data processing frameworks, allowing you to ingest data from databases, streaming platforms, and other sources.

8. **Visualization:** To perform data analytics effectively, Druid is often used in conjunction with visualization tools like Apache Superset, Tableau, or other BI (Business Intelligence) platforms.

Druid is commonly used in industries where real-time analytics and fast query performance are essential, such as online advertising, e-commerce, gaming, and monitoring applications. It provides a powerful platform for exploring and gaining insights from large and time-sensitive datasets.

#### Trino

**Trino, formerly known as Presto SQL**, is an **open-source distributed SQL query engine** designed for high-performance and interactive querying of data across various data sources. Trino is particularly useful for querying data in a federated manner, where data resides in different storage systems or databases, and you want to query it as if it were in a single database.

Here's how Trino compares to Druid and Kafka in the context of data analytics:

1. **Trino:**
   - **SQL Query Engine:** Trino is primarily a SQL query engine, which means it allows you to write SQL queries to access and analyze data from multiple sources, including traditional relational databases, distributed data stores, data lakes, and more.
   - **Data Virtualization:** Trino provides a virtualized view of data, allowing you to join and query data across disparate data sources without the need for ETL (Extract, Transform, Load) processes.
   - **Performance:** Trino is known for its high query performance and ability to handle complex queries efficiently. It can scale horizontally to distribute query processing.
   - **Use Cases:** Trino is suitable for **ad-hoc querying, interactive data exploration, and analytical workloads** where you need to access and analyze data from different sources in real time.

2. **Druid:**
   - **Analytics Database:** Druid is specifically designed for analytical queries, especially for time-series data. It provides fast querying and visualization capabilities for large datasets, making it suitable for interactive data exploration.
   - **Data Storage:** Druid uses columnar storage optimized for analytics, making it perform well for aggregation and filtering operations.
   - **Use Cases:** Druid is commonly used for real-time analytics, dashboards, monitoring, and reporting where sub-second query response times are crucial.

3. **Kafka:**
   - **Event Streaming:** Kafka is an event streaming platform designed for ingesting, storing, and distributing real-time data streams or events.
   - **Data Ingestion:** Kafka excels at handling high-throughput data streams from various sources and making them available to downstream applications and systems.
   - **Use Cases:** Kafka is widely used for real-time data ingestion, event-driven architectures, log aggregation, and building data pipelines.

In some data analytics architectures, you might use Trino alongside Kafka and Druid. For example, Kafka can be used for real-time data ingestion, Trino can provide SQL-based querying capabilities across various data sources, and Druid can be used for high-speed, interactive analytics on specific types of data, such as time-series data. The choice of which tools to use depends on your specific requirements and data architecture.

### Kafka what?

Druid and Apache Kafka serve different but **complementary roles in real-time data analytics** and processing. While they can be used together in a data pipeline, they are designed for different purposes:

1. **Druid:**
   - **Analytics Database:** Druid is primarily an **analytics database** designed for querying and analyzing large volumes of data with low-latency, especially **time-series data**.
   - **Data Storage:** It stores data in a columnar format optimized for analytical queries, making it well-suited for aggregation, filtering, and exploration of data.
   - **Query Engine:** Druid provides a query engine that allows you to run complex analytical queries and generate real-time insights from your data.
   - **Use Cases:** Druid is commonly used for interactive data exploration, dashboards, monitoring, and reporting in scenarios where sub-second query response times are essential.

2. **Apache Kafka:**
   - **Event Streaming Platform:** Kafka is an **event streaming platform** designed for ingesting, storing, and processing real-time data streams or events.
   - **Data Ingestion:** It excels at handling high-throughput data streams from various sources and making them available to downstream applications.
   - **Data Distribution:** Kafka facilitates data distribution and messaging between different components of a data architecture.
   - **Use Cases:** Kafka is widely used for real-time data ingestion, event sourcing, log aggregation, and building data pipelines. It acts as a backbone for data streaming and event-driven architectures.

Here's how they can work together in a real-time analytics scenario:

1. **Data Ingestion:** Kafka can be used to ingest data from various sources, such as IoT devices, logs, and external systems. It can then stream this data into Druid for real-time analysis.

2. **Data Transformation:** Before data enters Druid, you may need to transform and enrich it. Kafka's stream processing capabilities (with Kafka Streams or other stream processing frameworks) can be used for this purpose.

3. **Storage and Analysis:** Once the data is in Druid, it can be queried and analyzed in real time to generate insights and power real-time dashboards.

In summary, Kafka and Druid are complementary technologies often used together to build end-to-end real-time data analytics solutions. Kafka is focused on data ingestion, streaming, and event distribution, while Druid specializes in high-performance analytics and querying of large datasets, especially time-series data.