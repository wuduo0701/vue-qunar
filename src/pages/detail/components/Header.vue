<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-back"
      v-show="showHeaderBack"
    >
      <span class="header-back-bg"></span>
      <span class="header-back-icon iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showHeaderBack" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeaderBack: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showHeaderBack = false
      } else {
        this.showHeaderBack = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  .header-back
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    font-size: .36rem;
    color: #fff;
    text-align: center;
    .header-back-bg
      display: block;
      width: .72rem;
      height: .72rem;
      background-color: #000;
      opacity: .5;
      border-radius: .36rem;
    .header-back-icon
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: .72rem;
      line-height: .72rem;
      text-align: center;
      font-size .3rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
  .header-fixed-back
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
