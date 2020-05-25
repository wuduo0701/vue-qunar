<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="iconImg">
            <img class="img-content" :src="item.iconImg">
          </div>
          <p class="icon-desc">{{item.iconTitle}}</p>
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
      },
      IconList: [
        {
          id: '0001',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          iconTitle: '热门景点'
        },
        {
          id: '0002',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          iconTitle: '踏青赏花'
        },
        {
          id: '0003',
          iconImg: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          iconTitle: '自然风光'
        },
        {
          id: '0004',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          iconTitle: '亲子游'
        },
        {
          id: '0005',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          iconTitle: '游乐场'
        },
        {
          id: '0006',
          iconImg: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/2d83d4e0f56b2e54c007079f905293e3.png',
          iconTitle: '滕王阁'
        },
        {
          id: '0007',
          iconImg: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/730646c021800ebd1385872fe6212476.png',
          iconTitle: '狮子峰'
        },
        {
          id: '0008',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          iconTitle: '一日游'
        },
        {
          id: '0009',
          iconImg: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          iconTitle: '融创乐园'
        },
        {
          id: '0010',
          iconImg: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/db518e3e320a84f206e6862c0baeeb32.png',
          iconTitle: '南昌玛雅乐园'
        }
      ]
    }
  },
  computed: {
    // 分页
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
