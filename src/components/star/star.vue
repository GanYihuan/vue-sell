<template>
  <!-- starType:不同尺寸星星，对应不同class -->
  <div class="star" :class="starType">
    <!-- $1 -->
    <span
      class="star-item"
      v-for="itemClass in itemClasses"
      :class="itemClass"
      :key="itemClass.id"
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
  const LENGTH = 5;
  const CLS_ON = 'on';  //  星星状态
  const CLS_HALF = 'half';  // 半星
  const CLS_OFF = 'off';  // 没星

  export default {
//    $2
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
      starType() {
        return 'star-' + this.size;
      },
//      $3
      itemClasses() {
        let result = [];
        // 4.2 -> 4;  4.8 -> 4.5
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0; // true false 有小数?, true 就半星
        let integer = Math.floor(score);  // 星星部分,不计半星

        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);  // 全星星
        }
        if (hasDecimal) {
          result.push(CLS_HALF);  // 半星星
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF); // 空星星
        }

        return result;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "star.scss";
</style>
