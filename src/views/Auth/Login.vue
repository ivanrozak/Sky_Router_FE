<template>
  <div class="Login">
    <b-container fluid>
      <b-row>
        <b-col style="padding: 0;" lg="6">
          <LoginL />
        </b-col>
        <b-col lg="6">
          <LoginR />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import LoginL from '../../components/_base/Login Component/leftLoginComponent'
import LoginR from '../../components/_base/Login Component/rightLoginComponent'
export default {
  name: 'Login',
  components: {
    LoginL,
    LoginR
  }
}
</script>
<style scoped>
@media (max-width: 576px) {
  .Login {
    background: #2395ff;
    height: auto;
    background-image: url('../../assets/Images/Main Image/image_login.svg');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position-x: -30px;
    background-position-y: -3%;
  }
}
@media (max-width: 376px) {
  .Login {
    height: 110vh;
  }
}
</style>
