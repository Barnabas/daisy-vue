<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UFieldset from '@/components/UFieldset.vue'
import UInput from '@/components/UInput.vue'
import UCheckbox from '@/components/UCheckbox.vue'
import USelect from '@/components/USelect.vue'

const username = ref('')
const email = ref('')
const newsletter = ref(false)
const plan = ref('')

const planOptions = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]
</script>

<template>
  <LayoutDemo id="fieldset">
    <div class="my-4">
      <h3 class="mb-2">Basic Fieldset</h3>
      <UFieldset legend="Account Information">
        <div class="flex flex-col gap-2">
          <UInput v-model="username" placeholder="Username" />
          <UInput v-model="email" type="email" placeholder="Email" />
        </div>
      </UFieldset>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Fieldset with Description</h3>
      <UFieldset legend="Preferences" description="These settings affect your account experience.">
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-2">
            <UCheckbox v-model="newsletter" />
            <span>Subscribe to newsletter</span>
          </label>
          <USelect v-model="plan" :options="planOptions" placeholder="Select a plan" />
        </div>
      </UFieldset>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Multiple Fieldsets</h3>
      <div class="flex flex-col gap-4">
        <UFieldset legend="Personal Details">
          <UInput placeholder="Full Name" />
        </UFieldset>
        <UFieldset legend="Contact Information" description="We'll never share your details.">
          <UInput type="email" placeholder="Email Address" />
        </UFieldset>
      </div>
    </div>
  </LayoutDemo>
</template>
