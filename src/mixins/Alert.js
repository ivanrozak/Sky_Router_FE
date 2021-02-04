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
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          }
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesRegister(userEmail) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Sign Up successfully',
          text: `Hi! ${userEmail} Please Check Your Email For Activation `,
          icon: 'success',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          }
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSucces(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Yeay !! Success',
          text: `${msg}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 2300,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          }
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccesBooking(link) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Yeay !! Success Booking',
          text: `Let's Continue for paying`,
          icon: 'success',
          showConfirmButton: false,
          timer: 2300,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          }
        })
          .then(() => {
            window.location.href = link
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
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          },
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
