<template>
  <div class="star" :class="starType">
    <span
      class="star-item"
      v-for="itemClass in itemClasses"
      :key="itemClass.id"
      :class="itemClass"
    >
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
	props: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starType() {
			return 'star-' + this.size
		},
		itemClasses() {
			let result = []
			/* Math.floor: 4.9 -> 4, Math.ceil: 4.1 -> 5 */
			let score = Math.floor(this.score * 2) / 2
			/* 如果有一个小数，半星 */
			let hasDecimal = score % 1 !== 0
			/* 全星 */
			let integer = Math.floor(score)

			for (let i = 0; i < integer; i++) {
				result.push(CLS_ON)
			}
			if (hasDecimal) {
				result.push(CLS_HALF)
			}
			while (result.length < LENGTH) {
				result.push(CLS_OFF)
			}

			return result
		}
	}
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './star.scss';
</style>
