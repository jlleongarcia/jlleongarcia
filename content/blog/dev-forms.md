---
title: "Forms and Newsletters for your Website"
date: 2024-09-07T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: "Easy Forms/Newsletters for Websites: MailerLite and more"
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

It can help you collect emails with **signup forms and send Newsletters, also marketing campaigns.**

They can work as **pop-ups or as embedded forms**.

> At the time of writing, mailerlite is free up to 1k subs. They also have an email API, [mailersend](https://www.mailerlite.com/pricing-mailersend)

{{< details title="Setup MailerLite 📌" closed="true" >}}

You will need to authenticate that you own the email and also the domain (with DNS).

Go to your [mailerlite dashboard UI](https://dashboard.mailerlite.com)

I am using Cloudflare for that domain, and the DNS were updated automatically via UI.

There are some CName and txt records and they will be DNS only, not proxied.

![Wordpress Google Page Speed Desktop](/blog_img/web/SaaS/mailerlite-domainsetup.png)

Create a new form and you will get the JS to place before the `</head>` of your web.

```js
<!-- MailerLite Universal -->
<script>
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', 'some_acount_id');
</script>
<!-- End MailerLite Universal -->
```

> You can also get a button, so that it opens as pop up:

```html
<a class="ml-onclick-form" href="javascript:void(0)" onclick="ml('show', 'some_id_here', true)">Click here to show form</a>
```

{{< /details >}}


{{< details title="MailerLite API with Python 📌" closed="true" >}}

* https://dashboard.mailerlite.com/integrations/api


{{< /details >}}

{{< details title="MailerLite WebHooks to do...whatever 📌" closed="true" >}}

* https://dashboard.mailerlite.com/integrations/webhooks

{{< /details >}}

You can also set **[automations](https://dashboard.mailerlite.com/automations) with MailerLite**: when a new sub -> then something.

You can use this, for example, to send a welcome email.

{{< callout type="info" >}}
  MailerLite can be [integrated also with](https://www.mailerlite.com/integrations) GSheets, Zapier, Stripe, email verification tools...
{{< /callout >}}

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

You can use FormBricks for **launching surveys or contact forms.**

Go to the [FormBricks UI](https://formbricks.com/)

<!-- 
https://app.formbricks.com/environments/cm0vgwasu00061484bqmicsbm/surveys -->

> Can be **linked with**: GSheets also with [cal.com](https://app.cal.com/auth/login), and [more integrations like webhooks](https://app.formbricks.com/environments/cm0vgwasu00061484bqmicsbm/integrations)


If you link it with GSheets, you will have Formbricks Sheets Integration as an App in the [security tab of your gmail acc](https://myaccount.google.com/security-checkup)

![Formbricks-GSheets](/blog_img/web/FormBricks_GSheets_App.png)


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

Setup FormBricks with no code, or with **code actions**

```py
Setting Up Code Actions

For more granular control, you can implement actions directly in your codebase:

    Configure the Action: First, add the action via the Formbricks web interface to make it available for survey configuration. After that you can fire an action using formbricks.track()

    Track an Action: Use formbricks.track() to send an action event to Formbricks.

Track an action

formbricks.track("Action Name");

Here is an example of how to fire an action when a user clicks a button:
Track Button Click

const handleClick = () => {
  formbricks.track("Button Clicked");
};

return <button onClick={handleClick}>Click Me</button>;
```

{{< callout type="warning" >}}
  It seems that FormBricks Forms can just be embedded and not opened as a hyperlink url.
{{< /callout >}}

### GoodSheet

{{< details title="Using GoodSheet.io 📌" closed="true" >}}


{{< /details >}}


### Symfony Forms

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

Check that your **web is performing** well with [these tools](/create-your-website/#is-my-website-performing-well)

<!-- * https://pagespeed.web.dev/
* https://web-check.xyz/ -->

### Other Tools

https://www.tawk.to/ - Talk to customers

#### Appointments with cal.com


Manage your appointments with [cal.com](https://www.cal.com/).

* You can integrate it with:
  * Stripe to collect payment in advance of the meeting
  * Also to require requestor email validation