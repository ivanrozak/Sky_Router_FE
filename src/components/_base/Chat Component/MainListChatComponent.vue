<template>
  <div>
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
                  href="#"
                  active
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <b-media>
                      <template #aside>
                        <img
                          style="width:60px; border-radius:10px"
                          src="../../../assets/chatImg/profile1.jpg"
                          alt=""
                        />
                      </template>

                      <h5 class="mb-1">Hipster</h5>
                      <small>Donec id elit non mi porta.</small>
                    </b-media>

                    <small style="text-align: right">1 days ago</small>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  active
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <b-media>
                      <template #aside>
                        <img
                          style="width:60px; border-radius:10px"
                          src="../../../assets/chatImg/profile1.jpg"
                          alt=""
                        />
                      </template>

                      <h5 class="mb-1">Hustler</h5>
                      <small>Donec id elit non mi porta.</small>
                    </b-media>

                    <small style="text-align: right">3 days ago</small>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

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
  width: 60%;
  height: 450px;
  background-color: white;
  position: absolute;
  left: 200px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  padding: 30px 50px;
}
.chat-list-style {
  height: 300px;
  overflow: auto;
}
</style>
