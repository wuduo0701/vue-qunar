<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backicon">&#xe624;</div>
    </div>
    <div class="header-input" @click="showSight">
      <span class="iconfont">&#xe632;</span>
      搜索景点门票
    </div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont dowmicon">&#xe612;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  },
  methods: {
    showSight () {
      alert('由于景点数据不多，尚未开发此功能😐，可以看看城市选择的搜索功能')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      width .64rem
      float left
      .backicon
        text-align center
        font-size .3rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top  .12rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .2rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .dowmicon
        margin-top -2rem
        font-size .3rem
</style>
