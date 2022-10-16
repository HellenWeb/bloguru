
// Modules

import { createWebHistory, createRouter } from 'vue-router'
import MyLogin from '@/views/Login'
import MyMain from '@/views/Main'

// Logic

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: MyLogin
  },
  {
    path: '/',
    name: 'Main',
    component: MyMain
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
