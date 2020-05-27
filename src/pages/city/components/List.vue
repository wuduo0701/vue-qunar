<template>
<div class="list" ref="wrapper">
  <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-container">
          <div class="button">南昌</div>
        </div>
      </div>
    </div>
    <div class="area border-topbottom">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div
          class="button-container"
          v-for="item in hotCities"
          :key="item.id"
        >
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area"
      v-for="(city, key) in cities"
      :key="key"
      :ref="key"
    >
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div
          class="item border-bottom"
          v-for="item in city"
          :key="item.id"
        >
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    // 监听点击的字母变化
    letter () {
      if (this.letter) {
        //   获取点击字母的dom
        const element = this.$refs[this.letter][0]
        // 跳转到该dom
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  .border-bottom
    &:before
      border-color #ddd
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    .title
      line-height .24rem
      background #eee
      padding: .24rem .3rem
      color #000
      font-size .24rem
    .button-list
      overflow hidden
      padding .1rem .4rem .1rem .1rem
      .button-container
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          height .4rem
          line-height .4rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
