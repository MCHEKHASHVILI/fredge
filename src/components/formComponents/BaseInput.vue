<script setup>
defineProps({
    type: {
        type: [ String, Boolean ],
        default: 'text'
    },
    label: {
        type: [ String, Boolean ],
        default: false
    },
    modelValue: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <label v-if="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input :class="[
        'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
        'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
        'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
        'dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
    ]" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>