<script lang="ts" setup>
import Piece from '~/components/web/Piece.vue';
import { useHobbies } from '~/composables/forPages/useAboutMe';

const { hobbies, activeHobbyId, currentHobby, toggleHobby, setActiveHobbyId } = useHobbies();
</script>

<template>
    <div class="container-site mb-12">
        <div class="flex items-center gap-3 mb-2">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ $t('about.hobbies.title') }}
            </h2>
            <div class="h-px flex-1 bg-gradient-to-r from-gray-300/50 dark:from-white/15 to-transparent"></div>
        </div>

        <p class="text-gray-600 dark:text-gray-400 w-full mb-8 text-sm sm:text-base leading-relaxed">
            {{ $t('about.hobbies.description') }}
        </p>

        <Piece>
            <div class="flex flex-col lg:flex-row gap-6 items-start transition-all duration-500">

                <div class="grid grid-cols-2 gap-4 auto-rows-[120px] transition-all duration-500 w-full"
                    :class="activeHobbyId ? 'lg:w-[55%] md:grid-cols-2' : 'md:grid-cols-4'">
                    <button v-for="hobby in hobbies" :key="hobby.key" @click="toggleHobby(hobby.id)" :class="[
                        activeHobbyId ? 'col-span-2 row-span-1' : hobby.gridClass,
                        hobby.gradient,
                        activeHobbyId === hobby.id ? 'border-main-500 dark:border-main-400 bg-white dark:bg-bod-soft/90 shadow-lg ring-2 ring-main-500/20' : 'border-gray-300/40 dark:border-white/10 bg-gray-200/5 dark:bg-bod-soft/30 hover:bg-white dark:hover:bg-bod-soft/80',
                        'group relative flex items-end p-6 rounded-2xl border backdrop-blur-md hover:shadow-xl transition-all duration-500 ease-out overflow-hidden text-left w-full'
                    ]">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div
                            class="absolute -right-4 -top-4 text-7xl select-none opacity-10 dark:opacity-5 group-hover:opacity-20 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out pointer-events-none">
                            {{ hobby.icon }}
                        </div>

                        <div class="relative z-10 flex flex-col gap-1 w-full">
                            <span
                                class="text-xl inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 shadow-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                {{ hobby.icon }}
                            </span>
                            <span
                                class="font-bold text-lg tracking-tight text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 mt-2">
                                {{ $t(hobby.key) }}
                            </span>
                        </div>

                        <div
                            class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:w-full transition-all duration-700">
                        </div>
                    </button>
                </div>

                <div class="w-full transition-all duration-500 origin-top lg:origin-right"
                    :class="activeHobbyId ? 'lg:w-[45%] opacity-100 scale-100 visible h-auto' : 'lg:w-0 opacity-0 scale-95 invisible h-0 lg:h-auto overflow-hidden'">
                    <div v-if="currentHobby"
                        class="relative rounded-2xl border border-gray-300/40 dark:border-white/10 bg-main-200/80 dark:bg-bod-soft/60 backdrop-blur-md p-5 shadow-xl flex flex-col h-[350px] justify-between overflow-hidden group">

                        <button @click="setActiveHobbyId(null)"
                            class="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-gray-200/50 dark:bg-white/10 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-colors duration-200"
                            :title="$t('about.hobbies.closePreview')">
                            ✕
                        </button>

                        <div
                            class="absolute inset-0 z-0 opacity-20 dark:opacity-15 group-hover:opacity-70 transition-opacity duration-500">
                            <img :src="currentHobby.gif" :alt="$t('about.hobbies.altHobbyImg')"
                                class="w-full h-full object-cover filter scale-105 group-hover:scale-100 transition-all duration-700 ease-out" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-[#fffffffb] dark:from-[#0b0f19] via-transparent to-transparent">
                            </div>
                        </div>

                        <div class="relative z-10 mt-auto">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-2xl">{{ currentHobby.icon }}</span>
                                <h4 class="font-bold text-xl text-gray-900 dark:text-white tracking-tight">
                                    {{ $t(currentHobby.key) }}
                                </h4>
                            </div>
                            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                                {{ $t(`about.hobbies.descriptions.${currentHobby.id}`) }}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </Piece>
    </div>
</template>