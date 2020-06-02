# vue-qunar vue去哪儿网项目

像素比：
在html中(reset.css)
1 rem = 50 px
- 创建分支，同步
1. git checkout -b 分支名       创建并切换到该分支

2. git push origin 分支名     远端同步分支

- 上传到分支上后切换为主分支
1. git  checkout master
  同步代码
2. git pull origin master
  合并分支
3. git  merge dev
  查看状态
4. git status
  push到远端
5. git push origin master

- 遇到的问题
原本使用fastClick.js解决移动端300ms延迟的时候，快速的点击页面，出现如下报错：
```
  Unable to preventDefault inside passive event listener due to target being treated
```

借助keep-alive的生命周期activated，判断切换的城市是否与上次一样
一样则不发ajax请求。否则重新发ajax


vue中keep-alive的exclude的存在会使activated生命周期函数失效
所有改为了mounted 和 beforeDestroy 生命周期