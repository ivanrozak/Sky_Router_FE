<template>
  <div class="right-profile">
    <h6 style="color: #2395ff">P R O F I L E</h6>
    <h4><strong>Profile</strong></h4>
    <br />
    <b-row class="profile-form">
      <b-col sm="12" lg="6">
        <h6><strong>Contact</strong></h6>
        <br />
        <label>Email</label>
        <b-form-input
          type="email"
          v-model="user.user_email"
          placeholder="Enter email"
          required
          disabled
        ></b-form-input>
        <label>Phone Number</label>
        <b-form-input
          type="number"
          v-model="user.user_phone"
          placeholder="Enter phone number"
        ></b-form-input>
      </b-col>
      <b-col sm="12" lg="6">
        <h6><strong>Biodata</strong></h6>
        <br />
        <label>Username</label>
        <b-form-input
          type="text"
          v-model="user.user_name"
          placeholder="Enter your name"
        ></b-form-input>
        <label>City</label>
        <b-form-input
          type="text"
          v-model="user.user_city"
          placeholder="Enter your city"
        ></b-form-input>
        <label>Address</label>
        <b-form-input
          type="text"
          v-model="user.user_address"
          placeholder="Enter your address"
        ></b-form-input>
        <label>Post Code</label>
        <b-form-input
          type="text"
          v-model="user.user_post_code"
          placeholder="Enter your post code"
        ></b-form-input>
        <div style="text-align: right;">
          <b-button
            @click.prevent="updateProfiler()"
            class="btn-save"
            variant="primary"
            ><strong>Save</strong></b-button
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  mixins: [Alert],
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['updateProfileUser']),
    updateProfiler() {
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
          this.AlertSucces(result.data.message)
          console.log(result)
        })
        .catch(err => {
          this.AlertError(err.data.message)
        })
    }
  }
}
</script>
<style scoped>
.right-profile {
  border-radius: 20px;
  background-color: white;
  padding: 30px 30px;
}
input {
  border: none;
  border-bottom: 2px solid rgb(167, 167, 167);
  border-radius: 0px;
  margin-bottom: 20px;
}
label {
  color: rgb(131, 131, 131);
  padding-left: 13px;
  font-size: 0.9em;
}
.btn-save {
  border-radius: 10px;
  margin-top: 20px;
  padding: 7px 30px;
}
</style>
