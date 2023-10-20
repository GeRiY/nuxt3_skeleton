export default defineNuxtConfig({
  runtimeConfig: {
    // Will be available in both server and client
    public: {
        baseUrl: process.env.BASE_URL
    }
  },
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt3-vuex-module'
  ],
  plugins: [
    '~/mixins/appMixin.ts'
  ],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: 'Ui'
    },
  ],
})