<template>
  <div class="order">
    <div class="header">
      <div>全部订单</div>
      <router-link to="/">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
    </div>
    <div class="container">
      <div class="flex_btn_group">
        <van-button
          v-for="btn in btnMap"
          :key="btn.id"
          round
          type="info"
          class="cell"
          :class="btn.id === activeBtn ? 'activeClass' : ''"
          @click="changeBtn(btn.id)"
        >
          {{btn.name}}
        </van-button>
      </div>
      <div class="no_info">
        <img src="https://s.qunarzz.com/q_design_font/images/empty.png" alt="">
        <div class="login">
          <div class="dsc">您还没有订单呦~</div>
          <div v-if="!isLogin">
            <div class="dsc">快速登录查看订单吧~</div>
            <van-button
              type="primary"
              class="login_btn"
              @click="linkLogin"
            >登录</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const btnMap = [
  {id: 'all', name: '全部'},
  {id: 'toTravel', name: '待出行'},
  {id: 'toPay', name: '待付款'},
  {id: 'refund', name: '退款单'}
]
export default {
  name: 'Order',

  data () {
    return {
      activeBtn: 'all',
      btnMap
    }
  },

  computed: {
    isLogin () {
      return localStorage.user
    }
  },

  methods: {
    changeBtn (id) {
      this.activeBtn = id
    },
    linkLogin () {
      this.$router.push({ path: '/user/login' })
    }
    // isLogin () {
    //   return localStorage.user
    // }
  }
}
</script>

<style lang="scss" scoped>
.order {
  background: rgb(237, 239, 242);
  height: 100vh;
  .header {
    position: relative;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: .4rem;
    background: #00bcd4;
    .back {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff
    }
  }
  .container {
    .flex_btn_group {
      display: flex;
      padding: 0 .38rem;
      padding: .4rem .18rem 0 .38rem;
      .cell {
        flex: 1;
        width: 1rem;
        height: .6rem;
        font-size: 12px;
        color: rgb(102, 102, 102);
        font-weight: 300;
        opacity: 0.6;
        background: #FFF;
        border-color: #FFF;
        margin-right: .2rem;
      }
      .activeClass {
        border-color: rgb(0, 212, 227);
        background-color: rgb(191, 244, 247);
        color: rgb(0, 202, 216);
        font-weight: 600;
        opacity: 1;
      }
    }
    .no_info {
      padding-top: .5rem;
      text-align: center;
      img {
        width: 5rem;
        height: 2.88rem;
      }
      .login {
        padding-top: .24rem;
        .dsc {
          color: rgb(153, 153, 153);
          line-height: 18px;
        }
        .login_btn {
          margin-top: .4rem;
          width: 20%;
          height: .64rem;
          border-radius: .32rem;
          background: #00bcd4;
          border-color: #00bcd4;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
