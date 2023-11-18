import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: () => import('../views/quienessomos.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
