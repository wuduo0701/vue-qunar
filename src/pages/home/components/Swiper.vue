<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper-img
  width 100%
</style>
