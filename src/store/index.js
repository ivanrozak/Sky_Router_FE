import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Chat from './modules/chat'
import SearchResult from './modules/searchResult'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Chat,
    SearchResult
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.image']
    })
  ]
})
