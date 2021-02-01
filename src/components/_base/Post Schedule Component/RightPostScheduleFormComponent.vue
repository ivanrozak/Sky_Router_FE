<template>
  <div>
    <div class="right-form">
      <label for="duration">Duration</label>
      <b-form-input type="text" id="duration"></b-form-input>
      <label for="class">Airplane's Class</label>
      <b-form-input type="text" id="class"></b-form-input>
      <label for="price">Price</label>
      <b-form-input type="number" id="price"></b-form-input>

      <label>Facilities</label>
      <b-form-checkbox
        id="luggage"
        name="luggage"
        value="1"
        unchecked-value="0"
      >
        Luggage
      </b-form-checkbox>

      <b-form-checkbox
        id="inflightMeal"
        name="inflightMeal"
        value="1"
        unchecked-value="0"
      >
        Inflight Meal
      </b-form-checkbox>

      <b-form-checkbox id="wifi" name="wifi" value="1" unchecked-value="0">
        Wi-Fi
      </b-form-checkbox>
      <br />

      <b-form-checkbox id="refun" name="refun" value="1" unchecked-value="0">
        Refun
      </b-form-checkbox>

      <b-form-checkbox
        id="reschedule"
        name="reschedule"
        value="1"
        unchecked-value="0"
      >
        Reschedule
      </b-form-checkbox>

      <br />
      <label for="route-type">Route Type</label>
      <b-form-radio-group id="route-type" name="route-type">
        <b-form-radio value="1" unchecked-value="0">Direct</b-form-radio>
        <b-form-radio value="1" unchecked-value="0">Transit</b-form-radio>
      </b-form-radio-group>
    </div>
    <br />
    <div style="text-align: right;"><b-button class="btn">Add</b-button></div>
  </div>
</template>

<style scoped>
.btn {
  background: #2395ff;
  width: 120px;
}
.right-form {
  border-radius: 15px;
  padding: 20px;
  background: white;
  margin-top: 45px;
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
@media only screen and (max-width: 767px) {
  .right-form {
    margin-top: 72px;
  }
}
@media only screen and (max-width: 533px) {
  .right-form {
    margin-top: 20px;
  }
}
</style>
