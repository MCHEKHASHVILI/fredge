<script>
import MainLayout from '../layouts/mainLayout.vue';
import DefaultTable from '../components/tables/defaultTable.vue'
import { mapGetters } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup(){
    const route = useRoute()
    return { route }
  },
  components: { MainLayout, DefaultTable },
  computed: {
    ...mapGetters('products', [
      'fields',
      'data'
    ])
  }
}
</script>
<template>
  <main-layout>
    {{ route.meta.title }}
    <default-table :fields="fields" :data="data" />
  </main-layout>
</template>
