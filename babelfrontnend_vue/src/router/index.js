import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: () => import('../views/iniciosesion.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/registro.vue')
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
  },
  {
    path: '/libros/:id',
    name: 'detalleLibro',
    component: () => import('../views/vistapreventa.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
