---
title: "Web3 Simplified - Why and How to Get your Web3"
date: 2021-12-19T23:20:21+01:00
draft: false
tags: ["Web"]
description: 'Building your first Web3 from scratch.'
summary: 'Everyone talks about Web3. I was wondering if I could use some knowledge that I got while creating static sites with HUGO and its actually pretty simple.'    
url: 'guide-web3'
---

<!-- ## Why Web3? 
https://mirror.xyz/
-->

**The Web3 Revolution!** > wait, what?

Today, we're diving into the world of Web3, where decentralization, security, and innovation reign.

Ever wondered [what all the buzz](#exploring-web3-concepts-) is about? 

In this guide, we'll **demystify Web3** and show you just [how easy it is to build](#how-to-start-with-web3) your very own slice of the decentralized web.

We will do it in a simple three-step approach 📢

* How can I optimize my [browser for Web3 interaction](#why-brave)?
  - Ensure your browser supports Web3 protocols and technologies to seamlessly interact with decentralized applications and networks.

* How do I [create my website](#making-a-web3-without-the-sweat) for Web3 compatibility?
  - Build your website using web development tools and languages like HTML, CSS, and JavaScript, ensuring compatibility with Web3 technologies.

* How can I [get my Web3 domain](#linking-ipfs-with-a-web3-domain)?
  - Acquire a Web3 domain and securely link it to your decentralized website using technologies like the Ethereum Name Service (ENS) or InterPlanetary File System (IPFS).


Lets explore some potential of the next generation of the internet!


## Exploring Web3 Concepts

### Unstoppable Domains (UDs) 🚀

**Unstoppable Domains** are Non-Fungible Tokens (NFTs), decentralized, and revolutionize the concept of domain ownership. Unlike traditional domain names (e.g., .com), UDs are stored in the owner's wallet like cryptocurrency, providing full control and autonomy. Once acquired, there's no need to worry about yearly renewal fees. Plus, no third party can alter or seize them, ensuring unparalleled digital ownership.

### IPFS: InterPlanetary File System 🛰️

https://mariushosting.com/synology-install-ipfs-with-portainer/

**IPFS**, short for InterPlanetary File System, is a peer-to-peer hypermedia protocol with a visionary goal: to preserve and expand humanity's knowledge.

By decentralizing content storage and distribution, IPFS aims to make the web more resilient, upgradable, and open. It operates on a distributed network, where files are addressed by their content, not their location, facilitating faster and more efficient data retrieval.

Join the Web3 revolution today and explore the limitless possibilities these innovative technologies offer!



### Points to Consider 🧐

- **Immutable Content 📜**:
  - **New Versions, New CIDs**: Uploading a new version of a file to IPFS results in a different cryptographic hash, assigning it a new CID (Content Identifier). This inherent feature ensures resistance to tampering and censorship. Changes to a file do not overwrite the original, and common chunks across files can be reused, minimizing storage costs.

- **Decentralized Truth 🌐**:
  - **Absence of Central Authority**: IPFS decentralization means there's no single point of truth filtering out inaccurate or inappropriate content. While this empowers individuals and communities, it also underscores the importance of critical thinking. Remember, just because something is accessible doesn't automatically make it true.

- **Embrace Critical Thinking 🤔**:
  - **Wear Your Glasses of Critical Thinking**: Whether the topic is the shape of the Earth or its position in the universe, approach information with skepticism. Always be prepared to question, verify, and analyze before accepting anything as truth.

In our digital age, where information is abundant and easily accessible, cultivating a mindset of **critical thinking is essential**. Let's equip ourselves with these glasses every day to navigate the vast sea of information responsibly.

<!-- *In fact, we should be already wearing such glasses everyday.* -->


---

## How to Start with Web3

* A [Web3 compatible browser](#why-brave)
* The Website files [with your content](#making-a-web3-without-the-sweat)
* A [Web3 Domain](#linking-ipfs-with-a-web3-domain)

These allow dApps to run - For example you can try Brave Browser.

### Why Brave?

Shortly because it supports Web3 out of the box and it is F/OSS:

* [The Brave Site](https://brave.com "Brave {rel='nofollow'}")
* [The Brave Source Code at Github](https://github.com/brave/brave-browser "GH {rel='nofollow'}")
    * License: [MPL](https://github.com/brave/brave-browser?tab=MPL-2.0-1-ov-file#readme)

> Brave, a Chromium based F/OSS web browser that can be used for Web3

### Making a Web3 without the sweat

The good news - Having your own Web3 is not that hard ✅

If you have already learned [how to build a static website](/web-guide-Hugo/), you can automatically **transfer that skill**.

As the web moves towards a more decentralized and secure future with Web3 technologies, static Sites have an important role to play.

[Since static sites](##how-can-i-build-my-compatible-web3) are built with **pure HTML, CSS, and JavaScript, they are compatible with Web3** technologies, such as blockchain-based domain names and decentralized storage solutions.

In fact, several projects have emerged that combine the benefits of static sites with the power of Web3. 

- For example, **the Ethereum Name Service (ENS)** allows users to register domain names that are **stored on the Ethereum blockchain**, making it possible to create decentralized and secure websites.

- Similarly, the InterPlanetary File System (IPFS) is a decentralized storage system that can be used to host static sites, providing a more secure and resilient hosting solution.


### Linking IPFS with a Web3 Domain

This part will cover how to host your files in IPFS and link them to your Web3 domain:

* Option 1 - pinata.cloud:
  - **pinata.cloud**: Currently offers a free tier after registration, allowing up to 100 files and 1GB storage.

* Option 2 - Filebase:
  - **filebase**: Allows you to try IPFS and Sia after registration. 
      - There is a free tier with no credit cards required.

The process is equivalent to set the DNS in a regular (web2.0) domain, but here, the domain and the IPFS are inmutable.

<!-- * Option 1 - Unestoppable domains -->

<!-- ## Web3 Example

I Adquired recently one ENS to try on my own.

The ENS ([ERC-721 Token](https://fossengineer.com/crypto-101-concepts-for-data-analytics/)) can be seen in the Polygon Blockchain with:

<https://polygonscan.com/address/0x7dcd1f086b6f630e1e2310d31371a8078028f5a7#tokentxnsErc721> -->


## Conclusion

I have [this repository](https://jalcocert.github.io/web3/) where I try to collect Web3 related stuff :)

* You might want to have a look to https://whycryptocurrencies.com/

---

## FAQ

Learn more about Web3 at - https://learnweb3.io

### How can I Build my compatible Web3

You can use a **simple SSG**, which will generate the **html, css and js** needed for the Web3 to be deployed and served.

* Some Free tools to create a web3:
    * HUGO
    * Astro