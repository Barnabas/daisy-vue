<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UTextarea, { type TextareaColor, type TextareaSize } from '@/components/UTextarea.vue'

const TEXTAREA_COLORS: TextareaColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const TEXTAREA_SIZES: TextareaSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const content = ref('')
</script>

<template>
  <LayoutDemo id="textarea">
    <div class="my-4">
      <h3 class="mb-2">Basic Textarea with v-model</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UTextarea v-model="content" placeholder="Write your message..." />
        <span>Length: {{ content.length }} characters</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
        <UTextarea
          v-for="color in TEXTAREA_COLORS"
          :key="color"
          :color="color"
          :placeholder="color"
        />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UTextarea v-for="size in TEXTAREA_SIZES" :key="size" :size="size" :placeholder="size" />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Ghost Style</h3>
      <div class="max-w-md">
        <UTextarea ghost placeholder="Ghost textarea" />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator</h3>
      <div class="max-w-md">
        <UTextarea
          required
          placeholder="Required message"
          validator
          validator-hint="Please enter at least 10 characters"
        />
      </div>
    </div>
  </LayoutDemo>
</template>
