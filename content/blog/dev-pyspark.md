---
title: "Getting started with PySpark"
date: 2022-10-17T23:20:21+01:00
draft: false
tags: ["Dev","Python"]
description: 'How to use PySpark'
summary: 'If you have been using SQL and Pandas with Python for a while, you might want to leverage that knowledge by learning PySpark - Using Python for Big Data Analytics with distributed computing.'
url: 'guide-python-PySpark'
---

<!-- 
https://hub.docker.com/layers/bitnami/spark/3.5-debian-11/images/sha256-70d7589cb07f24c09a28863e3fce5b9f0419042da2fff6505d0822e0ccbb7cde -->

## The PySpark Project

When talking about PySpark, we are talking about **Big Data** and [Python](/JAlcocerT/guide-python/) 🐍.

* {{< newtab url="https://spark.apache.org/docs/latest/api/python/index.html" text="Spark python API docs" >}}
    * {{< newtab url="https://github.com/spark-examples/pyspark-examples" text="PySpark Examples" >}}


<!-- Understanding Big Data 5V’s.
Understanding Big Data use cases (e.g. IoT, S0cial media analysis, ML models, log analytics, etc.).
Understanding Data Lake concept.
Understanding major architecture layers and their functions (Sources, Ingestion, Storage, Processing, Presentation, Security, Governance).

Understanding CAP Theorem and Distributed Database Management Systems.
Understanding NoSQL Databases (e.g. Cassandra, HBase, MongoDB).
Understanding Ingestion and Processing layers concepts (batch vs streaming, ETL vs ELT) and core tools (Hive, Spark, Kafka, Scoop, MapReduce).
Understanding Storage layer concepts (Bronze/Silver/Gold, columnar vs row file formats, partitioning and bucketing, object storages and distributed file systems) and core tools (HDFS, S3, Azure Blob). -->

## WHY PySpark?

🐍 **PySpark Overview**:
- PySpark is an interface for Apache Spark in Python. 
- It allows you to write Spark applications using Python and provides the PySpark shell to analyze data in a distributed environment.

📊 **PySpark vs. pandas**:
- PySpark is a library for working with large datasets in a distributed computing environment.
- pandas, on the other hand, is a library for working with smaller, tabular datasets on a single machine.

🔍 **Choosing Between PySpark and pandas**:
- If the data is small enough to be processed by pandas, PySpark might not be necessary.
- PySpark becomes useful when dealing with large datasets that don't fit into memory on a single machine, enabling distributed computation.
- However, if the computation is complex and could benefit from parallelization, PySpark could offer efficiency boosts.


## PySpark - Useful Code Snippets

### How to create a spark dataframe

```py
Data = [("Jerez","Yosua","Dr.Yosu"),
    ("London","John","CEO"),
    ("Roberta","Storm","Manager")
  ]

schema = ["Region","Nick","Job"]
df = spark.createDataFrame(data=Data, schema = schema)

df.printSchema()
df.show(truncate=False)
```


<!-- 

### How to detect null's in a PySpark Dataframe


 ### How to query Kafka topics




### How to group by a Spark DF


### How to join Spark DF's

 ### How to display the data of a Spark DF


 #### Plotly

 #### Koalas -->

### How to use SQL in Spark - SparkSQL

If you are already confortable with SQL, a good starting point is to use that knowledge combined with the power of Spark.

You are lucky enought to write SQL queries with PySpark and they will get translated as well.

Lets view a few examples:

<!-- ### Must Know from PySpark

For example: -->

### PySpark with Trino

You can use **PySpark to query [Trino](#faq)** (ex PrestoSQL) by configuring PySpark to connect to Trino as an external data source:

```py
from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("TrinoQueryExample") \
    .config("spark.jars", "/path/to/trino-jdbc-driver.jar") \
    .getOrCreate()

spark.sql("SELECT 'Hello, world - You are ready to use PySpark!'").show(truncate=False)

df.createOrReplaceTempView("trino_table")
result = spark.sql("SELECT * FROM trino_table WHERE column_name = 'some_value'")
result.show()

#spark.stop()

```

And with python like logic:
```py
df = spark.read \
    .format("jdbc") \
    .option("url", "jdbc:trino://trino-server:port") \
    .option("dbtable", "your_table_name") \
    .option("user", "your_username") \
    .option("password", "your_password") \
    .load()

# Use Python queries on the DataFrame
filtered_df = df.filter(df["column_name"] == "some_value")
result = filtered_df.select("column_name1", "column_name2")

result.show()
```

## Cool Stuff to do with PySpark

### Time Travel with Spark and Apache Iceberg
<!-- 
https://billennium.com/time-traveling-in-data-lakes/ -->

**Time-traveling** allows accessing data from a specific point in the past.

While the approach varies across formats, the core principle remains the same. **Snapshots stored in logs** enable time-traveling capabilities.

To achieve time-traveling, every state of data must be stored at a given time using snapshots. Parallel computing engines are then utilized to retrieve the desired snapshots from logs. Different technologies may use varying terminology for this mechanism.

Now that we have a brief idea about time-traveling, let’s check how to use it with a popular data lake formats: Apache Iceberg.

🌊 Apache Iceberg: A Universal Table Format

* Iceberg is a data lake format that is not tied to any specific execution engine
* It can be used with various streaming services
* Originated at Netflix

📚 Key Terms in Iceberg - Apache Iceberg uses several key terms to structure data in its format:

* Snapshot: Represents the state of a table at a specific time. It lists all data files that constitute the table's contents at the snapshot's time.
* Manifest List: A metadata file that lists the manifests forming a table snapshot. It stores information about each manifest file's contents to optimize metadata operations.
* Manifest File: A metadata file that lists a subset of data files in a snapshot. It includes partition tuple, column-level stats, and summary information for efficient scan planning.

#### How to Apply Time Travel

* With timestamp: 

```py
# time travel to October 26, 1986 at 01:21:00 
spark.read 
     .option("as-of-timestamp","499162860000") 
     .format("iceberg") .load("path/to/table") 
```

* With Snapshot_ID:

```py
// time travel to snapshot with ID 10963874102873L 
spark.read 
     .option("snapshot-id",10963874102873L) 
     .format("iceberg") .load("path/to/table") 
```
<!-- ## Try me with Google Colaboratory

If you have a Google account, you can check these code snippets, as well as few useful UDF's to work more efficiently with spark directly with your Google Colab account and the code I made available in Github:

 [![Example image](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Python_is_awesome/blob/main/Z_GoodToKnow/Getting_Started_with_PySpark.ipynb) -->

---

## FAQ

* JSON Formatter - https://jsonformatter.org/

* Involved in **Big Data Projects**? never forget to **have a [Project Charter](https://github.com/Azure/Azure-TDSP-ProjectTemplate/blob/master/Docs/Project/Charter.md)**

### Where to Learn more about Data Engineering?

* This github repo is a Must Go to learn about DE: <https://github.com/DataEngineer-io/data-engineer-handbook>

* If you are familiar with SelfHosting - You can try these objects storage: [minio](https://github.com/minio/minio) which API is compatible with AWS s3 or [Ceph](https://github.com/ceph/ceph)

You can browse s3 with a GUI thanks to: <https://github.com/mickael-kerjean/filestash>

<!-- ### How to make better EDA?

If you are using PySpark, you are probably interested in making better **Exploratory Data Analysis**

#noise
#predictably irrational
#black swans -->


### PySpark FAQ

{{< details title="Why PySpark is called lazy? 📌" closed="true" >}}


PySpark is considered "lazy" because it does not execute any code until it absolutely has to.

This means that when you call a transformation on a PySpark DataFrame or RDD, it does not actually compute the result until you call an action.

This allows Spark to **optimize the execution plan** by looking at all of the transformations that you have specified, and deciding the most efficient way to execute them.

> It also allows Spark to delay execution until the result is actually needed, rather than executing every single transformation as soon as it is specified.

{{< /details >}}

{{< details title="What to use, Spark or Pandas? What's the difference? 📌" closed="true" >}}



The choice between using Spark or Pandas depends on the type and size of data you are dealing with.

For small datasets, Pandas is usually the better option as it provides a more intuitive and user-friendly interface. However, for larger datasets, **Spark provides much better performance and scalability**.

Spark also offers a range of features, such as **distributed processing, in-memory computing, streaming, and machine learning algorithms**, that are not available with Pandas.

> The main difference between the two is that Pandas is designed to work with tabular data, while Spark is designed to work with both structured and unstructured data.


{{< /details >}}

{{< details title="What is data redistributable? 📌" closed="true" >}}

Data redistribution is the **process of transferring data** from one system or location to another. This can be done between different databases, platforms, or locations.

The purpose of data redistribution is to improve performance, enhance scalability, or reduce cost.

Data redistribution is often used to move data between a production system and a test system or between different servers or clusters, to spread the load evenly or to make sure that the data is available in multiple locations in case of system failure or disaster recovery.


{{< /details >}}

{{< details title="What is a partition? 📌" closed="true" >}}


Partitions in Apache Spark are **logical divisions of data stored on a node in the cluster**.

They provide a way to split up large datasets into smaller, more manageable chunks that can be processed in parallel.

By default, Spark uses a Hash Partitioner, which uses a hash function to determine which partition a particular row of data should be assigned to.

Spark also supports Range Partitioning, which allows for data to be divided into partitions based on a range of values.


{{< /details >}}

{{< details title="What is doing a GroupBy before a partition? 📌" closed="true" >}}

Doing a group by before partitioning means that the data is grouped together before being divided into partitions.

This can be useful when performing certain calculations, as it allows for more efficient processing of the data. For example, if you have a table of data with multiple columns and you want to sum up values in one of the columns, you can group by that column before partitioning the data so that the sum for each group is only calculated once.

{{< /details >}}

#### What is Data Skew?

Data skew is an **uneven distribution of data in a dataset**, which can be caused by a variety of factors including transformations such as joins, groupBy, and orderBy.

Data skew can have a variety of implications, such as increased lock contention, reduced database concurrency, and decreased performance.

Data skew **can be measured using the skewness coefficient**, which is a measure of the asymmetry of the data in a dataset.

<!-- 

### PYSPARK
WHAT IS DRY ACRONYM? - 
DONT REPEAT YOURSELF -->


<!-- ### What it is Kafka and how it Relates with Spark?

## Kafka Docker

2011, Linkedin, Scala

<https://www.youtube.com/watch?v=nZeDNMTgQUA>
<https://www.youtube.com/watch?v=bto9WdUo5UE>

<https://www.youtube.com/watch?v=uvb00oaa3k8>


## Zookeeper

In our big project (Kafka), we need to make sure that the conveyor belt (Kafka) is working smoothly and that all the workers (computers) know what to do. This is where our notebook (ZooKeeper) comes in. ZooKeeper helps us keep track of the conveyor belt's status and makes sure all the workers are doing their jobs correctly. -->

### Interesting Big Data Tools

{{< dropdown title="What it is TRINO? ⏬" closed="true" >}}

**TRINO** - an open-source distributed SQL query engine designed to handle large datasets distributed across one or more heterogeneous data sources.

* It is known for its speed, scalability, and ability to query data from a variety of sources, including:
    * Data warehouses: connects to popular data warehouses like Amazon Redshift, Google BigQuery, and Snowflake.
    * Data lakes: It can also query data stored in data lakes, such as those in HDFS, Amazon S3, and Google Cloud Storage.
    * NoSQL databases: Databases like Cassandra and MongoDB.
    * Streaming data sources: It can even query streaming data sources like Kafka and Kinesis

{{< /dropdown >}}

{{< dropdown title="What it is HADOOP? ⏬" closed="true" >}}

Apache Hadoop is an open-source framework that facilitates storing and processing large datasets across clusters of computers. It provides a **distributed computing platform** for handling data processing tasks that are too large or complex for a single machine.

* Hadoop itself is a collection of software utilities that work together. Some key components include:
    * YARN (Yet Another Resource Negotiator): Manages computing resources within the cluster, allocating them to running applications.
    * MapReduce: A programming model for processing large datasets in parallel across multiple nodes in the cluster.
    * Hadoop Distributed File System (**HDFS**): The **primary storage system used by Hadoop** applications to store large datasets reliably across multiple machines.

{{< /dropdown >}}

* **DBT** - dbt™ is a **SQL-first transformation workflow** that lets teams quickly and collaboratively deploy analytics code following software engineering best practices like modularity, portability, CI/CD, and documentation.
    * Now anyone on the data team can safely contribute to production-grade data pipelines -  https://github.com/dbt-labs/dbt-core - (Apache v2)
    * It is the **T** of **ETL**

{{< dropdown title="More about DBT - Data Infrastructure ⏬" closed="true" >}}

DBT (Data Build Tool) is a tool used in data analytics that provides a framework for transforming data in your warehouse more effectively. It allows users to write SQL scripts, manage them, and run them in different environments, making it a powerful tool for data transformation. 

DBT highlight the importance in the data infrastructure landscape. 

The tool is particularly appreciated for its ability to "unbundle" the data pipeline, meaning users can focus on writing SQL scripts without needing to learn complex tools. 

Among its benefits, DBT is open-source and customizable, offers automatic version control, requires no specific skillset beyond SQL knowledge, has built-in testing capabilities, and is well-documented with a growing community.

However, it also has some drawbacks. The SQL-based logic can be complex and hard to read, it offers limited debugging functionality, and **it only handles the transformation layer**, requiring additional components for a complete data pipeline.

In conclusion, while DBT is not a replacement for traditional data pipeline tools, it is a complementary tool that can simplify the data transformation process and has become a popular choice in the data infrastructure landscape.

{{< /dropdown >}}

> DBT enables data analysts and engineers to transform their data using the same practices that software engineers use to build applications.

* Airflow

* minio - https://github.com/minio/minio - AGPL 3.0

> The Object Store for AI Data Infrastructure

* **OpenDataHub** - Bridges the gap between application developers, data stewards and data scientists by blending the leading open source AI tools with a unifying and intuitive user experience
    * https://opendatahub.io/docs/getting-started-with-open-data-hub
    * It can help with **Data Lineage** - https://datahubproject.io/docs/api/tutorials/lineage/

{{< dropdown title="What it is ODH - Open Data Hub? ⏬" closed="true" >}}

Open Data Hub (ODH) is an open-source project that provides an **end-to-end AI/ML platform on top of OpenShift Container Platform** which can be used to build, deploy, and manage intelligent applications. It is a blueprint for building an AI-as-a-Service (AIaaS) platform using OpenShift and Kubernetes, Ceph, Apache Kafka, Seldon, Argo, Prometheus, Grafana, and JupyterHub, among other technologies.

Open Data Hub is designed to be **a meta-project**, meaning it is a project of projects. It brings together several open-source projects, each of which has a specific role in the data and AI/ML ecosystem, and integrates them into a coherent AI/ML platform with easy-to-use interfaces.

The main components of Open Data Hub include:

- **Data storage and management tools**, such as Ceph for distributed storage and Apache Kafka for data streaming.
- **Data exploration and analysis tools**, such as JupyterHub for interactive data analysis and exploration.
- **Model training and serving tools**, such as Seldon for serving machine learning models and Argo for managing model training workflows.
- **Monitoring tools**, such as Prometheus for monitoring and Grafana for visualization.

Open Data Hub is designed to be flexible and customizable, allowing you to pick and choose the components that best fit your data and AI/ML needs.

{{< /dropdown >}}

* DataHub - an extensible data catalog that enables data discovery, data observability and federated governance to help tame the complexity of your data ecosystem.
    * https://github.com/datahub-project/datahub (Apache v2)
    * https://datahubproject.io/
    * CLI and SDK for interacting with DataHub - https://pypi.org/project/acryl-datahub/

> The Metadata Platform for your Data Stack

<!-- 
Health Care Analytics - https://github.com/tuva-health
 
https://github.com/tuva-health/tuva

Main repo including core data model, data marts, reference data, terminology, and the clinical concept library

 -->