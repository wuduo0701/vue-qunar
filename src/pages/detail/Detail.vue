<template>
  <div>
    <DetailBanner :BannerInfo="BannerInfo"></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailInfo :BaseInfo="BaseInfo"></DetailInfo>
    <DetailTicket :TicketInfo="TicketInfo"></DetailTicket>
    <div class="content"></div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/BaseInfo'
import DetailTicket from './components/Ticket'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailTicket
  },
  data () {
    return {
      //  banner信息
      BannerInfo: {},
      BaseInfo: {},
      //  门票信息
      TicketInfo: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetaiInfoSucc)
    },
    getDetaiInfoSucc (res) {
      res = res.data
      if (res.success && res.data) {
        const data = res.data
        console.log(data.ticketInfo)
        this.BannerInfo = data.BannerInfo
        this.BaseInfo = data.baseInfo
        this.TicketInfo = data.ticketInfo
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
