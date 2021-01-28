<template>
  <main>
    <div class="top">
      <h5><strong>Filter</strong></h5>
      <h6 style="color: #2395ff">
        <small><strong>Reset</strong></small>
      </h6>
    </div>
    <div class="bottom">
      <b-button v-b-toggle.collapse-1
        ><strong>Transit</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-1">
        <div class="checkbox-group">
          <label>Direct</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Transit</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Transit 2+</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-2
        ><strong>Facilities</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-2">
        <div class="checkbox-group">
          <label>Luggage</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>In-Flight Meal</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>Wi-fi</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-3
        ><strong>Departure Time</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-3">
        <div class="checkbox-group">
          <label>00.00 - 06.00</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>00.00 - 06.00</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
        <div class="checkbox-group">
          <label>00.00 - 06.00</label>
          <b-form-checkbox v-model="status" value="accepted" unchecked-value="">
          </b-form-checkbox>
        </div>
      </b-collapse>
      <hr />
      <b-button v-b-toggle.collapse-3
        ><strong>Ticket Price</strong
        ><b-icon icon="chevron-compact-down" class="ml-auto"></b-icon
      ></b-button>
      <b-collapse visible id="collapse-3">
        <div style="padding: 0px 15px">
          <label for="range-2">Lowest</label>
          <b-form-input
            id="range-2"
            v-model="value"
            type="range"
            min="0"
            max="300"
            step="0"
          ></b-form-input>
          <div class="mt-2">$ {{ value }}</div>
        </div>
      </b-collapse>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      status: '',
      value: '2'
    }
  }
}
</script>

<style scoped>
.top {
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  border-radius: 20px;
  background-color: white;
  padding: 30px 20px;
}
button {
  display: flex;
  background-color: white;
  border: none;
  width: 100%;
  color: black;
  text-align: left;
}
button:hover {
  background-color: white;
  border: none;
  width: 100%;
  color: black;
  text-align: left;
}
.checkbox-group {
  display: flex;
  justify-content: space-between;
  padding: 5px 7px 0px 15px;
}
</style>
