<template>
  <div class="orderFill">
    <div class="header">
      <div>订单填写</div>
      <div class="iconfont back" @click="goReturn">&#xe624;</div>
    </div>
    <div class="container">
      <div class="box1">
        <div class="box1-flex">
          <h2 class="box-header">{{title}}</h2>
          <span class="price">
            <span>￥</span>
            <span class="price-num">{{price}}</span>
            <span class="price-text">/张</span>
          </span>
        </div>
        <p class="date">游玩时间: {{timeFormat(date)}}</p>
      </div>
      <div class="buying">
        <div class="number">购买数量</div>
        <van-stepper v-model="number" theme="round" button-size="22" disable-input />
      </div>
    </div>
    <div class="vistor">
      <div class="vistor-header">游客信息</div>
      <van-cell-group>
        <van-field v-model="info.user" label="用户名" disabled/>
        <van-field v-model="info.name" label="姓名" placeholder="请输入姓名" required/>
        <van-field v-model="info.phone" label="联系电话" placeholder="请输入联系电话" required/>
        <van-field v-model="info.idCard" label="身份证" placeholder="请输入身份证" required/>
      </van-cell-group>
    </div>
    <van-submit-bar :loading="loading" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'

export default {
  name: 'orderFill',
  data () {
    return {
      title: '',
      price: '',
      date: '',
      number: 1,
      info: {
        user: localStorage.user,
        name: '',
        phone: '',
        idCard: ''
      },
      loading: false
    }
  },

  computed: {
    totalPrice () {
      return this.price * this.number * 100
    }
  },

  mounted () {
    const { title, price, date } = this.$route.params
    this.title = title
    this.price = price
    this.date = date
  },

  methods: {
    onSubmit () {
      this.loading = true
      const { user, name, phone, idCard } = this.info
      if (!name || !phone || !idCard) {
        this.loading = false
        Toast.fail('请填写游客的必要信息')
      } else {
        const query = {
          city: localStorage.city,
          name: this.$route.query.name,
          user,
          phone,
          id_card: idCard,
          ticket_title: this.title,
          ticket_price: `${this.price}`,
          ticket_num: this.number,
          buy_date: this.date,
          total_price: this.price * this.number
        }
        axios
          .post('/v1/order', query)
          .then(res => {
            Toast.success('购票成功')
            this.goReturn()
          })
          .catch(err => {
            console.log(err)
            Toast.fail('购票失败')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    timeFormat (date) {
      let d = new Date(date)
      const year = d.getFullYear()
      const month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
      let formatdatetime = year + '-' + month + '-' + day
      return formatdatetime
    },
    goReturn () {
      console.log(this.$route)
      this.$router.push({
        name: 'Detail',
        params: {
          name: this.$route.query.name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.orderFill {
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
    margin: 0 .14rem;
    background: #fff;
    border-radius: .2rem;
    .box1 {
      padding: .16rem .2rem .0 .2rem;
      border-bottom: 1px solid #eee;
      .box1-flex {
        display: flex;
        .box-header {
          display: flex;
          align-items: center;
          width: 80%;
          height: 1rem;
          color: #000;
          font-size: .36rem;
          line-height: .5rem;
        }
        .price {
          padding: .16rem 0 0 0rem;
          color: red;
          font-size: .24rem;
          .price-num {
            font-size: .36rem;
            font-weight: bold;
          }
          .price-text {
            color: #9e9e9e;
          }
        }
      }
      .date {
        padding: .2rem 0;
        color: #423f3f;
      }
    }
    .buying {
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .2rem 0 .2rem;
      .number {
        font-size: .32rem;
      }
    }
  }
  .vistor {
    margin: .2rem .14rem;
    background: #fff;
    border-radius: .2rem;
    padding: 0 .16rem;
    .vistor-header {
      height: 1rem;
      line-height: 1rem;
      font-size: .32rem;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
<style lang="scss">
.van-stepper {
  .van-stepper__plus {
    background: #00bcd4;
  }
}
</style>
