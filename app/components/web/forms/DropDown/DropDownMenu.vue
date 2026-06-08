<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { DropdownItem } from '~/utils/web/DropDown';

// Definimos una interfaz genérica para los elementos del combo


const props = defineProps<{
    modelValue: string;
    items: DropdownItem[];
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'on-select', value: DropdownItem | undefined): void;
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const findItemByValue = (value: string | number) => {
    return props.items.find(item => item.value === value);
}

// Encontramos el elemento seleccionado actual para mostrarlo en el botón
const selectedItem = computed<DropdownItem>((): DropdownItem => {
    return (findItemByValue(props.modelValue) || props.items[0]) as DropdownItem;
});

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const selectItem = (value: string) => {
    emit('update:modelValue', value);
    emit('on-select', findItemByValue(value));
    isOpen.value = false;
};



onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <div ref="dropdownRef" class="relative inline-block text-left text-sm">
        <button @click="isOpen = !isOpen" type="button"
            class="flex items-center justify-between w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-sm text-gray-700 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-700/50 focus:outline-none transition-colors duration-200">
            <span class="flex items-center gap-2">
                <span v-if="selectedItem?.icon">{{ selectedItem.icon }}</span>
                <span>{{ selectedItem?.label }}</span>
            </span>
            <span
                class="ml-2 h-4 w-4 border-r-2 border-b-2 border-gray-400 dark:border-zinc-400 transform transition-transform duration-200"
                :class="isOpen ? '-rotate-135 translate-y-0.5' : 'rotate-45 -translate-y-0.5'"
                style="display: inline-block; width: 6px; height: 6px;"></span>
        </button>

        <Transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen"
                class="absolute right-0 z-50 mt-1.5 w-full origin-top-right rounded-lg bg-bol dark:bg-bod shadow-lg border border-gray-200 dark:border-zinc-700 focus:outline-none overflow-hidden">
                <div class="py-1">
                    <button v-for="item in items" :key="item.value" @click="selectItem(item.value)" :class="[
                        'flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-bod/50 transition-colors',
                        modelValue === item.value
                            ? 'text-main-500 dark:text-main-400 font-medium bg-gray-50 dark:bg-bod/30'
                            : 'text-gray-700 dark:text-zinc-300'
                    ]">
                        <span v-if="item.icon">{{ item.icon }}</span>
                        <span>{{ item.label }}</span>
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.-rotate-135 {
    transform: rotate(-135deg);
}
</style>