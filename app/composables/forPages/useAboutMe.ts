import { computed, ref } from "vue";

export interface TrajectorySegment {
    id: string;
    phase: string;
    titleKey: string;   // Localization key for the stage title (e.g., 'about.trajectory.stage1')
    paraKey: string;    // Localization key for your text paragraph
    meta: string;       // Contextual subtitle indicator (e.g., "CHAPTER I", "THE FOCUS")
}

export const useStages = () => {
    const activeIndex = ref(0);

    const stages: TrajectorySegment[] = [
        {
            id: 'origin',
            phase: '01',
            titleKey: 'about.trajectory.beginningStage.title', // Fallback title string handles cleanly
            paraKey: 'about.trajectory.p1',
            meta: 'about.trajectory.foundationMetaTag'
        },
        {
            id: 'growth',
            phase: '02',
            titleKey: 'about.trajectory.finalStage.title',
            paraKey: 'about.trajectory.p2',
            meta: 'about.trajectory.evolutionMetaTag'
        }
    ]

    const setActiveIndex = (index: number): void => {
        activeIndex.value = index;
    }

    const isActiveIndex = (index: number): boolean => {
        return activeIndex.value === index;
    }

    const currentStage = computed((): TrajectorySegment => (stages[activeIndex.value] as TrajectorySegment));

    return {
        activeIndex,
        stages,
        setActiveIndex,
        isActiveIndex,
        currentStage
    }
}