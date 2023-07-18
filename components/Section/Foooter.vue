<template>
    <footer >
        <div class="grid max-w-screen-xl grid-cols-2 gap-10 px-4 py-10 mx-auto sm:grid-cols-4 lg:grid-cols-6 sm:px-16">
            <div class="col-span-2 sm:col-span-4 lg:col-span-2 place-self-center">
                <div class="flex items-center justify-center gap-2 lg:justify-start">
                    <img src="../../assets/images/logo.svg" alt="" class="w-8">
                    <h4 class="text-xl font-bold">Qualyval</h4>
                </div>
                <p class="mt-3 text-sm text-gray-500">Automation your work and many applications in Qualyval</p>
                <form class="flex flex-col items-center gap-4 mx-auto mt-5 sm:gap-2 sm:flex-row">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">

                        <input type="text" id="voice-search"
                            class="block w-full py-3.5 pl-5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-0 placeholde:font-semibold"
                            placeholder="Search automation" required>
                    </div>
                    <button type="submit"
                        class="inline-flex items-center px-5 py-3.5 ml-2 text-sm font-medium text-white border rounded-md bg-neutral-700">Search
                    </button>
                </form>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="font-semibold ">Product</h5>
                <ul class="flex flex-col items-start gap-5 text-sm font-medium text-gray-500">
                    <li>Twitter</li>
                    <li>Linkdin</li>
                    <li>TikTok</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="font-semibold ">Recources</h5>
                <ul class="flex flex-col items-start gap-5 text-sm font-medium text-gray-500">
                    <li>Guide & Tutorials</li>
                    <li>Pricing</li>
                    <li>Changelog</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="font-semibold">Company Details</h5>
                <ul class="flex flex-col items-start gap-5 text-sm font-medium text-gray-500">
                    <li>Terms and Services</li>
                    <li>Privacy Policy</li>
                    <li>Abuse</li>
                    <li>Privacy Policy</li>
                    <li>Status</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="font-semibold">Get in Touch</h5>
                <ul class="flex flex-col items-start gap-5 text-sm font-medium text-gray-500">
                    <li>Sign Up Free</li>
                    <li>Sign In</li>
                    <li>Support</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="w-full border-t border-t-gray-200">
            <div class="max-w-screen-xl px-4 py-5 mx-auto text-xs font-medium text-gray-500 sm:px-16">
                Qualyval &copy; 2022.All rights reserved  |  Sitemap  
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>
