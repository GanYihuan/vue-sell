<template>
  <div>
    <div class="shopCart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight': totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop.prevent="pay">
          <!-- payClass methods -->
          <div class="pay" :class="payClass">{{payDesc}}</div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball,index) in balls" :key="index">
          <!-- drop is a methods -->
          <!-- beforeDrop is a methods -->
          <transition
            name="drop"
            @before-enter="beforeDrop"
            @enter="dropping"
            @after-enter="afterDrop"
          >
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fold">
        <div class="shopCart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车里面</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li
                class="shopCart-food"
                v-for="(food,index) in selectFoods"
                :key="index"
              >
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price * food.count}}</span>
                </div>
                <div class="cartControl-wrapper">
                  <cartControl @add="addFood" :food="food"></cartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div
        class="list-mask"
        v-show="listShow"
        @click="hideList"
      >
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import cartControl from '../cartControl/cartControl.vue'

  export default {
    // Receive incoming data from outside
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [
            {
              price: 10,
              count: 1
            }
          ]
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        // A set of falling spheres
        dropBalls: [],
        // Whether to collapse
        fold: true
      }
    },
    computed: {
      totalCount () {
        // 点菜的总价
        let count = 0
        // 带有count的菜品集合
        // count由cartControl设置
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      payClass () {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          return `还差￥${diff}元起送`
        } else {
          return '去结算'
        }
      },
      listShow () {
        let that = this
        if (!this.totalCount) {
          // fold: Whether to collapse
          that.fold = true
          return false
        }
        // if collapse, show === false
        let show = !this.fold
        if (show) {
          // $nextTick在下次 DOM 更新循环结束之后执行延迟回调。
          // 修改数据后立即使用这个方法，获取更新后的 DOM。
          this.$nextTick(() => {
            let that = this
            if (!this.scroll) {
              // 派发scroll事件
              that.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      }
    },
    methods: {
      toggleList () {
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
      hideList () {
        this.fold = true
      },
      empty () {
        // 带有count的菜品集合
        // count由cartControl设置
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      pay () {
        if (this.totalPrice < this.minPrice) {
          return
        }
        window.alert('支付' + this.totalPrice + '元')
      },
      addFood (target) {
        this.drop(target)
      },
      // 球体运动，选择性放弃
      // <transition
      // name="drop"
      // @before-enter="beforeDrop"
      // @enter="dropping"
      // @after-enter="afterDrop"
      drop (el) {
        for (let i = 0; i < this.balls.length; i++) {
          // single item
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
      },
      // <transition
      // name="drop"
      // @before-enter="beforeDrop"
      // @enter="dropping"
      // @after-enter="afterDrop"
      beforeDrop (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            // getBoundingClientRect获得元素相当与适口的位置
            let rect = ball.el.getBoundingClientRect()
            // 偏移
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            // 设置初始位置
            el.style.display = ''
            el.style.webkitTransform = `translate3d(0,${y}px,0)`
            el.style.transform = `translate3d(0,${y}px,0)`
            let inner = el.getElementsByClassName('inner-hook')[0]
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
        }
      },
      // <transition
      // name="drop"
      // @before-enter="beforeDrop"
      // @enter="dropping"
      // @after-enter="afterDrop"
      dropping (el, done) {
        // 触发浏览器重构
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight
        this.$nextTick(() => {
          // style reset
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translate3d(0,0,0)'
          inner.style.transform = 'translate3d(0,0,0)'
          el.addEventListener('transitionend', done)
        })
      },
      // <transition
      // name="drop"
      // @before-enter="beforeDrop"
      // @enter="dropping"
      // @after-enter="afterDrop"
      afterDrop (el) {
        let ball = this.dropBalls.shift()
        if (ball) {
          ball.show = false
          el.style.display = 'none'
        }
      }
    },
    components: {
      cartControl
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "shopCart.scss";
</style>
