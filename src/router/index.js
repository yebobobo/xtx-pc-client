import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'login'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/Home.vue'),
    name: 'home',
    redirect: '/home/main',
    children: [
      {
        path: 'main',
        component: () => import('@/views/Main/Main.vue'),
        name: 'main'
      },
      {
        path: 'register',
        component: () => import('@/views/Register/Register.vue'),
        name: 'register'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
