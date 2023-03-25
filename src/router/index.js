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
      path: '/quran',
      name: 'Al-Quran',
      component: () => import('../views/Al_quran.vue')
    },
    {
      path: '/wirid_doa',
      name: 'Wirid Doa',
      component: () => import('../views/Wirid_doa.vue')
    },
    {
      path: '/wirid_doa/:slug',
      name: 'Wirid Doa detail',
      component: () => import('../views/Wirid_doa_cate.vue')
    },
    {
      path: '/jadwal_sholat',
      name: 'Jadwal Sholat',
      component: () => import('../views/Jadwal_sholat.vue')
    },
    {
      path: '/kiblat',
      name: 'kiblat',
      component: () => import('../views/Kiblat.vue')
    },
    {
      path: '/tahlil',
      name: 'Tahlil',
      component: () => import('../views/Tahlil.vue')
    },
    {
      path: '/ramadhan',
      name: 'Ramadhan',
      component: () => import('../views/Ramadhan.vue')
    },
    {
      path: '/zakat_donasi',
      name: 'Zakat dan Donasi',
      component: () => import('../views/Zakat_donasi.vue')
    },
    {
      path: '/lainnya',
      name: 'Lainnya',
      component: () => import('../views/Lainnya.vue')
    },
  ]
})

export default router
