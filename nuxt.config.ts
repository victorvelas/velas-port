import tailwindcss from "@tailwindcss/vite";
import { localeI18nOptions } from "./i18n/i18n.options";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-06',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css', './app/assets/css/page.css'],
  srcDir: 'app/',

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      name: import.meta.env.NAME,
      githubUrl: import.meta.env.GITHUB_URL,
      linkedinUrl: import.meta.env.LINKEDIN_URL,
      startYear: import.meta.env.START_YEAR,
    }
  },

  imports: {
    autoImport: false,
    scan: false
  },

  components: [],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n'],
  i18n: localeI18nOptions as any,
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  }
})