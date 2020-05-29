<template>
  <div class="baseinfo">
    <div class="flexbox flex-card">
      <div class="flexbox-item">
        <div>
          <span class="comment-card-score">5.0</span>
          <span class="comment-card-text">分</span>
          <span class="comment-card-desc">超赞</span>
        </div>
        <div>
          <span class="comment-num">20291条评论</span>
          <span class="comment-num">4条攻略</span>
          <span class="iconfont right-arrow">&#xe68c;</span>
        </div>
      </div>
      <div class="flexbox-item border-left">
        <div>
          <span class="sightcard-title">景点简介</span>
        </div>
        <div>
          <span class="sightcard-text">开放时间、贴士</span>
          <span class="iconfont right-arrow">&#xe68c;</span>
        </div>
      </div>
    </div>
    <div class="baseinfo-address border-top">
      <p class="baseinfo-address-text">
        <span class="iconfont baseinfo-address-icon">&#xe60f;</span>
        江西省南昌市九龙湖新区南龙蟠街888号
        <span class="iconfont baseinfo-address-arrow">&#xe68c;</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailInfo'
}
</script>
<style lang="stylus" scoped>
  .baseinfo
    position relative
    top -.1rem
    padding .1rem .2rem 0 .2rem
    margin-bottom .1rem
    background #fff
    border-radius .1rem .1rem 0 0
    .flexbox
      display flex
      width 100%
    .flex-card
      padding-top .1rem
      padding-bottom .2rem
      .flexbox-item
        position relative
        flex 1
        .comment-card-score
          font-size .44rem
          color #ff8300
          line-height .44rem
        .comment-card-text
          font-size .28rem
          color #ff8300
          line-height .48rem
        .comment-card-desc
          font-size .28rem
          color #ff8300
          line-height .48rem
          margin-left .2rem
        .comment-num
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-right .2rem
        .right-arrow
          position absolute
          top .3rem
          right .2rem
          color #9e9e9e
          font-size .46rem
        .sightcard-title
          font-size .28rem
          color #212121
          line-height .48rem
          padding-left .3rem
        .sightcard-text
          color #9e9e9e
          font-size .24rem
          padding-left .3rem
    .baseinfo-address
      display block
      position relative
      padding .2rem 0
      line-height .36rem
      color #212121
      .baseinfo-address-text
        padding-right .56rem
        position relative
        padding-left .56rem
        .baseinfo-address-icon
          display block
          height 100%
          line-height 100%
          position absolute
          left 0
          top .16rem
          margin-top -.16rem
          margin-right .2rem
          color #9e9e9e
          font-size .36rem
        .baseinfo-address-arrow
          position absolute
          right 0
          top 50%
          margin-top -.14rem
          color #9e9e9e
          font-size .46rem
</style>
