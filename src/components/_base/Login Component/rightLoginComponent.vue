<template>
  <div class="login_form">
    <div class="logo_login d-flex align-items-center pt-lg-5 ">
      <img
        src="../../../assets/Images/Logo/illustration.svg"
        alt="image_logo"
      />
      <span class="ml-2">SkyRouter</span>
    </div>
    <b-form class="form_login ">
      <h1>Login</h1>
      <b-form-group
        class="pt-lg-3"
        id="input-group-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group>
      <button class="btn_signin w-100 mt-lg-4 py-lg-3">Sign in</button>
      <div class="reset_btn text-center">
        <p style="margin-bottom: 0;" class=" mt-lg-3">
          Did you forgot your password?
        </p>
        <a class="btn_reset">Tap here for reset</a>
      </div>
      <hr class="mx-lg-3" />
    </b-form>
    <b-col class="btn_loginbyType" lg="12">
      <p class="text-center">or sign in with</p>
      <div class="d-flex justify-content-center">
        <button class="btn_google px-lg-4 py-lg-2">
          <img
            src="../../../assets/Images/Logo/google.svg"
            alt="Icon_btnGoogle"
          />
        </button>
        <button class="btn_facebook px-lg-4 py-lg-2 ml-3">
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
export default {
  name: 'LeftComponentLogin'
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
