<template>
  <Navbar />
  <SectionHero />
  <!-- Trusted company and work done section -->
  <section class="px-4 mx-auto max-w-screen-2xl md:px-8 ">
    <div
      class="flex flex-col items-center w-full gap-5 py-6 border-t border-b md:gap-0 border-t-gray-200 border-b-gray-200">
      <h5 class="max-w-xl text-xl font-semibold text-center sm:text-3xl">Trusted by fast-moving companies and
        teams
        around the world</h5>
      <div class="flex flex-wrap items-center justify-around w-full gap-5 font-semibold ">
        <img src="/images/companies/fendi.webp" alt="fendi" class="w-20 duration-200 lg:hover:scale-110" />
        <img src="/images/companies/pernod_richerd.webp" alt="pernod_richard"
          class="duration-200 w-28 lg:hover:scale-110" />
        <img src="/images/companies/world_duyy_free.webp" alt="world_duty_free"
          class="duration-200 w-36 lg:hover:scale-110" />
        <img src="/images/companies/SLEEK.webp" alt="Sleek" class="duration-200 w-28 lg:hover:scale-110" />
        <img src="/images/companies/viadex.webp" alt="viadex" class="duration-200 w-28 lg:hover:scale-110" />
      </div>
    </div>
  </section>
  <SectionAutomation />
  <SectionWorkflow />
  <SectionTestimonials />
  <SectionBanner />
  <SectionNewsLetter />
  <SectionContact />
  <SectionFoooter />
</template>

<script setup>
useHead({
  script:[
    {src:`https://www.googletagmanager.com/gtag/js?id=${useRuntimeConfig().public.googleAnalyticsId}`,async:true}
  ]
})
onMounted(()=>{
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-L7PSZ45ZTZ');
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

body {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-gray-100
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  width: 4px;
  height: 4px;
  @apply bg-gray-500 rounded-full
}
</style>