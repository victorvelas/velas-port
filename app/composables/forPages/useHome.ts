import { computed } from "vue";
import { useExperienceYears } from "../useApplication";

export const useRelevances = () => {

    const pillars = computed(() => [
        {
            icon: '✦',
            titleTag: 'home.relevances.arcAndDesignt.title',
            descTag: 'home.relevances.arcAndDesignt.description',
        },
        {
            icon: '⚡',
            titleTag: 'home.relevances.performance.title',
            descTag: 'home.relevances.performance.description',
        },
        {
            icon: '⎔',
            titleTag: 'home.relevances.creativity.title',
            descTag: 'home.relevances.creativity.description',
        },
    ]);

    return { pillars }
}

export const useMetrics = () => {
    const { experienceYears } = useExperienceYears();
    const metrics = [
        { value: `${experienceYears.value}+`, label: 'home.metrics.yearsCrafting' },
        { value: '40+', label: 'home.metrics.digitalProducts' },
        { value: '99%', label: 'home.metrics.deliveryRate' }
    ];
    return { metrics };
}