import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
// about下二级路由
    import News from '@/components/about/News'
    import History from '@/components/about/History'
    import Delivery from '@/components/about/Delivery'
    import Contact from '@/components/about/Contact'



import Login from '@/components/login'
import Load from '@/components/Load'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      //component:Index
      components: {
        default:Index,
          'news':News,
          'history':History,
          'delivery':Delivery

        }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      redirect:'/about/news',
      component: About,
      children:[
        {
          path:'/about/news',
          name:'News',
          component:News
          
        },
        {
          path:'/about/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/about/history',
          name:'History',
          component:History
        },
        {
          path:'/about/contact',
          name:'Contact',
          component:Contact
        }
      ]
    },
    {
      path: '/load',
      name: 'Load',
      component: Load
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter:(to,from,next) => {
        alert("非登陆状态，不能访问");
        next('./load');
      }
    }
  ],
  mode:"history"
})

// router.beforeEach((to,from,next)=>{
//   alert("全局守卫beforeEach");
//   next();
// })
