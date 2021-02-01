import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Chat from './modules/chat'
import Book from './modules/booking'
import SearchResult from './modules/searchResult'
import Booking from './modules/postBooking'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Chat,
    Book,
    SearchResult,
    Booking
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      },
      paths: ['Auth.user', 'Auth.image', 'SearchResult.params']
    })
  ]
})
