<template>
  <div>
    <div class="booking-detail">
      <Navbar />
      <b-container class="container-detail-booking">
        <div class="detail-compo">
          <DetailCompo />
        </div>
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
<style scoped>
.container-detail-booking {
  background: #2395ff;
  padding: 60px 0;
}
div.detail-compo {
  margin: 0 auto;
}
</style>
