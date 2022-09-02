import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/dataBinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "dataBinding" */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/dataBinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "dataBinding" */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/dataBinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "dataBinding" */ '../views/1_databinding/DataBindingInputView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
