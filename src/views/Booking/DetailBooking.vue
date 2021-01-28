<template>
  <div>
    <div class="booking-detail">
      <Navbar />
      <b-container>
        <b-row>
          <b-col>
            <DetailCompo />
          </b-col>
        </b-row>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import DetailCompo from '../../components/_base/My Booking Component/detailBookingComponent'
export default {
  name: 'BookingDetails',
  components: {
    Navbar,
    Footer,
    DetailCompo
  }
}
</script>
<style scoped></style>
