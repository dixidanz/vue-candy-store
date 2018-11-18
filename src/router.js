import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: () => import('./views/User/Index/index'),
      children: [
        {
          path: '',
          component: () => import('./views/User/Products/index'),
        },
        {
          path: '/cart',
          component: () => import('./views/User/Cart/index'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Admin/Login/index')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Admin/Dashboard/index'),
      children: [
        {
          path: '/product',
          name: 'product',
          component: () => import('./views/Admin/Product/index'),
          meta: { requiresAuth: true },
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('./views/Admin/Order/index'),
          meta: { requiresAuth: true },
        },
        {
          path: '/coupon',
          name: 'coupon',
          component: () => import('./views/Admin/Coupon/index'),
          meta: { requiresAuth: true },
        },
      ]
    }
  ]
})
