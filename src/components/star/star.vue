<template>
  <!-- :class 绑定，computed里面的starType -->
  <!-- starType: 不同尺寸星星，对应不同class -->
  <div class="star" :class="starType">
    <!-- v-for: 遍历, key是必须的 -->
    <span
      v-for="itemClass in itemClasses"
      :key="itemClass.id"
      class="star-item"
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
  // 有星星
  const CLS_ON = 'on'
  // 半星
  const CLS_HALF = 'half'
  // 没星
  const CLS_OFF = 'off'

  export default {
    // 接收外界传来的数据
    props: {
      // 尺寸
      size: {
        type: Number
      },
      // 分数
      score: {
        type: Number
      }
    },
    // 计算属性
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
        // 是否有半星, true false 有小数?, true 就半星
        let hasDecimal = score % 1 !== 0
        // 全星部分
        let integer = Math.floor(score)

        for (let i = 0; i < integer; i++) {
          // 全星
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          // 半星
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          // 空星
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
