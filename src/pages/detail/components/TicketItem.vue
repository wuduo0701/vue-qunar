<template>
  <div class="ticket-item-list">
    <div class="ticket-item flex-box border-top">
      <div class="ticket-item-main flexbox-layout">
        <div>
          <h6 class="tickey-title">{{ticketItem.sight_title}}</h6>
          <ul class="ticket-light">
            <span class="ticket-desctag">
              <img class="ticket-desctag-icon" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/ea3f321aea9fbf93098a78bdddd3306f.png">
              {{timeFormat(ticketItem.sight_time)}}
            </span>
          </ul>
          <ul class="ticket-retreat">
            <span class="ticket-label border">条件退</span>
          </ul>
          <div class="ticket-supplier">
            <span>{{ticketItem.sight_info}}</span>
            <span class="ticket-info border-left">
              预定须知
              <span class="ticket-icon iconfont">&#xe68c;</span>
            </span>
          </div>
        </div>
      </div>
      <div class="ticket-item-side">
        <div class="ticket-item-link">
          <strong class="ticket-sale">
            ￥
            <em class="sale-num">{{ticketItem.price}}</em>
          </strong>
          <em class="ticket-item-Btn" @click="reserveNow">立即预定</em>
        </div>
      </div>
      <van-popup v-model="isShow" position="bottom" closeable>
        <div class="pop-main">
          <h5 class="pop-header">{{ticketItem.sight_title}}</h5>
          <p class="pop-price">
            <span class="price">
              ￥
              <em class="num">{{ticketItem.price}}</em>
            </span>
            <span>/张</span>
          </p>
          <div class="pop-date">
            <h6 class="date-note">日期选择</h6>
            <div class="date-card">
              <van-button
                type="default"
                class="btn-card"
                :class="active === 'now' ? 'selected' : ''"
                @click="isActive('now', new Date(date.now))"
              >
                <em class="btn-card-name" :style="active === 'now' ? 'color: #fff' : ''">今天</em>
                <strong class="btn-card-detail" :style="active === 'now' ? 'color: #fff' : ''">{{timeFormat(date.now)}}</strong>
              </van-button>
              <van-button
                type="default"
                class="btn-card"
                :class="active === 'tomorrow' ? 'selected' : ''"
                @click="isActive('tomorrow', new Date(date.tomorrow))"
              >
                <em class="btn-card-name" :style="active === 'tomorrow' ? 'color: #fff' : ''">明天</em>
                <strong class="btn-card-detail" :style="active === 'tomorrow' ? 'color: #fff' : ''">{{timeFormat(date.tomorrow)}}</strong>
              </van-button>
              <van-button
                type="default"
                class="btn-card"
                :class="active === 'afterTom' ? 'selected' : ''"
                @click="isActive('afterTom', new Date(date.afterTom))"
              >
                <em class="btn-card-name" :style="active === 'afterTom' ? 'color: #fff' : ''">后天</em>
                <strong class="btn-card-detail" :style="active === 'afterTom' ? 'color: #fff' : ''">{{timeFormat(date.afterTom)}}</strong>
              </van-button>
              <van-button
                type="default"
                class="btn-card"
                :class="active === 'other' ? 'selected' : ''"
                @click="isActive('other')"
              >
                <em class="btn-card-name" :style="active === 'other' ? 'color: #fff' : ''">其他</em>
                <strong
                  v-show="currentDate"
                  class="btn-card-detail"
                  :style="active === 'other' ? 'color: #fff' : ''"
                >{{timeFormat(currentDate)}}</strong>
              </van-button>
            </div>
          </div>
          <van-popup v-model="showDate" position="bottom" :style="{ height: '375px' }">
            <van-datetime-picker
              v-model="currentDate"
              type="month-day"
              title="选择其他日期"
              :min-date="minDate"
              :max-date="maxDate"
              :formatter="formatter"
              @cancel="cancel"
              @confirm="confirm"
            />
          </van-popup>
          <div class="pop-light">需要在游玩当天的15:30前预订</div>
        </div>
        <div class="buy-btn" @click="booking(ticketItem.sight_title, ticketItem.price, selectedDate)">立即预定</div>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TicketItem',
  props: {
    ticketItem: Object
  },
  data () {
    return {
      date: '',
      isShow: false,
      showDate: false,
      active: 'now',
      confim: '',
      minDate: new Date(),
      maxDate: new Date(2021, 12, 31),
      currentDate: '',
      selectedDate: ''
    }
  },
  created () {
    this.getNow()
  },
  methods: {
    reserveNow () {
      this.isShow = true
    },
    timeFormat (date) {
      let d = new Date(date)
      let formatdatetime = (d.getMonth() + 1) + '月' + d.getDate() + '日'
      return formatdatetime
    },
    getNow () {
      let date = new Date()
      date.setTime(date.getTime())
      const obj = {}
      this.selectedDate = new Date(date.setTime(date.getTime()))
      obj.now = date.setTime(date.getTime())
      obj.tomorrow = date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
      obj.afterTom = date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
      this.date = obj
    },
    isActive (tem, date) {
      if (tem === 'other') {
        this.showDate = true
        return
      }
      this.active = tem
      this.selectedDate = date
    },
    formatter (type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    cancel () {
      this.showDate = false
    },
    confirm () {
      this.selectedDate = this.currentDate
      this.showDate = false
      this.active = 'other'
    },
    booking (title, price, date) {
      console.log(title, price)
      this.$router.push({
        name: 'OrderFill',
        params: {
          title,
          price,
          date
        },
        query: {
          name: this.$route.params.name
        }
      })
      // Toast.success('预定成功')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .ticket-item-list
    display block
    padding 0 .32rem
    margin .32rem 0 .2rem
    border-radius .16rem
    background #f8f8f8
    .ticket-item
      box-sizing border-box
      padding .32rem 0
    .flex-box
      display flex
      width 100%
      .pop-main
        margin: 0 .2rem;
        .pop-header
          margin-right: .6rem;
          padding: .3rem 0 .1rem;
          color: #212121;
          font-size: .34rem;
          line-height: .4rem;
        .pop-price
          color: #9e9e9e;
          font-size: .24rem;
          line-height: .48rem;
          .price
            color: #ff9800;
            margin-right: .06rem;
            .num
              font-size: .36rem;
        .pop-date
          margin-top: .18rem;
          .date-note
            color: #333;
            font-size: .26rem;
            line-height: .65rem;
          .date-card
            height: .86rem;
            .btn-card
              width 22.5%
              border: .02rem solid #bdbdbd;
              border-radius: .1rem;
              margin-right .1rem
              .selected-color
                color #fff
              .btn-card-name
                display block
                padding-top: .08rem;
                color: #212121;
                font-size: .28rem;
                line-height: .36rem;
              .btn-card-detail
                padding-bottom: .06rem;
                color: #888;
                font-size: .24rem;
                line-height: .32rem;
            .selected
              position: relative;
              border-color: #00bcd4;
              color: #fff;
              background: #00bcd4;
        .pop-light
          padding: .14rem 0;
          color: #ff8300;
          font-size: .24rem;
          line-height: .36rem;
      .buy-btn
        display: block;
        width: 100%;
        border: 0 none;
        background: #ff9800;
        color: #fff;
        font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        text-align: center;
      .ticket-item-main
        display flex
        flex 2.92
        -ms-flex-align center
        -webkit-align-items center
        -webkit-box-align center
        align-items center
      .flexbox-layout
        width .02rem
        .ticket-title
          padding 0
          color #333
          font-size .28rem
          line-height .4rem
        .ticket-light
          overflow hidden
          padding-top .08rem
          .ticket-desctag
            display inline-block
            height .32rem
            color #00afc7
            font-size .24rem
            line-height .32rem
            white-space nowrap
            .ticket-desctag-icon
              display inline-block
              width .2rem
              max-height .32rem
              margin-right .04rem
              vertical-align 0
        .ticket-retreat
          font-size 0
          padding-top .08rem
          .ticket-label
            display inline-block
            margin-top .08rem
            padding 0 .04rem
            height .28rem
            color #00afc7
            font-size .2rem
            line-height .28rem
            white-space nowrap
        .ticket-supplier
          display flex
          margin-top .12rem
          color #616161
          font-size .24rem
          line-height .34rem
          .ticket-info
            position relative
            top -.05rem
            margin-left .06rem
            padding-left .1rem
            .ticket-icon
              position relative
              left -.05rem
              top .03rem
              color #616161
      .ticket-item-side
        display flex
        align-items center
        .ticket-item-link
          box-sizing border-box
          display block
          width 100%
          padding-left .2rem
          .ticket-sale
            display block
            overflow hidden
            height .4rem
            font-size .24rem
            line-height .28rem
            text-align center
            color #ff8300
            .sale-num
              font-size .4rem
              line-height .4rem
          .ticket-item-Btn
            display block
            overflow hidden
            height .52rem
            width 1.367rem
            margin-top .12rem
            text-align center
            color #fff
            font-size .24rem
            line-height .52rem
            border-radius .3rem
            background-image linear-gradient(145deg,#ffab1e 0,#ff8c12 100%)
</style>
