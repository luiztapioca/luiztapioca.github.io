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
    loader: glob({ pattern: "*.json", base: "./src/content/experiences" }),
    schema: z.object({
        company: z.string(),
        position: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        bullets: z.array(z.string()).optional()
    })
})

const description = defineCollection({
    loader: glob({ pattern: "description.md", base: "./src/content/description" }),
    schema: z.object({
        title: z.string().optional(),
    })
});

export const collections = { config, experiences, description };