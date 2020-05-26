<template>
  <div class="search">
    <input type="text" class="input" placeholder="输入城市名">
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  .search
    height 0.72rem
    padding 0 .1rem
    background $bgColor
    .input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
</style>
