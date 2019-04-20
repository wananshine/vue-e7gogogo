import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'home',
      meta: { title: '系统首页' },
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log("我即将进入系统首页");
        next();
      },
      beforeLeave: (to, from, next) => {
        console.log("我即将離開系统首页");
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '關於我們' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
]
const router = new Router({
    mode: "history",
    hashbang: false,
    history: true,
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to,from,savedPosition){
      if(savedPosition){
          return savedPosition;
      }else{
          return {x: 0,y: 0}
      }
    }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {  //判断是否需要登录权限
      if (store.state.token) {  //判断是否登录
          console.log(store.state)
          next();
      }
      else {  //没登录权限则跳转到登录界面
          console.log(store.state)
          console.error('Place login!')
          next({
              // path: '/login',
              path: '/signIn',
              query: {redirect: to.fullPath}
          })
      }
  }
  else {
    next();
  }
})

export default router;
