import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPage from '@/views/AboutPage.vue'
import ServicePage from '@/views/ServicePage.vue'
import ContactPage from '@/views/ContactPage.vue'
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
      component: AboutPage
    },
    {
      path: '/service',
      name: 'service',
      component: ServicePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    
  ]
})

export default router
