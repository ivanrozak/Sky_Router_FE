import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Forgot from '../views/Auth/forgot.vue'
import ForgotPassword from '../views/Auth/forgotPassword.vue'
import ConfirmEmail from '../views/Auth/ConfirmEmail.vue'
import myBooking from '../views/Booking/myBooking.vue'
import DetailBooking from '../views/Booking/DetailBooking.vue'
import landingPage from '../views/LandingPage/HomePage.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: landingPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot/:id',
    name: 'forgotPassword',
    component: ForgotPassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/confirmEmail/:id',
    name: 'ConfirmEmail',
    component: ConfirmEmail,
    meta: { requiresVisitor: true }
  },
  {
    path: '/mybooking',
    name: 'myBooking',
    component: myBooking,
    meta: { requiresAuth: true }
  },
  {
    path: '/detailbooking',
    name: 'DetailBooking',
    component: DetailBooking,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/searchresult',
    name: 'SearchResult',
    component: () => import('../views/Search Result/SearchResult.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
