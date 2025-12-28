<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import USteps from '@/components/USteps.vue'
import UStep, { type StepColor } from '@/components/UStep.vue'

// 'info', 'success', 'warning', 'error'
const steps: { label: string; completed: boolean; color: StepColor }[] = [
  { label: 'Register', completed: true, color: 'info' },
  { label: 'Choose plan', completed: true, color: 'success' },
  { label: 'Purchase', completed: false, color: 'warning' },
  { label: 'Receive Product', completed: false, color: 'error' },
]
</script>

<template>
  <LayoutDemo id="steps">
    <div class="space-y-12">
      <div>
        <h3>Basic Steps (Horizontal)</h3>
        <USteps>
          <UStep
            v-for="(step, index) in steps"
            :key="index"
            :color="step.completed ? 'primary' : undefined"
          >
            {{ step.label }}
          </UStep>
        </USteps>
      </div>

      <div>
        <h3>Vertical Steps</h3>
        <USteps direction="vertical">
          <UStep
            v-for="(step, index) in steps"
            :key="index"
            :color="step.completed ? 'primary' : undefined"
          >
            {{ step.label }}
          </UStep>
        </USteps>
      </div>

      <div>
        <h3>Responsive Steps</h3>
        <USteps direction="responsive">
          <UStep
            v-for="(step, index) in steps"
            :key="index"
            :color="step.completed ? 'primary' : undefined"
          >
            {{ step.label }}
          </UStep>
        </USteps>
      </div>

      <div>
        <h3>Steps with Data Content</h3>
        <USteps>
          <UStep
            v-for="(step, index) in steps"
            :key="index"
            :color="step.completed ? 'primary' : undefined"
            :content="step.completed ? '✓' : index === 2 ? '✕' : '!'"
          >
            {{ step.label }}
          </UStep>
        </USteps>
      </div>

      <div>
        <h3>Steps with Different Colors</h3>
        <USteps>
          <UStep v-for="(step, index) in steps" :key="index" :color="step.color">
            {{ step.label }}
          </UStep>
        </USteps>
      </div>

      <div>
        <h3>Scrollable Horizontal Steps</h3>
        <USteps class="overflow-x-auto max-w-60">
          <UStep color="primary">Start</UStep>
          <UStep color="primary">Step 2</UStep>
          <UStep color="primary">Step 3</UStep>
          <UStep color="primary">Step 4</UStep>
          <UStep color="primary">Step 5</UStep>
          <UStep color="primary">Step 6</UStep>
          <UStep>Step 7</UStep>
          <UStep>Step 8</UStep>
          <UStep>End</UStep>
        </USteps>
      </div>
    </div>
  </LayoutDemo>
</template>
