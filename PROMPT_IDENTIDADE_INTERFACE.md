# Prompt — Identidade visual e interface do Chem Livre

> Cole no Claude Code na pasta do projeto, depois da Fase 0 (pode ser junto com a
> Fase 1). Complementa o PROMPT_INICIAL.md e o prompt de recursos interativos.
> Peça para ele guardar as regras deste prompt no CLAUDE.md do projeto.
>
> **Ajustado em 17/11/2026** para ficar coerente com o plano aprovado em 13/11
> (`PLANO_MODULOS.md`): trilha com **16 módulos**; progresso, XP, sequência e
> revisão espaçada só na **Fase 7** (com login); preferência de tema em
> `src/lib/preferencias.ts`. Fonte única da marca: pasta `chem-livre-marca/`.

---

A identidade visual do Chem Livre está definida e aprovada. Implemente o site
seguindo exatamente este guia. Antes de programar, crie os arquivos de tema
(tokens) e me explique como funcionam; depois aplique nas páginas.

## 1. Fundamentos da marca

- **Nome:** Chem Livre. **Promessa:** Química de nível superior, visual, aberta
  e gratuita — "química sem muros".
- **Personalidade:** precisa e científica, acadêmica, técnica e moderna, ligada
  ao código aberto. Layout limpo estilo Apple: muito espaço em branco, uma única
  cor de ação, hierarquia clara.
- **Símbolo:** "Órbita em C" — um C desenhado como órbita com um elétron na
  ponta. Os SVGs (versão clara e escura) estão em `chem-livre-marca/logos/` e
  serão copiados para `public/marca/` na Fase 1. Não
  girar, não aplicar degradê, não trocar a cor do elétron. Área livre: metade da
  altura do símbolo.

## 2. Cores (tokens CSS)

Crie um arquivo único de variáveis CSS com os dois temas; `prefers-color-scheme`
decide o padrão e um botão na navegação alterna manualmente. A escolha é
guardada no navegador por `src/lib/preferencias.ts` (arquivo próprio, simples e
independente do login; `progresso.ts` fica só para o progresso do aluno, na
Fase 7). O modo escuro tem valores próprios — nunca derive invertendo o claro.
A escolha manual precisa vencer o sistema nos dois sentidos: claro forçado com
o sistema escuro e escuro forçado com o sistema claro.

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| --fundo | #F6F7F9 | #0E1116 | fundo da página |
| --superficie | #FFFFFF | #171B22 | cartões e painéis |
| --borda | #E3E6EB | #2A303A | divisórias e contornos |
| --texto | #0E1116 | #F2F4F7 | títulos e texto principal |
| --texto-corpo | #2B313B | #D5DAE2 | parágrafos longos |
| --texto-secundario | #4A5260 | #A3ACBA | legendas e rótulos |
| --destaque | #1F5FD1 | #7DAAF5 | ÚNICA cor de ação: botão principal, links, foco |
| --destaque-contraste | #FFFFFF | #0E1116 | texto sobre --destaque |
| --destaque-suave | #E8F0FC | #16263F | fundo de botão secundário e etiqueta Estrutura |
| --destaque-texto | #1F5FD1 | #8FB8F2 | texto sobre --destaque-suave |
| --redox / --redox-suave | #6B2FA3 / #F1EAF8 | #C7A6EE / #2A1F3A | área Redox (permanganato) |
| --coordenacao / -suave | #A82A5A / #FBE9F0 | #F29BBE / #3A1B28 | área Coordenação (cobalto) |
| --solidos / -suave | #7A5C00 / #FDF3D0 | #F2C94C / #352B0E | área Sólidos (cromato) |
| --acidos / -suave | #17704A / #E6F4EC | #6FD3A3 / #13301F | área Ácidos e bases (níquel) |
| --elementos / -suave | #A3440B / #FDEEE4 | #F5A26E / #3A2213 | área Elementos (dicromato), módulos 8, 14 e 15 |

A família **Elementos** foi aprovada em 17/11/2026 (contraste 5,5:1 no claro e
7,2:1 no escuro). O módulo 16 (Bioinorgânica) usa a família Coordenação.

Regras: cores de área só em etiquetas, ícones de módulo e botões da própria
área, sempre no par cor + suave; nunca como fundo de página nem em degradê.
Todos os pares acima foram medidos e passam de 4,5:1 — mantenha isso em
qualquer cor nova.

## 3. Tipografia

- **Geist Serif** (títulos: display 56px, h1 40px, h2 30px, peso 600,
  letter-spacing −0,02em), **Hubot Sans** (h3 20px/700, corpo 17px/28px,
  rótulo 14px/600, legenda 13px/500), **Geist Mono** (fórmulas e valores,
  15px/500). Todas OFL; os .woff2 variáveis estão em `chem-livre-marca/fonts/`
  e irão para `public/fonts/` junto com o texto da licença OFL
  (Geist e Geist Mono no pacote npm `geist`; Mona/Hubot Sans no GitHub).
  Hospede localmente com `@font-face` e `font-display: swap`.
- Fórmulas químicas com KaTeX + mhchem; números avulsos em Geist Mono.

## 4. Forma, espaço e componentes

- **Espaços:** escala 4/8/16/24/40/64 px (espaco-1 a 6). 16 dentro de cartões,
  24 de padding e entre cartões, 40 entre seções, 64 de margem no desktop.
- **Cantos:** 10px (blocos de fórmula e campos), 20px (cartões), pílula 999px
  (botões e etiquetas).
- **Botões** (altura mínima 44px, formato pílula): principal = fundo
  --destaque + --destaque-contraste, um por tela; secundário = --destaque-suave
  + --destaque-texto; de área = fundo `<area>-suave` + texto `<area>`.
- **Cartões:** fundo --superficie, contorno --borda de 1px, sem sombras fortes.
- Foco visível (outline em --destaque) em todo elemento interativo; HTML
  semântico (button, a, label) sempre.

## 5. Estrutura do site (mapa)

- **Início:** hero com uma simulação de verdade embutida (prévia do campo
  cristalino; a cor só aparece para complexos reais com valor de literatura,
  ou como "modelo d¹", conforme a regra de rigor do módulo 10), "Como funciona" em 3 passos (Veja · Mexa · Pratique), cartões de
  módulos com a etiqueta da sua área, chamadas para Laboratório e Equipamentos,
  rodapé com CC BY + GitHub.
- **Trilha (/inorganica):** lista vertical dos **16 módulos**, cada um com a
  etiqueta da sua área e o estado de publicação ("disponível" ou "em breve").
  **Espaço reservado, sem funcionalidade, até a Fase 7 (login):** estados
  concluído/atual, barra de progresso, painel "Continuar de onde parou" e
  "Revisão espaçada", contadores de sequência e XP. Nas fases 1–6 esse espaço
  mostra um aviso curto ("seu progresso chega com a criação de conta").
- **Lição (/inorganica/<modulo>/<licao>):** modo foco, sem navegação completa:
  barra de progresso da lição em segmentos no topo + botão fechar; texto curto
  ao lado da simulação (empilhados no celular); questão estilo concurso no fim
  com "Verificar" e "Pedir uma dica".
- **Laboratório, Equipamentos, Questões, Meu progresso, Sobre:** páginas
  previstas no menu; crie como esqueleto. "Meu progresso" (e "Perfil" na barra
  do celular) mostra "em breve" até a Fase 7; por enquanto só guarda a
  preferência de tema.
- Referência de interação: Brilliant (aprender mexendo) e Duolingo (trilha,
  XP, sequência, revisão espaçada).

**Numeração do esboço:** o arquivo "Chem Livre — Esboço do site.html" usa a
ordem antiga (12 módulos; "8 · Campo cristalino", "7 · Coordenação e
isomeria"). Na implementação vale a ordem nova: 9 · Coordenação e isomeria,
10 · Campo cristalino e campo ligante, e "Ver os 16 módulos".

## 6. Responsivo (celular e tablet)

Mobile-first com breakpoints ~768px e ~1024px; container máximo de 1200px.

- **Celular (até 767px):** tudo numa coluna; botões com largura total; menu
  recolhido (hambúrguer) e, nas páginas internas, uma barra de navegação
  inferior fixa com 4 itens (Início, Trilhas, Lab, Perfil), ícones SVG com
  rótulo, área de toque ≥44px; o painel lateral da trilha vira cartões acima
  da lista; na lição, a simulação vem logo após o primeiro bloco de texto.
- **Tablet (768–1023px):** grades de 2 colunas (módulos) e 3 (Como funciona);
  menu completo no topo, sem barra inferior.
- **Desktop (1024px+):** layout dos esboços de 1440px.
- Simulações: controles utilizáveis com o dedo (sliders altos), e versão
  simplificada quando o 3D pesar no celular.

## 7. Critérios de aceite

1. Trocar o tema não quebra contraste em nenhum componente (teste os pares).
2. Lighthouse: desempenho e acessibilidade ≥ 90 na página inicial no celular.
3. Nenhuma cor ou tamanho "solto" no código: tudo via tokens.
4. A página inicial funciona sem JavaScript (a simulação mostra uma imagem
   estática de reserva).

Comece criando os tokens e o esqueleto das páginas, me mostrando o resultado
no navegador a cada etapa.
