import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    // when active, add className=active
    linkActiveClass: 'active'
  })
}
