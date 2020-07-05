import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/ProfileLogin.vue')
  },
  {
    path: '/registry',
    name: 'registry',
    meta: { layout: 'empty' },
    component: () => import('../views/ProfileRegistry.vue')
  },
  {
    path: '/focustest',
    name: 'focustest',
    meta: { layout: 'main' },
    component: () => import('../views/FocusTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
