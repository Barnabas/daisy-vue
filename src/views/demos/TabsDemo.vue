<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UTabs from '@/components/UTabs.vue'
import UTab from '@/components/UTab.vue'

const currentTab = ref('tab1')
</script>

<template>
  <LayoutDemo id="tabs">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2>Default</h2>
        <UTabs v-model="currentTab">
          <UTab value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </UTab>
          <UTab value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </UTab>
          <UTab value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </UTab>
        </UTabs>
      </div>

      <div>
        <h2>Bordered</h2>
        <UTabs variant="bordered" v-model="currentTab">
          <UTab value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </UTab>
          <UTab value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </UTab>
          <UTab value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </UTab>
        </UTabs>
      </div>

      <div>
        <h2>Lifted</h2>
        <UTabs variant="lifted" v-model="currentTab">
          <UTab value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </UTab>
          <UTab value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </UTab>
          <UTab value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </UTab>
        </UTabs>
      </div>

      <div>
        <h2>Boxed</h2>
        <UTabs variant="boxed" v-model="currentTab">
          <UTab value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </UTab>
          <UTab value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </UTab>
          <UTab value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </UTab>
        </UTabs>
      </div>

      <div>
        <h2>Sizes</h2>
        <div class="space-y-4">
          <UTabs size="xs" v-model="currentTab">
            <UTab value="tab1" title="Extra Small">
              <p>XS content</p>
            </UTab>
            <UTab value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </UTab>
          </UTabs>

          <UTabs size="sm" v-model="currentTab">
            <UTab value="tab1" title="Small">
              <p>SM content</p>
            </UTab>
            <UTab value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </UTab>
          </UTabs>

          <UTabs size="md" v-model="currentTab">
            <UTab value="tab1" title="Medium">
              <p>MD content</p>
            </UTab>
            <UTab value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </UTab>
          </UTabs>

          <UTabs size="lg" v-model="currentTab">
            <UTab value="tab1" title="Large">
              <p>LG content</p>
            </UTab>
            <UTab value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </UTab>
          </UTabs>
        </div>
      </div>

      <div>
        <h2>Custom Title (Slot)</h2>
        <UTabs variant="bordered" v-model="currentTab">
          <UTab value="tab1">
            <template #title>
              <span>🏠 Home</span>
            </template>
            <p>Welcome home!</p>
          </UTab>
          <UTab value="tab2">
            <template #title>
              <span>📄 Documents</span>
            </template>
            <p>Your documents are here.</p>
          </UTab>
          <UTab value="tab3">
            <template #title>
              <span>⚙️ Settings</span>
            </template>
            <p>Adjust your settings.</p>
          </UTab>
        </UTabs>
      </div>
    </div>
  </LayoutDemo>
</template>
