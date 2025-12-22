<script setup lang="ts">
import { useTemplateRef } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

const modalOne = useTemplateRef('modalOne')
const modalTwo = useTemplateRef('modalTwo')
</script>

<template>
  <LayoutDemo id="modal">
    <div class="flex gap-4">
      <Button @click="modalOne?.open()">Open Modal 1 (top)</Button>
      <Modal ref="modalOne" title="Hello 1" placement="top">
        <p class="py-4">Press ESC key or click the button below to close</p>
        <template #action>
          <Button @click="modalOne?.close()">Close</Button>
        </template>
      </Modal>

      <Button @click="modalTwo?.open()">Open Modal 2 (click outside)</Button>
      <Modal ref="modalTwo" title="Hello 2" close-on-click-outside>
        <p class="py-4">
          Press ESC key, click outside the modal, or click the button below to close
        </p>
        <template #action>
          <Button @click="modalTwo?.close()">Close</Button>
        </template>
      </Modal>
    </div>
  </LayoutDemo>
</template>
