<template>
  <div class="HomePage">
    <header>
      <Navbar />
    </header>
    <main class="bg_landingPage mt-lg-4">
      <b-container>
        <b-row>
          <b-col lg="6">
            <div class="title_landing mt-lg-5 pt-lg-5">
              <h1>Find your <span>Flight</span></h1>
              <p class="mt-lg-3">and explore the world with us</p>
            </div>
          </b-col>
          <b-col lg="6">
            <b-card class="card_ticket mt-lg-5">
              <b-card-body>
                <div class="title_card">
                  <h5>Hey,</h5>
                  <h4>Where you want to go?</h4>
                  <a class="d-flex mb-lg-4"
                    >Recently Searched
                    <img
                      class="image_icons"
                      src="../../assets/Images/Logo/btnback.jpg"
                      alt="icons_back"
                    />
                  </a>
                </div>
                <b-card class="mb-lg-4 flight_choose">
                  <div
                    class="d-flex justify-content-between card_searchLocation"
                  >
                    <section class="from">
                      <h5>From</h5>
                      <h3>Medan</h3>
                      <p>Indonesia</p>
                    </section>
                    <section class="image_iconsSwith">
                      <img
                        class="image_size"
                        src="../../assets/Images/Logo/swithIcons.jpg"
                        alt="icons_image"
                      />
                    </section>
                    <section class="to">
                      <h5>To</h5>
                      <h3>Tokyo</h3>
                      <p>Japan</p>
                    </section>
                  </div>
                </b-card>
                <div class="btn_card mb-lg-4">
                  <b-row>
                    <b-col cols="6">
                      <button class="btn_oneWay py-lg-3">
                        <img
                          class="mr-2"
                          src="../../assets/Images/Logo/icons_plane.png"
                          alt="icons_plane"
                        />
                        One way
                      </button>
                    </b-col>
                    <b-col cols="6">
                      <button class="btn_round py-lg-3">
                        <img
                          class="mr-2"
                          src="../../assets/Images/Logo/icns_rollback.png"
                          alt="icons_rolls"
                        />
                        Round trip
                      </button>
                    </b-col>
                  </b-row>
                </div>
                <div class="departure">
                  <h5 class="mb-lg-3">Departure</h5>
                  <b-form-datepicker
                    id="datepicker-buttons"
                    class="mb-lg-4"
                    today-button
                    reset-button
                    close-button
                    locale="en"
                  ></b-form-datepicker>
                </div>
                <div class="input_selected">
                  <h5 class="mb-lg-3">How many person?</h5>
                  <b-row class="mb-lg-4">
                    <b-col cols="6">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-col>
                    <b-col cols="6">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-col>
                  </b-row>
                </div>
                <div class="choose_class">
                  <h5 class="mb-lg-3">Which class do you want?</h5>
                  <b-form-radio-group
                    v-model="selected"
                    :options="options"
                    class="mb-lg-5 d-flex radio_style ml-lg-2 justify-content-between"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </div>
                <button class="btn_search pl-lg-5 py-lg-3">
                  SEARCH FLIGHT
                </button>
              </b-card-body>
            </b-card>
            <div class="position-absolute bg_card">
              <img src="../../assets/Images/Logo/backroud_card.png" alt="" />
            </div>
          </b-col>
          <b-col lg="12" class="mt-lg-5 pt-lg-5">
            <div class="mt-lg-5 pt-lg-5 corousel_card mb-lg-5">
              <h5>TRENDING</h5>
              <div class="title_desti d-flex align-items-center ">
                <h2>Trending destinations</h2>
                <a class="ml-auto mr-lg-4">View all</a>
              </div>
              <corouseDesti />
            </div>
          </b-col>
          <b-col lg="12">
            <div class="corousel_cardTopDesti mb-lg-5">
              <div class="title_topDesti text-center pt-lg-5">
                <h5>TOP 10</h5>
                <h4>Top 10 destinations</h4>
              </div>
              <topDesti />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer class="mt-lg-5"/>
  </div>
</template>
<script>
import Navbar from '../../components/naviationBar'
import Footer from '../../components/footer'
import topDesti from '../../components/_base/Landing Page Component/corousel_topDestionation'
import corouseDesti from '../../components/_base/Landing Page Component/corousel_destnation'
export default {
  name: 'landingPage',
  components: {
    Navbar,
    Footer,
    corouseDesti,
    topDesti
  },
  data() {
    return {
      selected: 'economy',
      options: [
        { item: 'economy', name: 'Economy' },
        { item: 'business', name: 'Business' },
        { item: 'first class', name: 'First Class' }
      ]
    }
  }
}
</script>
<style scoped>
.bg_landingPage {
  background-image: url('../../assets/Images/Main Image/Group 56.jpg');
  background-repeat: no-repeat;
  background-position: 30% 0;
  height: auto;
}
.card_ticket {
  z-index: 1;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 85%;
  position: relative;
  font-family: 'Poppins', sans-serif;
}
.flight_choose {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
}
.title_card h4 {
  font-size: 20px;
}
.title_topDesti {
  font-family: 'Poppins', sans-serif;
}
.title_topDesti h5 {
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
}
.title_topDesti h4 {
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
}
.title_card h5 {
  font-size: 16px;
}
.corousel_cardTopDesti {
  box-shadow: 20px 25px 27px rgba(23, 121, 212, 0.19);
}
.title_card a {
  cursor: pointer;
  text-decoration: none;
}
.card_searchLocation {
  font-family: 'Poppins', sans-serif;
}
.btn_oneWay,
.btn_round,
.btn_search {
  border: none;
  border-radius: 7px;
  width: 100%;
  font-weight: 600;
}
.btn_oneWay {
  background: #2395ff;
  color: #ffffff;
}
.bg_card {
  bottom: -80px;
  right: -40px;
}
.corousel_card {
  font-family: 'Poppins', sans-serif;
}
.corousel_cardTopDesti {
  height: 500px;
  background-color: #2395ff;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 0% 100%;
  background-image: url('../../assets/Images/Logo/image_bgCorusel.png');
  border-radius: 40px;
}
.corousel_card h5 {
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #2395ff;
}
.btn_round {
  color: #595959;
}
.btn_oneWay:hover {
  background: #0f89fc;
}
.btn_round:hover {
  background: #ebebeb;
}
.card_searchLocation .from h5,
.to h5 {
  color: #979797;
  font-size: 14px;
}
.departure h5,
.input_selected h5,
.choose_class h5 {
  color: #6b6b6b;
  font-size: 17px;
}
.b-form-datepicker {
  padding: 8px 0 !important;
  border-radius: 7px;
}
.radio_style {
  font-weight: 600;
}
.btn_search {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  color: #ffffff;
  font-size: 22px;
  text-align: left;
}
.btn_search:hover {
  background: #0a88ff;
}
.card_searchLocation .from h3,
.to h3 {
  font-weight: 700;
  font-size: 20px;
}
.custom-select {
  height: 50px;
  border-radius: 7px;
}
.image_iconsSwith {
  position: relative;
  top: 25px;
}
.card_searchLocation .from p,
.to p {
  color: #979797;
  font-size: 12px;
  margin-bottom: 0;
}
.title_desti h2,
.title_desti a {
  font-weight: 600;
  font-size: 24px;
}
.title_desti a {
  font-weight: 600;
  font-size: 17px;
}
.card_searchLocation .to {
  text-align: right;
}
.title_landing {
  font-family: 'Poppins', sans-serif;
}
.image_icons {
  margin-left: auto;
}
.title_landing h1 {
  font-weight: 600;
}
.title_landing span {
  font-weight: 600;
  color: #2395ff;
}
.title_landing p {
  color: #979797;
}
</style>
