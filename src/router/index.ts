import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Landing from '@/views/landing.vue'
import Sz from '@/views/sz.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing 
  },
  {
    path: '/sz',
    name: 'SZQuestionTemplate',
    component: Sz
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 