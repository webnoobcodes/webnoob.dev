<template>
  <div class="content">
    <h1>Webnoob, Vue.js and other related stuff</h1>
    <div class="article-list">
      <div class="article" v-for="(article, index) in articles" :key="'article'+index">
        <div class="article-date">{{ article.date | formatdate }}</div>
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
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
        title: 'webnoob.dev',
        meta: [
          { hid: 'description', name: 'description', content: 'Webnoob, Vue.js and other related stuff' }
        ]
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
