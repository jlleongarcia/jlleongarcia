---
title: "Software Development Methodologies for DA's"
date: 2021-01-23T23:20:21+01:00
draft: true
tags: ["Career"]
description: 'Software development methodologies in Analytics.'
summary: 'Reviewing software development methodologies - Understanding them and choosing the right one will provide a systematic, efficient, and quality-oriented way of working on a software project.'
url: 'software-development-methodologies-data-analytics'
---

# Understanding Software Development Methodologies

<!-- Basic understanding of SDLC (phases, roles, responsibilities, artefacts).
Basic understanding of Agile and Waterfall   methodologies (process, roles, responsibilities, events, artefacts).

Solid knowledge of Agile and Waterfall methodologies.
Clear understanding of BA’s role & responsibilities in Agile vs Waterfall.
Ability to drive Scrum ceremonies (refinement, planning, demo).

Ability to define and produce BA deliverables across different methodologies and project phases.
Ability to establish/enhance a BA process on a project.
Ability to act as a proxy Product Owner. -->

It is a structured approach that follows a design philosophy and a sequence of steps that guide developers through each stage of development.

**Well-managed projects are successful projects.**

When working in a team, the management or development team must select the software development methodology that will be most effective for the project at hand if they are to manage the project effectively. Every methodology differs in its strengths and shortcomings as well as the motivations for its creation. The most popular software development techniques are described below, along with an explanation of why they exist.

## Agile Development Methodology

When implementing new features, teams employ the agile development technique to reduce risk (such as errors, budget overruns, and changing needs). Teams create software in iterations that include tiny increments of new functionality according to all agile development methodologies.

There are many different forms of the agile development method:
* Scrum
* Crystal
* Extreme programming (XP)
* Feature-driven development (FDD)...

* PROS: Agile software development's main advantage is that it enables iterative software releases. Iterative releases increase productivity by enabling teams to identify and correct flaws and set expectations early on. With regular incremental enhancements, they also enable consumers to enjoy the benefits of software earlier.

* CONS: Agile development methodologies focus on in-the-moment communication, thus new users frequently lack the necessary background information to get started. They are time- and labor-intensive because developers must finish each feature inside each iteration before asking users for approval.

* Features: Time is not constrained, Money is not constrained, Features are the constrain. Develop until features are enough for the use case.

### Agile Values

* Individuals & Interactions
* Working Software
* Customer collaboration
* Responding to change

### Agile Frameworks

* Scrum: Scrum is a widely-used agile framework that emphasizes iterative development, frequent inspection and adaptation, and a collaborative approach. Scrum teams work in short sprints to deliver working software, and use ceremonies such as sprint planning, daily stand-ups, sprint reviews, and retrospectives to help manage the development process.

* Kanban: Kanban is an agile framework that focuses on visualizing the workflow, limiting work in progress, and managing flow. Kanban teams use a Kanban board to visualize the work, and use techniques such as WIP limits and pull systems to manage the flow of work through the development process.

* Extreme Programming (XP): XP is an agile framework that emphasizes technical excellence, continuous testing, and continuous delivery. XP teams work in short iterations to deliver working software, and use practices such as pair programming, test-driven development, and continuous integration to ensure quality and maintainability.

* Lean: Lean is an agile framework that emphasizes minimizing waste, optimizing flow, and maximizing value. Lean teams focus on delivering value to the customer, and use techniques such as value stream mapping, just-in-time delivery, and continuous improvement to optimize the development process.

### Agile Software Development

* Pre-Coding activities: **DoR** - Definition of Ready
* Coding
* Code Review
* Other Development Activities
    * Knowledge sharing
    * Technical debt management

## Waterfall Development Methodology

The waterfall method is frequently regarded as the oldest approach to software development. The requirements, design, implementation, verification, and maintenance phases of the waterfall technique each focus on a different objective. Before moving on to the following phase, each phase must be finished completely. In most cases, there is no procedure for going back and changing the project or direction.

PROS: The waterfall development process is simple to comprehend and administer due to its linear character. The waterfall method works well for projects with precise goals and consistent criteria. The waterfall development process may be most advantageous for teams with less expertise, less stable team compositions, and project managers.

CONS: The rigorous structure and stringent constraints of the waterfall development process make it frequently expensive and slow. Users of the waterfall technique may look into alternative software development methodologies as a result of these drawbacks.


## FAQ

### About Technical Debt

* Delivery indicators
    * Quality degradation
    * high cost of change
    * Unable to experiment quickly
    * Increase barriers to entry
* Arquitecture indicators
    * Hard to integrate
    * to reuse
    * to grow
    * to support
* Team indicator
    * Delays
    * Low levels of confidence in scope of estimation
    * Demotivation

### Evaluate Source Code

You can use SonarQube <https://hub.docker.com/_/sonarqube/tags>

### CI/CD

Continuous Integration/Continuous Delivery (CI/CD) is a key part of agile software development. CI/CD is a set of practices that involves regularly integrating and testing code changes, and automating the process of deploying changes to production. 

CI/CD helps to ensure that the code is always in a releasable state, and allows teams to rapidly and reliably deliver changes to customers. 

By integrating CI/CD practices into their development process, agile teams can improve quality, speed, and efficiency, and deliver value to customers more quickly and with greater confidence.

* The deployment in CI/CD typically involves the following steps:
    * Version Control: The application codebase is stored in a version control system like Git, enabling multiple developers to work collaboratively and track changes over time.
    * Continuous Integration: Developers regularly merge their code changes into a shared repository. This triggers an automated build process that compiles the code, runs tests, and generates artifacts.
    * Automated Testing: Various types of tests, such as unit tests, integration tests, and acceptance tests, are executed automatically to ensure that the application meets quality standards and functions as expected.
    * Artifact Management: The built artifacts, such as executable files, libraries, or container images, are stored in a repository or artifact management system, allowing them to be versioned and easily accessed for deployment.
    * Continuous Deployment/Delivery: The validated and tested artifacts are deployed to the target environment, such as development, staging, or production. This step can involve different deployment strategies, including blue-green deployments, canary releases, or rolling updates, depending on the organization's requirements.
    * Infrastructure as Code: Infrastructure provisioning and configuration are automated using tools like Terraform or Ansible, enabling the consistent and reproducible creation of infrastructure resources required for the application.
    * Orchestration and Release Management: Continuous deployment is often orchestrated using tools like Jenkins, GitLab CI/CD, or Azure DevOps, which automate the release process and manage the deployment pipeline.
    * Monitoring and Feedback: Continuous monitoring and logging mechanisms are set up to gather insights into the application's behavior and performance in the deployed environment. This feedback loop helps detect issues and gather metrics for further improvement.

#### CI/CD Tools

* Build automation tools: like **Jenkins**, Travis CI, CircleCI, or Azure Pipelines are used to automate the build process, compiling source code, running tests, and generating artifacts.

* Artifact Management: Tools like JFrog Artifactory, Nexus Repository, or **Docker Registry** manage the storage and versioning of built artifacts, making them easily accessible for deployment.
    * GitHub Container Registry (GHCR) is a specific artifact management tool provided by GitHub that focuses on container images.
    * Another examples: Google Container Registry, Amazon Elastic Container Registry (ECR) or Azure Container Registry (ACR)

* Configuration Management: Tools like **Ansible**, Chef, or Puppet enable the automation and management of infrastructure and application configurations, ensuring consistency across different environments.

* Continuous Integration (CI) Servers: CI servers like Jenkins, GitLab CI/CD, or Azure DevOps automate the continuous integration process, triggering builds and tests upon code changes, facilitating collaboration, and providing visibility into the build status.

* Containerization and Orchestration: Tools like **Docker** and Kubernetes enable the creation, deployment, and orchestration of containerized applications, promoting portability, scalability, and reproducibility of deployments.

* Monitoring and Logging: Tools like Prometheus, ELK Stack (Elasticsearch, Logstash, Kibana), or Splunk provide monitoring and logging capabilities, allowing teams to monitor application health, performance, and log data to identify issues and gather insights.

#### Why using CI/CD Tools?

CI/CD (Continuous Integration/Continuous Deployment) practices and tools contribute to achieving a more efficient and reliable deployment process, which can align with the goals of a *perfect deployment*.

* Some ways CI/CD helps in achieving a better deployment:
    * Faster Feedback: CI/CD enables frequent and automated builds, tests, and deployments, allowing developers to receive rapid feedback on the quality and functionality of their code. This helps identify issues early on, reducing the time taken to address them and preventing potential deployment failures.
    * Consistency and Reproducibility: CI/CD ensures that the deployment process is consistent and repeatable across different environments. By automating the entire process, including build, test, and deployment steps, it reduces the chance of manual errors and ensures that deployments are consistent and reproducible.
    * Continuous Integration: CI enables developers to regularly merge their code changes into a shared repository. This practice promotes early detection of integration issues, ensuring that conflicts or incompatibilities are identified and resolved promptly. It helps maintain a stable codebase and improves collaboration among team members.
    * Automated Testing: CI/CD incorporates automated testing, including unit tests, integration tests, and other types of tests, as part of the deployment pipeline. This ensures that code changes are thoroughly tested before being deployed, reducing the risk of introducing bugs or regressions into the production environment.
    * Continuous Deployment: CD automates the deployment process, ensuring that validated and tested code changes are deployed to the target environment in a controlled manner. Continuous deployment enables faster and more frequent releases, reducing the time between feature development and its availability to end-users.
    * Rollback and Recovery: CI/CD pipelines typically include rollback mechanisms and version control, allowing for quick and controlled rollbacks in case of deployment issues or failures. This enables teams to revert to a previous working version swiftly and minimize downtime or impact on users.
    * Continuous Improvement: CI/CD promotes a culture of continuous improvement by allowing teams to iteratively refine their deployment process. Feedback from deployments, monitoring, and user experiences helps identify areas for optimization, leading to gradual enhancements in the deployment pipeline and the overall deployment quality.