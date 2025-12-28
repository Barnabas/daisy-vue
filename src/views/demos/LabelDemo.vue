<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import ULabel from '@/components/ULabel.vue'
import UInput from '@/components/UInput.vue'

const username = ref('')
const email = ref('')
const floatingValue = ref('')
</script>

<template>
  <LayoutDemo id="label">
    <div class="my-4">
      <h3 class="mb-2">Basic Label</h3>
      <ULabel title="Username">
        <UInput v-model="username" type="text" placeholder="Enter username" />
      </ULabel>
      <p class="mt-1 text-sm">Value: {{ username }}</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Label with Slots</h3>
      <ULabel>
        <template #before>
          <span class="text-primary">Email Address</span>
        </template>
        <UInput v-model="email" type="email" placeholder="Enter email" />
        <template #after>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-12">
            <rect width="256" height="256" fill="none" />
            <path
              d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <polyline
              points="224 56 128 144 32 56"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </template>
      </ULabel>
      <p class="mt-1 text-sm">Value: {{ email }}</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Floating Label</h3>
      <ULabel title="Password" floating>
        <UInput v-model="floatingValue" type="password" placeholder="Password" />
      </ULabel>
      <p class="mt-1 text-sm">Value: {{ floatingValue }}</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Multiple Labels</h3>
      <div class="flex flex-col gap-4">
        <ULabel title="First Name">
          <UInput type="text" placeholder="John" />
        </ULabel>
        <ULabel title="Last Name">
          <UInput type="text" placeholder="Doe" />
        </ULabel>
        <ULabel title="Phone Number" floating>
          <UInput type="tel" placeholder="Phone" />
        </ULabel>
      </div>
    </div>
  </LayoutDemo>
</template>
