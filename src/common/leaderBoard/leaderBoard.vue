<template>
  <div class="leaderBoard">
    <div class="imgHeader">
      <img src="http://img1.qunarzz.com/sight/p0/2102/14/14a0be2803c49e29a3.img.jpg_375x170_6797f1cb.jpg" alt="">
      <div class="mask"></div>
      <div class="info">
        <div class="line-left"></div>
        <i class="iconfont star">&#xe870;</i>
        <h1>北京</h1>
        <i class="iconfont star">&#xe870;</i>
        <div class="line-right"></div>
      </div>
      <div class="poptext">{{title}}</div>
    </div>
    <div class="main">
      <ul class="list">
        <li class="list-item" v-for="item in sight" :key="item.level" @click="toDetail(item.name)">
          <div class="img-con">
            <img :src="item.imgUrl" alt="">
            <div class="topic-tag" v-if="item.level">
              <img src="http://s.qunarzz.com/piao/image/touch/channel/honer.png">
              <div class="tag-num">{{item.level}}</div>
            </div>
          </div>
          <div class="info">
            <h4 class="info-name">{{item.name}}</h4>
            <div class="tag-list">
              <div class="light">6800</div>
              <div class="tagend">条评论</div>
            </div>
            <div class="price">
              <span class="price-num">
                ￥
                <em class="number">{{item.price}}</em>
              </span>
              <span class="price-text">起</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-link class="back" to="/">
      <span class="header-back"></span>
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'leaderBoard',

  data () {
    return {
      title: '',
      sight: []
    }
  },

  created () {
    this.title = this.$route.params.title
    this.title === '本周热门榜单' ? this.getInfo() : this.getIconDetail()
    // this.getInfo()
  },

  methods: {
    // 获取热门
    getInfo () {
      axios
        .get('/v1/leader', {
          params: {
            city: localStorage.city
          }
        })
        .then(res => {
          res = res.data
          if (res.status === 'success') {
            this.sight = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取icon列表详情
    getIconDetail () {
      axios
        .get('/v1/leader/icon', {
          params: {
            city: localStorage.city,
            title: this.title
          }
        })
        .then(res => {
          res = res.data
          if (res.status === 'success') {
            this.sight = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    toDetail (name) {
      this.$router.push({ path: `/detail/name/${name}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.leaderBoard {
  .imgHeader {
    overflow: hidden;
    position: relative;
    .img {
      width: 100%;
      min-height: 1.7rem;
    }
    .mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      background: linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,0));
    }
    .info {
      position: absolute;
      left: 50%;
      bottom: 1.67rem;
      width: 5rem;
      margin-left: -2.5rem;
      color: #fff;
      font-size: .4rem;
      font-family: tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif;
      z-index: 99;
      overflow: hidden;
      text-align: center;
      .line-left {
        display: inline-block;
        position: relative;
        top: -.14rem;
        width: 0;
        height: 0;
        border-top: 1px solid transparent;
        border-right: .6rem solid #fff;
        border-bottom: 1px solid transparent;
      }
      .star {
        position: relative;
        top: -.06rem;
        font-size: .2rem;
      }
      h1 {
        display: inline-block;
        font-size: .36rem;
        padding: 0 .04rem;
      }
      .line-right {
        display: inline-block;
        position: relative;
        top: -.14rem;
        width: 0;
        height: 0;
        border-top: 1px solid transparent;
        border-left: .6rem solid #fff;
        border-bottom: 1px solid transparent;
      }
    }
    .poptext {
      position: absolute;
      left: 50%;
      bottom: 1.08rem;
      width: 4.6rem;
      margin-left: -2.3rem;
      color: #fff;
      font-size: .44rem;
      font-family: tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif;
      z-index: 99;
      overflow: hidden;
      text-align: center;
      font-weight: bold;
      letter-spacing: .02rem;
    }
  }
  .main {
    .list {
      background: #fff;
      list-style: none;
      .list-item {
        position: relative;
        padding: .36rem .2rem .16rem 0;
        margin-left: .2rem;
        border-bottom: 1px solid #eee;
        .img-con {
          position: relative;
          float: left;
          width: 2rem;
          height: 2rem;
          img {
            width: 100%;
          }
          .topic-tag {
            position: absolute;
            top: -.15rem;
            left: .1rem;
            width: .8rem;
            height: .86rem;
            .tag-num {
              position: absolute;
              left: 0;
              top: 0;
              color: #fff;
              font-size: .32rem;
              display: inline-block;
              width: 100%;
              height: .86rem;
              line-height: .74rem;
              text-align: center;
            }
          }
        }
        .info {
          overflow: hidden;
          position: relative;
          height: 2rem;
          padding-bottom: .2rem;
          margin-left: 2.2rem;
          .info-name {
            font-size: .34rem;
            line-height: .44rem;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .tag-list {
            position: relative;
            margin-top: .28rem;
            min-height: .36rem;
            font-size: 0;
            .light {
              display: inline;
              padding: 0;
              font-size: .32rem;
              line-height: .36rem;
              color: #00afc7;
            }
            .tagend {
              display: inline;
              padding: 0;
              color: #9e9e9e;
              font-size: .24rem;
              line-height: .36rem;
              margin-right: .4rem;
            }
          }
          .price {
            position: absolute;
            left: 0;
            bottom: .3rem;
            height: .32rem;
            line-height: .32rem;
            font-size: 0;
            color: #9e9e9e;
            width: 1.6rem;
            .price-num {
              font-size: .22rem;
              color: #ff8300;
              .number {
                padding-left: .04rem;
                font: .4rem Tahoma,Helvetica,sans-serif;
              }
            }
            .price-text {
              padding-left: .02rem;
              font-size: .24rem;
            }
          }
        }
        .flex-item {
          flex: 1
        }
      }
    }
    /* ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    } */
  }
  .back {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.72rem;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.36rem;
    color: #fff;
    text-align: center;
    .header-back {
      display: block;
      width: 0.72rem;
      height: 0.72rem;
      background-color: #000;
      opacity: 0.5;
      border-radius: 0.36rem;
    }
    .back-icon {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 0.72rem;
      line-height: 0.72rem;
      text-align: center;
      font-size: 0.3rem;
    }
  }
}
</style>
