<template>
  <div id="app">
    <!-- seller Asynchronous data is plugged into the object. -->
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
      keep-alive: The content is cached after the route is loaded,
      and the cache is read when loaded to prevent continuous loading.
    -->
    <!-- <keep-alive exclude="Detail"> -->
    <!-- name=Detail component Do not cache processing. -->
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
	data() {
		return {
			seller: {
				/* immediate run function */
				id: (() => {
					let queryParam = urlParse()
					return queryParam.id
				})()
			}
		}
	},
	created() {
		// vue-resource
		// ajax request, The request data is inserted into the seller object.
		this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
			// console.log(response)
			// get json object
			response = response.body
			if (response.errno === ERR_OK) {
				// Expand array content: ...
				// Object.assign -> ...
				// {}: 最终返回的结果
				// 给对象扩展属性
				this.seller = Object.assign({}, this.seller, response.data)
				// console.log(this.seller)
			}
		})
	}
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import 'common/scss/_mixin.scss';
@import 'common/scss/app.scss';
</style>
