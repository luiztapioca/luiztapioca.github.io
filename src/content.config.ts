import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const config = defineCollection({
    loader: file("src/config.toml"),
    schema: z.object({
        title: z.string()
    })
})

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(), 
        draft: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { config, posts }