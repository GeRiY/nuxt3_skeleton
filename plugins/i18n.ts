import { createI18n } from 'vue-i18n'
import hu from '~/locales/hu.json'
import en from '~/locales/en.json'
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'hu',
        messages: {
            en,
            hu
        }
    })

    vueApp.use(i18n)
})