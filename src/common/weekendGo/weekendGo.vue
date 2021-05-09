<template>
  <div class="page">
    <div class="header">
      {{title}}
      <router-link to="/">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
    </div>
    <div v-for="item in product" :key="item.id">
      <div class="product" @click="showDetial(item.sight_name)">
        <div class="product-img">
          <img :src="item.sight_img">
        </div>
        <div class="product-info">
          <p class="product-name">{{item.sight_name}}</p>
          <p class="product-desc">{{item.sight_info}}</p>
          <div class="product-price">
            <span class="price">￥
              <em class="price-num">{{item.sight_price}}</em>
              <span class="price-start">起</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'weekendGo',
  data () {
    return {
      title: '',
      product: []
    }
  },

  created () {
    this.title = this.$route.params.title
    this.getWeekendInfo()
  },

  methods: {
    getWeekendInfo () {
      axios
        .get('/v1/weekendgo', {
          params: {
            city: localStorage.city,
            title: this.$route.params.title
          }
        })
        .then(this.getWeekendInfoSucc)
        .catch((err) => {
          console.log(err)
        })
    },
    getWeekendInfoSucc (res) {
      res = res.data
      if (res.status === 'success') {
        this.product = res.data
      }
    },
    // 跳转到详情页
    showDetial (name) {
      this.$router.push({ path: `/detail/name/${name}` })
    }
  },
  activated  () {
    this.getWeekendInfo()
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  @import '~com-styles/mixins.styl'
  .page
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    .header
      position relative
      overflow hidden
      height .86rem
      line-height .86rem
      text-align center
      color #fff
      font-size .32rem
      background $bgColor
      .back
        position absolute
        left 0
        top 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
    .product
      position: relative;
      margin-bottom: .2rem;
      background: #fff;
    .product-img
      overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 43.37288%;
      img
        width 100%
    .product-info
      position: relative;
      padding: .14rem .2rem .24rem .2rem;
      .product-name
        padding-right: 2.2rem;
        color: #212121;
        font-size: .36rem;
        line-height: .54rem;
        ellipsis()
      .product-desc
        color: #616161;
        font-size: .26rem;
        line-height: .45rem;
        ellipsis()
      .product-price
        position: absolute;
        top: .25rem;
        right: .2rem;
        .price
          color: #ff8300;
          font-size: .18rem;
          .price-num
            font-size: .4rem;
            margin-left: .04rem;
            font-weight: bold;
          .price-start
            color: #616161;
            font-size: .22rem;
</style>
