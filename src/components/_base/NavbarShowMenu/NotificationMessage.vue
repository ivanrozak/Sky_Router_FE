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
        v-for="(items, index) in chats"
        :key="index"
        style="cursor : pointer;"
        @click="roomGet(items)"
        class="d-flex mb-lg-3 align-items-center mt-2 pr-1"
      >
        <img
          class="image_friendProfile"
          :src="
            items.user_image
              ? `${config}${items.user_image}`
              : require('../../../assets/chatImg/profile1.jpg')
          "
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>{{ items.user_name }}</h2>
          <p class="mt-lg-2">{{ items.lastChat.chat_content }}</p>
        </div>
        <div class="desc_time ml-auto mr-lg-2">
          <h3>{{ formatTime(items.lastChat.chat_created_at) }}</h3>
          <span v-if="items.unreadmessage[0].total > 0" class="badge">{{
            items.unreadmessage[0].total
          }}</span>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
import moment from 'moment'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'
export default {
  name: 'Notif',
  data() {
    return {
      socket: io(process.env.VUE_APP_URL),
      config: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getListChat()
  },
  computed: {
    ...mapGetters({ chats: 'getListChats', oldRoom: 'setOldRoom' })
  },
  methods: {
    ...mapActions(['getChat', 'getListChat']),
    ...mapMutations(['setRoomDisplay', 'setRoom']),
    getDataRoom(room) {
      return room
    },
    formatTime(value) {
      moment.locale('ID')
      return moment(String(value)).format('LT')
    },
    roomGet(data) {
      /*  this.setRoom(data.room_chat) */
      // this.socket.emit('joinRoom', {
      //   room_chat: data.room_chat
      // })
      // this.setRoom(data.room_chat)
      const display = {
        user_name: data.user_name,
        user_image: data.user_image,
        user_id: data.user_id,
        room_chat: data.room_chat
      }
      this.setRoomDisplay(display)

      this.getChat(data.room_chat).then(() => {
        this.$router.push({
          name: 'ChatRoom',
          params: {
            room: data.room_chat
          }
        })
      })
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
