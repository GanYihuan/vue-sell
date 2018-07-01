import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const goods = resolve => {
  import ('components/goods/goods.vue').then(module => {
    resolve(module)
  })
}
const ratings = resolve => {
  import ('components/ratings/ratings.vue').then(module => {
    resolve(module)
  })
}
const seller = resolve => {
  import ('components/seller/seller.vue').then(module => {
    resolve(module)
  })
}
const routes = [{
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
