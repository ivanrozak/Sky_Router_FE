<template>
  <div>
    <div class="chat">
      <Navbar />
      <div class="bg-image">
        <b-container class="chat-list">
          <b-row align-h="center">
            <b-col sm="12" md="8" lg="7">
              <ChatRoom />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import ChatRoom from '../../components/_base/Chat Component/MainRoomChatComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import { mapActions } from 'vuex'
export default {
  name: 'ListChat',
  components: {
    ChatRoom,
    Navbar,
    Footer
  },
  created() {
    this.getListChat()
  },
  methods: {
    ...mapActions(['getListChat'])
  }
}
</script>

<style scoped>
.bg-image {
  height: 350px;
  width: 100%;
  margin: 0 auto;
  background: #2395ff;
  background-image: url('../../assets/chatImg/vector 02.png');
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 200px;
  padding: 50px 0;
  border-radius: 0 0 30px 30px;
}
</style>
