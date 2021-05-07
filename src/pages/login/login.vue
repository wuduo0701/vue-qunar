<template>
  <div class="login">
    <div class="header">
      <div>登录</div>
      <router-link to="/">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
      <router-link to="/user/register">
        <div class="regist">注册</div>
      </router-link>
    </div>
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="user"
          :maxlength="maxlength"
          label="账户"
          placeholder="请输入账户"
          required
        />
        <van-field
          v-model="password"
          label="密码"
          :maxlength="maxlength"
          type="password"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div class="login_box">
        <van-button
          v-if="disabled"
          type="primary"
          class="login_btn"
          disabled
        >登录</van-button>
        <van-button v-else type="primary" class="login_btn" @click="login">登录</van-button>
      </div>
      <div class="retrieve" @click="retrieve">忘记密码?</div>
      <div class="tip"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import { Toast } from 'vant'

export default {
  name: 'Login',

  computed: {
    ...mapState({
      loginUser: 'loginUser'
    })
  },

  data () {
    return {
      user: '',
      password: '',
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
    },
    password: {
      handler () {
        this.isDisable()
      },
      immediate: true
    }
  },

  methods: {
    ...mapMutations(['changeLoginUser']),
    isDisable () {
      if (this.user !== '' && this.password !== '' && this.password.length >= 5) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    login () {
      const query = {
        user: this.user,
        password: this.password
      }
      axios
        .post('/v1/user/login', query)
        .then((res) => {
          const status = res.data.status
          if (status === 'success') {
            this.changeLoginUser(this.user)
            // 设置过期时间
            const time = new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
            // 设置cookie
            document.cookie = `userId=${this.user};expires=${time}`
            Toast.success('登录成功')
            this.$router.push({ path: '/user' })
          }
        })
        .catch(() => {
          Toast.fail('登录失败')
        })
    },
    // 找回密码
    retrieve () {
      this.$router.push({ path: '/user/retrieve' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
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
    .regist {
      position: absolute;
      right: .2rem;
      top: 0;
      width: 0.64rem;
      text-align: center;
      font-size: .32rem;
      color: #fff;
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
    .retrieve {
      float: right;
      padding: .32rem;
      color: #00bcd4;
    }
    .tip {
      height: 1rem;
      padding: 1rem .2rem .2rem .2rem;
    }
  }
}
</style>
