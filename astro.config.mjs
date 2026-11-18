// ============================================================
// astro.config.mjs — a "receita" do forno Astro.
// Diz ao Astro onde o site vai morar, quais ferramentas extras
// usar (Svelte, MDX) e como desenhar as fórmulas (KaTeX).
// ============================================================
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte'; // ilhas interativas
import mdx from '@astrojs/mdx'; // Markdown + componentes
// O Astro 7 lê Markdown com um motor novo (Sätteri), que ainda não desenha
// fórmulas. Usamos o processador "clássico" (unified), que aceita os plugins
// de matemática. Os arquivos .mdx herdam esta mesma configuração.
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math'; // reconhece $...$ e $$...$$ no texto
import rehypeKatex from 'rehype-katex'; // transforma a matemática em HTML
// Liga a extensão mhchem (\ce{...}) no MESMO KaTeX usado pelo rehype-katex.
// Por isso o katex está fixado na versão 0.16 no package.json.
import 'katex/contrib/mhchem';

export default defineConfig({
  // Endereço público. Enquanto não houver domínio próprio, o site mora
  // em bieelborges.github.io/ChemLivre (o "/ChemLivre" é o "base").
  // Quando o chemlivre.com.br estiver pronto: site = domínio e base = '/'.
  site: 'https://bieelborges.github.io',
  base: '/ChemLivre',

  integrations: [svelte(), mdx()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      // 'htmlAndMathml': gera o desenho (HTML) e uma versão MathML escondida,
      // que os leitores de tela sabem ler em voz alta (acessibilidade).
      rehypePlugins: [[rehypeKatex, { output: 'htmlAndMathml', strict: 'ignore' }]],
    }),
  },
});
