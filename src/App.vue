<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--
      keep-alive: 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
      当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated
      这两个生命周期钩子函数将会被对应执行
    -->
    <!-- <keep-alive exclude="Detail"> Detail 组件不缓存处理 -->
    <keep-alive>
      <!-- url match 'seller' will render here -->
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
// import qs from 'query-string'
import { urlParse } from 'common/js/util'
import header from 'components/header/header.vue'
const ERR_OK = 0

export default {
  components: {
    'v-header': header
  },
  data() {
    return {
      seller: {
        // id: qs.parse(location.search.slice(1)).id
        id: (() => { /* immediately run function */
          const queryParam = urlParse() /* get id from url */
          // console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created() {
    this.$http
      .get('/api/seller?id=' + this.seller.id)
      .then(res => { /* vue-resource ajax request */
        res = res.body /* transform to json object */
        /* res.errno, res.data come from build/webpack.dev.conf.js */
        if (res.errno === ERR_OK) {
          /* [res.data](http://localhost:8088/api/seller) */
          this.seller = Object.assign({}, this.seller, res.data) /* Object.assign(): object extend attributes */
        }
      })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import 'common/scss/_mixin.scss';
@import 'common/scss/app.scss';
</style>
