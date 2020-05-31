<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailInfo></DetailInfo>
    <DetailTicket></DetailTicket>
    <div class="content"></div>
  </div>
</template>
<script>
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
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
