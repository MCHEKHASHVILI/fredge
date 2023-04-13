<script setup>
import { ref } from 'vue';
import MainLayout from '../layouts/mainLayout.vue';
import DefaultTable from '../components/tables/defaultTable.vue';
const pageTitle = ref('Products Page')
const tableData = ref({
  fields: [ "id", "name", "unit", ],
  data: [
    {
      id: 1,
      name: 'company 1',
      unit: 'ცალი',
    },
    {
      id: 2,
      name: 'company 2',
      unit: 'კგ',
    },
    {
      id: 3,
      name: 'company 3',
      unit: 'ლიტრი',
    },
  ],
})
</script>
<template>
  <main-layout>
    {{ pageTitle }}
    <default-table :fields="tableData.fields" :data="tableData.data" />
  </main-layout>
</template>
