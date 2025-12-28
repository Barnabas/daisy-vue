<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UToggle, { type ToggleColor, type ToggleSize } from '@/components/UToggle.vue'

const TOGGLE_COLORS: ToggleColor[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'success',
  'warning',
  'info',
  'error',
]

const TOGGLE_SIZES: ToggleSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const enabled = ref(false)
const colorToggles = ref<Record<string, boolean>>({})
const sizeToggles = ref<Record<string, boolean>>({})
</script>

<template>
  <LayoutDemo id="toggle">
    <div class="my-4">
      <h3 class="mb-2">Basic Toggle with v-model</h3>
      <div class="flex items-center gap-2">
        <UToggle v-model="enabled" />
        <span>Enabled: {{ enabled }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="color in TOGGLE_COLORS" :key="color" class="flex items-center gap-2">
          <UToggle v-model="colorToggles[color]" :color="color" />
          <span>{{ color }}</span>
        </label>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="size in TOGGLE_SIZES" :key="size" class="flex items-center gap-2">
          <UToggle v-model="sizeToggles[size]" :size="size" />
          <span>{{ size }}</span>
        </label>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Labels</h3>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2">
          <UToggle color="primary" />
          <span>Enable notifications</span>
        </label>
        <label class="flex items-center gap-2">
          <UToggle color="secondary" />
          <span>Dark mode</span>
        </label>
        <label class="flex items-center gap-2">
          <UToggle color="accent" />
          <span>Auto-save</span>
        </label>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator</h3>
      <div class="flex items-center gap-2">
        <UToggle required validator validator-hint="This setting must be enabled" />
      </div>
    </div>
  </LayoutDemo>
</template>
