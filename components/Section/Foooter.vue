<template>
    <footer >
        <div class="grid grid-cols-2 gap-10 px-4 py-10 mx-auto max-w-screen-2xl sm:grid-cols-4 lg:grid-cols-6 sm:px-8">
            <div class="col-span-2 sm:col-span-4 lg:col-span-2 place-self-center">
                <div class="flex items-center justify-center gap-2 lg:justify-start">
                    <img src="/images/logo.svg" alt="logo" class="w-8" />
                    <h4 class="text-xl font-bold">Qualyval</h4>
                </div>
                <p class="mt-3 text-gray-500">Boost the productivity with AI & Automation</p>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="text-lg font-semibold">Product</h5>
                <ul class="flex flex-col items-start gap-5 font-medium text-gray-500">
                    <li>Twitter</li>
                    <li>Linkdin</li>
                    <li>TikTok</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="text-lg font-semibold">Recources</h5>
                <ul class="flex flex-col items-start gap-5 font-medium text-gray-500">
                    <li>Guide & Tutorials</li>
                    <li>Pricing</li>
                    <li>Changelog</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="text-lg font-semibold">Company Details</h5>
                <ul class="flex flex-col items-start gap-5 font-medium text-gray-500">
                    <li>Terms and Services</li>
                    <li>Privacy Policy</li>
                    <li>Abuse</li>
                    <li>Privacy Policy</li>
                    <li>Status</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h5 class="text-lg font-semibold">Get in Touch</h5>
                <ul class="flex flex-col items-start gap-5 font-medium text-gray-500">
                    <li>Sign Up Free</li>
                    <li>Sign In</li>
                    <li>Support</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="flex items-center justify-between w-full px-1 py-5 border-t sm:px-16 border-t-gray-200">
            <div class="w-1/2 text-sm font-medium text-gray-500 ">
                Qualyval &copy; 2023.All rights reserved  
            </div>
            <NuxtLink to="/privacy-policy" class="text-sm font-medium text-gray-500">
                PRIVACY POLICY
            </NuxtLink>
        </div>
    </footer>
</template>

<script setup>

</script>
