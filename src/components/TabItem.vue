<script setup lang="ts">
import { inject, type Ref } from 'vue'

const props = defineProps<{
  value: string | number
  title?: string
  disabled?: boolean
}>()

const TabsRoot = inject<{
  model: Ref<string | number | undefined>
  tabsInputName: string
}>('TabsRoot')
</script>

<template>
  <label class="tab">
    <input
      type="radio"
      :name="TabsRoot?.tabsInputName"
      :value="props.value"
      v-model="TabsRoot!.model.value"
      :disabled
    />
    <slot name="title">{{ props.title }}</slot>
  </label>
  <div class="tab-content">
    <slot />
  </div>
</template>
