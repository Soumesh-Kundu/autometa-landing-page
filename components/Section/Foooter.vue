<template>
    <footer >
        <div class="flex flex-col items-center grid-cols-2 gap-10 px-4 py-10 mx-auto sm:justify-around sm:flex-row max-w-screen-2xl sm:px-8">
            <div class="">
                <div class="flex items-center justify-center gap-2 lg:justify-start">
                    <img src="/images/logo.svg" alt="logo" class="w-8" />
                    <h4 class="text-xl font-bold">Qualyval</h4>
                </div>
                <p class="mt-3 text-gray-700">Boost productivity with AI & Automation</p>
            </div>
            <div class="flex flex-col items-center gap-5 sm:items-start">
                <h5 class="text-lg font-semibold">Get in Touch</h5>
                <ul class="flex flex-col items-center gap-5 font-medium text-gray-800 sm:items-start">
                    <li class="flex items-center gap-2"><PhoneIcon class="w-6 h-6"/> +441908103333</li>
                    <li class="flex items-center gap-2"><EnvelopeIcon  class="w-6 h-6"/> info@qualyval.com</li>
                    <li class="flex items-center gap-2"><MapPinIcon class="w-6 h-6"/> Milton Keyens, United Kingdom</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col flex-wrap justify-between w-full gap-5 px-1 py-5 border-t sm:items-center sm:flex-row sm:px-16 border-t-gray-200">
            <div class="text-sm font-medium text-gray-500 ">
                Qualyval &copy; 2023.All rights reserved  
            </div>
            <div class="text-sm font-medium text-gray-500 ">
                Qualyval Ltd is a company registered in England & Wales with Company registration number: 12605064 
            </div>
            <NuxtLink to="/privacy-policy" class="text-sm font-medium text-gray-500">
                PRIVACY POLICY
            </NuxtLink>
        </div>
    </footer>
</template>

<script setup>
import { PhoneIcon,EnvelopeIcon,MapPinIcon } from '@heroicons/vue/24/outline';
</script>
