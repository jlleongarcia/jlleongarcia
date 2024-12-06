---
title: "How to get Started with SQL"
date: 2020-07-17T23:20:21+01:00
Lastmod: 2022-11-17
draft: false
tags: ["Dev"]
description: 'SQL starting guide that will make your road to Data Analytics easier.'
summary: 'I have been compiling the most recurrent SQL queries that you will require in your first job as a data analyst. Master these and you will make a great progress with your analytical skills.'
url: 'sql-data-analytics'
---

<!-- 
declarative programming language (not procedural! - you dont have to tell it (the procedure) how to do it, the query engine worries about the how for you)
great for data management, manipulation and analytics
relational data model -->

## The SQL Guide

**SQL is a programming language** used for managing and manipulating data in databases. It is used for creating, updating, and deleting data in databases, as well as for querying data from databases.

It can be used to retrieve data from multiple tables, perform calculations on the data, and update or delete data in a database.

SQL can also be used to create stored procedures, triggers, and views, and is an essential tool for data analysis, data migration, and data integration.

## SQL Concepts

<!-- SQL: Basic retrieval techniques

SQL | **DDL**, DQL, DML, DCL and TCL Commands


The SELECT statement (purpose, syntax).
Set operations (union, union all, intersect, minus).
Joins (inner, outer (left, right, full), Cartesian product).
Subqueries (returning one row, many rows, many columns).
DML constructions - INSERT, UPDATE, DELETE, MERGE, TRUNCATE.
DDL constructions - CREATE, ALTER, DROP.
Basic database theory

Understanding of the basics of relational databases.
Differentiating between a database and a DBMS.
Differentiating between PK, FK, and candidate keys.
Understanding of relationship types (1-to-1, 1-to-many, many-to-many). -->
<!-- 
SQL: Basic retrieval techniques

The SELECT statement (purpose, syntax).
Set operations (union, union all, intersect, minus).
Joins (inner, outer (left, right, full), Cartesian product).
Subqueries (returning one row, many rows, many columns).
DML constructions - INSERT, UPDATE, DELETE, MERGE, TRUNCATE.
DDL constructions - CREATE, ALTER, DROP.
Basic database theory

Understanding of the basics of relational databases.
Differentiating between a database and a DBMS.
Differentiating between PK, FK, and candidate keys.
Understanding of relationship types (1-to-1, 1-to-many, many-to-many). -->

<!-- 
The main concepts of SQL include tables, relationships, ordinality, cardinality, functions, common table expressions (CTEs), recursive CTEs, temporary functions [2], and string formatting. SQL also has several different types of functions [3], such as scalar functions, which take a single value and return a single value [3]. Understanding these concepts is essential for working with databases. -->

### DDL - Data Definition Language

Is a subset of SQL. It is a language for describing data and its relationships in a database:

* CREATE : to create objects in database
* ALTER : alters the structure of database
* DROP : delete objects from database (REMOVES THE ENTIRE TABLE AND STRUCTURE)
* TRUNCATE: removes the data (rows) but preserves the structure
* RENAME : rename an objects

### DML - Data Manipulation Language

Used for adding (inserting), deleting, and modifying (updating) data in a database:

* SELECT: retrieve data from the database
* INSERT: insert data into a table
* UPDATE: update existing data within a table
* DELETE: deletes all records from a table, space for the records remain

### DCL - Data Control Language 

Used to control access to data stored in a database (authorization):

* GRANT: allow specified users to perform specified tasks. 
* REVOKE: cancel previously granted or denied permissions.

### TCL - Transaction Control Language

* COMMIT: Commit command is used to permanently save any transaction into the database.
* ROLLBACK: This command restores the database to last committed state. It is also used with savepoint command to jump to a


## SQL Quick Guide

A view is a virtual table that it is the result of a saved SQL **Select** Statement. You can query them later just like a normal table.

```sql
CREATE VIEW your_view as
SELECT * FROM your_table;
```

### Filtering

```sql
SELECT * FROM Clients
WHERE Name='Yosua';
```

```sql
SELECT * FROM Clients
WHERE Name='Yosua' AND Nick='Cerdo' OR Job='Dr.Yosua';
```

### Aggregations

* Count(CustomerID) - Include records with values only
* Count(*) - It considers as well the null/missing values
  * You can use it together with: WHERE column IS NOT NULL statement

```sql
SELECT Region, COUNT(CustomerID)
FROM Clients
GROUP BY Region
ORDER BY COUNT(CustomerID) DESC;
```

### Unions

UNION combines the results of two or more SELECT queries vertically (appending rows), while a JOIN combines rows from two or more tables horizontally (adding columns) based on a related column between them.

The UNION operation is used to combine the results of two or more SELECT queries into a single result set. It eliminates duplicate rows from the results.

Each SELECT query within the UNION must have the same number of columns and those columns must have similar data types.

The columns in each SELECT statement must also be in the same order. The UNION operator is used when you want to combine rows from similar tables or datasets, essentially stacking the results vertically.

**For example,** if you have two tables - "Sales2019" and "Sales2020" - with the same structure, and you want to create a list of all unique customers in both years, you could use a UNION to do this.

```sql
SELECT CustomerName FROM Sales2019
UNION
SELECT CustomerName FROM Sales2020;
```

### The Joins

But what are joins?

{{< tweet user="stratebi" id="1231889201198772224" >}}


### HAVING AND WHERE

You can use WHERE to prefilter the input that your HAVING statement will find.
Remember that where will not work with aggregated functions and it will be having the go to when we want to filter the output from a group by.


```sql
SELECT Region, COUNT(Boquitas), AVG(Cerdeza)
FROM Clients
WHERE Job like 'Dr.%'
GROUP BY Region
HAVING COUNT(Boquitas) > 5
ORDER BY COUNT(Boquitas) DESC;
```

So, using both clauses in the same query allows you to apply filtering conditions both before and after aggregation, providing you with precise control over the data you retrieve.

### Window Functions

A SQL window function is a function that operates on a set of rows within a result set, also known as a window. Window functions are often used to calculate running totals, moving averages, and other aggregations over a set of rows.

Window functions are similar to aggregate functions, but they operate on a subset of the rows in the result set, rather than the entire result set. This makes them more flexible than aggregate functions, as they can be used to calculate aggregations over a specific range of rows, such as the previous 10 rows or the next 20 rows.

Window functions are also **more efficient than aggregate functions**, as they only need to calculate the aggregation for the rows in the window, rather than for the entire result set.


* Window Functions: RANK(), ROW_NUMBER(), LEAD(), LAG(), OVER(), PARTITION BY.


#### SUM -> Rolling Sum

```sql
SELECT o.occurred_at,
       SUM(o.gloss_qty) OVER(ORDER BY o.occurred_at) as running_gloss_orders
  FROM demo.orders o
```

#### ROW_NUMBER -> Get the first element from every group

```sql
  WITH
	order_ranks as (
	   SELECT o.id,
	          o.account_id,
	          o.gloss_qty,
	          o.gloss_amt_usd,
	          ROW_NUMBER() OVER(PARTITION BY o.account_id 
                           ORDER BY o.occurred_at DESC) as acct_order_rank
      FROM demo.orders o
)

	SELECT *
	 FROM  order_ranks
    WHERE  acct_order_rank = 1
```


#### LAG -> Events occurred before


```sql

```

```sql
 SELECT o.id,
            o.occurred_at,
	        o.gloss_qty,
	        LAG(gloss_qty,1) OVER(ORDER BY o.occurred_at) as order_lag_1,
	        LAG(gloss_qty,2) OVER(ORDER BY o.occurred_at) as order_lag_2,
	        LAG(gloss_qty,3) OVER(ORDER BY o.occurred_at) as order_lag_3
     FROM   demo.orders o
```

#### RANK

The oldest Symbol per GICS:

```sql
WITH RankedSectors AS (
    SELECT 
        Symbol, 
        "GICS Sector", 
        Founded,
        RANK() OVER (PARTITION BY "GICS Sector" ORDER BY Founded ASC) as Rank
    FROM df
    WHERE Founded IS NOT NULL
)
SELECT 
    Symbol, 
    "GICS Sector", 
    Founded
FROM RankedSectors
WHERE Rank = 1;
```


```sql
WITH AlphabeticalSectors AS (
    SELECT 
        Symbol, 
        "GICS Sector",
        Founded,
        RANK() OVER (PARTITION BY "GICS Sector" ORDER BY Symbol ASC) as Rank
    FROM df
)
SELECT 
    Symbol, 
    "GICS Sector", 
    Founded
FROM AlphabeticalSectors
WHERE Rank = 1;
```



{{< tweet user="iamsimuna" id="1581816237301956609" >}}

<!-- SQL: Data definition and indexing

Stages of SQL execution.
Hierarchical queries basics.
Nested SELECT queries (select from select).
Data comparison and transformation.
Basic aggregate functions.

Database fundamentals 

Awareness of different DB types.
Understanding of the purpose of DB objects (view, materialized view, index, trigger, synonym).
Understanding of constraint types (referential integrity, NOT NULL, unique, etc).
Understanding of cardinality constraints.
Understanding of normalization (1-2-3 NF).
Understanding use-cases for Normalization and Denormalization. -->

<!-- ### OPTIMIZATION:
USE INDEXES, PARTITION KEYS ON THE COLUMNS THAT ARE GOING TO BE USED AND ARE UNIQUE TO AVOID DATA SKEW
USE HASHDIFF  AND HASHES

SET STATISTIC TIME ON 
SET STATISTICS TIME OFF 
 -->
<!-- 
 Use Alias Name
Aliasing renames a table or a column temporarily by giving another name. The use of table aliases means renaming a table in a specific SQL statement. Using aliasing, we can provide a small name to a large name which will save us time.  -->

### CTE

Common Table Expression (CTE): A CTE is defined using a WITH clause at the beginning of a query, followed by a subquery enclosed in parentheses. It's like creating a temporary result set that you can reference within the main query.

In SQL, a WITH statement, also known as a Common Table Expression (CTE), is used to define a temporary result set that can be referred to within the context of a SELECT, INSERT, UPDATE, or DELETE statement. 

Common Table Expressions provide a way to break down complex queries into more manageable, named, and often recursive parts.



The basic syntax of a WITH statement or CTE is as follows:


```sql
WITH cte AS (
    SELECT column1, column2
    FROM your_table
)
SELECT *
FROM cte;

```

```sql
WITH cte_name (column1, column2, ...) AS (
    -- CTE query definition
    SELECT ...
    FROM ...
    WHERE ...
)
-- Main query that uses the CTE
SELECT ...
FROM cte_name
WHERE ...

```

* cte_name: This is the name you give to the Common Table Expression. It's like a temporary table name that you can use within the current SQL statement.

* (column1, column2, ...): You can optionally specify the column names that the CTE will return. This is useful if you want to define and name specific columns in the CTE.

* AS: This keyword is used to introduce the CTE query definition.

* CTE Query Definition: This is where you define the SELECT statement that forms the CTE. It can reference other tables and CTEs, and it's evaluated only once, creating a temporary result set that can be used in subsequent parts of the query.

* Main Query: After defining the CTE, you can use it within the main query. You reference the CTE by its name (cte_name) as if it were an actual table or subquery. This allows you to build complex queries step by step.

```sql
WITH CategorySales AS (
    SELECT
        product_category,
        SUM(sales_amount) AS total_sales
    FROM sales
    GROUP BY product_category
)
SELECT *
FROM CategorySales
WHERE total_sales > 10000;

```

**CTEs can enhance the readability** of complex queries by separating the subquery logic from the main query. This can make the SQL code more structured and easier to understand, especially for large and complex queries.

### Subqueries

A subquery is a query nested within another query (usually in the SELECT, FROM, WHERE, or HAVING clause). It's enclosed within parentheses and can be used directly in the main query.

```sql
SELECT column1, column2
FROM your_table
WHERE column1 IN (SELECT column1 FROM another_table);

```

A subquery, also known as a nested query, is a query nested inside another SQL query. Subqueries are used to retrieve data based on the results of another query. Subqueries can appear in various parts of a SQL statement, including the SELECT clause, FROM clause, WHERE clause, and HAVING clause. Here's an example of a subquery in the WHERE clause:

Let's say we have two tables: `employees` and `departments`. The `employees` table contains information about employees, including their department, and the `departments` table contains information about departments, including their budget.

Suppose you want to retrieve all employees from the "Sales" department whose salaries are greater than the average salary in the "Sales" department. You can use a subquery for this purpose:

```sql
SELECT employee_name, department, salary
FROM employees
WHERE department = 'Sales' AND salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = 'Sales'
);
```

In this example:

1. The main query retrieves employee information for the "Sales" department (`WHERE department = 'Sales'`).

2. Inside the WHERE clause of the main query, there's a subquery `(SELECT AVG(salary) FROM employees WHERE department = 'Sales')`. This subquery calculates the average salary of employees in the "Sales" department.

3. The main query compares each employee's salary to the result of the subquery (`salary > ...`). It retrieves employees whose salary is greater than the average salary in the "Sales" department.

The subquery is executed for each row returned by the main query, allowing you to filter the main query's results based on dynamic calculations using data from the same or related tables.

Subqueries can be powerful tools for extracting data based on conditions or calculations involving other rows or tables, and they are a fundamental part of SQL for complex data retrieval and manipulation tasks.

---

## FAQ

### SQL Style Guide

* <https://www.sqlstyle.guide/>

### Useful Concepts for SQL

Some **Data Modelling concepts** great to keep in mind for SQL.

* **Normalization** is a process of organizing data in a database in a way that **minimizes redundancy and dependency**.
  * Redundancy is when the same data is stored in multiple places in the database. This can lead to problems, such as data inconsistency and wasted space. Dependency is when one piece of data depends on another piece of data. This can also lead to problems, such as data integrity issues.
  * Normalization is a process used in database design to arrange data efficiently and logically. Just as grouping books by genre or author helps readers find what they’re looking for, **normalization involves breaking down data into smaller, related tables** and reducing redundancy.
  * Key Aspects:
    * **Reduces Redundancy**: Limits duplicate data by separating data into different tables.
    * Improves Data Integrity: Ensures data accuracy and consistency.
    * Facilitates Database Maintenance: Easier to update data in one place than in multiple places.
    * Structured Approach: Follows a series of rules (normal forms) to structure the database.
    * Great for **WRITE** operations ~ **OLTP**

* **Denormalization** is the process of combining normalized tables to improve read performance, at the expense of write performance and data redundancy. It’s often used in **data warehousing** and reporting scenarios where high-performance data retrieval (**READ** operations) is more critical than the efficiency of data updates (write operations).
  * Key Aspects:
    * Increases Redundancy: Adds back some redundancy to reduce the number of joins.
    * Improves Read Performance: Fewer joins can lead to faster query response times.
    * Sacrifices Write Efficiency: More complex to update data as changes might need to be replicated across multiple rows or tables.
    * **Useful for Reporting and Analysis**: Often used in systems where data is read much more frequently than it is updated.
    * Is about improving **READ** performance ~ **OLAP** often at the expense of increased data redundancy and potentially more complicated data maintenance.

* Long Tables ~ Normalize ~ WRITE
  * Normalization: They adhere to data normalization principles, which minimizes data redundancy and improves data integrity.
  * Flexibility: They are flexible for storing different types of data points without extensive table restructuring. Adding new data points (e.g., new product category) usually involves adding a new column.
  * Smaller file size: For the same amount of data, they can have a smaller file size due to less data duplication.
  * Complexity for some visualizations: Joining columns can be necessary for some visualizations, requiring additional steps and potentially affecting performance in BI tools.
* Wide Tables ~ Denormalize ~ READ
  * Structure: Wide tables have a structure with fewer rows and many columns. Each row still represents a single data point, but each column often represents a combination of attributes or a specific metric for a particular data point.
  * Simpler for visualizations: Relationships between variables are readily available in separate columns, making it easier to create some visualizations without additional calculations in the BI tool.
  * Faster performance: Since calculations are often pre-done and stored in separate columns, querying data for visualizations can be faster in BI tools.
  * Easier for exploring relationships: Having various metrics readily available in separate columns can be more intuitive for exploring relationships between those metrics.
  * Data redundancy: Repeated calculations and values across rows can lead to data redundancy and larger file sizes.
  * Normalization issues: They may violate data normalization principles, potentially increasing the risk of data inconsistencies.

* For **Data Warehousing**, "dimensions" and "facts" are fundamental concepts used in designing and organizing data for analytical and reporting purposes. These concepts are central to the creation of a star schema or snowflake schema.
  * **Dimension Tables**:
    * Definition: Dimension tables contain descriptive attributes or textual information about the business entities being analyzed. They provide context for the measures stored in fact tables.
    * Examples: In a sales data warehouse, dimension tables might include tables for customers, products, time (e.g., date, month, year), geography (e.g., regions, cities), and so on.
    * Attributes: Dimension tables have attributes that are used for filtering, grouping, and labeling data. These attributes are often used as criteria in queries.
  * **Fact Tables**:
    * Definition: Fact tables store quantitative data or "facts" that represent the measurable aspects of a business. These facts are typically numeric values, such as sales revenue, quantity sold, or profit.
    * Examples: In a sales data warehouse, a fact table might contain data on sales transactions, with measures like revenue, quantity, and cost.
    * Foreign Keys: Fact tables often contain foreign keys that link to dimension tables, providing a way to join the fact data with the descriptive attributes from dimension tables.
    * Granularity: Fact tables have a level of granularity that defines the level of detail at which the facts are stored. For example, daily sales or monthly sales.
  * Star Schema and Snowflake Schema:
    * **Star Schema**: In a star schema, dimension tables are connected directly to the fact table, forming a star-like structure. This simplifies query design and provides fast query performance.
      *  In a Star Schema, dimension tables **are denormalized**, meaning that they often contain redundant data to reduce the number of joins required for queries.
    * **Snowflake Schema**: A snowflake schema is a variation of the star schema where dimension tables are normalized into sub-dimensions. This can reduce redundancy but may require more complex queries.
      *  In a Snowflake Schema, dimension tables are **further normalized**, meaning they are organized into sub-dimensions, which reduces data redundancy but can lead to more complex query designs with additional joins. 

* Primary Keys, Foreign Keys, and Indexes:
  * Primary Key: A primary key is a column or a set of columns in a database table that uniquely identifies each row. It enforces data integrity and ensures that each row has a unique identifier.
  * Foreign Key: A foreign key is a column or a set of columns in one table that refers to the primary key of another table. It establishes relationships between tables.
  * Indexes: Indexes are database structures that improve data retrieval speed by providing a fast path to locate rows in a table. They can be created on columns that are frequently used in search conditions.

### What are the uses of Indexes in SQL? Pros & Cons

Indexes in SQL are used to improve the performance of database queries by allowing for efficient data retrieval. They provide a way to quickly locate specific rows in a table based on the values of one or more columns. Here are some uses, pros, and cons of using indexes in SQL:

* Uses of Indexes:
  * Faster Data Retrieval: Indexes speed up the query execution process by reducing the number of disk I/O operations required to locate the desired data.
  * Improved Query Performance: Indexes help optimize query plans, allowing the database engine to execute queries more efficiently.
  * Constraint Enforcement: Indexes can be used to enforce unique constraints and primary key constraints, ensuring the integrity of data.

* Pros of Indexes:
  * Faster Query Execution: Indexes can significantly speed up the execution of SELECT statements, especially when dealing with large tables.
  * Improved Data Search: Indexes enable quick data lookup based on specific column values, making search operations more efficient.
  * Enhanced Sorting and Grouping: Indexes can improve the performance of sorting and grouping operations in queries.

* Cons of Indexes:
  * Increased Storage Space: Indexes require additional storage space to store the index data structures. This can be a concern for large databases or tables with many indexes.
  * Overhead on Write Operations: When data is modified (inserted, updated, or deleted), indexes must be updated accordingly, which adds overhead to write operations and can impact overall performance.
  * Index Maintenance: Indexes need to be maintained and periodically rebuilt or optimized to ensure optimal performance. This maintenance operation can consume system resources and may impact database availability during the process.

Indexes can significantly improve query performance by reducing the time it takes to locate and retrieve specific rows from a table.
However, indexes also consume storage space and can slow down data modification operations like INSERT, UPDATE, and DELETE.  

It's important to note that the decision to create an index should be based on careful analysis of the specific workload and query patterns of your application. Over-indexing or creating unnecessary indexes can have negative consequences on overall performance. Therefore, it's crucial to **strike the right balance between indexing and query optimization** based on the specific needs of your application.


### Optimizing SQL Queries

<!-- 
### Optimizing your SQL Queries

* Select ONLY the columns that you need 
    * AVOID SELECT * 
    * AVOID SELECT DISTINCT 
* Use LIMIT (or equivalent in your SQL version)
* AVOID: too many joins, or, and -->

Optimizing SQL queries can help to improve the performance of a database and the applications that use it.

Efficient SQL queries consider factors like the use of indexes, appropriate join strategies, and minimizing data retrieval.

Avoiding unnecessary subqueries and reducing the number of rows processed can improve efficiency.

* Some best practices for SQL query optimization are:
  *  Use WHERE clauses instead of HAVING clauses to define filters.
  *  Use SELECT <columns> instead of SELECT *.
  *  Avoid running queries in a loop.
  *  Simplify joins.
  *  Use indexes whenever possible.
    * An index consists of a data structure that stores a sorted copy of selected columns from a table.
    * It includes a reference to the original table's rows, which makes it possible to quickly locate specific rows that match a given search criterion.
    * Faster Data Retrieval: Indexes allow the database engine to quickly locate the rows that satisfy a query's WHERE clause conditions.
    * Efficient Sorting: Indexes can speed up sorting operations (e.g., ORDER BY clauses) because the data is already sorted in the index.
    * Enhanced JOIN Performance: Indexes can improve the performance of JOIN operations when joining multiple tables.
    * Over-indexing (too many indexes) can lead to performance degradation during data modification operations.
  *  Avoid using multiple OR conditions in the WHERE clause.
  *  Avoid using subqueries in the WHERE clause.
  *  Avoid using cursors and temporary tables.
  *  Avoid using functions in the WHERE clause.
  *  Use the EXPLAIN command to view the query execution plan
	* Use Appropriate Naming Convention
	* Keep Wild cards at the End of Phrases
	* Avoid Cursors
		* A cursor is a temporary work area created in the system memory when a SQL statement is executed. A cursor is a set of rows together with a pointer that identifies a current row. It is a database object to retrieve data from a result set one row at a time. But the use of a cursor is not good because it takes a long time because it fetches data row by row.
		* So we can use a replacement of cursors. A Temporary table, For or While loop may be a replacement for a cursor in some cases.
  * Union vs Union ALL:
    * When using the UNION statement, keep in mind that, by default, it performs the equivalent of a SELECT DISTINCT on the final result set. In other words, UNION takes the results of two like recordsets, combines them, and then performs a SELECT DISTINCT to eliminate duplicate rows. This process occurs even if there are no duplicate records in the final record set.
    * If you know there are duplicate records, which presents a problem for your application, then use the UNION statement to eliminate the duplicate rows.
    * On the other hand, if you know that there will never be any duplicate rows, or if there are, and this presents no problem to your application, then you should use the UNION ALL statement instead of the UNION statement. The advantage of the **UNION ALL is that it does not perform the SELECT DISTINCT** function, which saves a lot of unnecessary SQL Server resources from being used. 

<!-- 
    https://www.c-sharpcorner.com/UploadFile/788083/transact-sql-query-performance-tuning-tips/
    https://www.c-sharpcorner.com/UploadFile/f0b2ed/tips-to-increase-sql-server-query-performance-part-2/ -->


### TRINO SQL (ex-Presto SQL)
<!-- 

https://www.youtube.com/watch?v=SnvSBYhRZLg
https://www.youtube.com/watch?v=SnvSBYhRZLg 

https://trino.io/docs/current/connector.html
https://trino.io/ecosystem/index.html

    User-Defined Functions (UDFs): You can create custom UDFs in Trino using Java or other supported languages, and then you can use these functions within your SQL queries. UDFs allow you to encapsulate custom logic and apply it to your data.

    Conditional Logic: Trino supports various conditional statements like CASE WHEN, IF, and COALESCE, which allow you to implement branching and conditional logic within your queries.

    Loops and Iterations: While Trino does not have traditional loop constructs, you can use recursive queries and recursive common table expressions (CTEs) to achieve some level of iteration and recursion in your SQL queries.

    Expression Evaluation: Trino provides a wide range of built-in functions and expressions, allowing you to perform calculations, string manipulation, and other operations within your SQL queries.
    
    -->

* https://github.com/trinodb/trino



Open Source, **Distributed**, paralell processing, SQL query language.

Let the platform run TRINO (bring your data) - https://www.starburst.io/platform/starburst-galaxy/

Data from where? https://trino.io/ecosystem/data-source.html

From Kafka, to MariaDB, Google Sheets, MongoDB, DRUID, Prometheus...

Object S torage: HDFS, amazon S3, GCS

With trino, you will have SQL for these data sources, even if they dont do it natively.

(You can also SelfHost TRINO.)

And...you can run ML - https://trino.io/docs/current/functions/ml.html

You like JSON? https://trino.io/docs/current/functions/json.html



Catalog - the configuration to acess a data source (you can have as many catalogs as needed)

with trino you access catalogs (you query the catalog, not the DS directly)

Connector - a tool used in the catalog to read and writes data to the DS

Tabular data format - 
1 catalog - 1/1+ schema
1 schema - 1/1+ table

You are using a cluster of servers to process the queries

```sql
FROM "catalog.schema.table"

SHOW CATALOGS;
SHOW TABLES FROM catalog.schema

SHOW FUNCTIONS like 'concat%'
```

#### Trino Clients

* https://trino.io/ecosystem/client.html

* Redash
* Superset
* Metabase
* Grafana

* Python or R... https://github.com/trinodb/trino-python-client


<!-- 
https://github.com/dbeaver/dbeaver
https://github.com/pgadmin-org/pgadmin4 -->


### Other Interesting F/OSS DBMS's

* [DuckDB](https://github.com/duckdb/duckdb) ~ OLAP
  * [Huey](https://github.com/rpbouman/huey) an UI for DuckDB
  * GetHue - https://hub.docker.com/r/gethue/hue/tags - Hue is an open source SQL Assistant for Database & Data Warehouses. - https://github.com/cloudera/hue

```sh
docker run -d -p 8888:8888 gethue/hue:latest
```