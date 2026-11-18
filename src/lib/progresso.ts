// ============================================================
// progresso.ts — LUGAR RESERVADO para o progresso do aluno (Fase 7).
// Quando houver login, aqui ficam: módulos concluídos, XP, sequência
// de dias e revisão espaçada. Hoje NADA é guardado: as funções
// existem só para as páginas já poderem chamá-las sem mudar depois.
// (A preferência de tema não é progresso: mora em preferencias.ts.)
// ============================================================

export interface ProgressoModulo {
  modulo: string; // id do módulo, ex.: 'vsepr'
  concluido: boolean;
}

/** Hoje: nenhum progresso registrado (não há login). */
export function lerProgresso(): ProgressoModulo[] {
  return [];
}

/** Hoje: não faz nada. Na Fase 7: registra a conclusão na conta do aluno. */
export function marcarConcluido(_modulo: string): void {
  // Intencionalmente vazio até a Fase 7.
}
