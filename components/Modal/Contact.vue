<template>
    <div id="Contact-modal" tabindex="-1" aria-hidden="true"
        class="fixed left-0 right-0 z-50 hidden w-full max-h-full p-4 overflow-x-hidden overflow-y-auto bg-gray-100 top-[12.5%] md:top-0 md:inset-0 bg-opacity-20">
        <div class="relative w-full max-w-md max-h-full ">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <button type="button" ref="closeButtonRef"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="Contact-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <!-- Enquiry form Heading -->
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Contact us</h3>
                    <form class="space-y-3" action="#" @submit.prevent="onSubmit">
                        <div class="col-span-1">
                            <label for="Name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="Name" v-model="name"
                                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know your name" required>
                        </div>
                        <div class="col-span-1">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Email</label>
                            <input type="email" id="email" @blur="onBlurEmail" v-model="email"
                                :class="{ '!border-red-500': !valid }"
                                class="block w-full p-3 text-sm text-gray-900 border-2 border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-white focus:border-primary-500"
                                placeholder="name@company.com" required>
                            <span class="text-sm font-medium text-red-500"
                                :class="{ 'visible': !valid, 'invisible': valid }">Email is
                                not
                                valid</span>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Message</label>
                            <textarea id="message" rows="6" v-model="message"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required placeholder="Please leave a message..."></textarea>
                        </div>
                        <div class="flex justify-center w-full sm:col-span-2">
                            <button type="submit"
                                class="flex items-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none"
                                :class="{ '!py-1.5 ': isLoading }">
                                <IconSpinner v-if="isLoading" />
                                <span v-if="isDone" class="flex gap-1 mx-5 item-center">
                                    <CheckCircleIcon class="w-5 h-5" /> Sent!
                                </span>
                                <span v-if="!isLoading && !isDone">Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';

const valid = ref(true)
const email = ref("")
const name = ref("")
const message = ref("")
const closeButtonRef=ref(null)
const isLoading=ref(false)
const isDone=ref(false)
function onBlurEmail(e) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!e.target.value.length) {
        valid.value = true
        return
    }
    if (!emailRegex.test(e.target.value)) {
        valid.value = false
        return
    }
    valid.value = true
    return
}
async function onSubmit(){
    if(!valid.value) return
    if(isDone.value) return
    try {
        isLoading.value=true
       const {data,status}=await useFetch('/api/saveMessage',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:{
            email:email.value,
            name:name.value,
            message:message.value
        },
        onResponseError({request,response}){
            if(response.status===500){
                isLoading.value=false
            }
        }
       }) 
       if(status.value==='success'){
        isLoading.value=false
        isDone.value=true
        email.value=""
        name.value=""
        message.value=""        
       }
    } catch (error) {
        console.log(error)
        isLoading.value=false
    }
}
</script>
