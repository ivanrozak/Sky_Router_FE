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
            <b-row align-h="end" align-v="center" style="margin-bottom:20px">
              <b-col cols="1" order="5"
                ><img
                  style="width:40px; border-radius:50%"
                  src="../../../assets/chatImg/profile1.jpg"
                  alt="Avatar"
                  class="right"
              /></b-col>
              <b-col cols="5"
                ><div class="chat-styling-a">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    consequuntur ipsum, et nisi similique fuga aliquid magnam.
                    Error, atque doloribus culpa delectus, magni molestiae
                    pariatur quas veniam omnis voluptate officia?
                  </p>
                  <span style="color:#ccc;font-size:12px">10:15</span>
                </div></b-col
              >
            </b-row>

            <b-row align-h="start" align-v="center" style="margin-bottom:20px">
              <b-col cols="1" order="0"
                ><img
                  style="width:40px; border-radius:50%"
                  src="../../../assets/chatImg/profile1.jpg"
                  alt="Avatar"
                  class="right"
              /></b-col>
              <b-col cols="5"
                ><div class="chat-styling-b">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    consequuntur ipsum, et nisi similique fuga aliquid magnam.
                    Error, atque doloribus culpa delectus, magni molestiae
                    pariatur quas veniam omnis voluptate officia?
                  </p>
                  <span style="color:#ccc;font-size:12px;">10:15</span>
                </div></b-col
              >
            </b-row>
          </div>
          <div class="input"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
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
  margin-left: 5px;
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
</style>
