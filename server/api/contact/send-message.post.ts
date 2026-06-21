import { defineEventHandler, H3Event, readBody } from "#imports"
 
export default defineEventHandler((event: H3Event) => {
    const payload = readBody(event);
    
    console.log(payload);

    return { status: "ok" };
});