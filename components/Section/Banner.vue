<template>
    <section class="my-20">
        <div class="flex flex-col items-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold text-center sm:text-4xl">Manage your processes and integrate all your tools in one place</h2>
            <p class="max-w-xl mt-5 text-sm font-medium text-center text-gray-500 ">You can connect the tools you use today-and tomorrow-with Zapier since it supports most apps than any other platform</p>
        </div>
        <img src="../../assets/images/banner.png" alt="" class="w-full my-5">
        <button type="button"
            class="flex items-center gap-2 px-5 py-3 mx-auto mt-10 text-sm font-medium text-white rounded-md focus:outline-none bg-primary-500">See more templates
            <Cog6ToothIcon class="w-5 h-5" />
        </button>
    </section>
</template>

<script setup>
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
</script>