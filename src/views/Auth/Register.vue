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
<style scoped></style>
