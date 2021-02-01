<template>
  <div>
    <Navbar />
    <div class="schedule">
      <div class="post-schedule">
        <b-container>
          <b-card class="border-0 shadow bg-white">
            <form action="#" @submit.prevent="postData">
              <b-row>
                <b-col lg="6" sm="12" class="text-center">
                  <label for="airlanes">Airlane :</label><br />
                  <select name="airlanes" id="airlanes" v-model="form.airlanes">
                    <option value="">Select Airlane</option>
                    <option value="Lion Air">Lion Air</option>
                    <option value="Batik Air">Batik Air</option>
                    <option value="Sriwijaya">Sriwijaya</option>
                    <option value="Garuda">Garuda</option>
                    <option value="Citilink">Citilink</option>
                    <option value="Air Asia">Air Asia</option>
                  </select>
                  <br />
                  <label for="takeOff">Departure Time:</label><br />
                  <input
                    type="datetime-local"
                    id="takeOff"
                    name="takeOff"
                    v-model="form.takeOffTime"
                  />
                  <br />
                  <label for="cityTakeOff">Departure City :</label><br />
                  <select
                    name="cityTakeOff"
                    id="cityTakeOff"
                    v-model="form.takeOff"
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Semarang, Jawa Tengah"
                      >Semarang, Jawa Tengah</option
                    >
                    <option value="Kabupaten Biak Numfor, Papua"
                      >Kabupaten Biak Numfor, Papua</option
                    >
                  </select>
                  <br />
                  <label for="airportTakeOff">Departure Airport :</label><br />
                  <select
                    name="airportTakeOff"
                    id="airportTakeOff"
                    v-model="form.takeOffAirport"
                  >
                    <option value="Bandara Soekarno Hatta (CGK)"
                      >Bandara Soekarno Hatta (CGK)</option
                    >
                    <option value="Bandara Internasional Yogyakarta (YIA)"
                      >Bandara Internasional Yogyakarta (YIA)</option
                    >
                    <option value="Bandara Ahmad Yani (SRG)"
                      >Bandara Ahmad Yani (SRG)</option
                    >
                    <option value="Bandara Frans Kaisiepo (BIK)"
                      >Bandara Frans Kaisiepo (BIK)</option
                    >
                  </select>
                  <br />
                  <label for="landing">Arrived Time:</label><br />
                  <input
                    type="datetime-local"
                    id="landing"
                    name="landing"
                    v-model="form.landingTime"
                  />
                  <br />
                  <label for="citylanding">Arrived City :</label><br />
                  <select
                    name="citylanding"
                    id="citylanding"
                    v-model="form.landing"
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Semarang, Jawa Tengah"
                      >Semarang, Jawa Tengah</option
                    >
                    <option value="Kabupaten Biak Numfor, Papua"
                      >Kabupaten Biak Numfor, Papua</option
                    >
                  </select>
                  <br />
                  <label for="airportlanding">Arrived Airport :</label><br />
                  <select
                    name="airportlanding"
                    id="airportlanding"
                    v-model="form.landingAirport"
                  >
                    <option value="Bandara Soekarno Hatta (CGK)"
                      >Bandara Soekarno Hatta (CGK)</option
                    >
                    <option value="Bandara Internasional Yogyakarta (YIA)"
                      >Bandara Internasional Yogyakarta (YIA)</option
                    >
                    <option value="Bandara Ahmad Yani (SRG)"
                      >Bandara Ahmad Yani (SRG)</option
                    >
                    <option value="Bandara Frans Kaisiepo (BIK)"
                      >Bandara Frans Kaisiepo (BIK)</option
                    >
                  </select>
                </b-col>
                <b-col lg="6" sm="12">
                  <label for="duration">Duration :</label><br />
                  <input type="text" name="duration" v-model="form.duration" />
                  <br />
                  <label for="classes">Airplane Class :</label><br />
                  <select
                    name="classes"
                    id="classes"
                    v-model="form.airplanesClass"
                  >
                    <option value="economy">economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                  </select>
                  <br />
                  <label for="price">Price </label><br />
                  <input
                    type="number"
                    name="price"
                    v-model="form.price"
                  /><br />
                  <h5 class="text-secondary mt-4 mb-0">Facilities</h5>
                  <label for="luggage">Luggage </label>
                  <input
                    type="checkbox"
                    name="luggage"
                    id="luggage"
                    class="ml-1"
                    v-model="form.luggage"
                  />
                  <span class="mx-2"></span>
                  <label for="inflightMeal">Inflight-Meal </label>
                  <input
                    type="checkbox"
                    name="inflightMeal"
                    id="inflightMeal"
                    class="ml-1"
                    v-model="form.inflightMeal"
                  />
                  <span class="mx-2"></span>
                  <label for="refun">Can Refun </label>
                  <input
                    type="checkbox"
                    name="refun"
                    id="refun"
                    class="ml-1"
                    v-model="form.refun"
                  />
                  <br />
                  <label for="reschedule">Reschedule </label>
                  <input
                    type="checkbox"
                    name="reschedule"
                    id="reschedule"
                    class="ml-1"
                    v-model="form.reschedule"
                  />
                  <span class="mx-2"></span>
                  <label for="direct">Direct</label>
                  <input
                    type="checkbox"
                    name="direct"
                    id="direct"
                    class="ml-1"
                    v-model="form.direct"
                  />
                  <br />
                  <label for="transit">Choose a Transit :</label>
                  <select
                    name="transit"
                    id="transit"
                    class="ml-2"
                    v-model="form.transit"
                  >
                    <option value="1">1x</option>
                    <option value="2x">2x</option> </select
                  ><br />
                </b-col>

                <button type="submit" class="btn btn-primary w-25 ml-auto mx-3">
                  <h4 class="m-0">Post Schedule</h4>
                </button>
              </b-row>
            </form>
          </b-card>
        </b-container>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
export default {
  name: 'PostSchedule',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      form: {
        airlanes: '',
        date: '',
        takeOff: '',
        takeOffAirport: '',
        takeOffTime: '',
        landing: '',
        landingAirport: '',
        landingTime: '',
        Duration: '',
        luggage: 0,
        inflightMeal: 0,
        wifi: 0,
        direct: 0,
        transit: '',
        airplanesClass: '',
        refun: 0,
        reschedule: 0,
        price: null
      }
    }
  },
  methods: {
    postData() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/schedule', this.form)
        .then(() => {
          alert('yes')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
label {
  color: #0f7fe9;
  margin-bottom: 0px;
  margin-top: 20px;
}
input[type='text'],
input[type='number'],
input[type='datetime-local'],
select {
  width: 250px;
  border: none;
  border-bottom: 1px solid gray;
  -webkit-appearance: none;
}
input[type='text']:focus,
input[type='number']:focus,
input[type='datetime-local']:focus,
select:focus {
  outline: none;
  border-bottom: 2px solid #2395ff;
}
.schedule {
  background: #f5f6fa;
  height: 950px;
}
.post-schedule {
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
@media only screen and (max-width: 533px) {
  .schedule {
    height: 1500px;
  }
}
</style>
