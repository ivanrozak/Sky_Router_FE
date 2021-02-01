<template>
  <div>
    <Navbar />
    <div class="schedule">
      <div class="post-schedule">
        <b-container>
          <b-row>
            <b-col>
              <div class="left">
                <h4>Add New Flight Schedule</h4>
                <LeftForm />
              </div>
            </b-col>
            <b-col>
              <div class="right">
                <RightForm />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import LeftForm from '../../components/_base/Post Schedule Component/LeftPostScheduleFormComponent'
import RightForm from '../../components/_base/Post Schedule Component/RightPostScheduleFormComponent'
export default {
  name: 'PostSchedule',
  components: {
    LeftForm,
    RightForm,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
h4 {
  color: white;
  margin-bottom: 15px;
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
