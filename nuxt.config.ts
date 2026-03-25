// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-25',
  devtools: { enabled: true },
  /** SSR включён по умолчанию в Nuxt 3 */
  ssr: true,
  nitro: {
    compatibilityDate: '2026-03-25',
  },
})
