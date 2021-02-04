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
                class="d-none d-lg-block"
                src="../../assets/Images/Logo/illustration.svg"
                alt="image_logo"
              />
              <span class="ml-2">SkyRouter</span>
            </div>
            <div class="btn_Confirm">
              <h1 class="text-center title_text">Activation your account</h1>
              <button
                @click="onVerify"
                class="btn_signin mt-lg-4 mt-3 py-3 py-lg-3"
              >
                Click this Button for Activation
              </button>
            </div>
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
  name: 'ConfirmEmail',
  mixins: [Alert],
  data() {
    return {
      id: this.$route.params.TokenConfirm
    }
  },
  methods: {
    ...mapActions(['verifyAccount']),
    onVerify() {
      this.verifyAccount(this.id)
        .then(() => {
          this.AlertSucces('Activation Your Account Success !!').then(res => {
            if (res) {
              this.$router.push('/login')
            }
          })
        })
        .catch(err => {
          this.AlertError(err.data.message)
        })
    }
  }
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
  width: 50%;
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
@media (max-width: 1430px) {
  .form_Confirm {
    padding: 29% 25% 0 25%;
  }
}
@media (max-width: 1280px) {
  .form_Confirm {
    padding: 35% 15% 0 15%;
  }
  .btn_signin {
    width: 70%;
  }
}
@media (max-width: 576px) {
  .bg_Confirm {
    background: none;
    height: 0;
  }
  .logo_Confirm span {
    color: #ffffff;
    font-size: 32px;
  }
  .btn_signin {
    color: #2395ff;
    width: 100%;
    background: #ffffff;
  }
  .btn_signin:hover {
    background: #ffffff;
  }

  .logo_Confirm {
    padding-left: 0%;
  }
  
  .btn_Confirm{
    padding-top: 30%;
  }
  .ConfirmEmail {
    background: #2395ff;
    height: auto;
    background-image: url('../../assets/Images/Main Image/image_login.svg');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position-x: -30px;
    background-position-y: 7%;
  }
}
</style>
