<template>
  <article class="content">
    <nuxt-link to="/" class="article-back">
      <fa-icon :icon="['fad', 'angle-left']" size="2x" /> BACK
    </nuxt-link>
    <h1>{{ page.title }}</h1>
    <div class="author">
      <a :href="'https://twitter.com/'+page.author.twitter" target="_blank" rel="noopener noreferrer nofollow">
        <img :src="'https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/'+page.author.twitter+'&w=60'" :srcset="'https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/'+page.author.twitter+'&w=60 1x, https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/'+page.author.twitter+'&w=120 2x'" width="60px" height="60px" :alt="page.author.twitter" />
        {{ page.author.name }}
      </a>
    </div>
    <nuxt-content :document="page" />
    <Newsletter />
    <h3>Let's connect</h3>
    <p>
      Follow me on <a href="https://youtube.com/webnoob" target="_blank">YouTube</a> and <a href="https://twitter.com/webnoobcodes"  target="_blank">Twitter</a>. That's where I usually hang out. The other platforms is a nice to have if you are a real webnoob fan ;)
    </p>
    <SocialMedia />
  </article>
</template>

<script>
  export default {
    async asyncData ({ params, $content }) {
      const page = await $content('articles', params.article).fetch()

      return {
        page
      }
    },
    head () {
      let data = {
        title: this.page.title,
        meta: [
          { hid: 'description', name: 'description', content: this.page.description },
          { hid: 'og:title', name: 'og:title', content: this.page.title },
          { hid: 'og:description', name: 'og:description', content: this.page.description },
          { hid: 'og:type', name: 'og:type', content: 'article' },
        ]
      }

      if(this.page.image) {
        data.meta.push({ hid: 'og:image', property: 'og:image', content: 'https://www.webnoob.dev/img/og/'+this.page.image })
        data.meta.push({ hid: 'twitter:image', name: 'twitter:image', content: 'https://www.webnoob.dev/img/og/'+this.page.image })
      }

      return data;
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>