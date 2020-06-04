import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faCode, faTools, faAngleLeft, faHeart } from '@fortawesome/pro-duotone-svg-icons'
import { faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass, faYoutube, faTwitter, faInstagram, faPatreon } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(
    faMoon, faSun, faCode, faTools, faAngleLeft, faHeart,
    faHtml5, faCss3Alt, faVuejs, faJs, faTypo3, faPhp, faSymfony, faGitAlt, faBootstrap, faSass,  faYoutube, faTwitter, faInstagram, faPatreon
  )

Vue.component('fa-icon', FontAwesomeIcon)