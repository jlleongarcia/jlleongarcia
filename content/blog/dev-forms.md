---
title: "Forms and Newsletters for your Website"
date: 2024-09-07T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "Easy Forms/Newsletters for Websites"
---

To give some cool functionality to static websites, we can use **some tricks**.

{{< callout type="info" >}}
  It is beneficial to [review some CSS Tricks](https://jalcocert.github.io/JAlcocerT/blog/dev-css/)
{{< /callout >}}

## Newsletters

### Keila

OhMyForm is Discontinued, but...

* **Keila** https://github.com/pentacent/keila - aGPL

>  Open Source Newsletter Tool. 


{{< dropdown title="Keila Setup Docker ⏬" closed="true" >}}

* https://hub.docker.com/r/pentacent/keila/tags?page=1&ordering=last_updated - X86 only

```yml
# This docker-compose file is intended for local testing and NOT intended to be
# production ready.

version: "3"

services:
  keila:
    image: pentacent/keila:latest
    ports:
      - "4000:4000"
    depends_on:
      - mariadb
    build:
      context: ../
      dockerfile: ops/Dockerfile
    environment:
      SECRET_KEY_BASE: "${YOUR_SECRET_KEY}"
      DB_URL: "mysql://root:password@mariadb/keila"
      URL_HOST: "${YOUR_URL_HOST}"
      MAILER_SMTP_HOST: "${YOUR_MAILER_SMTP_HOST}"
      MAILER_SMTP_USER: "${YOUR_MAILER_SMTP_USER}"
      MAILER_SMTP_PASSWORD: "${YOUR_MAILER_SMTP_PASSWORD}"

  mariadb:
    image: mariadb:latest
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: keila

```
{{< /dropdown >}}

### Mailchimp

You ll still need a back end to process the calls (if you are using static sites)

### MailerLite

Another option is [MailerLite](https://www.mailerlite.com/invite/225babb421546).

{{< details title="Setup MailerLite 📌" closed="true" >}}

You will need to authenticate that you own the email and also the domain (with DNS).

I am using Cloudflare for that domain, and the DNS were updated automatically via UI.

There are some CName and txt records and they will be DNS only, not proxied.

![Wordpress Google Page Speed Desktop](/blog_img/web/SaaS/mailerlite-domainsetup.png)


{{< /details >}}

---

## Contact Forms

* Paid - https://formpress.org/pricing
    * https://kwesforms.com/pricing

{{< details title="Using Google Forms 📌" closed="true" >}}

You just need to copy the html!

Generate a Google form and **add the iframe** wherever you want to place it:

```html
<iframe src="https://docs.google.com/forms/d/e/some-id-of-your-form/viewform?embedded=true" width="640" height="854" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```

{{< /details >}}

### Formbricks

You can use it for launching surveys or contact forms.

* https://formbricks.com/
<!-- 
https://app.formbricks.com/environments/cm0vgwasu00061484bqmicsbm/surveys -->

> Can be **linked with**: GSheets also with [cal.com](https://app.cal.com/auth/login), and [more integrations like webhooks](https://app.formbricks.com/environments/cm0vgwasu00061484bqmicsbm/integrations)


{{< details title="Using FormsBricks 📌" closed="true" >}}

```sh
yarn add @formbricks/js
```

Before the </head> add:

```html
<!-- START Formbricks Surveys -->
<script type="text/javascript">
  !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://app.formbricks.com/js/formbricks.umd.cjs";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),setTimeout(function(){window.formbricks.init({environmentId: "someidforyou", apiHost: "https://app.formbricks.com"})},500)}();
  </script>
  <!-- END Formbricks Surveys -->
```

{{< /details >}}

### GoodSheet

{{< details title="Using GoodSheet.io 📌" closed="true" >}}


{{< /details >}}


### symfony forms

https://github.com/symfony/form

### Formulosity

https://github.com/plutov/formulosity

### HeyForms

You can try their SaaS - https://heyform.net/pricing

{{< details title="How to Setup HeyForms 📌" closed="true" >}}

* https://hub.docker.com/r/heyform/community-edition/tags
* https://github.com/heyform/heyform/tree/main
* https://docs.heyform.net/open-source/self-hosting

```yml

```

{{< /details >}}

### TypeForm

---

## FAQ

Check that your web is performing well with:

* https://pagespeed.web.dev/
* https://web-check.xyz/



### Other Tools

https://www.tawk.to/ - Talk to customers

#### Appointments with cal.com


* https://www.cal.com/
  * You can integrate it with stripe to collect payment in advance of the meeting, also to require requestor email validation.