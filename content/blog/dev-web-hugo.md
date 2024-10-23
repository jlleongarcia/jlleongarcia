---
title: "How to use HUGO and make quick Websites"
date: 2024-09-06
draft: false
tags: ["Dev"]
summary: 'How to get started with HUGO and create Webs'
url: 'using-hugo-as-website'
---

To use HUGO, you just need **2 things**: GO language and HUGO.

{{< details title="Setup GO & HUGO 📌" closed="true" >}}

* https://github.com/gohugoio/hugo/releases

```sh
sudo apt update -y
sudo apt install wget

#install go
wget https://go.dev/dl/go1.22.5.linux-arm64.tar.gz
sudo tar -C /usr/local -xzf go1.22.5.linux-arm64.tar.gz
export PATH=$PATH:/usr/local/go/bin
source ~/.bashrc
go version

#install hugo: example v0.108
# wget https://github.com/gohugoio/hugo/releases/tag/v0.108.0/hugo_extended_0.108.0_linux-amd64.deb -O hugo_latest.deb
# wget https://github.com/gohugoio/hugo/releases/download/v0.117.0/hugo_extended_0.117.0_linux-arm64.deb -O hugo_latestarm.deb

sudo dpkg -i hugo_latest.deb
hugo version 
#sudo dpkg -r hugo
```

{{< /details >}}