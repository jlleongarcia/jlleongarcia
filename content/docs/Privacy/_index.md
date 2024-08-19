
---
title: Privacy
type: docs
prev: docs/debian
next: docs/arch
sidebar:
  open: false
---

I was also tired of being bombarded with targeted adds - Until I discovered these Apps in Linux.

## Making Linux Private

You already [have a secure OS](https://jalcocert.github.io/Linux/docs/debian/securing_linux/) - with no built in backdoors. And now you want to make it more private.

### Changing Linux DNS

You can try with [PiHole](https://fossengineer.com/selfhosting-PiHole-docker/)

* With [Unbound](https://jalcocert.github.io/RPi/posts/selfh-internet-better/#unbound-dns)
  * <https://github.com/JamesTurland/JimsGarage/tree/main/Unbound>
* Or try [Bind9](https://hub.docker.com/r/ubuntu/bind9#!)

* [PortMaster](https://github.com/Safing/portmaster) also helps to change and visualize the network queries.
* [Stacer](https://github.com/oguzhaninan/Stacer) - Optimize processes, check apt repositories, startup apps...

```sh
sudo add-apt-repository ppa:oguzhaninan/stacer -y
sudo apt-get update
sudo apt-get install stacer -y
```

Whats my current DNS?

```sh
sudo apt install resolvconf
sudo systemctl status resolvconf.service
```

{{< callout type="info" >}}
Check your DNS with: WireShark and the DNS performance with: GRC's DNS Benchmark, Knot DNS Resolver, DNSPerf or dnsmasq
{{< /callout >}}

<iframe width="560" height="315" src="https://www.youtube.com/embed/xAo61IaXun8" frameborder="0" allowfullscreen></iframe>

* Securing HomeLan - https://www.youtube.com/watch?v=ivPptt3Ae5o


### Monitoring OutGoing Connections

{{% details title="With [OpenSnitch](https://github.com/evilsocket/opensnitch) 👇" closed="true" %}}

```sh
wget https://github.com/evilsocket/opensnitch/releases/download/v1.6.5.1/python3-opensnitch-ui_1.6.5.1-1_all.deb #https://github.com/evilsocket/opensnitch/releases
sudo apt install ./opensnitch*.deb ./python3-opensnitch-ui*.deb
```

{{% /details %}}


* [Douane](https://jalcocert.github.io/Linux/docs/privacy/#faq)
* gufw (GUI for Uncomplicated Firewall)
* [PortMaster](https://jalcocert.github.io/Linux/docs/privacy/#faq) 

## Changing Bad Habits

Use different tools to search:


* [Whoogle!](https://fossengineer.com/selfhosting-whoogle-docker/)
* [SearXNG](https://jalcocert.github.io/RPi/posts/selfh-internet-better/#searxng)
* Youtube Alternatives:
  * NewPipe / Youtube-DL https://jalcocert.github.io/RPi/posts/youtube-video-download/
  * https://github.com/tubearchivist/tubearchivist
  * https://github.com/FreeTubeApp/FreeTube
  * https://github.com/TeamPiped/Piped

* Use a Password Manager: Bitwarden, KeePass...

### VPNs

* <https://jalcocert.github.io/Linux/docs/debian/linux_vpn_setup/>

DNS =>> https://github.com/mullvad/dns-blocklists/tree/main
https://quad9.net/service/service-addresses-and-features/
https://www.youtube.com/watch?v=xAo61IaXun8&t=1s

DNS over TLS (DoT) is an enhancement over the traditional DNS that adds encryption to DNS queries and responses. It uses the Transport Layer Security (TLS) protocol to secure the communication between the DNS client and the DNS server, preventing eavesdropping and tampering by third parties.

> P2P safely with [VPN and QBittorrent](https://fossengineer.com/selfhosting-qBittorrent-with-docker-and-VPN/) or with [Transmission](https://fossengineer.com/torrent-with-transmission-and-VPN/)

### Communication

#### Matrix

* Thunderbird allows you not only to use email, but to connect to Matrix Servers
* Rocket.chat

{{< callout type="info" >}}
You can [SelfHost your own Matrix Server](https://fossengineer.com/selfhosting-matrix-synapse-docker/) and Federate it with other servers if you wish.
{{< /callout >}}

#### Signal

{{% details title="How to Install Signal 👇" closed="true" %}}

You need to add the repository to your packages list, then install it:

```sh
# wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor > signal-desktop-keyring.gpg
# cat signal-desktop-keyring.gpg | sudo tee -a /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null
# echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' | sudo tee -a /etc/apt/sources.list.d/signal-xenial.list

sudo apt update
sudo apt install signal-desktop

#signal-desktop
```
{{% /details %}}

#### Session

Built on top of Oxen.

{{% details title="How to Install [Session](https://getsession.org/) 👇" closed="true" %}}


Check the [latest release](https://github.com/oxen-io/session-desktop/tags)

```sh
wget https://github.com/oxen-io/session-desktop/releases/download/v1.11.5/session-desktop-linux-amd64-1.11.5.deb
sudo dpkg -i session-desktop-linux-amd64-1.11.5.deb
sudo apt install -f

#chmod +x session-desktop-linux-x86_64-1.11.5.AppImage
#./session-desktop-linux-x86_64-1.11.5.AppImage
```

{{% /details %}}


> Send Messages, not MetaData - https://getsession.org/

---

## FAQ

{{% details title="How to Install Douane 👇" closed="true" %}}

[Douane](https://douaneapp.com/) is a personal firewall that us to control which applications can connect to the internet.

You can see [Douane Source Code](https://gitlab.com/douaneapp/Douane) and install as per the [instructions](https://gitlab.com/douaneapp/douane-installer)

{{% /details %}}

{{% details title="How to Install Portmaster 👇" closed="true" %}}

[PortMaster](https://safing.io/) is a great [F/OSS Project](https://github.com/Safing/portmaster) that allow us to set Global & per‑App Settings.

[Install PortMaster](https://wiki.safing.io/en/Portmaster/Install/Linux) with:

```sh

sudo apt update
wget https://updates.safing.io/latest/linux_amd64/packages/portmaster-installer.deb

sudo dpkg -i portmaster-installer.deb
portmaster --version

#sudo apt install -f


#sudo systemctl status portmaster
# sudo systemctl daemon-reload
# sudo systemctl enable --now portmaster

# This will stop the portmaster until you reboot.
#sudo systemctl stop portmaster

# This will disable automatically starting the Portmaster on boot.
#sudo systemctl disable portmaster
```

Or if you want, build and install:

```sh
wget https://github.com/safing/portmaster/archive/refs/tags/v1.6.5.tar.gz
tar -zxvf v1.6.5.tar.gz #extract the contents


cd portmaster-1.6.5

make
sudo make install

portmaster --version

```

{{% /details %}}

Definitely check: 

* <https://github.com/pluja/awesome-privacy>
* <https://github.com/awesome-selfhosted/awesome-selfhosted>
* <https://github.com/anderspitman/awesome-tunneling>


* <https://www.techlore.tech/>

<!-- 
https://libreselfhosted.com/ -->

### Is my WIFI secure enough?

* https://github.com/Ragnt/AngryOxide
* https://www.youtube.com/watch?v=fc2oNY_W0YY

---

### TOR vs I2P vs LokiNet

#### 🧅

The Onion Router -  Tor is a well-established network that operates as a decentralized network of nodes (volunteer-run servers, without financial incentives) that route and encrypt traffic through multiple layers (called onion routing) to conceal the origin and destination of data. 

#### I2P

I2P is primarily designed for anonymous communication and services within the I2P network itself. It's optimized for hidden services, like websites (eepsites), email, and file sharing, that are accessible only within I2P.

* Garlic Routing: I2P uses garlic routing, an extension of onion routing. It bundles messages together, providing an additional layer of anonymity. This method is designed to make traffic analysis more difficult.

* Peer Selection: In I2P, peers are selected based on continuous performance profiling, which can lead to faster performance for the user since the network optimizes over time based on usage.

#### LokiNet

[Lokinet](https://lokinet.org/) also utilizes onion routing to route and encrypt traffic, but it employs a mixnet architecture, which means that each packet of data is routed through multiple nodes in the network, similar to Tor.


{{% details title="How to Install [Latest LokiNet](https://github.com/oxen-io/lokinet/releases) 👇" closed="true" %}}

Check the [latest release here](https://github.com/oxen-io/lokinet/releases) and:

```sh
wget https://github.com/oxen-io/lokinet/releases/download/v0.9.11/lokinet-v0.9.11.tar.xz
tar -xvf lokinet-v0.9.11.tar.xz #extract
```

{{% /details %}}

However, [Lokinet](https://github.com/oxen-io/lokinet) nodes are incentivized by the ~~Loki~~ [Oxen](https://docs.oxen.io/oxen-docs/products-built-on-oxen/lokinet) cryptocurrency to participate in the network, and it operates as a separate network from Tor.

[Lokinet](https://loki.network/team/) also aims to provide a platform for decentralized applications (dApps) and services, such as secure messaging, decentralized websites (SNApps), and other privacy-focused applications.

SNApps, or Session Network Applications, are DApps built on top of the Session network. Session is a privacy-focused messaging and communication platform that utilizes end-to-end encryption and onion routing to provide anonymous and censorship-resistant communication.

* Oxen Blockchain Explorer - https://lokiblocks.com/
* [Oxen Name System](https://docs.oxen.io/oxen-docs/using-the-oxen-blockchain/using-oxen-name-system)

---

### Crypto? 

This is not in the right place to learn big about Crypto - but [WhyCryptoCurrencies](https://whycryptocurrencies.com/) it is (and Free).

{{% details title="A couple of wallets that you can use in Linux 👇" closed="true" %}}

```sh
flatpak install flathub org.electrum.electrum #BTC

flatpak install flathub org.featherwallet.Feather #Monero
#flatpak install flathub org.getmonero.Monero
```

Use them wisely and be responsibly.

{{% /details %}}

* DeFi Protocols Info: <https://defillama.com/top-protocols>
  * Example: <https://defillama.com/yields?attribute=stablecoins>
    * <https://ethereum.org/stablecoins>
* Create your own Crypto Analytics Dashboard with [Dune](https://github.com/duneanalytics/docs)
  * Also, you can see [what others have created and whats trending](https://dune.com/browse/dashboards?tags=DeFi)

{{< callout type="info" >}}
How this also resonates with Linux? 

Well, nature of crypto is F/OSS (if it is not you better run):

* Many [wallets](https://ethereum.org/wallets/find-wallet) are F/OSS
  * You can explore them with F/OSS tools like the [PWA Merklin](https://github.com/toniengelhardt/merklin)
* Smart Contracts are F/OSS
  * And [dApps](https://dappradar.com/) sense is also F/OSS
* And you can have a look to full history of transactions: [ETH](https://etherscan.io/txs), [BTC](https://bitcoinexplorer.org/)...
{{< /callout >}}



#### IPFS

IPFS (InterPlanetary File System) is one of the foundational technologies that could serve as a backbone for Web3 due to its role in enabling decentralized storage and access to data across the internet. 

PFS provides the infrastructure necessary for developing and hosting decentralized applications.
<iframe width="560" height="315" src="https://www.youtube.com/embed/rOtMGJVp2MU" frameborder="0" allowfullscreen></iframe>

{{% details title="Filecoin" closed="true" %}}

[FileCoin](https://docs.filecoin.io/) is a decentralized storage network designed to turn cloud storage into an algorithmic market. It runs on a blockchain with a native token, also called Filecoin (FIL), which is used as a payment system for storage and retrieval services. Here’s how Filecoin relates to IPFS:

* Built on IPFS: Filecoin is essentially an incentive layer on top of IPFS. While IPFS allows for the decentralized storing and sharing of files, Filecoin incentivizes the storage of those files through financial rewards. Storage providers earn Filecoin tokens by hosting files, effectively turning data storage into a market where users pay to have their files stored.

* Decentralization and Redundancy: Like IPFS, Filecoin aims to make the web more decentralized and less reliant on centralized cloud storage providers. By distributing files across numerous nodes, it enhances data redundancy and reliability.

* Security and Efficiency: Filecoin introduces cryptographic proofs to ensure files are stored correctly and securely. These include Proof of Replication (PoRep) and Proof of Spacetime (PoSt), which verify that data is being stored as intended over time.

Filecoin introduces cryptographic proofs to ensure files are stored correctly and securely. These include Proof of Replication (PoRep) and Proof of Spacetime (PoSt), which verify that data is being stored as intended over time.

> You can also check [Arweave](https://www.arweave.org/)

{{% /details %}}


#### Web3

Web 3.0, often referred to simply as Web3, represents the next phase of the internet's evolution, emphasizing decentralization, blockchain technologies, and token-based economics. It seeks to address issues related to privacy, data ownership, and centralization that have become prevalent in the era of Web 2.0, which is dominated by large tech companies. 