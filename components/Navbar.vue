
<template>
    <header class="">
        <nav class="sticky top-0 left-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
            <div
                class="relative flex flex-wrap items-center justify-start gap-5 p-4 mx-auto max-w-screen-2xl lg:px-16 md:justify-normal">
                <a href="#" class="flex items-center gap-2">
                    <img src="../assets/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Qualyval </span><span class="hidden sm:inline" > =</span>
                    <span class="hidden text-xl font-medium text-gray-500 sm:inline">Quality and value</span>
                </a>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { initCollapses } from 'flowbite';
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

onMounted(() => {
    initCollapses()
})
</script>

<style lang="scss" scoped></style>