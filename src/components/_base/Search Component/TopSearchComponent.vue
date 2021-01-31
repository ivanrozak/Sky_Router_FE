<template>
  <main>
    <b-container class="search-flight flex-comp">
      <div class="flex-comp">
        <img
          src="../../../assets/icon/logo sky-router white.png"
          class="mr-5"
        />
        <div class="search-comp">
          <div class="flex-comp mb-2">
            <small>From</small>
            <small>To</small>
          </div>
          <div class="flex-comp mb-2">
            <div class="mdm">{{ params.takeOff }}</div>
            <img src="../../../assets/icon/change.png" />
            <div class="mdm">{{ params.landing }}</div>
          </div>

          <div class="flex-comp">
            <div class="sml mr-2">{{ formatTime(params.date) }}</div>
            <div class="sml mr-2">
              <li>
                {{ parseInt(params.totalAdult) + parseInt(params.totalChild) }}
                Passenger
              </li>
            </div>
            <div class="sml">
              <li>{{ params.class }}</li>
            </div>
          </div>
        </div>
      </div>
      <div class="right-top">Change search</div>
    </b-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  computed: {
    ...mapGetters({ params: 'getParams' })
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
main {
  background-color: #2395ff;
  background-image: url('../../../assets/icon/logo sky-router.png');
  background-repeat: no-repeat;
  padding: 45px 0px;
  border-radius: 0px 0px 25px 25px;
}
.flex-comp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.mdm {
  font-size: 1.1em;
  font-weight: 500;
}
.sml {
  font-size: 0.7em;
  font-weight: lighter;
}
</style>
