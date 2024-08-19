---
title: Useful Tools for Linux
type: docs
prev: docs/Debian/
---


## Useful Tools

### System Info

* Info about Hardware, Network, OS (Kernel...), even [benchmarks](https://jalcocert.github.io/Linux/docs/linux__cloud/benchmark/).

```sh
sudo apt-get install hardinfo
```
* For Benchmarks (Cross-Platform, Free at this moment, but not Open Source)

```sh
curl -O https://cdn.geekbench.com/Geekbench-6.2.2-Linux.tar.gz  #https://www.geekbench.com/download/linux/ 
tar -xzf Geekbench-6.2.2-Linux.tar.gz
cd Geekbench-6.2.2-Linux
./geekbench_x86_64
```

You will get something like: <https://browser.geekbench.com/v6/cpu/your_id_number> which will tell you single core and multi core scores. *I got ~1100 and ~3300 with a laptop*

* Terminal Based:

```sh
sudo apt install neofetch
#neofetch
```

* For Open Source: https://github.com/akopytov/sysbench


```sh
curl -s https://packagecloud.io/install/repositories/akopytov/sysbench/script.deb.sh | sudo bash
sudo apt -y install sysbench
```

### Hardware Monitor

#### CPU Freq

Adjusting CPU Freq in Laptops with [AUto-CPUFreq](https://github.com/AdnanHodzic/auto-cpufreq#auto-cpufreq-installer):

```sh
#sudo snap install auto-cpufreq
git clone https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
```

#### Mission Center

A Windows like Task Manager for Linux.

```sh
flatpak install flathub io.missioncenter.MissionCenter
```

#### System Monitor

With [htop](https://github.com/htop-dev/htop) or [btop](https://github.com/aristocratos/btop):

```sh
sudo apt-get install htop
#htop

sudo snap install btop
#btop

sudo snap install bashtop #https://github.com/aristocratos/bashtop
#bashtop
```

---

### Network Monitor

#### Net Tools

```sh
sudo apt install net-tools -y
```

Get your public ip:

```sh
curl ifconfig.me
```

Get your local ip:

```sh
ip address
#ip a
```

#### Testing DNS

```sh
sudo apt install dnsutils

#example
#nslookup google.com
#ping google.com
#dig google.com
#host google.com
```

Worth to have a look: https://weberblog.net/benchmarking-dns-namebench-dnseval/


```sh
#cat /etc/resolv.conf
systemd-resolve --status | grep "DNS Servers"
#nmcli dev show | grep 'IP4.DNS'
```

You can see the DNS of each Network in your PC with:

```sh
resolvectl status #see which one you want to change, ex: enp2s0
#resolvectl dns enp2s0 9.9.9.9 149.112.112.112
#resolvectl status enp2s0
```

> [Quad9](https://quad9.net/service/service-addresses-and-features/) is a good start point


{{% details title="How to choose a DNS for a specific App/Domain" closed="true" %}}
* https://www.baeldung.com/linux/specific-dns-for-specific-domain

{{% /details %}}

## General Ubuntu

### Crontab Tasks

Make sure to install and Open crontab:


```sh
# apt install cron
# systemctl start cron 
# systemctl status cron

crontab -e
```

Update it every midnight and every restart:


```sh
0 0 * * * #sudo apt update && sudo apt upgrade
@reboot #sudo apt update && sudo apt upgrade
```

> You can create different [schedule expressions](https://crontab.guru/#0_22_*_*_1-5)

If your script isn’t executing, check the system log for cron events: grep cron /var/log/syslog

If you’d wish to **view your scheduled tasks** without editing you can use:

```sh
crontab -l
#crontab -u particularusername -l
```

> [What happens](https://www.baeldung.com/linux/crontab-scheduled-jobs-computer-shutdown) with CronTab when PC Shutdown? 

{{% details title="Example - Install GIT and sync a Github Repository" closed="true" %}}


```sh
sudo apt install git &&
git clone https://github.com/jalcocert/RPi.git &&
cd RPi &&
git pull #to make sure its up to date (a cron task could be scheduled)
```

If you want to add a cron task for this, simply edit, as explained:


```sh
0 0 * * * cd RPi && git pull
@reboot cd RPi && git pull
```

{{% /details %}}

{{% details title="Example - Sync all your [Gitea Repositories](https://fossengineer.com/selfhosting-Gitea-docker/) when PC Turn on" closed="true" %}}

Now your imagination is the limit.

Let's [create a script](https://github.com/JAlcocerT/Linux/blob/main/Z_Linux_Installations_101/Cron_Examples/) that when your PC is booting, it will sync a given list of repositories from your Gitea instance.

```sh
nano git_sync.sh
```

If you want to add a cron task for this, simply edit, as explained:

Make it executable:

```sh
chmod +x /home/jalcocert/Desktop/GIT_SYNC/git_sync.sh
```

```sh
#@reboot /home/jalcocert/Desktop/GIT_SYNC/git_sync.sh >> /home/jalcocert/Desktop/GIT_SYNC/git_sync.log 2>&1
@reboot /home/jalcocert/Desktop/GIT_SYNC/git_sync_v2.sh http://192.168.3.200:3033/fossengineer/FOSSENGINEER FOSSENGINEER http://192.168.3.200:3033/fossengineer/Py_Stocks Py_Stocks >> /home/jalcocert/Desktop/GIT_SYNC/git_sync_v2.log 2>&1

#crontab -l #verify its added
```

{{% /details %}}

{{% details title="How to Manage Cron Tasks with UI" closed="true" %}}

With Zeit - Let's add the PPA and install it in Ubuntu:

```sh
sudo add-apt-repository ppa:blaze/main
sudo apt update
sudo apt install zeit
#zeit #UI is ready!
```

You can also manage Cron tasks with UI's thanks to projects like: [cronicle](https://cronicle.net/), [nodered](https://jalcocert.github.io/RPi/posts/rpi-mqtt/#node-red), n8n...

{{% /details %}}

{{% details title="CronTasks Status with [UptimeKuma](https://fossengineer.com/selfhosting-uptime-Kuma-docker/)" closed="true" %}}

With the Passive Monitor - Push:

Together with [this python script](https://github.com/JAlcocerT/Linux/blob/main/Z_Linux_Installations_101/Cron_Examples/git_sync_uptimekuma.py) and the crontab:

```sh
@reboot /home/jalcocert/Desktop/GIT_SYNC/git_sync_uptimekuma.py
```

{{% /details %}}



### Create users

```sh
#simple:
useradd pruebecita
#with sudo rights:
useradd -g users -G sudo -s /bin/bash -m -c "Your name" user_desired_name
#without sudo rights:
useradd -g user -s /bin/bash -m -c "Your name" user_desired_name
```

To make the home folders only visible but the specific users, just do:


```sh
chmod -R go-rwx /home/user_name_1
chmod -R go-rwx /home/user_name_2
chmod -R go-rwx /home/user_name_3
```


{{% details title=" How to Create your own mount points" closed="true" %}}



Lets first check the storages connected to the machine and identify their current path:


```sh
sudo fdisk -l
#lsblk
```

With this information we can create an automount entry in fstab:


```sh
sudo mkdir /mnt/data_mounted \
mount /dev/sdb1 /mnt/data_mounted/ #example
```

Depending on the file system, this might be needed:


```sh
mount -t ntfs /dev/sdb1 /mnt/data_mounted
```

If we know the UUID of the device, we can simply:


```sh
sudo mount UUID=92C269FAC269E2C9 /mnt/data_mounted
```

To do it automatically for a specific external device that we would have we need to find the UUID (Universal Unique Identifier) of the particular drive:

Option 1:


```sh
sudo blkid | grep /dev/sda2 | grep UUID= #example
```

Check what is mounted and where with:


```sh
df -h
#sudo snap install dust #to see what takes most space

```

lets add the automount entry in:


```sh
sudo nano /etc/fstab
#UUID=14D82C19D82BF81E_example /mnt/data_mounted    auto nosuid,nodev,nofail,x-gvfs-show 0 0
```
Then we have to simply execute to mount as per our guidelines:


```sh
sudo mount -a
```

Always remember to unmount your external storeges safely with:


```sh
sudo umount /my_volume
```

Option 2: Another option would be to set a cron task with:


```sh
@reboot mount /dev/sdb1 /mnt/data_mounted/ #example
```

{{% /details %}}

---

## Power Management

### How to lower CPU consumption?


To lower CPU power consumption on an Ubuntu system, you can install and configure various tools and utilities designed to manage and optimize power usage.


{{% details title="Some effective tools and techniques" closed="true" %}}


1. **TLP**: TLP is an advanced power management tool that optimizes battery life on laptops and power usage on desktops. It comes with default settings tailored for saving power and can be customized according to your needs.

   - Install TLP using the following command:
     ```
     sudo apt install tlp tlp-rdw
     ```
   - After installation, TLP will start automatically. However, you can start it manually and enable it to start at boot with:
     ```
     sudo tlp start
     ```

2. **cpufrequtils or cpupower**: These tools allow you to adjust the CPU frequency scaling and governor settings. The CPU governor controls the scaling of the CPU frequency according to the current load, allowing you to balance between performance and power consumption.

   - Install cpufrequtils with:
     ```
     sudo apt install cpufrequtils
     ```
   - Or, for more recent versions of Ubuntu, cpupower might be available:
     ```
     sudo apt install linux-cpupower
     ```
   - You can then set the CPU governor to a power-saving mode, like `powersave`, using:
     ```
     sudo cpufreq-set -r -g powersave
     ```

3. **Powertop**: Powertop is a tool developed by Intel that shows you the power consumption of your device and suggests optimizations to reduce power usage.

   - Install Powertop with:
     ```sh
     sudo apt install powertop
     ```
   - To see the current power usage and suggestions, run:
     ```sh
     sudo powertop
     ```
   - Powertop can also automatically apply its optimization suggestions at startup by creating a service or script that runs `powertop --auto-tune`.

4. **Auto-cpufreq**: This tool automatically adjusts CPU frequency and power modes in real-time based on system load and power source. It's useful for those who prefer a more "set it and forget it" approach.

   - Since Auto-cpufreq isn't available directly from the standard Ubuntu repositories, it can be installed via a snap or its GitHub repository. To install it using snap, use:
     ```
     sudo snap install auto-cpufreq
     ```
   - To monitor and automatically adjust the CPU settings, you may need to run it with:
     ```
     sudo auto-cpufreq --live
     ```
   - To enable persistent changes, consider installing it as a service through its GitHub instructions.


{{% /details %}}

> Remember, while these tools and settings can help reduce power consumption, they might also impact the performance of your system under certain workloads.

### Power Management with Linux

* https://askubuntu.com/questions/83685/scheduling-startup-and-shutdown
* https://www.baeldung.com/linux/auto-suspend-wake


### How to Setup WakeOnLan (WoL)

* https://www.reddit.com/r/CommercialAV/comments/xcfgyr/is_wakeonlan_still_your_goto_or_are_there_better/
* https://www.reddit.com/r/sysadmin/comments/s3uv8y/wake_on_lan_wol_for_dummies/

---

## Networking

### Network Monitor

#### Net Tools

```sh
sudo apt install net-tools -y
```

Get your public ip:

```sh
curl ifconfig.me
```

Get your local ip:

```sh
ip address
#ip a
```

#### Testing DNS

* What it is my DNS on Linux?

```sh
resolvectl status
```

* What it is the DNS of a particular Network Interface:

```sh
ifconfig
resolvectl dns wlp0s20f3

#change it with
#resolvectl dns wlp0s20f3 9.9.9.9 149.112.112.112
```

* And now, lets test a DNS:

```sh
sudo apt install dnsutils

#example
#nslookup google.com
#ping google.com
```

Worth to have a look: https://weberblog.net/benchmarking-dns-namebench-dnseval/


```sh
cat /etc/resolv.conf
```

You can see the DNS of each Network in your PC with:

```sh
resolvectl status #see which one you want to change, ex: enp2s0
#resolvectl dns enp2s0 9.9.9.9 149.112.112.112
#resolvectl status enp2s0
```

> [Quad9](https://quad9.net/service/service-addresses-and-features/) is a good start point


* DNS Benchmark with namebench:

```sh
sudo snap install namebench-snap
```



### How to Test the network card?

```sh
iperf3 -c 192.168.3.200
```


{{% details title="How to Install & use TMUX" closed="true" %}}

Install TMUX with:

```sh
apt install tmux
#tmux #CTRL+B CTRL+D to detacht and CTRL+A to attach again
```

https://tmuxcheatsheet.com/

{{% /details %}}


{{% details title="Cleaning the System with UI: clean cache, monitor processes, snap packages installed, apt repositories.." closed="true" %}}

```sh
sudo add-apt-repository ppa:oguzhaninan/stacer
sudo apt-get update
sudo apt-get install stacer
#stacer
```
https://tmuxcheatsheet.com/

{{% /details %}}



---

## FAQ

### Must know CLI's

{{% details title="What's taking that much disk space?" closed="true" %}}

```sh
du -h --max-depth=1 ~/ | sort -rh

#sudo apt-get install ncdu
#ncdu /
```

{{% /details %}}


* For Power Management:

{{% details title="How to turn off" closed="true" %}}

```sh
systemctl suspend
```

{{% /details %}}


* For Networking:

{{% details title="How to know my local IP?" closed="true" %}}

```sh
hostname -I
```

{{% /details %}}



{{% details title="What if I need to add my IPv6 address too?" closed="true" %}}

You can check your raspberry IPV6 with:

```sh
ifconfig
```
{{% /details %}}



{{% details title="How to get UID and GUI" closed="true" %}}

```sh
id pi #id <your username>
```

{{% /details %}}


### How to use mac in Linux

{{% details title="Install Sosumi" closed="true" %}}


```sh
#https://snapcraft.io/install/sosumi/ubuntu
sudo snap install sosumi

#CTRL+ALT+G #to get out of the VM


#sudo snap remove sosumi
```

> Interested in [VMs? Check this out](https://jalcocert.github.io/Linux/docs/debian/virtualization/#how-to-virtualize).


{{% /details %}}


### How to Clone a SSD?

{{% details title="Clone your drives with Clonezilla" closed="true" %}}

Save and restores only used blocks in a hard drive [with Clonezilla](https://github.com/stevenshiau/clonezilla) 

```sh
apt update
apt install clonezilla
```

You can also download the ISO, boot clonezilla from usb and select: [device to device](https://www.youtube.com/watch?v=34MT6frNp5w) 

Be carefull with the options you choose (source device, destination...)

{{% /details %}}

### How to Benchmark Linux

* Phoronix Test Suite
* MemTest
* prime95

{{% details title="SSD Benchmark With [KDiskMark](https://github.com/JonMagon/KDiskMark)" closed="true" %}}

Install it with [FlatPak](https://flathub.org/apps/io.github.jonmagon.kdiskmark):

![KDiskMark Benchmark Example](/images/benchmarks/ssd-nvme-pcie.png)


{{% /details %}}


### Screen Share with Linux

{{% details title="With [RustDesk](https://github.com/rustdesk/rustdesk/releases)" closed="true" %}}

Install RustDesk with [Flatpak](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#flatpak):

```sh
sudo apt install flatpak
flatpak --version
#flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

wget https://github.com/rustdesk/rustdesk/releases/download/1.2.3-1/rustdesk-1.2.3-x86_64.flatpak
flatpak install rustdesk-1.2.3-x86_64.flatpak

flatpak run com.rustdesk.RustDesk
```
{{% /details %}}

* Remmina, Vinagre, TigerVNC
* Guacamole with Docker



{{% details title=" How to Create Custom Aliases" closed="true" %}}


Lets edit this file:


```sh
nano ~/.bash_aliases
```

Add this line to know your public ip address by typing myip on the terminal:


```sh
alias myip='curl ipinfo.io/ip' #public ip address
```

Use this command to be able to use the new alias already in the current session


```sh
source ~/.bashrc
```

<!-- Personally, I have a file saved with all my alias ready right here, which i simply have to download and my favourite alias will be set in any server with this simple command:
-->

{{% /details %}}




{{% details title=" How to recognize and mount usb ex-fat" closed="true" %}}



```sh
#sudo apt-get install exfat-fuse exfat-utils
sudo apt install exfatprogs

sudo mkdir /mnt/usb
sudo mount /dev/sda1 /mnt/usb #lsblk will tell you which name it has sda1/2....
```

{{% /details %}}


{{% details title=" A better Linux Terminal - Fish vs Tabby" closed="true" %}}

Have a look to [Fish Shell](https://github.com/fish-shell/fish-shell):

```sh
sudo apt install fish
#fish -v

fish #use it
#chsh -s $(which fish) #make it default
```

Or [Tabby](https://github.com/Eugeny/tabby):

```sh
wget https://github.com/Eugeny/tabby/releases/download/v1.0.205/tabby-1.0.205-linux-x64.deb
sudo dpkg -i tabby-1.0.205-linux-x64.deb
sudo apt-get install -f
```

{{% /details %}}