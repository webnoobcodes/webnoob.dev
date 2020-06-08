<template>
  <div class="content">
    <h1>Who is webnoob?</h1>
    <p>
      What's going on? My name is Mario, and I have been working as a web developer for many years. The first line of HTML code I have written was in 1999. It was the time of chunky and ugly websites where you used tables to divide and arrange the entire site. 
    </p>
    <p>
      In the '90s, The main job in my spare time was to play video games. But I also wanted a website. Of course a site about video games. With zero knowledge of anything, I tried to build this ugly thing. At that time, I didn't even know that you need a domain and a provider where you had to upload the code. It was costly at this time, so my first website never saw the world. But this first website was the spark that got me started my journey in web development.
    </p>
    <p>
      My passion is teaching and helping people to learn new skills. Some tutorials are meant for beginners, and some are for more experienced users. The core topics at the beginning of my journey are Vue JS and other related stuff.
    </p>

    <h2>Technologies that I'm currently using</h2>
    <p>
      There are, of course, a few more, but these are my current ones I'm using. Everything else is a long time ago and not in the list in order not to inflate it unnecessarily, like jQuery, for example.
    </p>
    <MySkills />

    <h2>Let's connect</h2>
    <p>
      Follow me on <a href="https://youtube.com/webnoob" target="_blank">YouTube</a> and <a href="https://twitter.com/webnoobcodes"  target="_blank">Twitter</a>. That's where I usually hang out. The other platforms is a nice to have if you are a real webnoob fan ;)
    </p>
    <SocialMedia />
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Who is webnoob?',
        meta: [
          { hid: 'description', name: 'description', content: 'Some information about me and how I started my journey in web development' },
          { hid: 'og:title', name: 'og:title', content: 'webnoob - Who is webnoob?' },
          { hid: 'og:description', name: 'og:description', content: 'Some information about me and how I started my journey in web development' },
          { hid: 'og:type',  name: 'og:type', content: 'blog' },
        ]
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
