// ============================================================
// caminhos.ts — monta os endereços internos do site.
// Enquanto o site mora em bieelborges.github.io/ChemLivre, todo link
// precisa começar com "/ChemLivre". Esta função faz isso sozinha:
// quando mudarmos para o domínio próprio, nenhum link precisa mudar.
// ============================================================

const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // ex.: "/ChemLivre"

/** url('/inorganica') -> '/ChemLivre/inorganica/' */
export function url(caminho = '/'): string {
  const limpo = caminho.replace(/^\/+|\/+$/g, '');
  return limpo ? `${BASE}/${limpo}/` : `${BASE}/`;
}

/** Diz se o endereço atual está dentro de uma seção (para marcar o menu). */
export function estaEm(atual: string, caminho: string): boolean {
  const alvo = url(caminho);
  const aqui = atual.endsWith('/') ? atual : `${atual}/`;
  return alvo === url('/') ? aqui === alvo : aqui.startsWith(alvo);
}
