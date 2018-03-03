<template>
  <div class="cartControl">
    <transition name="move">
      <!-- 减号 -->
      <div
        class="cart-decrease"
        v-show="food.count>0"
        @click.stop.prevent="decreaseCart"
      >
        <span class="inner iconfont icon-remove_circle_outline"></span>
      </div>
    </transition>
    <!-- 数量 -->
    <span class="cart-count" v-show="food.count>0">{{food.count}}</span>
    <!-- 点击"+"时，防止点击中整个item-food事件 -->
    <span class="cart-add iconfont icon-add_circle" @click.stop.prevent="addCart"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    // 接收外界传入的数据
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        // 去掉自带click事件的点击
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          // 添加一个food属性count=1
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        // 触发当前实例上的事件
        // 子组件通过$emit触发父组件的方法
        // <cartControl :food="food" @add="addFood"></cartControl> -> 调用父组件的addFood()
        this.$emit('add', event.target)
      },
      decreaseCart (event) {
        if (!event._constructed) {
          // 去掉自带click事件的点击
          return
        }
        if (this.food.count !== 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "cartControl.scss";
</style>
