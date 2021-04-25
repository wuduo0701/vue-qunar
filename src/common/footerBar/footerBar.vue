<template>
  <div class="touch-footer">
    <div class="touchfooter__nav">
      <div class="touchfooter__item" @click="handleClick('homePage')">
        <i
          class="iconfont"
          :class="activeName === 'homePage' ? 'active' : 'deactive'"
        >&#xe7c7;</i>
        <span class="touchfooter__word" :class="activeName === 'homePage' ? 'active' : ''">首页</span>
      </div>
      <!-- <div class="touchfooter__item">
        <div class="iconfont">&#xe63e;</div>
        <span class="touchfooter__word">回顶部</span>
      </div> -->
      <div class="touchfooter__item" @click="handleClick('order')">
        <i
          class="iconfont"
          :class="activeName === 'order' ? 'active' : 'deactive'"
        >&#xe659;</i>
        <span class="touchfooter__word" :class="activeName === 'order' ? 'active' : ''">订单</span>
      </div>
      <div class="touchfooter__item" @click="handleClick('myInfo')">
        <i
          class="iconfont"
          :class="activeName === 'myInfo' ? 'active' : 'deactive'"
        >&#xe642;</i>
        <span class="touchfooter__word" :class="activeName === 'myInfo' ? 'active' : ''">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
const barMap = {
  homePage: true,
  // backTop: true,
  order: true,
  myInfo: true
}
export default {
  name: 'FootBar',

  data () {
    return {
      barMap,
      activeName: 'homePage'
    }
  },

  methods: {
    handleClick (name) {
      this.activeName = name
      if (name === 'order') {
        this.$router.push({ path: '/user' })
      } else if (name === 'myInfo') {
        this.$router.push({ path: '/user' })
      }
    }
  }
}
</script>

<style lang="scss" src="./footerBar.scss" scoped></style>
