---
title: "How to use HUGO and make quick Websites"
date: 2024-09-06
draft: false
tags: ["Dev"]
summary: 'How to get started with HUGO and create Webs. GO & HUGO Setup.'
url: 'using-hugo-as-website'
---

To use HUGO, you just need **2 things**: GO language and HUGO.

* https://github.com/gohugoio/hugo/releases
* https://go.dev/dl/

> Why HUGO? It builds sites veeeery fast

{{< details title="Setup GO & HUGO - x86 📌" closed="true" >}}

```sh
sudo apt update -y
sudo apt install wget

#install go
# wget https://go.dev/dl/go1.21.1.linux-armv6l.tar.gz
# sudo tar -C /usr/local -xvzf go1.21.1.linux-armv6l.tar.gz
# export PATH=$PATH:/usr/local/go/bin
# source ~/.bashrc
# go version

#install hugo: example v0.108
wget https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_0.108.0_linux-arm.tar.gz \
&& tar -xvzf hugo_0.108.0_linux-arm.tar.gz \
&& sudo mv hugo /usr/local/bin/ \
&& rm hugo_0.108.0_linux-arm.tar.gz \
&& hugo version
```
{{< /details >}}

Now you can spin a server and make HUGO [Remote Development](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker) in it.

But...you can also use **ARM SBCs with HUGO**


{{< details title="Setup GO & HUGO - ARM64 📌" closed="true" >}}


```sh
ssh jalcocert@192.168.0.155
ssh reisipi@192.168.0.117
```


```sh
sudo apt update -y && \
sudo apt install wget -y && \
wget https://go.dev/dl/go1.22.5.linux-arm64.tar.gz && \
sudo tar -C /usr/local -xzf go1.22.5.linux-arm64.tar.gz && \
echo "export PATH=\$PATH:/usr/local/go/bin" >> ~/.bashrc && \
source ~/.bashrc && \
go version && \
wget https://github.com/gohugoio/hugo/releases/download/v0.117.0/hugo_extended_0.117.0_linux-arm64.deb -O hugo_latestarm.deb && \
sudo dpkg -i hugo_latestarm.deb && \
hugo version && \
rm go1.22.5.linux-arm64.tar.gz && \
rm hugo_latestarm.deb
```

Or if you want, **step by step**:

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

But this *thing* also works in older SBC, like the RPi4

{{< details title="Setup GO & HUGO - ARM32 📌" closed="true" >}}

```sh
ssh reisipi@192.168.0.232
```

```sh
sudo apt update -y
sudo apt install wget

#install go
wget https://go.dev/dl/go1.21.1.linux-armv6l.tar.gz
sudo tar -C /usr/local -xvzf go1.21.1.linux-armv6l.tar.gz
export PATH=$PATH:/usr/local/go/bin
source ~/.bashrc
go version

#install hugo: example v0.108
wget https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_0.108.0_linux-arm.tar.gz \
&& tar -xvzf hugo_0.108.0_linux-arm.tar.gz \
&& sudo mv hugo /usr/local/bin/ \
&& rm hugo_0.108.0_linux-arm.tar.gz \
&& hugo version
```

{{< /details >}}

---

If you want to be sure that **HUGO works...**

1. See that you got the desired version installed

```sh
go version
hugo version 
```

2. Clone **this Website** Repository and try to **run it locally**:

```sh
git clone https://github.com/JAlcocerT/JAlcocerT && cd ./JAlcocerT

#git clone https://github.com/JAlcocerT/JAlcocerT.git && cd ./JAlcocerT
#git checkout 0026818a2661094d37c958a75535fe2e0daf938c #https://github.com/JAlcocerT/JAlcocerT/commit/0026818a2661094d37c958a75535fe2e0daf938c

```

```sh
#hugo server
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.155" --port=1313
#hugo server --bind="0.0.0.0" --baseURL="http://100.104.143.77" --port=1319

ifconfig
#ifconfig eth0 | grep -A 10 "<global>" #check mac, and transfered packages
ifconfig eth0 | grep "inet " | awk '{ print $2 }' #if ETH Connected - SEE THE LOCAL IP
#ifconfig tailscale0 | grep "inet " | awk '{ print $2 }' #for Tailscale
```

---

{{< callout type="info" >}}
You can use [HUGO with Github Pages + GH Actions](https://github.com/JAlcocerT/Linux/actions). Look at those **~5s build times** ~30/40s e2e!
{{< /callout >}}