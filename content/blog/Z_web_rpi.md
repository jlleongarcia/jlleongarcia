---
title: "Raspberry Pi First Steps on Github Pages"
date: 2021-08-25T23:20:21+01:00
draft: false
tags: ["Self-Hosting","Web"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/RPi/image?description=1&language=1&name=1&owner=1&pattern=Solid&theme=Light" # image path/url 
    alt: "My Github Pages with RPi setup information." # alt text
description: 'A quick guide to Raspberry Pi 4'
summary: 'I have just deployed on Github Pages content regarding Raspberry Pi'
url: 'raspberrypi-starting-guide'
---

During this month, have decided to create a more **detailed guide on Github Pages on how to get started with a Raspberry Pi.**

I will use this content as a personal wiki, so whenever I find some block that requires some effort to find out on the internet, will make a concise guide right here: <https://jalcocert.github.io/RPi/>

Jekyll uses **Ruby language**.

{{< details title="Ruby + jekyll + Chirpy Setup 📌" closed="true" >}}

There are two ways!

1. Clone the [starter](https://github.com/cotes2020/chirpy-starter) and name it as `urusername.github.io`

This will spin up GHPages & GH Action automatically and provide the theme ready for action.


2. Pro way: Also with [GH Pages + Actions WF](https://github.com/JAlcocerT/RPi/blob/main/.github/workflows/jekyll-pages-deploy.yml)

```sh
git clone https://github.com/cotes2020/jekyll-theme-chirpy && cd ./jekyll-theme-chirpy
```

```sh
sudo apt install ruby-full build-essential zlib1g-dev

#https://jekyllrb.com/docs/ruby-101/#gems
echo '# Install Ruby Gems to ~/.gem' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem update --system
gem install jekyll bundler

##ARM64 not there yet
# curl -sSL https://get.rvm.io | bash -s stable
# source ~/.rvm/scripts/rvm
# rvm install 3.1
# sudo apt install -y autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev
# rvm install 3.1 --disable-binary
```

See the magic of **Jekyll+Chirpy** at work:

```sh
#git clone https://github.com/cotes2020/jekyll-theme-chirpy && cd ./jekyll-theme-chirpy

sudo apt install -y nodejs npm #you need npm, (tried with 7.2.0)
bash tools/init.sh #initialize
bundle
bundle exec jekyll s #local server - http://127.0.0.1:4000
#bundle exec jekyll serve --host 192.168.1.100 --port 4000
```

{{< /details >}}

---

* References
    * The Jekyll Theme I use - https://github.com/cotes2020/jekyll-theme-chirpy
    * https://zweilosec.github.io/posts/jekyll-chirpy-github-pages-blog/
    * Adding **Web Analytics to Jekyll Chirpy** - https://aouledissa.com/posts/Jekyll-Google-Analytics-4-Integration-With-Chirpy-Theme/

* Other Interesting jekyll Themes
    * https://github.com/wowthemesnet/jekyll-theme-memoirs