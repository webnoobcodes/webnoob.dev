---
title: "I'm open sourcing my Nuxt.js blog"
date: "2020-06-04"
description: "My new blog I've built and deployed on Netlify"
author: 
  twitter: "webnoobcodes"
  name: "Mario Laurich"
---

I've implemented this new website/blog you can currently see with using Nuxt.js, and deployed it on Netlify. [Telmo](https://twitter.com/telmo) inspired me with his fantastic clean-coded project to create my own. He built the blog [telmo.im](https://telmo.im) with Next.js(React) and markdown files. 
Which is really sexy in my opinion. That's the short story.

In detail, I wanted my personal blog and with **zero knowledge about React** I looked into Telmo's [GitHub](https://github.com/telmogoncalves/telmo) Repo, like a cow would look into the clockwork. But ok, it can't be that difficult, so I was curious about which dependencies he used and decided for me to start from scratch with a new Nuxt.js project. 

Of course, there are some excellent headless CMS that I could use. But I found it a little over the top for a small blog like mine. It was also my wish to write new blog articles with markdown files, which then appear automatically. I chose [@nuxt/content](https://content.nuxtjs.org/) for this kind of job.

If you use the Node Package Manager, then can you inject it directly in your project with:

```bash
npm install @nuxt/content
```

**Here are some features:**
- Blazing fast hot reload in development
- Vue components in Markdown
- Full-text search
- Support static site generation with nuxt generate
- Powerful QueryBuilder API (MongoDB like)
- Syntax highlighting to code blocks in markdown files using PrismJS.
- Handles Markdown, CSV, YAML, JSON(5)
- Extend with hooks

That sounds fantastic to me and is more than what I wanted. 
I highly recommend to take a look in the offical documentation to get the stone rolling.
It's the first time I using it, and let me tell you it's freaking amazing. **Thank you Telmo for the inspiration**.

---

## Repository

You can find the repository here, and if you want to contribute to the project, you are very welcome to open pull requests.

If you want to use my project to code and build your own website, then go for it.

👉 [Open Github](https://github.com/webnoobcodes/webnoob.dev)