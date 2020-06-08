
export default {
  mode: 'universal',
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
  },
  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-okaidia.css'
      }
    }
  },
  generate: {
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
