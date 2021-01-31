<template>
  <div>
    <Navbar />
    <div class="main">
      <TopSearch />
      <b-container>
        <b-row class="profile">
          <b-col sm="12" md="4" lg="3">
            <LeftSearch />
          </b-col>
          <b-col sm="12" md="8" lg="9">
            <RightSearch />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopSearch from '../../components/_base/Search Component/TopSearchComponent'
import LeftSearch from '../../components/_base/Search Component/LeftSearchComponent'
import RightSearch from '../../components/_base/Search Component/RightSearchComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'

export default {
  components: {
    TopSearch,
    LeftSearch,
    RightSearch,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.main {
  font-family: 'Poppins', sans-serif;
  background-color: whitesmoke;
  padding-bottom: 40px;
}
</style>
