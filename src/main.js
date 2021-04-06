// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import VueScrollto from 'vue-scrollto'
import 'buefy/dist/buefy.min.css'
import '~/assets/css/style.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Buefy)
  Vue.use(VueScrollto)
}
