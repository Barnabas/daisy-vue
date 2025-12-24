<script setup lang="ts">
import { computed } from 'vue'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

type AlertProps = {
  type?: AlertType
}

const props = defineProps<AlertProps>()

const TYPE_CLASSES: Record<AlertType, string> = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

const TYPE_ICON_PATHS: Record<AlertType, string> = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning:
    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
}

const classNames = computed(() => ['alert', props.type ? TYPE_CLASSES[props.type] : ''])
</script>

<template>
  <div :class="classNames">
    <slot name="icon">
      <svg
        v-if="props.type"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current shrink-0 size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="TYPE_ICON_PATHS[props.type]"
        ></path>
      </svg>
    </slot>
    <slot />
  </div>
</template>
