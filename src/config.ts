import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const UserConfig = defineCollection({
    loader: file("./details.yaml"),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        description: z.string(),
        socials: z.array(
            z.object({
                link: z.string().url(),
                icon: z.string(),
            })
        ),
    })
});

export const experiences = defineCollection({
    type: "content",
    schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string().optional(),
    })
})