import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imagenesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/imagenes_es' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: image(),
    }),
});

const imagenesRu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/imagenes_ru' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: image(),
    }),
});

export const collections = {
  imagenes_es: imagenesEs,
  imagenes_ru: imagenesRu,
};
