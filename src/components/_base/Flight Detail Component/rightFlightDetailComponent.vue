<template>
  <div>
    <div class="detail">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 15px;
}
.airline-name {
  color: #595959;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.grey {
  color: #979797;
}
.box-detail {
  background: white;
  width: 350px;

  border-radius: 15px;
  padding: 15px;
}
.detail {
  padding: 82px 0;
}
.right {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-align: right;
  color: #2395ff;
}
@media only screen and (max-width: 576px) {
  .detail {
    padding: 25px 0;
  }
}
@media only screen and (max-width: 767px) {
  .detail {
    padding: 25px 0;
  }
}
</style>
