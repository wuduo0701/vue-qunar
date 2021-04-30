import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import WekendGo from '@/common/weekendGo/weekendGo'
import MyInfo from '@/pages/myInfo/myInfo.vue'
// 登录注册
import Login from '@/pages/login/login.vue'
import Retrieve from '@/pages/login/retrieve.vue'
import Register from '@/pages/register/register.vue'
//  订单模块
import Order from '@/pages/order/order.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weekendgo/:name',
      name: 'WekendGo',
      component: WekendGo
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/name/:name',
      name: 'Detail',
      component: Detail
    },
    // 我的
    {
      path: '/user',
      name: 'myInfo',
      component: MyInfo
    },
    // 登录
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/retrieve',
      name: 'Retrieve',
      component: Retrieve
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  const cookie = document.cookie
  if (to.name !== 'Login' && cookie === '') {
    next({ replace: true, name: 'Login' })
  }
  next()
})
export default router
