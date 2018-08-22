import Vue from 'vue'
/* Ajax request, XMLHttpRequest */
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import createRouter from './router/router'
import App from './App.vue'
import 'common/scss/index.scss'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = createRouter()

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
