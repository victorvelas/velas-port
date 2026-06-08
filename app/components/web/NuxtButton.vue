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
    main: "bg-main-500 hover:bg-main-600 ",
    secondary: "bg-gray-600 hover:bg-gray-700",
    outline: "bg-transparent hover:bg-main-500",
    ghost: "bg-transparent hover:bg-gray-500"
};
const sizes: VariantType = {
    sm: 'py-[3px] px-[14px]',
    md: 'py-[9px] px-[16px]',
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
        :class="['rounded-lg transition duration-300 border-2 border-main-500', props.strong ? 'font-bold' : '', buttonSizes, buttonVariants]">
        <slot />
    </button>
</template>