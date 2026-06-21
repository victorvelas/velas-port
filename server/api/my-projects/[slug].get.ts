import { createError, defineEventHandler, getRouterParam, H3Event } from "#imports"
import { placeholderProjects, ProjectType } from "~~/server/api-resources/projects";
 
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

export default defineEventHandler((event: H3Event) => {
    const slug:string = getRouterParam(event, 'slug') as string;

    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing slug parameter"
        });
    }
    
    const project:ProjectType = projects[slug] as ProjectType;
    if (!project) {
        throw createError({
            statusCode: 404,
            statusMessage: `Project with slug ${slug} not found`
        });
    }

    return projects[slug] as ProjectType;
})