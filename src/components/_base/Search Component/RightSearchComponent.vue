<template>
  <main>
    <div class="top">
      <h5>
        <strong>Select Ticket<small> (6 flight found)</small></strong>
      </h5>
      <h6>
        <small
          ><strong
            ><span class="mr-3">Sort by</span
            ><b-icon icon="arrow-down-up"></b-icon></strong
        ></small>
      </h6>
    </div>
    <div class="box-group">
      <div class="box-logo">
        <img src="../../../assets/icon/garuda.png" class="mr-4" />
        <div>Garuda Indonesia</div>
      </div>
      <b-row>
        <b-col sm="6" md="3" lg="3" class="plane">
          <div class="plane-from">
            <div class="text1">IDN</div>
            <small>12.00</small>
          </div>
          <img src="../../../assets/icon/flight-to.png" class="mt-2" />
          <div class="plane-to">
            <div class="text1">JPN</div>
            <small>13.00</small>
          </div>
        </b-col>
        <b-col sm="6" md="9" lg="9" class="plane2">
          <div class="plane-time">
            <div><small>3 hours 11 minutes</small></div>
            <small>(Direct)</small>
          </div>
          <div class="plane-icon">
            <img src="../../../assets/icon/trash.png" />
            <img src="../../../assets/icon/FnB.png" />
            <img src="../../../assets/icon/wifi.png" />
          </div>
          <div class="plane-pricing">$ 214 <small>/pax</small></div>
          <b-button class="btn-select" variant="primary">Select</b-button>
        </b-col>
      </b-row>
      <b-button class="toogle-btn mt-3" v-b-toggle.collapse
        >View details<b-icon icon="chevron-compact-down" class="ml-3"></b-icon
      ></b-button>
      <b-collapse id="collapse">
        <p>disini detailnya</p>
      </b-collapse>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.plane {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.plane2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.plane-time {
  text-align: center;
}
.plane-icon img {
  margin: 0px 5px;
}
.plane-pricing {
  font-size: 1.2em;
  font-weight: 500;
  color: #2395ff;
}
.plane-pricing small {
  color: #979797;
}
.btn-select {
  padding: 7px 30px;
  font-weight: 500;
}
.top {
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-main {
  padding: 10px 0px;
  display: flex;
}
.box-group {
  border-radius: 20px;
  background-color: white;
  padding: 30px 30px;
}
.toogle-btn {
  display: flex;
  padding: 5px 0px;
  background-color: white;
  border: none;
  color: #2395ff;
  text-align: left;
}
.toogle-btn:hover {
  background-color: white;
  border: none;
  color: #2395ff;
}
.box-logo {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.text1 {
  font-size: 1.5em;
  font-weight: 500;
}
</style>
