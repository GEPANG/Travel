import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import fastClick from 'fastclick'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

//fastClick使用
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
