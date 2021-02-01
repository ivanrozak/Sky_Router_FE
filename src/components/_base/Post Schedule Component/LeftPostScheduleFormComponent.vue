<template>
  <div>
    <div class="left-form">
      <label for="airlanes">Airlane</label>
      <b-form-input type="text" id="airlanes"></b-form-input>

      <label for="current-date">Date</label>
      <b-form-input type="date" id="current-date"></b-form-input>

      <label for="dept-city">Departure City</label>
      <b-form-input type="text" id="dept-city"></b-form-input>

      <label for="dept-airport">Departure Airport</label>
      <b-form-input type="text" id="dept-airport"></b-form-input>

      <label for="dept-date">Departure Time</label>
      <b-form-input type="date" id="dept-date"></b-form-input>

      <label for="arriv-city">Arrival City</label>
      <b-form-input type="text" id="arriv-city"></b-form-input>

      <label for="arriv-airport">Arrival Airport</label>
      <b-form-input type="text" id="arriv-airport"></b-form-input>

      <label for="arriv-date">Arrival Time</label>
      <b-form-input type="date" id="arriv-date"></b-form-input>
    </div>
  </div>
</template>

<style scoped>
.left-form {
  border-radius: 15px;
  padding: 20px;
  background: white;
}
input,
vue-tel-input {
  border: none;
  border-bottom: 2px solid rgb(167, 167, 167);
  border-radius: 0px;
  margin-bottom: 20px;
}
label {
  color: rgb(131, 131, 131);
  padding-left: 13px;
  font-size: 0.9em;
}
</style>
