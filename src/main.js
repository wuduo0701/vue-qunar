// import Vue from 'vue'
import Vue from './assets/vant/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'

import 'vant/lib/index.css'
import 'swiper/css/swiper.css'
import 'com-styles/reset.css'
import 'com-styles/border.css'
import 'com-styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
