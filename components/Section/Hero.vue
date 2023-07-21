<template>
    <main class="grid max-w-screen-xl grid-cols-1 mx-auto mb-5 lg:grid-cols-2">
        <div class="flex flex-col items-center gap-5 px-2 py-8 pb-16 md:pl-8">
            <div class="flex flex-wrap items-center justify-start w-full gap-3 sm:gap-5 ">
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <span class="text-lg i-mdi-robot text-primary-500"></span> AI
                </div>
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <Cog6ToothIcon class="w-5 h-5" />
                    Automation
                </div>
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <WrenchScrewdriverIcon class="w-5 h-5" />
                    Integration
                </div>
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <span
                        class="text-xl i-streamline-computer-chip-1-computer-device-chip-electronics-cpu-microprocessor text-primary-500"></span>
                    Digital Products
                </div>
            </div>
            <div class="">
                <h1 class="text-[2.5rem] leading-tight font-bold lg:text-6xl">Ready to Scale Your Business and Supercharge
                    Productivity?</h1>
                <p class="w-full mt-8 font-medium text-gray-500 sm:w-3/4 lg:w-11/12">
                    We assist businesses in achieving growth, solving problems, enhancing productivity, and optimising
                    efficiency through the application of AI, Automation, and Digital technologies.

                </p>
            </div>
            <div class="grid w-full grid-cols-2 gap-5 mt-5 font-bold">
                <div class="flex items-center gap-1 text-sm text-gray-500">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    1000+ Integrations Apps
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    Mulit-Step workflows
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    Secure Technology
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    Trusted by 200+ companies
                </div>
            </div>
        </div>
        <div class="relative px-4 my-4 bg-gray-100 rounded-md lg:mr-16 ">
            <form class="flex items-center mx-auto mt-5 sm:gap-4 " @submit.prevent="addList">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="voice-search"
                        class="block w-full py-3.5 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-black focus:ring-0 placeholde:font-semibold"
                        placeholder="Write your idea here">
                </div>
                <button type="submit"
                    class="inline-flex items-center px-5 py-3.5 ml-2 text-sm font-medium text-white border rounded-lg bg-neutral-700">Search
                </button>
            </form>
            <div v-if="data.length === 0" class="grid w-full h-96 lg:h-full place-items-center">
                <h2 class="text-4xl font-medium text-center text-gray-500">Do you have any ideas ? </h2>
            </div>
            <div v-else class="flex flex-col w-full h-full gap-3 my-5">
                <div v-for="(item, index) in data" :key="index"
                    class="w-full px-3 py-2 translate-y-full bg-white rounded-md shadow-lg opacity-0 screenAnimation"
                    :style="{ '--delay': index }">
                    <h5 class="text-lg font-semibold">{{ item.title }}</h5>
                    <p class="mt-2 text-sm font-medium text-gray-500 ">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ArrowTrendingUpIcon, Cog6ToothIcon, WrenchScrewdriverIcon, CheckCircleIcon, ArrowLeftIcon, Bars3Icon, EllipsisVerticalIcon, PlusCircleIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const data = ref([])
const dummyData = [
    {
        title: 'Text Generation',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis veniam ipsum excepturi fugiat."
    },
    {
        title: 'Image Generation',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis veniam ipsum excepturi fugiat."
    },
    {
        title: 'Automated Email',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis veniam ipsum excepturi fugiat."
    },
    {
        title: 'Personal Discord Bot',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis veniam ipsum excepturi fugiat."
    },
]

function addList() {
    if (!data.value.length) {
        data.value = dummyData
        return
    }
    data.value = []
}
</script>

<style scoped>
.custom-shadow {
    box-shadow: inset 0 -10px 30px 30px white !important;

}

.screenAnimation {
    animation: screenIn 300ms forwards;
    /* animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); */
    animation-delay: calc(150ms*(var(--delay)));
}

@keyframes screenIn {
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
</style>