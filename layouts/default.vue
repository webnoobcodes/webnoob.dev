<template>
  <div :class="theme">
    <div id="scroll-progress-container">
      <div class="scroll-progress" :style="{'width': progressWidth+'%'}"></div>
    </div>    
    <div class="base">
      <div class="main-container">
        <TheHeader :theme="darkTheme" @changeTheme="toogleTheme" />
        <nuxt />
        <TheFooter />
      </div>
    </div>    
  </div>  
</template>

<script>
  export default {
    data: () => {
      return {
        darkTheme: false,
        progressWidth: 0
      }
    },
    computed: {
      theme() {
        return this.darkTheme ? 'theme--dark' : 'theme--default'
      }
    },
    methods: {
      toogleTheme() {
        this.darkTheme = !this.darkTheme;
      },
      scrollPosition() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.progressWidth = (winScroll / height) * 100;
      }
    },
    watch: {
      darkTheme: function(theme) {
        localStorage.setItem("darkTheme", JSON.stringify(theme));
      }
    },
    mounted() {
      this.darkTheme = JSON.parse(localStorage.getItem("darkTheme"));
      window.addEventListener("scroll", this.scrollPosition);
    },
    created() {
      if(!process.server && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.darkTheme = true;
      }
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollPosition);
    }
  }
</script>

<style lang="scss">
  @import "~/assets/base";
</style>
