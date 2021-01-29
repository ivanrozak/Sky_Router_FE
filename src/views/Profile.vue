<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container>
        <b-row class="profile">
          <b-col sm="12" md="4" lg="3">
            <LeftProfile />
          </b-col>
          <b-col sm="12" md="8" lg="9">
            <RightProfile />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import LeftProfile from '../components/_base/Profile Component/LeftProfileComponent'
import RightProfile from '../components/_base/Profile Component/RightProfileComponent'
import Navbar from '../components/naviationBar'
import Footer from '../components/footer'

export default {
  components: {
    LeftProfile,
    RightProfile,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.main {
  font-family: 'Poppins', sans-serif;
  background-color: whitesmoke;
}
.profile {
  padding: 40px 0px;
}
</style>
