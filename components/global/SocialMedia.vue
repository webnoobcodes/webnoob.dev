<template>
  <div class="socials">
    <div class="platform" v-for="(item, index) in platforms" :key="'platform'+index">
      <a :href="item.link" target="_blank"><fa-icon :icon="['fab', item.icon]" size="3x" :style="{'color': item.color}" /></a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        platforms: [
          { title: 'YouTube', icon: 'youtube', color: '#e34f26', link: 'https://www.youtube.com/webnoob' },
          { title: 'Twitter', icon: 'twitter', color: '#0099e5', link: 'https://www.twitter.com/webnoobcodes' },
          { title: 'Instagram', icon: 'instagram', color: '#833AB4', link: 'https://www.instagram.com/webnoobcodes' },
          { title: 'Github', icon: 'git-alt', color: '#fc6d26', link: 'https://www.github.com/webnoobcodes' },
          { title: 'LinkedIn', icon: 'linkedin', color: '#2867B2', link: 'https://www.linkedin.com/in/mario-laurich/' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .socials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    width: 100%;
    padding: 1em 0;

    .platform {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1em;
      font-family: 'Share Tech';
    }
  }
</style>