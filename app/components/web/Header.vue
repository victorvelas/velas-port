<script lan="ts" setup>
import { ref } from 'vue';
import { useNavigationLinks } from '~/composables/useNavigationLinks';
import ThemeSelector from './colorMode/ThemeSelector.vue';
import LangSelector from './I18n/LangSelector.vue';

const { navigationLinks } = useNavigationLinks();
const isOpen = ref(false);

</script>
<template>
    <header
        class="fixed top-0 left-0 z-50 h-web-ss w-full backdrop-blur-md bg-white/80 dark:bg-bod/80 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        <nav class="h-full container-site flex items-center justify-between">

            <div class="flex items-center md:hidden z-50">
                <span class="sr-only">Logo</span>
            </div>

            <div class="flex-1 flex justify-start md:hidden">
                <button @click="isOpen = !isOpen" type="button"
                    class="flex flex-col justify-center items-center w-8 h-8 rounded-lg p-1 z-50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Toggle menu">
                    <span
                        :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full transition-all duration-300', isOpen ? 'rotate-45 translate-y-2' : '']"></span>
                    <span
                        :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full my-1 transition-all duration-300', isOpen ? 'opacity-0' : '']"></span>
                    <span
                        :class="['h-0.5 w-6 bg-main-600 dark:bg-main-400 rounded-full transition-all duration-300', isOpen ? '-rotate-45 -translate-y-1' : '']"></span>
                </button>
            </div>

            <ul :class="[
                'fixed inset-y-0 left-0 z-40 flex flex-col md:flex-row h-screen md:h-full w-4/5 max-w-sm md:w-auto bg-white dark:bg-zinc-900 md:bg-transparent dark:md:bg-transparent p-6 md:p-0 pt-24 md:pt-0 gap-4 md:gap-2 border-r md:border-r-0 border-gray-200 dark:border-zinc-800 shadow-xl md:shadow-none transition-transform duration-300 md:transition-none md:translate-x-0 md:relative',
                isOpen ? 'translate-x-0' : '-translate-x-full'
            ]">
                <li v-for="item in navigationLinks" :key="item.to" class="h-12 md:h-full">
                    <NuxtLinkLocale :to="item.to" @click="isOpen = false"
                        class="flex w-auto h-full items-center md:justify-center px-4 md:px-4 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-main-300 hover:bg-main-50/50 dark:hover:bg-main-950/20 transition-all text-base md:text-sm font-medium text-main-400 dark:text-zinc-400 hover:text-main-600 dark:hover:text-main-300 whitespace-nowrap"
                        active-class="!border-main-500 text-main-600 dark:text-main-400 font-semibold bg-main-50/50 dark:bg-main-950/20 md:bg-transparent dark:md:bg-transparent">
                        {{ item.name }}
                    </NuxtLinkLocale>
                </li>
            </ul>

            <div class="justify-end flex items-right gap-2 z-50">
                <LangSelector />
                <ThemeSelector />
            </div>

            <div v-if="isOpen" @click="isOpen = false"
                class="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden z-30"></div>

        </nav>
    </header>
</template>