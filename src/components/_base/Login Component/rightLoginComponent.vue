<template>
  <div class="login_form">
    <div class="logo_login d-flex align-items-center pt-lg-5 ">
      <img
        class="d-none d-lg-block"
        src="../../../assets/Images/Logo/illustration.svg"
        alt="image_logo"
      />
      <span class="ml-lg-2 pt-4 pt-lg-0">SkyRouter</span>
    </div>
    <b-form @submit.prevent="onSubmit" class="form_login ">
      <h1>Login</h1>
      <b-form-group class="pt-lg-3 pt-3" id="input-group-1">
        <b-form-input
          id="input-1"
          type="email"
          v-model="form.user_email"
          placeholder="Email"
          required
        ></b-form-input>
        <label class="labels" for=""
          >We'll never share your email with anyone else.</label
        >
      </b-form-group>
      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.user_password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group>
      <button type="submit" class="btn_signin w-100 py-3 mt-3 mt-lg-4 py-lg-3">
        Sign in
      </button>
      <div class="reset_btn text-center">
        <p style="margin-bottom: 0;" class=" mt-lg-3 mt-3">
          Did you forgot your password?
        </p>
        <a @click="onReset" class="btn_reset">Tap here for reset</a>
      </div>
      <hr class="mx-lg-3" />
    </b-form>
    <b-col class="btn_loginbyType" lg="12">
      <p class="text-center">or sign in with</p>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn_google py-2 px-4 px-lg-4 py-lg-2">
          <img
            src="../../../assets/Images/Logo/google.svg"
            alt="Icon_btnGoogle"
          />
        </button>
        <button
          type="button"
          class="btn_facebook py-2 px-4 px-lg-4 py-lg-2 ml-3"
        >
          <img
            src="../../../assets/Images/Logo/FB.svg"
            alt="Icon_btnFacebook"
          />
        </button>
      </div>
    </b-col>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  name: 'LeftComponentLogin',
  mixins: [Alert],
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['LoginAccount']),
    onSubmit() {
      this.LoginAccount(this.form)
        .then(result => {
          this.AlertSuccesLogin(result.data.data.user_name).then(res => {
            if (res) {
              this.$router.push('/')
            }
          })
        })
        .catch(err => {
          this.AlertError(err.data.message)
        })
    },
    onReset() {
      this.$router.push('/forgot')
    }
  }
}
</script>
<style scoped>
.login_form {
  height: 100vh;
  max-height: 100vh;
}
.logo_login span {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 22px;
}
.reset_btn p {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
.reset_btn a {
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid;
  text-decoration: none;
  cursor: pointer;
}
.logo_login {
  padding-left: 25%;
}
.form_login {
  padding: 20% 25% 0 25%;
}
.form_login h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 36px;
}
.btn_loginbyType p {
  font-family: 'Poppins', sans-serif;
}
.btn_google,
.btn_facebook {
  background: none;
  border: 1px solid #2395ff;
  border-radius: 6px;
  outline: none;
}
.btn_google:hover,
.btn_facebook:hover {
  border: 1px solid #0084ff;
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
.labels {
  color: #88898a;
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
@media (max-width: 1430px) {
  .form_login {
    padding: 7% 25% 0 25%;
  }
}
@media (max-width: 1280px) {
  .form_login {
    padding: 15% 15% 0 15%;
  }
  .login_form {
    height: 100vh;
    max-height: 100vh;
  }
}
@media (max-width: 576px) {
  .form_login {
    padding: 40% 0 0 0;
  }
  .btn_signin,
  .btn_signin:hover {
    background: #ffffff;
    color: #118cff;
  }
  .labels {
    color: #ffffff;
  }
  .btn_google,
  .btn_facebook,
  .btn_google:hover,
  .btn_facebook:hover {
    background: #ffffff;
    border: 1px solid #ffffff;
  }
  .reset_btn a,
  .reset_btn a:hover {
    color: #ffffff;
  }
  .logo_login span {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 33px;
    color: #ffffff;
  }
  .logo_login {
    padding-left: 0%;
  }
}
@media (max-width: 375px) {
  .form_login {
    padding: 40% 0 0 0;
  }
}
</style>
