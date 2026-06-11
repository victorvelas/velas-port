import { computed, ref } from "vue";

// Trajectory
// ------------------------------------------------------
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

// Stack
// ------------------------------------------------------
interface TechItem {
    name: string;
    icon: string;
}

interface StackCategory {
    id: string;
    key: string;
    items: TechItem[];
}

export const categories: StackCategory[] = [
    {
        id: 'backend',
        key: 'backend',
        items: [
            { name: 'PHP', icon: 'php.svg' },
            { name: 'Laravel', icon: 'laravel.svg' },
        ],
    },
    {
        id: 'frontend',
        key: 'frontend',
        items: [
            { name: 'JavaScript', icon: 'javascript.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
            { name: 'Vue.js', icon: 'vue.svg' },
            { name: 'Nuxt', icon: 'nuxtjs.svg' },
            { name: 'React', icon: 'react.svg' },
            { name: 'Tailwind CSS', icon: 'tailwind.svg' },
        ],
    },
    {
        id: 'database',
        key: 'database',
        items: [
            { name: 'PostgreSQL', icon: 'postgresql.svg' },
            { name: 'MySQL', icon: 'mysql.svg' },
            { name: 'SQL Server', icon: 'microsoftsqlserver.svg' },
        ],
    },
    {
        id: 'tools',
        key: 'tools',
        items: [
            { name: 'Git', icon: 'git.svg' },
        ],
    },
];