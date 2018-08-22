// dynamic route
const goods = resolve => {
  import('components/goods/goods.vue').then(module => {
    resolve(module)
  })
}
const ratings = resolve => {
  import('components/ratings/ratings.vue').then(module => {
    resolve(module)
  })
}
const seller = resolve => {
  import('components/seller/seller.vue').then(module => {
    resolve(module)
  })
}

export default [
  // default jump
  {
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
