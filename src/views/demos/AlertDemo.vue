<script setup lang="ts">
import Alert from '@/components/Alert.vue'
</script>

<template>
  <section>
    <h1>Alert</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Alert type="info">
        <span>This is an info alert</span>
      </Alert>
      <Alert type="success">
        <span>This is a success alert</span>
      </Alert>
      <Alert type="warning">
        <span>This is a warning alert</span>
      </Alert>
      <Alert type="error">
        <span>This is an error alert</span>
      </Alert>
    </div>
  </section>
</template>
