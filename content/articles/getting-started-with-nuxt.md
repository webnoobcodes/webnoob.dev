---
title: Getting started with Nuxt.js
date: "2020-06-05"
description: "This tutorial is all about, what Nuxt.js in detail is, which features you are getting, and how you can create your first project"
author: 
  twitter: "webnoobcodes"
  name: "Mario Laurich"
---

If you're building applications with Vue.js, you've probably heard of Nuxt.js. Vue already makes the development of JavaScript applications more convenient, but what's the idea behind Nuxt.js?

It's a **progressive framework based on Vue.js**. It simplifies the development of universal or single-page apps.

And this tutorial is all about, what Nuxt.js in detail is, which features you are getting, and how you can create your first project. Finally, you get an overview of the files and folder structure. There are some differences to a regular Vue.js project.

Do you prefer to watch a video about this topic?

👉 [Nuxt JS - First Look](https://youtu.be/fqGnxrWQUoY)

---

## What is Nuxt.js

Nuxt is based on Vue.js official libraries. That means on Vue, the Vue Router, Vuex. And also on powerful development tools like Webpack or Babel, for example. It extends Vue.js by some helpful features, and only with a few extra kilobytes added to your JavaScript files.

Nuxt makes creating universal apps easier.

### What is a universal app?

A universal app can execute on both the client and the server-side.
If you create a single page application with Vue.js, you have a lot of benefits.

For example, you can make very *snappy* UIs that updates fast. But, and this is a problem, Google and other search engines struggle with them because there's no content initially on the page to crawl for SEO purposes. 

All the content is rendered with JavaScript after the fact.

And with a universal app, you have instead of an index.html without content, a preloaded app on a web server that sends rendered HTML for every route to speed up load times and improve SEO by making it easier for search engines to crawl the page.

The next benefit is you can prerender your app to a static website. That's, in my opinion, the most significant innovation. You can create with the command `nuxt generate` a completely static version of your application.

```bash
npm run generate
```

It generates an HTML file for every route, and you have **all the benefits** of a universal app. But the difference is that you don't need a webserver anymore. Everything gets generated during the deployment period.

It's mighty because you get the benefits of universal rendering without the need for a server. You can host your app on GitHub Pages or a cloud service like Google Firebase. You could even host your website with Google Drive, without paying a single coin.

*You are entirely free*.

---

## Create a new Nuxt.js project

You know we can create a new project with `vue create` and then the project-name if you use the vue cli service. 

```bash
vue create project-name
```

But if you want to create a Nuxt project, we have to use another tool - `npx`.
The difference to npm is that npx is a tool to execute node.js packages. npm is only a manager for download and installing node packages.
And it's shipped by default since node package manager in version 5, and you don't have to install it separately. 

But if you don't have it for some reason, you can install it with `npm install -g npx`, -g to install it globally.

```bash
npm install -g npx
```

Finally, you can create a new project with npx, and there is a scaffolding tool you can use, created by the Nuxt team, `create-nuxt-app`,
followed by a project name of your choice.

```bash
npx create-nuxt-app projectname
```

Now you have to choose different options, for example, setting which UI Framework you want to use or installing an additional module, like PWA or Axios. You can change everything later; It's totally up to you.

Generally, I highly recommend that if you start with new things, **keep it simple** and catch up with all the other stuff like test and UI frameworks later when you feel comfortable.

After that process, you can switch to the new project folder and run it with `npm run dev`, instead of serve.

```bash
npm run dev
```

## Project Overview

If you look in your new directory structure for the first time, you will immediately notice that you can find a lot of new stuff. For comparison, a regular Vue project looks more comfortable at first. But all of this is justified because there are also some beneficial new patterns with all that stuff.

First, you have the assets folder. It's entirely the same as with Vue. You can store here all your static assets, your images, for example. But also uncompiled SCSS files, which you are using in the whole application. Also, the components directory sounds familiar. The name suggests, here is the place for all your components. For all? Not entirely. You have here only all the reusable components that you can use in your whole application. Components for the layout and pages have their own directories 

In the layouts folder is already a `default.vue` file with a template and some CSS definitions. New is the `<nuxt />` tag

```html
<template>
  <div class="container">
    <nuxt />  
  </div>  
</template>
```

It's a component provided by Nuxt, which renders the current route of your application. You can compare it to the router view component.

It's a fantastic pattern, in my opinion, because you can use more than one layout. For example, if you have a blog besides your main website, you can create for each part of your site, different designs based on these layout files. Distinct layouts for mobile and desktop it's also possible. **It's a powerful pattern**.

It's also the place where you can use a main navigation, a sidebar or the footer, entirely components, which are used by all routes of your application.

Next, we have the middleware folder.

**Middlewares** lets you define custom functions that can be run *before rendering* a page or a group of pages. Also importantly, the middleware has access to the context, which provides additional objects and params from your application.

As an example, you could evaluate the user agent according to the keyword `mobile` and use a different layout depending on the case. The result is then saved in the context so that it can be used later.

```javascript
export default function(context) {
  let userAgent = context.req.headers['user-agent'];
  context.isMobile = /mobile/i.test(userAgent)
}
```

You have here also access to the Vuex store and the Vue Router.
*That's amazing*. You can create a navigation guard, where you can check an authentication status before the requested route is delivered.

You can do here a lot of great stuff. Very powerful.

The **pages directory** contains your application views and routes. 
Nuxt reads all the .vue files inside this directory and creates the application router automatically.

And Nuxt provides for each component a bunch of additional attributes you can use. For example, which layout you want to use if you have some.
Or you can also use here the head attribute to define a custom title, description or meta tags for this page, and so on.
Nuxt uses here the plugin `vue-meta` for the head attribute, which is also available for a regular Vue.js project.

```javascript
export default {
  head () {
    return {
      title: 'webnoob',
      meta: [
        { hid: 'description', name: 'description', content: '...' }
      ]
    }
  }
}
```

The **plugins folder** is the place where you can set up additional libraries like font-awesome, for example. But you can also create your reusable pieces of JavaScript code. Register components globally and to inject functions or constants could also be a possibility.

As an example, you can set up a new filter for displaying a date. If you register this plugin in your `nuxt.config.js` file, then you can use it easily in you templates with `{{ date | formatdate }}`.

```javascript
import Vue from "vue";

Vue.filter("formatdate", function(value) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date(value);

  return today.toLocaleDateString("en-US", options);
});
```

The **static directory** is directly mapped to the root folder from your application. So that's the place for your robot or sitemap files and so on.

The **store directory** contains your Vuex store files and comes with Nuxt.js out of the box but is disabled by default. Creating a javascript file in this directory enables the store. Nuxt.js lets you decide between 2 store modes at this time. The first one is with the `index.js` file, the classic way, which is also deprecated. So I highly recommend using the second mode with unique names, like `todo.js` or `blog.js`, which gets transferred to the Vuex namespace modules.

The **nuxt.config.js** file is the control center of your entire application.
You can change the mode, from universal to single page application and back. You are entirely free to change that on any time.

```javascript
mode: 'universal',
```

But keep in mind, if you are using the `spa` mode, you can't use server-side rendering or any other special server handling.
On the other hand, in combination with the generate feature, it gives you a *powerful* deployment mechanism.

Furthermore, you have the default set up from the page head, which you can customize with additional meta tags or external resources like Google Fonts.

```javascript
head: {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ],
},
```

Nuxt gives you out of the box a loading progress bar component that's shown between routes. You can customize it, disable it, or create your own. Excellent feature, in my opinion.

```javascript
loading: { color: '#fff' },
```

Below you can register additional global CSS files, plugins and modules.

```javascript
css: [
  { src: '@fortawesome/fontawesome-svg-core/styles.css' }
],
plugins: [
  { src: '~/plugins/font-awesome' },
  { src: '~/plugins/format-date' }
],
modules: [
  '@nuxtjs/pwa',
],
```

## Conclusion

You have probably already noticed that we don't have here a `main.js` file or an App root component, right?

Well, *you don't need it*. Each component in the pages directory is basically a root component from a specific route. And the fantastic thing is you can for each route set up a different layout if you want.

Additional libraries and other javascript pieces, to register global components and other stuff, can you set up as a plugin.
To me, it all seems well organized and tidy. 

Now it's your turn. Create your first Nuxt project today and play around with the new possibilities.
And if you want to see more, I already have a video tutorial about how you can create distinct layouts for mobile and desktop.

👉 [Nuxt JS - Distinct Layouts](https://youtu.be/fqGnxrWQUoY)