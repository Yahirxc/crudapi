import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import listarU from "../components/listarU.vue"
import CrearUsuario from "../components/CrearUsuario.vue"




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },

    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/listar',
      name: 'listar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:listarU
    },
    {
      path: '/crear',
      name: 'crear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CrearUsuario
    },


  ]
  
})


export default router
