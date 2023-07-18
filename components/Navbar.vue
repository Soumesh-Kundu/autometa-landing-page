<template>
    <header class="">
        <nav class="sticky top-0 left-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
            <div
                class="relative flex flex-wrap items-center justify-between max-w-screen-xl gap-5 p-4 mx-auto lg:px-16 md:justify-normal">
                <a href="#" class="flex items-center">
                    <img src="../assets/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Qualyval</span>
                </a>
                <div class="flex right-16 md:absolute md:order-2">
                    <div class="items-center hidden gap-5 lg:flex">
                        <button type="button"
                            class="px-5 py-2 font-semibold text-center text-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0">Login</button>
                        <button type="button"
                            class="px-5 py-2 mr-3 text-center text-white rounded-md bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0">Sign
                            Up</button>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full px-5 md:border-l-2 md:border-l-gray-300 md:flex md:w-auto md:order-1"
                    id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 mt-4 text-sm font-semibold text-gray-500 bg-white border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a href="#"
                                class="flex items-center gap-2 py-2 pl-3 pr-4 rounded md:bg-transparent md:hover:text-primary-500 md:p-0 "
                                aria-current="page">Product
                                <ChevronDownIcon class="w-3 h-3" />
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center gap-2 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0 ">Solutions
                                <ChevronDownIcon class="w-3 h-3" />
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center gap-2 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0">Resources
                                <ChevronDownIcon class="w-3 h-3" />
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0 ">Pricing</a>
                        </li>
                        <li class="md:hidden">
                            <div class="flex flex-col items-start gap-5">
                                <button type="button"
                                    class="py-2 ml-3 font-semibold text-center text-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0">Login</button>
                                <button type="button"
                                    class="px-5 py-2 ml-3 mr-3 font-semibold text-center text-white rounded-md bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0">Sign
                                    Up</button>
                            </div>
                        </li>
                    </ul>
                </div>
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