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
    price: '',
    params: []
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
    setDate(state, payload) {
      state.date = payload
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
    },
    setParams(state, payload) {
      state.params = payload
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
    }
  },
  getters: {
    dataSchedules: state => state.schedules,
    dataSort: state => state.sort,
    dataDate: state => state.date,
    dataInflightMeal: state => state.inflightMeal,
    dataWifi: state => state.wifi,
    dataLuggage: state => state.luggage,
    dataDirect: state => state.direct,
    dataTransit: state => state.transit,
    dataAirlanes: state => state.airlanes,
    dataDepartureStart: state => state.departureStart,
    dataDepartureEnd: state => state.departureEnd,
    dataArrivedStart: state => state.arrivedStart,
    dataArrivedEnd: state => state.arrivedEnd,
    dataPrice: state => state.price,
    getPage: state => state.page,
    getTotalRows: state => state.totalRows,
    getParams: state => state.params
  }
}
