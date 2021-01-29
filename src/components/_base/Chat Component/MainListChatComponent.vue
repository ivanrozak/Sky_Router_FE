<template>
  <div>
    <b-row>
      <b-col md="12" align-h="center">
        <div class="box">
          <p class="font-chat">CHAT</p>
          <b-row align-v="end" align-h="between">
            <b-col><p class="font-style-chat">Chat</p></b-col>
            <b-col><p class="font-style-filter">Filter</p></b-col>
          </b-row>

          <div class="chat-list-style">
            <b-list-group>
              <b-list-group-item
                v-for="(item, index) in chats"
                :key="index"
                @click="getDataRoom(item.room_chat)"
                active
                class="flex-column align-items-start"
                style="cursor:pointer;"
              >
                <div class="d-flex w-100 justify-content-between">
                  <b-media>
                    <template #aside>
                      <img
                        style="width:60px; border-radius:10px"
                        :src="
                          item.user_image == ''
                            ? require('../../../assets/chatImg/profile1.jpg')
                            : config + item.user_image
                        "
                        alt=""
                      />
                    </template>

                    <h5 class="mb-1">{{ item.user_name }}</h5>
                    <small>{{ item.chat_content }}</small>
                  </b-media>

                  <small style="text-align: right">1 days ago</small>
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dotenv from 'dotenv'
dotenv.config()
export default {
  name: 'MailListChatComponent',
  computed: {
    ...mapGetters({ chats: 'getListChats' })
  },
  data() {
    return {
      config: ''
    }
  },
  created() {
    this.config = process.env.VUE_APP_URL
  },
  methods: {
    getDataRoom(room) {
      console.log(room)
    }
  }
}
</script>

<style scoped>
.font-chat {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.3em;
  color: #2395ff;
}
.font-style-chat {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.font-style-filter {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
}
.box {
  width: 100%;
  height: 450px;
  background-color: white;
  position: absolute;

  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  padding: 10px 20px;
}
.chat-list-style {
  height: 300px;
  overflow: auto;
}
</style>
