<template>
  <div>
    <div class="like-space"></div>
    <div class="like-title">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢" class="like-title-img">
      <span class="like-title-name">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in likeList"
        :key="item.name"
        :to="'/detail/' + item.name"
      >
        <div class="item-img-container">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.info}}</p>
        </div>
        <div class="item-price-container">
          <span class="item-price">￥{{item.price}}</span>起
          <span class="item-address">{{item.address}}</span>
        </div>
      </router-link>
    </ul>
    <div class="like-more border-top" @click="showAllSight">
      查看所有景点
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeLike',
  props: {
    likeList: Array
  },
  methods: {
    showAllSight () {
      alert('数据正在完善中🧐')
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/mixins.styl'
  .like-space
    height .3rem
    margin-top .2rem
    line-height .3rem
    background #eee
    text-indent .2rem
  .like-title
    position: relative
    padding: .24rem 0 .26rem
    .like-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      margin-left: .2rem
      vertical-align: top
    .like-title-name
      display: inline-block
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
  .like-list
    margin-left: .24rem
    .item
      position: relative;
      overflow: hidden;
      padding: .2rem 0;
      .item-img-container
        float: left
        overflow: hidden
        width: 2rem
        height: 2rem
        .item-img
          width: 100%
      .item-info
        overflow: hidden
        padding-left: .22rem
        .item-title
          margin-top: .26rem
          height: .44rem
          color: #212121
          font-size: .32rem
          line-height: .44rem
          ellipsis()
        .item-desc
          margin-top: .14rem
          height: .34rem
          color #f55
          ellipsis()
      .item-price-container
        position: relative
        margin-top: .22rem
        color: #616161
        font-size: .24rem
        line-height: .4rem
        .item-price
          position: relative
          padding-left: .22rem
          color: #ff8300
          font-size: .4rem
          line-height: .4rem
        .item-address
          position: absolute
          right: .24rem
          bottom: 0
          ellipsis()
  .like-more
    display: block;
    padding: .2rem 0;
    color: #00afc7;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
</style>
