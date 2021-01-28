<template>
  <div class="main">
    <h1>ini header</h1>
    <b-container>
      <b-row class="profile">
        <b-col sm="12" md="4" lg="3">
          <LeftProfile />
        </b-col>
        <b-col sm="12" md="8" lg="9">
          <RightProfile />
        </b-col>
      </b-row>
    </b-container>
    <h1>ini footer</h1>
  </div>
</template>

<script>
import LeftProfile from '../components/_base/Profile Component/LeftProfileComponent'
import RightProfile from '../components/_base/Profile Component/RightProfileComponent'

export default {
  components: {
    LeftProfile,
    RightProfile
  }
}
</script>

<style scoped>
.main {
  background-color: whitesmoke;
}
.profile {
  padding: 40px 0px;
}
</style>
