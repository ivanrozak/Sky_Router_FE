<template>
  <div class="left-profile">
    <div class="top centered">
      <img v-if="image" :src="`http://localhost:3000/${image}`" />
      <img v-else src="../../../assets/logo.png" />
      <div>
        <input id="fileUpload" type="file" @change="handleFile" hidden />
        <button @click.prevent="chooseFile">
          <strong>Select Photo</strong>
        </button>
      </div>
      <h4>{{ user.user_name }}</h4>
      <div>
        <small>{{ user.user_city }}, Indonesia</small>
      </div>
    </div>
    <div class="bottom">
      <div class="btn-group">
        <button style="color: #2395ff">
          <img src="../../../assets/icon/profile.png" class="mr-3" />Profile
        </button>
        <button>
          <img src="../../../assets/icon/star.png" class="mr-3" />My Review
        </button>
        <button>
          <img src="../../../assets/icon/gear.png" class="mr-3" />Settings
        </button>
        <button @click="logingOut()" style="color: red">
          <img src="../../../assets/icon/logout.png" class="mr-3" />Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  mixins: [Alert],
  computed: {
    ...mapGetters({ user: 'getUser', image: 'getImage' })
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['updateProfileUser', 'logout']),
    updateProfile() {
      const {
        user_name,
        user_phone,
        user_image,
        user_address,
        user_city,
        user_post_code
      } = this.user
      const data = new FormData()
      data.append('user_name', user_name)
      data.append('user_phone', user_phone)
      data.append('user_image', user_image)
      data.append('user_address', user_address)
      data.append('user_city', user_city)
      data.append('user_post_code', user_post_code)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.updateProfileUser(data)
        .then(result => {
          console.log(result.data.message)
          this.AlertSucces('Success Update Image')
        })
        .catch(err => {
          this.AlertError(err.data.message)
        })
    },
    logingOut() {
      this.logout()
    },
    handleFile(event) {
      this.user.user_image = event.target.files[0]
      this.updateProfile()
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    }
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 30px;
}
.btn-group {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.btn-group button {
  padding: 10px 5px;
  text-align: left;
  background-color: white;
  border: none;
  border-radius: 0px;
  font-weight: bold;
}
.btn-group button:hover {
  background-color: whitesmoke;
}
.left-profile {
  border-radius: 20px;
  background-color: white;
  padding: 30px 20px;
}
.centered {
  text-align: center;
}
.top img {
  margin-bottom: 20px;
  border-radius: 50%;
  border: 3px solid #2395ff;
  padding: 5px;
  max-width: 130px;
}
.top button {
  padding: 5px 15px;
  color: #2395ff;
  background-color: white;
  border: 1px solid #2395ff;
  border-radius: 10px;
  margin-bottom: 20px;
}
.top button:hover {
  background-color: whitesmoke;
}
</style>
