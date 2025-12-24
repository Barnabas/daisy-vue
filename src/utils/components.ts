// This file is used to create navigation, routes, and fill in the demo layout header

import type { Component } from 'vue'

type ComponentItem = {
  label: string // human-readable label
  path: string // route to the demo page and also the daisyUI page
  componentSource: string // source file of the component
  demoSource: string // source file of the demo page
  demoPage: Component
}

export const COMPONENTS = {
  accordion: {
    label: 'Accordion',
    path: '/components/accordion',
    componentSource: `/components/BaseAccordion.vue`,
    demoSource: '/views/demos/AccordionDemo.vue',
    demoPage: () => import('@/views/demos/AccordionDemo.vue'),
  },
  alert: {
    label: 'Alert',
    path: '/components/alert',
    componentSource: `/components/BaseAlert.vue`,
    demoSource: '/views/demos/AlertDemo.vue',
    demoPage: () => import('@/views/demos/AlertDemo.vue'),
  },
  button: {
    label: 'Button',
    path: '/components/button',
    componentSource: `/components/BaseButton.vue`,
    demoSource: '/views/demos/ButtonDemo.vue',
    demoPage: () => import('@/views/demos/ButtonDemo.vue'),
  },
  dropdown: {
    label: 'Dropdown',
    path: '/components/dropdown',
    componentSource: `/components/BaseDropdown.vue`,
    demoSource: '/views/demos/DropdownDemo.vue',
    demoPage: () => import('@/views/demos/DropdownDemo.vue'),
  },
  modal: {
    label: 'Modal',
    path: '/components/modal',
    componentSource: `/components/BaseModal.vue`,
    demoSource: '/views/demos/ModalDemo.vue',
    demoPage: () => import('@/views/demos/ModalDemo.vue'),
  },
  tabs: {
    label: 'Tabs',
    path: '/components/tab',
    componentSource: `/components/BaseTabs.vue`,
    demoSource: '/views/demos/TabsDemo.vue',
    demoPage: () => import('@/views/demos/TabsDemo.vue'),
  },
} as const satisfies Record<string, ComponentItem>

export type ComponentId = keyof typeof COMPONENTS
