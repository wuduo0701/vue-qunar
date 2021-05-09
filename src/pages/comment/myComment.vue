<template>
  <div class="commentAll">
    <div class="header">
      <div>我的评论</div>
      <div class="iconfont back" @click="goBack">&#xe624;</div>
    </div>
    <div class="comment-box" v-for="comment in commentInfo" :key="comment.id" @click="toDetail(comment.name)">
      <div class="top">
        <img class="userImg" src="https://img1.qunarzz.com/ucenter/headshot/1806/ad/9e146fc6c5c274ba.png_r_150x150_a3ba7c76.png" alt="">
        <div class="comment-headcon">
          <span class="comment-info">{{comment.user}}</span>
          <i class="iconfont" style="color:#ffb436;" v-if="comment.score >= 1">&#xe870;</i>
          <i class="iconfont" style="color:#ffb436;" v-if="comment.score >= 2">&#xe870;</i>
          <i class="iconfont" style="color:#ffb436;" v-if="comment.score >= 3">&#xe870;</i>
          <i class="iconfont" style="color:#ffb436;" v-if="comment.score >= 4">&#xe870;</i>
          <i class="iconfont" style="color:#ffb436;" v-if="comment.score === 5">&#xe870;</i>
          <div class="comment-info">{{timeFormat(comment.date)}}</div>
        </div>
        <div class="sight-name">{{comment.name}}</div>
      </div>
      <div class="comment-detail">{{comment.content}}</div>
      <div class="comment-show" v-if="comment.pic">
        <img v-for="(pic, index) in comment.pic" :key="index" class="show-img" :src="pic" alt="">
      </div>
      <div class="ticket-buy" v-if="comment.sight_title">{{comment.sight_title}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'commentAll',
  data () {
    return {
      commentInfo: []
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getComment () {
      axios
        .get('/v1/comment/user', {
          params: {
            user: localStorage.user
          }
        })
        .then(res => {
          const data = res.data
          if (data.status === 'success') {
            this.commentInfo = data.data
            this.handleComment(this.commentInfo)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    timeFormat (date) {
      let d = new Date(date)
      const year = d.getFullYear()
      const month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
      let formatdatetime = year + '-' + month + '-' + day
      return formatdatetime
    },
    // 评论
    handleComment (res) {
      if (res) {
        res.forEach(item => {
          if (item.pictures) {
            item.pic = item.pictures.split(',')
          }
        })
      }
      this.commentInfo = res
    },
    addComment () {
      this.$router.push({ name: 'addComment', params: this.$route.params.name })
    },
    toDetail (name) {
      this.$router.push({ path: `/detail/name/${name}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.commentAll {
  background: #fff;
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
  .comment {
    height: .6rem;
    line-height: .6rem;
    padding: .18rem 0 .18rem .18rem;
    border-bottom: 1px solid #eee;
  }
  .comment-box {
    position: relative;
    padding: 0;
    margin-left: .24rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    .top {
      padding-top: .3rem;
      margin-bottom: .22rem;
      color: #9e9e9e;
      .userImg {
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
      }
      .comment-headcon {
        position: absolute;
        padding-left: 1rem;
        top: 0;
        left: 0;
        padding-top: .35rem;
        line-height: .28rem;
        .comment-info {
          margin-right: .1rem;
          font-size: .24rem;
        }
      }
      .sight-name {
        float: right;
        height: .6rem;
        line-height: .6rem;
        padding-right: .6rem;
        font-size: .30rem;
        color: #616161;
      }
    }
    .comment-detail {
      margin-right: .24rem;
      margin-bottom: .2rem;
      font-size: .28rem;
      line-height: .40rem;
      color: #616161;
    }
    .comment-show {
      white-space: nowrap;
      word-break: keep-all;
      max-height: 2.2rem;
      overflow-x: auto;
      margin-bottom: .3rem;
      .show-img {
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        margin-right: .04rem;
        margin-top: 0;
      }
    }
    .ticket-buy {
      position: relative;
      font-size: .24rem;
      color: #00afc7;
      padding: 0 .24rem 0 0;
      margin-bottom: .3rem;
      height: .24rem;
      line-height: .24rem;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .addcomment {
    position: fixed;
    right: .3rem;
    bottom: .5rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    background: #00bcd4;
    border-radius: 1rem;
    text-align: center;
    color: #fff;
  }
}
</style>
