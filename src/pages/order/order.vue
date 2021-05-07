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
      <div v-if="filter.length">
        <div
          class="box"
          v-for="info in filter"
          :key="info.id"
          @click="linkDetail(info.name)"
        >
          <div class="order-header">
            <div>
              <img src="../../assets/imgs/sight.png" class="pic" alt="门票">
              <span class="sight-text">{{info.name}}</span>
            </div>
            <div :class="mapClass(info.buy_date)">{{getStatus(info.buy_date)}}</div>
          </div>
          <div class="box-flex">
            <div class="box-header">{{info.ticket_title}}</div>
            <span class="price">
              ￥
              <span class="price-num">{{info.ticket_price}}</span>
            </span>
          </div>
          <div class="box-date">
            <div>
              <p class="order-date">{{timeFormat(info.buy_date)}} 当日</p>
              <p class="order-num">数量 {{info.ticket_num}}</p>
            </div>
            <div class="order-total">总价 ￥{{info.total_price}}</div>
          </div>
        </div>
      </div>
      <div class="no_info" v-else>
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
import axios from 'axios'

const btnMap = [
  {id: 'all', name: '全部'},
  {id: 'toTravel', name: '待出行'},
  {id: 'expired', name: '已过期'},
  {id: 'refund', name: '退款单'}
]
export default {
  name: 'Order',

  data () {
    return {
      activeBtn: 'all',
      btnMap,
      user: localStorage.user,
      ticketInfo: '',
      filter: []
    }
  },

  computed: {
    isLogin () {
      return localStorage.user
    }
  },

  created () {
    // eslint-disable-next-line no-unused-expressions
    localStorage.user ? this.getTicket() : ''
  },

  watch: {
    'activeBtn': {
      handler () {
        if (!localStorage.user) {
          return
        }
        this.filter = []
        this.filterInfo()
      },
      immediate: true
    }
  },

  methods: {
    changeBtn (id) {
      this.activeBtn = id
    },
    linkLogin () {
      this.$router.push({ path: '/user/login' })
    },
    getTicket () {
      axios
        .get(`/v1/order/user`, {
          params: {
            user: this.user
          }
        })
        .then((res) => {
          if (res) {
            const data = res.data
            this.ticketInfo = data.data
            this.filter = data.data
          }
        })
    },
    linkDetail (name) {
      this.$router.push({
        name: 'Detail',
        params: {
          name
        }
      })
    },
    filterInfo () {
      if (this.activeBtn === 'all') {
        this.filter = this.ticketInfo
      } else if (this.activeBtn === 'toTravel') {
        this.ticketInfo.forEach(item => {
          if (this.transTamp(item.buy_date) >= this.getNow()) {
            this.filter.push(item)
          }
        })
      } else if (this.activeBtn === 'expired') {
        this.ticketInfo.forEach(item => {
          if (this.transTamp(item.buy_date) < this.getNow()) {
            this.filter.push(item)
          }
        })
      }
    },
    // 转化时间格式
    timeFormat (date) {
      let d = new Date(date)
      const year = d.getFullYear()
      const month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
      let formatdatetime = year + '-' + month + '-' + day
      return formatdatetime
    },
    // 某现在零点的时间戳
    getNow () {
      let date = new Date()
      return new Date(new Date(new Date(date).toLocaleDateString())).getTime()
    },
    // 转化位时间戳
    transTamp (date) {
      date = new Date(date)
      let tamp = date.setTime(date.getTime())
      return tamp
    },
    getStatus (date) {
      if (this.transTamp(date) >= this.getNow()) {
        return '待出行'
      } else {
        return '已过期'
      }
    },
    mapClass (date) {
      if (this.transTamp(date) >= this.getNow()) {
        return 'toTravel'
      } else {
        return 'expried'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  background: rgb(237, 239, 242);
  min-height: 100vh;
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
    .box {
      margin: .2rem;
      padding: .16rem;
      background: #fff;
      border-radius: .2rem;
      .order-header {
        padding: 0 .2rem;
        height: .6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pic {
          width: .48rem;
          height: .48rem;
        }
        .sight-text {
          font-size: .32rem;
        }
        .toTravel {
          font-size: .30rem;
          color: rgb(14, 165, 22);
        }
        .expried {
          font-size: .30rem;
          color: rgb(255, 81, 0);
        }
      }
      .box-flex {
        padding: 0 0 .2rem .1rem;
        display: flex;
        .box-header {
          display: flex;
          align-items: center;
          width: 85%;
          height: 1rem;
          color: rgb(32, 29, 29);
          font-size: .32rem;
          line-height: .5rem;
        }
        .price {
          padding: .16rem 0 0 .1rem;
          font-size: .24rem;
          .price-num {
            font-size: .32rem;
          }
        }
      }
      .box-date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order-date {
          height: .5rem;
          line-height: .5rem;
        }
        .order-num {
          height: .5rem;
          line-height: .5rem;
        }
        .order-total {
          height: 1rem;
          line-height: 1rem;
          font-size: .32rem;
        }
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
