import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    postBooking(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/api1/booking/mybooking`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    postPesenger(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/api1/booking/passenger`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    }
  },
  getters: {}
}
