// This file is used to create navigation, routes, and fill in the demo layout header

type ComponentItem = {
  id: string // will be route name
  label: string // human-readable label
  path: string // route to the demo page and also the daisyUI page
  demoPath: string // file of the demo page
  sourcePath: string // link to the source file of the component
}

export const SOURCE_LINK_ROOT = 'https://github.com/Barnabas/daisy-vue/blob/main/src'

export const COMPONENT_LIST: ComponentItem[] = [
  {
    id: 'accordion',
    label: 'Accordion',
    path: '/components/accordion',
    demoPath: '/views/demos/AccordionDemo.vue',
    sourcePath: `/components/Accordion.vue`,
  },
  {
    id: 'alert',
    label: 'Alert',
    path: '/components/alert',
    demoPath: '/views/demos/AlertDemo.vue',
    sourcePath: `/components/Alert.vue`,
  },
  {
    id: 'button',
    label: 'Button',
    path: '/components/button',
    demoPath: '/views/demos/ButtonDemo.vue',
    sourcePath: `/components/Button.vue`,
  },
  {
    id: 'dropdown',
    label: 'Dropdown',
    path: '/components/dropdown',
    demoPath: '/views/demos/DropdownDemo.vue',
    sourcePath: `/components/Dropdown.vue`,
  },
] as const
