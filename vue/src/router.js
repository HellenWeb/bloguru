
// Modules

import { createWebHistory, createRouter } from 'vue-router'
import MyLogin from '@/views/Login'
import MyMain from '@/views/Main'
import store from './store'

// Logic

const routes = [
  {
    path: '/',
    meta: { requiresAuth: true },
    name: 'Main',
    component: MyMain
  },
  {
    path: '/login',
    name: 'Login',
    component: MyLogin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
