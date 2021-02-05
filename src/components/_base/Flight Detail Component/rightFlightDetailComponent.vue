<template>
  <div>
    <div class="detail">
      <div class="box-detail">
        <div class="flex-comp">
          <img
            v-if="data.airlanes === 'Garuda'"
            src="../../../assets/icon/garuda.png"
            class="mr-3 img-fit"
          />
          <img
            v-else-if="data.airlanes === 'Lion Air'"
            src="../../../assets/icon/lion air.png"
            class="mr-3 img-fit"
          />
          <img
            v-else-if="data.airlanes === 'Sriwijaya'"
            src="../../../assets/icon/sriwijaya.png"
            class="mr-4 img-fit"
          />
          <img
            v-else-if="data.airlanes === 'Batik Air'"
            src="../../../assets/icon/batik air.png"
            class="mr-3 img-fit"
          />
          <img
            v-else-if="data.airlanes === 'Citilink'"
            src="../../../assets/icon/citilink.png"
            class="mr-3 img-fit"
          />
          <img v-else src="../../../assets/icon/air asia.png" class="mr-4" />

          <h5 class="grey">
            {{ data.airlanes }}
          </h5>
        </div>
        <br />
        <h4 class="flex-comp mb-3">
          {{ data.takeOff }}
          <span
            ><img src="../../../assets/myBooking/airplaneIcon.png" alt=""
          /></span>
          {{ data.landing }}
        </h4>
        <div class="flex-comp grey">
          <div class="mr-3">{{ formatTime(data.date) }}</div>
          <li></li>
          <div>
            {{ data.takeOffTime.slice(11, 16) }} -
            {{ data.landingTime.slice(11, 16) }}
          </div>
        </div>
        <br />
        <hr />
        <div class="flex-comp2">
          <h5>Total Payment</h5>
          <h5 class="blue">Rp. {{ data.price }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  computed: {
    ...mapGetters({ data: 'getDataScheduleById' })
  },
  methods: {
    formatTime(value) {
      moment.locale('en')
      return moment(String(value)).format('dddd, D MMMM YYYY')
    }
  }
}
</script>
<style scoped>
.flex-comp {
  display: flex;
  align-items: center;
}
.flex-comp2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
span {
  margin: 0 15px;
}
.grey {
  color: #979797;
}
.box-detail {
  background: white;
  width: 100%;
  border-radius: 15px;
  padding: 30px;
}
.detail {
  padding: 82px 0;
}
.blue {
  color: #2395ff;
}
.img-fit {
  height: 70px;
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
