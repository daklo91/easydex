import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Browse from '../views/Browse.vue'
import Search from '../views/Search.vue'
import Filter from '../views/Filter.vue'
import Test from '../views/Test.vue'
import Generation from '../views/Generation.vue'

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
    redirect: '/browse/gen1',
    name: 'Browse',
    component: Browse,
    meta: {
      title: 'Browse'
    },
    children: [
      {
        path: 'gen1',
        name: 'Generation I',
        component: Generation
      },
      {
        path: 'gen2',
        name: 'Generation II',
        component: Generation
      },
      {
        path: 'gen3',
        name: 'Generation III',
        component: Generation
      }
    ]
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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: 'Test'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
