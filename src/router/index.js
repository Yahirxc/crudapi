import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import listarU from "../components/listarU.vue"
import CrearUsuario from "../components/CrearUsuario.vue"
import CrearE from '../components/CrearE.vue'
import ListarE from "../components/ListarE.vue"
import Empleado from "../views/EmpleadoView.vue"
import CrearC from '../components/CrearC.vue'
import ListarC from "../components/ListarC.vue"
import cliente from "../views/ClientesView.vue"
import crearD from '../components/CrearD.vue'
import ListarD from "../components/ListarD.vue"
import depa from "../views/DepartamentoView.vue"
import crearR from '../components/CrearR.vue'
import ListarR from "../components/ListarR.vue"
import rol from "../views/RolView.vue"
import crearP from '../components/CrearP.vue'
import ListarP from "../components/ListarP.vue"
import puesto from "../views/PuestoView.vue"
import crearF from '../components/CrearF.vue'
import ListarF from "../components/ListarF.vue"
import fac from "../views/FacturaView.vue"
import editar from "../components/ActualizarU.vue"









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
    {
      path: '/editaru/:pkUsuario',
      name: 'editaru',
      component: editar
    },

    {
      path: '/listarE',
      name: 'listarE',
      component:ListarE
    },
    {
      path: '/crearE',
      name: 'crearE',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CrearE
    },

    {
      path: '/editarE/:pkEmpleado',
      name: 'editarE',
      component: () => import('../components/ActualizarE.vue')
    },

    {
      path: '/empleado',
      name: 'empleado',
      component:Empleado
    },
    {
      path: '/listarC',
      name: 'listarC',
      component:ListarC
    },
    {
      path: '/crearC',
      name: 'crearC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CrearC
    },

    {
      path: '/editarC/:pkCliente',
      name: 'editarC',
      component: () => import('../components/ActualizarC.vue')
    },

    {
      path: '/cliente',
      name: 'cliente',
      component:cliente
    },

    {
      path: '/listarD',
      name: 'listarD',
      component:ListarD
    },
    {
      path: '/crearD',
      name: 'crearD',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:crearD
    },

    {
      path: '/editarD/:pkDepartamento',
      name: 'editarD',
      component: () => import('../components/ActualizarD.vue')
    },

    {
      path: '/depa',
      name: 'depa',
      component:depa
    },
    {
      path: '/listarR',
      name: 'listarR',
      component:ListarR
    },
    {
      path: '/crearR',
      name: 'crearR',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:crearR
    },

    {
      path: '/editarR/:pkRol',
      name: 'editarR',
      component: () => import('../components/ActualizarR.vue')
    },

    {
      path: '/rol',
      name: 'rol',
      component:rol
    },
    {
      path: '/listarP',
      name: 'listarP',
      component:ListarP
    },
    {
      path: '/crearP',
      name: 'crearP',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:crearP
    },

    {
      path: '/editarP/:pkpuesto',
      name: 'editarP',
      component: () => import('../components/ActualizarP.vue')
    },

    {
      path: '/puesto',
      name: 'puesto',
      component:puesto
    },
    {
      path: '/listarF',
      name: 'listarF',
      component:ListarF
    },
    {
      path: '/crearF',
      name: 'crearF',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:crearF
    },

    {
      path: '/editarF/:pkFactura',
      name: 'editarF',
      component: () => import('../components/ActualizarF.vue')
    },

    {
      path: '/fac',
      name: 'fac',
      component:fac
    },

    

    


  ]
  
})


export default router
