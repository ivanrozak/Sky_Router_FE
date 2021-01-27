<template>
  <div class="ConfirmEmail">
    <b-container fluid>
      <b-row>
        <b-col style="padding: 0;" lg="6">
          <div class="bg_Confirm d-flex">
            <img
              class="image_Confirm"
              src="../../assets/Images/Main Image/image_login.svg"
              alt="imageBackground"
            />
          </div>
        </b-col>
        <b-col lg="6">
          <div class="Confirm_form">
            <div class="logo_Confirm d-flex align-items-center pt-lg-5 ">
              <img
                src="../../assets/Images/Logo/illustration.svg"
                alt="image_logo"
              />
              <span class="ml-2">SkyRouter</span>
            </div>
            <h1 class="text-center title_text">Activation your account</h1>
            <button class="btn_signin w-50 mt-lg-4 py-lg-3">
              Click this Button for Activation
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ConfirmEmail'
}
</script>
<style scoped>
.bg_Confirm {
  background: #2395ff;
  height: 100vh;
}
.image_Confirm {
  margin: 0 auto;
  display: block;
  object-fit: contain;
}
.title_text {
    padding-top: 30%;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
}
.Confirm_form {
  height: 100vh;
  max-height: 100vh;
}
.logo_Confirm span {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.logo_Confirm {
  padding-left: 25%;
}
.form_Confirm {
  padding: 20% 25% 0 25%;
}
.form_Confirm h1 {
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
  display: block;
  margin: 0 auto;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
}
.btn_signin:hover {
  background: #118cff;
}
</style>
