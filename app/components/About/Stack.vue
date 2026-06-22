<script lang="ts" setup>
import { categories } from '~/composables/forPages/useAboutMe';
</script>

<template>
    <div class="container-site mb-16">
        <div class="flex items-center gap-4 mb-4">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {{ $t('about.stack.title') }}
            </h2>
            <div class="h-px flex-1 bg-gradient-to-r from-gray-300 dark:from-white/20 to-transparent"></div>
        </div>
        <div class="w-full">
            <p class="text-base sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ $t('about.stack.description') }}
            </p>
        </div>
    </div>

    <section v-for="(category, index) in categories" :key="category.id" :class="[
        'py-12 md:py-16 transition-colors duration-300',
        index % 2 === 0 ? 'bg-bod/3 dark:bg-bol/3' : 'bg-transparent'
    ]">
        <div class="container-site">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                <div class="lg:sticky lg:top-24 space-y-3">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-main-500 inline-block bg-main-500/10 px-2.5 py-1 rounded-md">
                        {{ $t(`about.stack.categories.${category.key}`) }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                        {{ $t(`about.stack.paragraphs.${category.key}`) }}
                    </p>
                </div>
                <div class="lg:col-span-2">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <NuxtLinkLocale v-for="tech in category.items" :key="tech.name" :to="`/my-projects?tech=${tech.name}`"
                            :title="$t('about.stack.clickHere', { tech: tech.name })" class="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-bod-soft/20 hover:bg-white dark:hover:bg-bod-soft/40 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-main-500/50 dark:hover:border-main-500/50 hover:shadow-xl hover:shadow-main-500/5">
                            <div class="absolute inset-0 bg-gradient-to-br from-main-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        
                            <div class="mb-4 h-16 w-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img 
                                    :src="`/icons/about/${tech.icon}`" 
                                    :alt="`${tech.name} logo`"
                                    class="h-full w-full object-contain filter opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_4px_12px_rgba(var(--color-main-500),0.2)] transition-all duration-300"
                                    loading="lazy" 
                                />
                            </div>
                            <span class="font-medium text-sm text-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                {{ tech.name }}
                            </span>
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>