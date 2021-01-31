<template>
  <div class="flight-detail">
    <Navbar />
    <div class="detail">
      <div class="top-bg">
        <b-container>
          <b-row align-h="center">
            <b-col md="7" sm="12">
              <LeftFlight />
            </b-col>
            <b-col md="5" sm="12"> <RightFlight /></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <Footer class="foot" />
  </div>
</template>

<script>
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import LeftFlight from '../../components/_base/Flight Detail Component/leftFlightDetailComponent'
import RightFlight from '../../components/_base/Flight Detail Component/rightFlightDetailComponent'
export default {
  name: 'DetailFlight',
  components: {
    Navbar,
    Footer,
    LeftFlight,
    RightFlight
  }
}
</script>
<style scoped>
.top-bg {
  height: 200px;
  width: 100%;
  margin: 0 auto;
  background: #2395ff;
  background-image: url('../../assets/chatImg/vector 02.png');
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 200px;
  padding: 50px;
  border-radius: 0 0 30px 30px;
}
.detail {
  background: #f5f6fa;
  height: 1485px;
}

@media only screen and (max-width: 576px) {
  .detail {
    height: 1800px;
  }
}
@media only screen and (max-width: 767px) {
  .detail {
    height: 1800px;
  }
}
</style>
