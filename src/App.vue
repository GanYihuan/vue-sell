<template>
  <div id="app">
    <!-- 卖方异步数据被插入到对象中 -->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--
      keep-alive: 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
      当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 
      这两个生命周期钩子函数将会被对应执行
    -->
    <!-- <keep-alive exclude="Detail"> -->
    <!-- name=Detail 组件不缓存处理 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import { urlParse } from 'common/js/util'
import header from 'components/header/header.vue'

const ERR_OK = 0

export default {
	components: {
		'v-header': header
  },
  /* handle data, data need to watch */ 
	data() {
		return {
			seller: {
				/* immediate run function */
				id: (() => {
          /* get id from url */ 
					let queryParam = urlParse()
					return queryParam.id
				})()
			}
		}
  },
  /* handle data, data not need to watch */ 
	created() {
		/* vue-resource */
		/* ajax request, The request data is inserted into the seller object */
		this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
			// console.log(response)
			/* get json object */
			response = response.body
			if (response.errno === ERR_OK) {
        /*
        ...: Expand array content
        Object.assign = ...
        {}: 最终返回的结果; 给对象扩展的属性
        */
        // console.log(this.seller)
				this.seller = Object.assign({}, this.seller, response.data)
			}
		})
	}
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import 'common/scss/_mixin.scss';
@import 'common/scss/app.scss';
</style>
