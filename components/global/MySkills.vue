<template>
  <div class="my-skills">
    <div class="skill" v-for="(item, index) in skills" :key="'skill'+index">
      <fa-icon :icon="['fab', item.icon]" size="3x" :style="{'color': item.color}" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        skills: [
          { title: 'HTML5', icon: 'html5', color: '#e34f26' },
          { title: 'CSS3', icon: 'css3-alt', color: '#0099e5' },
          { title: 'JavaScript', icon: 'js', color: '#f7df1e' },
          { title: 'Sass', icon: 'sass', color: '#CD6799' },
          { title: 'Git', icon: 'git-alt', color: '#fc6d26' },
          { title: 'PHP', icon: 'php', color: '#8892be' },
          { title: 'Typo3', icon: 'typo3', color: '#ff8700' },
          { title: 'Symfony', icon: 'symfony', color: '#52565e' },
          { title: 'Vue.js', icon: 'vuejs', color: '#42b883' },
          { title: 'Bootstrap', icon: 'bootstrap', color: '#080135' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    width: 100%;
    padding: 1em 0;

    .skill {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1em;
      font-family: 'Share Tech';
    }
  }
</style>