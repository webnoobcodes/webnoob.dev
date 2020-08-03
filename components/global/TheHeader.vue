<template>
  <header id="the-header">
    <div class="logo">
      <nuxt-link to="/">
        <img :src="require('~/assets/webnoob-60x60.png')" :srcset="require('~/assets/webnoob-60x60.png')+' 1x, '+require('~/assets/webnoob-120x120.png')+' 2x'" alt="webnoob">
      </nuxt-link>
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="/">START</nuxt-link></li>
        <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
        <li><nuxt-link to="/uses">USES</nuxt-link></li>
      </ul>
    </nav>
    <div class="theme-toggle" @click="toggleTheme">
      <fa-icon :icon="icon" :style="style" size="lg" />
    </div>
  </header>
</template>

<script>
  export default {
    props: ['theme'],
    computed: {
      icon() {
        return this.theme ? ['fad', 'sun'] : ['fad', 'moon'];
      },
      style() {
        return this.theme ? {'--fa-secondary-opacity': 1, '--fa-secondary-color': '#DBDB00', '--fa-primary-color': '#E28C2F'} : "{}";
      }
    },
    methods: {
      toggleTheme() {
        this.$emit('changeTheme');
      }
    }
  }
</script>