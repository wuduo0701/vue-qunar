<template>
  <div id="app">
    <keep-alive exclude="Detail, weekendGo">
      <!-- 显示当前路由地址所显示的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
