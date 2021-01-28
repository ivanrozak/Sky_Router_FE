<template>
  <div class="left-profile">
    <div class="top centered">
      <img src="../../../assets/logo.png" />
      <div>
        <button><strong>Select Photo</strong></button>
      </div>

      <h4>Mike Kowalski</h4>
      <div><small>Medan, Indonesia</small></div>
    </div>
    <div class="bottom">
      <div class="btn-group">
        <button style="color: #2395ff">
          <img src="../../../assets/icon/profile.png" class="mr-3" />Profile
        </button>
        <button>
          <img src="../../../assets/icon/star.png" class="mr-3" />My Review
        </button>
        <button>
          <img src="../../../assets/icon/gear.png" class="mr-3" />Settings
        </button>
        <button style="color: red">
          <img src="../../../assets/icon/logout.png" class="mr-3" />Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top {
  margin-bottom: 30px;
}
.btn-group {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.btn-group button {
  padding: 10px 5px;
  text-align: left;
  background-color: white;
  border: none;
  border-radius: 0px;
  font-weight: bold;
}
.btn-group button:hover {
  background-color: whitesmoke;
}
.left-profile {
  border-radius: 20px;
  background-color: white;
  padding: 30px 20px;
}
.centered {
  text-align: center;
}
.top img {
  margin-bottom: 20px;
  border-radius: 50%;
  border: 3px solid #2395ff;
  padding: 5px;
  max-width: 130px;
}
.top button {
  padding: 5px 15px;
  color: #2395ff;
  background-color: white;
  border: 1px solid #2395ff;
  border-radius: 10px;
  margin-bottom: 20px;
}
.top button:hover {
  background-color: whitesmoke;
}
</style>
