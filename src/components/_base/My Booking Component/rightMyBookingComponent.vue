<template>
  <div>
    <div class="my-booking">
      <p class="title">MY BOOKING</p>
      <b-row align-h="between">
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
        <b-col cols="2" class="grey">Status</b-col>
        <b-col cols="4"
          ><div class="status-waiting"><p>Waiting for payment</p></div></b-col
        >
        <b-col class="right"
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
              <b-table hover :items="passengers"></b-table>
            </div>
          </div>
          <br />
          <b-button style="background-color:#2395ff; text-align: right"
            ><router-link
              to="/detailbooking"
              style="display: block; color:white"
              >Booking Detail</router-link
            ></b-button
          >
        </div>
      </div>
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
        <b-col cols="2" class="grey">Status</b-col>
        <b-col cols="4"
          ><div class="status-issued"><p>Eticket Issued</p></div></b-col
        >
        <b-col class="right"
          >View Details
          <span
            ><img
              src="../../../assets/myBooking/btnback.png"
              alt=""
              style="cursor:pointer"/></span
        ></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClickDetails: false,
      isPaymentSuccess: false,
      passengers: [
        { No: 1, Passengers: 'Mrs. Katty', Ticket_Type: 'Adult' },
        { No: 2, Passengers: 'Mr. Louis', Ticket_Type: 'Adult' },
        { No: 3, Passengers: 'Mr. Downy', Ticket_Type: 'Adult' },
        { No: 4, Passengers: 'Mr. Molto', Ticket_Type: 'Adult' }
      ]
    }
  },
  methods: {
    myBookingDetail() {
      if (this.isClickDetails) this.isClickDetails = false
      else this.isClickDetails = true
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
.status-waiting,
.status-issued {
  background-color: #ff7f23;
  width: 150px;
  text-align: center;
  font-weight: 600;
  color: white;
  border-radius: 5px;
}

.status-issued {
  background-color: #4fcf4d;
}
.passenger-detail,
.box-detail {
  padding: 20px;
}
.box-detail {
  width: 350px;
  box-shadow: 3px 3px 5px 6px #979797;
  border-radius: 15px;
}
</style>
