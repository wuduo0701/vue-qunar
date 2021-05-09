<template>
  <div style="padding-bottom: 50px">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item" v-for="item in weekendList" :key="item.id" @click="showWeekList(item.title)">
        <div class="item-img-container">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-name">{{item.info}}</p>
          <p class="item-desc">{{item.title}}</p>
        </div>
      </li>
    </ul>
    <div class="prodcut-space"></div>
    <div class="product-tip">
      <span class="product-tip-icon">❗</span>
      <div class="product-tip-info">
        <span class="product-tip-highlight">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekends',
  props: {
    weekendList: Array
  },
  methods: {
    showWeekList (name) {
      this.$router.push({ path: `/weekendgo/${name}` })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/mixins.styl'
  .weekend-title
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
    background #eee
  .weekend-item
    position: relative
    margin-bottom: .1rem
    background: #fff
    .item-img-container
      overflow: hidden
      height: 0
      padding-bottom: 37.4375%
      .item-img
        width 100vw
    .item-info
      position: relative
      padding: .14rem .2rem .2rem .2rem
      .item-name
        padding-right: 1.4rem
        color: #212121
        font-size: .28rem
        line-height: .48rem
        ellipsis()
      .item-desc
        padding-right: 1.4rem
        color: #616161
        font-size: .24rem
        line-height: .42rem
        ellipsis()
  .prodcut-space
    height .2rem
    margin-top .2rem
    line-height .2rem
    background #eee
    text-indent .2rem
  .product-tip
    padding: .14rem .1rem
    font-size: .24rem
    line-height: .32rem
    color: #616161
    .product-tip-icon
      width: .24rem
      display: block
      float: left
      line-height: .32rem
    .product-tip-info
      margin-left: .3rem;
      .product-tip-highlight
        font-weight: bold;
</style>
