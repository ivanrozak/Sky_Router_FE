<template>
  <div class="forgotpass">
    <b-container fluid>
      <b-row>
        <b-col style="padding: 0;" lg="6">
          <div class="bg_forgot d-flex">
            <img
              class="image_forgot"
              src="../../assets/Images/Main Image/image_login.svg"
              alt="imageBackground"
            />
          </div>
        </b-col>
        <b-col lg="6">
          <div class="Forgot_form">
            <div class="logo_Forgot d-flex align-items-center pt-lg-5 ">
              <img
                src="../../assets/Images/Logo/illustration.svg"
                alt="image_logo"
              />
              <span class="ml-2">SkyRouter</span>
            </div>
            <b-form @submit.prevent="onChange" class="form_Forgot ">
              <h1>Re-new your Password</h1>
              <b-form-group class="pt-lg-3" id="input-group-1">
                <b-form-input
                  id="input-1"
                  type="password"
                  v-model="form.user_password"
                  placeholder="New Password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group class="pt-lg-3" id="input-group-1">
                <b-form-input
                  id="input-1"
                  type="password"
                  v-model="confirmPassword"
                  placeholder="Confirm New Password"
                  required
                ></b-form-input>
              </b-form-group>
              <button type="submit" class="btn_signin w-100 mt-lg-4 py-lg-3">
                Change Password
              </button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Alert from '../../mixins/Alert'
export default {
  name: 'ForgotChangePassword',
  mixins: [Alert],
  data() {
    return {
      token: this.$route.params.TokenForgot,
      form: {
        user_password: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['ChangePasswordForgot']),
    onChange() {
      const form = {
        data: this.form,
        id: this.token
      }
      if (this.confirmPassword === this.form.user_password) {
        this.ChangePasswordForgot(form)
          .then(result => {
            this.AlertSucces(result.data.message).then(res => {
              if (res) {
                this.$router.push('/login')
              }
            })
          })
          .catch(err => {
            this.AlertError(err.data.message)
          })
      } else {
        this.AlertError('Password Not Match')
      }
    }
  }
}
</script>
<style scoped>
.bg_forgot {
  background: #2395ff;
  height: 100vh;
}
.image_forgot {
  margin: 0 auto;
  display: block;
  object-fit: contain;
}
.Forgot_form {
  height: 100vh;
  max-height: 100vh;
}
.logo_Forgot span {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.logo_Forgot {
  padding-left: 25%;
}
.form_Forgot {
  padding: 20% 25% 0 25%;
}
.form_Forgot h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 36px;
}
.title_bottom {
  font-family: 'Poppins', sans-serif;
}
.btn_signin {
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
}
.btn_signin:hover {
  background: #118cff;
}
input {
  font-family: 'Poppins', sans-serif;
  height: 50px;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
}
</style>
