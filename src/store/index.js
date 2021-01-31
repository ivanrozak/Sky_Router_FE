import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Chat from './modules/chat'
import Book from './modules/booking'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Chat,
    Book
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.image']
    })
  ]
})
