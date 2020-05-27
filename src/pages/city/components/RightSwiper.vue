<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="switchCity"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityRight',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    switchCity (e) {
      this.$emit('changeCity', e.target.innerText)
    },
    touchStart () {
      this.touchStatus = true
    },
    // 实现右侧字母滑动左边内容联动效果
    touchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        //  节流，提高性能，防止每次滑动都进行计算
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('changeCity', this.letters[index])
          }
        }, 16)
      }
    },
    touchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    //解决使用fastClick.js快速点击的错误
    // touch-action: none
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
