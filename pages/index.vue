<template>
  <div class="content">
    <h1>Webnoob, Vue.js and other related stuff</h1>
    <div class="article-list">
      <div class="article" v-for="(article, index) in articles" :key="'article'+index">
        <div class="article-date">{{ article.date | formatdate }}</div>
        <h2><nuxt-link :to="article.path">{{ article.title }}</nuxt-link></h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const articles = await $content('articles').sortBy('date', 'desc').fetch()
      
      return {
        articles
      }
    },
    head () {
      return {
        title: 'webnoob',
        meta: [
          { hid: 'description', name: 'description', content: 'Tutorials, courses, and articles about Vue.js and other related stuff. And some plain good old advice.' },
          { hid: 'og:title', name: 'og:title', content: 'webnoob' },
          { hid: 'og:description', name: 'og:description', content: 'Tutorials, courses, and articles about Vue.js and other related stuff. And some plain good old advice.' },
          { hid: 'og:type', name: 'og:type', content: 'blog' },
        ]
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
