import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/user/home/Index.vue')
    },
    {
      path: '/search-order',
      name: 'search-order',
      component: () => import('@/pages/user/search-order/Index.vue')
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: () => import('@/pages/user/promotions/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/pages/user/product/Index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/user/cart/Index.vue')
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('@/pages/user/order/Index.vue')
    }
  ]
})

export default router
