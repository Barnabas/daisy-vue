<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UTooltip, { type TooltipColor, type TooltipPosition } from '@/components/UTooltip.vue'
import UButton from '@/components/UButton.vue'

const TOOLTIP_COLORS: TooltipColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const TOOLTIP_POSITIONS: TooltipPosition[] = ['top', 'bottom', 'left', 'right']
</script>

<template>
  <LayoutDemo id="tooltip">
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Basic:</h3>
      <UTooltip title="This is a tooltip">
        <UButton>Hover me</UButton>
      </UTooltip>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Colors:</h3>
      <UTooltip v-for="color in TOOLTIP_COLORS" :key="color" :color :title="color">
        <UButton :color>{{ color }}</UButton>
      </UTooltip>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Positions:</h3>
      <UTooltip
        v-for="position in TOOLTIP_POSITIONS"
        :key="position"
        :position
        :title="`Tooltip ${position}`"
      >
        <UButton>{{ position }}</UButton>
      </UTooltip>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Force Open:</h3>
      <UTooltip title="Always visible" open position="right">
        <UButton>Always showing</UButton>
      </UTooltip>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Slot Title:</h3>
      <UTooltip>
        <template #title> <strong>Custom</strong> HTML <em>content</em> </template>
        <UButton color="primary">Custom content</UButton>
      </UTooltip>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">On Text:</h3>
      <p>
        You can use tooltips on
        <UTooltip title="Tooltip on text" color="primary">
          <span class="underline cursor-help">any element</span>
        </UTooltip>
        in your content.
      </p>
    </div>
  </LayoutDemo>
</template>
