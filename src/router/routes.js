import { RouterView } from 'vue-router'

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
      component: () => import('../views/Login.vue')
    },
    {
      path: '/orders',
      component: RouterView,
      children: [
        {
          path: "/",
          name: "Orders",
          component: () => import('@/views/orders/Index.vue'),
          meta: {
            title: 'Orders'
          },
        },
        {
          path: "create",
          name: "Orders Create",
          component: () => import('@/views/orders/Create.vue'),
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
          component: () => import('@views/companies/Index.vue'),
          meta: {
            title: 'Companies'
          },
        },
        {
          path: "create",
          name: "Companies Create",
          component: () => import('@views/companies/Create.vue'),
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