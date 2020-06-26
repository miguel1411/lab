import Vue from 'vue'
import VueRouter from 'vue-router'
import Registro from '../views/Registro.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/compra',
    name: 'Compra',
    // route level code-splitting
    // this generates a separate chunk (Compra.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Compra" */ '../views/Compra.vue')
  },
  {
    path: '/compra_terminada',
    name: 'compra_terminada',
    // route level code-splitting
    // this generates a separate chunk (compra_terminada.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "compra_terminada" */ '../views/Compra_terminada.vue')
  },
  {
    path: '/cita',
    name: 'Cita',
    // route level code-splitting
    // this generates a separate chunk (Cita.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cita" */ '../views/Cita.vue')
  },
  {
    path: '/resultados_pendientes',
    name: 'ResultadosPendientes',
    // route level code-splitting
    // this generates a separate chunk (ResultadosPendientes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ResultadosPendientes" */ '../views/ResultadosPendientes.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
