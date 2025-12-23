import { createRouter, createWebHistory } from 'vue-router'
import { COMPONENTS } from '@/utils/components'

const COMPONENT_ROUTES = Object.entries(COMPONENTS).map(([id, item]) => ({
  name: id,
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
