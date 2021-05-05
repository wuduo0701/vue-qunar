<template>
  <div class="footer">
    <ul class="main-nav">
      <li>
        <div class="flight-link">
          <div class="icon1"></div>
          <span class="title">机票</span>
        </div>
      </li>
      <li>
        <div class="flight-link">
          <div class="icon2"></div>
          <span class="title">酒店</span>
        </div>
      </li>
      <li>
        <div class="flight-link">
          <div class="icon3"></div>
          <span class="title">公寓</span>
        </div>
      </li>
      <li>
        <div class="flight-link">
          <div class="icon4"></div>
          <span class="title">团购</span>
        </div>
      </li>
    </ul>
    <ul class="footer-nav">
      <li>
        <div>登录</div>
      </li>
      <li>
        <div>我的订单</div>
      </li>
      <li>
        <div>最近浏览</div>
      </li>
      <li>
        <div>关于我们</div>
      </li>
    </ul>
    <div class="statement">
      <span>❗ 此作品只用作个人学习</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailFooter'
}
</script>
<style lang="stylus" scoped>
  .footer
    background #f3f3f3
    padding-top .5rem
    .main-nav
      position relative
      width 300px
      height 25px
      margin 0 auto
      padding 10px 10px 0 10px
      overflow hidden
      li
        margin 0px
        padding-left 10px
        height 31px
        width 65px
        float left
        position relative
        background none
        .flight-link
          display block
          height 22px
          width 100%
          font-size 12px
          .icon1
            float left
            width 22px
            height 22px
            background url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
            background-size 175px 50px
            background-position 0 0
          .icon2
            float left
            width 22px
            height 22px
            background url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
            background-size 175px 50px
            background-position -25px 0
          .icon3
            float left
            width 22px
            height 22px
            background url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
            background-size 175px 50px
            background-position -150px 0
          .icon4
            float left
            width 22px
            height 22px
            background url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
            background-size 175px 50px
            background-position -50px 0
          .title
            float left
            display inline-block
            color #9e9e9e
            margin 3px 0 0 5px
            border-bottom 1px solid #acacac
            font-size 12px
    .footer-nav
      width 100%
      height 39px
      padding 10px 0 0 0
      border-bottom 1px solid #cacaca
      li
        float left
        padding-left 40px
        div
          position relative
          color #25a4bb
          text-decoration none
          font-size 14px
    .statement
      color #9e9e9e
      text-align center
      font-size 14px
      padding 10px
</style>
