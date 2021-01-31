import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Chat from './modules/chat'
import SearchResult from './modules/searchResult'
import Booking from './modules/postBooking'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Chat,
    SearchResult,
    Booking
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.image']
    })
  ]
})
