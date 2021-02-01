<template>
  <b-card class="notification">
    <h5>NOTIFICATIONS</h5>
    <div class="title_notif d-flex align-items-center">
      <h2>
        Notifications
      </h2>
      <a class="ml-auto">Clear</a>
    </div>
    <div class="scroll mt-lg-3 pr-1">
      <b-card
        v-for="(items, index) in Notif"
        :key="index"
        class="notif_message mb-3"
      >
        <h5>{{ items.title }}</h5>
        <p>
          {{ items.text }}
        </p>
        <p class="mt-lg-3">
          <timeago
            :datetime="items.createdAt"
            locale="id"
            :auto-update="60"
          ></timeago>
        
        </p>
      </b-card>
    </div>
  </b-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'Notif',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ Notif: 'getNotification', Id: 'getUser' })
  },
  created() {
    this.getNotif(this.Id.user_id)
  },
  methods: {
    ...mapActions(['getNotif']),
    formatTime(value) {
      moment.locale('ID')
      return moment(String(value)).format('LT')
    }
  }
}
</script>
<style scoped>
.notification h5 {
  font-size: 14px;
  letter-spacing: 5px;
  color: #2395ff;
}
.title_notif h2 {
  font-weight: 600;
  font-size: 24px;
}
.title_notif a {
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}
.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 550px;
}
.scroll::-webkit-scrollbar {
  width: 5px;
}
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.notif_message {
  border: 2px solid #3d9bf3;
  border-radius: 10px;
  background: #f7fbff;
}
.notif_message p {
  margin-bottom: 0;
  font-size: 14px;
}
.notif_message h5 {
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0;
}
.notification {
  position: absolute;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  width: 500px;
  right: -200px;
  top: 70px;
}
</style>
