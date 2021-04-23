import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import WekendGo from '@/common/weekendGo/weekendGo'
import MyInfo from '@/pages/myInfo/myInfo.vue'
Vue.use(Router)

export default new Router({
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
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    // 我的
    {
      path: '/myInfo',
      name: 'myInfo',
      component: MyInfo
    }
  ],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
