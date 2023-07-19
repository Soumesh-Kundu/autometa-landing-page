<template>
    <section class="max-w-screen-xl px-4 py-20 mx-auto sm:px-16">
        <h1 class="max-w-2xl mx-auto text-3xl font-semibold text-center sm:text-4xl">We are trusted by many customers! Here is a list of
            them!</h1>
        <div class="grid grid-cols-1 mt-5 sm:grid-cols-3 gap-7">
            <div class="flex flex-col items-center gap-7 ">
                <div class="px-4 py-3 bg-white rounded-md shadow-lg">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        Since implementing workflow automation, our team has seen a significant increase in productivity and
                        efficiency.
                    </p>
                    <div class="mt-5">
                        <span class="font-bold ">Alan Dazzle</span>
                        <p class="mt-3 text-sm text-gray-500">Project Manager - Artisans</p>
                    </div>
                </div>
                <div class="px-4 py-3 bg-white rounded-md shadow-lg grow">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        Workflow automation has made it so much easier for us to manage and track our tasks and projects. We
                        highly recommend it to any business looking to streamline their processes
                    </p>
                    <div class="mt-5">
                        <span class="font-bold ">John Dongker</span>
                        <p class="mt-3 text-sm text-gray-500">Web developer - Asako Group</p>
                    </div>
                </div>
            </div>
            <!-- col 2 -->
            <div class="flex flex-col items-center gap-7 ">
                <div class="px-4 py-3 bg-white rounded-md shadow-lg grow">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        We've been able to automate many of our repetitive and time-consuming tasks, thanks to workflow
                        automation. We're now able to focus on the more important aspects of our business.
                    </p>
                    <div class="mt-5">
                        <span class="font-bold ">Immanuel Tan</span>
                        <p class="mt-3 text-sm text-gray-500">Human Resource-Spree</p>
                    </div>
                </div>
                <div class="px-4 py-3 bg-white rounded-md shadow-lg">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        he implementation of workflow automation has been a huge success for our company. We've seen an
                        increase in productivity.
                    </p>
                    <div class="mt-5">
                        <span class="font-bold">Berau Morgan</span>
                        <p class="mt-3 text-sm text-gray-500">Web developer - Kinshaker</p>
                    </div>
                </div>
            </div>
            <!-- col 3 -->
            <div class="flex flex-col items-center gap-7 ">
                <div class="px-4 py-3 bg-white rounded-md shadow-lg">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        We've been able to automate many of our repetitive and time-consuming tasks, thanks to workflow
                        automation.
                    </p>
                    <div class="mt-5">
                        <span class="font-bold ">Mike Thompson</span>
                        <p class="mt-3 text-sm text-gray-500">Accountant-Lively Lane</p>
                    </div>
                </div>
                <div class="px-4 py-3 bg-white rounded-md shadow-lg grow">
                    <div class="grid w-10 h-10 rounded-md bg-primary-100 place-items-center">
                        <IconChat />
                    </div>
                    <p class="mt-5 text-sm font-medium text-gray-500">
                        I would recommend this to anyone who spends money and wants to manage their finances effectively.
                        It's just a great application that has made me feel a lot better.
                    </p>
                    <div class="mt-5">
                        <span class="font-bold ">Dei Naibohan</span>
                        <p class="mt-3 text-sm text-gray-500">Product Manageer - Inklet</p>
                    </div>
                </div>
            </div>
        </div>
        <button type="button"
            class="flex items-center gap-2 px-5 py-3 mx-auto mt-10 text-sm font-medium text-white rounded-md focus:outline-none bg-primary-500">See more reviews <UsersIcon class="w-5 h-5" /></button>
    </section>
</template>

<script setup>
import { UsersIcon } from '@heroicons/vue/24/outline';
</script>