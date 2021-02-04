<template>
  <div class="bg_login d-flex">
    <img
      class="image_login d-none d-lg-block"
      src="../../../assets/Images/Main Image/image_login.svg"
      alt="imageBackground"
    />
  </div>
</template>
<script>
export default {
  name: 'LeftLoginComponent'
}
</script>
<style scoped>
.bg_login {
  background: #2395ff;
  height: 100vh;
}
.image_login {
  margin: 0 auto;
  display: block;
}

@media (max-width: 576px) {
  .bg_login {
    background: #ffffff;
    height: 0;
  }
}
</style>
