<template>
    <main class="grid max-w-screen-xl grid-cols-1 mx-auto mb-5 lg:grid-cols-2">
        <div class="flex flex-col items-center gap-5 px-2 pb-16 md:pl-16 py-14">
            <div class="flex items-center justify-start w-full gap-2 sm:gap-5 ">
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <ArrowTrendingUpIcon class="w-5 h-5" />Workflow
                </div>
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <Cog6ToothIcon class="w-5 h-5" />
                    Automation
                </div>
                <div
                    class="flex gap-1 px-4 py-1.5 items-center text-xs font-medium border rounded-full text-primary-500 bg-primary-100 border-primary-500">
                    <BriefcaseIcon class="w-5 h-5" />
                    Efficient
                </div>
            </div>
            <div class="">
                <h1 class="text-5xl font-bold lg:text-6xl">Connect and automate multiple work easily!</h1>
                <p class="w-11/12 mt-8 font-medium text-gray-500 sm:w-3/4 lg:w-11/12">
                    With just a few clicks, you will be able to connect your favorite applications, and you will be able to
                    say goodbye to manual work
                </p>
                <button type="button"
                    class="px-5 py-3 mt-5 text-sm font-medium text-white rounded-sm focus:outline-none bg-primary-500">Start
                    Now - It's Free </button>
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
        <div class="relative hidden my-4 bg-gray-200 md:mr-16 lg:block">
            <div class="absolute w-3/5 mx-auto top-5 left-14">
                <div class="absolute w-full shadow-xl">
                    <div class="flex items-center justify-between px-4 py-3 text-xs text-white bg-black rounded-t-lg">
                        <ArrowLeftIcon class="w-4 h-4" />
                        <span>AV-Product</span>
                        <Bars3Icon class="w-5 h-5" />
                    </div>
                    <div class="h-64 bg-white rounded-b-lg"></div>
                </div>
                <div class="absolute w-full -translate-x-5 shadow-xl translate-y-14">
                    <div class="flex items-center justify-between px-4 py-3 text-xs text-white bg-black rounded-t-lg">
                        <ArrowLeftIcon class="w-4 h-4" />
                        <span>Recruitment</span>
                        <Bars3Icon class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col items-center py-3 bg-white rounded-b-lg ">
                        <div class="relative flex items-center justify-between w-11/12 gap-2 mx-2 bg-gray-100 rounded-md">
                            <div class="flex items-center gap-1">
                                <div class="grid w-8 h-8 m-2 bg-white place-items-center"><img
                                        src="../../assets/images/Gmail-logo.png" alt="" class="w-full scale-125"></div>
                                <div class="text-[11px] font-bold">
                                    <span class="text-gray-500 ">Trigger</span>
                                    <p class="">A new gmail from kornelius@gmail.com</p>
                                </div>
                            </div>
                            <EllipsisVerticalIcon class="w-5 h-5" />
                            <span
                                class="absolute bottom-0 inline-block w-2 h-2 -translate-x-1/2 translate-y-1/2 bg-gray-300 rounded-full left-1/2">

                            </span>
                        </div>
                        <span class="inline-block w-[1px] h-5 bg-gray-300"></span>
                        <div
                            class="relative flex items-center justify-between w-11/12 gap-10 mx-2 bg-gray-100 border rounded-md border-primary-500">
                            <div class="flex items-center gap-1">
                                <div class="grid w-8 h-8 m-2 bg-white place-items-center"><img
                                        src="../../assets/images/spreadsheet.png" alt="" class="w-full "></div>
                                <div class="text-[11px] text font-bold">
                                    <span class="text-gray-500 ">Action</span>
                                    <p class="">Insert the data into data 2022.xls</p>
                                </div>
                            </div>
                            <EllipsisVerticalIcon class="w-5 h-5" />
                            <span
                                class="absolute top-0 inline-block w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 left-1/2">

                            </span>
                            <span
                                class="absolute bottom-0 inline-block w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-500 left-1/2">

                            </span>
                        </div>
                        <span class="inline-block w-[1px] h-5 bg-gray-300"></span>
                        <div class="relative flex items-center justify-between w-11/12 mx-2 bg-gray-100 rounded-md">
                            <div class="flex items-center gap-0.5">
                                <div class="grid w-8 h-8 p-1 m-2 bg-white place-items-center"><img
                                        src="../../assets/images/slack.png" alt="" class="w-full "></div>
                                <div class="text-[11px] font-bold">
                                    <span class="text-gray-500 ">Action</span>
                                    <p class="">Sent a message on a "Recruitment" channel</p>
                                </div>
                            </div>
                            <EllipsisVerticalIcon class="w-5 h-5" />
                            <span
                                class="absolute top-0 inline-block w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full left-1/2">
                                
                            </span>
                        </div>
                        <button type="button"
                            class="flex items-center justify-center gap-0.5 py-3 mt-3 px-5 w-11/12  text-sm font-medium text-white rounded-sm focus:outline-none bg-primary-500">Add
                            more work
                            <PlusCircleIcon class="w-5 h-5" />
                        </button>
                    </div>
                    <div
                        class="absolute w-24 h-24 border-b-2 border-l-2 rounded-bl-lg top-full left-1/2 border-l-primary-500 border-b-primary-500">
                        <ArrowLongRightIcon class="absolute bottom-0 w-8 h-8 translate-y-[1.05rem] -right-1 text-primary-500"/>
                    </div>
                </div>
            </div>
            <div class="absolute w-5/12 shadow-xl bottom-2 right-8">
                <div class="flex items-center justify-between px-4 py-3 text-xs text-white bg-black rounded-t-lg">
                    <ArrowLeftIcon class="w-4 h-4" />
                    <span>My work</span>
                    <Bars3Icon class="w-5 h-5" />
                </div>
                <div
                    class="flex flex-col items-center w-full h-32 overflow-hidden text-xs bg-white rounded-b-lg custom-shadow">
                    <div
                        class="flex items-center justify-between w-full px-3 py-3 font-semibold border-b border-b-gray-100">
                        <div class="flex items-center gap-1">
                            <img src="../../assets/images/file.png" alt="" class="w-7">
                            <span>Recruitment</span>
                        </div>
                        <span class="px-3 py-1 rounded-full text-[10px] bg-primary-200 text-primary-500">Active</span>
                    </div>
                    <div
                        class="flex items-center justify-between w-full px-3 py-3 font-semibold border-b border-b-gray-100">
                        <div class="flex items-center gap-1">
                            <img src="../../assets/images/file.png" alt="" class="w-7">
                            <span>Data 2022</span>
                        </div>
                        <span class="px-3 py-1 rounded-full text-[10px] bg-primary-200 text-primary-500">Active</span>
                    </div>
                    <div
                        class="flex items-center justify-between w-full px-3 py-3 font-semibold border-b opacity-50 border-b-gray-100">
                        <div class="flex items-center gap-1">
                            <img src="../../assets/images/file.png" alt="" class="w-7">
                            <span>Recruitment</span>
                        </div>
                        <span class="px-3 py-1 rounded-full text-[10px] bg-primary-200 text-primary-500">Active</span>
                    </div>
                </div>

            </div>
            <div class="absolute px-3 py-2 bg-white rounded-md bottom-10 left-5">
                <div class="grid w-8 h-8 m-2 bg-gray-100 place-items-center"><img src="../../assets/images/Gmail-logo.png" alt=""
                        class="w-full scale-125"></div>
                <span class="text-sm font-semibold">15+ new messages</span>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ArrowTrendingUpIcon, Cog6ToothIcon, BriefcaseIcon, CheckCircleIcon, ArrowLeftIcon, Bars3Icon, EllipsisVerticalIcon, PlusCircleIcon, ArrowLongRightIcon} from '@heroicons/vue/24/outline'


</script>

<style scoped>
.custom-shadow {
    box-shadow: inset 0 -10px 30px 30px white !important;
}
</style>