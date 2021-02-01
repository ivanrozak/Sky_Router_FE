<template>
  <div>
    <b-container class="mt-lg-3 mt-2 mb-3 mb-lg-3">
      <b-navbar toggleable="lg">
        <b-navbar-brand
          @click="goHome"
          class="d-flex align-items-center navbar_logo"
        >
          <img src="../assets/Images/Logo/illustration.svg" alt="logo_navbar" />
          <span class="ml-lg-2">SkyRouter</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Dekstop Navbar -->
          <b-navbar-nav
            class="d-none d-lg-block ml-lg-auto mr-lg-auto navbar_styleing"
          >
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <template #prepend>
                <b-input-group-text class="search_btn">
                  <b-icon
                    icon="search"
                    style="color: #A3A3A3;"
                    font-scale="1.5"
                    aria-hidden="true"
                  ></b-icon
                ></b-input-group-text>
              </template>
              <b-form-input
                class="shadow-none"
                autocomplete="off"
                placeholder="Where you want to go?"
              ></b-form-input>
              <b-nav-item class="nav_items ml-lg-4 mr-lg-4"
                ><router-link tag="a" to="/">Find Ticket</router-link>
              </b-nav-item>
              <b-nav-item class="nav_items"
                ><router-link tag="a" to="/mybooking">My Booking</router-link>
              </b-nav-item>
            </b-input-group>
          </b-navbar-nav>
          <!-- ========================= -->
          <!-- Mobile Navbar -->
          <b-navbar-nav
            class="d-block d-lg-none ml-lg-auto mr-lg-auto navbar_styleing"
          >
            <b-nav-item class="nav_items mt-2"
              ><router-link tag="a" to="/">Find Ticket</router-link>
            </b-nav-item>
            <b-nav-item class="nav_items"
              ><router-link tag="a" to="/mybooking">My Booking</router-link>
            </b-nav-item>
            <b-input-group class="mb-2 mt-2 mb-4 mr-sm-2 mb-sm-0">
              <template #prepend>
                <b-input-group-text class="search_btn">
                  <b-icon
                    icon="search"
                    style="color: #A3A3A3;"
                    font-scale="1.5"
                    aria-hidden="true"
                  ></b-icon
                ></b-input-group-text>
              </template>
              <b-form-input
                class="shadow-none"
                autocomplete="off"
                placeholder="Where you want to go?"
              ></b-form-input>
            </b-input-group>
          </b-navbar-nav>
          <!-- ====================== -->
          <!-- Right aligned nav items -->
          <b-navbar-nav v-if="!isLogin">
            <button @click="SignUp" class="btn_login py-3 px-lg-4 py-lg-2">
              Sign Up
            </button>
          </b-navbar-nav>
          <b-navbar-nav class="iconsIslogin " v-else>
            <div class="d-flex justify-content-around">
              <section class="py-3 pr-lg-5 py-lg-2">
                <img
                  @click="callMessage"
                  src="../assets/Images/Logo/ic_round-mail-outline.svg"
                  alt="email"
                />
                <NotifMessage v-if="chat === 1" />
              </section>
              <section class="py-3 pr-lg-5 py-lg-2 position-relative">
                <img
                  @click="callNotif"
                  src="../assets/Images/Logo/bell.svg"
                  alt="bell"
                />
                <!-- Notif Showing -->
                <Notif v-if="notif === 1" />
              </section>
              <section class="py-3 py-lg-1">
                <img
                  @click="toProfilePage()"
                  class="image_logo"
                  :src="
                    image
                      ? `${config}${image}`
                      : require('../assets/logo.png')
                  "
                  alt="image"
                />
              </section>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Notif from './_base/NavbarShowMenu/Notification'
import NotifMessage from './_base/NavbarShowMenu/NotificationMessage'
export default {
  name: 'NavigationBar',
  data() {
    return {
      notif: 0,
      chat: 0,
      account: 0,
      config: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({ isLogin: 'isLogin', image: 'getImage' })
  },
  components: {
    Notif,
    NotifMessage
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    SignUp() {
      this.$router.push('/signup')
    },
    callNotif() {
      if (this.notif === 0) {
        this.notif = 1
        this.chat = 0
        this.account = 0
      } else {
        this.notif = 0
      }
    },
    callMessage() {
      if (this.chat === 0) {
        this.chat = 1
        this.notif = 0
        this.account = 0
      } else {
        this.chat = 0
      }
    },
    toProfilePage() {
      this.$router.push('/profile')
    }
  }
}
</script>
<style scoped>
.navbar_logo {
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}
.navbar_logo span {
  color: black;
  font-weight: 600;
}
.iconsIslogin section img {
  cursor: pointer;
}
.image_logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  padding: 5%;
  border: 2px solid #2395ff;
}
a.router-link-exact-active {
  color: #000000 !important;
  font-weight: 700;
  padding-bottom: 10px;
  text-decoration: none;
}
a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 30px;
  right: 0;
  top: 40px;
  width: 40px;
  height: 6px;
  background: #2395ff;
  border-radius: 10px;
}

.nav_items {
  position: relative;
}
.nav_items a {
  text-decoration: none;
  color: #000000;
  font-family: 'Poppins', sans-serif;
}
.nav_items a:hover {
  color: #1d1616;
}
.navbar_styleing input {
  height: 40px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  padding: 0;
  border-left: none;
  border-radius: 0 10px 10px 0 !important;
  font-family: 'Poppins', sans-serif;
  background: #e9ecef;
}
.search_btn {
  border-radius: 10px;
  border-right: none;
}
.btn_login {
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
}
.btn_login:hover {
  background: #128afa;
  transition: 1s;
}

@media (max-width: 576px) {
  .input-group {
    width: 100%;
  }
  a.router-link-exact-active::after {
    content: '';
    position: static;
    left: 0;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    background: none;
    border-radius: 0;
  }
  a.router-link-exact-active {
    padding-bottom: 0;
  }
}
</style>
