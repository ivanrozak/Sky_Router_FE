<template>
  <div>
    <div class="box-flight">
      <h5 style="color:white">Contact Person Details</h5>
      <div class="box1">
        <label for="name">Full Name</label>
        <b-form-input type="text" id="name"></b-form-input>

        <label for="email">Email</label>
        <b-form-input type="email" id="email"></b-form-input>

        <label for="mobile">Phone Number</label>
        <vue-tel-input id="mobile" v-model="phone"></vue-tel-input>
        <br />
      </div>

      <h5>Passenger Details</h5>
      <div class="box2">
        <br />
        <b-row
          class="alert alert-info"
          role="alert"
          align-h="between"
          align-v="center"
        >
          <b-col>
            Passenger : 1 adult
          </b-col>
          <b-col style="text-align:right">
            <b-form-checkbox switch inline class="my-2"> </b-form-checkbox>
          </b-col>
        </b-row>
        <label for="title">Title</label>
        <b-form-select v-model="selected" class="mb-3">
          <b-form-select-option :value="null"
            >Please select an option</b-form-select-option
          >
          <b-form-select-option value="Mr">Mr</b-form-select-option>
          <b-form-select-option value="Mrs">Mrs</b-form-select-option>
        </b-form-select>
        <label for="fname">Full Name</label>
        <b-form-input type="text" id="fname"></b-form-input>

        <label for="country">country</label>
        <ejs-autocomplete
          id="country"
          :dataSource="countries"
          popupWidth="300px"
          popupHeight="800px"
        ></ejs-autocomplete>
      </div>

      <h5>Passenger Details</h5>
      <div class="box3">
        <b-row>
          <b-col>
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="1"
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

      <b-button class="btn">
        Process to Payment
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      result: null,
      status: 1,
      countries: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua & Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia & Herzegovina',
        'Botswana',
        'Brazil',
        'British Virgin Islands',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central Arfrican Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Cote D Ivoire',
        'Croatia',
        'Cuba',
        'Curacao',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Polynesia',
        'French West Indies',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauro',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Korea',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Pierre & Miquelon',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'St Kitts & Nevis',
        'St Lucia',
        'St Vincent',
        'Sudan',
        'Suriname',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor Leste',
        'Togo',
        'Tonga',
        'Trinidad & Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks & Caicos',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'Virgin Islands (US)',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ]
    }
  }
}
</script>

<style scoped>
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
