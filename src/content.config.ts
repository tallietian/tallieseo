import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('TallieSEO'),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'zh']).default('zh'),
  }),
});

export const collections = { blog };
