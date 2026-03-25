export default defineEventHandler(() => {
  return {
    message: 'Привет с API Nuxt (выполняется на сервере)',
    at: new Date().toISOString(),
  }
})
