<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div
          class="icon"
          v-for="item in page"
          :key="item.title"
          @click="showIcon(item.title)"
        >
          <div class="iconImg">
            <img class="img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        pagination: {}
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    // 分页
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    showIcon (title) {
      this.$router.push({ path: `/leaderBoard/title/${title}` })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  @import '~com-styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom  50%
  .icons
    margin-top .2rem
    .icon
      position relative
      overflow hidden
      float left
      height 0
      width 25%
      padding-bottom 25%
      .iconImg
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .16rem
        padding-top .1rem
        .img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
