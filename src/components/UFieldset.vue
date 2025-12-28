<script setup lang="ts">
type FieldsetProps = {
  legend?: string
  description?: string
}

defineProps<FieldsetProps>()
</script>

<template>
  <fieldset class="fieldset">
    <legend v-if="legend" class="fieldset-legend">{{ legend }}</legend>
    <slot />
    <p v-if="description" class="label">{{ description }}</p>
  </fieldset>
</template>
