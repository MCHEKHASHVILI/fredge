import { RouterView } from 'vue-router'

import CompaniesIndex from '@/views/companies/Index.vue'
import CompaniesCreate from '@/views/companies/Create.vue'
import Login from '@/views/Login.vue'
import OrdersIndex from '@/views/orders/Index.vue'
import OrdersCreate from '@/views/orders/Create.vue'


const routes = [
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
      component: Login
    },
    {
      path: '/orders',
      component: RouterView,
      children: [
        {
          path: "",
          name: "Orders",
          component: () => OrdersIndex,
          meta: {
            title: 'Orders'
          },
        },
        {
          path: "create",
          name: "Orders Create",
          component: OrdersCreate,
          meta: {
            title: 'Orders Create'
          },
        },
      ]
    },
    {
      path: '/companies',
      component: RouterView,
      children: [
        {
          path: "",
          name: "Companies",
          component: CompaniesIndex,
          meta: {
            title: 'Companies'
          },
        },
        {
          path: "create",
          name: "Companies Create",
          component: CompaniesCreate,
          meta: {
            title: 'Companies Create'
          },
        },
      ]
    },
    {
      path: '/products',
      component: RouterView,
      children: [
        {
          path: "",
          name: "Products",
          meta: {
            title: "Products"
          },
          component: () => import('@/views/products/Index.vue')
        },
        {
          path: "create",
          name: 'Products Create',
          meta: {
            title: 'Create Product'
          },
          component: () => import('@/views/products/Create.vue')
        },
      ]
    },
  ]

export default routes