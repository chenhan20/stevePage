import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/linkTree',
    name: 'LinkTree',
    component: () => import('../views/LinkTree.vue')
  },
  {
    path: '/linkTreeComponents',
    name: 'LinkTree',
    component: () => import('../components/LinkTree.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router