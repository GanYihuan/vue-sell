import Vue from 'vue'
import VueResource from 'vue-resource'

import router from './router/route'
import App from './App.vue'

import 'common/scss/index.scss'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
