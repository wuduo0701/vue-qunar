<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.swiperImg">
      <img class="swiper-img" :src="item.swiperImg">
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
      }
    }
  },
  props: {
    swiperList: Array
  }
}
</script>
<style lang="stylus" scoped>
.swiper-img
  width 100%
</style>
