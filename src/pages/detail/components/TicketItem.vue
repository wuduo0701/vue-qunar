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
    </div>
  </div>
</template>
<script>
export default {
  name: 'TicketItem',
  props: {
    ticketItem: Object
  },
  methods: {
    reserveNow () {
      alert('预定成功啦😊')
    },
    timeFormat (date) {
      let d = new Date(date)
      let formatdatetime = (d.getMonth() + 1) + '月' + d.getDate() + '日'
      return formatdatetime
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
