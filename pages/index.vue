<template>
  <div>
    <Navbar />
    <SectionHero />
    <!-- Trusted company and work done section -->
    <section class="max-w-screen-xl px-4 mx-auto md:px-16 ">
      <div class="grid w-full grid-cols-1 gap-5 py-10 border-t border-b md:gap-0 md:grid-cols-2 border-t-gray-200 border-b-gray-200">
        <h3 class="text-xl font-semibold sm:text-2xl">Trusted by fast-moving companies and teams around the world</h3>
        <div class="flex items-center justify-end gap-5 font-semibold ">
          <div class="flex flex-col gap-1 text-lg sm:text-xl">+1200
            <span class="text-sm text-gray-500 sm:text-base">Active members</span>
          </div>
          <div class="flex flex-col gap-1 text-lg sm:text-xl">+200
            <span class="text-sm text-gray-500 sm:text-base">Companies use</span>
          </div>
          <div class="flex flex-col gap-1 text-lg sm:text-xl">+15000
            <span class="text-sm text-gray-500 sm:text-base">Work automated</span>
          </div>
        </div>
      </div>
    </section>
    <SectionAutomation />
    <SectionWorkflow />
    <SectionTestimonials/>
    <SectionIntegration />
    <SectionBanner />
    <SectionNewsLetter />
    <SectionFoooter/>
  </div>
</template>

<script setup>

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

body {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}
.custom-scrollbar::-webkit-scrollbar{
  width:4px;
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track{
  @apply bg-gray-100
}

.custom-scrollbar::-webkit-scrollbar-thumb{
  width: 4px;
  height: 4px;
  @apply bg-gray-500 rounded-full
}
</style>