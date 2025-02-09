---
title: DevOps Tools
type: docs
prev: /docs/gcp/
next: docs/ansible/
draft: true
---

Crontab for Docker - https://github.com/mcuadros/ofelia

## CI/CD

### Github CI/CD

### How to Self-Host Jenkins?

We have all been new to CI/CD at some point.

If you want to tinker with Jenkins, a great way is to [Self-Host Jenkins with Docker](https://fossengineer.com/selfhosting-jenkins-ci-cd/).

## Ansible

> It's all about the playbook

<!-- UI: ansible semaphore
<https://www.youtube.com/watch?v=NyOSoLn5T5U>
<https://github.com/ChristianLempa/videos/tree/main/ansiblesemaphore-tutorial> -->

<!-- 
and terraform? -->

Ansible is an open-source software provisioning, configuration management, and application-deployment tool. It is used to automate repetitive tasks such as configuration management, application deployment, and intra-service orchestration. Ansible uses a simple syntax written in YAML called playbooks, which allows you to describe automation jobs in a way that approaches plain English.

Docker, on the other hand, is an open-source platform that automates the deployment, scaling, and management of applications. It does this through containerization, which is a lightweight form of virtualization. Docker allows developers to package an application with all of its dependencies into a standardized unit for software development. This ensures that the application will run the same, regardless of the environment it is running in.

Ansible and Docker are both powerful technologies that are widely used in the field of software development and operations (DevOps). They serve different but complementary purposes.

These two tools can work together in a few different ways:

* Ansible can manage Docker containers: Ansible can be used to automate the process of managing Docker containers. Ansible has modules like docker_image and docker_container which can be used to download Docker images and to start, stop, and manage the life cycle of Docker containers.
* Ansible can be used to install Docker: You can write an Ansible playbook to automate the process of installing Docker on a server.
* Docker can run Ansible: You can create Docker containers that have Ansible installed. This might be useful if you want to run Ansible commands or playbooks inside a Docker container for testing or isolation.

In a typical DevOps pipeline, *Docker can be used for creating a reproducible build and runtime environment* for an application, while **Ansible can be used to automate the process of deploying that application** across various environments. This combination can help teams create efficient, reliable, and reproducible application deployment pipelines.



```sh
apt install ansible
ansible --version
```



## Kubernetes

## Monitoring

### Grafana

### NetData

[SelfHost NetData with Docker](https://fossengineer.com/selfhosting-server-monitoring-with-netdata-and-docker/)


* [Redis](https://www.youtube.com/watch?v=qucL1F2YEKE)
* SandStorm [SelfHost WebApps](https://docs.sandstorm.io/en/latest/)

## Server-less Functions - FaaS

Cloud Native [Function-as-a-Service Platform](https://github.com/OpenFunction/OpenFunction) 

> Thanks to [DevOps Toolkit](https://www.youtube.com/watch?v=UGysOX84v2c) for showing this. 

---

## FAQ



### How to monitor the Status of my Services?

You can get help from [Uptime Kuma with Docker](https://fossengineer.com/selfhosting-uptime-Kuma-docker/).

### Transfering Files - What it is a FTP?

FTP stands for **File Transfer Protocol**, and an FTP server is a computer or software application that runs the FTP protocol. Its primary purpose is to facilitate the transfer of files between different computers over a network, such as the internet or a local area network (LAN). 



#### Why FTPs?

In essence, FileZilla acts as **a bridge between your local computer and remote servers**, making it easy to work with files stored on those servers as if they were part of your own file system. It's a popular choice for developers, system administrators, and anyone who needs to transfer files to or from remote servers **securely and efficiently**.

* Sharing Large Files: FTP servers allow you to share really big files that are too large for email or messaging apps.
* Fast and Efficient: They make it easy for multiple people to download the same file at the same time, so you don't have to send it to each person individually.
* Access Anywhere: Your friends or family can access the files from anywhere with an internet connection. They don't have to be at your house.
* Backup and Storage: You can use an FTP server to back up important files and keep them safe in case something happens to your computer.

#### How to use FTP?

* **FileZilla** is open-source software (GPL), and it has desktop applications available for both Windows and Linux. 

FileZilla is similar to a remote folder connection. It allows you to connect to and manage files on remote servers over the internet or a network. Here's how it works:

* Connecting to Remote Servers: FileZilla allows you to connect to various types of remote servers, including FTP (File Transfer Protocol), SFTP (SSH File Transfer Protocol), FTPS (FTP Secure), and more. You provide the server's address (like a website URL or IP address), your username, and password (if required) to establish a connection.
    * http://192.168.3.200:3090/
    * user & pass

* Remote File Management: Once connected, FileZilla displays the files and directories on the remote server in one pane and your local computer's files and directories in another pane. It lets you navigate through the remote server's file system just like you would on your own computer.


```sh
apt update
apt install filezilla
```

* **FTP Servers** - Delfer / vsFTP

#### Other ways - WebDavs and SMB

* Have a look to [Nextcloud with Docker](https://jalcocert.github.io/RPi/posts/selfhosting-nextcloud/)
* [Samba Server with Docker](https://fossengineer.com/selfhosting-samba/)
    * Samba is the de facto open-source implementation of the SMB/CIFS protocol for Unix-like systems, including Linux. You can install and configure Samba on your Linux server to share files and directories with Windows and other SMB clients.

### What about Proxmox?

https://www.proxmox.com/en/

### What about OMV?

[Open Media Vault](https://www.openmediavault.org/) - Debian Based NAS

### What it is LXC?

LXC (LinuX Containers) is a OS-level virtualization technology that allows creation and running of multiple isolated Linux virtual environments (VE) on a single control host.

### How to run Rust w/o OS?

https://www.youtube.com/watch?v=jZT8APrzvc4

### How to develop inside a Docker Container

https://www.youtube.com/watch?v=dihfA7Ol6Mw

### Linux and Robotics?

https://www.youtube.com/watch?v=-JVHvU3Oor8