<template>
  <div>
    <Navbar />
    <b-container>
      <div class="mybooking-page">
        <b-row>
          <b-col sm="12" md="4" lg="4"
            ><LeftProfile /> <br />
            <br />
          </b-col>
          <b-col sm="12" md="8" lg="8">
            <RightSideMyBooking />
          </b-col>
        </b-row>
      </div>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import RightSideMyBooking from '../../components/_base/My Booking Component/rightMyBookingComponent'
import LeftProfile from '../../components/_base/Profile Component/LeftProfileComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
export default {
  name: 'myBooking',
  components: {
    RightSideMyBooking,
    LeftProfile,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.mybooking-page {
  background: #e7e6e6;
  margin-bottom: 100px;
  font-family: 'Poppins', sans-serif;
  padding: 40px 80px 0;
}
</style>
