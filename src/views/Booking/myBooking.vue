<template>
  <div class="mybooking-page">
    <b-row>
      <b-col cols="4"> </b-col>
      <b-col cols="8">
        <RightSideMyBooking />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RightSideMyBooking from '../../components/_base/My Booking Component/rightMyBookingComponent'
export default {
  name: 'myBooking',
  components: {
    RightSideMyBooking
  }
}
</script>

<style scoped>
.mybooking-page {
  background: #f5f6fa;
}
</style>
