<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container>
        <div class="profile">
          <h2>Post Flight Schedule</h2>
          <hr />
          <RightPostSchedule />
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import RightPostSchedule from '../../components/_base/Post Schedule Component/RightPostScheduleFormComponent'
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
export default {
  name: 'PostSchedule',
  components: {
    Navbar,
    Footer,
    RightPostSchedule
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
.main {
  font-family: 'Poppins', sans-serif;
  background-color: whitesmoke;
  padding: 30px 0;
}
.profile {
  padding: 30px;
  background-color: white;
  border-radius: 20px;
}

label {
  color: #0f7fe9;
  margin-bottom: 0px;
  margin-top: 20px;
}
input[type='text'],
input[type='date'],
input[type='number'],
input[type='datetime-local'],
select {
  width: 250px;
  border: none;
  border-bottom: 1px solid gray;
  -webkit-appearance: none;
}
input[type='text']:focus,
input[type='date']:focus,
input[type='number']:focus,
input[type='datetime-local']:focus,
select:focus {
  outline: none;
  border-bottom: 2px solid #2395ff;
}
.schedule {
  background: #f5f6fa;
  height: 950px;
}
.post-schedule {
  height: 200px;
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
@media only screen and (max-width: 533px) {
  .schedule {
    height: 1500px;
  }
}
</style>
