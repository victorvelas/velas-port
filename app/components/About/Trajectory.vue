<script lang="ts" setup>
import Piece from '~/components/web/Piece.vue';
import { useStages, type TrajectorySegment } from '~/composables/forPages/useAboutMe';

const { activeIndex, setActiveIndex, stages, isActiveIndex } = useStages()
</script>

<template>
    <div class="container-site mb-16">
        <!-- Section Header matching your design language -->
        <div class="flex items-center gap-3 mb-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ $t('about.trajectory.title') }}
            </h2>
            <div class="h-px flex-1 bg-gradient-to-r from-gray-300/50 dark:from-white/15 to-transparent"></div>
        </div>

        <Piece>
            <div
                class="relative w-full border border-gray-200 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-bod-soft/20 backdrop-blur-md p-6 md:p-10 overflow-hidden shadow-xl shadow-gray-200/40 dark:shadow-none">

                <!-- Subtle Interior Engineering Grid Line Art -->
                <div
                    class="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px)] bg-[size:40px] pointer-events-none">
                </div>

                <div class="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">

                    <!-- LEFT SIDE: Architectural Vertical Control Track Dial -->
                    <div
                        class="flex flex-row md:flex-col justify-start gap-4 md:gap-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 pb-4 md:pb-0 md:pr-8 shrink-0">
                        <button v-for="(stage, idx) in stages" :key="stage.id" @click.prevent="setActiveIndex(idx)"
                            class="group flex items-center gap-4 text-left transition-all duration-300 relative py-1 cursor-pointer"
                            role="tab" :aria-selected="isActiveIndex(idx)">
                            <!-- Active Highlight Line Accent Bar (Desktop only) -->
                            <div class="absolute -right-[33px] top-1/2 -translate-y-1/2 w-[2px] h-8 bg-main-500 hidden md:block transition-all duration-300 origin-center"
                                :class="isActiveIndex(idx) ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'">
                            </div>

                            <!-- Index Circular Node Identifier -->
                            <div class="h-10 w-10 rounded-xl border flex items-center justify-center font-mono text-sm font-bold transition-all duration-500"
                                :class="isActiveIndex(idx)
                                    ? 'bg-main-500 text-white border-main-500 shadow-lg shadow-main-500/20 scale-105'
                                    : 'bg-transparent text-gray-400 dark:text-gray-500 border-gray-300/60 dark:border-white/10 group-hover:border-gray-400 dark:group-hover:border-white/30 group-hover:text-gray-700 dark:group-hover:text-gray-300'">
                                {{ stage.phase }}
                            </div>

                            <!-- Text Label attached next to step indicator (Hidden on mobile for micro layout beauty) -->
                            <div class="hidden md:flex flex-col select-none">
                                <span class="text-xs font-mono font-bold tracking-widest transition-colors duration-300"
                                    :class="isActiveIndex(idx) ? 'text-main-600 dark:text-main-400' : 'text-gray-400 dark:text-gray-500'">
                                    {{ $t('about.trajectory.stage') }}
                                </span>
                                <span class="text-sm font-bold tracking-tight transition-colors duration-300"
                                    :class="isActiveIndex(idx) ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'">
                                    {{ $t(stage.titleKey) }}
                                </span>
                            </div>
                        </button>
                    </div>

                    <!-- RIGHT SIDE: The Cinematic Text Presentation Stage Slider Box -->
                    <div class="flex-1 flex flex-col justify-between min-h-[220px] relative">

                        <!-- Floating Technical Watermark Coordinate Stamp -->
                        <div
                            class="absolute right-0 top-0 font-mono text-[10px] tracking-widest text-gray-300 dark:text-white/5 select-none pointer-events-none hidden sm:block">
                            LOC // [0x7F]_[SYS_INIT]
                        </div>

                        <!-- Main Dynamic Narrative Frame Loop -->
                        <div class="relative flex-1">
                            <transition mode="out-in" enter-active-class="transition duration-300 ease-out"
                                enter-from-class="opacity-0 translate-y-2 filter blur-sm"
                                enter-to-class="opacity-100 translate-y-0 filter blur-none"
                                leave-active-class="transition duration-200 ease-in"
                                leave-from-class="opacity-100 translate-y-0"
                                leave-to-class="opacity-0 -translate-y-2 filter blur-sm">
                                <div :key="activeIndex" class="space-y-4">
                                    <!-- Chapter Heading Metadata Label -->
                                    <div
                                        class="text-xs font-mono font-bold tracking-widest text-main-600 dark:text-main-400 flex items-center gap-2">
                                        <span class="h-1 w-1 rounded-full bg-main-500 animate-pulse"></span>
                                        {{ $t((stages[activeIndex] as TrajectorySegment).meta, {
                                            count: (activeIndex + 1).toString().padStart(2, '0')
                                        }) }}
                                    </div>

                                    <!-- The Narrative Text Block -->
                                    <p
                                        class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal tracking-wide">
                                        {{ $t((stages[activeIndex] as TrajectorySegment).paraKey) }}
                                    </p>
                                </div>
                            </transition>
                        </div>

                        <!-- Bottom Graphical Indicator Bar Details -->
                        <div
                            class="mt-6 pt-4 border-t border-gray-200/40 dark:border-white/5 flex items-center justify-between">
                            <div class="flex gap-1">
                                <div v-for="(_, i) in stages" :key="i"
                                    class="h-1 rounded-full transition-all duration-300"
                                    :class="isActiveIndex(i) ? 'w-6 bg-main-500' : 'w-2 bg-gray-200 dark:bg-white/10'">
                                </div>
                            </div>
                            <span
                                class="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 select-none">
                                {{ $t('about.trajectory.interactiveJourneyDeck') }}
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </Piece>
    </div>
</template>