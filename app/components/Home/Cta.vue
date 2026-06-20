<script setup lang="ts">
import { navigateTo } from '#app';
import { useLocalePath } from '#imports';
import NuxtButton from '../web/NuxtButton.vue';
const localePath = useLocalePath()

const handleNavigation = (pathDestiny: string) => {
    navigateTo(localePath(pathDestiny));
}
</script>
<template>
    <div class="flex gap-1 justify-center md:justify-start">
        <NuxtButton variant="main" @click.prevent="handleNavigation('/about-me')" class="cursor-pointer">
            {{ $t('common.menu.about') }}
        </NuxtButton>
    </div>
</template>