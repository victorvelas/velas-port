<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { defineAsyncComponent } from 'vue';
import { useNavigationLinks } from '~/composables/useNavigationLinks';

const currentYear = new Date().getFullYear();
const { navigationLinks } = useNavigationLinks()
const config = useRuntimeConfig();

const socialLinks = [
    {
        name: 'GitHub', 
        href: config.public.githubUrl, 
        icon: defineAsyncComponent(() => import(`~/components/web/icons/github.vue`))
    },
    {
        name: 'LinkedIn', 
        href: config.public.linkedinUrl, 
        icon: defineAsyncComponent(() => import(`~/components/web/icons/linkedin.vue`))
    }
];


</script>

<template>
    <footer class="relative border-t border-main-600 dark:bg-gray-950 text-gray-400">
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">

            <div class="flex justify-center space-x-6 md:order-3">
                <div class="text-center md:text-left">
                    <p class="text-sm font-semibold tracking-wider text-tol dark:text-white uppercase">Victor.dev</p>
                    <p class="mt-1 text-xs text-gray-500">Diseñando soluciones full-stack eficientes.</p>
                </div>
            </div>

            <div class="mt-8 flex justify-center space-x-6 md:order-2 md:mt-0">
                <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
                    <li v-for="link in navigationLinks" :key="link.name">
                        <NuxtLinkLocale :to="link.to"
                            class="hover:text-main-500 dark:hover:text-white transition-colors duration-200"
                            active-class="!border-main-500 text-main-600 font-semibold">
                            {{ link.name }}
                        </NuxtLinkLocale>
                    </li>
                </ul>
            </div>

            <div class="mt-8 md:order-1 md:mt-0 flex flex-col items-center md:items-start gap-y-4">
                <div class="flex space-x-6">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-500 hover:text-main-500 dark:hover:text-white transition-colors duration-200">
                        <span class="sr-only">{{ social.name }}</span>
                        <component :is="social.icon" v-if="social.icon" />
                    </a>
                </div>
                <p class="text-center text-xs leading-5 text-gray-500 md:text-left">
                    &copy; {{ $t('common.footer.allRightsReserved', { year: currentYear, name: config.public.name }) }}
                </p>
            </div>

        </div>
    </footer>
</template>