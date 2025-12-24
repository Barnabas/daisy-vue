<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import BaseTabItem from '@/components/BaseTabItem.vue'

const currentTab = ref('tab1')
</script>

<template>
  <LayoutDemo id="tabs">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2>Default</h2>
        <BaseTabs v-model="currentTab">
          <BaseTabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </BaseTabItem>
          <BaseTabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </BaseTabItem>
          <BaseTabItem value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </BaseTabItem>
        </BaseTabs>
      </div>

      <div>
        <h2>Bordered</h2>
        <BaseTabs variant="bordered" v-model="currentTab">
          <BaseTabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </BaseTabItem>
          <BaseTabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </BaseTabItem>
          <BaseTabItem value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </BaseTabItem>
        </BaseTabs>
      </div>

      <div>
        <h2>Lifted</h2>
        <BaseTabs variant="lifted" v-model="currentTab">
          <BaseTabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </BaseTabItem>
          <BaseTabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </BaseTabItem>
          <BaseTabItem value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </BaseTabItem>
        </BaseTabs>
      </div>

      <div>
        <h2>Boxed</h2>
        <BaseTabs variant="boxed" v-model="currentTab">
          <BaseTabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </BaseTabItem>
          <BaseTabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </BaseTabItem>
          <BaseTabItem value="tab3" title="Disabled" disabled>
            <p>Content for Tab 3</p>
          </BaseTabItem>
        </BaseTabs>
      </div>

      <div>
        <h2>Sizes</h2>
        <div class="space-y-4">
          <BaseTabs size="xs" v-model="currentTab">
            <BaseTabItem value="tab1" title="Extra Small">
              <p>XS content</p>
            </BaseTabItem>
            <BaseTabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </BaseTabItem>
          </BaseTabs>

          <BaseTabs size="sm" v-model="currentTab">
            <BaseTabItem value="tab1" title="Small">
              <p>SM content</p>
            </BaseTabItem>
            <BaseTabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </BaseTabItem>
          </BaseTabs>

          <BaseTabs size="md" v-model="currentTab">
            <BaseTabItem value="tab1" title="Medium">
              <p>MD content</p>
            </BaseTabItem>
            <BaseTabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </BaseTabItem>
          </BaseTabs>

          <BaseTabs size="lg" v-model="currentTab">
            <BaseTabItem value="tab1" title="Large">
              <p>LG content</p>
            </BaseTabItem>
            <BaseTabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </BaseTabItem>
          </BaseTabs>
        </div>
      </div>

      <div>
        <h2>Custom Title (Slot)</h2>
        <BaseTabs variant="bordered" v-model="currentTab">
          <BaseTabItem value="tab1">
            <template #title>
              <span>🏠 Home</span>
            </template>
            <p>Welcome home!</p>
          </BaseTabItem>
          <BaseTabItem value="tab2">
            <template #title>
              <span>📄 Documents</span>
            </template>
            <p>Your documents are here.</p>
          </BaseTabItem>
          <BaseTabItem value="tab3">
            <template #title>
              <span>⚙️ Settings</span>
            </template>
            <p>Adjust your settings.</p>
          </BaseTabItem>
        </BaseTabs>
      </div>
    </div>
  </LayoutDemo>
</template>
