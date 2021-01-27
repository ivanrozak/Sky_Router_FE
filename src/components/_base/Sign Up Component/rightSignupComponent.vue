<template>
  <div class="Register_form">
    <div class="logo_Register d-flex align-items-center pt-lg-5 ">
      <img
        src="../../../assets/Images/Logo/illustration.svg"
        alt="image_logo"
      />
      <span class="ml-2">SkyRouter</span>
    </div>
    <b-form class="form_Register ">
      <h1>Register</h1>
      <b-form-group class="pt-lg-3" id="input-group-1">
        <b-form-input
          id="input-1"
          type="text"
          autocomplete="off"
          placeholder="Full Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        class="pt-lg-3"
        id="input-group-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="text"
          autocomplete="off"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          type="password"
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
          placeholder="Confirm Password"
          required
        ></b-form-input>
      </b-form-group>
      <button class="btn_signin w-100 mt-lg-4 py-lg-3">Sign Up</button>
      <div class="reset_btn mt-lg-3">
        <b-form-checkbox
          id="checkbox-1"
          required
          class="checkbox_class"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Accept terms and condition
        </b-form-checkbox>
      </div>
      <hr class="mx-lg-3" />
    </b-form>
    <b-col class="btn_RegisterbyType" lg="12">
      <p class="text-center">Already have an account?</p>
      <div class="d-flex justify-content-center">
        <button @click="onSignIn" class="btn_google w-50 px-lg-4 py-lg-3">
          Sign in
        </button>
      </div>
    </b-col>
  </div>
</template>
<script>
export default {
  name: 'LeftComponentRegister',
  methods: {
    onSignIn() {
      this.$router.push('/')
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
</style>
