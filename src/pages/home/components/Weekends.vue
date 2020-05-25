<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-container">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-name">{{item.productName}}</p>
          <p class="item-desc">{{item.productDesc}}</p>
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
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg',
          productName: '南昌必游TOP10',
          productDesc: '看山看水，看看历史对南昌的浸润'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
          productName: 'happy乐园',
          productDesc: '在这里玩转乐园，疯玩起来，无忧无虑一整天！'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/df/9bcc134d126bc4.jpg_r_640x214_58a1f389.jpg',
          productName: '陶醉青山绿水',
          productDesc: '一年四季景色秀丽，层峦叠嶂，岩石高高耸立，白雾弥漫，犹如人间仙境'
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg',
          productName: '狮子峰等你',
          productDesc: '有黄山之险，悬崖峭壁，这里有满山的翠竹、青藤，堪称人间仙境世外桃源'
        },
        {
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/d7/0833d5e316d76f.jpg_r_640x214_258e1eb8.jpg',
          productName: '当地特色',
          productDesc: '独特的自然景色，历史遗留景观，是南昌的特色。'
        }
      ]
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
