<template>
  <div class="content uses">
    <h1>What I use</h1>
    <p>
      Sometimes, people ask me what I use for my daily work, side projects, and for my YouTube videos. So I decided to write up this little list that sums up.
    </p>

    <h2><fa-icon :icon="['fad', 'code']" /> Coding</h2>
    <ul>
      <li>
        <a href="https://www.jetbrains.com/" target="_blank">IntelliJ Ultimate</a>
        <span>// For my work and business projects</span>
      </li>
      <li>
        <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
        <span>// By far my favorite text editor for all my side-projects and YouTube tutorials</span>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=teabyii.ayu" target="_blank">Ayu</a>
        <span>// My new theme for VSCode - love it!</span>
      </li>
      <li>
        <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>
        <span>// The one and only</span>
      </li>
    </ul>

    <h2><fa-icon :icon="['fab', 'youtube']" /> YouTube</h2>
    <ul>
      <li>
        <a href="https://www.blackmagicdesign.com/de/products/davinciresolve/" target="_blank">Davinci Resolve</a>
        <span>// Cutting my footage</span>
      </li>
      <li>
        <a href="https://affinity.serif.com/de/photo/" target="_blank">Affinity Photo</a>
        <span>// Creating Thumbnails and other graphics for my videos</span>
      </li>
      <li>
        <a href="https://www.audacityteam.org/" target="_blank">Audacity</a>
        <span>// Recoding my voice</span>
      </li>
      <li>
        <a href="https://www.epidemicsound.com/referral/w0gujl/" target="_blank">Epidemic Sound</a>
        <span>// Some cool music and SFX stuff that I use for my tutorials</span>
      </li>
    </ul>
    
    <h2><fa-icon :icon="['fad', 'tools']" /> Gear</h2>
    <ul>
      <li>
        Desktop PC
        <span>// 8-9-10-something-year-old machine living under my desk</span>
      </li>
      <li>
        <a href="https://shadow.tech/" target="_blank">Shadow PC</a>
        <span>// My Cloud PC for rendering my Youtube tutorials and other funny stuff - Use my Discount Code: MARZPYUW</span>
      </li>
      <li>
        <a href="http://en.rode.com/microphones/nt-usb" target="_blank">Rode NT-USB</a>
        <span>// Microphone that I use for my tutorials</span>
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/product/m720-triathlon" target="_blank">Logitech M720</a>
        <span>// Triathlon to keep me fit all-day</span>
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/product/k780-multi-device-wireless-keyboard" target="_blank">Logitech K780</a>
        <span>// Logitech as well, for three devices</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'What I use',
        meta: [
          { hid: 'description', name: 'description', content: 'A little list about what I use for my daily work, side projects, and for my YouTube videos' },
          { hid: 'og:title', name: 'og:title', content: 'webnoob - What I use' },
          { hid: 'og:description', name: 'og:description', content: 'A little list about what I use for my daily work, side projects, and for my YouTube videos' },
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
