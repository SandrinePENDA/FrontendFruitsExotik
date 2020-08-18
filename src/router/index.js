import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MySpace from '../views/MySpace.vue'
import ShowArticle from '../views/ShowArticle.vue'
import AllArticles from '../views/AllArticles.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/register',
    name: Register,
    component: Register
  },
  {
    path: '/myspace',
    name: MySpace,
    component: MySpace
  },
  {
    path: '/add',
    name: ShowArticle,
    component: ShowArticle,
    meta: {
        requiresAuth: true // cette ligne précise que pour y accéder, il faut s'être authentifié.
      }
  },
  {
    path: '/articles',
    name: AllArticles,
    component: AllArticles
  }

]

const router = new VueRouter({
  routes
})

export default router
