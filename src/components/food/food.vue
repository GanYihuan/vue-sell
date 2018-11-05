<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="food.image"/>
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
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
            <cartControl :food="food" @add="addFood"></cartControl>
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
          <ratingSelect
            :selectType="selectType"
            :onlyContent="onlyContent"
            :desc="desc"
            :ratings="food.ratings"
            @select="selectRating"
            @toggle="toggleContent"
          >
          </ratingSelect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li
                class="rating-item border-1px"
                v-for="(rating, index) in food.ratings"
                :key="index"
                v-show="needShow(rating.rateType, rating.text)"
              >
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar" alt="avatar"/>
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <i :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></i>
                  {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || food.ratings.length === 0"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import cartControl from 'components/cartControl/cartControl.vue'
import split from 'components/split/split.vue'
import ratingSelect from 'components/ratingSelect/ratingSelect.vue'
import Vue from 'vue'
import { formatDate } from 'common/js/date'

const ALL = 2

export default {
	components: {
		cartControl,
		ratingSelect,
		split
	},
	props: {
		food: {
			type: Object
		}
	},
	data() {
		return {
			showFlag: false,
			/* ratingSelect.vue: Product evaluation init */
			selectType: ALL,
			/* Whether to open the '只看评论内容' */
			onlyContent: true,
			desc: {
				all: '全部',
				positive: '推荐',
				negative: '吐槽'
			}
		}
	},
	methods: {
		show() {
			this.showFlag = true
			this.selectType = ALL
			this.onlyContent = true
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.food, {
						click: true
					})
				} else {
					this.scroll.refresh()
				}
			})
		},
		hide() {
			this.showFlag = false
		},
		addFirst(event) {
			/* better-scroll at PC will trigger twice event, stop this */
			if (!event._constructed) {
				return
			}
			/* create attribute 'count' */
			Vue.set(this.food, 'count', 1)
			this.$emit('add', event.target)
		},
		needShow(type, text) {
			/* text: Content of evaluation */
			if (this.onlyContent && !text) {
				return false
			}
			if (this.selectType === ALL) {
				return true
			} else {
				return type === this.selectType
			}
		},
		addFood(target) {
			this.$emit('add', target)
		},
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
		}
	},
	watch: {
		selectRating(type) {
			this.selectType = type
			this.$nextTick(() => {
				this.scroll.refresh()
			})
		},
		toggleContent(onlyContent) {
			this.onlyContent = onlyContent
			this.$nextTick(() => {
				this.scroll.refresh()
			})
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
@import 'food.scss';
</style>
