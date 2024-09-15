import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import TrainingView from '@/views/TrainingView.vue'
import FacilitiesView from '@/views/FacilitiesView.vue'
import ContactView from '@/views/ContactView.vue'
import AdminView from '@/views/AdminView.vue'
// import RegisterComp from '../components/RegisterComp.vue'
import LoginComp from '../components/LoginComp.vue'
import ProfileComp from '../components/ProfileComp.vue'
import BookingsComp from '../components/BookingsComp.vue'
import BookingView from '@/views/BookingView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/training',
    name: 'training',
    component: TrainingView
  },
  {
    path: '/facilities',
    name: 'facilities',
    component: FacilitiesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    // path: '/register',
    // name: 'register',
    // component: RegisterComp
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComp
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComp
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsComp
  },
  {
    path: '/bookingv',
    name: 'bookingv',
    component: BookingView
  },
  {
    path: '/register',
    name: 'register',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
