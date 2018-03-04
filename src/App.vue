<template>
  <div id="app">
    <v-header></v-header>
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
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    // internal data initialization
    data () {
      return {
        seller: {}
      }
    },
    // life circle
    created () {
      // async request data
      this.$http
        .get('/api/seller')
        .then((response) => {
          console.log(response)
          if (response.body.error === ERR_OK) {
            // 展开数组内容:
            // es6-> ...
            // es5-> Object.assign
            this.seller = Object.assign({}, this.seller, response.data)
          }
        })
    },
    // component registration
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/scss/mixin.scss";
  @import "./common/scss/app.scss";
</style>
