import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth
  },
  plugins: [
    createPersistedState({
      paths: [
        'Auth.user.user_role',
        'Auth.user.user_email',
        'Auth.user.user_id'
      ]
    })
  ]
})
