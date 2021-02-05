<template>
  <div>
    <div class="box-flight">
      <h5 style="color:white">Contact Person Details</h5>
      <div class="box1">
        <label for="name">Full Name</label>
        <b-form-input
          type="text"
          v-model="user.user_name"
          disabled
          id="name"
        ></b-form-input>

        <label for="email">Email</label>
        <b-form-input
          type="email"
          v-model="user.user_email"
          disabled
          id="email"
        ></b-form-input>

        <label for="mobile">Phone Number</label>
        <vue-tel-input
          disabled
          v-model="user.user_phone"
          id="mobile"
        ></vue-tel-input>
        <br />
      </div>
      <b-form @submit.prevent="onSubmit">
        <div class="pesengerForm">
          <h5>Passenger Details</h5>
          <div class="box2 pt-5">
            <div class="scroll pr-4">
              <div
                v-for="(items, index) in formAdults"
                :key="'Adult' + index"
                class="Forms mb-3"
              >
                <b-row
                  class="alert alert-info"
                  role="alert"
                  align-h="between"
                  align-v="center"
                >
                  <b-col> Passenger : {{ index + 1 }} adult </b-col>
                  <b-col style="text-align:right">
                    <b-form-checkbox
                      switch
                      v-model="items.statusCheeck"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                      inline
                      class="my-2"
                    >
                    </b-form-checkbox>
                  </b-col>
                </b-row>

                <label for="title">Title</label>
                <b-form-select required v-model="items.title" class="mb-3">
                  <b-form-select-option :value="null"
                    >Please select an option</b-form-select-option
                  >
                  <b-form-select-option value="Mr">Mr</b-form-select-option>
                  <b-form-select-option value="Mrs">Mrs</b-form-select-option>
                </b-form-select>
                <label for="fname">Full Name</label>
                <b-form-input
                  type="text"
                  required
                  v-model="items.fullname"
                  :id="'namesAdults' + (index + 1)"
                ></b-form-input>
                <label for="country">country</label>
                <ejs-autocomplete
                  :id="'Adult' + (index + 1)"
                  :dataSource="countries"
                  v-model="items.nationality"
                  popupWidth="300px"
                  popupHeight="800px"
                ></ejs-autocomplete>
              </div>
              <!-- Childs -->
              <div
                v-for="(items, index) in formChilds"
                :key="'Childs' + index"
                class="Forms mb-3"
              >
                <b-row
                  class="alert alert-info"
                  role="alert"
                  align-h="between"
                  align-v="center"
                >
                  <b-col> Passenger : {{ index + 1 }} Childs </b-col>
                  <b-col style="text-align:right">
                    <b-form-checkbox
                      switch
                      v-model="items.statusCheeck"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                      inline
                      class="my-2"
                    >
                    </b-form-checkbox>
                  </b-col>
                </b-row>

                <label for="title">Title</label>
                <b-form-select required v-model="items.title" class="mb-3">
                  <b-form-select-option :value="null"
                    >Please select an option</b-form-select-option
                  >
                  <b-form-select-option value="Mr">Mr</b-form-select-option>
                  <b-form-select-option value="Mrs">Mrs</b-form-select-option>
                </b-form-select>
                <label for="fname">Full Name</label>
                <b-form-input
                  type="text"
                  required
                  v-model="items.fullname"
                  :id="'namesChilds' + (index + 1)"
                ></b-form-input>
                <label for="country">country</label>
                <ejs-autocomplete
                  :id="'childs' + (index + 1)"
                  :dataSource="countries"
                  v-model="items.nationality"
                  popupWidth="300px"
                  popupHeight="800px"
                ></ejs-autocomplete>
              </div>
            </div>
          </div>
        </div>

        <h5>Passenger Details</h5>
        <div class="box3">
          <b-row>
            <b-col>
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="1"
                v-model="formBooking.insurance"
                unchecked-value="0"
              >
                Travel Insurance
              </b-form-checkbox>
            </b-col>
            <b-col style="text-align:right">
              IDR 5.000.000
            </b-col>
          </b-row>
          <br />
          <div class="line"></div>
          <br />
          <p>Get Travel compensation up to IDR 5.000.000</p>
        </div>
        <b-button type="submit" class="btn_Submit py-lg-3 px-lg-4">
          Process to Payment
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '../../../mixins/Alert'
import Country from '../../../mixins/Country'
export default {
  name: 'BookingTicket',
  mixins: [Country, Alert],
  data() {
    return {
      result: null,
      formBooking: {
        insurance: 0,
        status: 0
      },
      formAdults: [],
      formChilds: []
    }
  },
  created() {
    for (let i = 0; i < this.getPassanger.totalAdult; i++) {
      this.formAdults.push({
        title: '',
        fullname: '',
        nationality: '',
        statusCheeck: ''
      })
    }
    for (let i = 0; i < this.getPassanger.totalChild; i++) {
      this.formChilds.push({
        title: '',
        fullname: '',
        nationality: '',
        statusCheeck: ''
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      data: 'getDataScheduleById',
      getPassanger: 'getParams'
    })
  },
  methods: {
    ...mapActions(['postPesenger', 'postBooking']),
    async onSubmit() {
      const dataCombine = {
        userId: this.user.user_id,
        total:
          this.data.price * (this.formAdults.length + this.formChilds.length),
        scheduleId: this.data.scheduleId
      }
      const payload = {
        ...this.formBooking,
        ...dataCombine
      }
      await this.postBooking(payload)
        .then(result => {
          this.AlertSuccesBooking(result.data.data)
        })
        .catch(() => {
          this.AlertError('Error Booking')
        })
      for (let i = 0; i < this.formAdults.length; i++) {
        const data = {
          title: this.formAdults[i].title,
          fullname: this.formAdults[i].fullname,
          nationality: this.formAdults[i].nationality
        }
        await this.postPesenger(data)
      }
      for (let i = 0; i < this.formChilds.length; i++) {
        const data = {
          title: this.formChilds[i].title,
          fullname: this.formChilds[i].fullname,
          nationality: this.formChilds[i].nationality
        }
        await this.postPesenger(data)
      }
    }
  }
}
</script>

<style scoped>
.Forms {
  position: relative;
}
.badge {
  position: absolute;
  width: 25px;
  right: -20px;
  z-index: 1;
  cursor: pointer;
  top: -10px;
  font-size: 10px;
  padding-top: 3px;
  padding-left: 3px;
  height: 25px;
  border-radius: 50%;
  background: #2395ff;
  color: white;
}
.box-flight {
  font-family: 'Poppins', sans-serif;
}
.badge:hover {
  background: #0084ff;
}
.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 450px;
}
.scroll::-webkit-scrollbar {
  width: 5px;
}
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.btn_more {
  display: block;
  border: 2px solid #2395ff;
  border-radius: 10px;
  color: #2395ff;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: none;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  margin: 0 auto;
}
.btn_more:hover {
  border: 2px solid #0285ff;
  color: #0285ff;
}
.btn_Submit {
  display: block;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  margin: 0 auto;
}
.btn_Submit:hover {
  background: #0986fc;
}
.btn {
  margin-left: 35%;
  background-color: #2395ff;
  border: none;
}
.line {
  width: 100%;
}
.box-flight {
  padding: 50px 0;
}
.box1,
.box2,
.box3 {
  margin-bottom: 30px;
  padding: 36px 40px;
  background: white;
  border-radius: 15px;
  /* box-shadow: 3px 3px 1px 1px #979797; */
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
