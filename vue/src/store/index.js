
// Modules

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
          console.log(res.json())
        })
        .then(res => {
          commit('setUser', res)
          return res
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
          console.log(res.json())
        })
        .then(res => {
          commit('setUser', res)
          return res
        })
    }
  },
  mutations: {
    logout: () => {
      this.state.user.data = {}
      this.state.user.token = null
    },
    setUser: (userData) => {
      this.state.user.data = userData.user
      this.state.user.token = userData.token
      sessionStorage.setItem('TOKEN', userData.token)
    }
  },
  modules: {}
})

export default store
