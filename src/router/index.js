import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/Services',
      name: 'Services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/Importmodule01',
      name: 'Importmodule01',
      component: () => import('../views/Importmodule01View.vue'),
    },
    {
      path: '/Importmodule02',
      name: 'Importmodule02',
      component: () => import('../views/Importmodule02View.vue'),
    },
    {
      path: '/JapanModule01',
      name: 'JapanModule01',
      component: () => import('../views/japan/JapanModule01View.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
