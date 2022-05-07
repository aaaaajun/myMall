import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')//懒加载
const Cart = () => import('../views/cart/Cart.vue')//懒加载
const Category = () => import('../views/category/Category.vue')//懒加载
const Profile = () => import('../views/profile/Profile.vue')//懒加载

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
