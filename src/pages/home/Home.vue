<template>
  <div>
    <HomeHeader></HomeHeader>
    <!-- swpier -->
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <!-- 图标组 -->
    <HomeIcons :iconList="iconList"></HomeIcons>
    <!-- 本周热门 -->
    <HomeHotSight :hotWenkend="hotWenkend"></HomeHotSight>
    <!-- 猜你喜欢 -->
    <HomeLike :likeList="likeList"></HomeLike>
    <!-- 周末去哪儿 -->
    <HomeWeekends :weekendList="weekendList"></HomeWeekends>
    <!-- 页脚 -->
    <!-- <HomeFooter></HomeFooter> -->
    <HomeFooterBar></HomeFooterBar>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHotSight from './components/HotSight'
import HomeLike from './components/Like'
import HomeWeekends from './components/Weekends'
import HomeFooter from '../../common/footer/Footer'
import HomeFooterBar from '../../common/footerBar/footerBar'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHotSight,
    HomeLike,
    HomeWeekends,
    HomeFooter,
    HomeFooterBar
  },
  data () {
    return {
      lastCity: '',
      // 轮播图
      swiperList: [],
      // 首页icon
      // IconList: [],
      iconList: [],
      // 猜你喜欢
      likeList: [],
      // 周末去哪儿
      weekendList: [],
      // 本周热门
      hotWenkend: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios
        .get('/api/index.json')
        .then(this.getHomeInfoSucc)
      axios
        .get('/v1/homePage', {
          params: {
            city: localStorage.city
          }
        })
        .then(res => {
          res = res.data
          if (res.status === 'success') {
            this.getInfo(res.data)
          }
        })
    },
    getInfo (res) {
      if (res) {
        this.swiperList = res.swiperList
        this.weekendList = res.weekendList
        this.iconList = res.iconList
        this.hotWenkend = res.hotWeekend
        this.likeList = res.likeList
      }
    },
    // axios传值
    getHomeInfoSucc (res) {
      res = res.data
      if (res.success && res.data) {
        console.log(res.data)
        const data = res.data
        // this.swiperList = data.swiperList
        this.iconList = data.iconList
        // this.IconList = data.IconList
        this.likeList = data.likeList
        // this.weekendList = data.weekendList
        this.hotWenkend = data.hotList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  //  借助keep-alive的生命周期activated，判断切换的城市是否与上次一样
  //  一样则不发ajax请求。否则重新发ajax
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style scoped>

</style>
