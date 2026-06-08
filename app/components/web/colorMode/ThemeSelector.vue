<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useColorMode } from '#imports';
import DropDownMenu from '../forms/DropDown/DropDownMenu.vue';

const colorMode = useColorMode();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const themes = [
    { value: 'system', label: 'System', icon: '💻' },
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' }
];

</script>

<template>
    <ClientOnly>
        <DropDownMenu v-model="colorMode.preference" :items="themes" />

        <template #fallback>
            <div
                class="w-40 h-[38px] bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg animate-pulse">
            </div>
        </template>
    </ClientOnly>
</template>

<style scoped>
.-rotate-135 {
    transform: rotate(-135deg);
}
</style>