<template>
  <div class="star" :class="starType">
    <span
      class="star-item"
      v-for="itemClass in itemClasses"
      :key="itemClass.id"
      :class="itemClass"
    >
      <!-- :key replace track-by="$index" -->
      <!--
        To give Vue a hint, so that it can track the identity of each node,
        To reuse and reorder existing elements,
        you need to provide a unique key attribute for each item.
        The ideal key value is a unique id for each item.
        This particular attribute is the equivalent of Vue 1.x track-by.
      -->
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
      /*
      4.2 -> 4;  4.8 -> 4.5
			Math.floor: 4.9 -> 4
			Math.ceil: 4.1 -> 5
      */
			let score = Math.floor(this.score * 2) / 2
			/* if have a decimal, half star */
      let hasDecimal = score % 1 !== 0
      /* full star */
			let integer = Math.floor(score)
			for (let i = 0; i < integer; i++) {
				/* full star */
				result.push(CLS_ON)
			}
			if (hasDecimal) {
        /* half star */
				result.push(CLS_HALF)
			}
			while (result.length < LENGTH) {
        /* empty star */
				result.push(CLS_OFF)
			}
			return result
		}
	}
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import 'star.scss';
</style>
