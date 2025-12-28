<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UDivider from '@/components/UDivider.vue'
</script>

<template>
  <LayoutDemo id="divider">
    <div class="my-4">
      <h3 class="mb-2">Basic divider:</h3>
      <p>Content above</p>
      <UDivider />
      <p>Content below</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Divider with text:</h3>
      <p>Content above</p>
      <UDivider>OR</UDivider>
      <p>Content below</p>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors:</h3>
      <UDivider color="neutral">Neutral</UDivider>
      <UDivider color="primary">Primary</UDivider>
      <UDivider color="secondary">Secondary</UDivider>
      <UDivider color="accent">Accent</UDivider>
      <UDivider color="success">Success</UDivider>
      <UDivider color="warning">Warning</UDivider>
      <UDivider color="info">Info</UDivider>
      <UDivider color="error">Error</UDivider>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Placement:</h3>
      <UDivider placement="start">Start</UDivider>
      <UDivider>Center (default)</UDivider>
      <UDivider placement="end">End</UDivider>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Horizontal with text:</h3>
      <div class="flex h-24 items-center">
        <span>Left</span>
        <UDivider direction="horizontal">OR</UDivider>
        <span>Right</span>
      </div>
    </div>
  </LayoutDemo>
</template>
