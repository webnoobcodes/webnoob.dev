
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@webnoobcodes' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@webnoobcodes' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.webnoob.dev/img/og/default.jpg' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.webnoob.dev/img/og/default.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '@fortawesome/fontawesome-svg-core/styles.css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-resource' },
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/format-date' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/components'
  ],
  components: true, 
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.webnoob.dev',
  },
  pwa: {
    manifest: {
      name: "webnoob, Vue.js and other related stuff",
      short_name: "webnoob",
      start_url: "/index.html",
      display: "standalone",
      background_color: "#fefefe",
      theme_color: "#247000"
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://cdn.jsdelivr.net/npm/*',
          handler: 'cacheFirst',
          method: 'GET'
        },
        {
          urlPattern: 'https://images.weserv.nl/*',
          handler: 'cacheFirst',
          method: 'GET'
        }
      ]
    }
  },
  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-okaidia.css'
      }
    },
    liveEdit: false
  },
  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'webnoob.dev',
          link: 'https://webnoob.dev/feed.xml',
          description: 'Tutorials, courses, and articles about Vue.js and other related stuff. And some plain good old advice.'
        }
        
        const { $content } = require('@nuxt/content')
        const articles = await $content('articles').sortBy('date', 'desc').fetch()

        articles.forEach((article) => {
          const url = `https://webnoob.dev/articles/${article.slug}`

          feed.addItem({
            title: article.title,
            id: url,
            link: url,
            date: new Date(article.date),
            description: article.description,
            content: article.description,
            author: article.author.name,
          })

          feed.addContributor({
            name: 'Mario Laurich',
            email: 'webnoobcodes@gmail.com',
            link: 'https://webnoob.dev/'
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
    }    
  ],
  generate: {
    // subfolders would create redirects on netlify
    subFolders: false,
    // generates a 404 page
    fallback: true,
    // site generation for all articles
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('articles').fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
