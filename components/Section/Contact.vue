<template>
    <div class="flex flex-col items-center px-4 py-10 mx-auto border-b max-w-screen-2xl sm:px-8 border-b-gray-200 ">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-center sm:text-4xl ">Contact us whenver you like</h2>
        <p class="mb-8 font-medium text-center text-gray-500 lg:mb-16 dark:text-gray-400 ">Have any idea? we are
            here for you 24x7 just let us know</p>
        <form action="#" class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:max-w-screen-md ">
            <div class="col-span-1">
                <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" id="Name"
                    class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know your name" required>
            </div>
            <div class="col-span-1">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email</label>
                <input type="email" id="email"
                    class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@company.com" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Message</label>
                <textarea id="message" rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message about your idea ..."></textarea>
            </div>
            <div class="flex justify-center w-full sm:col-span-2">
                <button type="submit"
                    class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none">Send
                    message</button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>
