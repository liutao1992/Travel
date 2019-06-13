// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

Vue.config.productionTip = false
/* 解决移动端点击事件延迟300ms的问题 */
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* 在es6语法中，如果键与值相同时只显示键值 */
  router,
  components: { App },
  template: '<App/>'
})
