import Vue from 'vue'
import VueResource from 'vue-resource' /* Ajax request, XMLHttpRequest */
import VueRouter from 'vue-router'

import App from './App.vue'
import createRouter from './router/router'
import 'common/scss/index.scss'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
