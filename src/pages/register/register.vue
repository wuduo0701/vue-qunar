<template>
  <div class="register">
    <div class="header">
      <div>注册</div>
      <router-link to="/login">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
    </div>
    <div class="container">
      <van-cell-group>
        <van-field
          required
          v-model="user"
          :maxlength="maxlength"
          label="账户"
          placeholder="请输入账户"
        />
        <van-field
          required
          v-model="password"
          :maxlength="maxlength"
          label="密码"
          type="password"
          placeholder="请输入密码"
          :error-message="passwordLength ? '' : '请输入长度大于五的合法字符串'"
        />
        <van-field
          required
          v-model="passwordCopy"
          :maxlength="maxlength"
          label="确认密码"
          type="password"
          placeholder="请再次输入密码"
          :error-message="passwordEqual ? '' : '两次输入的密码不相等'"
        />
      </van-cell-group>
      <div class="login_box">
        <van-button
          v-if="disabled"
          type="primary"
          class="login_btn"
          disabled
        >注册</van-button>
        <van-button v-else type="primary" class="login_btn" @click="register">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',

  data () {
    return {
      user: '',
      password: '',
      passwordCopy: '',
      maxlength: 18,
      disabled: true
    }
  },

  computed: {
    // 两次密码不相等
    passwordEqual () {
      if (this.passwordCopy !== '') {
        // eslint-disable-next-line
        return this.password === this.passwordCopy ? true : false
      }
      return true
    },
    passwordLength () {
      if (this.password !== '') {
        // eslint-disable-next-line
        return this.password.length >= 5 ? true : false
      }
      return true
    }
  },

  watch: {
    password: {
      handler () {
        this.isDisable()
      },
      immediate: true
    },
    passwordCopy: {
      handler () {
        this.isDisable()
      },
      immediate: true
    }
  },

  methods: {
    isDisable () {
      if (this.user !== '' &&
          this.password !== '' &&
          this.passwordCopy !== '' &&
          this.password.length >= 5 &&
          this.passwordCopy.length >= 5
      ) {
        if (this.passwordEqual && this.passwordLength) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      }
    },
    register () {
      const query = {
        user: this.user,
        password: this.password,
        repassword: this.passwordCopy
      }
      axios
        .post('http://127.0.0.1:7001/user/register', query)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  background: #f3f9fc;
  height: 100vh;
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
    .container {
      padding-top: .4rem;
      .login_box {
        padding-top: .32rem;
        text-align: center;
        .login_btn {
          width: 90%;
          font-size: .36rem;
          background: #00bcd4;
          border-color: #00bcd4;
        }
      }
    }
}
</style>
