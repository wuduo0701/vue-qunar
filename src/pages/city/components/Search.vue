<template>
  <div>
    <div class="search">
      <input
        class="input"
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
      >
    </div>
    <div
      class="search-container"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="ChangeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoList">没有找到匹配城市😭</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      // 搜索关键字
      keyword: '',
      // 搜索后出现的字段
      list: [],
      // 节流时间
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoList () {
      return !this.list.length
    }
  },
  methods: {
    ChangeCity (city) {
      this.changeCurrentCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCurrentCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 搜索时使用节流，提高性能
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 判断拼音或者名字是否存在
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/varibles.styl'
  .search
    height 0.72rem
    padding 0 .1rem
    background $bgColor
    .input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-container
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding .2rem
      color #666
      background #fff
</style>
