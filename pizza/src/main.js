// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// router.beforeEach((to,from,next)=>{
//   if(to.path =='/login'||to.path == '/load'){
//     next();
//   }else{
//     alert("还未登陆，请先登录！");
//     next('/login');
//   }
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
