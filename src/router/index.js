import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/theory',
    name: 'theory',
    meta: { layout: 'main' },
    component: () => import('../views/Theory.vue')
  },
  {
    path: '/tests',
    name: 'tests',
    meta: { layout: 'main' },
    component: () => import('../views/Tests.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
