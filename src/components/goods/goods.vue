<template id="ratings">
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li
            v-for="(item,index) in goods"
            class="menu-item"
          >
          <span class="text border-1px">
            <span
              v-show="item.type>0"
              class="icon"
              :class="classMap[item.type]">
            </span>{{item.name}}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                v-for="food in item.foods"
                class="food-item border-1px"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
    data () {
      return {
        // 异步传入的数据
        goods: []
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
          }
        })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "goods.scss";
</style>
