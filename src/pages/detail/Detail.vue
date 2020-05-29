<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailInfo></DetailInfo>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/BaseInfo'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
