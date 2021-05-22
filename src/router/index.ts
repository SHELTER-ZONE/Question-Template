import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question-generate',
    name: 'QuestionGenerate',
    component: () => import('../views/QuestionGenerate.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes 
})

export default router