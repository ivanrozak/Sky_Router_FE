import axios from 'axios'
import dotenv from 'dotenv'
import io from 'socket.io-client'
dotenv.config()
export default {
  state: {
    listChat: {},
    socket: io('http://localhost:3000'),
    chat: [],
    oldRoom: '',
    room_chat: '',
    displayData: []
  },
  mutations: {
    setListChat(state, payload) {
      state.listChat = payload
    },
    setChat(state, payload) {
      state.chat = payload.data
      console.log(state.chat)
    },
    setRoomDisplay(state, payload) {
      state.displayData = payload
    },
    setRoom(state, payload) {
      /* state.socket.emit('joinRoom', {
        room_chat: payload
      }) */
      state.oldRoom = payload
    },
    setChating(state, payload) {
      state.chat.push(payload)
    }
  },
  actions: {
    getListChat(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/getallroom/`)
          .then(result => {
            context.commit('setListChat', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    postChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${process.env.VUE_APP_URL}chat/sendmessage/${payload.room}`,
            payload.data
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/getroom/${payload}`)
          .then(result => {
            context.commit('setChat', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    getListChats(state) {
      return state.listChat
    },
    getChat(state) {
      return state.chat
    },
    displayData(state) {
      return state.displayData
    },
    setOldRoom(state) {
      return state.oldRoom
    }
  }
}
