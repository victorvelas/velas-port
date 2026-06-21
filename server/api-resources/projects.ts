export type TechStackType = {
    name: string,
    icon?: string,
};

export type ProjectType = {
    name: string,
    slug?: string,
    githubUrl: string,
    url: string | null,
    description: string,
    techStack: TechStackType[],
    portrait: string | null,
    images: string[],
}

export const placeholderProjects: ProjectType[] = [
    {
        name: "Craft-Vitae",
        githubUrl: "https://github.com/victorvelas/craft-vitae",
        url: "https://craft-vitae.vercel.app/",
        description: "Create your Curriculum Vitae with this new Web Application.",
        techStack: [
            { name: "Vue" }, 
            { name: "TailwindCSS" }, 
            { name: "TypeScript" }, 
            { name: "Javascript" }, 
            { name: "Vite" }, 
        ],
        portrait: null,
        images: []
    }
]