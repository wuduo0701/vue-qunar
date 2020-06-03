<template>
  <div>
    <div
      v-for="item in allSight"
      :key="item.id"
    >
      <DetailBanner :BannerInfo="item.BannerInfo"></DetailBanner>
      <DetailHeader></DetailHeader>
      <DetailInfo :BaseInfo="item.baseInfo"></DetailInfo>
      <DetailTicket :TicketInfo="item.ticketInfo"></DetailTicket>
      <DetailComment :CommentInfo="item.commentInfo"></DetailComment>
      <DetailFooter></DetailFooter>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/BaseInfo'
import DetailTicket from './components/Ticket'
import DetailComment from './components/Comment'
import DetailFooter from '../../common/footer/Footer'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailTicket,
    DetailComment,
    DetailFooter
  },
  data () {
    return {
      //  景点信息
      allSight: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetaiInfoSucc)
    },
    getDetaiInfoSucc (res) {
      res = res.data
      //  动态路由参数
      const routeId = this.$route.params.id
      const allSight = res.data.allSight
      if (res.success && res.data) {
        //  筛选出对应路由的数据
        const sightNow = allSight.filter(item => {
          return item.id === routeId
        })
        this.allSight = sightNow
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
