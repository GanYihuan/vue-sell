<template>
  <!-- :class bind，computed inside starType -->
  <!-- starType: Different sizes of stars correspond to different stars. class -->
  <div class="star" :class="starType">
    <!-- v-for: Traversal, key is necessary. -->
    <span
      class="star-item"
      v-for="itemClass in itemClasses"
      :key="itemClass.id"
      :class="itemClass"
    >
      <!-- :key替代track-by="$index" -->
      <!--
        为了给 Vue 一个提示，以便它能跟踪每个节点的身份，
        从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。
        理想的 key 值是每项都有唯一 id。这个特殊的属性相当于 Vue 1.x 的 track-by
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
      starType () {
        return 'star-' + this.size
      },
      itemClasses () {
        let result = []
        // 4.2 -> 4;  4.8 -> 4.5
        // Math.floor: 4.9 -> 4
        // Math.ceil: 4.1 -> 5
        let score = Math.floor(this.score * 2) / 2
        // Is there a half star, Have a decimal ? true half star
        let hasDecimal = score % 1 !== 0
        // All star part
        let integer = Math.floor(score)

        for (let i = 0; i < integer; i++) {
          // All star part
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          // half star
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          // Empty star
          result.push(CLS_OFF)
        }

        return result
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "star.scss";
</style>
