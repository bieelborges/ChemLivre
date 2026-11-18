# Chem Livre

**Conhecimento químico aberto, gratuito e acessível a todos.**

Chem Livre é uma plataforma on-line de aprofundamento em Química para estudantes de graduação e
pós-graduação e para quem se prepara para provas e concursos. O foco está no que mais dificulta a
aprendizagem em Química:

- a compreensão **visual e espacial** das moléculas (geometria, orbitais, interações);
- a compreensão **termo-estatística** dos fenômenos (energia, equilíbrio, distribuição de partículas).

## O que você vai encontrar (em construção)

- **Visualizações interativas**: moléculas em 3D, orbitais, diagramas de energia, gráficos com controles.
- **Laboratório virtual**: experimentos reais recriados passo a passo, com dados simulados e erros possíveis.
- **Anatomia de equipamentos**: o que há dentro de um espectrofotômetro, de um pHmetro, de um cromatógrafo…
- **Exercícios de prova**: questões com correção automática e resolução comentada.

Área piloto: **Química Inorgânica**.

## Estado do projeto

| Fase | Descrição | Situação |
|---|---|---|
| 0 | Planejamento (revisão de 13/11: identidade visual, trilha com 16 módulos, recursos interativos) | ✅ concluída |
| 1 | Esqueleto do site, identidade visual e publicação | ⏳ em andamento |
| 2 | Primeiro módulo completo (VSEPR) | — |
| 3 | Laboratório virtual | — |
| 4 | Equipamento por dentro (espectrofotômetro UV-Vis) | — |
| 5 | Demais módulos da trilha | — |
| 6 | Revisão | — |
| 7 | Comunidade, login e progresso | — |

O plano detalhado da trilha está em [PLANO_MODULOS.md](PLANO_MODULOS.md).

## Como rodar o site no seu computador

Precisa do [Node.js](https://nodejs.org/) (versão 22 ou mais nova). No terminal, dentro da pasta do projeto:

```bash
npm install
```

```bash
npm run dev
```

Depois abra http://localhost:4321/ChemLivre/ no navegador. As mudanças nos arquivos aparecem na hora.

| Comando | O que faz |
|---|---|
| `npm install` | Baixa as bibliotecas do projeto (só na primeira vez ou quando o `package.json` muda) |
| `npm run dev` | Abre o site no seu computador, atualizando a cada mudança |
| `npm run build` | Gera o site final na pasta `dist/` (o mesmo que o GitHub faz ao publicar) |
| `npx astro check` | Procura erros no código |

## Onde fica cada coisa

| Pasta ou arquivo | Para que serve |
|---|---|
| `src/content/inorganica/` | **Um arquivo por módulo da trilha** (texto em MDX). É aqui que o conteúdo é escrito. |
| `src/pages/` | As páginas do site (cada arquivo vira um endereço) |
| `src/components/` | Peças reutilizáveis (cabeçalho, cartão de módulo, diagramas…) |
| `src/layouts/` | A moldura comum de todas as páginas |
| `src/styles/global.css` | Estilos-base, feitos só com os tokens da marca |
| `src/lib/` | Funções auxiliares (tema, endereços, áreas, progresso e tutor) |
| `chem-livre-marca/` | **Fonte única da marca**: cores, fontes e símbolo |
| `.github/workflows/publicar.yml` | O robô que publica o site no GitHub Pages |

## Licenças

- **Conteúdo didático** (textos, questões, roteiros): [Creative Commons Atribuição 4.0 Internacional (CC BY 4.0)](LICENSE-CONTEUDO.md).
- **Código-fonte**: [MIT](LICENSE).
- **Fontes** (Geist Serif, Geist Mono, Hubot Sans): SIL Open Font License 1.1, textos em `chem-livre-marca/fonts/`.

## Autor

Gabriel Borges, professor de Química, licenciado pela UFSC (Florianópolis).
