# Guia de estilo de ilustração do Chem Livre

> Guia permanente do projeto (citado no `CLAUDE.md`). Toda ilustração nova segue estas regras.
> Origem: `PROMPT_ESTILO_ILUSTRACAO.md` (v2, 18/11/2026), escrito pelo Gabriel a partir das 81 imagens
> escolhidas (`biblioteca-imagens/selecionadas/`) e do teste "Equipamentos por dentro" (`testes/`).
> **Aplicação por fase** (decisão de 18/11/2026): cada registro é construído na fase que precisa dele;
> ver a seção 11 no fim deste arquivo.

---

Quero um estilo de ilustração próprio para o Chem Livre, desenhado do zero em
SVG, que pareça feito por um ilustrador científico, e não gerado por IA nem
simplista. Use as diretrizes abaixo para criar ilustrações novas e para
recriar (redesenhar, nunca copiar) imagens de referência.

## 0. O que as minhas escolhas mostram

Analisando as imagens que escolhi:

- **Vidrarias com solução colorida** são o grupo maior (béqueres, erlenmeyers,
  balões, provetas, tubos, cubetas). Gosto do vidro levemente azulado e
  translúcido, do líquido com cor de verdade, do menisco visível e das
  graduações.
- **Instrumentos analíticos** (HPLC, CG, FTIR, RMN, EM, MEV, pHmetro,
  espectrofotômetro, destilação): quero mostrar como são **por dentro**.
- **Modelos moleculares simples** (bolas coloridas, ligação, ângulo, diedro,
  interação de Coulomb).
- **Pictogramas de segurança (GHS)** e **ícones de traço** para a interface.

Por isso o estilo tem **quatro registros**, cada um com regras próprias, mas
todos com a mesma paleta, as mesmas fontes e a mesma limpeza.

## 1. Regras comuns a todos os registros

- Só cores do guia da marca, via tokens CSS (nunca hex solto no SVG): neutros,
  `--destaque` (azul cobre) e no máximo UMA cor de área por ilustração
  (`--redox`, `--coordenacao`, `--solidos`, `--acidos`, `--elementos`) com seu par `-suave`.
  A exceção são as soluções e os átomos, que usam a cor química real (abaixo).
- Nada de degradê decorativo, brilho "glossy", desfoque ou textura de fundo.
- Funciona nos modos claro e escuro (variáveis e `currentColor`; teste os dois).
- Rótulos em Hubot Sans; fórmulas, valores e leituras em Geist Mono, sempre com
  subscritos, cargas e unidades corretas.
- Química correta antes de tudo: ângulos (104,5°, 109,5°), proporções, cores de
  soluções, constantes. Valor incerto é marcado para eu conferir.
- `role="img"` e `aria-label` com descrição útil em toda ilustração.

## 2. Registro A — Vidrarias e soluções (vista frontal)

Inspirado nas vidrarias que escolhi (estilo Servier), mas redesenhado no nosso
padrão, mais limpo:

- **Vista frontal**, contorno 2,5px em `--texto` (2px em tamanho pequeno).
- **Vidro:** preenchimento `--destaque-suave` com opacidade baixa (~20%), para
  parecer translúcido nos dois modos. Permitido **um único reflexo plano**: uma
  faixa vertical estreita, mais clara, sem degradê.
- **Líquido:** cor química real dentro da paleta (Cu²⁺ e [Cu(NH₃)₄]²⁺ em azul
  cobre; MnO₄⁻ em `--redox`; CrO₄²⁻ em `--solidos`; Cr₂O₇²⁻ em `--elementos`;
  Ni²⁺ em `--acidos`; Co²⁺ em `--coordenacao`; água quase incolor). Topo do líquido como **elipse de
  menisco** um tom mais claro.
- **Graduações** finas (1px) em `--texto-secundario`, com valores em Geist Mono
  quando couber.
- **Rótulo/etiqueta** opcional como retângulo branco com 2–3 linhas.
- Componentes com props: tipo, volume, nível do líquido (0–1), cor (token),
  menisco, graduações on/off.

## 3. Registro B — Equipamentos "por dentro" (isométrico, skill Anatomy)

Para instrumentos e montagens, use a skill **Anatomy** (já disponível no Claude Code
deste projeto; repositório github.com/wheresryan22/anatomy, licença MIT). Leia o
`SKILL.md` e `references/craft.md` antes de começar. O teste aprovado está em
`testes/equipamentos-por-dentro/` (pHmetro, espectrofotômetro UV-Vis e
cromatógrafo a gás): use-o como ponto de partida e padrão de qualidade.

- **O objeto é a explicação:** o equipamento real, com suas peças reais
  (parafusos, juntas, fendas, conectores, réguas, botões), nunca caixas com
  setas.
- **Isométrico**, azimute 38–45°, elevação 30°. Sólidos opacos em tons de papel
  (sombreamento em 4 tons do kit), não wireframe.
- **Uma única cor de destaque** (`--destaque`) para a parte que o aluno deve
  observar: a membrana de vidro, o feixe de luz, a coluna capilar. Cor química
  só quando a cor é o assunto (a solução na cubeta).
- **Muitas peças pequenas e verdadeiras:** 40–80 peças por figura. Nada de faces
  vazias: se uma região está lisa, falta uma peça real.
- **Vista explodida:** clique (ou Enter) desmonta; as peças se afastam com mola
  suave na direção em que realmente saem (tampa para cima, porta para frente,
  eletrodo em partes).
- **Sem rótulos flutuantes nem setas de chamada.** O nome e a função de cada peça
  aparecem no **leitor** do cartão ao passar o cursor (ou com as setas do
  teclado); as outras peças esmaecem.
- **Cartão padrão:** "Fig n" no canto superior esquerdo, título no direito, dica
  de interação embaixo à esquerda e **leitura ao vivo** embaixo à direita;
  legenda e chaves sob o cartão.
- **Leitura vem de um modelo verdadeiro:** pHmetro pela equação de Nernst
  (59,16 mV por unidade de pH a 25 °C); espectrofotômetro por A = ε·b·c com ε de
  referência citado; nada de número inventado. Cada constante fica num arquivo de
  dados com `fonte` e `revisado`. Pendente: o ε do KMnO₄ em 525 nm (a literatura
  diverge, ≈ 2,4 × 10³ e 3340 L mol⁻¹ cm⁻¹) e as condições do CG ("exemplo de método").
- Sem animação quando o usuário pede movimento reduzido; a figura funciona e se
  explica parada.
- Cores do kit trocadas pelos tokens da marca nos dois temas (ver o CSS do teste).

**Próximos equipamentos:** espectrômetro FTIR, HPLC, RMN, espectrômetro de massas,
MEV, aparelho de destilação simples e fracionada, balança analítica, agitador
magnético com aquecimento, sonicador.

## 4. Registro C — Moléculas e modelos

Como os modelos simples que escolhi (bolas e ligações):

- **Bolas e varetas** em vista frontal ou isométrica, contorno 2px.
- Cores por elemento numa paleta CPK adaptada à marca e testada nos dois modos:
  C cinza-grafite, H branco com contorno, O vermelho (`--coordenacao`), N azul
  (`--destaque`), Cl e F verde (`--acidos`), S amarelo (`--solidos`), metais em
  `--redox`. Mantenha a convenção para o aluno reconhecer.
- Raio proporcional ao raio covalente (escala única por ilustração) e ângulos
  reais. Cunha e tracejado para 3D em 2D.
- Cargas parciais (δ+ δ−), interações (linhas tracejadas) e setas de força em
  Geist Mono e traço fino.
- Para 3D interativo, use 3Dmol.js com o mesmo mapa de cores.

## 5. Registro D — Ícones e pictogramas

- Ícones de interface: traço de 2px, cantos arredondados, `currentColor`, grade
  de 24px (como Lucide, Tabler e Phosphor).
- Pictogramas de segurança GHS: **não altere forma, símbolo nem a borda
  vermelha**; são padronizados. Só ajuste a espessura do traço e use os textos
  em português (Corrosivo, Inflamável, Explosivo, Tóxico ao meio ambiente).

## 6. O que evitar (cara de IA ou de clip-art)

- Degradês, brilhos múltiplos, reflexos "glossy", sombras projetadas desfocadas.
- Moléculas genéricas sem estrutura real; partículas, faíscas e hexágonos
  decorativos.
- Paleta arco-íris, roxo-azul neon, fundos com textura.
- Traços de espessura aleatória, perspectivas misturadas na mesma ilustração.
- Equipamento "de caixas": um bloco liso com etiqueta não ensina nada.
- Ilustração que poderia ser de qualquer site: se tirar o logo e não parecer
  Chem Livre, refaça.

## 7. Biblioteca de componentes

Em `src/components/ilustracoes/`:

1. **Vidrarias** (registro A): béquer, erlenmeyer, balão volumétrico e de fundo
   redondo, proveta, bureta, pipeta, tubo de ensaio, funil, funil de separação,
   funil de Büchner, condensador, cubeta, frasco reagente.
2. **Equipamentos** (registro B): um módulo de geometria por equipamento, com o
   modelo (`modelo.ts`) separado do desenho, no padrão da skill Anatomy.
3. **Química estrutural** (registro C): átomo, ligação simples/dupla/tripla,
   cunha e tracejado, orbitais s, p, d com fases em duas cores.
4. **Diagramas e ícones** (registro D): setas de reação e equilíbrio, escalas de
   energia, eixos, pictogramas GHS.

Uma página `/estilo` mostra todos os componentes juntos, nos dois modos.

## 8. Como recriar uma imagem de referência

1. Eu indico a referência. Você diz o que ela ensina e quais elementos são
   essenciais, e escolhe o registro (A, B, C ou D).
2. Redesenha do zero com a biblioteca e estas regras. Nada é decalcado nem
   vetorizado a partir do original.
3. Corrige erros científicos que a referência tenha e me avisa.
4. Mostra lado a lado: claro, escuro e tamanho pequeno.
5. Só depois da minha aprovação a ilustração entra no site.

## 9. Imagens de terceiros

- Só licenças CC0, CC BY, MIT ou ISC. Nunca CC BY-SA, CC BY-NC, BioRender
  gratuito ou imagens de periódicos, Dribbble e Pinterest.
- Imagens adaptadas são recoloridas com os tokens e ajustadas ao traço do guia.
- Registre autor, link e licença em `CREDITOS.md` (adaptado por Chem Livre) e
  mostre o crédito na página `/creditos`.
- O código da skill Anatomy é MIT: mantenha o aviso de licença no repositório.

## 10. Revisão de qualidade (antes de me mostrar)

- [ ] Química correta (ângulos, fórmulas, cores de soluções, valores)?
- [ ] Só tokens da marca, sem degradê nem hex solto?
- [ ] Traço uniforme e coerente com o tamanho e o registro?
- [ ] Funciona nos modos claro e escuro, e com 390px de largura?
- [ ] Registro B: peças reais suficientes, vista explodida sem peças se
      atravessando, leitura ao vivo verdadeira, zoom de 4× sem áreas vazias?
- [ ] `role="img"` e `aria-label` úteis; operável pelo teclado?
- [ ] Parece Chem Livre mesmo sem o logo?

## 11. Aplicação por fase (decisão de 18/11/2026)

| Fase | Registro | O que construir |
|---|---|---|
| 1 | — | Página `/estilo` com a base: cores, tipografia, botões e etiquetas, nos dois modos |
| 2 (VSEPR) | **C · Moléculas** | Átomo, ligações simples/dupla/tripla, cunha e tracejado, pares isolados; mapa de cores CPK da marca (também no 3Dmol.js) |
| 3 (Laboratório) | **A · Vidrarias** | Béquer, erlenmeyer, cubeta, bureta, balão e o resto do kit da bancada; pictogramas GHS do experimento (registro D) |
| 4 (Equipamento) | **B · Por dentro** | Os 3 testes viram componentes (espectrofotômetro primeiro, ligado à curva do laboratório) |
| 5 em diante | Todos | O que cada módulo pedir, reaproveitando a biblioteca |
| Contínuo | **D · Ícones** | Os 7 ícones do grupo 1 entram quando a interface precisar deles |

Em cada fase: mostrar lado a lado (claro, escuro e tamanho pequeno), passar pela revisão
da seção 10 e esperar a aprovação do Gabriel. A página `/creditos` nasce junto com a
primeira imagem de terceiros usada no site.
