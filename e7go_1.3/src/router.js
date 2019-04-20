import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Our from './views/Our.vue'

Vue.use(Router)
const routes= [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/our',
    name: 'our',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Our
  }
]

const router = new Router({
  // linkActiveClass: 'nav-current',
  // linkExactActiveClass: '',
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

/**********************************************************************************/

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })


