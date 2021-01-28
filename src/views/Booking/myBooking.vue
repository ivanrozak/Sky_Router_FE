<template>
  <div>
    <Navbar />
    <div class="mybooking-page">
      <b-row>
        <b-col sm="12" md="4" lg="4"><LeftProfile /> </b-col>
        <b-col sm="12" md="8" lg="8">
          <RightSideMyBooking />
        </b-col>
      </b-row>
    </div>
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
  background: #f5f6fa;
}
</style>
