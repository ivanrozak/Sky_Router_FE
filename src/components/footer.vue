<template>
  <footer>
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="d-flex flex-column flex-lg-row bd-highlight">
            <div
              class="footer_desc p-2  order-4 order-lg-1 flex-fill bd-highlight"
            >
              <div class="footer_logos d-flex align-items-center">
                <img
                  class="logos"
                  src="../assets/Images/Logo/illustration.svg"
                  alt="logo"
                />
                <span style="font-weight: 600;" class="ml-lg-2">SkyRouter</span>
              </div>
              <p class="mt-lg-3 pt-lg-1 mt-3">
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div
              class="p-2 mt-lg-2 footer_width order-3 mt-2 order-lg-2 flex-grow-1 bd-highlight"
            >
              <h5 class="title_productFooter">Features</h5>
              <ul class="list-unstyled mt-lg-3 mt-3 pt-lg-1">
                <li class="mb-lg-3 mb-2">
                  <router-link class="footer_list_tag" tag="a" to="/"
                    >Find Ticket
                  </router-link>
                </li>
                <li class="mb-lg-3 mb-2">
                  <router-link class="footer_list_tag" tag="a" to="/"
                    >My Booking</router-link
                  >
                </li>
                <li class="mb-lg-3 mb-2">
                  <router-link class="footer_list_tag" tag="a" to="/"
                    >Chat</router-link
                  >
                </li>
                <li>
                  <router-link class="footer_list_tag" tag="a" to="/"
                    >Notification</router-link
                  >
                </li>
              </ul>
            </div>
            <div
              class="p-2 mt-lg-2 footer_width order-2 order-lg-3 flex-fill bd-highlight"
            >
              <h5 class="title_productFooter">Download SkyRouter app</h5>
              <button
                class="py-lg-2 d-flex align-items-center mt-3 mt-lg-0 py-2 justify-content-center mt-lg-3 btn_app_store"
              >
                <img
                  class="logo_btn"
                  src="../assets/Images/Logo/apple.svg"
                  alt="appleLogo"
                />
                <div class="title_text ml-2">
                  <span class="title_1">Download on the</span> <br />
                  <span class="title_2">App Store</span>
                </div>
              </button>
              <button
                class="py-lg-2 mt-lg-3 mt-3 py-2 d-flex align-items-center justify-content-center btn_play_store"
              >
                <img
                  class="logo_btn"
                  src="../assets/Images/Logo/google-play.svg"
                  alt="googlePlay"
                />
                <div class="title_text ml-2">
                  <span class="title_1 get_on"> GET IT ON </span> <br />
                  <span class="title_2"> Google Play</span>
                </div>
                <br />
              </button>
            </div>
            <div
              class="p-2 mt-lg-2 footer_width  order-1 order-lg-4 flex-fill bd-highlight"
            >
              <h5 class="title_productFooter">Follow Us</h5>
              <div class="logo_media mt-lg-3 mt-3 mb-2 mb-lg-0">
                <a
                  ><img
                    src="../assets/Images/Logo/facebook.svg"
                    alt="Logo Facebook"
                /></a>
                <a
                  ><img
                    src="../assets/Images/Logo/twitter.svg"
                    alt="Logo Twiter"
                /></a>
                <a
                  ><img
                    src="../assets/Images/Logo/instagram.svg"
                    alt="Logo Instagram"
                /></a>
                <a
                  ><img
                    src="../assets/Images/Logo/youtube.svg"
                    alt="Logo Youtube"
                /></a>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex bd-highlight flex-column flex-lg-row">
            <div
              class="p-2 mt-lg-2 order-lg-1 order-2 flex-grow-1 footer_descBottom bd-highlight"
            >
              <p>© SkyRouter . All Rights Reserved.</p>
            </div>
            <div
              class="p-2 bd-highlight order-lg-2 d-none d-lg-block footer_descBottom mt-lg-2"
            >
              <a
                ><img src="../assets/Images/Logo/map-pin.svg" alt="maps" />
                Jakarta Indonesia</a
              >
            </div>
            <div class="mobile_footer order-1  d-lg-none">
              <div class="p-2 bd-highlight footer_descBottom mt-lg-2">
                <a
                  ><img src="../assets/Images/Logo/map-pin.svg" alt="maps" />
                  Jakarta Indonesia</a
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  name: 'footer'
}
</script>
<style scoped>
.footer_logos {
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  text-decoration: none;
  color: #000000;
}
.logo_media a img {
  margin-right: 15px;
}

.footer_list_tag {
  font-family: 'Poppins', sans-serif;
  color: #000000;
  text-decoration: none;
}
.logo_media img {
  cursor: pointer;
}
.footer_desc {
  width: 35%;
}
.btn_app_store,
.btn_play_store {
  width: 80%;
  margin-left: 2px;
  background: #000000;
  border: none;
  color: #ffffff;
  border-radius: 10px;
}
.btn_app_store:hover,
.btn_play_store:hover {
  background: #1b1b1b;
}
.logo_btn {
  width: 40px;
  object-fit: contain;
}
.footer_logos span {
  font-weight: 700;
  color: #000000;
}
.title_text .title_2 {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
.get_on {
  position: relative;
  left: -29px;
}
.title_1 {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}
.title_2 {
  font-size: 20px;
}
.footer_descBottom p {
  color: #6b6b6b, 100%;
  font-family: 'Poppins', sans-serif;
}
h5 {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
}
.footer_descBottom a {
  color: #6b6b6b, 100%;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}
.footer_desc p {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #6b6b6b, 100%;
  padding-right: 70px;
}
.footer_logos span {
  font-size: 20px;
  font-weight: 500;
}
.logos {
  width: 50px;
  object-fit: contain;
}
@media (max-width: 576px) {
  .footer_desc {
    width: 100%;
  }
  .btn_app_store,
  .btn_play_store {
    margin-left: 0;
  }
  .footer_descBottom p {
    margin: 0;
    padding-bottom: 12px;
  }
  .mobile_footer {
    padding: 0;
    display: flex;
  }
}
</style>
