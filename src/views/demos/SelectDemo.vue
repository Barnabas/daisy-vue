<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import USelect, { type SelectColor, type SelectSize } from '@/components/USelect.vue'

const SELECT_COLORS: SelectColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const SELECT_SIZES: SelectSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const selected = ref('')
const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
]

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia', disabled: true },
]
</script>

<template>
  <LayoutDemo id="select">
    <div class="my-4">
      <h3 class="mb-2">Basic Select with v-model</h3>
      <div class="flex flex-col gap-2">
        <USelect v-model="selected" :options="fruitOptions" placeholder="Pick a fruit" />
        <span>Selected: {{ selected || 'none' }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Disabled Option</h3>
      <USelect :options="countryOptions" placeholder="Select a country" />
    </div>

    <div class="my-4">
      <h3 class="mb-2">Using Slot for Options</h3>
      <USelect placeholder="Choose a number">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </USelect>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-wrap gap-2">
        <USelect
          v-for="color in SELECT_COLORS"
          :key="color"
          :color="color"
          :options="[{ value: color, label: color }]"
          :model-value="color"
        />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-wrap gap-2 items-center">
        <USelect
          v-for="size in SELECT_SIZES"
          :key="size"
          :size="size"
          :options="[{ value: size, label: size }]"
          :model-value="size"
        />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Ghost Style</h3>
      <USelect :options="fruitOptions" placeholder="Ghost select" ghost />
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator</h3>
      <USelect
        :options="fruitOptions"
        placeholder="Required field"
        validator
        validator-hint="Please select an option"
        required
      />
    </div>
  </LayoutDemo>
</template>
