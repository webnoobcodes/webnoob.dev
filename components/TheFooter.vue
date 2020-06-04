<template>
  <footer id="the-footer">
    <fa-icon :icon="['fad', 'code']" />
    with
    <fa-icon :icon="['fad', 'heart']" />
    by Mario Laurich ©2020,
    built with <img :src="require('~/assets/nuxt.svg')" width="20px" />
  </footer>
</template>

<script>
  export default {
    data: () => {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  #the-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1em 0;
    font-size: .8rem;

    svg, img { margin: 0 .25em; }
  }
</style>