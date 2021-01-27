<template>
  <div>
    <b-container class="mt-lg-3">
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
          <b-navbar-nav class="ml-lg-auto mr-lg-auto navbar_styleing">
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

          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <button class="btn_login px-lg-4 py-lg-2">Log in</button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'NavigationBar',
  methods: {
    goHome() {
      this.$router.push('/')
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
</style>
