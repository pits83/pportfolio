import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'dashboard',
    
      component: () => import('../views/dashboardView.vue')
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/aboutView.vue')
    },
    {
      path: '/project',
      name: 'project',
    
      component: () => import('../views/projectView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
    
      component: () => import('../views/contactView.vue')
    }
  ]
})

export default router
