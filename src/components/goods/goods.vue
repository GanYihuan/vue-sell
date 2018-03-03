<template id="ratings">
  <div>
    <div class="goods">
      <div class="menu-wrapper"></div>
      <div class="foods-wrapper"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0

  export default {
    // 接收外界传入的数据
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        // 异步传入的数据
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http
        .get('/api/goods')
        .then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            this.$nextTick(() => {
//              this._initScroll()
//              this._calculateHeight()
            })
          }
        })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "goods.scss";
</style>
