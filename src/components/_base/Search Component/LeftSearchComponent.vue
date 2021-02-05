<template>
  <main>
    <div class="top">
      <h5><strong>Filter</strong></h5>
      <h6 style="color: #2395ff">
        <small @click.prevent="resetFilter()"
          ><strong class="cursor">Reset</strong></small
        >
      </h6>
    </div>
    <div class="bottom">
      <b-button v-b-toggle.collapse-1
        ><strong>Transit</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-1">
        <div class="checkbox-group">
          <label>Direct</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.direct"
            value="1"
            unchecked-value="0"
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Transit</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.transit"
            value="1"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Transit 2+</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.transit"
            value="2x"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-2
        ><strong>Facilities</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-2">
        <div class="checkbox-group">
          <label>Luggage</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.luggage"
            value="1"
            unchecked-value="0"
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>In-Flight Meal</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.inflightMeal"
            value="1"
            unchecked-value="0"
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Wi-fi</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="form.wifi"
            value="1"
            unchecked-value="0"
          >
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-3
        ><strong>Departure Time</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-3">
        <div class="checkbox-group">
          <label>00.00 - 06.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="departure"
            value="T00:00:00 T06:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>06.00 - 12.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="departure"
            value="T06:00:00 T12:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>12.00 - 18.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="departure"
            value="T12:00:00 T18:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>18.00 - 24.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="departure"
            value="T18:00:00 T24:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-8
        ><strong>Time Arrived</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-8">
        <div class="checkbox-group">
          <label>00.00 - 06.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="arrive"
            value="T00:00:00 T06:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>06.00 - 12.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="arrive"
            value="T06:00:00 T12:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>12.00 - 18.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="arrive"
            value="T12:00:00 T18:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>18.00 - 24.00</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="arrive"
            value="T18:00:00 T24:00:00"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-7
        ><strong>Airlanes</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-7">
        <div class="checkbox-group">
          <label>Garuda</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.garuda"
            value="Garuda"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Lion Air</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.lionair"
            value="Lion Air"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Sriwijaya</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.sriwijaya"
            value="Sriwijaya"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Air Asia</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.airasia"
            value="Air Asia"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Citilink</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.citilink"
            value="Citilink"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Batik Air</label>
          <b-form-checkbox
            @change="filterData()"
            v-model="airlane.batikair"
            value="Batik Air"
            unchecked-value=""
          >
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-4
        ><strong>Ticket Price</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-4">
        <div style="padding: 0px 15px">
          <label for="range-2">Highest</label>
          <b-form-input
            @change="filterData()"
            id="range-2"
            v-model="form.price"
            type="range"
            min="0"
            max="1000"
            step="10"
          ></b-form-input>
          <div class="mt-2">Rp. {{ form.price }}</div>
        </div>
      </b-collapse>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      status: '',
      value: '2',
      form: {
        inflightMeal: '',
        wifi: '',
        luggage: '',
        direct: '',
        transit: '',
        price: ''
      },
      airlane: {
        garuda: '',
        sriwijaya: '',
        lionair: '',
        airasia: '',
        citilink: '',
        batikair: ''
      },
      departure: '',
      arrive: ''
    }
  },
  computed: {
    ...mapGetters({ params: 'getParams' })
  },
  methods: {
    ...mapMutations([
      'setInflightMeal',
      'setWifi',
      'setLuggage',
      'setDirect',
      'setTransit',
      'setAirlanes',
      'setDepartureStart',
      'setDepartureEnd',
      'setArrivedStart',
      'setArrivedEnd',
      'setPrice',
      'setSort'
    ]),
    ...mapActions(['getSchedules']),
    filterData() {
      this.setInflightMeal(this.form.inflightMeal)
      this.setWifi(this.form.wifi)
      this.setLuggage(this.form.luggage)
      this.setDirect(this.form.direct)
      this.setTransit(this.form.transit)
      if (this.airlane.garuda === '') {
        delete this.airlane.garuda
      }
      if (this.airlane.sriwijaya === '') {
        delete this.airlane.sriwijaya
      }
      if (this.airlane.lionair === '') {
        delete this.airlane.lionair
      }
      if (this.airlane.citilink === '') {
        delete this.airlane.citilink
      }
      if (this.airlane.airasia === '') {
        delete this.airlane.airasia
      }
      if (this.airlane.batikair === '') {
        delete this.airlane.batikair
      }
      const airlaneData = Object.values(this.airlane).join()
      this.setAirlanes(airlaneData)

      if (this.departure.length > 1) {
        const depstart = {
          date: this.params.date,
          departure: this.departure.slice(0, 9)
        }
        const depstarts = Object.values(depstart).join('')
        const depend = {
          date: this.params.date,
          departure: this.departure.slice(10, 19)
        }
        const depends = Object.values(depend).join('')
        this.setDepartureStart(depstarts)
        this.setDepartureEnd(depends)
      } else {
        const depstarts = ''
        this.setDepartureStart(depstarts)
        const depends = ''
        this.setDepartureEnd(depends)
      }
      if (this.arrive.length > 1) {
        const arrstart = {
          date: this.params.date,
          arrive: this.arrive.slice(0, 9)
        }
        const arrstarts = Object.values(arrstart).join('')

        this.setArrivedStart(arrstarts)
        const arrend = {
          date: this.params.date,
          arrive: this.arrive.slice(10, 19)
        }
        const arrends = Object.values(arrend).join('')
        this.setArrivedEnd(arrends)
      } else {
        const arrstarts = ''
        const arrends = ''
        this.setArrivedStart(arrstarts)
        this.setArrivedEnd(arrends)
      }
      this.setPrice(this.form.price)
      this.getSchedules()
        .then(result => {
          return result
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    resetFilter() {
      this.form.inflightMeal = ''
      this.form.wifi = ''
      this.form.luggage = ''
      this.form.direct = ''
      this.form.transit = ''
      this.form.price = ''
      this.departure = ''
      this.arrive = ''
      this.airlane.garuda = ''
      this.airlane.lionair = ''
      this.airlane.sriwijaya = ''
      this.airlane.airasia = ''
      this.airlane.citilink = ''
      this.airlane.batikair = ''
      this.setSort('')
      this.filterData()
    }
  }
}
</script>

<style scoped>
.top {
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  border-radius: 20px;
  background-color: white;
  padding: 30px 20px;
}
button {
  display: flex;
  background-color: white;
  border: none;
  width: 100%;
  color: black;
  text-align: left;
}
button:hover {
  background-color: white;
  border: none;
  width: 100%;
  color: black;
  text-align: left;
}
.apply {
  background-color: #2395ff;
  color: white;
  justify-content: center;
  margin-top: 20px;
}
.apply:hover {
  background-color: #148bfa;
  color: white;
}
.checkbox-group {
  display: flex;
  justify-content: space-between;
  padding: 5px 7px 0px 15px;
}
.cursor {
  cursor: pointer;
}
</style>
