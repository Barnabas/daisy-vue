import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue'),
    },
    {
      path: '/components/accordion',
      name: 'accordion',
      component: () => import('@/views/demos/AccordionDemo.vue'),
    },
    {
      path: '/components/button',
      name: 'button',
      component: () => import('@/views/demos/ButtonDemo.vue'),
    },
    {
      path: '/components/dropdown',
      name: 'dropdown',
      component: () => import('@/views/demos/DropdownDemo.vue'),
    },
    {
      path: '/components/alert',
      name: 'alert',
      component: () => import('@/views/demos/AlertDemo.vue'),
    },
  ],
})

export default router
