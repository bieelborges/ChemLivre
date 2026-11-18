// ============================================================
// areas.ts — as famílias de cor da trilha e o nome de cada uma.
// O valor (ex.: 'redox') é o mesmo usado no CSS: data-area="redox".
// ============================================================

export const AREAS = ['estrutura', 'acidos', 'solidos', 'redox', 'coordenacao', 'elementos'] as const;

export type Area = (typeof AREAS)[number];

/** Nome da área como aparece na etiqueta. */
export const NOME_DA_AREA: Record<Area, string> = {
  estrutura: 'Estrutura',
  acidos: 'Ácidos e bases',
  solidos: 'Sólidos',
  redox: 'Redox',
  coordenacao: 'Coordenação',
  elementos: 'Elementos',
};
