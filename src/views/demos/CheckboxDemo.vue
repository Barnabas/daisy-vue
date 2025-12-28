<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UCheckbox, { type CheckboxColor, type CheckboxSize } from '@/components/UCheckbox.vue'

const CHECKBOX_COLORS: CheckboxColor[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'success',
  'warning',
  'info',
  'error',
]

const CHECKBOX_SIZES: CheckboxSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const checked = ref(false)
const colorChecks = ref<Record<string, boolean>>({})
const sizeChecks = ref<Record<string, boolean>>({})
</script>

<template>
  <LayoutDemo id="checkbox">
    <div class="my-4">
      <h3 class="mb-2">Basic Checkbox with v-model</h3>
      <label class="flex items-center gap-2">
        <UCheckbox v-model="checked" />
        <span>Checked: {{ checked }}</span>
      </label>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="color in CHECKBOX_COLORS" :key="color" class="flex items-center gap-2">
          <UCheckbox v-model="colorChecks[color]" :color="color" />
          <span>{{ color }}</span>
        </label>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="size in CHECKBOX_SIZES" :key="size" class="flex items-center gap-2">
          <UCheckbox v-model="sizeChecks[size]" :size="size" />
          <span>{{ size }}</span>
        </label>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator</h3>
      <div class="flex items-center gap-2">
        <UCheckbox
          v-model="checked"
          required
          validator
          validator-hint="Please check this box to continue"
        />
      </div>
    </div>
  </LayoutDemo>
</template>
