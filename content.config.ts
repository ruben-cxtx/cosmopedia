import { defineCollection, z } from "astro:content";


const planets = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        image: z.string().url(),
        type: z.enum(["Terrestrial", "Gas Giant", "Ice Giant", "Dwarf"]),
        moons: z.array(z.string()),
        hasAtmosphere: z.boolean(),
        funFacts: z.array(z.string()),
        lengthOfDay: z.number(),

        mass: z.number(),
        diameter: z.number(),
        density: z.number(),
        gravity: z.number(),


        color: z.string(),
        texture: z.string().optional(),

        distanceFromSun: z.number(),
        atmosphereComposition: z.array(z.string()),

        firstVisited: z.number().optional(),
        missions: z.array(z.object({
            name: z.string(),
            year: z.number(),
            description: z.string(),
            url: z.string().url(),
            image: z.string().url().optional(),
        })).optional(),

    })
})

export const collections = { planets };