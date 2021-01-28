import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Forgot from '../views/Auth/forgot.vue'
import ForgotPassword from '../views/Auth/forgotPassword.vue'
import ConfirmEmail from '../views/Auth/ConfirmEmail.vue'
import myBooking from '../views/Booking/myBooking.vue'
import landingPage from '../views/LandingPage/LandingPage.vue'
import DetailBooking from '../views/Booking/DetailBooking.vue'
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/detailbooking',
    name: 'DetailBooking',
    component: DetailBooking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
