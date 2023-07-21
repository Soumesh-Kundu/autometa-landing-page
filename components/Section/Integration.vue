<template>
    <section class="max-w-screen-xl px-4 py-10 mx-auto sm:px-16">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold text-center sm:text-4xl">Let's integrate your work with other applications that run
                automatically</h2>

            <form class="flex flex-col items-center gap-4 mx-auto mt-5 sm:w-3/5 sm:flex-row">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">

                    <input type="text" id="voice-search"
                        class="block w-full py-3.5 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-black focus:ring-0 placeholde:font-semibold"
                        placeholder="Search automation" required>
                </div>
                <button type="submit"
                    class="inline-flex items-center px-5 py-3.5 ml-2 text-sm font-medium text-white border rounded-lg bg-neutral-700">Search
                </button>
            </form>
            <div class="w-full mx-auto overflow-x-auto lg:w-11/12 my-7 custom-scrollbar">
                <ul class="flex items-center gap-10 text-sm font-bold text-gray-500">
                    <li class="px-2 py-3 text-black border-b-4 border-b-primary-500">All Templates</li>
                    <li class="px-2 py-3">Marketting</li>
                    <li class="px-2 py-3">Business owner</li>
                    <li class="px-2 py-3">Sales</li>
                    <li class="px-2 py-3">Support</li>
                    <li class="px-2 py-3">IT</li>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7 ">
            <div v-for="(item, index) in dummyData" :key="index" class="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-lg">
                <div class="flex flex-col justify-between px-6 py-8">
                    <h4 class="text-xl font-bold">{{ item.title }}</h4>
                    <div class="flex items-center gap-2 mt-5 ">
                        <template v-for="(icon, iconIndex) in item.icons">
                            <div class="grid w-10 h-10 border border-gray-200 rounded-md place-items-center">
                                <img :src="`${homeUrl}/${icon}`" alt="asdf" class="w-8"
                                    :class="{ '!w-5': /(notion|slack|facebook|zoom)/.test(icon) }">
                            </div>
                            <PlusCircleIcon v-if="iconIndex !== item.icons.length - 1" class="w-6 h-6 text-gray-500" />
                        </template>
                    </div>
                </div>
                <div class="flex items-center w-full gap-2 px-6 py-5 text-sm text-white bg-black">
                    Choose template
                    <ArrowLongRightIcon class="w-6 h-5 " />
                </div>
            </div>
        </div>
        <button type="button"
            class="flex items-center gap-2 px-5 py-3 mx-auto mt-10 text-sm font-medium text-white rounded-md focus:outline-none bg-primary-500">See more templates
            <RectangleGroupIcon class="w-5 h-5" />
        </button>
    </section>
</template>

<script setup>
import { PlusCircleIcon, ArrowLongRightIcon ,RectangleGroupIcon } from '@heroicons/vue/24/outline';
let homeUrl=""
onMounted(()=>{
    homeUrl=`${window.location.protocol}//${window.location.host}`
})
const dummyData = [
    {
        title: "Get Slack notification for a new email in Gmail",
        icons: [
            '_nuxt/assets/images/Gmail-logo.png',
            '_nuxt/assets/images/slack.png'
        ]
    },
    {
        title: "Create a row in Google Sheet for the newly labeled emails",
        icons: [
            '_nuxt/assets/images/Gmail-logo.png',
            '_nuxt/assets/images/spreadsheet.png',
        ]
    },
    {
        title: "Input a data in Notion for Gmail inbox messages",
        icons: [
            '_nuxt/assets/images/Gmail-logo.png',
            '_nuxt/assets/images/notion.png',
        ]
    },
    {
        title: "Get Slack notification and taking note for a new email",
        icons: [
            '_nuxt/assets/images/Gmail-logo.png',
            '_nuxt/assets/images/slack.png',
            '_nuxt/assets/images/notion.png',
        ]
    },
    {
        title: "Create a new Zoom link for a new message in Gmail",
        icons: [
            '_nuxt/assets/images/Gmail-logo.png',
            '_nuxt/assets/images/spreadsheet.png',
            '_nuxt/assets/images/zoom.png',
        ]
    },
    {
        title: "Share the newest content from Notion",
        icons: [
            '_nuxt/assets/images/notion.png',
            '_nuxt/assets/images/facebook.png',
        ]
    },
]

console.log(/(notion|slack|facebook|zoom)/.test(dummyData[4].icons[2]))
</script>
