<template>
  <div class="Register">
    <b-container fluid>
      <b-row>
        <b-col style="padding: 0;" lg="6">
          <Lsignup />
        </b-col>
        <b-col>
          <Rsignup />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Lsignup from '../../components/_base/Sign Up Component/leftSignupComponent'
import Rsignup from '../../components/_base/Sign Up Component/rightSignupComponent'
export default {
  name: 'Register',
  components: {
    Lsignup,
    Rsignup
  }
}
</script>
<style scoped>
@media (max-width: 576px) {
  .Register {
    background: #2395ff;
    height: auto;
    background-image: url('../../assets/Images/Main Image/image_login.svg');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position-x: -30px;
    background-position-y: -3%;
  }
}
@media (max-width: 414px) {
  .Register {
    height: 110vh;
  }
}
@media (max-width: 376px) {
  .Register {
    height: 120vh;
  }
}
</style>
