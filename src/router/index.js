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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
