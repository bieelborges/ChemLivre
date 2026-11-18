// ============================================================
// tutor.ts — o "tutor" das questões.
// Hoje ele só entrega as dicas que o Gabriel escreveu, uma de cada vez.
// No futuro (fora do escopo atual), um tutor de IA pode entrar AQUI,
// sem que as questões precisem mudar: elas só chamam proximaDica().
// ============================================================

export interface Questao {
  id: string;
  /** Dicas em passos, da mais leve à mais completa (escritas pelo Gabriel). */
  dicas: string[];
}

/**
 * Devolve a dica de número `pedidas` (0 = primeira), ou null se acabaram.
 * Exemplo: proximaDica(questao, 0) -> primeira dica.
 */
export function proximaDica(questao: Questao, pedidas: number): string | null {
  return questao.dicas[pedidas] ?? null;
}
