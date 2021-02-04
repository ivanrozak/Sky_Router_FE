import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    myBooking: [],
    passengers: [],
    elMyBooking: '',
    notification: []
  },
  mutations: {
    setDataBooking(state, payload) {
      state.myBooking = payload
    },
    setDataPassengers(state, payload) {
      state.passengers = payload
    },
    setElementMyBooking(state, payload) {
      state.elMyBooking = payload
    },
    setNotif(state, payload) {
      state.notification = payload.data
    }
  },
  actions: {
    getNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}notif/${payload}`)
          .then(result => {
            context.commit('setNotif', result.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}notif/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getBooking(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .get(`${process.env.VUE_APP_URL}booking/mybookingbyid/${payload}`)
          .then(result => {
            context.commit('setDataBooking', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getPassengers(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .get(`${process.env.VUE_APP_URL}booking/passenger/${payload}`)
          .then(result => {
            context.commit('setDataPassengers', result.data.data)
            resolve(result.data.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    deleteBookingVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}booking/${payload}`)
          .then(result => {
            context.dispatch('getBooking')
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getMyBooking(state) {
      return state.myBooking
    },
    getAllPassengers(state) {
      return state.passengers
    },
    getElMyBooking(state) {
      return state.elMyBooking
    },
    getNotification(state) {
      return state.notification
    }
  }
}
