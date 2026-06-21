import { defineEventHandler, getRouterParam, H3Event } from "#imports"
import { placeholderProjects, ProjectType } from "~~/server/api-resources/projects";
 
export default defineEventHandler((event: H3Event) => {

    const projects: Record<string, ProjectType> = placeholderProjects.map((project: ProjectType) => {
        return {
            slug: project.name.toLowerCase().replaceAll(" ", "-"),
            ...project
        }
    }).reduce((acc, project: ProjectType) => {
        const slg:string = project.slug as string;
        acc[slg] = project;
        return acc;
    }, {} as Record<string, ProjectType>);

    const slug:string = getRouterParam(event, 'slug') as string;
    return projects[slug] as ProjectType;
})