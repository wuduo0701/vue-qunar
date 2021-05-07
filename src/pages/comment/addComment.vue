<template>
  <div class="addComment">
    <div class="header">
      <div>分享游玩体验</div>
      <div class="iconfont back" @click="goBack">&#xe624;</div>
      <div class="publish" @click="publish">发布</div>
    </div>
    <div class="main">
      <div class="stars">
        <div class="stars-text">点击评星</div>
        <div class="stars-list">
          <i class="iconfont star-item" :class="score >= 1 ? 'active' : ''" @click="changeScore(1)">&#xe870;</i>
          <i class="iconfont star-item" :class="score >= 2 ? 'active' : ''" @click="changeScore(2)">&#xe870;</i>
          <i class="iconfont star-item" :class="score >= 3 ? 'active' : ''" @click="changeScore(3)">&#xe870;</i>
          <i class="iconfont star-item" :class="score >= 4 ? 'active' : ''" @click="changeScore(4)">&#xe870;</i>
          <i class="iconfont star-item" :class="score == 5 ? 'active' : ''" @click="changeScore(5)">&#xe870;</i>
        </div>
      </div>
      <div class="content">
        <van-field
          v-model="content"
          rows="2"
          :autosize='autoSize'
          type="textarea"
          maxlength="100"
          placeholder="请输入游玩体验"
          show-word-limit
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'

export default {
  name: 'addComment',

  data () {
    return {
      score: 0,
      content: '',
      autoSize: {
        minHeight: 132
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    changeScore (score) {
      this.score = score
    },
    timeNow () {
      let d = new Date()
      const year = d.getFullYear()
      const month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
      let formatdatetime = year + '-' + month + '-' + day
      return formatdatetime
    },
    publish () {
      const query = {
        city: localStorage.city,
        name: this.$route.params.name,
        user: localStorage.user,
        date: this.timeNow(),
        score: this.score,
        content: this.content
      }
      axios
        .post('/v1/comment/add', query)
        .then(res => {
          res = res.data
          if (res.status === 'success') {
            Toast.success('评论成功')
          }
        })
        .catch(() => {
          Toast.success('评论出问题了, 请联系管理员')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.addComment{
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
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff
  }
  .publish {
    position: absolute;
    right: .2rem;
    top: 0;
    width: 0.64rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
  }
  .main {
    .stars {
      position: relative;
      margin-left: .3rem;
      border-bottom: 1px solid #eee;
      .stars-text {
        float: left;
        width: 1.16rem;
        color: #212121;
        font-size: .28rem;
        line-height: 1.6rem;
      }
      .stars-list {
        overflow: hidden;
        height: 1.6rem;
        padding-left: .26rem;
        font-size: 0;
        .star-item {
          font-size: .5rem;
          line-height: 1.6rem;
          color: #e0e0e0;
          margin-right: .16rem;
        }
        .active {
          color: #ff9800;
        }
      }
    }
    .content {
      overflow: hidden;
      margin-left: .3rem;
      /* height: 2.64rem; */
      font-size: .26rem;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
