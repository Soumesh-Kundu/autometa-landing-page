<template>
  <div>
    <Navbar />
    <SectionHero />
    <!-- Trusted company and work done section -->
    <section class="px-4 mx-auto max-w-screen-2xl md:px-8 ">
      <div class="flex flex-col items-center w-full gap-5 py-6 border-t border-b md:gap-0 border-t-gray-200 border-b-gray-200">
        <h5 class="max-w-xl text-xl font-semibold text-center sm:text-3xl">Trusted by fast-moving companies and teams around the world</h5>
        <div class="flex flex-wrap items-center justify-around w-full gap-5 font-semibold ">
          <nuxt-img src="/images/companies/fendi.png" format="webp"  class="w-20 " />
          <nuxt-img src="/images/companies/pernod_richerd.png" format="webp"  class="w-28" />
          <nuxt-img src="/images/companies/world_duyy_free.png" format="webp"  class="w-36" />
          <nuxt-img src="/images/companies/SLEEK.jpg" format="webp"  class="w-28" />
          <nuxt-img src="/images/companies/viadex.png"  format="webp" class="w-28" />
        </div>
      </div>
    </section>
    <SectionAutomation />
    <SectionWorkflow />
    <SectionTestimonials/>
    <SectionBanner />
    <SectionNewsLetter />
    <SectionContact />
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