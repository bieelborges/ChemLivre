# Chem Livre

**Química sem muros.** Plataforma aberta e gratuita de Química de nível superior, com foco em visualização. Este guia define como a marca aparece no site, nos posts e nos materiais.

## Personalidade

- **Precisa e científica** antes de tudo: rigor nos dados, nada de exagero visual.
- **Acadêmica, técnica e moderna**, ligada ao código aberto: títulos serifados de livro-texto, texto e fórmulas com fontes de tecnologia (GitHub e Vercel).
- **Limpa no estilo Apple**: muito espaço em branco, uma única cor de ação, hierarquia clara.

## Voz e conteúdo

- Português do Brasil, frases curtas, termos técnicos corretos (IUPAC) e explicados na primeira vez.
- Fala como um professor próximo: "vamos ver", "repare que", nunca infantil.
- Fórmulas sempre com subscritos e cargas reais: [Co(NH₃)₆]³⁺, não Co(NH3)6 3+. Unidades no SI.
- Sem emoji no site. Nos posts, no máximo um por legenda.

## Cores

- **Base neutra + azul cobre.** O token `destaque` (azul do tetraamincobre) é a ÚNICA cor de ação: botão principal, links, foco e o símbolo. Use `texto` e `texto-secundario` para todo o resto.
- **Cores de área**, tiradas de complexos e íons reais, marcam as partes da trilha e aparecem só em etiquetas, ícones de módulo e botões da área, sempre no par cor + `-suave`:
  - `redox` (permanganato) · `coordenacao` (cobalto) · `solidos` (cromato) · `acidos` (níquel) · `destaque-suave`/`destaque-texto` para Estrutura atômica e ligação.
- **Modo escuro** tem valores próprios em cada token, não é a inversão do claro. Todos os pares de texto foram medidos: 5:1 ou mais no claro e 7,4:1 ou mais no escuro.
- Nunca use as cores de área como fundo de página inteira nem em degradê.

## Tipografia

- **Geist Serif** (`titulo`) nos títulos: display, h1, h2.
- **Hubot Sans** (`texto`) em subtítulos, texto, botões e rótulos.
- **Geist Mono** (`mono`) em fórmulas, valores numéricos e código.
- Todas com licença SIL Open Font License: podem ser hospedadas no site.

## Forma e espaço

- Botões e etiquetas em **pílula** (`raio-pilula`), altura mínima de 44px para toque.
- Cartões com `raio-md`, contorno `borda` e sem sombra forte.
- Espaçamento numa escala de 4/8: `espaco-3` dentro de cartões, `espaco-5` entre seções.

## Botões

- **Principal:** fundo `destaque`, texto `destaque-contraste`. Um por tela.
- **Secundário:** fundo `destaque-suave`, texto `destaque-texto`.
- **De área:** fundo `<area>-suave`, texto `<area>` (ex.: "Abrir simulação" num módulo de Redox).

## Símbolo

Órbita em C: um "C" desenhado como órbita, com um elétron livre na ponta. Versões para fundo claro e escuro em **Logos**. Ao lado do nome, o nome vai em Geist Serif seminegrito. Área livre ao redor: metade da altura do símbolo. Não girar, não aplicar degradê, não trocar a cor do elétron.

## Mascote

Opcional e apenas de apoio (acertos, trilha, stories). Nunca no logo.
