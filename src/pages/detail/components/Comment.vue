<template>
  <div class="comment-wrapper border-bottom">
    <div class="comment-space"></div>
    <h3 class="comment-title">用户评论</h3>
    <div v-if="commentInfo.length">
      <div
        class="comment-item border-top"
        v-for="comment in commentInfo"
        :key="comment.id"
      >
        <div class="item-data">
          <span class="star-level">
            <i class="star iconfont">&#xe870;&#xe870;&#xe870;&#xe870;&#xe870;</i>
          </span>
          <span class="data">{{timeFormat(comment.date)}}</span>
          <span class="user">{{comment.user}}</span>
        </div>
        <p class="comment-text">{{comment.content}}</p>
        <div class="comment-img">
          <div
            class="imgouter"
            v-for="(img, index) in comment.pic"
            :key="index"
          >
            <div class="imginner">
              <img class="img" :src="img">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-comment">暂无评论....</div>
    <div class="more-comment border-top" @click="showMoreComment">
      查看全部点评
      <span class="iconfont">&#xe612;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailComment',
  props: {
    commentInfo: Array
  },
  methods: {
    showMoreComment () {
      this.$router.push({
        name: 'commentAll',
        params: {
          name: this.$route.params.name
        }
      })
    },
    timeFormat (date) {
      let d = new Date(date)
      let formatdatetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      return formatdatetime
    }
  }
}
</script>
<style lang="stylus" scoped>
  .comment-wrapper
    background: #fff;
    .comment-space
      height .3rem
      margin-top .2rem
      line-height .3rem
      background #eee
      text-indent .2rem
    .comment-title
      overflow: hidden;
      position: relative;
      z-index: 4;
      background: #fff;
      color: #212121;
      font-size: .4rem;
      line-height: .56rem;
      font-weight: bold;
      padding .32rem 0 0 .16rem
    .no-comment
      height 1rem
      line-height 1rem
      padding .2rem
      font-size .30rem
      font-weight 400
      // color #ddd
    .comment-item
      padding: .1rem .2rem .3rem .2rem;
      .item-data
        margin-top: .1rem;
        height 0.6rem
        line-height: .6rem;
        .star-level
          display: inline-block;
          position: relative;
          width: 1.5rem;
          height: .28rem;
          line-height: .28rem;
          font-size: .28rem;
          letter-spacing: .02rem;
          vertical-align: middle;
          .star
            z-index: 2;
            color: #ffb436;
            overflow: hidden;
            position: absolute;
            top: .04rem;
            left: 0;
            height: .28rem;
        .user
          position: relative;
          float: right;
          top: .16rem;
          margin-left: .6rem;
          line-height: .34rem;
          font-size: .24rem;
          vertical-align: middle;
          color: #9e9e9e;
        .data
          position: relative;
          float: right;
          top: .16rem;
          margin-left: .2rem;
          line-height: .34rem;
          font-size: .24rem;
          vertical-align: middle;
          color: #9e9e9e;
      .comment-text
        word-break: break-all;
        word-wrap: break-word;
        line-height: .42rem;
        font-size: .26rem;
        color: #616161;
      .comment-img
        margin: .2rem 0 .1rem 0;
        position: relative;
        zoom: 1;
        overflow: hidden;
        .imgouter
          float: left;
          width: 33.33%;
          margin-bottom: .1rem;
          .imginner
            margin-left: .07rem;
            margin-right: .07rem;
            .img
              width: 100%;
    .more-comment
      position: relative;
      margin-top: -.02rem;
      height: 1rem;
      color: #616161;
      line-height: 1rem;
      text-align: center;
      z-index: 2;
</style>
