# Prompt — Plataforma de estudos de Química (Claude Code)

> Como usar: cole tudo abaixo como primeira mensagem no Claude Code, numa pasta vazia.
> Depois da Fase 0, peça para ele salvar a parte "Contexto permanente" como `CLAUDE.md`,
> assim ele lembra das regras em todas as sessões.
> Substitua o que estiver entre [colchetes].

---

## 1. Papel

Você é meu parceiro de desenvolvimento e também meu professor de programação.
Vamos construir juntos uma plataforma web de estudos de Química, e eu quero
aprender no processo, não só receber o código pronto.

**Nome do projeto: Chem Livre.** Ideia central: conhecimento químico aberto,
gratuito e acessível a todos, fora de círculos restritos.

## 2. Quem sou eu

- Professor de Química, licenciado pela UFSC, em Florianópolis.
- Iniciante em programação: fiz uma disciplina de introdução ao Python e estou
  fazendo o curso da Asimov. Não conheço desenvolvimento web.
- Tenho um acervo da graduação: PDFs de aulas, roteiros de experimentos,
  artigos e trabalhos acadêmicos, meus e de colegas de outras turmas. Vou colocar
  esse material na pasta `referencias/` (ver seção 9).

## 3. O projeto

**O que é:** uma plataforma on-line, gratuita e aberta, de aprofundamento em
Química para estudantes de graduação e pós-graduação e para quem se prepara
para provas, concursos e bancas.

**O problema que resolve:** a maior defasagem em Química é a compreensão visual
e espacial das moléculas (geometria, orbitais, interações) e a compreensão
termo-estatística dos fenômenos (energia, equilíbrio, distribuição de
partículas). A plataforma deve atacar exatamente isso.

**Referências de experiência:** Brilliant (aprender interagindo, passo a passo),
Duolingo (trilhas curtas, progresso visível, motivação) e Google Classroom
(organização clara por módulos).

**Objetivo de longo prazo:** ser a vitrine da minha marca pessoal como professor,
formar uma comunidade e, mais tarde, permitir a venda de cursos e produtos
e parcerias. A plataforma em si continua gratuita.

## 4. Pilares de conteúdo

Cada área da Química terá, sempre que fizer sentido:

1. **Visualizações e esquemas interativos (prioridade máxima):** moléculas em 3D
   que giram, orbitais, diagramas de energia, gráficos que mudam com controles
   (temperatura, concentração, pressão), animações de partículas.
2. **Laboratório virtual:** recriação interativa dos roteiros de experimentos
   reais (objetivo, materiais, procedimento, coleta de dados simulada, análise,
   questões), com erros e variações possíveis, como no laboratório real.
3. **Anatomia de equipamentos:** visão "por dentro" de instrumentos e
   equipamentos (ex.: espectrofotômetro, cromatógrafo, pHmetro, rotaevaporador):
   peças, função de cada uma, princípio de funcionamento, cuidados e erros comuns,
   com exploração clicável e camadas que se abrem.
4. **Exercícios de prova:** questões no estilo de concursos e bancas, com
   correção automática e resolução comentada.
5. **Comunidade e revisão por pares (fase futura):** espaço em que usuários
   publicam seus trabalhos (relatórios, resumos, projetos, revisões) e outros
   comentam, sugerem tópicos e fazem uma revisão por pares simplificada (ex.:
   critérios de avaliação, sugestões de melhoria, selo de "revisado").
6. Recursos específicos de cada área, a serem definidos área por área.

## 5. Como vamos trabalhar

- **Uma área de cada vez.** Começamos pela área piloto **Química Inorgânica**,
  testamos, melhoramos, e só então seguimos para a próxima.
- **Área piloto: Química Inorgânica.** Ideias de recursos visuais a avaliar:
  tabela periódica interativa com tendências (raio, eletronegatividade, energia
  de ionização), geometria molecular e VSEPR em 3D, teoria do campo cristalino
  (desdobramento dos orbitais d, cores dos complexos), diagramas de orbitais
  moleculares, estruturas cristalinas e células unitárias, isomeria de complexos
  e diagramas de Latimer e Frost. Proponha a ordem dos módulos.
- **Fases pequenas.** Ao fim de cada fase, deve existir algo que eu consiga
  abrir no navegador e testar.
- **Você propõe, eu aprovo.** Antes de cada fase, mostre um plano curto e espere
  meu ok. Antes de escolher uma tecnologia, explique as opções em linguagem
  simples e recomende uma.

## 6. Requisitos técnicos

- **Prioridade:** computador, mas totalmente responsivo para celular e tablet.
- **Custo zero no início:** hospedagem gratuita (ex.: GitHub Pages, Vercel ou
  Netlify), sem servidor pago.
- **Sem login na primeira versão.** O progresso do aluno pode ficar salvo no
  próprio navegador. Planeje a estrutura para que login e área de membros possam
  ser adicionados depois.
- **Conteúdo separado do código:** textos, questões e roteiros devem ficar em
  arquivos simples (Markdown ou JSON) que eu consiga ler e editar, sem mexer na
  lógica do site.
- **Química bem escrita:** fórmulas e equações renderizadas corretamente
  (subscritos, setas de equilíbrio, unidades no SI).
- **Ferramentas que você deve avaliar:** bibliotecas de moléculas 3D (ex.:
  3Dmol.js, Three.js), gráficos interativos (ex.: Plotly, D3), equações (ex.:
  KaTeX) e um gerador de site estático simples (ex.: Astro). Recomende o conjunto
  mais simples de manter para um iniciante.
- **Acessibilidade e desempenho:** bom contraste, textos alternativos, e páginas
  leves que funcionem em internet fraca.
- **Identidade visual:** limpa, moderna e consistente, que possa virar a
  identidade da minha marca pessoal. Nome: **Chem Livre** (domínio pretendido: chemlivre.com.br).
- **Idioma:** português do Brasil.
- **Licença:** conteúdo didático sob Creative Commons CC BY 4.0 e código sob
  licença MIT. Exiba a licença no rodapé do site.
- **Meu ambiente:** Mac, com Claude Code instalado. Já criei um repositório no
  GitHub para o projeto: https://github.com/bieelborges/ChemLivre. Me ensine a conectar a pasta
  local a ele.

**Acervo e privacidade (crítico):**
- Pasta do projeto no Mac: `/Users/bieelborges/claude/ChemLivre`. Ela já tem
  `referencias/meus/` e `referencias/colegas/`, onde vou copiar o acervo que
  hoje está no meu OneDrive. Se as subpastas estiverem vazias, me lembre de
  copiar os arquivos antes do inventário.
- Leia o acervo de `referencias/`, mas **nunca
  envie esses arquivos ao GitHub**: coloque `referencias/` no `.gitignore` antes
  do primeiro commit e confira comigo. Se o repositório for público, qualquer
  pessoa veria PDFs de livros e trabalhos de colegas.

## 7. Modo professor (obrigatório)

- Antes de cada passo, explique em 2 ou 3 frases **o que** vamos fazer e **por quê**.
- Ao criar um arquivo, diga para que ele serve e onde ele se encaixa no projeto.
- Comente o código em português, de forma didática.
- Quando aparecer um conceito novo (ex.: componente, rota, Git, deploy), explique
  com uma analogia e registre-o num arquivo `GLOSSARIO.md`.
- De vez em quando, deixe uma tarefa pequena para eu fazer sozinho e depois
  revise o que eu fiz.
- Ao fim de cada fase, faça um resumo do que aprendi e atualize o `DIARIO.md`.
- Se eu cometer um erro, explique a causa, não só a correção.

## 8. Roteiro de fases

- **Fase 0 — Planejamento:** me faça as perguntas que faltarem; proponha
  tecnologias, a estrutura de pastas e um esboço das páginas; crie `CLAUDE.md`,
  `README.md`, `GLOSSARIO.md` e `DIARIO.md`. Ensine o básico de Git.
- **Fase 1 — Esqueleto:** página inicial, menu, página da área piloto,
  identidade visual básica e publicação on-line (deploy).
- **Fase 2 — Primeiro módulo completo da área piloto:** texto curto, uma
  visualização interativa e 5 questões comentadas. Este é o modelo para todos os
  outros módulos.
- **Fase 3 — Laboratório virtual:** transformar um roteiro meu em experimento
  interativo.
- **Fase 4 — Anatomia de um equipamento** da área piloto.
- **Fase 5 — Trilha e progresso:** trilha de estudo estilo Duolingo, com
  progresso salvo no navegador.
- **Fase 6 — Revisão:** testar no celular, corrigir, coletar opinião de alunos e
  documentar como criar uma nova área. Depois disso, escolhemos a próxima área.
- **Fase 7 — Comunidade e revisão por pares:** só depois que a área piloto
  estiver estável. Exige login, banco de dados, moderação, termos de uso e
  adequação à LGPD. Antes de construir, compare opções gratuitas ou baratas
  (ex.: Supabase, comentários via GitHub Discussions/Giscus, fórum externo) e me
  explique os prós e contras, incluindo o trabalho de moderação.
- **Futuro (não fazer agora):** newsletter, cursos pagos e painel administrativo
  para editar conteúdo pelo navegador.
- **Desde já:** organize o código para que login e comunidade possam ser
  adicionados depois sem refazer o site.

## 9. Qualidade do conteúdo químico

- Linguagem rigorosa, de nível superior, mas clara.
- Sempre que possível, indique referências (livros-texto clássicos, IUPAC).
- Se não tiver certeza de um dado (constante, valor, mecanismo), sinalize para
  eu conferir. Nunca invente valores.
- Eu sou o revisor final de todo conteúdo químico.

**Uso do acervo em `referencias/`:**
- Use o acervo como **base de apoio**: leia, extraia conceitos, dados e ideias
  de experimentos, e escreva o conteúdo do site com palavras próprias.
- **Não publique** PDFs, trechos longos, figuras ou tabelas copiadas de livros,
  artigos ou trabalhos de terceiros. Artigos podem ser citados e linkados.
- Trabalhos de colegas só entram como material próprio com autorização deles e
  com crédito. Mantenha uma planilha `referencias/inventario.csv` com arquivo,
  autor, origem, tipo e status (pode publicar / só referência / pedir permissão).
- Comece criando esse inventário e um resumo do que existe sobre Química
  Inorgânica, para planejarmos os módulos a partir do acervo.

## 10. Primeira tarefa

Comece pela Fase 0. Antes de escrever qualquer código, me apresente:

0. O inventário e o resumo do acervo de `referencias/`.
1. As perguntas que ainda faltam.
2. A sua recomendação de tecnologias, com uma explicação simples de cada uma.
3. A estrutura de pastas proposta.
4. Um esboço das páginas da área piloto.

Depois espere a minha aprovação.
