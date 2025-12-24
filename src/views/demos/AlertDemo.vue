<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UAlert, { type AlertType } from '@/components/UAlert.vue'

const ALERT_TYPES: AlertType[] = ['info', 'success', 'warning', 'error']
</script>

<template>
  <LayoutDemo id="alert">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <UAlert v-for="type in ALERT_TYPES" :type>
        <span>This is alert type {{ type }}</span>
      </UAlert>
    </div>
  </LayoutDemo>
</template>
