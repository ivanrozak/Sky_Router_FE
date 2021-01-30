import axios from 'axios'

export default {
  state: {
    schedules: [],
    limit: 6,
    page: 1,
    totalRows: null,
    takeOff: '',
    landing: '',
    sort: '',
    date: '',
    inflightMeal: '',
    wifi: '',
    luggage: '',
    direct: '',
    transit: '',
    airlanes: '',
    departureStart: '',
    departureEnd: '',
    arrivedStart: '',
    arrivedEnd: '',
    price: ''
  },
  mutations: {
    setSchedules(state, payload) {
      state.schedules = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setSort(state, payload) {
      state.sort = payload
    }
  },
  actions: {
    getSchedules({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/schedule?takeoff=${state.takeOff}&landing=${state.landing}&inflightmeal=${state.inflightMeal}&wifi=${state.wifi}&luggage=${state.luggage}&direct=${state.direct}&transit=${state.transit}&airlanes=${state.airlanes}&departureStart=${state.departureStart}&departureEnd=${state.departureEnd}&arrivedStart=${state.arrivedStart}&arrivedEnd=${state.arrivedEnd}&page=${state.page}&limit=${state.limit}&sort=${state.sort}&price=${state.price}`
          )
          .then(result => {
            resolve(result)
            commit('setSchedules', result.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    dataSchedules: state => state.schedules
  }
}
