<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseAlert, { type AlertType } from '@/components/BaseAlert.vue'

const ALERT_TYPES: AlertType[] = ['info', 'success', 'warning', 'error']
</script>

<template>
  <LayoutDemo id="alert">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <BaseAlert v-for="type in ALERT_TYPES" :type>
        <span>This is alert type {{ type }}</span>
      </BaseAlert>
    </div>
  </LayoutDemo>
</template>
