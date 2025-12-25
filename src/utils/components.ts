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
    componentSource: `/components/UAccordion.vue`,
    demoSource: '/views/demos/AccordionDemo.vue',
    demoPage: () => import('@/views/demos/AccordionDemo.vue'),
  },
  alert: {
    label: 'Alert',
    path: '/components/alert',
    componentSource: `/components/UAlert.vue`,
    demoSource: '/views/demos/AlertDemo.vue',
    demoPage: () => import('@/views/demos/AlertDemo.vue'),
  },
  badge: {
    label: 'Badge',
    path: '/components/badge',
    componentSource: `/components/UBadge.vue`,
    demoSource: '/views/demos/BadgeDemo.vue',
    demoPage: () => import('@/views/demos/BadgeDemo.vue'),
  },
  button: {
    label: 'Button',
    path: '/components/button',
    componentSource: `/components/UButton.vue`,
    demoSource: '/views/demos/ButtonDemo.vue',
    demoPage: () => import('@/views/demos/ButtonDemo.vue'),
  },
  card: {
    label: 'Card',
    path: '/components/card',
    componentSource: `/components/UCard.vue`,
    demoSource: '/views/demos/CardDemo.vue',
    demoPage: () => import('@/views/demos/CardDemo.vue'),
  },
  collapse: {
    label: 'Collapse',
    path: '/components/collapse',
    componentSource: `/components/UCollapse.vue`,
    demoSource: '/views/demos/CollapseDemo.vue',
    demoPage: () => import('@/views/demos/CollapseDemo.vue'),
  },
  dropdown: {
    label: 'Dropdown',
    path: '/components/dropdown',
    componentSource: `/components/UDropdown.vue`,
    demoSource: '/views/demos/DropdownDemo.vue',
    demoPage: () => import('@/views/demos/DropdownDemo.vue'),
  },
  modal: {
    label: 'Modal',
    path: '/components/modal',
    componentSource: `/components/UModal.vue`,
    demoSource: '/views/demos/ModalDemo.vue',
    demoPage: () => import('@/views/demos/ModalDemo.vue'),
  },
  list: {
    label: 'List',
    path: '/components/list',
    componentSource: `/components/UList.vue`,
    demoSource: '/views/demos/ListDemo.vue',
    demoPage: () => import('@/views/demos/ListDemo.vue'),
  },
  loading: {
    label: 'Loading',
    path: '/components/loading',
    componentSource: `/components/ULoading.vue`,
    demoSource: '/views/demos/LoadingDemo.vue',
    demoPage: () => import('@/views/demos/LoadingDemo.vue'),
  },
  stat: {
    label: 'Stat',
    path: '/components/stat',
    componentSource: `/components/UStat.vue`,
    demoSource: '/views/demos/StatDemo.vue',
    demoPage: () => import('@/views/demos/StatDemo.vue'),
  },
  tabs: {
    label: 'Tabs',
    path: '/components/tab',
    componentSource: `/components/UTabs.vue`,
    demoSource: '/views/demos/TabsDemo.vue',
    demoPage: () => import('@/views/demos/TabsDemo.vue'),
  },
  tooltip: {
    label: 'Tooltip',
    path: '/components/tooltip',
    componentSource: `/components/UTooltip.vue`,
    demoSource: '/views/demos/TooltipDemo.vue',
    demoPage: () => import('@/views/demos/TooltipDemo.vue'),
  },
} as const satisfies Record<string, ComponentItem>

export type ComponentId = keyof typeof COMPONENTS
