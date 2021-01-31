import axios from 'axios'

export default {
  state: {
    schedules: [],
    limit: 4,
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
    price: '',
    params: [],
    scheduleById: {}
  },
  mutations: {
    setSchedules(state, payload) {
      state.schedules = payload.data
      state.totalRows = payload.pagination.totalData
    },
    resetPages(state) {
      state.page = 1
    },
    setPage(state, payload) {
      state.page = payload
    },
    setSort(state, payload) {
      state.sort = payload
    },
    setInflightMeal(state, payload) {
      state.inflightMeal = payload
    },
    setWifi(state, payload) {
      state.wifi = payload
    },
    setLuggage(state, payload) {
      state.luggage = payload
    },
    setDirect(state, payload) {
      state.direct = payload
    },
    setTransit(state, payload) {
      state.transit = payload
    },
    setAirlanes(state, payload) {
      state.airlanes = payload
    },
    setDepartureStart(state, payload) {
      state.departureStart = payload
    },
    setDepartureEnd(state, payload) {
      state.departureEnd = payload
    },
    setArrivedStart(state, payload) {
      state.arrivedStart = payload
    },
    setArrivedEnd(state, payload) {
      state.arrivedEnd = payload
    },
    setPrice(state, payload) {
      state.price = payload
    },
    changePage(state, payload) {
      state.page = payload
      console.log(this.state.page)
    },
    setParams(state, payload) {
      state.params = payload
    },
    setScheduleById(state, payload) {
      state.scheduleById = payload
    }
  },
  actions: {
    getSchedules({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/schedule?takeoff=${state.params.takeOff}&landing=${state.params.landing}&inflightMeal=${state.inflightMeal}&wifi=${state.wifi}&luggage=${state.luggage}&direct=${state.direct}&transit=${state.transit}&airlanes=${state.airlanes}&departureStart=${state.departureStart}&departureEnd=${state.departureEnd}&arrivedStart=${state.arrivedStart}&arrivedEnd=${state.arrivedEnd}&page=${state.page}&limit=${state.limit}&sort=${state.sort}&price=${state.price}&date=${state.params.date}`
          )
          .then(result => {
            resolve(result)
            commit('setSchedules', result.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getScheduleById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}schedule/${payload}`)
          .then(response => {
            context.commit('setScheduleById', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    dataSchedules: state => state.schedules,
    getPage: state => state.page,
    getTotalRows: state => state.totalRows,
    getParams: state => state.params,
    getDataScheduleById: state => state.scheduleById,
    getLimit: state => state.limit
  }
}
