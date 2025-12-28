<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import URadio, { type RadioColor, type RadioSize } from '@/components/URadio.vue'

const RADIO_COLORS: RadioColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
]

const RADIO_SIZES: RadioSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const selected = ref('option1')
const colorSelected = ref('')
const sizeSelected = ref('')
</script>

<template>
  <LayoutDemo id="radio">
    <div class="my-4">
      <h3 class="mb-2">Basic Radio with v-model</h3>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2">
          <URadio v-model="selected" name="basic" value="option1" />
          <span>Option 1</span>
        </label>
        <label class="flex items-center gap-2">
          <URadio v-model="selected" name="basic" value="option2" />
          <span>Option 2</span>
        </label>
        <label class="flex items-center gap-2">
          <URadio v-model="selected" name="basic" value="option3" />
          <span>Option 3</span>
        </label>
      </div>
      <p class="mt-2">Selected: {{ selected }}</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="color in RADIO_COLORS" :key="color" class="flex items-center gap-2">
          <URadio v-model="colorSelected" name="colors" :value="color" :color="color" />
          <span>{{ color }}</span>
        </label>
      </div>
      <p class="mt-2">Selected color: {{ colorSelected || 'none' }}</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-wrap gap-4 items-center">
        <label v-for="size in RADIO_SIZES" :key="size" class="flex items-center gap-2">
          <URadio v-model="sizeSelected" name="sizes" :value="size" :size="size" />
          <span>{{ size }}</span>
        </label>
      </div>
      <p class="mt-2">Selected size: {{ sizeSelected || 'none' }}</p>
    </div>
  </LayoutDemo>
</template>
