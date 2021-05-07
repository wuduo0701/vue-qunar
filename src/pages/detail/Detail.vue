<template>
  <div>
    <DetailBanner :bannerInfo="bannerInfo"></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailInfo :baseInfo="baseInfo"></DetailInfo>
    <DetailTicket :ticketInfo="ticketInfo"></DetailTicket>
    <DetailComment :commentInfo="commentInfo"></DetailComment>
    <DetailFooter></DetailFooter>
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
      name: '',
      bannerInfo: {
        name: '',
        img: '',
        galleryImgs: []
      },
      baseInfo: {},
      ticketInfo: {},
      //  景点信息
      allSight: [],
      commentInfo: []
    }
  },
  mounted () {
    this.name = this.$route.params.name
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json')
      //   .then(this.getDetaiInfoSucc)
      axios
        .get('/v1/detail', {
          params: {
            city: localStorage.city,
            name: this.name
          }
        })
        .then(res => {
          res = res.data
          if (res.status === 'success') {
            this.getInfoSucc(res.data)
          }
        })
    },
    getInfoSucc (res) {
      if (res) {
        this.handleBanner(res.bannerImg)
        this.baseInfo = res.baseInfo
        this.handleTicket(res.ticketInfo)
        this.handleComment(res.commentInfo)
      }
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
    },
    handleBanner (banner) {
      this.bannerInfo.name = this.name
      this.bannerInfo.img = banner[0].imgUrl
      this.bannerInfo.galleryImgs = banner
    },
    // 处理票
    handleTicket (info) {
      Object.keys(info).forEach(item => {
        let obj1 = {}
        info[item].forEach(u => {
          if (Object.keys(obj1).indexOf(u.kind) === -1) {
            obj1[u.kind] = []
          }
          obj1[u.kind].push(u)
        })
        info[item] = {}
        Object.assign(info[item], obj1)
      })
      this.ticketInfo = info
    },
    // 评论
    handleComment (res) {
      if (res) {
        res.forEach(item => {
          if (item.pictures) {
            item.pic = item.pictures.split(',')
          }
        })
      }
      this.commentInfo = res
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
