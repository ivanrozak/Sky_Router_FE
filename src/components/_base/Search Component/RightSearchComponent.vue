<template>
  <main>
    <div class="top">
      <h5>
        <strong
          >Select Ticket<small> ({{ rows }} flight found)</small></strong
        >
      </h5>
      <b-dropdown right variant="none" class="m-md-2" no-caret
        ><template slot="button-content"
          ><strong
            >Sort By<b-icon icon="arrow-down-up" class="ml-2"></b-icon></strong
        ></template>
        <b-dropdown-item @click.prevent="sortLowest()"
          >Lowest Price</b-dropdown-item
        >
        <b-dropdown-item @click.prevent="sortHighest()"
          >Highest Price</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="box-group" v-for="(item, index) in flights" :key="index">
      <div class="box-logo">
        <img
          v-if="item.airlanes === 'Garuda'"
          src="../../../assets/icon/garuda.png"
          class="mr-4"
        />
        <img
          v-else-if="item.airlanes === 'Lion Air'"
          src="../../../assets/icon/lion air.png"
          class="mr-4"
        />
        <img
          v-else-if="item.airlanes === 'Sriwijaya'"
          src="../../../assets/icon/sriwijaya.png"
          class="mr-4"
        />
        <img
          v-else-if="item.airlanes === 'Batik Air'"
          src="../../../assets/icon/batik air.png"
          class="mr-4"
        />
        <img
          v-else-if="item.airlanes === 'Citilink'"
          src="../../../assets/icon/citilink.png"
          class="mr-4"
        />
        <img v-else src="../../../assets/icon/air asia.png" class="mr-4" />
        <div>{{ item.airlanes }} - {{ item.airplanesClass }}</div>
      </div>
      <b-row>
        <b-col sm="6" md="3" lg="3" class="plane">
          <div class="plane-from centered">
            <div v-if="item.takeOff === 'Jakarta'" class="text1">
              JKT
            </div>
            <div v-else-if="item.takeOff === 'Yogyakarta'" class="text1">
              YGKT
            </div>
            <div
              v-else-if="item.takeOff === 'Semarang, Jawa Tengah'"
              class="text1"
            >
              SMG
            </div>
            <div v-else class="text1">
              JYP
            </div>
            <small>{{ item.takeOffTime.slice(11, 16) }}</small>
          </div>
          <img src="../../../assets/icon/flight-to.png" class="mt-2" />
          <div class="plane-to  centered">
            <div v-if="item.landing === 'Jakarta'" class="text1">
              JKT
            </div>
            <div v-else-if="item.landing === 'Yogyakarta'" class="text1">
              YGKT
            </div>
            <div
              v-else-if="item.landing === 'Semarang, Jawa Tengah'"
              class="text1"
            >
              SMG
            </div>
            <div v-else class="text1">
              JYP
            </div>
            <small>{{ item.landingTime.slice(11, 16) }}</small>
          </div>
        </b-col>
        <b-col sm="6" md="9" lg="9" class="plane2">
          <div class="plane-time">
            <div class="hidden-sm">
              <small>{{ item.Duration }}</small>
            </div>
            <small v-if="item.direct === 1">(Direct)</small>
            <small v-if="item.transit === '1'">(1 Transit)</small>
            <small v-if="item.transit === '2x'">(2 Transit)</small>
          </div>
          <div class="plane-icon hidden-sm">
            <img
              v-if="item.luggage === 1"
              src="../../../assets/icon/trash.png"
            />
            <img
              v-if="item.inflightMeal === 1"
              src="../../../assets/icon/FnB.png"
            />
            <img v-if="item.wifi === 1" src="../../../assets/icon/wifi.png" />
          </div>
          <div class="plane-pricing">
            Rp. {{ item.price }} <small>/pax</small>
          </div>
          <b-button
            @click.prevent="selectSchedule(item.scheduleId)"
            class="btn-select"
            variant="primary"
            >Select</b-button
          >
        </b-col>
      </b-row>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="limit"
      @change="handlePageChange"
    ></b-pagination>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
    this.getData()
  },
  computed: {
    ...mapGetters({
      flights: 'dataSchedules',
      page: 'getPage',
      rows: 'getTotalRows',
      params: 'getParams',
      limit: 'getLimit'
    })
  },
  methods: {
    ...mapMutations(['changePage', 'setSort']),
    ...mapActions(['getSchedules', 'getScheduleById']),
    getData() {
      this.getSchedules()
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log(this.form)
          console.log(err)
        })
    },
    handlePageChange(numberPage) {
      this.changePage(numberPage)
      this.getSchedules()
    },
    selectSchedule(param) {
      this.getScheduleById(param)
        .then(result => {
          console.log(result)
          this.$router.push('/detailflight')
          // alert(result.data.message)
        })
        .catch(error => {
          // alert(error.data.message)
          console.log(error)
        })
    },
    sortLowest() {
      this.setSort('price')
      this.getData()
    },
    sortHighest() {
      this.setSort('price DESC')
      this.getData()
    }
  }
}
</script>

<style scoped>
.plane {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.plane2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.plane-time {
  text-align: center;
}
.plane-icon img {
  margin: 0px 5px;
}
.plane-pricing {
  font-size: 1.2em;
  font-weight: 500;
  color: #2395ff;
}
.plane-pricing small {
  color: #979797;
}
.btn-select {
  padding: 7px 30px;
  font-weight: 500;
}
.top {
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-main {
  padding: 10px 0px;
  display: flex;
}
.box-group {
  border-radius: 20px;
  background-color: white;
  padding: 30px 30px;
  margin-bottom: 20px;
}
.toogle-btn {
  display: flex;
  padding: 5px 0px;
  background-color: white;
  border: none;
  color: #2395ff;
  text-align: left;
}
.toogle-btn:hover {
  background-color: white;
  border: none;
  color: #2395ff;
}
.box-logo {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.text1 {
  font-size: 1.5em;
  font-weight: 500;
}
.centered {
  text-align: center;
}
.box-logo img {
  width: 120px;
}

@media (max-width: 768px) {
  .box-logo {
    display: none;
  }
  .hidden-sm {
    display: none;
  }
}
</style>
