import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/user/home/Index.vue')
    },
    {
      path: '/search-order',
      name: 'search-order',
      component: () => import('@/views/user/search-order/Index.vue')
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: () => import('@/views/user/promotions/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/user/product/Index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/user/cart/Index.vue')
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('@/views/user/order/Index.vue')
    }
  ]
})

export default router
