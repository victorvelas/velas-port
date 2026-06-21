import { defineEventHandler, H3Event } from "#imports"
import { placeholderProjects } from "~~/server/api-resources/projects";
 
export default defineEventHandler((event: H3Event) => {
    const projects = placeholderProjects;
    return projects;
})