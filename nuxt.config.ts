// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss','@nuxt/image'],
  runtimeConfig:{
    public:{
      url:""
    }
  },
  app:{
    head:{
      title:"Qualyval - Ai & Automation",
      meta:[
        {name:'description',content:"Make your repetitive work done automate with the help of your team. We are here for you to make your life easy with AI and Automation, So you can focus on your other important task"}
      ],
      htmlAttrs:{
        lang:'en'
      }
    },
  },
  image:{
    provider:'ipx'
  }
})
