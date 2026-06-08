<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { useNavigationLinks } from '~/composables/useNavigationLinks';

const currentYear = new Date().getFullYear();
const { navigationLinks } = useNavigationLinks()
const config = useRuntimeConfig();

const socialLinks = [
    { name: 'GitHub', href: config.public.githubUrl, icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { name: 'LinkedIn', href: config.public.linkedinUrl, icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
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
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path :d="social.icon" />
                        </svg>
                    </a>
                </div>
                <p class="text-center text-xs leading-5 text-gray-500 md:text-left">
                    &copy; {{ $t('common.footer.allRightsReserved', { year: currentYear, name: config.public.name }) }}
                </p>
            </div>

        </div>
    </footer>
</template>