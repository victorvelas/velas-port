import { computed } from "vue";

export const propsDefinition = {
    size: {
        type: Number,
        default: 5
    }
}



export const buildClasses = (size: number) => {

    const sizeClass = computed(() => {
        const mapping: Record<number, string> = {
            5: 'h-5 w-5',
            6: 'h-6 w-6'
        };
        return mapping[size] || 'h-5 w-5';
    });

    return { sizeClass }

} 