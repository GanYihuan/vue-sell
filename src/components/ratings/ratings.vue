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
      :select-type="selectType"
      :only-content="onlyContent"
      :ratings="ratings"
      @select="selectRating"
      @toggle="toggleContent"
    >
    </ratingSelect>
    <div class="rating-wrapper border-1px">
      <ul>
        <li
          class="rating-item"
          v-show="needShow(rating.rateType, rating.text)"
          v-for="(rating, index) in ratings"
          :key="index"
        >
          <div class="avatar">
            <img :src="rating.avatar" alt="avatar" width="28" height="28"/>
          </div>
          <div class="content">
            <h1 class="name">{{rating.username}}</h1>
            <div class="star-wrapper">
              <star :size="24" :score="rating.score"></star>
              <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
            </div>
            <p class="text">{{rating.text}}</p>
            <div class="recommend" v-show="rating.recommend && rating.recommend.length">
              <span class="icon-thumb_up"></span>
              <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
            </div>
            <div class="time">{{rating.rateTime | formatDate}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import star from 'components/star/star.vue'
import ratingSelect from 'components/ratingSelect/ratingSelect.vue'
import split from 'components/split/split.vue'
import { formatDate } from 'common/js/date'

const ALL = 2
const ERR_OK = 0

export default {
	components: {
		star,
		split,
		ratingSelect
	},
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			ratings: [],
			selectType: ALL,
			onlyContent: true
		}
	},
	created() {
		this.$http.get('/api/ratings').then(res => {
			/* get json object */
			res = res.body
			if (res.errno === ERR_OK) {
				this.ratings = res.data
				this.$nextTick(() => {
					this.scroll = new BScroll(this.$refs.ratings, {
						click: true
					})
				})
			}
		})
	},
	methods: {
		selectRating(type) {
			this.selectType = type
			this.$nextTick(() => {
				this.scroll.refresh()
			})
		},
		toggleContent() {
			this.onlyContent = !this.onlyContent
			this.$nextTick(() => {
				this.scroll.refresh()
			})
		},
		needShow(type, text) {
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
		formatDate(time) {
			let date = new Date(time)
			return formatDate(date, 'yyyy-MM-dd hh:mm')
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'ratings.scss';
</style>
