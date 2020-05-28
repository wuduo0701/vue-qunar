<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/2004/5c/5c97bfb4aaf82866a3.img.jpg_600x330_844f712f.jpg">
    <div class="banner-info">
      <div class="banner-info-title">南昌融创乐园</div>
      <div class="banner-info-number">
        <span class="iconfont banner-icon">&#xe63d;</span>
        39
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner'
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.6rem
      color #fff
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-info-title
        flex 1
        font-size .36rem
        padding .2rem
        text-shadow 0 1px 2px rgba(0,0,0,0.70)
      .banner-info-number
        position absolute
        left .2rem
        bottom .86rem
        padding 0 .4rem
        height 0.4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0,0,0,.5)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
