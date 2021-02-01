<template>
  <div>
    <b-row>
      <b-col md="12" align-h="center">
        <div class="box">
          <div class="nav">
            <b-media>
              <template #aside>
                <img
                  style="width:50px; border-radius:10px"
                  src="../../../assets/chatImg/profile1.jpg"
                  alt=""
                />
              </template>

              <h6 class="mb-1">Hipster</h6>
              <small>Online</small>
            </b-media>
          </div>
          <div class="chats">
            <div v-for="(items, index) in chat" :key="index" class="chat_list">
              <b-row
                v-if="
                  items.user_id_from === user.user_id &&
                    items.user_id_to !== user.user_id
                "
                align-h="end"
                align-v="center"
                style="margin-bottom:20px"
              >
                <b-col cols="2" sm="2" xs="3" order="5"
                  ><img
                    style="width:40px; border-radius:50%"
                    src="../../../assets/chatImg/profile1.jpg"
                    alt="Avatar"
                    class="right"
                /></b-col>
                <b-col cols="9" sm="6" xs="9"
                  ><div class="chat-styling-a">
                    <p>
                      {{ items.chat_content }}
                    </p>
                    <span style="color:#ccc;font-size:12px">{{
                      formatTime(items.chat_created_at)
                    }}</span>
                  </div>
                </b-col>
              </b-row>
              <b-row
                v-if="items.user_id_from !== user.user_id"
                align-h="start"
                align-v="center"
                style="margin-bottom:20px"
              >
                <b-col cols="2" sm="2" xs="3" order="0"
                  ><img
                    style="width:40px; border-radius:50%"
                    src="../../../assets/chatImg/profile1.jpg"
                    alt="Avatar"
                    class="right"
                /></b-col>
                <b-col cols="9" sm="6" xs="9"
                  ><div class="chat-styling-b">
                    <p>
                      {{ items.chat_content }}
                    </p>
                    <span style="color:#ccc;font-size:12px;">{{
                      formatTime(items.chat_created_at)
                    }}</span>
                  </div></b-col
                >
              </b-row>
            </div>
          </div>
          <div class="input">
            <b-row align-v="center" align-h="center">
              <b-col cols="1"><i class="fa fa-smile-o fa-lg"></i></b-col>
              <b-col cols="8" style="width: 100%"
                ><b-form-input
                  id="input-2"
                  v-model="message"
                  autocomplete="off"
                  placeholder="Write your message"
                  required
                  @keydown.enter.prevent="sendMessage"
                ></b-form-input
              ></b-col>
              <b-col cols="1"><i class="fa fa-microphone fa-lg"></i></b-col>
              <b-col cols="1"><i class="fa fa-send fa-lg"></i></b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'
import moment from 'moment'
export default {
  data() {
    return {
      isMe: 1,
      socket: io('http://localhost:3000'),
      message: ''
    }
  },
  computed: {
    ...mapGetters({ chat: 'getChat', user: 'getUser', roomChat: 'displayData' })
  },
  created() {
     console.log('Open Message');
  },
  methods: {
    ...mapActions(['postChat']),
    ...mapMutations(['setSocketchat']),
    formatTime(value) {
      moment.locale('ID')
      return moment(String(value)).format('LT')
    },
    sendMessage() {
      const setDataToDatabase = {
        room: this.roomChat.room_chat,
        data: {
          user_id_to: this.roomChat.user_id,
          chat_content: this.message
        }
      }
      const setDataToSocket = {
        room_chat: this.roomChat.room_chat,
        user_id_to: this.roomChat.user_id,
        user_id_from: this.user.user_id,
        chat_content: this.message,
        chat_created_at: new Date()
      }
      this.socket.emit('roomMessage', setDataToSocket)
      this.postChat(setDataToDatabase)
      this.message = ''
    }
  } 
}
</script>

<style scoped>
.fa {
  color: white;
  cursor: pointer;
}
.chat-styling-a {
  position: relative;
  background: #2395ff;
  border-radius: 0.4em;
  color: white;
  padding: 10px;
  word-break: break-all;
}
.chat-styling-a:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #2395ff;
  border-right: 0;
  border-top: 0;
  margin-top: -10px;
  margin-right: -20px;
}
.chat-styling-b {
  position: relative;
  background: rgb(226, 226, 226);
  border-radius: 0.4em;
  padding: 10px;
  word-break: break-all;
}
.chat-styling-b:after {
  content: '';
  position: absolute;
  left: 5px;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: rgb(226, 226, 226);
  border-left: 0;
  border-top: 0;
  margin-top: -10px;
  margin-left: -20px;
}
.nav {
  height: 70px;
  width: 100%;
  background: #2395ff;
  opacity: 0.7;
  border-radius: 15px 15px 0 0;
  padding: 10px;
}
.input {
  height: 40px;
  width: 100%;
  background: #2395ff;
  opacity: 0.7;
  border-radius: 0 0 15px 15px;
  padding-top: 1px;
}
.chats {
  padding: 10px 30px;
  height: 340px;
  overflow: auto;
}
.box {
  width: 90%;
  height: 450px;
  background-color: white;
  position: absolute;
  right: 0px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
}
@media only screen and (max-width: 576px) {
  .chats {
    padding: 10px 5px;
  }
}
</style>
