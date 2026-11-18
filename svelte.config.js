// Configuração do Svelte (as ilhas interativas).
// vitePreprocess deixa os componentes usarem TypeScript.
import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess(),
};
