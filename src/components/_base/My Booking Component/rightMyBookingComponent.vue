<template>
  <div>
    <div class="my-booking">
      <p class="title">MY BOOKING</p>
      <b-row align-h="between" align-v="end">
        <b-col class="left">My Booking</b-col>
        <b-col class="right">Order History</b-col>
      </b-row>
    </div>

    <div class="payment-status">
      <p>
        Monday, 20 July ‘20 - 12:33
      </p>
      <p style="font-size: 20px;font-weight: 600">
        IDN
        <span
          ><img src="../../../assets/myBooking/airplaneIcon.png" alt=""
        /></span>
        JPN
      </p>

      <p class="grey">Garuda Indonesia, AB-221</p>
      <div class="line"></div>
      <b-row align-v="baseline">
        <b-col cols="3" sm="3" md="4" lg="2" class="grey">Status</b-col>
        <b-col cols="12" sm="4" md="6" lg="4"
          ><div class="status-success" v-if="myBooking.status === 1">
            <p>Success</p>
          </div>
          <div class="status-pending" v-else-if="myBooking.status === 0">
            <p>Pending</p>
          </div></b-col
        >
        <b-col cols="12" sm="12" md="12" lg="6" class="right"
          >View Details
          <span
            ><img
              src="../../../assets/myBooking/btnback.png"
              alt=""
              style="cursor:pointer"
              @click="myBookingDetail"/></span
        ></b-col>
      </b-row>
      <div v-show="isClickDetails">
        <div class="passenger-detail">
          <div class="box-detail">
            <b-row align-v="baseline">
              <b-col md="auto">
                <img
                  style="width:100px"
                  src="../../../assets/myBooking/GA_900.png"
                  alt=""
                />
              </b-col>
              <b-col>
                <p class="airline-name">Garuda Indonesia</p>
              </b-col>
            </b-row>
            <br /><br />
            <p style="font-size: 18px;font-weight: 600; line-height: 27px">
              Medan (IDN)
              <span
                ><img src="../../../assets/myBooking/airplaneIcon.png" alt=""
              /></span>
              Tokyo (JPN)
            </p>
            <b-row>
              <b-col
                ><p class="grey">
                  Sunday, 15 August 2020<span
                    ><img
                      src="../../../assets/myBooking/Ellipse 48.png"
                      alt=""/></span
                  >12:33 - 15:21
                </p></b-col
              >
            </b-row>

            <br />
            <b-row>
              <b-col cols="7"><h5>Total Payment</h5></b-col>
              <b-col cols="5" class="right">@145.00</b-col>
            </b-row>
            <br />
            <div class="line"></div>
            <div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Nationality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in passengers" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.title }}. {{ item.fullname }}</td>
                    <td>{{ item.nationality }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <b-button
            style="background-color:#2395ff; text-align: right"
            v-if="myBooking.status === 1"
            ><router-link
              to="/detailbooking"
              style="display: block; color:white"
              >Booking Detail</router-link
            ></b-button
          >
        </div>
      </div>
    </div>

    <!-- <div class="payment-status">
      <p>
        Monday, 20 July ‘20 - 12:33
      </p>
      <p style="font-size: 20px;font-weight: 600">
        IDN
        <span
          ><img src="../../../assets/myBooking/airplaneIcon.png" alt=""
        /></span>
        JPN
      </p>

      <p class="grey">Garuda Indonesia, AB-221</p>
      <div class="line"></div>
      <b-row align-v="baseline">
        <b-col cols="3" sm="3" md="4" lg="2" class="grey">Status</b-col>
        <b-col cols="12" sm="4" md="6" lg="4"
          ><div class="status-pending"><p>Pending</p></div></b-col
        >
        <b-col cols="12" sm="12" md="12" lg="6" class="right"
          >View Details
          <span
            ><img
              src="../../../assets/myBooking/btnback.png"
              alt=""
              style="cursor:pointer"/></span
        ></b-col>
      </b-row>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  beforeUpdate() {
    console.log('this.myBooking schedule')
    console.log(this.myBooking.scheduleId)
    this.getSchedule(this.myBooking.scheduleId)
  },
  data() {
    return {
      isClickDetails: false,
      isPaymentSuccess: false
    }
  },
  computed: {
    ...mapGetters({
      myBooking: 'getMyBooking',
      passengers: 'getAllPassengers',
      mySchedule: 'getMySchedule'
    })
  },
  methods: {
    ...mapActions(['getPassengers', 'getSchedule']),
    myBookingDetail() {
      if (this.isClickDetails) this.isClickDetails = false
      else this.isClickDetails = true
      this.getPassengers(this.myBooking.bookingId)
      console.log('passengers vue')
      console.log(this.passengers)
    }
  }
}
</script>

<style scoped>
.blue {
  color: #2395ff;
}
.frame {
  border-style: solid;
  border-color: #2395ff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  border-width: 1px;
}
.airline-name {
  color: #595959;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.title {
  letter-spacing: 0.3em;
  font-weight: 500;
  color: #2395ff;
  font-size: 14px;
}
.my-booking,
.payment-status {
  width: 90%;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
}

.line {
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  padding: 0;
  margin-bottom: 15px;
}
.left {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}

.grey {
  color: #979797;
}

.right {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-align: right;
  color: #2395ff;
}

span {
  margin: 0 15px;
}

.payment-status p,
.status-waiting {
  font-size: 14px;
  line-height: 22px;
}
.status-success,
.status-pending {
  background-color: red;
  width: 150px;
  text-align: center;
  font-weight: 600;
  color: white;
  border-radius: 5px;
}

.status-success {
  background-color: #4fcf4d;
}
.passenger-detail,
.box-detail {
  padding: 20px;
}
.box-detail {
  width: 80%;
  box-shadow: 3px 3px 5px 6px #979797;
  border-radius: 15px;
  background: white;
}
@media only screen and (max-width: 991px) {
  .box-detail {
    width: 300px;
  }
}
@media only screen and (max-width: 576px) {
  .right {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }
}
@media only screen and (max-width: 375px) {
  .right {
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
  .my-booking,
  .payment-status {
    width: 100%;
  }
}
</style>
