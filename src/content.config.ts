import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const config = defineCollection({
    loader: file("./src/config.yaml"),
    schema: z.object({
        user: z.object({
            name: z.string()
        }),
        socials: z.array(
            z.object({
                link: z.string().url(),
                icon: z.string()
            })
        ),
        site: z.object({
            title: z.string(),
            description: z.string()
        })
    })
});

const experiences = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/experiences" }),
    schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string().optional(),
    })
})

export const collections = { config, experiences };