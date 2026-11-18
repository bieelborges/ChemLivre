# Diário de bordo — Chem Livre

> Um registro do que foi feito e aprendido em cada fase.
> Entradas mais recentes no topo.

---

## Fase 0 — Ajustes finais (17/11/2026)

### O que fizemos
- Recebemos a pasta **`chem-livre-marca/`** (guia, `tokens.css`, `tokens.json`, logos e fontes), o **esboço do site**
  (6 telas: início, trilha, lição, celular e tablet) e o **`PROMPT_IDENTIDADE_INTERFACE.md`**.
- Ajustamos o prompt da interface ao plano aprovado: trilha com 16 módulos; progresso, XP e revisão espaçada
  só com o login (Fase 7), com espaço reservado no layout; tema guardado em `src/lib/preferencias.ts`.
- Os roteiros da disciplina passam a ser só referência de quais experimentos fazer; o site cita os procedimentos originais.
- Proposta nova: estudantes compartilham os dados medidos nos seus experimentos para alimentar o laboratório virtual.
- Trocamos o código da disciplina por "roteiros de aula prática de referência" em todos os documentos do repositório.
- Avaliamos a censura automática do relatório inteiro: descartada (nomes não têm padrão; LGPD). Alternativa: o navegador
  lê o arquivo no computador do aluno e só a tabela de dados é enviada.
- Criamos a família "Elementos": **laranja do dicromato** (aprovada); módulo 16 fica em Coordenação.

### O que aprendi (resumo do professor)
1. **Fonte única da verdade**: as cores moram num só lugar (`tokens.css`); se mudar lá, muda no site inteiro.
2. **Separar responsabilidades**: a preferência de tema e o progresso do aluno vivem em arquivos diferentes,
   porque mudam por motivos diferentes (um é gosto pessoal, o outro depende de login).
3. **Privacidade por desenho**: o jeito mais seguro de proteger um dado é nunca recebê-lo. Processar no navegador
   do aluno evita o problema, em vez de tentar consertá-lo depois.
4. **Contraste se mede**: a razão de contraste (WCAG) é um número calculado a partir das cores; 4,5:1 é o mínimo para texto.

### Pendências
- [ ] Aprovar a proposta de compartilhamento de dados pelos estudantes (`PLANO_MODULOS.md`, seção 8).
- [ ] Aprovar o plano da Fase 1 e o commit inicial.
- [x] Família "Elementos" = laranja dicromato; módulo 16 em Coordenação (aprovado em 17/11/2026).

---

## Fase 0 — Revisão do planejamento (13/11/2026)

### O que fizemos
- Recebemos a **identidade visual** (claro e escuro): cores, fontes, símbolo e famílias de cor dos módulos.
  Os valores foram registrados no `CLAUDE.md` e no `PLANO_MODULOS.md` para virarem *tokens de design* na Fase 1.
- Aplicamos o feedback sobre a trilha: de 12 para **16 módulos**, com química descritiva (blocos s, p, d),
  mecanismos de reação, organometálica e bioinorgânica; Redox passou para antes da coordenação.
- Escrevemos o `PLANO_MODULOS.md`: recurso âncora de cada módulo, catálogo de componentes reutilizáveis,
  avaliação de bibliotecas, fontes de dados e pontos de rigor químico para conferir.
- Analisamos os **roteiros de aula prática de referência** (6 experimentos) e atualizamos as opções
  do laboratório virtual. Recomendação: Exp. 4, [Co(acac)₃] + UV-Vis.
- Atualizamos o `referencias/inventario.csv` (roteiros de referência e um artigo que faltava).
- O progresso estilo Duolingo foi para a última fase, junto com o login.

### O que aprendi (resumo do professor)
1. **Componente** é uma peça de site reutilizável com "parâmetros", como uma função em Python:
   `<Molecula3D arquivo="SF4" />` é como chamar `molecula_3d(arquivo="SF4")`.
2. **Ilhas** só carregam o JavaScript de uma parte da página quando ela aparece na tela: o resto da página continua leve.
3. **Proveniência de dados**: cada número do site vai morar num arquivo com a sua fonte, como uma amostra com etiqueta.
4. **Desempenho também é acessibilidade**: um aluno com internet fraca ou celular simples precisa de versão simplificada.

### Pendências
- [x] **Aprovar o `PLANO_MODULOS.md`** — aprovado em 13/11/2026.
- [x] Família de cor "Elementos" (módulos 8, 14, 15): laranja dicromato, aprovada em 17/11/2026.
- [x] Licenças das fontes: Geist Serif e Geist Mono = SIL OFL 1.1 (conferido nos metadados). Hubot Sans: conferir no repositório oficial na Fase 1.
- [x] Autorização do professor: não virá a tempo → roteiros só como referência; citar os procedimentos originais (17/11/2026).
- [ ] Dados reais para o laboratório: proposta de estudantes enviarem só os dados medidos (formulário até a Fase 7) — aguardando aprovação.

### Com minhas palavras (tarefa do Gabriel)
<!-- Escolha UM recurso âncora do PLANO_MODULOS.md e descreva, em 3 a 5 frases, o que o aluno faz nele
     e qual erro conceitual comum ele ajuda a combater. Depois me peça para revisar. -->

---

## Fase 0 — Planejamento (11/11/2026)

### O que fizemos
- Lemos o acervo de `referencias/` (122 arquivos de Inorgânica) e criamos `referencias/inventario.csv`
  com autor, origem, bloco temático e status de cada arquivo.
- Definimos a área piloto (**Química Inorgânica**) e a ordem dos 12 módulos da trilha.
- Escolhemos as tecnologias: Astro, KaTeX + mhchem, 3Dmol.js, Plotly, GitHub Pages.
- Criamos o `.gitignore` **antes** de tudo, para que `referencias/` nunca vá ao GitHub.
- Transformamos a pasta em repositório Git (`git init`).
- Criamos `CLAUDE.md`, `README.md`, `GLOSSARIO.md`, `DIARIO.md` e as licenças.

### O que aprendi (resumo do professor)
1. **Git é um caderno de laboratório para arquivos**: cada commit é uma entrada datada que pode ser recuperada.
2. **A ordem importa**: o `.gitignore` precisa existir *antes* do primeiro commit. Se um arquivo entra no histórico,
   ele continua lá mesmo depois de apagado, como uma página arrancada que deixou marca no caderno.
3. **Conteúdo separado do código**: textos e questões ficarão em Markdown/JSON, que você edita sem mexer na lógica do site.
4. **Direitos autorais também são requisito técnico**: o repositório é público, então o acervo serve só de apoio
   e todo texto do site é escrito com palavras próprias.

### Pendências
- [x] Remover da pasta os 3 PDFs "Notas dos testes de Química de Coordenação…" (dados de alunos) — conferido em 17/11/2026.
- [ ] Revisar `referencias/inventario.csv`, principalmente as linhas "autoral – confirmar".
- [ ] Responder antes da Fase 1: domínio registrado? cores/fonte/logo preferidos?

### Com minhas palavras (tarefa do Gabriel)
<!-- Escreva aqui, em 3 a 5 frases, o que é um commit e por que o .gitignore teve de vir primeiro.
     Depois me peça para revisar. -->
