<template>
  <div>
    <div class="chat">
      <Navbar />
      <div class="bg-image">
        <b-container class="chat-list">
          <Chat />
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Chat from '../../components/_base/Chat Component/MainListChatComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
export default {
  name: 'ListChat',
  components: {
    Chat,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.bg-image {
  height: 360px;
  width: 100%;
  margin: 0 auto;
  background: #2395ff;
  background-image: url('../../assets/chatImg/vector 02.png');
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 200px;
  padding: 50px;
  border-radius: 0 0 30px 30px;
}
</style>
