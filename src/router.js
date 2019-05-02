import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./components/Detail.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./components/Mine.vue')
    }
  ]
})