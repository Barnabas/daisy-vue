import { createRouter, createWebHistory } from 'vue-router'
import { COMPONENT_LIST } from '@/utils/components'

const COMPONENT_ROUTES = COMPONENT_LIST.map((item) => ({
  name: item.id,
  path: item.path,
  component: item.demoPage,
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue'),
    },
    ...COMPONENT_ROUTES,
  ],
})

export default router
