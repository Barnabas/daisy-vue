<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UTable from '@/components/UTable.vue'

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor' },
]
</script>

<template>
  <LayoutDemo id="table">
    <div class="grid grid-cols-1 gap-8">
      <div>
        <h3>Basic Table</h3>
        <UTable>
          <template #head>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </template>
          <tr v-for="user in users" :key="user.id">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </UTable>
      </div>

      <div>
        <h3>Zebra Table</h3>
        <UTable zebra>
          <template #head>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </template>
          <tr v-for="user in users" :key="user.id">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </UTable>
      </div>

      <div>
        <h3>Size Variations</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h4 class="text-sm opacity-60 mb-2">Extra Small (xs)</h4>
            <UTable size="xs">
              <template #head>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </template>
              <tr v-for="user in users.slice(0, 2)" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.role }}</td>
              </tr>
            </UTable>
          </div>
          <div>
            <h4 class="text-sm opacity-60 mb-2">Large (lg)</h4>
            <UTable size="lg">
              <template #head>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </template>
              <tr v-for="user in users.slice(0, 2)" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.role }}</td>
              </tr>
            </UTable>
          </div>
        </div>
      </div>

      <div>
        <h3>Pinned Rows (scroll to see effect)</h3>
        <UTable pin-rows class="h-56">
          <template #head>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </template>
          <tr v-for="n in 10" :key="n">
            <th>{{ n }}</th>
            <td>User {{ n }}</td>
            <td>user{{ n }}@example.com</td>
            <td>Role {{ n }}</td>
          </tr>
        </UTable>
      </div>
    </div>
  </LayoutDemo>
</template>
