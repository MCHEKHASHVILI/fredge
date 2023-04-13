<script setup>
import TopBar from '../components/TopBar.vue';
import Sidebar from '../components/Sidebar.vue';

</script>
<template>
    <TopBar />

    <Sidebar />

    <main class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <slot />
        </div>
    </main>
</template>