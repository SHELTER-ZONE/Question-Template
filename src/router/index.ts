import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Landing from '@/views/landing.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing 
  },
  {
    path: '/servers/:serverName/',
    name: 'CategorySelect',
    component: () => import ('@/views/CategorySelect.vue'),
  },
  {
    path: '/servers/:serverName/:category',
    name: 'ServerTemplate',
    component: () => import ('@/views/ServerTemplate.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 