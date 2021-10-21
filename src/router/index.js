import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs'
import AdminpanelAddblog from '../views/AdminpanelAddblog'
import AdminpanelEditblog from '../views/AdminpanelEditblog'
import Blogdetail from '../views/Blogdetail'
import BlogEdit from '../views/BlogEdit'
import Search from '../views/Search'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/adminpanel-addblog',
    name: 'Adminpanel-Addblog',
    component: AdminpanelAddblog
  },
  {
    path: '/blogdetail/:id',
    name: 'Blogdetail',
    component: Blogdetail,
    props:true
  },
  {
    path: '/blogedit/:id',
    name: 'BlogEdit',
    component: BlogEdit,
    props:true
  },
  {
    path: '/adminpanel-editblog',
    name: 'Adminpanel-Editblog',
    component: AdminpanelEditblog
    // beforeEnter(to,from,next){
    //   let user = 
    // }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
