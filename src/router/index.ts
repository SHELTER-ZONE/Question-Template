import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: () => import ('@/views/Landing.vue')
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: () => import ('@/views/Auth.vue')
  },
  {
    path: '/servers/:serverName/',
    name: 'CategorySelect',
    component: () => import ('@/views/CategorySelect.vue')
  },
  {
    path: '/servers/:serverName/:category',
    name: 'ServerTemplate',
    component: () => import ('@/views/ServerTemplate.vue')
  },
  {
    path: '/servers/create',
    name: 'ServerCreate',
    component: () => import ('@/views/ServerCreate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 