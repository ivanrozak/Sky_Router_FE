<template>
  <main>
    <b-container class="search-flight flex-comp">
      <div class="flex-comp">
        <img
          src="../../../assets/icon/logo sky-router white.png"
          class="mr-2 sm-hide"
        />
        <div class="search-comp">
          <div class="flex-comp mb-2">
            <small>From</small>
            <small>To</small>
          </div>
          <div class="flex-comp mb-2">
            <div class="mdm">{{ params.takeOff }}</div>
            <img src="../../../assets/icon/change.png" class="ml-2 mr-2" />
            <div class="mdm">{{ params.landing }}</div>
          </div>

          <div class="flex-comp flex-bot">
            <div v-if="params.date" class="sml mr-2">
              {{ formatTime(params.date) }}
            </div>
            <div v-if="params.totalAdult && params.totalChild" class="sml mr-2">
              <li>
                {{ parseInt(params.totalAdult) + parseInt(params.totalChild) }}
                Passenger
              </li>
            </div>
            <div
              v-if="params.totalAdult && !params.totalChild"
              class="sml mr-2"
            >
              <li>
                {{ parseInt(params.totalAdult) }}
                Passenger
              </li>
            </div>
            <div v-if="params.class" class="sml">
              <li>{{ params.class }}</li>
            </div>
          </div>
        </div>
      </div>
      <div>
        <router-link class="right-top" to="/">Change search</router-link>
      </div>
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
.right-top {
  color: white;
}
.search-comp {
  min-width: 250px;
}

@media (max-width: 768px) {
  .right-top {
    display: none;
  }
  .flex-bot {
    flex-direction: column;
  }
  .sm-hide {
    display: none;
  }
  .search-comp {
    min-width: 320px;
  }
  main {
    padding: 20px 0px;
  }
}
</style>
