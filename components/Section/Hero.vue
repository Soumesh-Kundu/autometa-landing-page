<template>
    <main class="grid grid-cols-1 gap-8 px-2 py-12 mx-auto mb-5 sm:grid-cols-2 max-w-screen-2xl sm:py-16">
        <div class="order-2 sm:pl-8 place-self-center sm:order-1">
            <div class="px-5 py-2 my-10 border-l-8 border-l-primary-500">
                <p class="text-sm font-semibold text-gray-500 sm:text-lg">Earlier this month my team implemented their first automation.Concept to implementation was less than 60 days and ROI will exceed 600%! Most importantly, it eliminates repetitive daily tasks to drive better customer and employee experience. A huge thank you to <span class="text-primary-500">Pramod Rai</span> and the fantastic team at <span class="text-primary-500">Qualyval</span> !.</p>
                <div class="flex items-center gap-5 mt-8">
                    <img src="/images/companies/review-profile.webp" alt="review-image" class="w-14">
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
                <h1 class="text-4xl sm:text-[2.75rem] font-bold leading-tight lg:text-6xl">Boost Productivity with AI & Automation</h1>
                <p class="w-full mt-10 text-sm font-medium text-gray-500 sm:text-lg sm:w-3/4 lg:w-11/12">
                    We assist businesses in achieving growth, solving problems, enhancing productivity, and optimising
                    efficiency through the application of AI, Automation, and Digital technologies.

                </p>
            </div>
            <div class="grid w-full grid-cols-2 gap-5 font-bold">
                <div class="flex items-center gap-1 text-sm text-gray-500 sm:text-lg">
                    <CheckCircleIcon class="w-[40px] sm:w-6 h-[40px] sm:h-6 text-primary-500" />
                    200+ Processes automated
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500 sm:text-lg">
                    <CheckCircleIcon class="w-[40px] sm:w-6 h-[40px] sm:h-6 text-primary-500" />
                    10+ Digital Products delivered
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500 sm:text-lg">
                    <CheckCircleIcon class="w-[36px] sm:w-6 h-[36px] sm:h-6 text-primary-500" />
                    100+ Systems integrated
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500 sm:text-lg">
                    <CheckCircleIcon class="w-[26px] sm:w-6 h-[26px] sm:h-6 text-primary-500" />
                    50+ Client
                </div>
                
            </div>
        </div>
       
    </main>
</template>

<script setup>
import { Cog6ToothIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
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