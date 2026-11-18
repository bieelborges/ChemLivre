# CLAUDE.md — Contexto permanente do projeto Chem Livre

> Este arquivo é lido pelo Claude Code no início de cada sessão.
> Ele guarda as regras e decisões do projeto para que não se percam entre conversas.

## O projeto
**Chem Livre**: plataforma web gratuita e aberta de aprofundamento em Química para graduação,
pós-graduação e preparação para provas e concursos. Ideia central: conhecimento químico aberto e acessível.
Foco: compreensão **visual/espacial** (moléculas, orbitais, geometria) e **termo-estatística** (energia, equilíbrio).
Inspirações: Brilliant (interação passo a passo), Duolingo (trilhas curtas, progresso), Google Classroom (módulos).
Longo prazo: vitrine da marca pessoal do autor, comunidade, cursos e parcerias; a plataforma segue gratuita.
Domínio pretendido: chemlivre.com.br. Repositório **público**: https://github.com/bieelborges/ChemLivre

## Quem é o usuário
Gabriel Borges, professor de Química (licenciado UFSC, Florianópolis). **Iniciante em programação**
(intro a Python, curso Asimov), não conhece desenvolvimento web. É o **revisor final de todo conteúdo químico**.

## Modo professor (obrigatório)
- Antes de cada passo: 2–3 frases sobre **o que** vamos fazer e **por quê**.
- Ao criar arquivo: dizer para que serve e onde se encaixa.
- Código comentado em português, de forma didática.
- Conceito novo → analogia + registro em `GLOSSARIO.md`.
- De vez em quando, deixar uma tarefa pequena para ele fazer e depois revisar.
- Fim de cada fase: resumo do que aprendeu + atualizar `DIARIO.md`.
- Se ele errar, explicar a **causa**, não só a correção.

## Como trabalhamos
- Uma área de cada vez. **Área piloto: Química Inorgânica.**
- Fases pequenas; ao fim de cada uma, algo testável no navegador.
- **Eu proponho, ele aprova**: plano curto antes de cada fase; antes de escolher tecnologia, explicar opções e recomendar.
- Idioma: português do Brasil.

## Roteiro de fases
> Revisado e **aprovado** em 13/11/2026 (detalhe em `PLANO_MODULOS.md`, seção 11).

0. Planejamento — concluída em 11/11/2026; **revisão em 13/11/2026** (identidade visual, trilha com 16 módulos,
   plano de recursos interativos, roteiros de aula prática de referência) — **plano aprovado em 13/11/2026**.
1. Esqueleto: Astro + framework das ilhas, tokens de design claro/escuro, fontes, página inicial, menu,
   página da trilha (16 módulos), layout de módulo, deploy
2. Primeiro módulo completo (VSEPR): texto, Montador de geometria (âncora), `Molecula3D`,
   motor de questões interativas (4 tipos), 5 questões comentadas — modelo para os demais
3. Laboratório virtual: 1º experimento dos roteiros de referência + modo demonstração (aprovado: Exp. 4, [Co(acac)₃] + UV-Vis)
4. Equipamento por dentro: espectrofotômetro UV-Vis (rolagem com GSAP), ligado à curva de calibração do laboratório
5. Demais módulos da trilha, um por vez (subfases 5.1, 5.2…)
6. Revisão (celular, acessibilidade, opinião de alunos, documentar como criar nova área)
7. Comunidade, login e **progresso estilo Duolingo** (mapa, XP, sequência de dias, repetição espaçada) —
   comparar Supabase, Giscus, fórum externo antes; termos e LGPD
Futuro (não fazer agora): tutor de IA, newsletter, cursos pagos, painel administrativo.

## Trilha de Inorgânica (nova ordem, 16 módulos — aprovada em 13/11/2026)
1 Estrutura atômica e tendências periódicas (inclui Z_ef e regras de Slater) · 2 VSEPR · 3 Simetria e grupos de ponto ·
4 TLV e Teoria do Orbital Molecular (TLV/hibridização antes, contrastando) · 5 Ácidos e bases (Brønsted, Lewis, HSAB, solventes não aquosos) ·
6 Sólidos iônicos e teoria de bandas (inclui defeitos) · 7 Redox (Latimer e Frost) · 8 Química dos blocos s e p ·
9 Compostos de coordenação e isomeria (inclui nomenclatura IUPAC) · 10 Teoria do campo cristalino e do campo ligante (inclui Jahn–Teller) ·
11 Espectroscopia eletrônica e magnetismo (inclui Tanabe–Sugano) · 12 Equilíbrio em complexos · 13 Mecanismos de reação em complexos ·
14 Química do bloco d e organometálica · 15 Lantanídeos e actinídeos · 16 Bioinorgânica (opcional)
Detalhe de cada módulo (conteúdo, recurso âncora, fontes de dados): `PLANO_MODULOS.md`.

## Recursos interativos (regras)
- **Um recurso âncora por módulo**, feito com capricho; o resto reutiliza componentes.
- **Desempenho:** ilhas do Astro com `client:visible`; 3D pesado começa como imagem e só carrega ao tocar em "Ativar 3D".
- **Celular:** tudo funciona com toque; 3D pesado tem versão simplificada.
- **Acessibilidade:** todo componente exige `descricao` (texto) e é operável pelo teclado; arrastar sempre tem alternativa por teclado.
- **Componentes reutilizáveis** usados no MDX (ex.: `<Molecula3D arquivo="SF4" />`); catálogo em `PLANO_MODULOS.md`, seção 6.
- **Dados com proveniência:** todo número fica em arquivo de dados com `fonte` e `revisado` (só o Gabriel marca `true`).
- Questões: múltipla escolha, arrastar, slider e preencher diagrama; cada uma com `dicas` em passos (base do futuro tutor de IA).

## Tecnologias (decididas na Fase 0, revisadas em 13/11/2026)
- **Astro** (site estático; conteúdo em Markdown/MDX/JSON; JS só nas "ilhas" interativas)
- **KaTeX + mhchem** para equações e fórmulas (`\ce{...}`), unidades no SI — geradas na construção (zero JS)
- **3Dmol.js** para moléculas/cristais/proteínas; **Three.js** para visualizações sob medida
- Framework das ilhas: **Svelte + Threlte** (aprovado em 13/11/2026)
- Diagramas em **SVG próprio** (+ módulos do D3, como `d3-scale`); **GSAP ScrollTrigger** só em páginas de equipamento;
  **model-viewer** para realidade aumentada (bônus, carregado no clique)
- **Plotly** fora do padrão (pesado); só se surgir gráfico 3D de superfície
- **GitHub Pages** via GitHub Actions
- Progresso atrás de `src/lib/progresso.ts` (implementado só na Fase 7); tutor atrás de `src/lib/tutor.ts` (hoje só mostra as dicas)

## Identidade visual (recebida em 13/11/2026)
- **Fonte única da marca: pasta `chem-livre-marca/`** (README com voz e regras, `tokens.css`, `tokens.json`, logos, fontes).
  Regras de interface e mapa do site: `PROMPT_IDENTIDADE_INTERFACE.md` (ajustado em 17/11/2026).
  Esboço visual (6 telas): `Chem Livre — Esboço do site.html` (usa a numeração antiga de 12 módulos; vale a nova).
- Tokens extras: `--texto-corpo`, `--destaque-contraste`, `--destaque-suave`, `--destaque-texto`, pares `<area>`/`<area>-suave`,
  espaços `--espaco-1..6` (4/8/16/24/40/64 px), raios 10/20/999 px. Nenhuma cor ou tamanho solto no código.
- `--destaque` é a **única cor de ação** (um botão principal por tela); cores de área só em etiquetas, ícones e botões da área.
- Tema: `prefers-color-scheme` + botão manual, guardado em `src/lib/preferencias.ts` (não em `progresso.ts`).
- Modo claro: fundo `#F6F7F9`, superfície `#FFFFFF`, borda `#E3E6EB`, texto `#0E1116`, secundário `#4A5260`, destaque `#1F5FD1`.
- Modo escuro: fundo `#0E1116`, superfície `#171B22`, borda `#2A303A`, texto `#F2F4F7`, secundário `#A3ACBA`, destaque `#7DAAF5`.
- Famílias de cor dos módulos: Estrutura (azul), Ácidos e bases (verde), Sólidos (amarelo), Redox (roxo), Coordenação (rosa),
  Elementos (laranja);
  aprovado em 17/11/2026: "Elementos" = laranja dicromato (`#A3440B`/`#FDEEE4`; escuro `#F5A26E`/`#3A2213`)
  para os módulos 8, 14, 15; módulo 16 fica em Coordenação. Detalhe: `PLANO_MODULOS.md`, seção 9.
- Fontes: Geist Serif (títulos), Hubot Sans (texto), Geist Mono (dados); hospedadas no próprio site, com *subsetting*.
  Licenças (verificadas nos metadados em 13/11/2026): Geist Serif e Geist Mono = SIL OFL 1.1 (Vercel);
  Hubot Sans não traz a licença no arquivo → conferir o LICENSE do repositório oficial (github/hubot-sans) antes de publicar.
  A OFL exige distribuir o texto da licença junto com as fontes.
- Símbolo: arco + ponto em SVG; cards com raio 20 px; botões em pílula.

## Requisitos técnicos
- Prioridade desktop, mas totalmente responsivo (celular/tablet).
- Custo zero; sem login na v1; arquitetura pronta para login/comunidade no futuro.
- **Conteúdo separado do código**: textos, questões, roteiros em `src/content/` (Markdown/JSON) editáveis pelo usuário.
- Acessibilidade (contraste, textos alternativos) e páginas leves para internet fraca.
- Identidade visual limpa, moderna, consistente (marca pessoal).
- Licenças: conteúdo **CC BY 4.0**, código **MIT**, exibidas no rodapé.

## Acervo e privacidade (CRÍTICO)
- `referencias/` está no `.gitignore` e **nunca** vai ao GitHub. Conferir com `git status` antes de cada commit.
- O acervo **não tem permissão de compartilhamento público**: é só base de apoio (tópicos, sequência, ideias).
- Escrever o conteúdo com palavras próprias; **não publicar** PDFs, trechos longos, figuras ou tabelas copiadas.
  Artigos podem ser citados e linkados.
- Trabalhos de colegas só com autorização e crédito.
- Inventário: `referencias/inventario.csv` (arquivo, autor, origem, tipo, bloco, status, observacao).
- Os 3 PDFs "Notas dos testes de Química de Coordenação…" (dados de alunos) foram removidos (conferido em 17/11/2026).
- Roteiros de aula prática (acervo privado): servem **só como referência de quais experimentos fazer** (decisão de 17/11/2026: a autorização
  do professor não virá a tempo). O site **não cita nem credita a disciplina**; o texto parte dos **artigos e procedimentos
  originais** (muitos de livre acesso), citados com link e reescritos com palavras próprias.
- **Dados reais para o laboratório virtual** (proposta de 17/11/2026, a aprovar): estudantes compartilham **só os dados
  medidos** (massas, rendimentos, absorbâncias), nunca o relatório inteiro, com consentimento, licença CC BY 4.0 e sem
  dados pessoais obrigatórios (LGPD). Até a Fase 7: formulário externo gratuito; depois, envio pelo próprio site com login.
  Todo dado de estudante passa pela revisão do Gabriel (`revisado`) antes de aparecer.
  Censura automática do relatório inteiro foi avaliada e **descartada** (nomes não têm padrão; risco LGPD). Alternativa:
  o navegador lê o arquivo localmente, preenche o formulário e **só a tabela é enviada** (PLANO, seção 8).

## Qualidade do conteúdo químico
- Linguagem rigorosa de nível superior, mas clara; citar livros-texto clássicos e IUPAC.
- **Nunca inventar valores.** Na dúvida sobre constante/dado/mecanismo, sinalizar para o usuário conferir.
