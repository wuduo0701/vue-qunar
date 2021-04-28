<template>
  <div>
    <div class="space"></div>
    <div class="hot-title">
      <img class="hot-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title">本周热门榜单</span>
      <div class="title-more" @click="showAllSight">
        全部榜单
        <span class="more-icon iconfont">&#xe68c;</span>
      </div>
    </div>
    <ul class="hot-list">
      <li
        class="host-list-item"
        v-for="item in hotWenkend"
        :key="item.name"
        @click="changerouter(item.name)"
      >
        <div class="item-link">
          <div class="item-tag">
            <img class="item-tag-img" :src="item.hotTag">
          </div>
          <div class="item-wrapper">
            <img :src="item.imgUrl">
          </div>
          <div class="item-sight">{{item.name}}</div>
          <div class="item-price">
            <span class="price">￥
              <em class="price-num">
                {{item.price}}
              </em>
            </span>
            <span class="price-text">起</span>
          </div>
        </div>
      </li >
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeHotSight',
  props: {
    hotWenkend: Array
  },
  methods: {
    showAllSight () {
      alert('页面还在完善中...😵')
    },
    //  路由跳转
    changerouter (id) {
      this.$router.push({ path: `/detail/${id}` })
    },
    mapLevel (level) {
      if (level === 1) {
        return 'level1.png'
      } else if (level === 2) {
        return 'level2.png'
      } else if (level === 3) {
        return 'level3.png'
      }
      return ''
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/mixins.styl'
  .space
    height .3rem
    margin-top .2rem
    line-height .3rem
    background #eee
    text-indent .2rem
  .hot-title
    position relative
    padding .24rem 0 .26rem
    .hot-title-img
      display inline-block
      overflow hidden
      width .3rem
      height .3rem
      margin-left .2rem
      vertical-align top
    .title
      display inline-block
      margin-left .08rem
      height .44rem
      color #212121
      font-size .32rem
      line-height .44rem
    .title-more
      position absolute
      top .36rem
      right .32rem
      color #616161
      font-size .24rem
      line-height .28rem
      .more-icon
        position relative
        left -.12rem
        top .03rem
  .hot-list
    padding 0 .24rem
    overflow-x scroll
    white-space nowrap
    .host-list-item
      position relative
      display inline-block
      padding .06rem
      padding-bottom 0.02rem
      width 2rem
      .item-link
        display block
        width 100%
        height 100%
        .item-tag
          position absolute
          top 0
          left 0
          z-index 1
          overflow hidden
          width .84rem
          height .4rem
          .item-tag-img
            width 100%
            opacity 1
        .item-wrapper
          overflow hidden
          width 2rem
          height 0
          padding-bottom 100%
          background #f0f5f8
          img
            width 100%
        .item-sight
          margin-top .12rem
          color #212121
          font-size .24rem
          line-height .32rem
          text-align center
          ellipsis()
        .item-price
          color #616161
          font-size .24rem
          line-height .36rem
          text-align center
          .price
            color #ff8300
            .price-num
              position relative
              left -.1rem
              font-size .28rem
          .price-text
            position relative
            left -.18rem
</style>
