<template id="ratings">
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <!-- if index ==== currentIndex, current className active -->
          <li
            v-for="(item,index) in goods"
            :key="index"
            class="menu-item"
            :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)"
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
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li
            v-for="(item,index) in goods"
            :key="index"
            class="food-list food-list-hook"
          >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                v-for="(food,index) in item.foods"
                :key="index"
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
                  <div class="cartControl-wrapper">
                    <cartControl @add="addFood" :food="food"></cartControl>
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
      ></shopCart>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import shopCart from '../shopCart/shopCart.vue'
  import cartControl from '../cartControl/cartControl.vue'

  const ERR_OK = 0

  export default {
    // Receive incoming data from outside
    props: {
      // Asynchronous requested data
      seller: {
        type: Object
      }
    },
    data () {
      return {
        // Plug in asynchronous incoming data
        goods: [],
        // 菜的高度形成的数组
        listHeight: [],
        // foodsScroll 滚动的高度
        scrollY: 0,
        selectedFood: {}
      }
    },
    // Calculation properties
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          // 任意一道菜
          let height1 = this.listHeight[i]
          // 下一道菜
          let height2 = this.listHeight[i + 1]
          // 如果没有下一道菜,即当前的菜是最后一道菜
          // 滚动距离处于该菜位置至下一道菜位置之间，返回该菜的下标
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      // 带有count的菜品集合
      // count由cartControl设置
      selectFoods () {
        let foods = []
        // http://localhost:8080/api/goods
        // good: 左侧栏的单个项目
        this.goods.forEach((good) => {
          // food -> 项目里的单个菜品
          good.foods.forEach((food) => {
            // count由cartControl设置
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    // life circle
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http
        .get('/api/goods')
        .then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            // $nextTick在下次 DOM 更新循环结束之后执行延迟回调
            // 修改数据后立即使用这个方法，获取更新后的 DOM
            this.$nextTick(() => {
              this._initScroll()
              this._calculateHeight()
            })
          }
        })
    },
    methods: {
      // 初始化滚动事件
      _initScroll () {
        // 派发scroll事件
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          // 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
          // 实时滚动的位置
          probeType: 3
        })
        // scrollY: foodsScroll 滚动的高度
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      // 每样菜的高度的数组
      _calculateHeight () {
        // 目标元素
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let height = 0
        // listHeight 菜的高度的数组
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          // 任意一道菜
          let item = foodList[i]
          // 菜的高度
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu (index, event) {
        // 去掉自带click事件的点击
        if (!event._constructed) {
          return
        }
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        // 当前菜品
        let el = foodList[index]
        // 300: duration time
        this.foodsScroll.scrollToElement(el, 300)
      },
      addFood (target) {
        this._drop(target)
      },
      _drop (target) {
        // 体验优化,异步执行下落动画
        // $nextTick在下次 DOM 更新循环结束之后执行延迟回调
        // 修改数据后立即使用这个方法，获取更新后的 DOM
        this.$nextTick(() => {
          // 调用shopCart组件里面的drop方法，触发球运动动画
          this.$refs.shopCart.drop(target)
        })
      }
    },
    components: {
      shopCart,
      cartControl
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "goods.scss";
</style>
