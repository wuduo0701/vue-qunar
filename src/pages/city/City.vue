<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    >
    </CityList>
    <CityRight
      :cities="cities"
      @changeCity="handleChangeCity"
    >
    </CityRight>
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
      cities: {},
      // 字母排序
      letter: ''
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
    },
    //  实现兄弟组件的字母传值
    handleChangeCity (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>
<style lang="stylus" scoped>

</style>
