<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import URange, { type RangeColor, type RangeSize } from '@/components/URange.vue'

const RANGE_COLORS: RangeColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
]

const RANGE_SIZES: RangeSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const value = ref(50)
const stepValue = ref(25)
const customValue = ref(0)
</script>

<template>
  <LayoutDemo id="range">
    <div class="my-4">
      <h3 class="mb-2">Basic Range with v-model</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <URange v-model="value" />
        <span>Value: {{ value }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Steps</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <URange v-model="stepValue" :min="0" :max="100" :step="25" />
        <span>Value: {{ stepValue }} (step: 25)</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Custom Min/Max</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <URange :min="-50" :max="50" v-model="customValue" />
        <span>Range: -50 to 50; value: {{ customValue }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <div v-for="color in RANGE_COLORS" :key="color" class="flex items-center gap-2">
          <URange :color="color" :model-value="60" class="flex-1" />
          <span class="w-20">{{ color }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <div v-for="size in RANGE_SIZES" :key="size" class="flex items-center gap-2">
          <URange :size="size" :model-value="50" class="flex-1" />
          <span class="w-12">{{ size }}</span>
        </div>
      </div>
    </div>
  </LayoutDemo>
</template>
