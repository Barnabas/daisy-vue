<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UInput, { type InputColor, type InputSize, type InputType } from '@/components/UInput.vue'

const INPUT_COLORS: InputColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const INPUT_SIZES: InputSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
const INPUT_TYPES: InputType[] = [
  'text',
  'password',
  'email',
  'number',
  'tel',
  'url',
  'search',
  'date',
]

const textValue = ref('')
const numberValue = ref(0)
</script>

<template>
  <LayoutDemo id="input">
    <div class="my-4">
      <h3 class="mb-2">Basic Input with v-model</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UInput v-model="textValue" placeholder="Type something..." />
        <span>Value: {{ textValue }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Number Input</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UInput v-model="numberValue" type="number" placeholder="Enter a number" />
        <span>Value: {{ numberValue }} (type: {{ typeof numberValue }})</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Input Types</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <div v-for="type in INPUT_TYPES" :key="type" class="flex items-center gap-2">
          <UInput :type="type" :placeholder="type" class="flex-1" />
          <span class="w-24">{{ type }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UInput v-for="color in INPUT_COLORS" :key="color" :color="color" :placeholder="color" />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-col gap-2 max-w-md">
        <UInput v-for="size in INPUT_SIZES" :key="size" :size="size" :placeholder="size" />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Ghost Style</h3>
      <div class="max-w-md">
        <UInput ghost placeholder="Ghost input" />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator</h3>
      <div class="max-w-md">
        <UInput
          type="email"
          placeholder="Enter your email"
          validator
          validator-hint="Please enter a valid email address"
          required
        />
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Pattern Validation</h3>
      <p class="text-sm mb-2">Must be 3 or more characters, letters only.</p>
      <div class="max-w-md">
        <UInput
          placeholder="Enter username"
          validator
          validator-hint="Username must be at least 3 letters"
          required
          minlength="3"
          pattern="[A-Za-z]+"
        />
      </div>
    </div>
  </LayoutDemo>
</template>
