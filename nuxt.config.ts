export default defineNuxtConfig({
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
  ssr: false,
  router: {
    options: {
      hashMode: true
    }
  }
})