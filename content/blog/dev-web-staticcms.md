---
title: "Having a look to Static CMS"
date: 2025-02-07
draft: false
tags: ["dev"]
summary: ''
description: 'KeyStatic. Creating a website for a moto blogger.'
url: 'understanding-static-cms'
---


## KeyStatic

I got to know about Keystatic CMS thanks to:

* https://github.com/Boston343/landingpad
* https://landingpad.cosmicthemes.com/
* https://cosmicthemes.com/themes/landing-pad/

> Made by https://webreaper.dev/ | GPL3.0 | A free and open source template to host your links and socials. Built with Astro, Tailwind CSS, and Keystatic CMS by Cosmic Themes.


- [keystatic](https://keystatic.com/) CMS

- https://github.com/Thinkmill/keystatic

> MIT | First class **CMS experience**, TypeScript API, Markdown & YAML/JSON based, no DB

<!-- https://www.youtube.com/watch?v=N3pywDv-0Tg -->

{{< youtube "N3pywDv-0Tg" >}}


I love such kind of theme, to get a one pager of all our [important links/ linkinbios](https://jalcocert.github.io/JAlcocerT/cool-link-in-bios/).

```sh
git clone https://github.com/Boston343/landingpad
#rm -rf .git

npm install
npm run dev
```

And thats it! We can see `localhost:4321` and keystatic applied to the theme at `localhost:4321/admin`.

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/landingpad-keystaticCMS.png)

* https://keystatic.cloud/signin?from=teams

### Local vs Github Mode

https://keystatic.com/docs/github-mode

One of the important files is `keystatic.config.tsx`:

For local mode, we just used:

```tsx
import { config } from "@keystatic/core";
import { collection, fields, singleton } from "@keystatic/core";

export default config({
	// works in local mode in dev, then cloud mode in prod
	storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
	// cloud deployment is free to sign up (up to 3 users per team)
	// docs: https://keystatic.com/docs/cloud
	// create a Keystatic Cloud account here: https://keystatic.cloud/
	cloud: { project: "cosmic-themes/landingpad" },
	ui: {
		brand: { name: "Cosmic Themes" },
	},
```

But for Github mode: http://127.0.0.1:4321/keystatic/setup

```tsx
import { config } from "@keystatic/core";
import { collection, fields, singleton } from "@keystatic/core";

export default config({
	// works in local mode in dev, then cloud mode in prod

	//storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },

	storage: {
				kind: "github",
				pathPrefix: "prod",
				repo: {
					owner: "JAlcocerT",
					name: "landingpad"
				}
	},
```

I followed the steps of the video and got this:

It looks like you just tried to create a GitHub App for Keystatic but there is already a GitHub App configured for Keystatic.

You may be here because you started creating a GitHub App but then started the process again elsewhere and completed it there. You should likely go back to Keystatic and sign in with GitHub to continue.

Then, I went back to `localhost:4321/admin` and could see

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/keystaticCMS-github.png)

> keystatic101 was the name i gave to the app

Then I went to github general settings, developer settings:

* https://github.com/settings/apps/keystatic101

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/install-keystatic-app-github.png)

Now, you wont see any error like: *It looks like you just tried to create a GitHub App for Keystatic but there is already a GitHub App configured for Keystatic.You may be here because you started creating a GitHub App but then started the process again elsewhere and completed it there. You should likely go back to Keystatic and sign in with GitHub to continue.*

And whatever you edit with the theme via `localhost:4321/admin` will be automatically pushed to main.

{{< callout type="warning" >}}
When GH Mode is active, the changes wont be happening in the local files, you will need to do `git pull`
{{< /callout >}}

### Github Mode with Github Pages

Im a big fan if github pages.

And this was resonating so much with this setup.

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/github-actions-use-cases/#astro" title="Astro + Github Pages Setup ↗" icon="book-open" >}}
{{< /cards >}}

I had to sync locally the changes done previously:

```sh
#git config pull.rebase true
git pull
```

Then, you just have to add the well known `/.github/workflows/pages.yml`

![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/keystaticcms-githubpages.png)

> And dont forget to activate GH Pages within the **github project UI**


You will notice, that when you use npm run dev and what it gets generated to GH Pages is the original theme content, instead of whats being edited.

Whats the trick?

That we are editing the content of `./prod/src/...` with Keystatic.

So lets adjust `keystatic.config.tsx` and `content.config/ts`:

```tsx
	singletons: {
		/**
		 * * Bio and Config singleton
		 * This gets used by Astro Content Collections, so if you update this, you'll need to update the Astro Content Collections schema
		 */
		config: singleton({
			label: "Bio and Config",
			//path: `src/data/bio/`,
			path: `prod/src/data/bio/`,
```

and also the astro content collection file accordingly:

```ts
const bioCollection = defineCollection({
	//loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/bio" }),
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./prod/src/data/bio" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			theme: z.enum(["dark", "light"]),
			blur: z.enum(["no blur", "blur"]),
			avatar: image(),
			background: image(),
		}),
});
```

dont forget to add proper `astro.config.mjs`

```js
// https://astro.build/config
export default defineConfig({
	site: "https://jalcocert.github.io/landingpad/",
	adapter: netlify({
		imageCDN: false,
	}),
```

<!-- https://youtu.be/BAnfePGzkbg -->

{{< youtube "BAnfePGzkbg" >}}

### Adding KeyStatic to Astro Themes

* https://keystatic.com/docs/installation-astro

The text you've quoted indicates that the guide for adding Keystatic to an Astro project assumes you're using Server-Side Rendering (SSR) mode, specifically with the `output: 'hybrid'` or `output: 'server'` configuration options in your Astro project.  

This implies that the guide *doesn't* directly address how to use Keystatic with Static Site Generation (SSG) mode.

{{< details title="SSR vs SSG? 📌" closed="true" >}}


* **SSR (Server-Side Rendering):**  In SSR, your Astro components are rendered on the server when a user requests a page.  This means the server generates the HTML and sends it to the client (the user's browser).  Keystatic, as a content management system (CMS), likely needs a server-side component to interact with its data and serve it to your Astro components.  The server can dynamically fetch content from Keystatic and incorporate it into the page before sending it to the user.

* **SSG (Static Site Generation):** In SSG, your Astro project is built into a set of static HTML files at build time.  This means there's no server involved when a user visits your site; the pre-generated HTML is simply served.  This presents a challenge for Keystatic because it typically requires a server to function.  If you're generating static pages, there's no server to dynamically fetch content from Keystatic *during runtime*.

**Why the guide likely focuses on SSR:**

The guide probably focuses on SSR because it's the more straightforward approach for integrating a CMS like Keystatic.  With SSR, you have a server that can:

1. **Connect to Keystatic:**  The server can make requests to Keystatic's API to retrieve content.
2. **Dynamically generate pages:** Based on the content from Keystatic, the server can render the appropriate Astro components and generate the HTML.
3. **Serve the HTML:** The server sends the generated HTML to the user's browser.

**Can you use Keystatic with SSG?**

It's *possible* to use Keystatic with SSG, but it usually requires a different approach.  Here are some potential strategies:

1. **Build-time fetching:** You could fetch the content from Keystatic *during the build process*.  This would involve using a build script or plugin that connects to Keystatic, retrieves the necessary data, and then uses that data to generate the static HTML files.  This means your content would be "baked into" the static site.  Any changes in Keystatic would require a rebuild of your site.

2. **Client-side fetching (with limitations):**  You might be able to use Keystatic's API directly in your Astro components on the client-side.  However, this approach often has limitations, especially if Keystatic requires any server-side logic or authentication.  It also might not be ideal for SEO, as the content would be loaded after the initial HTML is rendered.

3. **Hybrid approach:**  You could potentially use a hybrid approach where some parts of your site are statically generated, and other parts (like a blog or news section) are rendered using SSR.  This would allow you to use Keystatic for the dynamic parts of your site.

**In summary:** The guide you quoted likely focuses on SSR because it's the most common and easiest way to integrate Keystatic with Astro.  Using Keystatic with SSG is possible but generally requires more advanced techniques like build-time fetching or a hybrid approach.  You'll need to consult Keystatic's documentation or community forums for specific instructions on how to use it with SSG.

{{< /details >}}


---

## Conclusion

https://jalcocert.github.io/landingpad/

### KeyStatic + GH Pages + a Server

Clone the repository to your VPS:

```sh
git clone https://github.com/JAlcocerT/landingpad
cd landingpad
```


Get the [server ready for astro](https://jalcocert.github.io/JAlcocerT/using-astro-as-website/):

```sh
# Verify installation
node -v   # Should show Node.js version - 20.18.1
npm -v    # Should show npm version - 10.8.2

npm install #dependencies
```

```sh
npm run dev
```

You will need to add to `astro.config.mjs` the following so that you can see the dev version

```js
  server: {
    host: '0.0.0.0', // Listen on all network interfaces (for local network access)
    // OR
    // host: true,      // Listen on all network interfaces (simpler alternative)
    // OR
    // host: 'your_server_ip_address', // Replace with your server's actual IP (less common)
    port: 4321,      // Optional: Specify the port (if you want something other than the default 4321)
  },
```

And now you will be able to access it via the server IP:


![KeyStatic CMS with LandingPad Theme](/blog_img/web/staticcms/landingpad-vps.png)


#### Container for Astro

But server ip and http...

lets make it better: with a container for astro and NGINX for https

1. Container for Astro (Node) - https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/#node
2. NGINX Setup Guide


{{< details title="Node Docker Files 📌" closed="true" >}}

```sh
sudo docker pull node:20.12.2
#docker build -t mynode_webapp:cyclingthere .
docker build -t astrokeystatic:landingpad .
```


> The built took ~2min 25s on a CX22 Hetzner VPS

Now, you just have to get into the container and run it:

```sh
sudo docker run -d -p 4321:4321 --name astrokeystaticvps astrokeystatic:landingpad tail -f /dev/null

docker exec -it astrokeystaticvps /bin/bash
#git --version
#npm -v
#node -v #you will see the specified version in the image

npm run dev
```

And it is available at `serverip:4321`, as the container has the same port mapped on the VPS host!

```Dockerfile
# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.12.2
#https://hub.docker.com/layers/library/node/20.12.2/images/sha256-740804d1d9a2a05282a7a359446398ec5f233eea431824dd42f7ba452fa5ab98?context=explore

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install Astro globally
#RUN npm install -g astro

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

#If you'd like to set npm run dev as the default command for the container
# Add this line at the end of your Dockerfile
#CMD ["npm", "run", "dev"]
```

```yml
version: '3'
services:
  app:
    image: mynode_webapp:cyclingthere #node:20.12.2
    container_name: webcyclingthere
    volumes:
      - /home/reisipi/dirty_repositories/cyclingthere:/app
      - .:/app
    working_dir: /app
    command: tail -f /dev/null
    #command: bash -c "npm install && npm run dev"
    ports:
      - 4321:4321
      - 3000:3000
```

```yml
version: '3.8'

services:
  gatsby-dev:
    image: gatsby-dev:latest
    ports:
      - "8001:8000"
    volumes:
      - app_data:/usr/src/app
      - node_modules:/usr/src/app/node_modules
    # environment:
    #   - NODE_ENV=development
    command: tail -f /dev/null #keep it running      

volumes:
  node_modules:
  app_data:
```

{{< /details >}}


{{< details title="Node Dockerfile 📌" closed="true" >}}

```sh
sudo docker pull node:20.12.2
#docker build -t mynode_webapp:cyclingthere .
docker build -t mynode_web:web3 .
```

Depending where you run this, it will take more or less time.

* With a [Opi5](https://jalcocert.github.io/RPi/posts/pi-vs-orange/) I had ~2min33s
* With a Pi4 4GB ~2min18s

```sh
sudo docker run -d -p 4321:4321 --name astro-web3 mynode_web:web3 tail -f /dev/null
#docker run -d -p 3000:3000 --name astro-web3 mynode_web:web3
docker exec -it astro-web3 bash
npm run dev --host

#docker run -d -p 3001:3000 --name astro-web33 mynode_web:web3 npm run dev
```


```dockerfile
# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.12.2
#https://hub.docker.com/layers/library/node/20.12.2/images/sha256-740804d1d9a2a05282a7a359446398ec5f233eea431824dd42f7ba452fa5ab98?context=explore

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install Astro globally
#RUN npm install -g astro

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

#If you'd like to set npm run dev as the default command for the container
# Add this line at the end of your Dockerfile
#CMD ["npm", "run", "dev"]
```

{{< /details >}}

Now, what about **https**?

Recently, I made a post on how to setup **NGINX** on a VPS.

{{< cards cols="2" >}}
  {{< card link="https://github.com/JAlcocerT/Docker/blob/main/Security/Proxy/nginx_docker_compose.yaml" title="NGINX Docker Compose" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/software-for-weddings/" title="NGINX on VPS Post" >}}
{{< /cards >}}

If you are done with it, you will have:

```sh
sudo docker network ls
```

A NGINX docker network available, like `nginx_nginx_default` in my case.

We will apply it, to the running container with the astro (landingpad) + KeystaticCMS:

```sh
docker ps --filter "status=running"
```

For me, that will be `astrokeystaticvps`, as I defined it with:

```sh
#sudo docker run -d -p 4321:4321 --name astrokeystaticvps astrokeystatic:landingpad tail -f /dev/null

#now, we will use the nginx network and make it npm run dev directly
sudo docker run -d \
  --network nginx_nginx_default \
  -p 4321:4321 \
  --name astrokeystaticvps \
  astrokeystatic:landingpad \
  npm run dev
```

Now, just get the key for the DNS challenge, and go to NGINX UI:


{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/software-for-weddings/" title="NGINX on VPS" image="/blog_img/selfh/cloudflare-hetzner-nginx2.png" subtitle="With Cloudflare" >}}
  {{< card link="https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/" title="NGINX Setup" image="/blog_img/web/staticcms/keystatic-nginx-duckdns.png" subtitle="With DuckDNS subdomain" >}}
{{< /cards >}}


#### More

But, if you go to keystatic path...you need to authenticate?

Not really, just copy the `.env` that you have locally and that it has not been synced to github for security reasons.

#### Adding Auth

So now, anyone can just go and edit the website?

Recently I got to know about **TinyAuth**


---

## FAQ


### Other Static CMS

1. https://github.com/keystonejs/keystone
https://keystonejs.com/docs

### Building Webs with AI

https://web.lmarena.ai/leaderboard