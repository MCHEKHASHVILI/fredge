<script>
import { mapActions, mapGetters } from 'vuex'
import MainLayout from '@/layouts/mainLayout.vue'
import BaseInput from '@/components/formComponents/BaseInput.vue'
import Submit from '@/components/formComponents/Submit.vue'

export default {
  components: { MainLayout, BaseInput, Submit },
  computed: { ...mapGetters('companies', [ 'company' ]) },
  methods: { ...mapActions('companies', [ 'store' ] ) },
}
</script>
<template>
  <main-layout>
    <form @submit.prevent="store">
      <div class="mb-6">
        <BaseInput type="text" v-model="company.name" label="კომპანიის დასახელება"/>
      </div>
      <div class="mb-6">
        <BaseInput type="text" v-model="company.license" label="საიდენტიფიკაციო კოდი"/>
      </div>
      <div class="mb-6">
        <BaseInput type="email" v-model="company.email" label="Email"/>
      </div>
      <div class="mb-6">
        <BaseInput type="text" v-model="company.address" label="მისამართი"/>
      </div>
      <Submit />>
    </form>
  </main-layout>
</template>
