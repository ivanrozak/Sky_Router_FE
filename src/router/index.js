import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Forgot from '../views/Auth/forgot.vue'
import ForgotPassword from '../views/Auth/forgotPassword.vue'
import ConfirmEmail from '../views/Auth/ConfirmEmail.vue'
import myBooking from '../views/Booking/myBooking.vue'
import landingPage from '../views/LandingPage/LandingPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: landingPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot
  },
  {
    path: '/forgot/:id',
    name: 'forgotPassword',
    component: ForgotPassword
  },
  {
    path: '/confirmEmail/:id',
    name: 'ConfirmEmail',
    component: ConfirmEmail
  },
  {
    path: '/mybooking',
    name: 'myBooking',
    component: myBooking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
