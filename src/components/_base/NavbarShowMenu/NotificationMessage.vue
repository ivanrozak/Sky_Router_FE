<template>
  <b-card class="notification">
    <h5>CHAT</h5>
    <div class="title_notif d-flex align-items-center">
      <h2>
        Chat
      </h2>
      <a class="ml-auto">Filter</a>
    </div>
    <div class="chat_list mt-3">
      <div
        v-for="(items, index) in data"
        :key="index"
        class="d-flex mb-lg-3 align-items-center mt-2 pr-1"
      >
        <img
          class="image_friendProfile"
          src="https://images.unsplash.com/photo-1611493056239-9f15dfe79373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>Soham Henry</h2>
          <p class="mt-lg-2">Bro, just fuck off</p>
        </div>
        <div class="desc_time ml-auto mr-lg-2">
          <h3>17.00</h3>
          <span class="badge">10</span>
        </div>
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
.chat_list {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 550px;
}
.chat_list::-webkit-scrollbar {
  width: 5px;
}
.chat_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.chat_list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.notification {
  position: absolute;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  width: 500px;
  right: -144px;
  top: 78px;
}
.image_friendProfile {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.name_tag,
.desc_time {
  font-family: 'Poppins', sans-serif;
}
.name_tag h2 {
  margin-bottom: 0;
  font-weight: 700;
  font-size: 18px;
}
.name_tag p,
.desc_time h3 {
  font-size: 14px;
}
.name_tag p {
  color: #7e98df;
}
.desc_time h3 {
  color: #848484;
}
.badge {
  width: 25px;
  font-size: 10px;
  padding-top: 8px;
  padding-left: 4px;
  height: 25px;
  border-radius: 50%;
  background: #2395ff;
  color: white;
}
</style>
