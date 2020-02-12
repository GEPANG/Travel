import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

//fastClick使用
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
