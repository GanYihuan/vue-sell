<template>
  <transition name="move">
    <div
      class="food"
      v-show="showFlag"
      ref="food"
    >
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="food.image"/>
          <div class="back" @click="hide">
            <i class="iconfont icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartControl-wrapper">
            <cartControl :food="food"></cartControl>
          </div>
          <transition name="fade">
            <div
              class="buy"
              v-show="!food.count || food.count === 0"
              @click.stop.prevent="addFirst($event)"
            >
              加入购物车
            </div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <!--<ratingselect-->
            <!--@increment="incrementTotal"-->
            <!--:select-type="selectType"-->
            <!--:only-content="onlyContent"-->
            <!--:desc="desc"-->
            <!--:ratings="food.ratings"-->
          <!--&gt;-->
          <!--</ratingselect>-->
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li
                class="rating-item border-1px"
                v-show="needShow(rating.rateType, rating.text)"
                v-for="rating in food.ratings"
              >
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar" alt="avatar"/>
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <i :class="rating.rateType === 0 ? 'icon-thumb_up' : rating.rateType === 1 ? 'icon-thumb_down' : ''"></i>
                  {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || food.ratings.length === 0">
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import cartControl from '../cartControl/cartControl.vue'
  // 灰色间隔
  import split from '../split/split.vue'
  // 评价组件
  // import ratingselect from '../ratingselect/ratingselect.vue'
  // Vue set()
  import Vue from 'vue'
  import { formatDate } from '../../common/js/date'

  const ALL = 2

  export default {
    // 接收外界传入的数据
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        // 是否展示食物界面
        showFlag: false,
        // 商品评价初始化
        selectType: ALL,
        // 是否打开 -> '只看有内容的评价'
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = true
        // asynchronous
        this.$nextTick(() => {
          if (!this.scroll) {
            // $el    Vue 实例使用的根 DOM 元素。
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      },
      incrementTotal (type, data) {
        this[type] = data
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      addFirst (event) {
        if (!event._constructed) {
          return
        }
        Vue.set(this.food, 'count', 1)
//        this.$emit('add', event.target);
      },
      needShow (type, text) {
        // text: 评价的语言
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      },
      selectRating (type) {
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    components: {
      cartControl,
      // ratingselect,
      split
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "food.scss";
</style>
