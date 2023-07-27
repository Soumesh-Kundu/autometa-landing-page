import VueGtag,{trackRouter} from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    if(useRuntimeConfig().public.googleAnalyticsId){
        nuxtApp.vueApp.use(VueGtag,{
            property: {
                id:useRuntimeConfig().public.googleAnalyticsId ,
            },
        })
        trackRouter(useRouter())
    }
})
