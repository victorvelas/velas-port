import { useRuntimeConfig } from "#app";
import { ref } from "vue";

export function useExperienceYears() {
    const config = useRuntimeConfig();
    const currentYear = new Date().getFullYear();
    const startYear: number = Number(config.public.startYear);
    const experienceYears = ref<number>(currentYear - startYear);
    return { experienceYears };
}