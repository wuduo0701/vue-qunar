<template>
  <div class="retrieve">
    <div class="header">
      <router-link to="/user/login">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
    </div>
    <section class="container">
      <section class="top_info">
        <h2 class="title">请输入账户名</h2>
        <div class="info">请输入要找回密码的账户名</div>
      </section>
      <van-field
        v-model="user"
        :maxlength="maxlength"
        label="账户名"
        placeholder="请输入账户名"
        required
        class="input_boder"
      />
      <div class="login_box">
        <van-button
          type="primary"
          class="login_btn"
          @click="retriPassword"
          :disabled="disabled"
        >
         确认
        </van-button>
      </div>
      <div class="password" v-if="data.length">
        <van-field
          v-model="data[0].password"
          label="密码"
          readonly
          class="input_boder"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'

export default {
  name: 'Retireve',

  data () {
    return {
      user: '',
      data: '',
      maxlength: 18,
      disabled: true
    }
  },

  watch: {
    user: {
      handler () {
        this.isDisable()
      },
      immediate: true
    }
  },

  methods: {
    isDisable () {
      // eslint-disable-next-line no-unneeded-ternary
      this.disabled = this.user !== '' ? false : true
    },
    retriPassword () {
      const query = {
        user: this.user
      }
      axios
        .post('http://127.0.0.1:7001/user/retrieve', query)
        .then((res) => {
          const data = res.data
          if (data.status === 'success') {
            this.data = data.data
            Toast.success('查找成功')
          }
        })
        .catch(() => {
          this.data = ''
          Toast.fail('查找失败')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.retrieve {
  .header {
    position: relative;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: .4rem;
    .back {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.64rem;
      text-align: center;
      font-size: .4rem;
      color: #00bcd4
    }
  }
  .container {
    background: #fff;
    .top_info {
      padding-bottom: .8rem;
      text-align: center;
      .title {
        padding-top: .16rem;
        font-size: .72rem;
        font-weight: 400;
        color: #212121;
      }
      .info {
        color: #616161;
        padding-top: .4rem;
        font-size: .32rem;
      }
    }
    .input_boder {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
    .login_box {
      padding-top: 1rem;
      text-align: center;
      .login_btn {
        width: 90%;
        font-size: .4rem;
        background: #ff9a14;
        border-color: #ff9a14;
      }
    }
    .password {
      padding-top: 1rem;
    }
  }
}
</style>
