import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CV.vue')
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: () => import('../views/Contatti.vue')
  },
  {
    path: '/progetti',
    name: 'Progetti',
    component: () => import('../views/Progetti.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
