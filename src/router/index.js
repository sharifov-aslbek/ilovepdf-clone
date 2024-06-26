import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: () => import('../views/DesktopView.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import("../views/FeaturesView.vue")
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/Documentation.vue')
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('../views/MobileView.vue')
    }
  ]
})


export default router
