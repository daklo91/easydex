import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Browse from '../views/Browse.vue'
import Search from '../views/Search.vue'
import Filter from '../views/Filter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Easydex'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse,
    meta: {
      title: 'Browse'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: 'Search'
    }
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter,
    meta: {
      title: 'Filter'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
