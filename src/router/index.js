import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home page',
      component: () => import('../views/Home_page.vue')
    },
    {
      path: '/wirid_doa',
      name: 'Wirid Doa',
      component: () => import('../views/Wirid_doa.vue')
    }
  ]
})

export default router
