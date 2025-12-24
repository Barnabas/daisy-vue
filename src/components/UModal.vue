<script setup lang="ts">
import { computed, ref } from 'vue'

export type ModalPlacement = 'top' | 'middle' | 'bottom' | 'start' | 'end'

const PLACEMENT_CLASSES: Record<ModalPlacement, string> = {
  top: 'modal-top',
  middle: 'modal-middle',
  bottom: 'modal-bottom',
  start: 'modal-start',
  end: 'modal-end',
}

type ModalProps = {
  title?: string
  placement?: ModalPlacement
  closeOnClickOutside?: boolean
}

const props = defineProps<ModalProps>()

const dialog = ref<HTMLDialogElement | null>(null)

const classNames = computed(() => [
  'modal',
  props.placement ? PLACEMENT_CLASSES[props.placement] : '',
])

const open = () => {
  dialog.value?.showModal()
}

const close = () => {
  dialog.value?.close()
}

defineExpose({ open, close })
</script>

<template>
  <dialog ref="dialog" :class="classNames">
    <div class="modal-box">
      <h3 v-if="props.title" class="font-bold text-lg">{{ props.title }}</h3>

      <slot />

      <div v-if="$slots.action" class="modal-action">
        <slot name="action" />
      </div>
    </div>
    <form v-if="props.closeOnClickOutside" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
