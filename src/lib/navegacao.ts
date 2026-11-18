// ============================================================
// navegacao.ts — a lista de seções do menu, num lugar só.
// O cabeçalho e a barra inferior do celular leem daqui.
// ============================================================

export interface ItemMenu {
  rotulo: string;
  caminho: string;
}

/** Menu principal (cabeçalho). */
export const menuPrincipal: ItemMenu[] = [
  { rotulo: 'Trilhas', caminho: '/inorganica' },
  { rotulo: 'Laboratório', caminho: '/laboratorio' },
  { rotulo: 'Equipamentos', caminho: '/equipamentos' },
  { rotulo: 'Questões', caminho: '/questoes' },
  { rotulo: 'Sobre', caminho: '/sobre' },
];

/** Barra inferior do celular: 4 itens, cada um com o nome do ícone. */
export const menuCelular: (ItemMenu & { icone: 'inicio' | 'trilhas' | 'lab' | 'perfil' })[] = [
  { rotulo: 'Início', caminho: '/', icone: 'inicio' },
  { rotulo: 'Trilhas', caminho: '/inorganica', icone: 'trilhas' },
  { rotulo: 'Lab', caminho: '/laboratorio', icone: 'lab' },
  { rotulo: 'Perfil', caminho: '/progresso', icone: 'perfil' },
];
