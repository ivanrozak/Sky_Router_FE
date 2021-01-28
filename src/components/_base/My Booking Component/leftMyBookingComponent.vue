<template>
  <div>
    <b-container>
      <div class="profile-passenger">
        <div class="profile">
          <div class="profile-img-passenger">
            <img
              class="profile-img"
              style="border-radius:50%"
              src="../../../assets/myBooking/profile.png"
              alt="profile"
            />
          </div>
          <br />
          <b-button class="img-button">Select Photo</b-button>
        </div>
        <i class=""></i>
        <br />
        <h6>Mike Kowalski</h6>
        <p>Medan, Indonesia</p>

        <b-rows align-h="between">
          <b-col cols="6">cards</b-col>
          <b-col cols="6">+ add</b-col>
        </b-rows>

        <div class="card">
          <p>4441 1235 5512 5551</p>
          <b-row>
            <b-col></b-col>
          </b-row>
        </div>
      </div>
      <b-rows align-h="between">
        <b-col cols="6">cards</b-col>
        <b-col cols="6">+ add</b-col>
      </b-rows>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   image: false
    }
  },
  methods: {}
}
</script>

<style scoped>
.profile-passenger {
  /* height: 500px;
  width: 370px; */
  width: 370px;
  background-color: red;
  text-align: center;
}
.img-button {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2395ff;
}

.img-button:hover {
  color: #00b7df;
}

.profile-img {
  width: 110px;
  margin: auto;
}

div.profile-img-passenger {
  border-radius: 50%;
  background-color: white;
  border: 8px solid #2395ff;
  width: 137px;
  height: 137px;
  padding: auto;
  margin: auto;
}

div.profile {
  margin: auto;
}

.card {
  width: 80%;
  height: 70px;
  margin: auto;
  border-radius: 10px;
}
</style>
