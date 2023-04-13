import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/orders',
      name: 'Orders',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/Orders.vue')
    },
    {
      path: '/orders/create',
      name: 'OrdersCreate',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/OrdersCreate.vue')
    },
    {
      path: '/companies',
      name: 'Companies',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/Companies.vue')
    },
    {
      path: '/companies/create',
      name: 'CompaniesCreate',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/CompaniesCreate.vue')
    },
    {
      path: '/products',
      name: 'Products',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/Products.vue')
    },
    {
      path: '/products/create',
      name: 'ProductsCreate',
      meta: {
        title: 'Welcome to the dashboard'
      },
      component: () => import('../views/ProductsCreate.vue')
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   // Get the page title from the route meta data that we have defined
//   // See further down below for how we setup this data
//   console.log(to)
//   const title = to.meta.title
// // If the route has a title, set it as the page title of the document/page
//   if (title){
//     document.title = title
//   }
//   // Continue resolving the route
//   next()
// })


export default router
