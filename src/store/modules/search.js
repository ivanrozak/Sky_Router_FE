import axios from 'axios'

export default {
  state: {
    flights: []
  },
  mutations: {
    setFlight(state, payload) {
      state.flights = payload.data
    }
  },
  actions: {
    getFlightsData(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}schedule/`, payload)
          .then(response => {
            console.log(response)
            context.commit('setFlight', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    getDataFlight(state) {
      return state.flights
    }
  }
}
