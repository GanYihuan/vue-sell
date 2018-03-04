<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
    </div>
    <split></split>
    <ratingSelect
      @select="selectRating"
      @toggle="toggleContent"
      :select-type="selectType"
      :only-content="onlyContent"
      :ratings="ratings"
    >
    </ratingSelect>
    <div class="rating-wrapper border-1px">
      <ul>
        <li
          class="rating-item"
          v-for="rating in ratings"
          v-show="needShow(rating.rateType, rating.text)"
        >
          <div class="avatar">
            <img :src="rating.avatar" alt="avatar" width="28" height="28"/>
          </div>
          <div class="content">
            <h1 class="name">{{rating.username}}</h1>
            <div class="star-wrapper">
              <star :size="24" :score="rating.score"></star>
              <span class="delivery" v-show="rating.deliveryTime">
                {{rating.deliveryTime}}
              </span>
            </div>
            <p class="text">{{rating.text}}</p>
            <div
              class="recommend"
              v-show="rating.recommend && rating.recommend.length"
            >
              <span class="icon-thumb_up"></span>
              <span class="item" v-for="item in rating.recommend">
                {{item}}
              </span>
            </div>
            <div class="time">
              {{rating.rateTime | formatDate}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import star from '../star/star.vue'
  import ratingSelect from '../ratingSelect/ratingSelect.vue'
  import split from '../split/split.vue'
  import { formatDate } from '../../common/js/date'

  const ALL = 2
  const ERR_OK = 0

  export default {
    // 接收外界传入的数据
    props: {
      seller: {
        type: Object
      }
    },
    // 内部数据初始化
    data () {
      return {
        // 评价数据集合
        ratings: [],
        // 商品评价初始化
        selectType: ALL,
        // 是否打开 '只看有内容的评价'
        onlyContent: true
      }
    },
    // 生命周期
    created () {
      // 异步数据
      this.$http
        .get('/api/ratings')
        .then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            // 评价数据集合
            this.ratings = response.data
            // async 处理
            // $nextTick在下次 DOM 更新循环结束之后执行延迟回调
            // 修改数据后立即使用这个方法，获取更新后的 DOM
            this.$nextTick(() => {
              // 实时派发scroll事件
              this.scroll = new BScroll(this.$refs.ratings, {
                click: true
              })
            })
          }
        })
    },
    methods: {
      // copy from food.vue -> selectRating()
      selectRating (type) {
        this.selectType = type
        // async 处理
        // $nextTick在下次 DOM 更新循环结束之后执行延迟回调
        // 修改数据后立即使用这个方法，获取更新后的 DOM
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      // copy from food.vue -> toggleContent()
      toggleContent () {
        this.onlyContent = !this.onlyContent
        // async 处理
        // $nextTick在下次 DOM 更新循环结束之后执行延迟回调
        // 修改数据后立即使用这个方法，获取更新后的 DOM
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      // copy from food.vue -> needShow()
      needShow (type, text) {
        // text: 评价的内容
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      }
    },
    filters: {
      // copy from food.vue -> formatDate()
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    components: {
      star,
      split,
      ratingSelect
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "ratings.scss";
</style>
