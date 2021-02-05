<template>
  <div class="Register_form">
    <div
      @click="toHome"
      class="logo_Register d-flex align-items-center pt-lg-5 "
    >
      <img
        class="d-none d-lg-block"
        src="../../../assets/Images/Logo/illustration.svg"
        alt="image_logo"
      />
      <span class="ml-lg-2 pt-3">SkyRouter</span>
    </div>
    <b-form @submit.prevent="onSubmit" class="form_Register ">
      <h1>Register</h1>
      <b-form-group class="pt-lg-3" id="input-group-1">
        <b-form-input
          id="input-1"
          type="text"
          autocomplete="off"
          v-model="form.user_name"
          placeholder="Full Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="pt-lg-3" id="input-group-1">
        <b-form-input
          id="input-1"
          type="text"
          autocomplete="off"
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
          autocomplete="off"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          autocomplete="off"
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          required
        ></b-form-input>
      </b-form-group>
      <button class="btn_signin w-100 py-3 mt-lg-4 py-lg-3">Sign Up</button>
      <div class="reset_btn mt-lg-3 mt-3">
        <b-form-checkbox
          id="checkbox-1"
          required
          class="checkbox_class"
          name="checkbox-1"
          value="0"
          v-model="form.user_role"
          unchecked-value="unchacked"
        >
          Accept terms and condition
        </b-form-checkbox>
      </div>
      <hr class="mx-lg-3" />
    </b-form>
    <b-col class="btn_RegisterbyType" lg="12">
      <p class="text-center">Already have an account?</p>
      <div class="d-flex  justify-content-center">
        <button
          @click="onSignIn"
          class="btn_google w-50 px-4 py-3 px-lg-4 py-lg-3"
        >
          Sign in
        </button>
      </div>
    </b-col>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Alert from '../../../mixins/Alert'
export default {
  name: 'LeftComponentRegister',
  mixins: [Alert],
  data() {
    return {
      form: {
        user_name: '',
        user_email: '',
        user_password: '',
        user_role: 'unchacked'
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['RegisterAccount']),
    onSignIn() {
      this.$router.push('/login')
    },
    toHome() {
      this.$router.push('/')
    },
    onSubmit() {
      if (this.confirmPassword === this.form.user_password) {
        this.RegisterAccount(this.form)
          .then(result => {
            this.AlertSuccesRegister(result.data.data.user_email).then(res => {
              if (res) {
                this.$router.push('/login')
              }
            })
          })
          .catch(err => {
            this.AlertError(err.data.message)
          })
      } else {
        this.AlertError('Password not match')
      }
    }
  }
}
</script>
<style scoped>
.Register_form {
  height: 100vh;
  max-height: 100vh;
}
.logo_Register span {
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
.logo_Register {
  cursor: pointer;
  padding-left: 25%;
}
.form_Register {
  padding: 15% 25% 0 25%;
}
.form_Register h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 36px;
}
.btn_RegisterbyType p {
  font-family: 'Poppins', sans-serif;
}
.checkbox_class {
  font-family: 'Poppins', sans-serif;
}
.btn_google {
  background: none;
  border: 1px solid #2395ff;
  border-radius: 10px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #2395ff;
  outline: none;
}
.btn_google:hover {
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
  .form_Register {
    padding: 7% 17% 0 17%;
  }
}
@media (max-width: 1280px) {
  .form_Register {
    padding: 15% 15% 0 15%;
  }
  .login_form {
    height: 100vh;
    max-height: 100vh;
  }
}
@media (max-width: 576px) {
  .form_Register {
    padding: 40% 0 0 0;
  }
  .btn_signin,
  .btn_signin:hover {
    background: #ffffff;
    color: #118cff;
  }
  .labels {
    color: #ffffff;
    font-size: 14px;
  }
  .btn_google,
  .btn_google:hover {
    background: #ffffff;
    border: 1px solid #ffffff;
  }
  .logo_Register span {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 33px;
    color: #ffffff;
  }
  .logo_Register {
    padding-left: 0%;
  }
}
@media (max-width: 375px) {
  .form_Register {
    padding: 40% 0 0 0;
  }
}
</style>
