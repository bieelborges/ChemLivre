# Prompt — Adaptar as imagens selecionadas ao estilo do Chem Livre

> Cole no Claude Code depois de aplicar o PROMPT_IDENTIDADE_INTERFACE.md e o
> PROMPT_ESTILO_ILUSTRACAO.md. As imagens estão em
> `biblioteca-imagens/selecionadas/`.

---

Escolhi 81 imagens de licença livre para o site. Elas estão em
`biblioteca-imagens/selecionadas/`, separadas em três grupos, com autor e
licença em `CREDITOS-selecionadas.csv`. Trate cada grupo assim:

## Grupo 1 — `1-usar-direto` (7 imagens)

Ícones de traço (Phosphor) e gráficos minimalistas (dbs-sticky).
- Troque cores fixas por `currentColor` ou pelos tokens do tema.
- Ajuste a espessura do traço para a do guia (2px em ícones).
- Coloque em `src/assets/icones/`.

## Grupo 2 — `2-adaptar-ao-estilo` (41 imagens)

Vidrarias, equipamentos (HPLC, GC, FTIR, RMN, MS, pHmetro, microscópios),
modelagem molecular, pictogramas de segurança e itens gerais.
- Limpe o SVG (remova metadados, grupos vazios e estilos embutidos; use SVGO).
- Recolora só com os tokens do guia: contorno em `--texto`, vidro em
  `--superficie` com contorno, líquidos na cor química correta dentro da paleta.
- Remova degradês, brilhos e sombras; uniformize a espessura do traço.
- Mantenha proporções e detalhes técnicos corretos.
- Os pictogramas de segurança devem continuar reconhecíveis: não mude forma nem
  símbolo, só o traço e a cor dentro do padrão de segurança.
- Salve em `src/assets/ilustracoes/` com nomes em português
  (ex.: `espectrometro-ftir.svg`).

## Grupo 3 — `3-referencia-para-redesenhar` (33 imagens, Servier)

Estilo realista com brilhos, que destoa da marca. NÃO use os arquivos no site.
- Use-os só como referência de forma e proporção para criar os componentes da
  biblioteca de ilustração (béquer, erlenmeyer, balão, bureta, funil de
  separação, condensador, funil de Büchner, cubeta, espectrofotômetro etc.).
- Desenhe do zero, seguindo o PROMPT_ESTILO_ILUSTRACAO.md, com nível e cor do
  líquido configuráveis.
- Se o resultado ficar muito próximo de um original, registre o crédito
  (Servier Medical Art, CC BY 3.0) por segurança.

## Créditos

- Licenças CC BY 3.0, CC BY 4.0 e MIT exigem crédito; CC0 não exige, mas dê
  crédito assim mesmo.
- Crie uma página `/creditos` gerada a partir de `CREDITOS-selecionadas.csv`,
  listando apenas as imagens realmente usadas no site, com autor, licença e
  link. Ponha um link para ela no rodapé.
- Imagem adaptada continua precisando do crédito ao autor original, com a
  indicação "adaptado por Chem Livre".

## Ordem de trabalho

1. Comece pelo grupo 1 e mostre o resultado na página `/estilo`.
2. Faça 5 imagens do grupo 2 (FTIR, cromatógrafo a gás, destilação, pHmetro,
   pictograma inflamável), mostre antes e depois, nos modos claro e escuro, e
   espere minha aprovação.
3. Só então adapte o resto e comece a redesenhar o grupo 3.
4. Ao terminar, mova `biblioteca-imagens/` para fora do repositório ou
   acrescente ao `.gitignore`.
