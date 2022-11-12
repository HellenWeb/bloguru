
// Modules

import router from '@/router'
import { createStore } from 'vuex'

// Logic

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN')
    }
  },
  getters: {},
  actions: {
    sign_up ({ commit }, user) {
      fetch('http://127.0.0.1:8000/api/register', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
      })
        .then(res => {
          if (res.ok === true) {
            this.commit('setUser', res)
            router.push({ name: 'Main' })
          }
        })
    },
    login ({ commit }, user) {
      fetch('http://127.0.0.1:8000/api/login', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
      })
        .then(res => {
          if (res.ok === true) {
            console.log(res)
            this.commit('setUser', res)
            router.push({ name: 'Main' })
          }
        })
    }
  },
  mutations: {
    logout () {
      this.state.user.data = {}
      this.state.user.token = null
    },
    setUser (userData) {
      this.state.user.data = userData.user
      this.state.user.token = userData.token
      sessionStorage.setItem('TOKEN', userData.token)
    }
  },
  modules: {}
})

export default store
