<script lang="ts" setup>
import { useRuntimeConfig } from '#app';
import { onMounted, ref } from 'vue';
import Cta from './Cta.vue';

const config = useRuntimeConfig()
const dataSource: string = '/images/home'
const rightPortrait = ref<string>('portrait-1.webp');
const leftPortrait = ref<string>('');

onMounted(() => {
    const randomImages: string[] = [...Array(4)].map((_, v) => `portrait-${v + 1}.webp`);
    randomImages.splice(0, 1);
    leftPortrait.value = randomImages[Math.floor(Math.random() * randomImages.length)] ?? ''
});

</script>
<template>
    <div class="h-[calc(100dvh-var(--spacing-web-ss))] sm:h-[85dvh] sm:max-h-[720px] sm:min-h-[720px]">
        <div class="relative h-full w-full overflow-hidden">
            <div :style="leftPortrait && { backgroundImage: `url(${dataSource}/${leftPortrait})` }"
                class="z-index-[-1] w-full sm:w-[80%] h-full absolute bg-cover bg-center transition duration-300 bg-no-repeat left-0 sm:[clip-path:polygon(0_0,_100%_0,_85%_100%,_0_100%)]">
                <span class="sr-only">Portrait, first photo</span>
            </div>
            <div :style="rightPortrait && { backgroundImage: `url(${dataSource}/${rightPortrait})` }"
                :class="`sm:block hidden z-index-[-2] w-[45%] h-full absolute bg-cover bg-center transition duration-300 bg-no-repeat right-0 [clip-path:polygon(0%_0,_100%_0,_100%_100%,_25%_100%)]`">
                <span class="sr-only">Portrait, second photo</span>
            </div>
            <div
                class="absolute w-full h-full bg-linear-to-r from-main-950/80 to-main-500/50 sm:from-main-950 sm:to-main-400/20">
            </div>
            <div class="absolute h-full items center flex text-white w-full">
                <div class="m-auto w-full container-site ">
                    <div>
                        <h1 class="w-full md:w-[65%] text-5xl font-semibold pb-[15px] text-center md:text-left">
                            {{ $t('home.greeting') }}
                            <span class="border-main-500 border-b-4">{{ config.public.name }}</span>
                        </h1>
                        <div class="w-full md:w-[65%] text-center md:text-left mt-5">
                            <span class="font-semibold text-2xl">{{ $t('home.portraitSubtitle') }}</span>
                        </div>
                        <div class="w-full mt-5">
                            <Cta />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>