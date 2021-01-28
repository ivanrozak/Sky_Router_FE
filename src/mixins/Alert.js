export default {
  methods: {
    AlertSuccesLogin(username) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Signed in successfully',
          text: `Hi! ${username} Welcome at SkyRouter `,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertError(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Something went wrong!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          text: `${msg}`
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
