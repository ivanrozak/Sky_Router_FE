<template>
  <div class="HomePage">
    <header>
      <Navbar />
    </header>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
export default {
  name: 'landingPage',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped></style>
