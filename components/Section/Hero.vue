<template>
    <main class="grid grid-cols-1 gap-8 px-2 py-12 mx-auto mb-5 sm:grid-cols-2 max-w-screen-2xl sm:py-16">
        <div class="order-2 sm:pl-8 place-self-center sm:order-1">
            <div class="px-5 py-2 my-10 border-l-8 border-l-primary-500">
                <p class="font-semibold text-gray-500 sm:text-xl">Earlier this month my team implemented their first automation.Concept to implementation was less than 60 days and ROI will exceed 600%! Most importantly, it eliminates repetitive daily tasks to drive better customer and employee experience. A huge thank you to <span class="text-primary-500">Pramod Rai</span> and the fantastic team at <span class="text-primary-500">Qualyval</span> !.</p>
                <div class="flex items-center gap-5 mt-8">
                    <img src="../../assets/images/companies/review-profile.webp" alt="review-image" class="w-14">
                    <div>
                        <span class="font-bold sm:text-sm">Paul Croke</span>
                        <p class="text-xs text-gray-900 sm:text-xs">President at Hinrichs Estimating</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center order-1 gap-5 sm:order-2">
            <div class="flex flex-wrap items-center w-full gap-3 sm:gap-7 ">
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
            <div class="flex flex-col max-w-3xl my-5">
                <h1 class="text-[2.75rem] font-bold leading-tight lg:text-6xl">Boost Productivity with AI & Automation</h1>
                <p class="w-full mt-10 font-medium text-gray-500 sm:text-xl sm:w-3/4 lg:w-11/12">
                    We assist businesses in achieving growth, solving problems, enhancing productivity, and optimising
                    efficiency through the application of AI, Automation, and Digital technologies.

                </p>
            </div>
            <div class="grid w-full grid-cols-2 gap-5 font-bold ">
                <div class="flex items-center gap-1 text-gray-500 sm:text-xl">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    50+ Clients
                </div>
                <div class="flex items-center gap-1 text-gray-500 sm:text-xl">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    200+ Processes automated
                </div>
                <div class="flex items-center gap-1 text-gray-500 sm:text-xl">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    10+ Digital Products delivered
                </div>
                <div class="flex items-center gap-1 text-gray-500 sm:text-xl">
                    <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                    100+ Systems integrated
                </div>
            </div>
        </div>
        <!--<div class="relative px-4 my-4 bg-gray-100 rounded-md lg:mr-8 ">
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
        </div>-->
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