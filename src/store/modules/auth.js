import axios from 'axios'
import router from '../../router'
export default {
  state: {
    user: {},
    image: '',
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.data
      state.token = payload.data.token
    },
    delUser(state) {
      state.image = ''
      state.user = {}
      state.token = null
    },
    setImage(state, payload) {
      state.image = payload.data.user_image
    }
  },
  actions: {
    LoginAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/api1/user/login/`, payload)
          .then(result => {
            console.log(result)
            context.commit('setUser', result.data)
            context.commit('setImage', result.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },

    RegisterAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/api1/user/register/`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    verifyAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}/api1/user/verification/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    sendEmailForgot(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/api1/user/forgetpassword/`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    ChangePasswordForgot(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}/api1/user/forgetpassword/${payload.id}`,
            payload.data
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    updateProfileUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}/api1/user/updateuser/`, payload)
          .then(result => {
            context.commit('setImage', result.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
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
    },
    getImage(state) {
      return state.image
    }
  }
}
