<template id="ratings">
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(item, index) in goods"
            :key="index"
            :class="{'current':currentIndex===index}"
            @click="selectMenu(index, $event)"
          >
            <span class="text border-1px">
              <span
                v-show="item.type>0"
                class="icon"
                :class="classMap[item.type]"
              >
              </span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li
            class="food-list food-list-hook"
            v-for="(item, index) in goods"
            :key="index"
          >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                class="food-item border-1px"
                v-for="(food, index) in item.foods"
                :key="index"
                @click="selectFood(food, $event)"
              >
                <div class="icon">
                  <img :src="food.icon"/>
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
                  <div class="cartControl-wrapper">
                    <cartControl :food="food" @add="addFood"></cartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopCart
        ref="shopCart"
        :selectFoods="selectFoods"
        :deliveryPrice="seller.deliveryPrice"
        :minPrice="seller.minPrice"
      >
      </shopCart>
    </div>
    <food :food="selectedFood" @add="addFood" ref="food"></food>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopCart from 'components/shopCart/shopCart.vue'
import cartControl from 'components/cartControl/cartControl.vue'
import food from 'components/food/food.vue'
const ERR_OK = 0

export default {
  components: {
    shopCart,
    food,
    cartControl
  },
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [], /* An array of the heights of each element on the right side */
      scrollY: 0, /* foodsScroll rolling position */
      selectedFood: {}
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http
      .get('/api/goods')
      .then(res => {
        res = res.body /* res.body (json object) */
        if (res.errno === ERR_OK) {
          this.goods = res.data
          /* better-scroll Changed data, dom To be mapped, you have to call it manually. $nextTick() */
          /*
          dom 更新
          async 更新数据
          $nextTick: 在下次 DOM 更新循环结束之后执行延迟回调。
          在修改数据之后立即使用这个方法，获取更新后的 DOM。
          */
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
    })
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        const height1 = this.listHeight[i] /* The height of the current index value */
        const height2 = this.listHeight[i + 1] /* Next height */
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    /* 所有单独的菜肴的集合. */
    selectFoods() {
      const foods = []
      /* http://localhost:8088/api/goods */
      /* good -> 左侧栏的单个项目 */
      this.goods.forEach(good => {
        /* food -> 项目中的单个菜品. */
        good.foods.forEach(food => {
          /* food.count: cartcontrol.vue setting */
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        /*
        probeType: 1，会非实时（屏幕滑动超过一定时间后）派发scroll 事件
        probeType: 2，会在屏幕滑动的过程中实时的派发 scroll 事件
        probeType: 3，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件(实时滚动位置)
        */
        /* 3: 能获得实时滚动位置 */
        probeType: 3
      })
      /* 2. Real-time scroll position */
      /* foodsScroll Real-time scroll position scrollY */
      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      const foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        const item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu(index, event) {
      /* better-scroll */
      /* On the PC will trigger two events, stop this */
      if (!event._constructed) {
        return
      }
      const foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      const el = foodList[index]
      /* better-scroll: target: element, duration: 300ms */
      this.foodsScroll.scrollToElement(el, 300)
    },
    selectFood(food, event) {
      /* better-scroll */
      /* at PC will trigger twice event, stop this */
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      this.$refs.food.show()
    },
    addFood(target) {
      this._drop(target)
    },
    _drop(target) {
      /*
      异步执行抛物小球动画，缓解卡顿
      在下次 DOM 更新循环结束之后执行延迟回调。
      在修改数据之后立即使用这个方法，获取更新后的 DOM。
      */
      this.$nextTick(() => {
        this.$refs.shopCart.drop(target)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'goods.scss';
</style>
