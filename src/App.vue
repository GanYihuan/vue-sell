<template>
  <div id="app">
    <!-- :seller: v-bind Binding Data -->
    <!-- The Seller object is stuffed with asynchronous data. -->
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
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import { urlParse } from './common/js/util'
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    // life circle
    created () {
      // vue-resource
      // ajax request, Request data to plug in the seller object
      this.$http
        .get('/api/seller?id=' + this.seller.id)
        .then((response) => {
          console.log(response)
          response = response.body
          if (response.errno === ERR_OK) {
            // Expand the contents of an array
            // es6: ...
            // es5: Object.assign
            this.seller = Object.assign({}, this.seller, response.data)
          }
        })
    },
    // component register
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/scss/_mixin.scss";
  @import "./common/scss/app.scss";
</style>
