// This file is used to create navigation, routes, and fill in the demo layout header

import type { Component } from 'vue'

type ComponentSection =
  | 'actions'
  | 'data-display'
  | 'navigation'
  | 'feedback'
  | 'data-input'
  | 'layout'
  | 'mockup'

const SECTION_LABELS: Record<ComponentSection, string> = {
  actions: 'Actions',
  'data-display': 'Data Display',
  navigation: 'Navigation',
  feedback: 'Feedback',
  'data-input': 'Data Input',
  layout: 'Layout',
  mockup: 'Mockup',
}

// Ordered list of sections for consistent display
const SECTION_ORDER: ComponentSection[] = [
  'actions',
  'data-display',
  'navigation',
  'feedback',
  'data-input',
  'layout',
  'mockup',
]

type ComponentItem = {
  label: string // human-readable label
  path: string // route to the demo page and also the daisyUI page
  section: ComponentSection // category for grouping in navigation
  componentSource: string // source file of the component
  demoSource: string // source file of the demo page
  demoPage: Component
}

export const COMPONENTS = {
  accordion: {
    label: 'Accordion',
    path: '/components/accordion',
    section: 'data-display',
    componentSource: `/components/UAccordion.vue`,
    demoSource: '/views/demos/AccordionDemo.vue',
    demoPage: () => import('@/views/demos/AccordionDemo.vue'),
  },
  alert: {
    label: 'Alert',
    path: '/components/alert',
    section: 'feedback',
    componentSource: `/components/UAlert.vue`,
    demoSource: '/views/demos/AlertDemo.vue',
    demoPage: () => import('@/views/demos/AlertDemo.vue'),
  },
  badge: {
    label: 'Badge',
    path: '/components/badge',
    section: 'data-display',
    componentSource: `/components/UBadge.vue`,
    demoSource: '/views/demos/BadgeDemo.vue',
    demoPage: () => import('@/views/demos/BadgeDemo.vue'),
  },
  button: {
    label: 'Button',
    path: '/components/button',
    section: 'actions',
    componentSource: `/components/UButton.vue`,
    demoSource: '/views/demos/ButtonDemo.vue',
    demoPage: () => import('@/views/demos/ButtonDemo.vue'),
  },
  card: {
    label: 'Card',
    path: '/components/card',
    section: 'data-display',
    componentSource: `/components/UCard.vue`,
    demoSource: '/views/demos/CardDemo.vue',
    demoPage: () => import('@/views/demos/CardDemo.vue'),
  },
  collapse: {
    label: 'Collapse',
    path: '/components/collapse',
    section: 'data-display',
    componentSource: `/components/UCollapse.vue`,
    demoSource: '/views/demos/CollapseDemo.vue',
    demoPage: () => import('@/views/demos/CollapseDemo.vue'),
  },
  dropdown: {
    label: 'Dropdown',
    path: '/components/dropdown',
    section: 'actions',
    componentSource: `/components/UDropdown.vue`,
    demoSource: '/views/demos/DropdownDemo.vue',
    demoPage: () => import('@/views/demos/DropdownDemo.vue'),
  },
  list: {
    label: 'List',
    path: '/components/list',
    section: 'data-display',
    componentSource: `/components/UList.vue`,
    demoSource: '/views/demos/ListDemo.vue',
    demoPage: () => import('@/views/demos/ListDemo.vue'),
  },
  loading: {
    label: 'Loading',
    path: '/components/loading',
    section: 'feedback',
    componentSource: `/components/ULoading.vue`,
    demoSource: '/views/demos/LoadingDemo.vue',
    demoPage: () => import('@/views/demos/LoadingDemo.vue'),
  },
  menu: {
    label: 'Menu',
    path: '/components/menu',
    section: 'navigation',
    componentSource: `/components/UMenu.vue`,
    demoSource: '/views/demos/MenuDemo.vue',
    demoPage: () => import('@/views/demos/MenuDemo.vue'),
  },
  modal: {
    label: 'Modal',
    path: '/components/modal',
    section: 'actions',
    componentSource: `/components/UModal.vue`,
    demoSource: '/views/demos/ModalDemo.vue',
    demoPage: () => import('@/views/demos/ModalDemo.vue'),
  },
  progress: {
    label: 'Progress',
    path: '/components/progress',
    section: 'feedback',
    componentSource: `/components/UProgress.vue`,
    demoSource: '/views/demos/ProgressDemo.vue',
    demoPage: () => import('@/views/demos/ProgressDemo.vue'),
  },
  stat: {
    label: 'Stat',
    path: '/components/stat',
    section: 'data-display',
    componentSource: `/components/UStat.vue`,
    demoSource: '/views/demos/StatDemo.vue',
    demoPage: () => import('@/views/demos/StatDemo.vue'),
  },
  table: {
    label: 'Table',
    path: '/components/table',
    section: 'data-display',
    componentSource: `/components/UTable.vue`,
    demoSource: '/views/demos/TableDemo.vue',
    demoPage: () => import('@/views/demos/TableDemo.vue'),
  },
  tabs: {
    label: 'Tabs',
    path: '/components/tab',
    section: 'navigation',
    componentSource: `/components/UTabs.vue`,
    demoSource: '/views/demos/TabsDemo.vue',
    demoPage: () => import('@/views/demos/TabsDemo.vue'),
  },
  timeline: {
    label: 'Timeline',
    path: '/components/timeline',
    section: 'data-display',
    componentSource: `/components/UTimeline.vue`,
    demoSource: '/views/demos/TimelineDemo.vue',
    demoPage: () => import('@/views/demos/TimelineDemo.vue'),
  },
  tooltip: {
    label: 'Tooltip',
    path: '/components/tooltip',
    section: 'feedback',
    componentSource: `/components/UTooltip.vue`,
    demoSource: '/views/demos/TooltipDemo.vue',
    demoPage: () => import('@/views/demos/TooltipDemo.vue'),
  },
  checkbox: {
    label: 'Checkbox',
    path: '/components/checkbox',
    section: 'data-input',
    componentSource: `/components/UCheckbox.vue`,
    demoSource: '/views/demos/CheckboxDemo.vue',
    demoPage: () => import('@/views/demos/CheckboxDemo.vue'),
  },
  fieldset: {
    label: 'Fieldset',
    path: '/components/fieldset',
    section: 'data-input',
    componentSource: `/components/UFieldset.vue`,
    demoSource: '/views/demos/FieldsetDemo.vue',
    demoPage: () => import('@/views/demos/FieldsetDemo.vue'),
  },
  'file-input': {
    label: 'File Input',
    path: '/components/file-input',
    section: 'data-input',
    componentSource: `/components/UFileInput.vue`,
    demoSource: '/views/demos/FileInputDemo.vue',
    demoPage: () => import('@/views/demos/FileInputDemo.vue'),
  },
  label: {
    label: 'Label',
    path: '/components/label',
    section: 'data-input',
    componentSource: `/components/ULabel.vue`,
    demoSource: '/views/demos/LabelDemo.vue',
    demoPage: () => import('@/views/demos/LabelDemo.vue'),
  },
  radio: {
    label: 'Radio',
    path: '/components/radio',
    section: 'data-input',
    componentSource: `/components/URadio.vue`,
    demoSource: '/views/demos/RadioDemo.vue',
    demoPage: () => import('@/views/demos/RadioDemo.vue'),
  },
  range: {
    label: 'Range',
    path: '/components/range',
    section: 'data-input',
    componentSource: `/components/URange.vue`,
    demoSource: '/views/demos/RangeDemo.vue',
    demoPage: () => import('@/views/demos/RangeDemo.vue'),
  },
  rating: {
    label: 'Rating',
    path: '/components/rating',
    section: 'data-input',
    componentSource: `/components/URating.vue`,
    demoSource: '/views/demos/RatingDemo.vue',
    demoPage: () => import('@/views/demos/RatingDemo.vue'),
  },
  select: {
    label: 'Select',
    path: '/components/select',
    section: 'data-input',
    componentSource: `/components/USelect.vue`,
    demoSource: '/views/demos/SelectDemo.vue',
    demoPage: () => import('@/views/demos/SelectDemo.vue'),
  },
  input: {
    label: 'Input',
    path: '/components/input',
    section: 'data-input',
    componentSource: `/components/UInput.vue`,
    demoSource: '/views/demos/InputDemo.vue',
    demoPage: () => import('@/views/demos/InputDemo.vue'),
  },
  textarea: {
    label: 'Textarea',
    path: '/components/textarea',
    section: 'data-input',
    componentSource: `/components/UTextarea.vue`,
    demoSource: '/views/demos/TextareaDemo.vue',
    demoPage: () => import('@/views/demos/TextareaDemo.vue'),
  },
  toggle: {
    label: 'Toggle',
    path: '/components/toggle',
    section: 'data-input',
    componentSource: `/components/UToggle.vue`,
    demoSource: '/views/demos/ToggleDemo.vue',
    demoPage: () => import('@/views/demos/ToggleDemo.vue'),
  },
} as const satisfies Record<string, ComponentItem>

export type ComponentId = keyof typeof COMPONENTS

// Helper to group components by section
export function getComponentsBySection() {
  const grouped = new Map<ComponentSection, { id: ComponentId; item: ComponentItem }[]>()

  for (const section of SECTION_ORDER) {
    grouped.set(section, [])
  }

  for (const [id, item] of Object.entries(COMPONENTS) as [ComponentId, ComponentItem][]) {
    const section = item.section
    grouped.get(section)?.push({ id, item })
  }

  // Filter out empty sections and return as array of tuples
  return SECTION_ORDER.filter((section) => (grouped.get(section)?.length ?? 0) > 0).map(
    (section) => ({
      section,
      label: SECTION_LABELS[section],
      components: grouped.get(section)!,
    }),
  )
}
