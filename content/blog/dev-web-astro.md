---
title: "How to use ASTRO and make Stunning Websites"
date: 2024-09-07
draft: false
tags: ["Dev"]
summary: 'How to get started with Astro to create Webs. NPM & Node Setup.'
url: 'using-astro-as-website'
---

To use HUGO, you just need **2 things**: NPM and NodeJS.

* https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* https://nodejs.org/en/download/package-manager

> Why ASTRO? It builds sites cool Websites, taking components from here & there

{{< details title="Setup GO & HUGO - x86/ARM64/ARM32 📌" closed="true" >}}

```sh
sudo apt update && sudo apt upgrade

#install NodeJS https://deb.nodesource.com/
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# Verify installation
node -v   # Should show Node.js version - 20.18.1
npm -v    # Should show npm version - 10.8.2
```
{{< /details >}}

Now you can spin a server and make **ASTRO [Remote Development](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker)** in it.


---

If you want to be sure that **ASTRO works...**

1. See that you got the desired versions installed

```sh
node -v   # Should show Node.js version - 20.18.1
npm -v    # Should show npm version - 10.8.2
```

2. Clone **this Website** Repository and try to **run it locally**:

```sh
git clone https://github.com/JAlcocerT/web3 && cd ./web3

npm install
npm run dev
```

3. [optional] - Use [Astro within a Container](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#node)

---

```sh
ifconfig
#ifconfig eth0 | grep -A 10 "<global>" #check mac, and transfered packages
ifconfig eth0 | grep "inet " | awk '{ print $2 }' #if ETH Connected - SEE THE LOCAL IP
#ifconfig tailscale0 | grep "inet " | awk '{ print $2 }' #for Tailscale
```