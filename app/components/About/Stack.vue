<script lang="ts" setup>
import { computed } from 'vue';

interface TechItem {
    name: string;
    icon: string;
}

interface StackCategory {
    id: string;
    key: string;
    items: TechItem[];
}

const categories: StackCategory[] = [
    {
        id: 'backend',
        key: 'backend',
        items: [
            { name: 'PHP', icon: 'php.svg' },
            { name: 'Laravel', icon: 'laravel.svg' },
        ],
    },
    {
        id: 'frontend',
        key: 'frontend',
        items: [
            { name: 'JavaScript', icon: 'javascript.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
            { name: 'Vue.js', icon: 'vue.svg' },
            { name: 'Nuxt', icon: 'nuxtjs.svg' },
            { name: 'React', icon: 'react.svg' },
            { name: 'Tailwind CSS', icon: 'tailwind.svg' },
        ],
    },
    {
        id: 'database',
        key: 'database',
        items: [
            { name: 'PostgreSQL', icon: 'postgresql.svg' },
            { name: 'MySQL', icon: 'mysql.svg' },
            { name: 'SQL Server', icon: 'microsoftsqlserver.svg' },
        ],
    },
    {
        id: 'tools',
        key: 'tools',
        items: [
            { name: 'Git', icon: 'git.svg' },
        ],
    },
];
</script>

<template>
    <div class="container-site mb-12">
        <div class="flex items-center gap-3 mb-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ $t('about.stack.title') }}
            </h2>
            <div class="h-px flex-1 bg-gradient-to-r from-gray-300/50 dark:from-white/15 to-transparent"></div>
        </div>

        <div class="space-y-8">
            <div v-for="category in categories" :key="category.id" class="space-y-3">
                <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {{ $t(`about.stack.categories.${category.key}`) }}
                </h3>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <NuxtLinkLocale v-for="tech in category.items" :key="tech.name"
                        :to="`/my-projects?tech=${tech.name}`" :title="$t('about.stack.clickHere', { tech: tech.name })"
                        class="group relative flex flex-col items-center justify-center p-5 rounded-xl border border-gray-300/40 dark:border-white/10 backdrop-blur-md bg-gray-200/5 dark:bg-bod-soft/30 hover:bg-white dark:hover:bg-bod-soft/80 hover:shadow-lg transition-all duration-300 ease-out overflow-hidden hover:-translate-y-1 hover:border-main-500/50 hover:shadow-main-500/5">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-transparent to-gray-500/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>

                        <div
                            class="mb-3 h-20 w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img :src="`/icons/about/${tech.icon}`" :alt="`${tech.name} logo`"
                                class="min-h-full max-h-full min-w-full max-w-full object-contain filter grayscale-[15%] opacity-80 dark:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                loading="lazy" />
                        </div>

                        <span
                            class="font-medium text-sm text-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                            {{ tech.name }}
                        </span>
                    </NuxtLinkLocale>
                </div>
            </div>
        </div>
    </div>
</template>