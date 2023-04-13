import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Home Page'
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: 'Log In'
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/orders',
      name: 'Orders',
      meta: {
        title: 'Orders'
      },
      component: () => import('../views/Orders.vue')
    },
    {
      path: '/orders/create',
      name: 'OrdersCreate',
      meta: {
        title: 'Create Order'
      },
      component: () => import('../views/OrdersCreate.vue')
    },
    {
      path: '/companies',
      name: 'Companies',
      meta: {
        title: 'Companies'
      },
      component: () => import('../views/Companies.vue')
    },
    {
      path: '/companies/create',
      name: 'CompaniesCreate',
      meta: {
        title: 'Create Company'
      },
      component: () => import('../views/CompaniesCreate.vue')
    },
    {
      path: '/products',
      name: 'Products',
      meta: {
        title: 'Products'
      },
      component: () => import('../views/Products.vue')
    },
    {
      path: '/products/create',
      name: 'ProductsCreate',
      meta: {
        title: 'Create Product'
      },
      component: () => import('../views/ProductsCreate.vue')
    },
  ]
})


export default router
