<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <div class="favorite" @click="toggleFavorite">
          <span class="icon-favorite" :class="{'active':favorite}"></span>
          <span class="text">{{favoriteText}}</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item border-1px" v-for="(item, index) in seller.supports" :key="index">
            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
            <span class="text">{{seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index">
              <img :src="pic" alt="pic"/>
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info, index) in seller.infos" :key="index">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import star from 'components/star/star'
import split from 'components/split/split'
import { saveToLocal, loadFromLocal } from 'common/js/store'

export default {
  components: {
    star,
    split
  },
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      /* immediately run function */
      favorite: (() => {
        return loadFromLocal(this.seller.id, 'favorite', false)
      })()
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
      this._initPics()
    })
  },
  computed: {
    favoriteText() {
      return this.favorite ? '已收藏' : '收藏'
    }
  },
  methods: {
    toggleFavorite(event) {
      if (!event._constructed) {
        return
      }
      this.favorite = !this.favorite
      saveToLocal(this.seller.id, 'favorite', this.favorite)
    },
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.seller, {
          click: true
        })
      } else {
        this.scroll.refresh() /* prevent route switch scroll no work */
      }
    },
    _initPics() {
      if (this.seller.pics) {
        const picWidth = 120
        const margin = 6
        const width = (picWidth + margin) * this.seller.pics.length - margin
        this.$refs.picList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true, /* horizontal scroll */
              eventPassthrough: 'vertical' /* ignore vertical scroll */
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  },
  watch: {
    seller() { /* seller async data, at first is null */
      this.$nextTick(() => {
        this._initScroll()
        this._initPics()
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'seller.scss';
</style>
