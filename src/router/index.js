import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/linkTree',
    name: 'LinkTree',
    component: () => import('../views/LinkTree.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
