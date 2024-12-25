---
title: "101 Concepts for a Data Analytics Journey"
date: 2020-11-05T23:20:21+01:00
draft: false
tags: ["Career"]
description: 'Must know data concepts and techniques for your career in Analytics.'
summary: 'The essential concepts of data modeling and key terms in this introductory course for effective data analytics and informed decision-making. Learn how to structure and represent data efficiently to unlock valuable insights and optimize your analytical capabilities.'
url: 'data-basics-for-data-analytics'
---

<!-- 'data-techniques-data-analytics' -->


By understanding the principles of data modeling and the terminology associated with it, you will gain the necessary knowledge to design and work with data models, empowering you to make informed decisions and extract meaningful insights from complex datasets.

<!-- So, before you continue learning about:

* [Python]()
-->

There are some concepts that will require your attention and understanding to build effective Data Apps.

## Data Modelling Techniques

Data modeling is the process of creating a **visual representation** of the relationships, structure, and organization of data within a system.

We will be designing a database structure that accurately represents the data requirements of an organization or system

It helps us to define how data should be stored, processed, and accessed to meet the needs of an application or business process. 

* There are several different data modeling techniques, each with their own strengths and weaknesses.
    * Entity-Relationship **(ER) Modeling**: ER modeling is a technique for representing entities and their relationships to each other. ER models use entities, which represent real-world objects or concepts, and attributes, which describe the characteristics of those entities. 
        * Relationships between entities are represented as lines connecting them. ER models are well-suited for transactional systems, such as **online transaction processing (OLTP) systems**, which require a *normalized schema*.
    * Third Normal Form **(3NF) modeling** *~ Rel DB Design*: 3NF modeling is a technique for designing a database schema that eliminates redundancy and improves data consistency. 3NF models involve breaking down data into smaller, atomic components, and organizing those components into normalized tables.
        * 3NF models are well-suited for **OLTP systems**, which require a *highly normalized schema*.
    * **Dimensional Modeling** *~ BI and DWH*: a technique for designing a database schema that emphasizes the efficient and effective analysis of data. Dimensional models involve organizing data into facts and dimensions, with facts representing the numerical measurements of a system, and dimensions representing the ways in which those measurements can be analyzed. 
        * Dimensional models are well-suited for **online analytical processing (OLAP) systems**, which require a *denormalized schema* optimized for complex queries and analysis.
        *  Key characteristics of Dimensional modeling include:
            * **Star and Snowflake Schemas**: Dimensional models typically use either a Star Schema or a Snowflake Schema. In a Star Schema, a *central fact table* contains numeric measures, surrounded by *dimension tables* representing the descriptive attributes. In a Snowflake Schema, dimension tables are further normalized into multiple levels.
            * Denormalized Structures: Dimensional models are denormalized, allowing for efficient and simplified querying. The emphasis is on providing fast aggregations and easy navigation across dimensions for reporting and analysis purposes.
            * Business Focus: Dimensional modeling aligns with the business perspective, focusing on the dimensions and measures that represent key business entities and performance indicators. It provides a user-friendly structure for intuitive data exploration and reporting.
        * You should also understand:
            * **Fact Table**: ontains the quantitative or measurable data in a data warehouse. It represents the business metrics or measures that are the focus of analysis. Here are the key characteristics of a fact table:
                * Numeric Measures: Fact tables store numeric values that represent business facts or metrics, such as sales revenue, quantity sold, profit, or customer count.
                * Foreign Keys: Fact tables contain foreign keys that establish relationships with dimension tables. These foreign keys link the fact table to the associated dimensions, providing context to the measures.
                * Granularity: Fact tables are typically at a lower level of granularity, capturing detailed transactional or event-level data. They store data at the finest level of detail required for analysis.
                    * The granularity of a data model is determined by the level of detail of the data entities and attributes that are included in the model.
                        * For example, a data model with a high level of granularity would include data entities and attributes that represent specific details about the business. For example, a retail store data model with high granularity might include data entities and attributes for individual products, customers, and orders.
                        * A data model with a low level of granularity would include data entities and attributes that represent more general information about the business. For example, a retail store data model with low granularity might include data entities and attributes for product categories, customer segments, and order types.
                * Aggregations: Fact tables often include aggregated values for efficient querying and reporting. Aggregations allow for summarization and analysis at higher levels of granularity, such as by day, week, month, or by different dimensions.
                * Examples: Sales Amount Table, Transactions Table...
            * **Dimension Tables**: provides descriptive information or context about the measures stored in the fact table. It contains the attributes that define the dimensions by which data can be analyzed. Here are the key characteristics of a dimension table:
                * Descriptive Attributes: Dimension tables store descriptive attributes that provide additional context about the measures in the fact table. Examples of dimension attributes include product name, customer name, time period, geography, or any other relevant categorization or classification.
                * Primary Keys: Dimension tables have a primary key that uniquely identifies each dimension record. These primary keys are referenced in the fact table as foreign keys to establish relationships.
                * Hierarchies: Dimension tables often contain hierarchical relationships. For example, a time dimension may have attributes like year, quarter, month, and day, forming a time hierarchy.
                * Categorical Data: Dimension tables store categorical or qualitative data that provides dimensions or perspectives for analyzing the measures in the fact table.
                * Examples: Product Dimensions (ID, name, brand...), Customer Dimensions (customer_id, customer_segment...)
    * Data Vault modeling is a technique used in data warehousing that focuses on providing a flexible and scalable data architecture for capturing and integrating data from various sources. 


Remember that in essence: 

> ER modeling and 3NF modeling are well-suited for OLTP systems, which require a highly normalized schema to ensure data consistency and minimize redundancy.

> Dimensional modeling is well-suited for OLAP systems, which require a denormalized schema to optimize complex queries and improve their performance.

### Types of Data Models

* Conceptual Data Model: This high-level model represents the main entities, attributes, and relationships within a system. It is used to communicate the overall structure and organization of data to stakeholders, without focusing on technical details.

* Logical Data Model: This model builds upon the conceptual model by adding more details, such as data types, constraints, and relationships. It defines the structure of the data without specifying how it will be stored in a physical database.

* Physical Data Model: This model focuses on the technical implementation of the data, such as table structures, indexes, and storage configurations. It is tailored to a specific database management system (DBMS) and defines how the data will be stored and accessed.

### Terms for Data Modeling

By understanding these basic types of data models and common terms, you can gain a foundational understanding of data modeling techniques and how they are used to design and organize data within a system.

* Data Formats *or Data Models*: are higher-level categories that define how data is organized, represented, and stored.
    * Structured data: *relational DBs, spreadsheets...*
        * It can be described with a schema
        * Every row of the table must follow the schema
    * Semi-Structured data: *XML, JSON, logs...*
        * There are tables, but not all the rows have to follow a schema
        * Each row can have their own properties
        * Normally the common property is just an ID column
    * Un-Structured data:
        * Images, apps, txt, movies...
        * It is easier (faster) to query

* Data Modeling or Entity-Relationship Model:
    * Entity: An entity is an object or concept that is relevant to the system being modeled. It can represent a person, place, thing, or event, and is usually depicted as a table in a relational database.
    * Attribute: An attribute is a property or characteristic of an entity. It describes a specific aspect of the entity, such as its name, age, or address. Attributes are typically represented as columns within a table.
    * Relationship: A relationship describes how entities are connected or associated with each other. Relationships can be one-to-one, one-to-many, or many-to-many, depending on the cardinality between the entities. To establish connections between tables....
        * Primary Key: A primary key is a unique identifier for a record within a table. It ensures that each record can be distinguished from all others, and it is used to establish relationships between tables.
        * Foreign Key: A foreign key is an attribute in one table that refers to the primary key in another table. It is used to create relationships between tables and ensure data integrity across the system.

* Database Design:
    * **Normalization**: the process of organizing data in a database to minimize redundancy, improve data integrity, and simplify the structure of the tables. It typically involves breaking down complex tables into smaller, more focused tables and establishing relationships between them.
        * The main goals of data normalization are:
            * Eliminating Data Redundancy: By organizing data into separate tables, normalization reduces the need to store the same data multiple times, leading to a more efficient use of storage space.
            * Ensuring Data Integrity: Normalization helps maintain data integrity by reducing the risk of data inconsistencies and anomalies. It achieves this by establishing relationships between tables using primary keys and foreign keys, ensuring referential integrity.
            * Simplifying Updates and Maintenance: Normalization makes it easier to update, modify, and maintain the database. When a change occurs, it only needs to be made in one place, improving data consistency and reducing the chances of errors.
    * **Denormalization**: Data denormalization is the process of intentionally introducing redundancy into a database design. It involves combining or duplicating data from multiple tables to improve performance or meet specific querying requirements. 
       * Denormalization aims to optimize data retrieval and query performance by reducing the need for complex joins and improving data access. 
            * Key reasons for denormalization include:
            *  Performance Enhancement: Denormalization can improve query performance by reducing the number of tables involved in a query and minimizing the need for complex joins. It can be particularly useful in scenarios where data retrieval speed is crucial, such as real-time or high-volume transactional systems.
            * Simplified Querying: By duplicating or combining data, denormalization can simplify complex queries and reduce the number of tables and joins required for retrieval. This can enhance query readability and make it easier to generate reports or perform analytics.
            * Aggregation and Reporting: Denormalization can facilitate pre-aggregation of data, making it more efficient to generate summarized reports or perform calculations without the need for extensive joins and calculations.
* Database Relationships:    
    * **Cardinality**: the number of unique values in a relational table column relative to the total number of rows in the table.
        * 1:1, 1:N, N:1, N:M
    * Cardinality constraints help define the rules and constraints of the relationships between entities in a database model. They play a crucial role in establishing referential integrity, enforcing data consistency, and determining how entities are connected and interact with each other.

* Data Integration Approaches:
    * **ETL** ~ On-Premise :  a process used to extract data from various sources, transform it into a consistent and usable format, and load it into a target system, such as a *data warehouse or a data mart*. 
        * ETL is well-suited for use cases where data needs to be standardized, consolidated, and cleansed before loading it into the target system. It is often used in scenarios such as data warehousing, where data from multiple sources is transformed and loaded into a structured and predefined schema for reporting and analytics purposes. 
    * **ELT** ~ Cloud / Big Data Analytics: Typical in the cloud with *Data Lakes* - they accept raw data in any structure or format.ELT allows for greater flexibility and scalability since the transformation is performed within the target system, taking advantage of its computational power.
        * ELT is suitable for use cases where the target system has the computational power and capabilities to handle data transformations efficiently. It is often used in scenarios involving big data analytics, streaming data processing, or situations where the structure and requirements of the data are subject to change.

* Data Processing Approaches:
    * **OLAP**: Online Analytical Processing - these systems are designed to perform complex analysis and provide BI. OLAP systems, are designed for analytical processing, where data is typically read-only and the focus is on analyzing large amounts of data to identify patterns and trends. 
        * OLAP systems typically use a *denormalized schema*, such as a dimensional model, to optimize complex queries and improve performance.
        * It supports multidimensional analysis, data mining, and advanced analytics for decision support.
        * OLAP typically involves a dimensional model with a central fact table surrounded by dimension tables, representing different perspectives or dimensions of the data.
    * **OLTP**: Online Transaction Processing - these systems are designed to perform business transactions as they occur. **Speed**. OLTP systems are designed for transactional processing, where data is frequently updated, inserted, and deleted, and the focus is on maintaining data consistency and accuracy. 
        * OLTP systems typically use a *normalized schema*, such as an ER or 3NF model, to ensure data consistency and minimize redundancy.
        * OLTP handles simple, fast, and real-time transactions that involve CRUD operations (Create, Read, Update, Delete) on individual records.
        *  OLTP is designed for transactional processing, supporting day-to-day operational tasks and real-time transaction management.

* Data Arquitecture:
    * Data Warehouse: Central platform for storage that collects and integrates data from different operational sources. *Typically stores structured data.*
        * It is designed to support reporting, analytics, and decision-making processes. Data from operational systems is extracted, transformed, and loaded (ETL) into the Data Warehouse, following a specific schema and data model optimized for querying and analysis.
    * Data Mart: mechanism in which business users access data inside a DWH. *They are user focused*.
        * A subset of a Data Warehouse focused on a specific business function, department, or user group. It contains a subset of data that is tailored to the needs of a particular user community. Data Marts are designed to provide optimized and *simplified access to data* for specific reporting and analysis purposes.
    * Data Lake: They store data as it is, without any processing from different sources. We can find structured, semi-structured **and unstructured** data in them.
        * Data Lakes provide a flexible storage solution, allowing data to be ingested and stored without a predefined schema. The data is then processed, transformed, and analyzed as needed. Data Lakes often leverage technologies such as Hadoop Distributed File System (HDFS) or cloud-based object storage.
        *  Data Lakes can scale horizontally and vertically, accommodating large volumes of data with cost-effective storage options, such as cloud-based object storage.
    * Data Lake House: A data lakehouse is a new, open data management architecture that combines the flexibility , cost-efficiency, and scale of data lakes with the data management and control of data warehouses. It is one platform for Dwh and Dscience, tries to combine the good of DWH and Data Lakes.
        * Data Lakehouses often use technologies such as *Apache Delta Lake* or other modern data platforms to enable structured and real-time analytics on raw data.
    * Delta Lake: **Data Lake + Structured transactional layer**. It is a FOSS standard for building DLK's. Delta Lake is a popular storage layer that enables users to combine the benefits of a data lake with the structured querying and processing capabilities of a data warehouse. 
        * They are compatible with a variety of big data tools (like Apache Spark, Hive, and Presto), which makes it a popular choice for building data lakehouses. 
 


<!-- 


Knowing information system types: Operational vs Analytic (purpose, design principles).
Understanding DWH purpose and benefits.
Knowing DWH layers.
Knowing ETL basics (definition, its role in DWH architecture, ETL vs ELT).


Knowing dimensional modelling concepts (Facts, Dimensions, granularity, surrogate and natural keys).

Knowing SCD types.

    SCD (Slowly Changing Dimensions) is a concept used in data warehousing to handle changes to dimension attributes over time. SCDs capture historical information and provide a mechanism for tracking and analyzing changes in dimension data. There are different types of SCDs based on how changes are managed. Let's explore each type:

    Type 1 SCD (Type 1 Historical Dimension):
    Type 1 SCDs overwrite existing dimension data with new values, without preserving historical changes. It means that when a change occurs, the existing dimension record is updated with the new values, and the previous values are lost. This approach does not retain historical information and is suitable when historical tracking is not required or when updates should not affect historical analysis.

    Type 2 SCD (Type 2 Historical Dimension):
    Type 2 SCDs create new records for each change, preserving historical information. When a change occurs, a new row is added to the dimension table, capturing the new attribute values and assigning a unique identifier (usually a surrogate key). The existing record remains intact, maintaining its original values. This approach allows for historical tracking and analysis but can result in a larger dimension table size.

    Type 3 SCD (Type 3 Historical Dimension):
    Type 3 SCDs add additional attribute columns to the dimension table to capture limited historical changes. Typically, two or more attribute columns are included to represent the current and previous attribute values. This approach provides a partial history by allowing limited tracking of changes, but it has limitations as it can only store a limited number of historical states.

    Type 4 SCD (Type 4 Historical Dimension):
    Type 4 SCDs introduce separate dimension tables to store historical changes. A new dimension table, often referred to as a "mini-dimension" or "history table," is created to capture the changes while maintaining the primary dimension table for current data. The history table includes effective dates, allowing for point-in-time analysis and tracking of historical changes. This approach provides comprehensive historical tracking but can lead to increased complexity in querying and maintaining multiple dimension tables




  -->

## Databases

A database is a collection of data that is organized in a way that makes it easy to access, manage, and update. Databases are used to store and manage information, and are a fundamental component of many software applications. 

* Examples of databases include MySQL, Oracle, and Microsoft SQL Server.
    * The traditional method of storing data in tables, columns and rows.
    * Typically structured data, with a defined schema.
    * Designed to be transactional (**OLTP**), not designed to perform Data Analytics.
    * More examples: MySQL, PostgreSQL, Amz Aurora...
* To interact with DB's you will want to learn about [SQL](https://fossengineer.com/sql-data-analytics/) 

### DB Management Systems

A DBMS is a software system that allows users to create, manage, and access databases. DBMS systems are designed to provide a centralized, efficient, and secure way to store and manage data.

#### ACID Properties

The ACID properties are a set of four properties that ensure that database transactions are processed reliably. 

* These properties are:
    * Atomicity: Atomicity ensures that a transaction is treated as a single, indivisible unit of work. If any part of a transaction fails, the entire transaction is rolled back, and the database is restored to its previous state.
    * Consistency: Consistency ensures that a transaction brings the database from one valid state to another. In other words, a transaction cannot leave the database in an invalid state.
    * Isolation: Isolation ensures that multiple transactions can be processed concurrently without interfering with each other. Each transaction is executed as if it were the only transaction running.
    * Durability: Durability ensures that once a transaction has been committed, it will remain committed even in the event of a system failure.

## Data Warehousing

Data warehousing is the process of collecting, storing, and managing large volumes of data from various sources to support business intelligence and decision-making. 

Understanding the fundamentals of data warehousing is essential for effectively leveraging data for analytics and reporting. Here are some key concepts:

* Information System Types: Operational vs Analytic
    * Operational systems - OLTP: These systems support day-to-day business operations, such as transaction processing, record-keeping, and managing business processes. Operational systems focus on efficiency, data integrity, and real-time processing. Examples include CRM, ERP, and order management systems.
    * Analytic systems - OLAP: These systems focus on analyzing data to support decision-making, identify patterns and trends, and gain insights for strategic planning. Analytic systems prioritize data organization, consolidation, and historical context. Examples include data warehouses, data marts, and OLAP systems.

Do it step by step, *one concept at a time* - Gaining practical experience in data warehousing involves working on real-world projects, learning various data warehousing tools and technologies, and understanding best practices for designing, implementing, and maintaining a data warehouse.

### DWH Concepts

A data warehouse is a large, centralized repository of data that is used to support business intelligence and reporting. Data warehouses are designed to store and analyze large amounts of data from a variety of sources, and provide users with the ability to analyze and report on this data in a meaningful way. 

* It exists on top of several DB's, providing a layer to do Data Analytics.
* Typically working with ETL and can outputs BI reports.
* Examples of data warehouse solutions include Microsoft Azure Synapse Analytics, Snowflake, and Amazon Redshift.

### Data warehouses Layers

* They typically have three main layers:
    * Staging area: Data from multiple sources is temporarily stored and prepared for further processing. This may involve data cleansing, transformation, and deduplication.
    * Integration layer: Data is transformed, integrated, and stored in a consistent format. This layer often uses a star or snowflake schema to organize data into fact and dimension tables for efficient querying and analysis.
    * Presentation layer: The final layer presents data in a format suitable for reporting and analysis. This may involve creating summary tables, aggregations, or data marts tailored to specific business functions or departments.

### ETL and ELT in DWH Architecture

* ETL (Extract, Transform, Load): ETL is a process that extracts data from various source systems, transforms it into a consistent format, and loads it into the data warehouse. ETL is crucial for ensuring data quality, consistency, and integrity within the data warehouse.

* ETL's role in DWH architecture: ETL is a key component of data warehousing, responsible for moving, integrating, and preparing data for analysis. It helps manage the flow of data between the staging, integration, and presentation layers of the data warehouse.

* ETL vs ELT: ETL and ELT (Extract, Load, Transform) are both **Data Integration Methods**.
    * While ETL performs transformations before loading data into the warehouse, ELT loads the data first and then applies transformations within the warehouse. 
    * ELT is often faster and more scalable, especially when using modern cloud-based data warehouses that can handle large-scale data processing. 
    * The choice between ETL and ELT depends on factors like data volume, processing capabilities, and specific organizational requirements.

### DWH Architecture Approaches

* Inmon: Bill Inmon's approach, often called the **top-down approach**, advocates for building a centralized, normalized enterprise data warehouse (EDW) that serves as a single source of truth for the entire organization. Once the EDW is established, data marts can be created to cater to specific business needs or departments.

* Kimball: Ralph Kimball's approach, known as the **bottom-up approach**, focuses on building individual data marts based on business processes. Each data mart uses a dimensional model, and they can be integrated later to form a larger data warehouse. This approach allows for quicker implementation and more flexibility in addressing specific business requirements.

* Stand-Alone Data Mart: A stand-alone data mart is an independent data repository **designed to serve a specific business function** or department. This approach is faster and less expensive but may result in data silos and inconsistencies across the organization.

### Dimensional Modeling Concepts

* Facts: Fact tables store quantitative data, such as sales figures or revenue, and are the primary focus of analysis in a data warehouse.

* Dimensions: Dimension tables store descriptive data, such as customer information or product details, which provide context for the facts.

* Granularity: Granularity refers to the level of detail in a fact table. Finer granularity means more detailed data, while coarser granularity represents aggregated or summarized data.

* Surrogate keys: Surrogate keys are system-generated unique identifiers for records in a dimension table, used to maintain referential integrity and handle changes in natural keys.

* Natural keys: Natural keys are unique identifiers that exist in the source system, such as customer ID or product code.

### Dimensional Modeling Approaches

#### Star Schema

A star schema is a type of dimensional model where a central fact table is connected to one or more dimension tables via foreign key relationships. It is **typycal in DWH**. 

* This schema is easy to understand, query, and maintain, but may result in data redundancy. Useful concepts:
    * Surrogate key - Is unique in the DB
    * Alternate key - the primary key

A star schema is a simple and intuitive design that consists of a fact table surrounded by dimension tables.

The fact table contains the measures or metrics, such as sales or revenue, and the dimension tables provide context for the measures, such as product, customer, or date. 

**The fact table and dimension tables are linked by keys**, which allows for easy querying and analysis of the data. The star schema is well-suited for simple and straightforward reporting and analysis.

The fact table is usually used to track events, transactions and related dimensions with the surrogate key.

#### Snowflake Schema

A snowflake schema is an extension of the star schema, where dimension tables are normalized to reduce data redundancy.

This schema is more space-efficient but may increase query complexity and decrease performance.

A snowflake schema is a more complex design that extends the star schema by **breaking out the dimension tables into smaller tables that can be further normalized**. This can help to reduce redundancy and improve data consistency, but can also make the schema more complex and difficult to manage. 

* Compared to its counterpart, the star schema, the snowflake schema may involve more complex join operations across multiple tables, which can potentially impact query performance.
    * The snowflake schema is primarily chosen for its advantages in data maintenance, data integrity, and storage optimization.
    * While query performance may not be a direct benefit of the snowflake schema, it can still achieve good performance through proper indexing, query optimization techniques, and appropriate hardware resources. 
    * *Snowflake Schema ~ Normalization*


### SCD (Slowly Changing Dimensions)

Slow Changing Dimensions (SCDs) are a data warehousing technique used to capture, track, and manage changes to dimension data over time, ensuring accurate historical analysis and reporting.

In a data warehouse, dimensions are the descriptive attributes used to analyze and categorize data. However, these dimensions can change over time, and it is important to capture and preserve historical information accurately.

SCDs are used to handle different types of changes to dimension data, such as updates, inserts, and deletions, while maintaining historical context. This allows analysts and decision-makers to perform trend analysis, generate reports, and gain insights into how dimension attributes evolve over time.

By utilizing SCD techniques, data warehouses can effectively manage and track changes in dimension data, ensuring the accuracy and consistency of historical analysis and reporting.

* The types:
    * Type 0: date - new come, but old unchanged.
    * Type 1: Overwrite old data with new data, without maintaining any history.
    * Type 2: Preserve historical data by creating new records with updated information and marking old records as inactive.
    * Type 3: Store both the old and new values in the same record, typically by adding a new column to store the previous value.


### Why using a DWH?

Data warehouses (DWH) serve as a central repository for data collected from various operational systems, **consolidating and organizing it for efficient analysis and reporting**. 

* DWHing benefits include:
    * Improved decision-making through better data access and analysis
    * Enhanced data quality and consistency across the organization
    * Historical data storage for trend analysis and forecasting
    * Increased efficiency by offloading analytics and reporting from operational systems

### Data Marts?

A data mart is a subset of a data warehouse that is designed to support a specific business function or department. Data marts are typically smaller and more focused than a data warehouse, and are designed to provide users with fast, efficient access to the data they need to support their specific business needs. 

Examples of data mart solutions include: *IBM Cognos Analytics, Oracle Business Intelligence, and SAP BusinessObjects.*

### Snowflake

Snowflake is a cloud-based **data warehousing platform** that provides a modern, scalable, and flexible solution for storing and analyzing data. It is designed to handle large volumes of structured and semi-structured data, enabling organizations to derive valuable insights and make data-driven decisions.

Furthermore, Snowflake offers a range of advanced features, including automatic data optimization, query optimization, and support for semi-structured data formats like JSON and Parquet.

It also provides functionalities for data transformation, data loading, and data sharing with external parties.

#### Snowflake Basic Concepts

* What is it Clustered in Snowflake?
    * It refers to a feature that allows you to optimize the physical storage and query performance of your data. When you define a table as clustered in Snowflake, it means that the data within the table is physically organized based on the values in one or more columns.
    * By clustering a table, Snowflake groups together similar data based on the specified clustering columns. This grouping enhances the efficiency of data retrieval during query execution because related data is stored physically close to each other, reducing the amount of data that needs to be accessed and improving query performance.

* What are the types of tables in Snowflake?
    * Standard Tables: Standard tables in Snowflake are the most common type. They store structured data in a tabular format and support various data types, including numeric, string, date, and time. Standard tables can be created, queried, modified, and dropped using SQL statements.
    * External Tables: External tables in Snowflake provide a way to access and query data stored outside of Snowflake's native storage. They are defined based on external data files residing in cloud storage services like Amazon S3 or Azure Blob Storage. External tables offer flexibility in integrating data from different sources into Snowflake without requiring data migration.
    * Temporary Tables: Temporary tables are session-specific tables that exist only for the duration of a user's session.
    * Secure Data Sharing Tables
    * Transient Tables
* What is Snowpipe?
    *  A feature in Snowflake that allows for real-time data ingestion into a Snowflake database. It provides a seamless and automated way to load data from various sources, such as streaming platforms, event queues, or cloud storage, directly into Snowflake for immediate analysis and processing.
    * You can set up continuous data loading pipelines that enable near real-time data ingestion. Instead of manually triggering data loads or using scheduled jobs, Snowpipe leverages event-driven architecture to automatically load data as soon as it becomes available in the source.
* What is a Stream?
    *  Streams are a powerful feature that enables capturing and processing real-time data changes in a database table. Streams provide a continuous and ordered record of data changes, allowing you to track and react to modifications happening in your database in near real-time.
* How to load data into Snowflake?
    * Snowpipe (near real time)
    * Bulk Data Loading
    * External tables
    * Data Integration Tools

### Big Query

Snowflake and Google BigQuery are both popular **cloud-based data warehousing solutions** that offer similar capabilities. They are considered alternatives to each other, providing scalable storage and powerful analytics capabilities in the cloud. 

* However, there are some differences between the two platforms:
    * Architecture: Snowflake follows a multi-cluster shared data architecture, where compute and storage are separate, allowing independent scaling. BigQuery, on the other hand, employs a distributed columnar storage approach with shared storage.
    * Snowflake is cloud-agnostic, while BigQuery is Google Cloud-specific

## Data Integration Services

The technologies, tools, and processes used to combine, transform, and consolidate data from various sources into a unified and consistent format.

These services enable organizations to bring together data from disparate systems, databases, applications, and file formats to create a comprehensive view of the data for analysis, reporting, and decision-making purposes.

Data integration services are responsible for extracting, transforming, and loading **(ETL) data into the data warehouse**.

### Azure Data Factory

Azure Data Factory is a cloud-based data integration service provided by Microsoft Azure. It allows you to orchestrate and automate the movement and transformation of data from various sources to different destinations.

While Azure Data Factory is not specifically a data warehouse itself, it plays a crucial role in data warehouse solutions. It facilitates the process of collecting data from diverse sources, performing necessary transformations, and loading it into a data warehouse or other data storage systems.

Snowpipe (Snowflake's) focuses on real-time data loading into Snowflake, Azure Data Factory is a more extensive data integration service that supports diverse data integration scenarios across various cloud and on-premises data sources.

Its direct competitors are: *AWS Glue and Google CLoud Data Fusion*.

* How to debug in ADF (*with the debug feature*)?
    * Validation: ADF validates the pipeline's structure and connections to ensure that all components are properly configured and ready for execution. It checks for any syntax errors, missing dependencies, or misconfigured settings.
    * Execution: ADF executes the pipeline in a step-by-step manner, following the defined sequence of activities and transformations. It starts by initializing the pipeline and its dependencies, then executes each activity or transformation one at a time.
    * Data Flow Execution: If your pipeline contains Data Flow activities, ADF leverages the Azure Data Factory Mapping Data Flows engine to execute the data transformations defined in the data flows. It processes the data according to the defined logic and transformations, generating the desired output.
    * Logging and Monitoring: Throughout the debug session, ADF captures detailed execution logs and metrics. It records information about each executed activity, including input and output data, execution times, and any errors or warnings encountered. These logs help in diagnosing issues, identifying bottlenecks, and monitoring the pipeline's behavior.
    * Output and Intermediate Results: As the pipeline progresses, ADF captures and stores intermediate results and outputs generated by each activity. This allows you to inspect the transformed data, examine intermediate datasets, and verify the correctness of the transformations.

## Data Lakes

A data lake is a storage repository that holds a vast amount of raw, unstructured data in its native format. Unlike a data warehouse, **a data lake does not impose any structure** or schema on the data, which allows for more flexibility and scalability.

Data lakes are often used in big data environments and are designed to support a wide range of use cases, including data exploration, machine learning, and advanced analytics.

Examples of data lake solutions include: *Microsoft Azure Data Lake Storage, Amazon S3, and Google Cloud Storage.*

## Data Lake House

A data lake house is a concept that combines the best features of data lakes and data warehouses. It aims to address some of the limitations and challenges associated with both approaches and provides a unified and scalable solution for *storing, managing, and analyzing large volumes of data*.

By combining the flexibility and scalability of data lakes with the structure and performance optimizations of data warehouses, data lake houses provide a middle ground that addresses the challenges of managing and deriving insights from large-scale data sets. They enable organizations to store and process raw data while maintaining the ability to apply structure, governance, and efficient querying for analytics purposes.

* The term "data lake house" is not commonly used by Google, Microsoft, or AWS to describe their specific offerings, and yet each cloud provider has services and platforms that can be used to **build a data lake house architecture**:
    * Google Cloud Platform (GCP):
        * *Google Cloud Storage*: GCS provides scalable and durable object storage that can serve as the foundation for a data lake. It allows you to store and organize diverse data types and formats.
        * *BigQuery*: BigQuery is a serverless data warehouse and analytics platform that can be used to analyze and query structured and semi-structured data stored in Google Cloud Storage. It supports high-performance querying using SQL-like queries.
    * Microsoft Azure:
        * *Azure Data Lake Storage*: Azure Data Lake Storage is a scalable and secure storage service that allows you to store large amounts of structured, semi-structured, and unstructured data. It integrates well with other Azure services for analytics and processing.
        * *Azure Synapse Analytics*: Azure Synapse Analytics combines data warehousing and big data processing capabilities. It can serve as the analytics engine for a data lake house, allowing you to analyze data stored in Azure Data Lake Storage and perform data transformations and machine learning tasks.   
    * Amazon Web Services:
        * *Amazon S3* (Simple Storage Service): Amazon S3 is a highly scalable and durable object storage service that can be used as the foundation for a data lake. It can store and organize any type of data, including structured, semi-structured, and unstructured data.
        * *Amazon Redshift*: Amazon Redshift is a fully managed data warehouse service that can be used for structured data analytics. It allows you to analyze large datasets with high-performance querying using SQL-like queries. Redshift Spectrum also enables querying data directly from files stored in Amazon S3.     

## Databricks

Databricks is a leading unified data analytics platform built on Apache Spark, offering a collaborative and scalable environment for data scientists, data engineers, and analysts.

It simplifies big data processing and analytics by providing a managed version of Apache Spark, supporting multiple programming languages such as [Python](https://fossengineer.com/guide-python/), Scala, R, and [SQL](https://fossengineer.com/sql-data-analytics/).

Databricks enables interactive data exploration, visualization, and machine learning, empowering organizations to derive valuable insights from diverse and large-scale data sets. With its focus on simplicity, automation, and collaborative workflows, Databricks has become a popular choice for accelerating data-driven initiatives across industries.

* While Databricks can be a valuable component within a data lakehouse architecture, it does not encompass the entire architecture:
    * It can be integrated with data lake and data warehouse solutions, such as *Amazon S3, Azure Data Lake Storage, or Snowflake*, to create a comprehensive data lakehouse architecture. By leveraging Databricks alongside other storage and analytics services, organizations can achieve a unified and optimized environment for data processing, analytics, and governance.

## Data Profiling and Quality

Data profiling and quality of source data are two interrelated concepts in the field of data management and data analytics that help ensure the accuracy, reliability, and usability of data.

### Data Profiling

Data profiling is the process of examining, analyzing, and summarizing data to gain an understanding of its structure, relationships, content, and quality. 

* This process typically involves the following activities:
    * Assessing data distributions and patterns
    * Identifying data anomalies, inconsistencies, and errors
    * Analyzing data types, formats, and lengths
    * Checking for missing, duplicate, or outdated data
    * Evaluating relationships and dependencies between data elements
    * Summarizing metadata, such as column names, descriptions, and data sources

The goal of data profiling is to identify potential data quality issues, improve the understanding of the data, and inform data preparation and integration processes.

Data profiling provides valuable insights that help organizations make informed decisions about data cleansing, transformation, and modeling.

### Quality of Source Data

Quality of source data refers to the degree to which the data from its original source is accurate, reliable, complete, and fit for its intended purpose. High-quality source data is critical for ensuring that data-driven insights and decisions are based on accurate and trustworthy information.

* Some key dimensions of data quality include:
    * Accuracy: The degree to which the data correctly represents the real-world entities or events it is intended to describe.
    * Completeness: The extent to which all required data elements are present and available for analysis.
    * Consistency: The uniformity of data values and formats across different data sources and records.
    * Timeliness: The degree to which the data is up-to-date and reflects the current state of the real-world entities or events it represents.
    * Validity: The extent to which the data conforms to predefined rules

## Desining Data Systems

### Functional design

Functional design is the process of defining the features, functions, and workflows of a system or application to meet specific business requirements. This includes creating detailed specifications for user interfaces, data management, and system interactions.

In the context of a project, functional design involves working with stakeholders to gather and analyze requirements, creating functional specifications, designing user interfaces and workflows, and documenting the functional design for developers to implement.

Setting up functional design development typically involves establishing a team of business analysts, UX designers, and subject matter experts, defining project scope and objectives, and developing a plan for requirements gathering, analysis, and documentation.

### Data Structure Design

Data structure design is the process of defining the organization, relationships, and constraints of data elements within a system or application. This includes creating data models, entity-relationship diagrams, and other representations of data structures to ensure data is stored and managed effectively.

* Creating a data logic model for a project involves using various tools and techniques to design and document data structures, such as:
    * Entity-relationship modeling tools: These tools help create visual representations of data entities, their attributes, and the relationships between them (e.g., ER/Studio, MySQL Workbench, or Microsoft Visio).
    * Data modeling tools: These tools support the design and documentation of data structures, often with features for generating database schemas, SQL scripts, or other artifacts (e.g., PowerDesigner, Toad Data Modeler, or IBM InfoSphere Data Architect).
    * Unified Modeling Language (UML) tools: UML tools can be used to create class diagrams, which show the structure of data elements, their attributes, and associations (e.g., Visual Paradigm, Sparx Enterprise Architect, or MagicDraw).

## About Data Governance

Data Governance is the process of managing the availability, usability, integrity, and security of data within an organization. It involves establishing policies, standards, and processes to ensure data quality, consistency, and compliance with regulations.

The *DG function* ensures that data is managed effectively and efficiently, in accordance with organizational policies and regulatory requirements. You should be familiar with concepts like: data stewardship, data quality, data lineage, data cataloging, and data privacy.

* Some of the Data Governance drivers are:
    * Data quality: Ensuring the accuracy, consistency, and reliability of data across the organization.
    * Data compliance and privacy: Adhering to relevant data protection regulations and maintaining the confidentiality of sensitive data.
    * Creating a common language: Establishing standardized data definitions and terminology to facilitate clear communication and understanding across the organization.

* Various roles and responsibilities may be involved in implementing Data Governance initiatives, including:
    * Data Governance Officer or Data Steward: Oversees data governance activities and enforces policies and standards.
    * Data Quality Analyst: Monitors and improves data quality through regular assessments and remediation efforts.
    * Data Privacy Officer or Compliance Officer: Ensures compliance with data protection regulations and manages privacy risks.
    * Business Analyst or Data Analyst: Collaborates with stakeholders to define data requirements, implement data governance policies, and monitor the effectiveness of governance initiatives.

### Enterprise Data Categories:

* Metadata: Data that describes other data, providing information about the content, format, or structure of the data, such as table schema or data lineage.

* Transactional: Data generated from day-to-day business operations, such as sales records, purchase orders, or customer interactions.

* Unstructured: Data that lacks a predefined schema or structure, such as emails, documents, or multimedia files.

* Master data: Centralized, consistent data that represents an organization's critical business entities, such as customers, products, or suppliers.

* Reference data: Data that defines the permissible values or categories used in other data fields, such as country codes, currency codes, or product categories.

### Why do we need Master Data Management?

**MDM** helps organizations maintain a single, consistent view of critical business data, leading to improved data quality, reduced data redundancy, better decision-making, and increased operational efficiency.

MDM can be applied to various business scenarios, such as consolidating customer data, managing product information, or ensuring data consistency across multiple systems. Examples of MDM tools include Informatica MDM, SAP Master Data Governance, IBM InfoSphere MDM, and Talend MDM.

Important - The process of **Golden record** creation involves data enrichment (adding missing or additional information), cleansing (correcting errors and inconsistencies), matching (identifying and linking related records), merging (combining matched records), and survivorship (selecting the most accurate and up-to-date values for each attribute).

#### MDM Types

* Operational MDM: Focuses on managing master data in transactional systems, ensuring consistency, accuracy, and timely updates. It supports day-to-day business operations and decision-making.

* Analytical MDM: Involves managing master data in analytical systems such as data warehouses or data lakes. It focuses on providing a consistent, unified view of master data for reporting and analysis purposes.

#### MDM Techniques

MDM maturity models outline the stages of MDM implementation within an organization, ranging from simple, ad-hoc approaches to sophisticated, enterprise-wide solutions. Examples include:

* Excel-based: Using spreadsheets to manage master data, which is manual, error-prone, and lacks scalability.

* Standalone MDM tools: Implementing dedicated MDM software to manage master data within specific business domains, offering improved data management and governance. Examples: IBM InfoSphere, SAP MD Governance

* Custom implementation: Developing a tailored MDM solution that addresses unique organizational needs and integrates with existing systems, providing a more comprehensive and flexible approach to master data management.

### Data Protection Regulations

Be aware that these exists:

* GDPR (General Data Protection Regulation): A European Union regulation that governs the processing and handling of personal data, giving individuals greater control over their data and imposing strict requirements on organizations that process personal data.

* HIPAA (Health Insurance Portability and Accountability Act): A US regulation that sets standards for the protection of individuals' medical records and personal health information, applicable to healthcare providers, health plans, and other entities.

* CCPA (California Consumer Privacy Act): A California state law that grants consumers the right to know what personal information is collected, used, shared, or sold, and gives them the right to request deletion of their personal data.

* Related concepts:
    * PII (Personally Identifiable Information): Information that can be used to identify, contact, or locate an individual, such as name, address, or social security number.
    * PHI (Protected Health Information): Any information about an individual's health status, healthcare provision, or payment for healthcare that is created, collected, or transmitted by a HIPAA-covered entity.

#### Sensitivity based data classification

* Public: Data that can be freely accessed and shared without restrictions, such as public company information or publicly available research data.

* Internal: Data that is intended for use within an organization and may be shared among employees but not disclosed to external parties, such as internal reports or employee directories.

* Confidential: Data that requires a higher level of protection due to its sensitive nature, such as financial records, business plans, or intellectual property. Access to this data is typically restricted to specific individuals or groups within the organization.

* Restricted: Data that is subject to the strictest security controls and access limitations due to legal or regulatory requirements or potential severe consequences if compromised, such as classified government information, personally identifiable information (PII), or protected health information (PHI).




## FAQ

### What is a Source to Target Mapping document?

A set of data transformation instructions that determine how to convert the structure and content of data in the source system to the structure and content needed in the target system.

### What are ERD's?

The entity relationship diagrams are flowchart-like diagrams that explain the structure of entities, attributes, and their relationships in a database. They are mainly used for relational database design, and can be used to troubleshooting designs.

There are different notations that you might find: UML (unified modeling language), CHEN, CROW, IDEF1X...

### Modern components of modern data architecture

Databases, data flows, data warehouses, data lakes, and data marts.

### What are Data Flows?

Data flows refer to the movement of data from one system to another. This can include data flowing within a single application, or between different applications or systems. 

Data flows can be visualized and documented using data flow diagrams, which show the flow of data through a system. Data flows are a critical component of many data integration and ETL (Extract, Transform, Load) processes.

### Others

* A **conceptual data model** is the highest level, and therefore the least detailed. A **logical data model** involves more detailed thinking about the implementation without actually implementing anything. Finally, the **physical data model** draws on the requirements from the logical data model to create a real database.