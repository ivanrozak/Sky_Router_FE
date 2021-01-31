import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns'
import VueTimeago from 'vue-timeago'
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueTelInput)
Vue.use(AutoCompletePlugin)
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: undefined, // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'id': require('date-fns/locale/id')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
