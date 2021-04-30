<template>
  <div>
    <div class="banner" @click="showGallery">
      <img class="banner-img" :src="bannerInfo.img">
      <div class="banner-info">
        <div class="banner-info-title">{{ bannerInfo.name }}</div>
        <div class="banner-info-number">
          <span class="iconfont banner-icon">&#xe63d;</span>
          {{bannerInfo.galleryImgs.length}}
        </div>
      </div>
    </div>
    <Gallery
      :imgUrl="bannerInfo.galleryImgs"
      v-show="isShowGallery"
      @closeGallery="closeGallery"
    >
    </Gallery>
  </div>
</template>
<script>
import Gallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      isShowGallery: false
    }
  },
  props: {
    bannerInfo: Object
  },
  components: {
    Gallery
  },
  methods: {
    showGallery () {
      this.isShowGallery = true
    },
    closeGallery () {
      this.isShowGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.6rem
      color #fff
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-info-title
        flex 1
        font-size .36rem
        padding .2rem
        text-shadow 0 1px 2px rgba(0,0,0,0.70)
      .banner-info-number
        position absolute
        left .2rem
        bottom .86rem
        padding 0 .4rem
        height 0.4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0,0,0,.5)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
