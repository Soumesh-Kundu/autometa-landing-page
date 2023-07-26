<template>
    <div class="flex flex-col items-center px-4 py-10 mx-auto border-b max-w-screen-2xl sm:px-8 border-b-gray-200 ">
        <h2 class="mb-10 text-3xl font-extrabold tracking-tight text-center sm:text-4xl ">Contact us whenver you like</h2>
        <form action="#" class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:max-w-screen-md " @submit.prevent="onSubmit">
            <div class="col-span-1">
                <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" id="Name" v-model="name"
                    class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know your name" required>
            </div>
            <div class="col-span-1">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email</label>
                <input type="email" id="email" @blur="onBlurEmail"  v-model="email" :class="{ '!border-red-500': !valid }"
                    class="block w-full p-3 text-sm text-gray-900 border-2 border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-white focus:border-primary-500"
                    placeholder="name@company.com" required>
                <span class="text-sm font-medium text-red-500" :class="{ 'visible': !valid, 'invisible': valid }">Email is
                    not
                    valid</span>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Message</label>
                <textarea id="message" rows="6" v-model="message"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required
                    placeholder="Please leave a message..."></textarea>
            </div>
            <div class="flex justify-center w-full sm:col-span-2">
                <button type="submit"
                    class="flex items-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none" :class="{'!py-1.5 ':isLoading}">
                    <IconSpinner v-if="isLoading"/>
                    <span v-if="isDone" class="flex gap-1 mx-5 item-center"><CheckCircleIcon class="w-5 h-5" /> Sent!</span>             
                    <span v-if="!isLoading && !isDone">Send Message</span>   
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
const valid = ref(true)
const email = ref("")
const name = ref("")
const message = ref("")
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
