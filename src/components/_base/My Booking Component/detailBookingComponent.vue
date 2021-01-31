<template>
  <div>
    <div class="detail-booking">
      <h3>Booking Pass</h3>
      <br />
      <div class=" two-circles">
        <b-row>
          <b-col lg="8">
            <b-row align-h="baseline">
              <b-col md="auto">
                <img
                  style="width:70px"
                  src="../../../assets/myBooking/GA_900.png"
                  alt=""
              /></b-col>
              <b-col>
                <p style="font-size: 20px;font-weight: 600">
                  IDN
                  <span
                    ><img
                      src="../../../assets/myBooking/airplaneIcon.png"
                      alt=""
                  /></span>
                  JPN
                </p>
              </b-col>
            </b-row>
            <br /><br />
            <b-row>
              <b-col cols="3">
                <p class="grey">Code</p>
                <p>GA-900</p>
              </b-col>
              <b-col>
                <p class="grey">Class</p>
                <p>Economy</p>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col cols="3">
                <p class="grey">Code</p>
                <p>GA-900</p>
              </b-col>
              <b-col>
                <p class="grey">Class</p>
                <p>Economy</p>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col cols="8">
                <p class="grey">Departure</p>
                <p>Monday, 20 July ‘20 - 12:33</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="1">
            <div class="line"></div>
          </b-col>

          <vue-qrcode value="1" style="width: 150px; height:150px;" />
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
export default {
  components: {
    VueQrcode
  }
}
</script>

<style scoped>
.grey {
  color: #979797;
}
.two-circles {
  width: 650px;

  /*  background-color: red; */
  background: radial-gradient(
        circle at right top,
        transparent 10px,
        #eeeeee 1px
      )
      top left / 400px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent 10px, #eeeeee 0) bottom
      left / 400px 51% no-repeat,
    radial-gradient(circle at left top, transparent 10px, #eeeeee 0) top right /
      250px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #eeeeee 0) bottom
      right / 250px 51% no-repeat;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
}
h3 {
  margin-left: 20px;
  margin-bottom: 5px;
}
p {
  margin-bottom: 2px;
}
.detail-booking {
  background: white;
  width: 700px;

  margin: 0 auto;
  padding: 20px 0;
  border-radius: 20px;
}
span {
  margin: 0 20px;
}
.line {
  border-width: 1px;
  border-style: dashed;
  height: 300px;
  width: 2px;
  margin-left: -45px;
}
</style>
