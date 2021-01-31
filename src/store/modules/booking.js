import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    myBooking: '',
    passengers: [],
    mySchedule: '',
    notification: []
  },
  mutations: {
    setDataBooking(state, payload) {
      console.log('payload')
      console.log(payload)
      state.myBooking = payload
      console.log(state.myBooking)
    },
    setDataPassengers(state, payload) {
      state.passengers = payload
      console.log('passengers')
      console.log(state.passengers)
    },
    setDataSchedule(state, payload) {
      state.mySchedule = payload
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
            console.log(error)
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
            console.log(result)
            context.commit('setDataBooking', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            console.log(error)
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
            console.log(result)
            context.commit('setDataPassengers', result.data.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getSchedule(context, payload) {
      return new Promise((resolve, reject) => {
        console.log('schedule id')
        console.log(payload)
        axios
          .get(`${process.env.VUE_APP_URL}schedule/${payload}`)
          .then(result => {
            console.log('schedule')
            console.log(result)
            context.commit('setDataSchedule', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            console.log(error)
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
    getMySchedule(state) {
      return state.mySchedule
    },
    getNotification(state) {
      return state.notification
    }
  }
}
