<template>
  <b-card class="position-absolute notification">
    <h5>Chat</h5>
    <div class="title_notif d-flex align-items-center">
      <h2>
        Chat
      </h2>
      <a>Filter</a>
    </div>
    <div
      v-for="(items, index) in data"
      :key="index"
      class="scroll  mt-lg-3 pr-1"
    >
      <img class="image_friendProfile" alt="image_chatfriend" />
      <div class="ml-lg-3 name_tag mt-lg-3">
        <h2>Soham Henry</h2>
        <p class="mt-lg-2">Bro, just fuck off</p>
      </div>
      <div class="desc_time ml-auto mr-lg-2">
        <h3>17.00</h3>
        <span  class="badge">10</span>
      </div>
    </div>
  </b-card>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Notif',
  data() {
    return {
      data: 7
    }
  },
  methods: {
    formatTime(value) {
      moment.locale('ID')
      return moment(String(value)).format('LT')
    }
  }
}
</script>
<style scoped>
.notification {
  z-index: 2;
  width: 400px;
  right: -150px;
  top: 70px;
}
</style>
