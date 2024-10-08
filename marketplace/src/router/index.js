import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import SignUpView from '../views/SignUpView.vue'
import BasketView from '../views/BasketView.vue'
import ItemsProductView from '../views/ItemsProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    },

    {
      path: '/basketView',
      name: 'basket',
      component: BasketView,
    },
    {
      path: '/itemsproductView',
      name: 'itemsproduct',
      component: ItemsProductView,
    },

  ]
})

export default router
