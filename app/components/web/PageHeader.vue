<script lang="ts" setup>
defineProps({
    title: { type: String, default: 'Page Title' },
    subtitle: { type: String, default: 'Discover more about my journey' },
    miniPortraitBg: { type: String, required: true }
})
</script>

<template>
    <section
        class="relative h-[220px] md:h-[260px] w-full flex items-center overflow-hidden mb-12 border-b border-gray-300/30 dark:border-white/10 bg-gray-50 dark:bg-[#0b0f19]">

        <div class="absolute inset-0 w-full h-full select-none pointer-events-none">
            <img :src="miniPortraitBg" alt=""
                class="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100" />
            <div
                class="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-[#0b0f19] dark:via-[#0b0f19]/80 mix-blend-normal">
            </div>
            <div
                class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#0b0f19] via-transparent to-transparent">
            </div>
        </div>

        <div
            class="absolute inset-0 bg-gradient-to-tr from-main-500/15 via-main-500/5 to-transparent dark:from-main-500/10 dark:via-transparent pointer-events-none">
            <span class="sr-only">Portrait overlay ambient tint</span>
        </div>

        <div class="relative w-full z-10">
            <div class="container-site py-6 relative">

                <div
                    class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-main-500 rounded-full hidden sm:block">
                </div>

                <div class="flex flex-col gap-2">
                    <h1
                        class="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                        {{ title }}
                    </h1>

                    <span
                        class="text-xs md:text-sm font-bold uppercase tracking-widest text-main-600 dark:text-main-400">
                        {{ subtitle }}
                    </span>
                </div>

            </div>
        </div>

        <div
            class="absolute top-0 right-1/4 w-64 h-64 bg-main-500/10 dark:bg-main-500/5 rounded-full blur-3xl pointer-events-none">
        </div>
    </section>
</template>