<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :IconList="IconList"></HomeIcons>
    <HomeLike :likeList="likeList"></HomeLike>
    <HomeWeekends :weekendList="weekendList"></HomeWeekends>
  </div>
</template>
<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeLike from './components/Like'
import HomeWeekends from './components/Weekends'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLike,
    HomeWeekends
  },
  data () {
    return {
      // 轮播图
      swiperList: [],
      // 首页icon
      IconList: [],
      // 猜你喜欢
      likeList: [],
      // 周末去哪儿
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    // axios传值
    getHomeInfoSucc (res) {
      res = res.data
      if (res.success && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.IconList = data.IconList
        this.likeList = data.likeList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style scoped>

</style>
