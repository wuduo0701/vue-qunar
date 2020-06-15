# vue-qunar vue去哪儿网项目
声明：此项目只用于个人学习，不作为任何商业活动

## 技术栈 vue + vuex + vue-router + swiper + fastclick + stylus

1. 此项目涉及数据十分庞大，目前我只开发了前台，后台是自己一点点mock的，所以只有南昌的部分景点数据。
2. 项目只是用来对vue知识的学习总结，毕竟再好的知识还是要经过手动书写加以巩固

- 遇到的问题
1. 原本使用fastClick.js解决移动端300ms延迟的时候，快速的点击页面，出现如下报错：
```
  Unable to preventDefault inside passive event listener due to target being treated
```
解决办法：
  在touchstart事件上，加一个阻止默认行为
2. 借助keep-alive的生命周期activated，判断切换的城市是否与上次一样
一样则不发ajax请求。否则重新发ajax


3. vue中keep-alive的exclude的存在会使activated生命周期函数失效
所有改为了mounted 和 beforeDestroy 生命周期