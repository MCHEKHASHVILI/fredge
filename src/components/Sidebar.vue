<script setup>
import { ref } from 'vue'
import defaultIcon from '../components/icons/defaultIcon.vue'

const menuItems = ref([
    { icon: defaultIcon, title: 'მთავარი', routeName: 'Home' },
    { icon: defaultIcon, title: 'შეკვეთები', routeName: 'Orders' },
    { icon: defaultIcon, title: 'ახალი შეკვეთა', routeName: 'Orders Create' },
    { icon: defaultIcon, title: 'კონტრაგენტები', routeName: 'Companies' },
    { icon: defaultIcon, title: 'კონტრაგენტის დამატება', routeName: 'Companies Create' },
    { icon: defaultIcon, title: 'ნომენკლატურები', routeName: 'Products' },
    { icon: defaultIcon, title: 'ნომენკლატურის დამატება', routeName: 'Products Create' },
])
</script>
<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li v-for="item in menuItems">
                    <router-link :to="{ name: item.routeName }"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <component :is="{...item.icon}"></component>
                        <span class="ml-3">{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>