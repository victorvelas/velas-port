<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    variant: { type: String, default: 'main' },
    size: { type: String, default: 'md' },
    strong: { type: Boolean, default: false }
})

type VariantType = {
    [k: string]: string
};

const variants: VariantType = {
    main: "bg-main-500 border-main-500 hover:bg-main-600 disabled:bg-main-500/40 disabled:border-main-500/20",
    secondary: "bg-gray-600 border-gray-500 hover:bg-gray-700",
    outline: "bg-transparent border-main-500 hover:bg-transparent",
    ghost: "bg-transparent border-gray-500 hover:bg-gray-500"
};
const sizes: VariantType = {
    sm: 'py-[3px] px-[14px]',
    md: 'py-[7px] px-[14px]',
    lg: 'py-[15px] px-[20px]',
}

const getCompute = (origin: VariantType, _property: string): string => {
    return (origin[_property] as string);
}

const buttonVariants = computed((): string => getCompute(variants, props.variant));
const buttonSizes = computed((): string => getCompute(sizes, props.size));

</script>

<template>
    <button type="button"
        :class="['rounded-lg transition duration-300 border-2 text-white disabled:cursor-not-allowed', props.strong ? 'font-bold' : '', buttonSizes, buttonVariants]">
        <slot />
    </button>
</template>