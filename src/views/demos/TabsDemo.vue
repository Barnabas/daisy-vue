<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import Tabs from '@/components/Tabs.vue'
import TabItem from '@/components/TabItem.vue'

const defaultTab = ref('tab1')
const borderedTab = ref('tab1')
const liftedTab = ref('tab2')
const boxedTab = ref('tab3')
const sizeTab = ref('tab1')
const customTab = ref('tab1')
</script>

<template>
  <LayoutDemo id="tabs">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2>Default Tabs</h2>
        <Tabs v-model="defaultTab">
          <TabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </TabItem>
          <TabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </TabItem>
          <TabItem value="tab3" title="Tab 3">
            <p>Content for Tab 3</p>
          </TabItem>
        </Tabs>
      </div>

      <div>
        <h2>Bordered Tabs</h2>
        <Tabs variant="bordered" v-model="borderedTab">
          <TabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </TabItem>
          <TabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </TabItem>
          <TabItem value="tab3" title="Tab 3">
            <p>Content for Tab 3</p>
          </TabItem>
        </Tabs>
      </div>

      <div>
        <h2>Lifted Tabs</h2>
        <Tabs variant="lifted" v-model="liftedTab">
          <TabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </TabItem>
          <TabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </TabItem>
          <TabItem value="tab3" title="Tab 3">
            <p>Content for Tab 3</p>
          </TabItem>
        </Tabs>
      </div>

      <div>
        <h2>Boxed Tabs</h2>
        <Tabs variant="boxed" v-model="boxedTab">
          <TabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </TabItem>
          <TabItem value="tab2" title="Tab 2">
            <p>Content for Tab 2</p>
          </TabItem>
          <TabItem value="tab3" title="Tab 3">
            <p>Content for Tab 3</p>
          </TabItem>
        </Tabs>
      </div>

      <div>
        <h2>Sizes</h2>
        <div class="space-y-4">
          <Tabs size="xs" v-model="sizeTab">
            <TabItem value="tab1" title="Extra Small">
              <p>XS content</p>
            </TabItem>
            <TabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </TabItem>
          </Tabs>

          <Tabs size="sm" v-model="sizeTab">
            <TabItem value="tab1" title="Small">
              <p>SM content</p>
            </TabItem>
            <TabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </TabItem>
          </Tabs>

          <Tabs size="md" v-model="sizeTab">
            <TabItem value="tab1" title="Medium">
              <p>MD content</p>
            </TabItem>
            <TabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </TabItem>
          </Tabs>

          <Tabs size="lg" v-model="sizeTab">
            <TabItem value="tab1" title="Large">
              <p>LG content</p>
            </TabItem>
            <TabItem value="tab2" title="Tab 2">
              <p>Tab 2 content</p>
            </TabItem>
          </Tabs>
        </div>
      </div>

      <div>
        <h2>With Disabled Tab</h2>
        <Tabs v-model="defaultTab">
          <TabItem value="tab1" title="Tab 1">
            <p>Content for Tab 1</p>
          </TabItem>
          <TabItem value="tab2" title="Disabled" disabled>
            <p>This tab is disabled</p>
          </TabItem>
          <TabItem value="tab3" title="Tab 3">
            <p>Content for Tab 3</p>
          </TabItem>
        </Tabs>
      </div>

      <div>
        <h2>Custom Title (Slot)</h2>
        <Tabs variant="bordered" v-model="customTab">
          <TabItem value="tab1">
            <template #title>
              <span>🏠 Home</span>
            </template>
            <p>Welcome home!</p>
          </TabItem>
          <TabItem value="tab2">
            <template #title>
              <span>📄 Documents</span>
            </template>
            <p>Your documents are here.</p>
          </TabItem>
          <TabItem value="tab3">
            <template #title>
              <span>⚙️ Settings</span>
            </template>
            <p>Adjust your settings.</p>
          </TabItem>
        </Tabs>
      </div>
    </div>
  </LayoutDemo>
</template>
