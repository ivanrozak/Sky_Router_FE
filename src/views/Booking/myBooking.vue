<template>
  <div>
    <Navbar />
    <div class="booking-history">
      <b-container>
        <div class="mybooking-page">
          <b-row>
            <b-col cols="12" sm="12" md="5" lg="4"
              ><LeftProfile /> <br />
              <br />
            </b-col>
            <b-col cols="12" sm="12" md="7" lg="8">
              <RightSideMyBooking />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import RightSideMyBooking from '../../components/_base/My Booking Component/rightMyBookingComponent'
import LeftProfile from '../../components/_base/Profile Component/LeftProfileComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'myBooking',
  components: {
    RightSideMyBooking,
    LeftProfile,
    Navbar,
    Footer
  },
  created() {
    this.getBooking(1)
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    ...mapActions(['getBooking'])
  }
}
</script>

<style scoped>
.mybooking-page {
  margin-bottom: 100px;
  font-family: 'Poppins', sans-serif;
  padding: 40px 80px 0;
}
.booking-history {
  background: #f5f6fa;
}
</style>
