<script setup>
import { ref } from 'vue';
import MainLayout from '../layouts/mainLayout.vue';
import DefaultTable from '../components/tables/defaultTable.vue';
const pageTitle = ref('Orders Page')
const tableData = ref({
  fields: [ "id", "date", "customer", "address" ],
  data: [
    {
      id: 1,
      date: new Date().toDateString(),
      customer: 'Sesili',
      address: '0179, Sairme street, Tbilisi, Georgia',
    },
    {
      id: 2,
      date: new Date().toDateString(),
      customer: 'Vesili',
      address: '0179, Sairme street, Tbilisi, Georgia',
    },
    {
      id: 3,
      date: new Date().toDateString(),
      customer: 'Mesili',
      address: '0179, Sairme street, Tbilisi, Georgia',
    },
    {
      id: 4,
      date: new Date().toDateString(),
      customer: 'Asisi',
      address: '0179, Sairme street, Tbilisi, Georgia',
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

