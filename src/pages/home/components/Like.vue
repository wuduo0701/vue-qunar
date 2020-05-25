<template>
  <div>
    <div class="like-space"></div>
    <div class="like-title">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢" class="like-title-img">
      <span class="like-title-name">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li
        class="item border-bottom"
        v-for="item in likeList"
        :key="item.id"
      >
        <div class="item-img-container">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
        <div class="item-price-container">
          <span class="item-price">￥{{item.price}}</span>起
          <span class="item-address">{{item.address}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeLike',
  data () {
    return {
      likeList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2004/5c/5c97bfb4aaf82866a3.img.jpg_200x200_72827d58.jpg',
          title: '南昌融创乐园',
          desc: '登上云霄飞车感受地心引力',
          price: '15',
          address: '红谷滩新区'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201311/19/1e9607bb9cd43d7fdbbe7f8970a3789d.jpg_200x200_d71f506c.jpg',
          title: '南昌之星摩天轮',
          desc: '诠释着南昌作为世界动感都会的昂首姿态',
          price: '48',
          address: '红谷滩新区'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2003/5f/5f807dee2050ecbea3.img.png_200x200_666da52c.png',
          title: '南昌融创海世界',
          desc: '带你畅游海洋世界',
          price: '258',
          address: '南昌'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/08/1d7adb4e163cc8e493835fbb.png_200x200_1e949fb0.png',
          title: '南昌之星游乐园',
          desc: '近期小伙伴们收藏最！多！的景点😊',
          price: '70',
          address: '新建区'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_200x200_454a87eb.jpg',
          title: '滕王阁',
          desc: '秋水共长天一色',
          price: '45',
          address: '东湖区'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/81/810da6770d48659d90.img.jpg_200x200_1f1bc261.jpg',
          title: '南昌海洋公园',
          desc: '感受海洋动物的乐趣',
          price: '70',
          address: '青山湖区'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/63/6340336461c16842a3.img.png_200x200_ac63191b.png',
          title: '南昌金燕国际温泉',
          desc: '品山，品水，品温泉；养身，养心，养健康',
          price: '105',
          address: '新建区'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/3c/3c257f92e1f394c2a3.img.jpg_200x200_bfa9ee11.jpg',
          title: '铜源峡',
          desc: '峡谷特色风景',
          price: '54.9',
          address: '湾里区'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~com-styles/mixins.styl'
  .like-space
    height .3rem
    margin-top .2rem
    line-height .3rem
    background #eee
    text-indent .2rem
  .like-title
    position: relative
    padding: .24rem 0 .26rem
    .like-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      margin-left: .2rem
      vertical-align: top
    .like-title-name
      display: inline-block
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
  .like-list
    margin-left: .24rem
    .item
      position: relative;
      overflow: hidden;
      padding: .2rem 0;
      .item-img-container
        float: left
        overflow: hidden
        width: 2rem
        height: 2rem
        .item-img
          width: 100%
      .item-info
        overflow: hidden
        padding-left: .22rem
        .item-title
          margin-top: .26rem
          height: .44rem
          color: #212121
          font-size: .32rem
          line-height: .44rem
          ellipsis()
        .item-desc
          margin-top: .14rem
          height: .34rem
          color #f55
          ellipsis()
      .item-price-container
        position: relative
        margin-top: .22rem
        color: #616161
        font-size: .24rem
        line-height: .4rem
        .item-price
          position: relative
          padding-left: .22rem
          color: #ff8300
          font-size: .4rem
          line-height: .4rem
        .item-address
          position: absolute
          right: .24rem
          bottom: 0
          ellipsis()
</style>
