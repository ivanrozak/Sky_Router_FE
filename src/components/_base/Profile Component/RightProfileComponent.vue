<template>
  <div class="right-profile">
    <h6 style="color: #2395ff">P R O F I L E</h6>
    <h4><strong>Profile</strong></h4>
    <br />
    <b-row class="profile-form">
      <b-col sm="12" lg="6">
        <h6><strong>Contact</strong></h6>
        <br />
        <label>Email</label>
        <b-form-input
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        <label>Phone Number</label>
        <b-form-input
          type="number"
          placeholder="Enter phone number"
        ></b-form-input>
      </b-col>
      <b-col sm="12" lg="6">
        <h6><strong>Biodata</strong></h6>
        <br />
        <label>Username</label>
        <b-form-input type="text" placeholder="Enter your name"></b-form-input>
        <label>City</label>
        <b-form-input type="text" placeholder="Enter your city"></b-form-input>
        <label>Address</label>
        <b-form-input
          type="text"
          placeholder="Enter your address"
        ></b-form-input>
        <label>Post Code</label>
        <b-form-input
          type="text"
          placeholder="Enter your post code"
        ></b-form-input>
        <div style="text-align: right;">
          <b-button class="btn-save" variant="primary"
            ><strong>Save</strong></b-button
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.right-profile {
  border-radius: 20px;
  background-color: white;
  padding: 30px 30px;
}
input {
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
.btn-save {
  margin-top: 20px;
  padding: 7px 30px;
}
</style>
