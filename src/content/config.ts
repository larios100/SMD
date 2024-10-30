import { defineCollection, z } from "astro:content";
// z -> zod schema

const artists = defineCollection({
  schema: z.object({
    name: z.string(),
    img: z.string(),
    social: z.object({
      tiktok: z.string().url(),
      instagram: z.string().url(),
      youtube: z.string().url(),
      apple: z.string().url(),
      spotify: z.string().url(),
    }),
  }),
});

export const collections = { artists };
