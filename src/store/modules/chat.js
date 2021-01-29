import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    listChat: {}
  },
  mutations: {
    setListChat(state, payload) {
      state.listChat = payload
    }
  },
  actions: {
    getListChat(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/getallroom/`)
          .then(result => {
            console.log(result)
            context.commit('setListChat', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
    // getChatPerRoom(_context, payload) => {
    //     // resolve,reject
    //     return new Promise(() => {
    //         axios.get(`${process.env.VUE_APP_URL}chat/getroom/${payload}`)

    //     })
    // }
  },
  getters: {
    getListChats(state) {
      return state.listChat
    }
  }
}
