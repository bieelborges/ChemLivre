// ============================================================
// preferencias.ts — preferências pessoais que NÃO dependem de login.
// Hoje: só o tema (claro/escuro). Fica guardado no próprio navegador
// (localStorage), então vale só para este aparelho.
// O progresso do aluno é outra coisa e mora em progresso.ts (Fase 7).
// ============================================================

export type Tema = 'claro' | 'escuro';

// Nome da "gaveta" no navegador onde a escolha fica guardada.
// ATENÇÃO: o script curto no <head> do BaseLayout.astro usa este
// mesmo nome. Se mudar aqui, mude lá também.
export const CHAVE_TEMA = 'chemlivre:tema';

/** Lê a escolha manual do aluno (ou null, se ele nunca escolheu). */
export function lerTemaSalvo(): Tema | null {
  try {
    const valor = localStorage.getItem(CHAVE_TEMA);
    return valor === 'claro' || valor === 'escuro' ? valor : null;
  } catch {
    // Navegação privada ou armazenamento bloqueado: segue o sistema.
    return null;
  }
}

/** Tema que o sistema operacional do aluno está usando. */
export function temaDoSistema(): Tema {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

/** Tema que está valendo agora: a escolha manual vence o sistema. */
export function temaAtual(): Tema {
  return lerTemaSalvo() ?? temaDoSistema();
}

/** Guarda a escolha e aplica na página (o CSS lê o atributo data-tema). */
export function salvarTema(tema: Tema): void {
  try {
    localStorage.setItem(CHAVE_TEMA, tema);
  } catch {
    // Sem armazenamento: aplica só nesta visita.
  }
  document.documentElement.dataset.tema = tema;
}
