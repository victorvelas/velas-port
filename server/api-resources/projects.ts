export type TechStackType = {
    name: String,
    icon?: String,
};

export type ProjectType = {
    name: String,
    slug?: String,
    githubUrl: String,
    url: String | null,
    description: String,
    techStack: TechStackType[],
    portrait: String | null,
    images: String[],
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