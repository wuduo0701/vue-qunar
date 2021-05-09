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
import OrderFill from '@/pages/order/orderFill.vue'
// 评论模块
import commentAll from '@/pages/comment/commentAll.vue'
import addComment from '@/pages/comment/addComment.vue'
import myComment from '@/pages/comment/myComment.vue'
// 热门榜单
import leaderBoard from '@/common/leaderBoard/leaderBoard'

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
      path: '/weekendgo/:title',
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
    // 订单
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/orderFill/title/:title/price/:price/date/:date',
      name: 'OrderFill',
      component: OrderFill
    },
    // 评论
    {
      path: '/comment/name/:name',
      name: 'commentAll',
      component: commentAll
    },
    {
      path: '/comment/addComment/:name',
      name: 'addComment',
      component: addComment
    },
    {
      path: '/comment/myComment/:user',
      name: 'myComment',
      component: myComment
    },
    {
      path: '/leaderBoard/title/:title',
      name: 'leaderBoard',
      component: leaderBoard
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
