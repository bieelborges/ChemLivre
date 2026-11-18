# Plano da trilha de Inorgânica e dos recursos interativos

> **Status: APROVADO pelo Gabriel em 13/11/2026.**
> Escolhas registradas na seção 12. Mudanças futuras: propor, explicar e aguardar nova aprovação.

Este documento é o "projeto pedagógico e técnico" da trilha. O `CLAUDE.md` guarda as regras curtas;
aqui fica o detalhe de cada módulo: conteúdo, recurso âncora, componentes, fontes de dados e versão para celular.

---

## 1. Regras gerais (do seu feedback) e como vamos cumpri-las

| Regra | Como será feita na prática |
|---|---|
| **Um recurso âncora por módulo**, feito com capricho | Cada módulo tem um âncora (seção 5). Recursos menores reutilizam componentes que já existem, sem código novo. |
| **Desempenho**: cada recurso carrega só na própria página | Ilhas do Astro com `client:visible` (o código só desce quando o recurso aparece na tela). Recursos 3D pesados mostram primeiro uma **imagem estática** e só carregam o 3D quando o aluno toca em "Ativar 3D". Equações em KaTeX são geradas na construção do site (zero JavaScript para o leitor). |
| **Celular**: toque e tela pequena | Arrastar usa *pointer events* (mouse e dedo pelo mesmo código). Se o aparelho for fraco ou a tela pequena, o 3D vira uma **versão simplificada** (menos átomos/pontos, sem sombras) ou imagem com controles 2D. Respeita "reduzir movimento" do sistema. |
| **Acessibilidade**: descrição em texto + teclado | Todo componente exige a propriedade `descricao` (o site **não compila** sem ela). Controles são botões e sliders nativos, operáveis por Tab, setas e Enter. Arrastar-e-soltar sempre tem alternativa por teclado ("selecione o item → escolha o destino"). Cores nunca são a única pista (sempre com rótulo ou padrão). |
| **Componentes reutilizáveis** no MDX | Ex.: `<Molecula3D arquivo="SF4" descricao="..." />`. Catálogo completo na seção 6. |
| **Modo professor** | Antes de cada recurso: qual biblioteca, por quê, com analogia; termo novo vai para o `GLOSSARIO.md`. |
| **Rigor químico**: nenhum valor inventado | Todo número mora num arquivo de dados com o campo `fonte` (referência + DOI/link) e o campo `revisado` (só você muda para `true`). O site mostra a fonte embaixo de cada recurso. Seção 8 lista as fontes por tipo de dado. |

---

## 2. Bibliotecas: avaliação e recomendação

| Biblioteca | Para quê | Peso para o aluno | Licença | Recomendação |
|---|---|---|---|---|
| **3Dmol.js** | Moléculas e cristais a partir de arquivos (XYZ, PDB, CIF, SDF) e superfícies de orbitais (arquivos *cube*) | médio | BSD | **Usar** em `Molecula3D`, `Cristal3D`, `Proteina3D` |
| **Three.js** | Cenas 3D sob medida (VSEPR montável, operações de simetria, célula explodida, orbitais com *shaders*) | médio | MIT | **Usar**, via Threlte ou React Three Fiber (ver seção 3) |
| **model-viewer** (Google) | Realidade aumentada no celular (molécula "em cima da mesa") | médio, carregado só no clique | Apache 2.0 | **Usar como bônus** nos módulos com 3D; exige gerar arquivos `.glb` das moléculas (faremos isso automaticamente na construção do site) |
| **SVG próprio** | Diagramas que respondem (OM, campo cristalino, Frost, Born–Haber, bancada do laboratório) | mínimo | — | **Padrão** para todo diagrama 2D |
| **D3.js** | Escalas, eixos e formas de gráficos | leve se importarmos só os módulos (`d3-scale`, `d3-shape`) | ISC | **Usar só os módulos**, nunca o pacote inteiro |
| **GSAP + ScrollTrigger** | Animação ao rolar (vista explodida de equipamentos) | leve | gratuita desde 2025, mas com licença própria (não é MIT) | **Usar só nas páginas de equipamento** |
| **Plotly** | Gráficos científicos prontos | **pesado** | MIT | **Evitar por padrão.** Gráficos 2D (distribuição de espécies, titulação, Frost, contração lantanídica) em SVG + `d3-scale`, que ficam muito mais leves. Plotly só se surgir um gráfico 3D de superfície. |
| **KaTeX + mhchem** | Equações e fórmulas | zero (gerado na construção) | MIT | **Manter** |

---

## 3. Decisão (aprovada): em que "linguagem de componentes" faremos as ilhas

O Astro deixa escrever as partes interativas em vários *frameworks*. Para você manter o código depois, o ideal é escolher **um só**.

| Opção | A favor | Contra |
|---|---|---|
| **Svelte + Threlte** (recomendada) | Código parece HTML + CSS + JS comum (mais fácil de ler para iniciante); envia **menos JavaScript** ao aluno (bom para internet fraca); Threlte faz para o Svelte o que o React Three Fiber faz para o React | Comunidade menor que a do React; menos tutoriais |
| **React + React Three Fiber** | Maior comunidade e mais exemplos prontos; R3F muito maduro | Envia mais JavaScript; sintaxe (JSX, *hooks*) mais distante do que você já viu em Python |
| JavaScript puro + Three.js | Nenhuma dependência extra | Componentes ficam longos e repetitivos; mais difícil de reaproveitar |

**Recomendação: Svelte + Threlte.** *Analogia:* é como escolher uma vidraria padrão para o laboratório inteiro; qualquer uma funciona, mas misturar padrões de junta esmerilhada só dá dor de cabeça.

---

## 4. Trilha de Inorgânica: 16 módulos (nova ordem)

Redox foi puxado para antes da coordenação porque os diagramas de Latimer e Frost apoiam a química descritiva dos blocos s, p e d.
A cor de cada módulo segue as famílias da identidade visual (seção 9).

| # | Módulo | Família de cor |
|---|---|---|
| 1 | Estrutura atômica e tendências periódicas | Estrutura (azul) |
| 2 | VSEPR | Estrutura (azul) |
| 3 | Simetria e grupos de ponto | Estrutura (azul) |
| 4 | TLV e Teoria do Orbital Molecular | Estrutura (azul) |
| 5 | Ácidos e bases (Brønsted, Lewis e HSAB) | Ácidos e bases (verde) |
| 6 | Sólidos iônicos e teoria de bandas | Sólidos (amarelo) |
| 7 | Redox (Latimer e Frost) | Redox (roxo) |
| 8 | Química dos blocos s e p | Elementos (laranja) |
| 9 | Compostos de coordenação e isomeria | Coordenação (rosa) |
| 10 | Teoria do campo cristalino e do campo ligante | Coordenação (rosa) |
| 11 | Espectroscopia eletrônica e magnetismo | Coordenação (rosa) |
| 12 | Equilíbrio em complexos | Coordenação (rosa) |
| 13 | Mecanismos de reação em complexos | Coordenação (rosa) |
| 14 | Química do bloco d e organometálica | Elementos (laranja) |
| 15 | Lantanídeos e actinídeos | Elementos (laranja) |
| 16 | Bioinorgânica (opcional) | Coordenação (rosa) |

---

## 5. Módulo a módulo

Formato de cada módulo: **Conteúdo** (com os acréscimos pedidos) · **Âncora** · **Apoio** (componentes reaproveitados) ·
**Dados e fontes** · **Celular** · ⚠️ **Rigor** (pontos que você precisa conferir ou decidir).

### 1. Estrutura atômica e tendências periódicas
- **Conteúdo:** configuração eletrônica; **carga nuclear efetiva e regras de Slater**; raio, energia de ionização, afinidade eletrônica, eletronegatividade; blindagem e penetração.
- **Âncora — Tabela periódica viva.** O aluno escolhe a propriedade:
  raio → **tamanho do card** de cada elemento; eletronegatividade → **espectro de cor** do mais eletropositivo ao mais eletronegativo, com legenda;
  energia de ionização → **valor no card ou espectro de cor** (botão alterna). Bônus: modo "colunas 3D" (altura = propriedade), só no computador.
- **Apoio:** **Calculadora de Slater** passo a passo (o aluno agrupa os elétrons, o recurso mostra cada contribuição σ e chega em Z_ef); a Z_ef calculada também vira uma propriedade da tabela.
- **Dados e fontes:** massas atômicas IUPAC/CIAAW; 1ª energia de ionização do NIST Atomic Spectra Database; raios covalentes de Cordero *et al.*, *Dalton Trans.* 2008; eletronegatividade de Pauling (valores revisados por Allred, 1961, compilados no CRC Handbook); regras de Slater (*Phys. Rev.* 1930); comparação com Clementi e Raimondi (*J. Chem. Phys.* 1963).
- **Celular:** tabela rola na horizontal com o card do elemento em destaque fixo embaixo; modo 3D desligado.
- ⚠️ **Rigor:** "raio atômico" tem várias definições (covalente, metálico, de van der Waals). Proponho raio **covalente** e um aviso explicando a escolha. Você aprova?

### 2. VSEPR
- **Conteúdo:** contagem de pares no átomo central, arranjo dos pares × geometria molecular, repulsões (PI–PI > PI–PL > PL–PL), desvios dos ângulos ideais, polaridade.
- **Âncora — Montador de geometria.** Etapas: (1) o aluno faz a distribuição eletrônica do átomo central; (2) conta os elétrons de valência disponíveis; (3) adiciona pares ligantes e pares isolados; (4) a molécula 3D **se reorganiza** e mostra nome da geometria, ângulos e vetores de dipolo (soma vetorial → polar ou apolar).
- **Apoio:** `Molecula3D` para moléculas reais (SF₄, ClF₃, XeF₄, IF₅…); botão de realidade aumentada.
- **Dados e fontes:** ângulos ideais são geométricos (109,5°, 120°, 90°…); ângulos e momentos de dipolo **reais** vêm do NIST CCCBDB (geometrias experimentais) ou do CRC Handbook.
- **Celular:** 3D com menos efeitos; pares adicionados por botões grandes ("+ par ligante", "+ par isolado").
- ⚠️ **Rigor:** o VSEPR prevê a **direção** do dipolo e se a molécula é polar, mas não o **valor**. Proponho mostrar o valor experimental só para moléculas reais (com fonte). **Polarizabilidade** não sai do VSEPR: sugiro tratá-la de forma qualitativa (tamanho da nuvem eletrônica) ou deixá-la para o módulo 5 (HSAB). Qual prefere?

### 3. Simetria e grupos de ponto
- **Conteúdo:** elementos e operações (E, Cₙ, σ, i, Sₙ), grupos de ponto, fluxograma de classificação, noção de tabela de caracteres.
- **Âncora — Operações animadas + fluxograma clicável.** Botões E, Cₙ, σ, i, Sₙ **animam** a molécula (átomos numerados para ver quem foi para onde); ao lado, o fluxograma: o aluno responde cada pergunta ("é linear?", "tem Cₙ com n > 2?"…) e chega ao grupo de ponto.
- **Apoio:** biblioteca de ~15 moléculas cobrindo os grupos mais cobrados (C₁, Cs, C₂ᵥ, C₃ᵥ, D₃ₕ, D₄ₕ, Td, Oh, D∞h, C∞ᵥ…).
- **Dados e fontes:** geometrias do CCCBDB/PubChem; tabelas de caracteres montadas por nós a partir das definições (são dados matemáticos, não figuras copiadas).
- **Celular:** animação 3D simplificada; fluxograma vira perguntas sequenciais (uma por tela).

### 4. TLV e Teoria do Orbital Molecular
- **Conteúdo:** **TLV e hibridização primeiro**, depois TOM, **contrastando as duas** (o caso O₂: a TLV prevê diamagnético, a TOM explica o paramagnetismo). Diatômicas homo e heteronucleares, mistura s–p, OM de poliatômicas (orbitais de grupo dos ligantes).
- **Âncora — Diagrama de OM interativo.** O aluno distribui os elétrons nos níveis; o recurso identifica orbitais ligantes, antiligantes e não ligantes, **calcula a ordem de ligação** e indica se a espécie é **para- ou diamagnética**. Alternância com/sem mistura s–p (B₂, C₂, N₂ × O₂, F₂).
- **Apoio:** visualizador de hibridização (orbitais híbridos em 3D); `Orbital3D` para a forma dos OM.
- **Dados e fontes:** ordem de ligação e magnetismo saem da regra de preenchimento (cálculo exato); comprimentos e energias de ligação para comparação vêm do NIST/CRC.
- ⚠️ **Rigor:** **ferromagnetismo** é propriedade coletiva de um sólido (spins alinhados entre muitos átomos), não de uma molécula isolada. O diagrama de OM de uma molécula só decide entre **para e diamagnético**. Proponho levar ferro/antiferromagnetismo para os módulos 6 e 11. Concorda?

### 5. Ácidos e bases (Brønsted, Lewis e HSAB)
- **Conteúdo:** **Brønsted e Lewis antes do HSAB**; força ácida e efeito nivelador; **química em solventes não aquosos** (NH₃ líquida, H₂SO₄, solventes apróticos); HSAB de Pearson.
- **Âncora — Jogo de pareamento duro/macio.** O aluno arrasta ácidos para bases; cada acerto ou erro vem com explicação curta (tamanho, polarizabilidade, carga). Casos intermediários sinalizados.
- **Apoio:** "janela de acidez" de cada solvente (por que um ácido forte em água pode ser fraco em outro meio).
- **Dados e fontes:** classificação de Pearson (*J. Am. Chem. Soc.* 1963); constantes de autoprotólise de solventes de livros-texto (Shriver & Atkins; Housecroft & Sharpe), **a conferir**.
- **Celular:** arrastar vira tocar-e-tocar (escolhe o ácido, depois a base).

### 6. Sólidos iônicos e teoria de bandas
- **Conteúdo:** células unitárias e retículos (NaCl, CsCl, ZnS, CaF₂…), energia de rede, ciclo de Born–Haber, **defeitos em sólidos** (Schottky, Frenkel, não estequiometria), **teoria de bandas** (condutores, semicondutores, isolantes).
- **Âncora — Célula unitária "explodida" + ciclo de Born–Haber.** A célula se separa e cada átomo mostra a fração que pertence a ela (vértice ⅛, aresta ¼, face ½, interior 1); o aluno soma e chega à fórmula. O ciclo de Born–Haber é montado passo a passo (o aluno escolhe a próxima etapa e o diagrama de energia cresce).
- **Apoio:** **Bandas a partir de orbitais**: um slider aumenta o número de átomos (1, 2, 4… N) e os níveis se juntam em uma banda (modelo de Hückel da cadeia linear, calculado exatamente, sem valores inventados). Animação 2D de defeitos.
- **Dados e fontes:** estruturas cristalinas do Crystallography Open Database (dados de domínio público); entalpias do NIST-JANAF / NIST WebBook; energias de ionização do NIST ASD; afinidades eletrônicas do CRC.
- **Celular:** célula explodida em 3D simplificado; Born–Haber em SVG (leve).

### 7. Redox (Latimer e Frost)
- **Conteúdo:** potenciais padrão, diagramas de Latimer, conversão para Frost, desproporcionamento e comproporcionamento; ligação com Ellingham e obtenção de metais (ponte para o módulo 8).
- **Âncora — Diagrama de Frost clicável.** O aluno clica numa espécie; o recurso traça a reta entre as vizinhas e indica se ela **desproporciona** (ponto acima da reta) ou se as vizinhas **comproporcionam**. Alterna meio ácido/básico. O diagrama de Latimer correspondente aparece em cima e se atualiza junto.
- **Dados e fontes:** Bard, Parsons e Jordan, *Standard Potentials in Aqueous Solution* (IUPAC, 1985) e CRC Handbook.
- **Celular:** gráfico SVG responsivo; toque no ponto.

### 8. Química dos blocos s e p
- **Conteúdo:** propriedades, obtenção e compostos importantes de cada grupo; **anomalias do 2º período** e relações diagonais (Li–Mg, Be–Al, B–Si); boranos e ligação 3c-2e; gases nobres. É o tema mais cobrado em concursos.
- **Âncora (proposta minha) — Matriz de reatividade.** Linhas = elementos, colunas = reagentes (O₂, H₂O, H₂, halogênios). O aluno escolhe um cruzamento, **prevê o produto** e depois vê a equação balanceada e a explicação. Ex.: com O₂, Li forma óxido, Na forma peróxido, K forma superóxido (clássico de prova). As anomalias do 2º período ficam destacadas.
- **Apoio:** `Molecula3D` para compostos com estrutura marcante (diborano, P₄, S₈, XeF₄, borazina); fluxogramas animados de processos industriais (Haber–Bosch, Contato, Hall–Héroult, Solvay) como recurso menor.
- **Dados e fontes:** Greenwood & Earnshaw; Housecroft & Sharpe; Shriver & Atkins (conteúdo reescrito, nunca copiado).
- **Celular:** matriz vira lista "escolha o elemento → escolha o reagente".

### 9. Compostos de coordenação e isomeria
- **Conteúdo:** histórico (Werner), número de coordenação e geometrias, ligantes e quelatos, **nomenclatura IUPAC de complexos**, isomeria estrutural e estereoisomeria.
- **Âncora — Isômeros lado a lado.** Dois visualizadores 3D sincronizáveis (cis/trans, fac/mer, Δ/Λ). Teste **"são sobreponíveis?"**: o aluno gira um até tentar coincidir com o outro e responde; o recurso confere.
- **Apoio:** **Construtor de nomes IUPAC**: o aluno monta o complexo com peças (metal, ligantes, contraíons) e o nome se escreve sozinho, regra por regra (ordem alfabética, prefixos, estado de oxidação).
- **Dados e fontes:** IUPAC *Nomenclature of Inorganic Chemistry* (Red Book, 2005); geometrias idealizadas (avisado na tela).
- **Celular:** um isômero por vez com botão "trocar"; construtor de nomes em lista.

### 10. Teoria do campo cristalino e do campo ligante
- **Conteúdo:** desdobramento octaédrico/tetraédrico/quadrado planar, spin alto × baixo, EECC, série espectroquímica, **efeito Jahn–Teller**, **Teoria do Campo Ligante** (OM do octaedro, doadores e receptores π).
- **Âncora — Slider de Δo.** Mostra o desdobramento dos orbitais d, o preenchimento (spin alto × baixo comparando Δo com a energia de emparelhamento P), a **cor** do complexo e o **cálculo da EECC** passo a passo.
- **Apoio:** botão "Jahn–Teller" (alongamento do octaedro em d⁹ e d⁴ spin alto, com o novo desdobramento); diagrama de OM do campo ligante com chave σ / π-doador / π-receptor, mostrando por que Δo muda (a série espectroquímica "aparece").
- **Dados e fontes:** valores de Δo de complexos reais de Lever, *Inorganic Electronic Spectroscopy*, e Shriver & Atkins.
- ⚠️ **Rigor:** a energia de uma única banda é igual a Δo **só para d¹** (ex.: [Ti(H₂O)₆]³⁺). Para outras configurações, a cor depende de mais de uma transição (Tanabe–Sugano, módulo 11). Proponho: no módulo 10, a cor aparece como "modelo d¹" com aviso; o cálculo correto para dⁿ fica no módulo 11.

### 11. Espectroscopia eletrônica e magnetismo
- **Conteúdo:** termos espectroscópicos, regras de seleção, **diagramas de Tanabe–Sugano**, transferência de carga, momento magnético (spin-only e contribuição orbital), ferro e antiferromagnetismo (vindo do módulo 4).
- **Âncora — Espectro ligado à cor.** O aluno move bandas de absorção no espectro visível e vê a cor resultante; um círculo cromático mostra a cor complementar. Ao lado, **calculadora de μ** a partir do número de elétrons desemparelhados.
- **Apoio:** **Tanabe–Sugano interativo** (d² a d⁸): o aluno arrasta uma linha vertical até a razão entre as bandas bater com um espectro real e obtém Δo e B.
- **Dados e fontes:** μ_so = √[n(n+2)] μ_B (fórmula); cor calculada pelas funções de cor CIE 1931 (padrão internacional, muito mais rigoroso que "cor complementar" sozinha); espectros reais de Lever; Tanabe e Sugano (*J. Phys. Soc. Jpn.* 1954).
- ⚠️ **Rigor:** vamos **calcular** os diagramas de Tanabe–Sugano a partir das equações (não copiar figuras). Antes de publicar, você compara com os diagramas publicados.

### 12. Equilíbrio em complexos
- **Conteúdo:** constantes por etapas (K₁, K₂…) e globais (β), distribuição de espécies, efeito quelato e macrocíclico (com leitura entrópica), relação ΔG° = −RT ln K.
- **Âncora — Formação por etapas.** O aluno ajusta a concentração do ligante e vê o **gráfico de distribuição das espécies** (fração de M, ML, ML₂…) e um "béquer" com a proporção de cada espécie.
- **Apoio:** **efeito quelato contado em partículas**: animação que mostra quantas partículas ficam livres na troca de ligantes monodentados por um quelante (ponte com a termo-estatística).
- **Dados e fontes:** NIST SRD 46 (*Critically Selected Stability Constants*) / IUPAC SC-Database; sua planilha "Distribuição ácidos.xlsx" (se for sua) pode virar a base do cálculo.

### 13. Mecanismos de reação em complexos
- **Conteúdo:** substituição associativa (A), dissociativa (D) e de intercâmbio (Iₐ, I_d); **efeito trans**; complexos **lábeis × inertes**; transferência de elétrons de **esfera interna e externa** (experimento de Taube).
- **Âncora (proposta minha) — Jogo do efeito trans: "sintetize a cisplatina".** Partindo de [PtCl₄]²⁻, o aluno escolhe a ordem de adição dos ligantes e vê se obtém o isômero cis ou trans, com a explicação a cada passo. Liga com o módulo 16.
- **Apoio:** perfil de energia animado A × D (intermediário com NC 7 ou NC 5); escala logarítmica de troca de água (lábil × inerte); animação esfera interna × externa.
- **Dados e fontes:** constantes de troca de água de Helm e Merbach (*Chem. Rev.* 2005, **a conferir**); Taube (trabalhos clássicos); livros-texto.

### 14. Química do bloco d e organometálica
- **Conteúdo:** estados de oxidação e tendências ao longo das séries; compostos típicos; **regra dos 18 elétrons**; carbonilas e **retrodoação**; catálise (hidrogenação com o catalisador de Wilkinson, processo Monsanto).
- **Âncora (proposta minha) — Ciclo catalítico passo a passo com contador de elétrons.** O aluno avança cada etapa do ciclo (adição oxidativa, inserção, eliminação redutiva…) e o recurso mostra, a cada passo, **contagem de elétrons, NC e estado de oxidação** do metal.
- **Apoio:** **contador de 18 elétrons** (o aluno monta um complexo arrastando ligantes); animação da retrodoação M→CO; gráfico de estados de oxidação ao longo da série 3d.
- **Dados e fontes:** Crabtree, *The Organometallic Chemistry of the Transition Metals*; Greenwood & Earnshaw; frequências ν(CO) de literatura **a conferir**.
- ⚠️ **Observação:** é o maior módulo da trilha. Se ficar longo, dividimos em 14a (bloco d) e 14b (organometálica).

### 15. Lantanídeos e actinídeos
- **Conteúdo:** configuração 4f/5f, contração lantanídica e suas consequências (Zr/Hf), química do Ln³⁺, espectroscopia e luminescência, actinídeos e radioatividade.
- **Âncora — Contração lantanídica + orbitais f.** Gráfico dos raios iônicos de Ln³⁺ ao longo da série (clicável) ao lado dos sete orbitais f em 3D e de um gráfico de distribuição radial mostrando por que os 4f ficam "escondidos" sob 5s e 5p.
- **Dados e fontes:** raios iônicos de Shannon (*Acta Cryst.* A32, 1976), mesmo número de coordenação para todos; formas angulares dos orbitais f são exatas (matemática).
- ⚠️ **Rigor:** curvas radiais hidrogenoides servem só como ilustração qualitativa; para a comparação 4f × 5s5p, precisamos de funções radiais de cálculo atômico publicado (fonte a escolher com você).

### 16. Bioinorgânica (opcional)
- **Conteúdo:** metais essenciais, hemoglobina e mioglobina, metaloenzimas (anidrase carbônica, citocromos), cisplatina e fármacos metálicos.
- **Âncora (proposta minha) — Hemoglobina: do ferro à curva de saturação.** Sítio heme em 3D (estrutura real do Protein Data Bank) mostrando o Fe entrando no plano do anel ao ligar O₂; ao lado, as curvas de saturação de mioglobina × hemoglobina com slider de pH (efeito Bohr).
- **Apoio:** `Proteina3D` para cisplatina ligada ao DNA e sítio de zinco da anidrase carbônica.
- **Dados e fontes:** RCSB PDB (dados de domínio público; códigos das estruturas **a escolher e conferir**); parâmetros da equação de Hill de literatura **a conferir**.

---

## 6. Catálogo de componentes reutilizáveis

Cada componente vive em `src/components/` e é usado dentro do MDX do módulo. Todos têm `descricao` obrigatória.

| Componente | Exemplo de uso no MDX | Módulos |
|---|---|---|
| `Molecula3D` | `<Molecula3D arquivo="SF4" descricao="..." />` | 2, 3, 4, 8, 9, 14 |
| `Cristal3D` | `<Cristal3D arquivo="NaCl" explodir />` | 6 |
| `Proteina3D` | `<Proteina3D pdb="XXXX" destaque="HEM" />` | 16 |
| `Orbital3D` | `<Orbital3D tipo="4f" ml={0} />` | 1, 4, 10, 15 |
| `TabelaPeriodica` | `<TabelaPeriodica propriedade="raio" />` | 1, 8, 14, 15 |
| `DiagramaEnergia` | níveis + elétrons arrastáveis (base de OM, campo cristalino, Born–Haber) | 4, 6, 10, 11 |
| `GraficoSVG` | linhas/pontos com fonte embaixo | 7, 11, 12, 15, 16 |
| `RodaDeCores` / `Espectro` | espectro visível ↔ cor percebida | 10, 11 |
| `Equacao` | KaTeX + mhchem (sem JavaScript no navegador) | todos |
| `Fonte` | mostra a referência de cada dado | todos |
| `Questao` | ver seção 7.3 | todos |
| `RealidadeAumentada` | botão "ver na sua mesa" (model-viewer) | módulos com 3D |

---

## 7. Recursos transversais

### 7.1 Equipamentos por dentro (Fase 4)
- **Espectrofotômetro UV-Vis primeiro:** vista explodida que se abre ao rolar a página (GSAP ScrollTrigger), com rótulo e função de cada peça (fonte, monocromador, cubeta, detector); **caminho da luz animado** com controle do comprimento de onda.
- Ligação direta com o laboratório virtual: a curva de calibração do experimento escolhido é "medida" neste equipamento.
- Celular: a mesma sequência, com as peças aparecendo uma por tela (sem efeito 3D pesado).

### 7.2 Laboratório virtual (Fase 3): ver seção 8.

### 7.3 Questões interativas (motor criado na Fase 2)
Quatro tipos, todos escritos em JSON em `src/content/questoes/`:
1. **Múltipla escolha** com comentário para cada alternativa (não só "certo/errado").
2. **Arrastar**: associar (ácido ↔ base) ou ordenar (raios, energias).
3. **Slider**: resposta numérica com tolerância e unidade SI (ex.: "ajuste Δo até…").
4. **Preencher diagrama**: o aluno coloca elétrons num diagrama (reutiliza `DiagramaEnergia`).

Cada questão tem o campo `dicas: []` (passos que guiam sem entregar a resposta). Hoje as dicas são escritas por você;
no futuro, o **tutor de IA** usará a mesma estrutura (seção 10).

### 7.4 Outros recursos modernos (entram onde couberem)
- **Distribuição de Boltzmann animada** (partículas em níveis de energia com slider de temperatura): primeiro uso no módulo 12 ou 11; ataca diretamente a dificuldade "termo-estatística".
- **Orbitais 3D** com nuvem de pontos ou isossuperfície escolhidos pelo aluno (`Orbital3D`, Three.js com *shaders*). No celular: nuvem com menos pontos.
- **Realidade aumentada** (model-viewer): bônus nos módulos com 3D; ótimo para Instagram.

---

## 8. Laboratório virtual: análise dos roteiros de aula prática de referência

Base: roteiros de aula prática de Inorgânica (acervo privado, em `referencias/`), usados **só para escolher os experimentos**. O site não cita a disciplina; cita os procedimentos originais.
Seis experimentos; os procedimentos vêm de artigos publicados (Inorganic Syntheses, JACS, J. Chem. Educ.), que podemos citar.

| Exp. | O que é | Potencial interativo | Módulos ligados | Complexidade |
|---|---|---|---|---|
| **1** | Síntese de [Al(acac)₃] (complexo de elemento não-transição; ajuste de pH com NH₃) | Médio: pH com papel indicador, precipitação, teste de pureza em clorofórmio, cálculo de rendimento. Produto branco (pouca mudança de cor) | 5, 8, 9 | Baixa |
| **2** | Síntese de K₃[Al(C₂O₄)₃]·xH₂O + **titulação permanganométrica** + água de hidratação | **Alto**: titulação simulada gota a gota com ruído de medida (cor rósea persistente no ponto final), padronização com oxalato de sódio, perda de massa em estufa até massa constante | 7, 8, 9 | Média |
| **3** | Crescimento de cristais (sal duplo de Mg/NH₄) + **alúmen de crômio** a partir de K₂Cr₂O₇ + etanol + **tratamento de resíduo de Cr(VI)** + pigmento Cr₂O₃ em cerâmica | **Alto e muito visual**: laranja → verde/violeta, cristais octaédricos crescendo (animação acelerada de uma semana), química verde no tratamento de resíduos | 7, 8, 10, 14 | Média |
| **4** | Precursor Na₃[Co(CO₃)₃]·3H₂O → **[Co(acac)₃]** → **espectroscopia UV-Vis e curva de Lambert–Beer** | **Muito alto**: Co(II) rosa → precursor verde-escuro → produto verde; refluxo montado peça por peça; seis diluições e curva de calibração | 9, 10, 11 + Fase 4 (espectrofotômetro) | Alta (3 aulas) |
| **5** | **Resina de troca iônica**: separação de Ni²⁺ e Co²⁺ em HCl 6 mol L⁻¹ | **Alto e simples**: banda de cor descendo na coluna, coleta de frações, testes com dimetilglioxima (Ni) e tiocianato (Co) | 9, 12 | Baixa |
| **6** | Carboxilatos de Cu(II) (citrato) + água de hidratação + **% de Cu por calcinação** (CuO) | Médio: titulação com fenolftaleína, precipitação, perda de massa na estufa e na mufla | 5, 9, 12 | Média |

**Recomendação:** começar pelo **Experimento 4 ([Co(acac)₃])**. É o que mais conversa com a trilha (coordenação, campo cristalino,
espectroscopia) e alimenta a Fase 4: a curva de calibração é "medida" no espectrofotômetro virtual. Dividido em três estações
(precursor → síntese → espectroscopia), cada uma testável no navegador.
**Alternativa mais rápida:** Experimento 5 (troca iônica): curto, muito visual, ótimo como primeiro protótipo da bancada.
Os Experimentos 2 e 3 entram depois e dão, respectivamente, a **titulação simulada** e a **animação de cristalização**.

**O que a bancada terá (todos os experimentos):** arrastar e soltar vidraria e reagentes; cor e medidas (massa, pH, temperatura,
absorbância) que mudam; **erros possíveis** com consequência (ex.: deixar a temperatura passar do limite, esquecer o banho de gelo,
não deixar a resina coberta de líquido, ultrapassar o ponto final); cálculo de rendimento com os dados "medidos";
tratamento de resíduos como etapa obrigatória.

**Vídeos animados simulando o experimento — é possível, de três formas:**
1. **Modo demonstração dentro do site** (recomendado): a própria bancada se executa sozinha, como um vídeo, mas sem baixar arquivo de vídeo. Leve, acessível e o aluno pode pausar e assumir o controle.
2. **Vídeo gerado a partir do código** (para Instagram/YouTube): gravamos o modo demonstração em MP4/WebM, de graça, com ferramentas automáticas. No site, o vídeo só carrega quando o aluno clica (página continua leve).
3. Vídeo 3D realista (Blender): bonito, mas curva de aprendizado longa. Fora de escopo por enquanto.

⚠️ **Pontos para você conferir/decidir:**
- **Direitos (decidido em 17/11/2026):** a autorização do professor não virá a tempo. Os roteiros servem só como referência de **quais** experimentos fazer; o laboratório é escrito a partir dos **artigos e procedimentos originais** (muitos de livre acesso), citados com link e com palavras próprias, sem mencionar a disciplina.
- **Valores simulados** (rendimento esperado, ε do [Co(acac)₃] em acetona, λ de medida, volumes no ponto final) **não podem ser inventados.** Fontes: literatura que você indicar e **dados reais enviados por estudantes** (proposta abaixo).

**Proposta (17/11/2026, a aprovar): estudantes compartilham seus dados reais.**
- **O que se envia:** só a tabela de dados medidos (massas, rendimento, absorbâncias, volume no ponto final), o experimento e o semestre. **Não** o relatório inteiro: ele costuma conter texto do roteiro da disciplina e dados pessoais.
- **Como, por fase:** até a Fase 7, um **formulário externo gratuito** com link na página do experimento; na Fase 7, envio pelo próprio site com login (já prevista a parte de comunidade e LGPD).
- **Regras:** caixa de consentimento; licença **CC BY 4.0** dos dados; nome opcional (só para quem quer crédito público); nenhum dado sensível. Você revisa cada envio (`revisado`) antes de entrar no site.
- **E se o aluno enviar o relatório inteiro e o site censurar os dados sensíveis? (análise de 17/11/2026)**
  - *O que funciona bem:* achar dados com **padrão fixo** (matrícula, CPF, e-mail, telefone, linhas com "Nota"). Uma busca por padrões (*expressão regular*) faz isso com segurança.
  - *O que falha:* **nomes de pessoas** (aluno, colegas de grupo, professor) não têm padrão; só um modelo de IA tenta achá-los, e ele erra. Também escapam: relatório escaneado ou fotografado (texto vira imagem), assinaturas, cabeçalhos e os **metadados** do arquivo (o PDF/DOCX guarda o nome do autor por dentro).
  - *O problema que a censura não resolve:* o relatório traz **texto do roteiro** (direito autoral, não dado pessoal) e é **obra de todo o grupo** (todos teriam de consentir).
  - *LGPD:* se o arquivo inteiro chega a um servidor antes de ser censurado, o Chem Livre passa a guardar dados pessoais e notas, com toda a responsabilidade legal de quem faz isso. E um erro de censura publicado num repositório público não se desfaz.
  - **Conclusão:** censura automática do relatório inteiro **não é segura o bastante**. Uma taxa de acerto de 95% ainda deixa vazar um nome a cada 20 relatórios.
  - **Alternativa recomendada, "o arquivo nunca sai do seu computador":** o aluno arrasta o relatório na página; o **próprio navegador** lê o arquivo (nada é enviado), procura as tabelas e números e **preenche o formulário de dados**; o aluno confere, corrige, marca o consentimento e **só a tabela é enviada**. Ele tem a comodidade de "mandar o arquivo" sem o risco.
  - *Quando:* na Fase 3, o formulário simples (digitado). A leitura automática do arquivo vem depois (Fase 6 ou 7). Bibliotecas: **pdf.js** (Mozilla, Apache 2.0) para PDF e **mammoth.js** (BSD) para DOCX, carregadas só quando o aluno escolhe um arquivo. Como cada relatório tem um formato, o aluno sempre confere os campos.
  - *Relatório inteiro como exemplo didático* (ex.: "um bom relatório"): só com autorização escrita de **todos** os autores do grupo, revisão manual sua e nunca de forma automática.
- **O que o aluno ganha:** a página do experimento mostra a **distribuição dos rendimentos reais** das turmas ao lado do resultado da simulação. É um recurso didático por si só ("por que o meu rendimento ficou abaixo da média?").
- Pequenas inconsistências no roteiro (para não repetirmos): a referência do Exp. 1 (autores/ano do *Inorganic Syntheses* vol. 2) e a fórmula "Na[Co(CO₃)₃]" no título do Exp. 4 (no texto é Na₃[Co(CO₃)₃]). O item 3.1 do Exp. 3 é um sal duplo de magnésio e amônio, não um alúmen de metal de transição.

---

## 9. Identidade visual (recebida em 13/11/2026)

Arquivo de referência: "7 · Escolha final — claro e escuro" (mockup). Será transformado em **tokens de design** (variáveis CSS) na Fase 1.

| Token | Claro | Escuro |
|---|---|---|
| fundo | `#F6F7F9` | `#0E1116` |
| superfície (cards) | `#FFFFFF` | `#171B22` |
| borda | `#E3E6EB` | `#2A303A` |
| texto | `#0E1116` | `#F2F4F7` |
| texto secundário | `#4A5260` | `#A3ACBA` |
| destaque (botão principal) | `#1F5FD1` | `#7DAAF5` |

**Famílias de cor** (selo do módulo; contraste já verificado por você no mockup):
Estrutura (azul), Ácidos e bases (verde), Sólidos (amarelo), Redox (roxo), Coordenação (rosa).

**Tipografia:** Geist Serif (títulos), Hubot Sans (texto), Geist Mono (dados e fórmulas em bloco). Os arquivos serão hospedados no próprio site (sem Google Fonts, mais rápido e sem rastreamento).
**Símbolo:** arco azul + ponto (SVG, já pronto para claro e escuro). Formas: cards com raio 20 px, botões em pílula.

⚠️ **Pontos para você decidir:**
- **Família de cor nova "Elementos"** (módulos 8, 14 e 15): **aprovada em 17/11/2026: opção A, laranja do dicromato.** Cada família da marca vem de uma espécie colorida real
  (Redox = permanganato, Coordenação = cobalto, Sólidos = cromato, Ácidos e bases = níquel), e a proposta segue a mesma regra:

  | Opção | Espécie de referência | Claro (cor / suave) | Escuro (cor / suave) | Contraste do par (claro / escuro) |
  |---|---|---|---|---|
  | **A (aprovada) laranja** | dicromato, Cr₂O₇²⁻ (par com o cromato dos Sólidos: o equilíbrio cromato ⇌ dicromato) | `#A3440B` / `#FDEEE4` | `#F5A26E` / `#3A2213` | 5,5:1 / 7,2:1 |
  | B ciano | hexaaquacobre(II), [Cu(H₂O)₆]²⁺ | `#0A6B76` / `#E2F3F5` | `#6CCFDA` / `#0F2F35` | 5,4:1 / 7,8:1 |

  Por que A: o laranja é a cor mais distante de todas as existentes (o ciano fica entre o azul da Estrutura e o verde dos Ácidos e
  pode ser confundido com eles no modo escuro). As duas passam de 4,5:1 sobre o par, a superfície e o fundo, nos dois modos (medido
  com a fórmula da WCAG 2.1). A cor de referência é qualitativa (cor observada da espécie); confira se concorda com a associação.
- **Módulo 16 (Bioinorgânica): fica em Coordenação (rosa)** (aprovado com a família Elementos, 17/11/2026). A hemoglobina, a clorofila e os sítios de cobre são
  compostos de coordenação. Um vermelho "heme" ficaria perto demais do rosa e do laranja, e o vermelho fica reservado para o
  aviso de "resposta incorreta" das questões.
- O mockup mostra "Módulo 8 · Coordenação · Teoria do campo cristalino"; na nova ordem esse é o **Módulo 10**.
- O exemplo "[Co(NH₃)₆]³⁺ · Δo ≈ 22 900 cm⁻¹" precisa de fonte se for para o site (confira na tabela de Δo do Shriver & Atkins ou do Lever).
- **Licença das fontes** (verificada em 13/11/2026 nos metadados dos arquivos): Geist Serif e Geist Mono são **SIL OFL 1.1** (Vercel). A Hubot Sans não traz a licença dentro do arquivo; conferir o LICENSE do repositório oficial do GitHub antes de publicar. A OFL exige incluir o texto da licença junto com as fontes.
- **Peso:** a Hubot Sans tem cerca de 166 KB. Na Fase 1 vamos recortá-la só para os caracteres do português (técnica *subsetting*), para não pesar na internet fraca.

---

## 10. Fora de escopo por enquanto (mas com a estrutura preparada)

- **Progresso estilo Duolingo** (mapa da trilha, XP, sequência de dias, repetição espaçada das questões erradas): vai para a **última fase, junto com o login**. Desde já, toda página que precisar registrar algo passará por `src/lib/progresso.ts`, que por enquanto não guarda nada de fato. Quando chegar a hora, só esse arquivo muda.
- **Tutor de IA** (exige servidor e tem custo): as questões já nascem com `dicas` em passos, e haverá um `src/lib/tutor.ts` que hoje só mostra as suas dicas, na ordem. No futuro, ele pode passar a consultar uma IA sem mudar as páginas.

---

## 11. Roteiro de fases atualizado

| Fase | Conteúdo | Algo testável ao final |
|---|---|---|
| 0 | Planejamento + revisão (identidade visual, trilha com 16 módulos, este plano, roteiros de referência) | Documentos aprovados |
| 1 | Esqueleto: Astro + framework das ilhas, tokens claro/escuro, fontes, página inicial, menu, página da trilha com os 16 módulos, layout de módulo, deploy | Site no ar com tema claro/escuro |
| 2 | Primeiro módulo completo (**VSEPR**): texto, **Montador de geometria**, `Molecula3D`, motor de questões (4 tipos), 5 questões comentadas | Módulo modelo funcionando no celular e no computador |
| 3 | Laboratório virtual: 1º experimento dos roteiros de referência + modo demonstração | Bancada jogável |
| 4 | Equipamento por dentro: espectrofotômetro UV-Vis (ligado à curva do laboratório) | Página com rolagem animada |
| 5 | Demais módulos, **um por vez**, na ordem da trilha (cada um é uma subfase: 5.1, 5.2…) | Um módulo novo a cada subfase |
| 6 | Revisão: celular, acessibilidade, opinião de alunos, guia "como criar uma nova área" | Relatório de revisão |
| 7 | Comunidade, login e **progresso** (mapa, XP, sequência, repetição espaçada); comparar Supabase, Giscus e fórum externo; termos e LGPD | Conta de aluno com progresso salvo |
| Futuro | Tutor de IA, newsletter, cursos, painel administrativo | — |

---

## 12. Decisões aprovadas (13/11/2026)

- [x] Nova ordem da trilha com 16 módulos (seção 4)
- [x] Recursos âncora dos módulos 1 a 7, 9 a 12 e 15 (os que você definiu, com os ajustes de rigor)
- [x] Minhas propostas de âncora para os módulos novos: 8 (matriz de reatividade), 13 (jogo do efeito trans), 14 (ciclo catalítico com contador), 16 (hemoglobina)
- [x] Módulo 1: usar raio **covalente** na tabela viva
- [x] Módulo 2: polarizabilidade **qualitativa** no VSEPR (tamanho da nuvem), aprofundada no módulo 5 (HSAB)
- [x] Módulo 4: trocar "ferromagnético" por "para/diamagnético" no diagrama de OM (ferromagnetismo vai para 6 e 11)
- [x] Módulo 10: cor do slider como "modelo d¹", com o cálculo completo no módulo 11
- [x] Framework das ilhas: **Svelte + Threlte**
- [x] Plotly fora do padrão (gráficos em SVG próprio)
- [x] Primeiro laboratório: **Exp. 4 [Co(acac)₃]**
- [x] ~~Pedir autorização para creditar a disciplina~~ → decidido em 17/11/2026: roteiros só como referência; citar apenas os procedimentos originais
- [ ] **(nova, 17/11)** Estudantes compartilham dados reais: formulário externo até a Fase 7, depois envio pelo site (seção 8)
- [x] **(17/11)** Família "Elementos" = laranja dicromato (opção A) e módulo 16 em Coordenação (seção 9)
- [x] Roteiro de fases atualizado (seção 11)
