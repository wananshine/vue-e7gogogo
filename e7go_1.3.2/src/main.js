import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import 'lib-flexible'
import 'lib-flexible/flexible.js'


Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;

import './registerServiceWorker'
import './plugins/element.js'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
