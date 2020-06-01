<template>
  <div class="ticket-shelf">
    <div class="ticket-continer">
      <h3 class="ticket-title">景区门票</h3>
      <div v-for="item in TicketInfo" :key="item.id">
        <p class="ticket-shelf-name">
          <span class="ticket-shelf-border"></span>
          <span>{{item.ticketTitle}}</span>
        </p>
        <div class="ticket-type-list">
          <div class="ticket-group border-bottom">
            <div class="ticket-list-continer border">
              <!-- 在此循环 -->
              <div v-for="(ticket) in item.ticketType" :key="ticket.id">
                <div class="ticket-list border-top" >
                  <div class="ticket-type-info" @click="changeShowItem(ticket.id)">
                    <h5 class="ticket-type-name">{{ticket.type}}</h5>
                    <div class="ticket-type-price">
                      <span class="price-money">￥</span>
                      <em class="price-num">{{ticket.price}}</em>
                      <span class="price-numword">起</span>
                    </div>
                    <div class="ticket-type-icon iconfont">&#xe63e;</div>
                  </div>
                  <div v-for="ticketItem in ticket.ticketItem" :key="ticketItem.id">
                    <TicketItem :ticketItem="ticketItem" v-show="switchItem(ticketItem.key)"></TicketItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TicketItem from './TicketItem'
export default {
  name: 'DetailTicket',
  components: {
    TicketItem
  },
  data () {
    return {
      isShowItem: false,
      Itemindex: ''
    }
  },
  props: {
    TicketInfo: Array
  },
  methods: {
    //  门票是否展开
    changeShowItem (index) {
      if (index === this.Itemindex) {
        this.Itemindex = ''
      } else {
        this.Itemindex = index
      }
    },
    switchItem (id) {
      return id === this.Itemindex
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/mixins.styl'
  .ticket-shelf
    background: #f5f5f5
    padding-top .2rem
    .ticket-continer
      padding 0 .16rem .32rem
      background #fff
      margin-bottom .2rem
      .ticket-title
        overflow hidden
        position relative
        z-index 4
        background #fff
        color #212121
        font-size .4rem
        line-height .56rem
        font-weight bold
        padding .32rem 0 0 .04rem
      .ticket-shelf-name
        font-size .32rem
        line-height .44rem
        font-weight bold
        color #212121
        align-items baseline
        display flex
        padding-top .28rem
        .ticket-shelf-border
          background-image linear-gradient(126deg,#00e0ca 0,#00bfd4 100%)
          border-radius .06rem
          height .24rem
          min-width .08rem
          margin-right .12rem
      .ticket-type-list
        background #f5f5f5
        margin-top .32rem
        .ticket-group
          margin-bottom .2rem
          background #fff
          .ticket-list-continer
            background #fff
            box-shadow 0 0.04rem 0.12rem 0 rgba(0,0,0,0.10)
            border-radius .16rem
            .ticket-list
              overflow hidden
              padding .32rem 0
              margin 0 .2rem
            .ticket-type-info
              position relative
              z-index 2
              margin-bottom -.02rem
              background #fff
              .ticket-type-name
                margin-right 1.8rem
                color #333
                font-size .3rem
                line-height .48rem
                ellipsis()
              .ticket-type-price
                overflow hidden
                position absolute
                top 50%
                right .52rem
                line-height .4rem
                margin-top -.28rem
                color #ff9800
                font-size .24rem
                .price-money
                  display inline-block
                  font-size .24rem
                  margin-right -.15rem
                .price-num
                  margin-left .04rem
                  font-size .4rem
                .price-numword
                  display inline-block
                  font-size .24rem
              .ticket-type-icon
                overflow hidden
                position absolute
                top 50%
                line-height .4rem
                right .2rem
                margin-top -.26rem
                color #bbb
                font-size .32rem
</style>
