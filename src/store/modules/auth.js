import axios from 'axios'
import router from '../../router'
export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.data
      state.token = payload.data.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    LoginAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}user/login/`, payload)
          .then(result => {
            context.commit('setUser', result.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/')
    },
    interceptorRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            error.response.data.status === 403 &&
            error.response.data.data === 'jwt expired'
          ) {
            context.dispatch('logout')
            alert('Sorry Your token is Expired !')
          } else if (
            error.response.data.status === 403 &&
            error.response.data.data === 'jwt malformed'
          ) {
            context.dispatch('logout')
            alert('Sorry Your token is not valid !')
          }

          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUser(state) {
      return state.user
    }
  }
}