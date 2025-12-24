<script setup lang="ts">
import { useTemplateRef } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseModal from '@/components/BaseModal.vue'

const modalOne = useTemplateRef('modalOne')
const modalTwo = useTemplateRef('modalTwo')
</script>

<template>
  <LayoutDemo id="modal">
    <div class="flex gap-4">
      <BaseButton @click="modalOne?.open()">Open Modal 1 (top)</BaseButton>
      <BaseModal ref="modalOne" title="Hello 1" placement="top">
        <p class="py-4">Press ESC key or click the button below to close</p>
        <template #action>
          <BaseButton @click="modalOne?.close()">Close</BaseButton>
        </template>
      </BaseModal>

      <BaseButton @click="modalTwo?.open()">Open Modal 2 (click outside)</BaseButton>
      <BaseModal ref="modalTwo" title="Hello 2" close-on-click-outside>
        <p class="py-4">
          Press ESC key, click outside the modal, or click the button below to close
        </p>
        <template #action>
          <BaseButton @click="modalTwo?.close()">Close</BaseButton>
        </template>
      </BaseModal>
    </div>
  </LayoutDemo>
</template>
