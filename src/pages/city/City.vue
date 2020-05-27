<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :hotCities="hotCities" :cities="cities"></CityList>
    <CityRight :cities="cities"></CityRight>
  </div>
</template>
<script>
import axios from 'axios'
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
  },
  data () {
    return {
      //  热门城市
      hotCities: [],
      // 城市集合
      cities: {}
    }
  },
  methods: {
    getCity () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.success && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>
<style lang="stylus" scoped>

</style>
