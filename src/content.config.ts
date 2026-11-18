// ============================================================
// content.config.ts — o "contrato" do conteúdo do site.
// Diz ao Astro onde estão os arquivos de conteúdo e quais campos
// cada um precisa ter. Se faltar um campo ou vier um valor errado,
// a construção do site PARA e mostra onde está o problema.
// ============================================================
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AREAS } from './lib/areas';

/** Módulos da trilha de Química Inorgânica (um arquivo .mdx por módulo). */
const inorganica = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/inorganica' }),
  schema: z.object({
    /** Posição na trilha (1 a 16). */
    numero: z.number().int().min(1),
    titulo: z.string(),
    /** Família de cor do módulo (ver PLANO_MODULOS.md, seção 4). */
    area: z.enum(AREAS),
    /** Uma frase sobre o que o módulo cobre (aparece no cartão da trilha). */
    resumo: z.string(),
    /** 'em-breve' até o módulo ser escrito e revisado pelo Gabriel. */
    estado: z.enum(['disponivel', 'em-breve']).default('em-breve'),
    /** Módulos opcionais aparecem marcados na trilha. */
    opcional: z.boolean().default(false),
  }),
});

export const collections = { inorganica };
