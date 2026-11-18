# Glossário — conceitos de programação do projeto

> Cada termo novo que aparecer no projeto entra aqui, com uma analogia.
> Use este arquivo como consulta rápida.

## Fase 0

**Git**
Programa que guarda o histórico de todas as versões dos arquivos do projeto.
*Analogia:* um caderno de laboratório em que cada página registra o que mudou, quando e por quê.
Dá para voltar a qualquer página anterior.

**Repositório (repo)**
A pasta do projeto acompanhada pelo Git, com todo o histórico guardado numa subpasta oculta `.git/`.
*Analogia:* o armário do laboratório com o caderno e todas as amostras catalogadas.

**Commit**
Uma "fotografia" registrada do projeto num momento, com uma mensagem explicando a mudança.
*Analogia:* uma entrada datada e assinada no caderno de laboratório ("adicionei 5 mL de HCl 0,1 mol L⁻¹").

**Staging (`git add`)**
A etapa de escolher quais mudanças entram no próximo commit.
*Analogia:* separar na bancada as amostras que vão para a análise antes de registrá-las no caderno.

**`.gitignore`**
Arquivo com a lista do que o Git deve ignorar (nunca guardar nem enviar).
*Analogia:* a etiqueta "NÃO RETIRAR DO LABORATÓRIO" em reagentes controlados. No nosso caso, a pasta `referencias/`.

**Branch (ramo)**
Uma linha paralela de trabalho. A principal se chama `main`.
*Analogia:* testar uma nova rota de síntese num balão separado, sem estragar a reação principal;
se der certo, você junta (*merge*) ao processo principal.

**Remoto (remote) / GitHub**
Uma cópia do repositório guardada na internet. O GitHub é o serviço que hospeda essa cópia; `origin` é o apelido dela.
*Analogia:* o arquivo central do departamento, onde fica a cópia oficial do caderno.

**Push / Pull**
`push` envia seus commits para o GitHub; `pull` traz para o seu Mac o que mudou lá.
*Analogia:* entregar e retirar páginas no arquivo central.

**Terminal**
Janela onde você digita comandos de texto para o computador.
*Analogia:* falar diretamente com o técnico do laboratório em vez de apertar botões no painel do equipamento.

**Gerador de site estático (Astro)**
Programa que transforma arquivos de texto (Markdown) e moldes de página em um site pronto (HTML),
antes de publicar. O site final não precisa de servidor ligado calculando nada.
*Analogia:* uma gráfica que recebe seu texto e um modelo de diagramação e entrega a apostila impressa.
O leitor só lê o resultado.

**Markdown**
Formato de texto simples com marcações leves (`# Título`, `**negrito**`, `- item`).
*Analogia:* a "taquigrafia" da formatação: você escreve rápido e o computador diagrama.

**JSON**
Formato de texto para dados estruturados (chave: valor). Vamos usá-lo para as questões.
*Analogia:* uma ficha de cadastro padronizada, com os mesmos campos preenchidos em cada ficha.

**Licença (MIT / CC BY 4.0)**
Documento que diz o que os outros podem fazer com seu trabalho. MIT vale para o código; CC BY 4.0 para o conteúdo
(qualquer um pode usar e adaptar, desde que dê o crédito).
*Analogia:* as regras de uso de um equipamento compartilhado ("use à vontade, mas registre no livro").

## Fase 0 — revisão (13/11/2026)

**Componente**
Peça de página reutilizável, que recebe parâmetros (chamados *props*). Ex.: `<Molecula3D arquivo="SF4" />`.
*Analogia:* uma função em Python: você escreve uma vez e chama com argumentos diferentes.

**MDX**
Markdown que aceita componentes no meio do texto.
*Analogia:* uma apostila em que, no meio do parágrafo, você cola um modelo molecular de verdade.

**Ilha (Astro) e `client:visible`**
Parte interativa de uma página estática. Com `client:visible`, o JavaScript dela só é baixado quando ela aparece na tela.
*Analogia:* a capela do laboratório só liga a exaustão quando alguém abre a janela dela, não o dia inteiro.

**Framework de componentes (Svelte, React)**
"Linguagem" para escrever componentes interativos. Escolheremos só um para o projeto inteiro.
*Analogia:* o padrão de juntas esmerilhadas da vidraria: qualquer um funciona, mas misturar padrões complica a montagem.

**SVG**
Formato de imagem feita de formas descritas em texto (linhas, círculos), que não perde qualidade ao ampliar
e pode reagir a cliques. Base dos nossos diagramas.
*Analogia:* um desenho técnico com régua e compasso, em vez de uma foto.

**WebGL / Three.js**
WebGL é o recurso do navegador para desenhar 3D usando a placa de vídeo; Three.js é a biblioteca que facilita usá-lo.
*Analogia:* WebGL é o espectrofotômetro "cru"; Three.js é o software que vem com ele e já traz os botões prontos.

**Versão simplificada (*fallback*)**
Alternativa mais leve exibida quando o aparelho não aguenta o recurso completo.
*Analogia:* quando falta o espectrofotômetro, você usa a escala de cor visual: menos precisa, mas funciona.

**Tokens de design**
Nomes para as cores, tamanhos e fontes da marca (ex.: `--cor-destaque`). Trocar o modo claro pelo escuro é trocar os valores dos tokens.
*Analogia:* rótulos padronizados das soluções estoque: a receita usa "solução A", e você decide o que há no frasco.

**Proveniência de dados**
Registro de onde veio cada número (referência, DOI) e se já foi revisado.
*Analogia:* a etiqueta da amostra com origem, data e responsável.

**Subsetting de fonte**
Recortar o arquivo de uma fonte tipográfica para levar só os caracteres usados (português), deixando-o mais leve.
*Analogia:* levar para a aula prática só os reagentes do roteiro, não o almoxarifado inteiro.

**Expressão regular (*regex*)**
Um "molde" de texto que o computador usa para achar padrões, como "8 dígitos seguidos" (matrícula) ou "algo@algo.com" (e-mail).
*Analogia:* um teste de identificação de íons: reconhece com segurança o que tem reação característica, mas não identifica
o que não tem (nomes de pessoas não têm "reação característica").

**Processamento no navegador (*client-side*)**
Quando o próprio computador ou celular do aluno faz o trabalho e nada é enviado pela internet.
*Analogia:* fazer a análise na própria bancada em vez de mandar a amostra para um laboratório externo: a amostra nunca sai da sua mão.

**Metadados**
Informações escondidas dentro de um arquivo: autor, data de criação, programa usado. Não aparecem na página, mas vão junto com ele.
*Analogia:* a etiqueta colada no fundo do frasco: você não vê de frente, mas quem pegar o frasco lê.

**npm e dependências**
O npm baixa as bibliotecas que o projeto usa (as *dependências*) para a pasta `node_modules/`. A lista fica no
`package.json`, e as versões exatas no `package-lock.json`.
*Analogia:* o `package.json` é a lista de reagentes do roteiro; o `package-lock.json` anota o lote e o fabricante
de cada um, para que o experimento dê o mesmo resultado em qualquer laboratório.

**Construção (*build*)**
O momento em que o Astro transforma textos e componentes em páginas HTML prontas, na pasta `dist/`.
*Analogia:* a síntese: dos reagentes (arquivos-fonte) sai o produto (o site), que é o que vai para o "frasco" público.

**Servidor de desenvolvimento (`npm run dev`)**
Uma versão do site que roda só no seu computador e se atualiza a cada mudança que você salva.
*Analogia:* a bancada de testes, antes de levar o resultado para a apresentação.

**Coleção de conteúdo e esquema**
Uma *coleção* é um grupo de arquivos do mesmo tipo (os 16 módulos). O *esquema* (`src/content.config.ts`) diz quais
campos cada arquivo precisa ter; se faltar um, a construção para e aponta o erro.
*Analogia:* o formulário padrão do caderno de laboratório: sem data, massa ou responsável, o registro não é aceito.

**GitHub Actions**
Robôs do GitHub que executam tarefas sozinhos quando algo acontece no repositório. O nosso constrói e publica o site
a cada envio (`push`).
*Analogia:* o técnico do laboratório que, toda vez que chega uma amostra, já faz a análise de rotina.

**Overrides (npm)**
Uma regra no `package.json` que obriga todas as bibliotecas a usarem a mesma versão de uma dependência. Usamos para
haver um só KaTeX no projeto.
*Analogia:* padronizar uma solução estoque para todo o laboratório, em vez de cada bancada preparar a sua.
