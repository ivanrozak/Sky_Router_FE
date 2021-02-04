<template>
  <div class="bg_signup d-flex">
    <img
      class="image_signup d-none d-lg-block"
      src="../../../assets/Images/Main Image/image_login.svg"
      alt="imageBackground"
    />
  </div>
</template>
<script>
export default {
  name: 'LeftSignupComponent'
}
</script>
<style scoped>
.bg_signup {
  background: #2395ff;
  height: 100vh;
}
.image_signup {
  margin: 0 auto;
  display: block;
}
@media (max-width: 1430px) {
  .bg_signup {
    height: 120vh;
  }
}
@media (max-width: 576px) {
  .bg_signup {
    background: #ffffff;
    height: 0;
  }
}
</style>
