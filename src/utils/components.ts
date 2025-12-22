// This file is used to create navigation, routes, and fill in the demo layout header

import type { Component } from 'vue'

type ComponentItem = {
  id: string // will be route name
  label: string // human-readable label
  path: string // route to the demo page and also the daisyUI page
  componentSource: string // source file of the component
  demoSource: string // source file of the demo page
  demoPage: Component
}

export const SOURCE_LINK_ROOT = 'https://github.com/Barnabas/daisy-vue/blob/main/src'

export const COMPONENT_LIST: ComponentItem[] = [
  {
    id: 'accordion',
    label: 'Accordion',
    path: '/components/accordion',
    componentSource: `/components/Accordion.vue`,
    demoSource: '/views/demos/AccordionDemo.vue',
    demoPage: () => import('@/views/demos/AccordionDemo.vue'),
  },
  {
    id: 'alert',
    label: 'Alert',
    path: '/components/alert',
    componentSource: `/components/Alert.vue`,
    demoSource: '/views/demos/AlertDemo.vue',
    demoPage: () => import('@/views/demos/AlertDemo.vue'),
  },
  {
    id: 'button',
    label: 'Button',
    path: '/components/button',
    componentSource: `/components/Button.vue`,
    demoSource: '/views/demos/ButtonDemo.vue',
    demoPage: () => import('@/views/demos/ButtonDemo.vue'),
  },
  {
    id: 'dropdown',
    label: 'Dropdown',
    path: '/components/dropdown',
    demoSource: '/views/demos/DropdownDemo.vue',
    componentSource: `/components/Dropdown.vue`,
    demoPage: () => import('@/views/demos/DropdownDemo.vue'),
  },
]
