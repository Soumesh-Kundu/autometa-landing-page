<template>
    <section class="px-4 pt-10 mx-auto mb-10 max-w-screen-2xl sm:px-8">
        <h2 class="block w-full max-w-xl mx-auto text-3xl font-semibold text-center sm:text-4xl">Our typical engagment process</h2>
        <div class="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
            <div class="flex-col items-center hidden py-20 rounded-md bg-primary-100 lg:flex">
                <div class="relative flex items-center justify-between w-3/5 gap-2 py-1 mx-2 bg-white rounded-md">
                    <div class="flex items-center gap-1">
                        <div class="grid w-8 h-8 m-2 bg-white place-items-center"><img  src="/images/Gmail-logo.webp" 
                                alt="gmail-logo" class="w-full scale-125" /></div>
                        <div class="text-[11px] font-bold">
                            <span class="text-gray-500 ">Trigger</span>
                            <p class="">A new gmail from info@qualyval.com</p>
                        </div>
                    </div>
                    <EllipsisVerticalIcon class="w-5 h-5" />
                </div>
                <div class="flex w-3/5 h-12">
                    <div class="w-1/2 h-full border-b border-r border-r-primary-500 border-b-primary-500 rounded-br-md">
                    </div>
                    <div class="w-1/2 h-full border-b border-b-primary-500 rounded-bl-md"></div>
                </div>
                <div class="flex flex-col w-3/5 gap-10 border-l border-r border-r-primary-500 border-l-primary-500">
                    <div class="relative w-full mt-10">
                        <div
                            class="absolute top-0 left-0 py-2 px-3 -translate-x-1/2 text-[11px] font-bold bg-white rounded-md">
                            <span class="text-gray-500 ">Conditions</span>
                            <p class="">If the email subject is ui designer</p>
                        </div>
                        <div
                            class="absolute top-0 right-0 py-2 px-3 translate-x-1/2 text-[11px] font-bold bg-white rounded-md">
                            <span class="text-gray-500 ">Condtions</span>
                            <p class="">if the email subject is software dev</p>

                        </div>
                    </div>
                    <div class="relative w-full mt-14">
                        <div
                            class="absolute top-0 left-0 py-2 px-3 -translate-x-1/2 text-[11px] font-bold bg-white rounded-md flex items-center gap-2">
                            <img alt="notion-logo" src="/images/notion.webp"  class="w-5 h-5" />
                            <div>
                                <span class="text-gray-500 ">Do</span>
                                <p class="">Input in Notion page</p>
                            </div>
                        </div>
                        <div
                            class="absolute top-0 right-0 py-2 px-3 translate-x-1/2 text-[11px] font-bold bg-white rounded-md flex items-center gap-2">
                            <img alt="notion-logo" src="/images/notion.webp"  class="w-5 h-5" />
                            <div>
                                <span class="text-gray-500 ">Do</span>
                                <p class="">Input in Notion page</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full mt-14">
                        <div
                            class="absolute top-0 left-0 py-2 px-3 -translate-x-1/2 text-[11px] font-bold bg-white rounded-md flex items-center gap-2">
                            <img src="/images/spreadsheet.webp" alt="spreadsheet-logo" class="w-5 h-5" />
                            <div>
                                <span class="text-gray-500 ">Do</span>
                                <p class="">Input in Spreadsheet</p>
                            </div>
                        </div>
                        <div
                            class="absolute top-0 right-0 py-2 px-3 translate-x-1/2 text-[11px] font-bold bg-white rounded-md flex items-center gap-2">
                            <img src="/images/spreadsheet.webp" alt="spreadsheet-logo" class="w-5 h-5" />
                            <div>
                                <span class="text-gray-500 ">Do</span>
                                <p class="">Input in Spreadsheet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="flex flex-col gap">
                    <li
                        class="flex items-start gap-5 px-4 py-10 bg-gray-100 border-b border-l-4 border-gray-200 border-l-primary-500">
                        <div class="text-xl font-semibold">01</div>
                        <div>
                            <h4 class="text-xl font-semibold">Audit & Process Analysis</h4>
                            <p class="mt-2 font-medium text-gray-500">As an initial phase, we conduct a comprehensive audit and analysis of your current processes to identify bottlenecks, scope for improvements, and potential areas for automation.
                            </p>
                        </div>
                    </li>
                    <li class="flex items-start gap-5 px-4 py-10 border-b border-gray-200 ">
                        <div class="text-xl font-semibold">02</div>
                        <div>
                            <h4 class="text-xl font-semibold">Suggestions & Proposal</h4>
                            <p class="mt-2 font-medium text-gray-500">As the subsequent step, we present our comprehensive findings and recommendations, offering various options, each accompanied by its advantages and disadvantages. Additionally, we submit a detailed proposal that includes cost estimates for your consideration.
                            </p>
                        </div>
                    </li>
                    <li class="flex items-start gap-5 px-4 py-10 ">
                        <div class="text-xl font-semibold">03</div>
                        <div>
                            <h4 class="text-xl font-semibold">Execution</h4>
                            <p class="mt-2 font-medium text-gray-500">
                                During the final phase, we proceed to automate your processes by leveraging cutting-edge technologies such as AI, Automation, Integration, and Digitalisation. Throughout the implementation, we maintain an iterative approach, incorporating continuous feedback to ensure the development of a fully functional solution. Rigorous testing mechanisms are employed to validate its efficacy before delivering the solution to you. Should you require it, we are also pleased to offer ongoing support and maintenance services.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline';
</script>
