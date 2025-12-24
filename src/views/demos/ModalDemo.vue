<script setup lang="ts">
import { useTemplateRef } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UButton from '@/components/UButton.vue'
import UModal from '@/components/UModal.vue'

const modalOne = useTemplateRef('modalOne')
const modalTwo = useTemplateRef('modalTwo')
</script>

<template>
  <LayoutDemo id="modal">
    <div class="flex gap-4">
      <UButton @click="modalOne?.open()">Open Modal 1 (top)</UButton>
      <UModal ref="modalOne" title="Hello 1" placement="top">
        <p class="py-4">Press ESC key or click the button below to close</p>
        <template #action>
          <UButton @click="modalOne?.close()">Close</UButton>
        </template>
      </UModal>

      <UButton @click="modalTwo?.open()">Open Modal 2 (click outside)</UButton>
      <UModal ref="modalTwo" title="Hello 2" close-on-click-outside>
        <p class="py-4">
          Press ESC key, click outside the modal, or click the button below to close
        </p>
        <template #action>
          <UButton @click="modalTwo?.close()">Close</UButton>
        </template>
      </UModal>
    </div>
  </LayoutDemo>
</template>
