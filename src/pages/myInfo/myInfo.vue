<template>
  <div class="MyInfo">
    <div class="header">
      <i class="iconfont back-icon" @click="backHome">&#xe624;</i>
      <img src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg" class="backImg" alt="背景">
      <div class="info-content">
        <div class="avator-container">
          <router-link to="/user/login">
            <img src="https://source.qunarzz.com/usercenter/touch/avatar.png" class="avator" alt="头像">
            <span class="unLogin">登录/注册</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list_name">
        <span class="common wallet">
          <i class="iconfont">&#xe773;</i>
        </span>
        我的钱包
      </div>
      <div class="list_money">
        <div class="balance flex_cell">
          <label class="number">0.00</label>
          <label class="name">账户余额</label>
        </div>
        <div class="coupon flex_cell">
          <label class="number">0</label>
          <label class="name">优惠劵</label>
        </div>
        <div class="card flex_cell">
          <label class="number">
            <em>0</em>
            <em class="my-unit">张</em>
          </label>
          <label class="name">银行卡</label>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list_name">
        <span class="common order">
          <i class="iconfont">&#xe659;</i>
        </span>
        <span class="name">我的订单</span>
        <i class="iconfont link">&#xe68c;</i>
      </div>
      <div class="list_name">
        <span class="common comment">
          <i class="iconfont">&#xe601;</i>
        </span>
        <span class="name">我的评论</span>
        <i class="iconfont link">&#xe68c;</i>
      </div>
    </div>
    <div class="list">
      <div class="list_name">
        <span class="common about">
          <i class="iconfont">&#xe724;</i>
        </span>
        <span class="name">意见反馈</span>
        <i class="iconfont link">&#xe68c;</i>
      </div>
      <div class="list_name">
        <span class="common about">
          <i class="iconfont">&#xe60e;</i>
        </span>
        <span class="name">关于</span>
        <i class="iconfont link">&#xe68c;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',

  methods: {
    backHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" src="./myInfo.scss" scoped></style>
