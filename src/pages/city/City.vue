<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityRight></CityRight>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityRight from './components/RightSwiper'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityRight
  }
}
</script>
<style lang="stylus" scoped>

</style>
