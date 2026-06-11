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


// Hobbies
// ------------------------------------------------------
interface Hobby {
    id: string;
    key: string;
    gridClass: string;
    gradient: string;
    icon: string;
    gif: string; // Path to your asset, e.g., /images/hobbies/videogames.gif
}

export const useHobbies = () => {
    const activeHobbyId = ref<string | null>(null);

    const hobbies: Hobby[] = [
        {
            id: 'music',
            key: 'about.hobbies.music',
            gridClass: 'col-span-2 row-span-1',
            gradient: 'from-violet-500/20 via-purple-500/5 to-transparent hover:border-purple-500/50',
            icon: '🎵',
            gif: '/images/about/music-hobbie.gif'
        },
        {
            id: 'videogames',
            key: 'about.hobbies.videogames',
            gridClass: 'col-span-2 md:col-span-1 row-span-1 md:row-span-2',
            gradient: 'from-cyan-500/20 via-blue-500/5 to-transparent hover:border-cyan-500/50',
            icon: '🎮',
            gif: '/images/about/videogames-hobbie.gif'
        },
        {
            id: 'basketball',
            key: 'about.hobbies.basketball',
            gridClass: 'col-span-2 md:col-span-1 row-span-1',
            gradient: 'from-orange-500/20 via-amber-500/5 to-transparent hover:border-orange-500/50',
            icon: '🏀',
            gif: '/images/about/basketball.gif'
        },
        {
            id: 'pingpong',
            key: 'about.hobbies.pingpong',
            gridClass: 'col-span-2 row-span-1',
            gradient: 'from-emerald-500/20 via-teal-500/5 to-transparent hover:border-emerald-500/50',
            icon: '🏓',
            gif: '/images/about/pingpong.gif'
        },
        {
            id: 'anime',
            key: 'about.hobbies.anime',
            gridClass: 'col-span-2 md:col-span-1 row-span-1',
            gradient: 'from-indigo-500/20 via-red-500/5 to-transparent hover:border-pink-500/50',
            icon: '📺',
            gif: '/images/about/anime-hobbie.gif'
        },
    ];

    const currentHobby = computed(() => hobbies.find(h => h.id === activeHobbyId.value));

    const setActiveHobbyId = (id: string | null) => {
        activeHobbyId.value = id;
    }

    const toggleHobby = (id: string) => {
        setActiveHobbyId(activeHobbyId.value === id ? null : id); // Toggle off if clicked again
    };


    return {
        hobbies,
        currentHobby,
        toggleHobby,
        activeHobbyId,
        setActiveHobbyId
    }
}