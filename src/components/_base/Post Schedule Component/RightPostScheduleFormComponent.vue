<template>
  <div>
    <b-row class="profile">
      <b-col sm="12" md="6" lg="6">
        <label>Airlane</label>
        <b-form-select
          v-model="form.airlanes"
          :options="airlane"
        ></b-form-select>
        <label>Departure Time:</label>
        <input type="datetime-local" v-model="form.takeOffTime" />
        <label>Departure City</label>
        <b-form-select v-model="form.takeOff" :options="city"></b-form-select>
        <label>Departure Airport</label>
        <b-form-select
          v-model="form.takeOffAirport"
          :options="airport"
        ></b-form-select>
        <label>Arrived Time:</label>
        <input
          @change="getDuration()"
          type="datetime-local"
          v-model="form.landingTime"
        />
        <label>Arrived City</label>
        <b-form-select v-model="form.landing" :options="city"></b-form-select>
        <label>Arrived Airport</label>
        <b-form-select
          v-model="form.landingAirport"
          :options="airport"
        ></b-form-select>
      </b-col>
      <b-col sm="12" md="6" lg="6">
        <label>Date</label>
        <input type="date" v-model="form.date" />
        <label>Duration</label>
        <b-form-input
          type="text"
          v-model="form.Duration"
          placeholder=" Duration will set automatically after you set arrived time"
          disabled
        ></b-form-input>
        <label>Class</label>
        <b-form-select
          v-model="form.airplanesClass"
          :options="airplane"
        ></b-form-select>
        <label>Price</label>
        <b-form-input
          type="number"
          placeholder=" Please input the price"
          v-model="form.price"
        ></b-form-input>
        <label>Facilities</label>
        <div class="flex-comp mt-2 mb-2">
          <b-form-checkbox
            class="mr-3"
            v-model="form.luggage"
            value="1"
            unchecked-value="0"
          >
            Luggage
          </b-form-checkbox>
          <b-form-checkbox
            class="mr-3"
            v-model="form.inflightMeal"
            value="1"
            unchecked-value="0"
          >
            Inflight Meal
          </b-form-checkbox>
          <b-form-checkbox v-model="form.wifi" value="1" unchecked-value="0">
            Wifi
          </b-form-checkbox>
        </div>
        <label>Detail Flight</label>
        <div class="flex-comp mt-1 mb-2">
          <b-form-checkbox
            class="mr-3"
            v-model="form.refun"
            value="1"
            unchecked-value="0"
          >
            Refund
          </b-form-checkbox>
          <b-form-checkbox
            v-model="form.reschedule"
            value="1"
            unchecked-value="0"
          >
            Reschedule
          </b-form-checkbox>
        </div>
        <label>Route Type</label>
        <div class="flex-comp mt-1 mb-5">
          <b-form-checkbox
            class="mr-3"
            v-model="form.direct"
            value="1"
            unchecked-value="0"
          >
            Direct
          </b-form-checkbox>
          <b-form-checkbox
            class="mr-3"
            v-model="form.transit"
            value="1"
            unchecked-value="0"
          >
            Transit
          </b-form-checkbox>
          <b-form-checkbox
            v-model="form.transit"
            value="2x"
            unchecked-value="0"
          >
            Transit 2x
          </b-form-checkbox>
        </div>
        <button class="btn btn-primary w-100" @click.prevent="postData()">
          Post Schedule
        </button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import Alert from '../../../mixins/Alert'
export default {
  mixins: [Alert],
  data() {
    return {
      form: {
        airlanes: '',
        date: null,
        takeOff: '',
        takeOffAirport: '',
        takeOffTime: null,
        landing: '',
        landingAirport: '',
        landingTime: null,
        Duration: '',
        luggage: 0,
        inflightMeal: 0,
        wifi: 0,
        direct: 0,
        transit: 0,
        airplanesClass: '',
        refun: 0,
        reschedule: 0,
        price: ''
      },
      airplane: [
        { value: '', text: 'Please select an option' },
        { value: 'economy', text: 'Economy' },
        { value: 'First Class', text: 'First Class' },
        { value: 'Business', text: 'Business' }
      ],
      airlane: [
        { value: '', text: 'Please select an option' },
        { value: 'Lion Air', text: 'Lion Air' },
        { value: 'Batik Air', text: 'Batik Air' },
        { value: 'Sriwijaya', text: 'Sriwijaya' },
        { value: 'Garuda', text: 'Garuda' },
        { value: 'Citilink', text: 'First Class' },
        { value: 'Air Asia', text: 'Air Asia' }
      ],
      city: [
        { value: '', text: 'Please select an option' },
        { value: 'Jakarta', text: 'Jakarta' },
        { value: 'Yogyakarta', text: 'Yogyakarta' },
        { value: 'Semarang, Jawa Tengah', text: 'Semarang' },
        { value: 'Kabupaten Biak Numfor, Papua', text: 'Papua' }
      ],
      airport: [
        { value: '', text: 'Please select an option' },
        {
          value: 'Bandara Soekarno Hatta (CGK)',
          text: 'Bandara Soekarno Hatta (CGK)'
        },
        {
          value: 'Bandara Internasional Yogyakarta (YIA)',
          text: 'Bandara Internasional Yogyakarta (YIA)'
        },
        { value: 'Bandara Ahmad Yani (SRG)', text: 'Bandara Ahmad Yani (SRG)' },
        {
          value: 'Bandara Frans Kaisiepo (BIK)',
          text: 'Bandara Frans Kaisiepo (BIK)'
        }
      ]
    }
  },
  methods: {
    postData() {
      axios
        .post(`${process.env.VUE_APP_URL}schedule`, this.form)
        .then(() => {
          this.AlertSucces('Yeay, your schedule has been posted')
        })
        .catch(err => {
          this.AlertError(err)
        })
    },
    getDuration() {
      if (this.form.takeOffTime && this.form.landingTime) {
        const timeStart = moment(this.form.takeOffTime.slice(11), 'HH:mm')
        const endTime = moment(this.form.landingTime.slice(11), 'HH:mm')
        const duration = moment.duration(endTime.diff(timeStart))
        const hours = parseInt(duration.asHours())
        const minutes = parseInt(duration.asMinutes()) % 60
        this.form.Duration = hours + ' hour and ' + minutes + ' minutes'
      }
    }
  }
}
</script>
<style scoped>
.btn {
  background: #2395ff;
  width: 120px;
}
label {
  color: rgb(131, 131, 131);
  padding-left: 13px;
  margin-top: 20px;
}
input {
  width: 100%;
  padding: 5px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
}
.flex-comp {
  display: flex;
}
</style>
