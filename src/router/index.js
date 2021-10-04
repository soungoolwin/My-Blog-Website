import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Testing from '../components/Testing'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
