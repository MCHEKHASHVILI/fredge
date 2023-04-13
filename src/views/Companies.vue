<script setup>
import { ref } from 'vue';
import MainLayout from '../layouts/mainLayout.vue';
import DefaultTable from '../components/tables/defaultTable.vue';
const pageTitle = ref('Companies Page')
const tableData = ref({
  fields: [ "id", "name", "license", "email",  "address" ],
  data: [
    {
      id: 1,
      name: 'company 1',
      license: '123456789',
      email: 'contact@company1.com',
      address: '0179, Sairme street, Tbilisi, Georgia',
    },
    {
      id: 2,
      name: 'company 2',
      license: '123456789',
      email: 'contact@company2.com',
      address: '0179, Sairme street, Tbilisi, Georgia',
    },
    {
      id: 3,
      name: 'company 3',
      license: '123456789',
      email: 'contact@company3.com',
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
