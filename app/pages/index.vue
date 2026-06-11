<script setup lang="ts">
import Portrait from '~/components/Home/Portrait.vue';
import { useMetrics, useRelevances } from '~/composables/forPages/useHome';

const { metrics } = useMetrics();
const { pillars } = useRelevances();

</script>

<template>
    <div class="space-y-20 pb-24">

        <!-- SECTION 1: Your High-Impact Portrait Hero Section -->
        <Portrait />

        <!-- SECTION 2: Impact Metric Bar (Minimalist Luxury Proof Layer) -->
        <section class="container-site relative">
            <div
                class="grid grid-cols-1 md:grid-cols-3 border border-gray-200 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-bod-soft/20 backdrop-blur-md divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10 shadow-lg shadow-gray-200/20 dark:shadow-none overflow-hidden">
                <div v-for="(metric, idx) in metrics" :key="idx"
                    class="p-6 md:p-8 text-center md:text-left flex flex-col justify-center relative group">
                    <!-- Subtle interactive corner ambient accent glow -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-main-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    </div>
                    <span
                        class="text-4xl md:text-5xl font-black tracking-tight text-main-600 dark:text-main-400 font-mono mb-2 block">
                        {{ metric.value }}
                    </span>
                    <span class="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        {{ $t(metric.label) }}
                    </span>
                </div>
            </div>
        </section>

        <!-- SECTION 3: Featured Pillars / Focus Grid (What you build) -->
        <section class="container-site">
            <!-- Section Title Component Alignment -->
            <div class="flex items-center gap-3 mb-10">
                <div class="flex flex-col">
                    <span
                        class="text-[10px] font-mono font-bold tracking-widest text-main-600 dark:text-main-400 uppercase mb-1">
                        Core Competencies
                    </span>
                    <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Core Fields of Focus
                    </h2>
                </div>
                <div
                    class="h-px flex-1 bg-gradient-to-r from-gray-300/50 dark:from-white/15 to-transparent self-end mb-2">
                </div>
            </div>

            <!-- Bento-inspired Architectural Card Stack Grid Layout -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(pillar, idx) in pillars" :key="idx"
                    class="relative p-6 md:p-8 rounded-2xl border border-gray-200/60 dark:border-white/5 bg-gradient-to-b from-gray-50 to-transparent dark:from-white/[0.02] dark:to-transparent flex flex-col justify-between group hover:border-main-500/30 dark:hover:border-main-500/20 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    <!-- Background geometric structural design detailing -->
                    <div
                        class="absolute right-4 top-4 text-4xl opacity-10 dark:opacity-[0.05] group-hover:scale-125 group-hover:text-main-500 group-hover:opacity-30 dark:group-hover:opacity-20 transition-all duration-500 pointer-events-none font-mono">
                        {{ pillar.icon }}
                    </div>
                    <div>
                        <!-- Monospaced numerical identity tracking element -->
                        <div
                            class="text-[10px] font-mono font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-4 select-none">
                            MODULE // 0{{ idx + 1 }}
                        </div>
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-3 group-hover:text-main-600 dark:group-hover:text-main-400 transition-colors duration-300">
                            {{ $t(pillar.titleTag) }}
                        </h3>
                        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                            {{ $t(pillar.descTag) }}
                        </p>
                    </div>
                    <div
                        class="w-8 h-[2px] bg-gray-300 dark:bg-white/15 mt-6 group-hover:w-full group-hover:bg-main-500 transition-all duration-500 rounded-full">
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: Streamlined Call to Action Layer (Route Router) -->
        <section class="container-site text-center pt-8">
            <div
                class="relative inline-flex items-center gap-4 p-1 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-bod-soft/40 backdrop-blur-md shadow-md">
                <NuxtLinkLocale to="/my-projects"
                    class="px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-main-500 text-white shadow-lg shadow-main-500/20 hover:bg-main-600 transition-all duration-300">
                    {{ $t('home.exploreProjects') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale to="/about-me"
                    class="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 mr-2">
                    {{ $t('home.readFullJourney') }} →
                </NuxtLinkLocale>
            </div>
        </section>

    </div>
</template>