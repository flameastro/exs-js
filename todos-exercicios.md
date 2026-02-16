Imprima "Olá, mundo!" no console.
Declare duas variáveis `a` e `b` e imprima a soma.
Escreva uma função `parOuImpar(n)` que retorna "par" ou "ímpar".
Crie uma função `fatorial(n)` que retorna o fatorial de `n` (iterativo).
Encontre o maior entre três números.
Converta uma string para maiúsculas e minúsculas.
Conte quantas vogais existem em uma string.
Inverta uma string.
Verifique se uma string é palíndromo (ignorar espaços e case).
Remova espaços extras de uma string (trim e reduzir múltiplos espaços).
Substitua todas as ocorrências de uma palavra por outra em uma string.
Concatene duas arrays e mostre o resultado.
Dado um array de números, calcule a média.
Escreva uma função que retorne o array sem duplicatas.
Ordene um array de números em ordem crescente (use `sort` corretamente).
Faça um `map` que transforma um array de strings em comprimentos.
Filtre somente números pares de um array.
Use `reduce` para somar todos os elementos de um array.
Crie uma função que gera um array com os N primeiros números pares.
Gere um número aleatório entre 1 e 100.
Formate a data atual como `YYYY-MM-DD HH:mm:ss`.
Leia o `process.argv` e imprima-os um por linha.
Crie uma função `clamp(x, min, max)` que limita `x` a `[min,max]`.
Conta quantas palavras tem uma string.
Modele um objeto `pessoa` com `{nome, idade}`, e imprima uma frase.
Faça uma cópia rasa (`shallow copy`) de um objeto.
Mescle dois objetos em um novo objeto.
Verifique se um objeto está vazio.
Liste as chaves e valores de um objeto.
Construa uma função que receba objetos e retorne apenas os pares chave-valor com valores string.
Crie uma função `range(start, end)` que retorna um array com os números nesse intervalo.
Implemente o operador ternário em uma função que retorna desconto dependendo da idade.
Use `setTimeout` para imprimir uma mensagem após 2 segundos.
Use `setInterval` para imprimir um contador a cada segundo e pare após 5 segundos.
Explique e demonstre `let`, `const` e `var` com exemplos.
Demonstre block scope com `let`.
Crie uma função que retorna outra função (closure) que soma um valor fixo.
Demonstre o uso de template literals para montar uma frase.
Crie um objeto com método que usa `this` para acessar propriedades.
Mostre exemplo de `.bind()` para fixar `this`.
Crie uma classe `Pessoa` com `constructor(nome, idade)` e método `aniversario()` que incrementa `idade`.
Herança: classe `Aluno` estende `Pessoa` e adiciona `curso`.
Crie um módulo simples (arquivo) que exporta uma função e consuma-o em outro arquivo.
Use `try/catch` para tratar erro ao converter JSON inválido.
Leia um arquivo `entrada.txt` sincronicamente e imprima seu conteúdo (módulo `fs`).
Grave uma string num arquivo `saida.txt` sincronicamente.
Faça a mesma leitura/gravação usando métodos assíncronos com callbacks.
Use `fs.promises` e `async/await` para ler um arquivo.
Crie um script que conte linhas de um arquivo passado por `argv`.
Crie um pequeno CLI que recebe `--nome` e `--idade` e imprime uma mensagem.
Parseie JSON de `process.stdin` e mostre uma propriedade específica.
Crie uma função `randomChoice(array)` que retorna item aleatório.
Faça um programa que inverte a ordem das linhas de um arquivo.
Use `path` para juntar diretórios de forma cross-platform.
Explique e demonstre `typeof` e `instanceof`.
Implemente uma função que valida se um valor é número finito.
Crie um programa que mede o tempo de execução de uma função (usando `console.time`).
Faça um gerador de senha simples com letras e números.
Conte caracteres únicos em uma string.
Converta um número decimal para binário (string).
Converta um número binário (string) para decimal.
Implemente `isAnagram(a,b)` que verifica se duas strings são anagramas.
Substitua vogais por `*` em uma string.
Crie `capitalizeWords(str)` que capitaliza cada palavra.
Crie um gerador de números primos até N (crivo simples).
Implemente uma função que calcula MDC (algoritmo de Euclides).
Implemente uma função que calcula MMC.
Valide um CPF (apenas formato e dígitos — simplificado) — ou substitua por outro documento local.
Gere a tabuada de um número até 10 e imprima formatado.
Faça um script que substitui tabs por 4 espaços em um arquivo.
Crie uma função `flatten` que achata um array 2D em 1D.
Escreva `uniqueSorted` que retorna valores únicos ordenados.
Crie função `sleep(ms)` usando `Promise` e `setTimeout`.
Demonstre `Promise.resolve` e `Promise.reject` com exemplos.
Reescreva uma função callback-based para `async/await`.
Crie um pequeno script que conta arquivos em uma pasta (fs.readdir).
Implemente `deepClone` simples (para objetos sem funções nem ciclos).

---

## Seção B — Intermediário (81–170)

81. (I) Escreva uma função `debounce(fn, ms)` e explique seu uso.
82. (I) Escreva uma função `throttle(fn, ms)`.
83. (I) Implemente `memoize(fn)` para funções puras.
84. (I) Faça uma função `compose(f,g)` que compõe duas funções.
85. (I) Crie um pequeno REPL que aceita comandos e responde (use `readline`).
86. (I) Escreva um programa que busca por uma palavra em vários arquivos (grep simples).
87. (I) Valide um e-mail com RegExp (básico, não perfeito).
88. (I) Valide um número de telefone no formato internacional.
89. (I) Parseie CSV simples e converta para JSON (suportar aspas simples e vírgulas).
90. (I) Converta JSON para CSV.
91. (I) Escreva um algoritmo de busca binária para arrays ordenados.
92. (I) Implemente ordenação merge sort.
93. (I) Implemente quicksort (in-place ou não).
94. (I) Encontre o k-ésimo menor elemento em um array.
95. (I) Resolva o problema da soma de dois números que dão target (Hash map).
96. (I) Encontre o subarray de soma máxima (Kadane).
97. (I) Detecte ciclos em uma lista ligada (implementar lista ligada simples).
98. (I) Implemente pilha (`Stack`) e fila (`Queue`) e demonstre usos.
99. (I) Faça `LRU Cache` simples usando Map e lista duplamente ligada (simples).
100. (I) Crie um parser simples de expressões aritméticas (somar, subtrair, multiplicar, dividir).
101. (I) Interprete e execute expressões com parênteses.
102. (I) Implemente um pequeno template engine que substitui `{{chave}}` em texto.
103. (I) Crie um programa que monitora mudanças em um diretório (`fs.watch`) e loga eventos.
104. (I) Faça um script que compacta arquivos em `.zip` (usar `zlib` e `fs` ou biblioteca nativa se disponível).
105. (I) Trabalhe com Buffers: concatene buffers e converta para string e vice-versa.
106. (I) Codifique/decodifique base64 manualmente (usar `Buffer` para checar).
107. (I) Crie um pequeno CLI que aceita comandos interativos e usa subcomandos (ex: `app add`, `app list`).
108. (I) Implemente leitura de um arquivo grande por streams e conte linhas sem carregar tudo na memória.
109. (I) Faça escrita por stream para um arquivo grande.
110. (I) Use events: crie um `EventEmitter` customizado que emite eventos e listeners.
111. (I) Crie um script que faz requisições HTTP GET (use `https`/`http` do Node) e imprime status e headers.
112. (I) Faça requisição HTTPS e baixe um recurso para disco.
113. (I) Parseie query string (sem usar `querystring`), transforme em objeto.
114. (I) Crie um cliente TCP simples usando `net` que se conecta a um servidor de eco.
115. (I) Crie um servidor TCP de eco que devolve dados recebidos.
116. (I) Implemente uma fila de tarefas simples com concorrência limitada (pool de workers em JS).
117. (I) Fazer retry com backoff exponencial para uma função assíncrona.
118. (I) Implemente `promisify` (converter função callback style para Promise).
119. (I) Testes unitários: escreva testes simples usando `assert` nativo (sem frameworks).
120. (I) Use `child_process.spawn` para executar `ls`/`dir` e leia `stdout`/`stderr`.
121. (I) Crie um script que zera/rota logs antigos (rotação simples por tamanho).
122. (I) Serialização: converta objetos com referências para JSON seguro (detectar ciclos).
123. (I) Escreva uma função `groupBy(array, keyFn)`.
124. (I) Implemente `binaryTree` e percorra em ordem (in-order), pré e pós.
125. (I) Resolva problema de permutações de uma string (todas as permutações).
126. (I) Gere combinações (`n choose k`) e suas aplicações.
127. (I) Resolva o problema das oito rainhas (backtracking).
128. (I) Faça um solver para Sudoku (backtracking).
129. (I) Implemente algoritmo para detecção de anagramas em grande texto (stream).
130. (I) Crie uma CLI que exporta dados para `.json` e `.csv` conforme flag.
131. (I) Escreva uma implementação de `EventEmitter` mínima do zero.
132. (I) Faça um profiler simples que mede tempo gasto por funções assíncronas (instrumentação).
133. (I) Implemente um sistema de logging com níveis (info, warn, error) e rotação.
134. (I) Crie um gerador de thumbnails para imagens usando `sharp` (opcional lib) — alternativa: descrever o fluxo sem lib.
135. (I) Faça um script que assina dados com HMAC (módulo `crypto`).
136. (I) Verifique assinaturas HMAC e detecte alterações.
137. (I) Gere e verifique UUIDs (use `crypto.randomUUID()` quando disponível).
138. (I) Crie um script que calcula hash de arquivos (`sha256`) e compara.
139. (I) Escreva um conversor entre linhas CRLF e LF para arquivos.
140. (I) Faça um utilitário que extrai metadados básicos de imagens (dimensionamento) — sem DOM: ler header do arquivo (ex.: PNG/JPEG).
141. (I) Simule um trânsito de mensagens com `setImmediate`, `process.nextTick` e `setTimeout` para demonstrar ordem de execução.
142. (I) Crie uma função que valida um JSON contra um esquema simples (regras básicas: required e tipo).
143. (I) Implemente `flattenDeep` para arrays com profundidade arbitrária.
144. (I) Resolva o problema do anel Josephus.
145. (I) Implemente algoritmo de Dijkstra para grafos dirigidos (representação por lista de adjacência).
146. (I) Use `Map` e `Set` e explique diferenças com objetos/arrays.
147. (I) Crie um visualizador de árvore de diretórios em texto (como `tree`).
148. (I) Faça um conversor de unidades (km/miles, Celsius/Fahrenheit) com CLI e flags.
149. (I) Implemente um mini banco de dados em memória com operações CRUD.
150. (I) Crie um script para detectar duplicatas em uma pasta por hash de arquivo.
151. (I) Implemente algoritmo Union-Find (disjoint set) com path compression.
152. (I) Resolva o problema do subset sum (backtracking/dp) e discuta complexidade.
153. (I) Implemente busca A* para um grid simples (heurística Manhattan).
154. (I) Escreva um cliente SMTP mínimo para enviar um e-mail simples (usar `net` ou biblioteca).
155. (I) Implemente um sistema de cache em arquivo com TTL.
156. (I) Escreva um programa que gera dados falsos (fake data) para testes (nomes, emails).
157. (I) Faça uma CLI que gera senhas seguras com opções (comprimento, incluir símbolos).
158. (I) Escreva um parser de logs (`access.log`) e compute estatísticas (hits por IP, endpoints mais acessados).
159. (I) Implemente serialização binária simples para um objeto (definir estrutura e pack/unpack usando Buffer).
160. (I) Crie uma função que calcula similaridade entre strings (Levenshtein distance).
161. (I) Implemente compressão RLE (run-length encoding) e descompressão.
162. (I) Faça um script que monitora uso de CPU/memória (usar `os` module) e registra em arquivo.
## Continuação — exercícios 163–250

163. (I) Construa um CLI que consulta um serviço online (usar https) e cacheie respostas por X minutos.
164. (I) Implemente um worker pool que processa arquivos em paralelo respeitando limite de concorrência.
165. (I) Crie um conversor de markdown para texto simples (strip tags markdown básicas).
166. (I) Implemente throttle para leitura de stdin (limitando taxa de bytes processados).
167. (I) Escreva uma função que agrupa palavras por raiz (stem) simples — heurística.
168. (I) Implemente `peekable` iterator (able to peek next without consuming).
169. (I) Crie uma CLI para interagir com um JSON que atua como DB e permita operações (list, add, remove).
170. (I) Faça um script que sincroniza duas pastas (copia arquivos novos/atuais) — versão simples.

---

## Seção C — Avançado (171–250)

171. (A) Implemente promessas canceláveis (patterns para cancelar operações assíncronas).
172. (A) Crie um mini task runner que executa tarefas com dependências (topological sort).
173. (A) Escreva um transpiler simples que converte `let/const` em `var` (exercício teórico — manipulação de strings/AST mínima).
174. (A) Implemente um interpretador para uma linguagem simples (tiny-VM) com operações aritméticas e variáveis.
175. (A) Construa um compilador que gera bytecode simples e um executor (simples VM stack-based).
176. (A) Implemente `WebSocket` server (usando `ws` lib) e cliente CLI que comunica mensagens (apenas Node).
177. (A) Crie um sistema de publish/subscribe distribuído simples usando TCP/UDP (conceitual e implementação básica).
178. (A) Implemente replicação simples entre dois arquivos JSON (sincronização de mudanças, resolução básica de conflitos).
179. (A) Escreva um gerenciador de dependências minimal (resolver versões sem publicar) — simular resolução sem rede.
180. (A) Construa um analisador estático simples que detecta possíveis variáveis não usadas em um arquivo JS (heurístico sem AST completo é aceitável).
181. (A) Implemente um coletor simples de métricas que expõe um endpoint HTTP com estatísticas em formato Prometheus.
182. (A) Faça um balanceador de carga simples que distribui requisições HTTP para múltiplos backends (round-robin) — usando `http` e `http.request`.
183. (A) Implemente checkpoints e restauração para um processo que processa uma fila (persistir posição e retomar).
184. (A) Crie um sistema de autorização simples baseado em tokens JWT (geração e verificação, sem usar bibliotecas externas para a parte didática — pode usar `crypto` para HMAC).
185. (A) Implemente um mini container runner: isolar execução de comandos em processo filho com limites de tempo e output (simples, sem namespaces).
186. (A) Desenvolva um analisador de dependências de um projeto Node (ler package.json e listar dependências recursivamente) — sem instalar.
187. (A) Escreva um motor mínimo de templates com suporte a loops e condicionais (ex.: `{{#each items}}...{{/each}}`).
188. (A) Implemente um indexador simples de arquivos que constrói um índice invertido e permite busca por palavra (mini search).
189. (A) Crie uma CLI que executa migrações em um arquivo JSON (migrar schema entre versões com up/down).
190. (A) Implemente sincronização de tempo via NTP simplificado (consultar servidor e ajustar offset — apenas leitura/estimativa).
191. (A) Desenvolva um gerador de código que cria stubs de funções a partir de uma interface JSON (nome, parâmetros, docs).
192. (A) Implemente um sistema de plugins para uma CLI (descobrir e carregar módulos locais dinamicamente).
193. (A) Crie um parser de expressões regulares simplificado (interprete `a|b`, concatenação, `*`), construa NFA e teste.
194. (A) Implemente um servidor de arquivos P2P básico usando `net` (peers que pedem/servem chunks de arquivos simples).
195. (A) Desenvolva um sistema de fila persistente com ack/nack (salvar mensagens em disco e reenfileirar quando necessário).
196. (A) Implemente um algoritmo de compressão baseado em Huffman (encoding/decoding) e compare tamanhos.
197. (A) Crie um mini motor de regras (rule engine) que aplica regras declarativas sobre objetos JSON.
198. (A) Faça um compilador que transforma uma DSL de cálculos em JavaScript executável (ex.: `sum(a,b) -> a + b`).
199. (A) Implemente detecção de plágio simples entre textos (shingling + Jaccard similarity).
200. (A) Construa um micro serviço que executa tarefas em background e fornece API para consulta de status (usar `child_process` ou `worker_threads`).
201. (A) Implemente `MapReduce` local: dividir dataset em pedaços, map, shuffle e reduce em paralelo (simular com processos/threads).
202. (A) Crie uma implementação do protocolo RAFT simplificada para eleição de líder entre instâncias (apenas simulação local entre processos).
203. (A) Desenvolva um analisador de pacotes PCAP mínimo (ler formato pcap e extrair cabeçalhos IP/TCP) — leitura binária.
204. (A) Implemente um resolvedor DNS simples (consulta a servidores DNS via UDP e parse de resposta).
205. (A) Construa um motor de tarefas programáveis (workflow) com passos dependentes e rollback básico.
206. (A) Escreva um sistema de controle de versão minimal (init, add, commit, log) para arquivos em uma pasta (armazenar metadados em .miniVC).
207. (A) Implemente um compilador que gera WebAssembly text (wat) a partir de expressões aritméticas simples (opcional — teoria e geração de texto).
208. (A) Crie uma ferramenta de análise de performance que injeta timers em funções de um módulo e gera relatório de hot-spots.
209. (A) Desenvolva um sistema de scripting embutido (embed a JS sandbox) para executar scripts de usuário com limites (tempo e memória estimada).
210. (A) Implemente um mecanismo de diff/patch textual e aplique patches entre duas versões de arquivo.
211. (A) Construa uma aplicação que resolve CAPTCHAs simples (teste educacional com imagens geradas internamente) — focar reconhecimento básico de padrões.
212. (A) Faça um analisador de dependências circulares em um projeto (detectar ciclos entre módulos require/import).
213. (A) Implemente um otimizador de pacotes estático que identifica módulos não utilizados para remoção (tree shaking heurístico).
214. (A) Crie um transpiler que converte uma subset de ES2020 para ES5 (por exemplo, transforma arrow functions e `const/let`).
215. (A) Construa um engine de regras para firewall simples (filtrar conexões por IP/porta e registrar eventos).
216. (A) Desenvolva um mini mecanismo de busca full-text com score TF-IDF básico sobre um conjunto de documentos locais.
217. (A) Implemente um sistema de replicate-on-write para arquivos grandes (criar cópias delta quando modificado).
218. (A) Crie um verificador de segurança de dependências que detecta versões vulneráveis (usar um banco de dados estático de exemplo).
219. (A) Desenvolva um fuzzer simples para funções que recebem strings (gerar entradas aleatórias e detectar crashes/exceptions).
220. (A) Implemente um scheduler de tarefas cron-like que executa comandos em horários especificados e registra histórico.
221. (A) Construa um analisador de linguagem natural simples que extrai intents e entidades de frases (heurísticas, sem ML obrigatório).
222. (A) Implemente um mecanismo de replicação eventual para pares chave-valor entre dois processos (simples, reconciliar por timestamp).
223. (A) Crie um analisador semântico mínimo que verifica tipos básicos em um subset de JavaScript (inferência simples).
224. (A) Desenvolva uma versão simplificada de `grep` que suporta regex e busca recursiva em pastas com progress bar.
225. (A) Escreva um otimizador que extrai constantes em tempo de compilação (constant folding) para expressões simples.
226. (A) Implemente um sistema de autorização RBAC simples com roles, permissões e checagens em CLI.
227. (A) Crie um motor de simulação física básico para partículas em 2D (integrador simples e colisões elásticas) e exponha resultados em CSV.
228. (A) Desenvolva um analisador de logs distribuídos que correlaciona eventos por trace-id (simular múltiplos arquivos e agregação).
229. (A) Implemente um algoritmo de criptografia simétrica educacional (ex.: AES-like toy cipher) e documente fraquezas.
230. (A) Construa um servidor de autenticação OAuth2 mínimo (grant type password/refresh token) para fins educacionais.
231. (A) Desenvolva um mecanismo de versionamento de schema para JSON com aplicação automática de migrações.
232. (A) Implemente um gerador de documentação automática que lê comentários JSDoc e gera Markdown.
233. (A) Crie um sistema de replicação de arquivos com deduplicação por chunk hashing.
234. (A) Desenvolva um verificador de integridade de backups que valida snapshots por hashes e metadata.
235. (A) Implemente um mini mecanismo de busca semântica usando embeddings simples (ex.: bag-of-words ponderado) e ranking.
236. (A) Construa uma ferramenta para comparar dois bancos de dados JSON e gerar script de sincronização (diff-to-migrations).
237. (A) Implemente uma pipeline de processamento de dados com etapas configuráveis (extract, transform, load) e monitoramento.
238. (A) Crie um analisador de binários PE/ELF simples que extrai cabeçalhos e seções (leitura binária).
239. (A) Desenvolva um sistema de alertas que dispara ações (scripts) quando métricas cruzam thresholds.
240. (A) Implemente um gerenciador de sessões distribuído que armazena sessões em arquivo com sincronização eventual.
241. (A) Construa um motor de busca que suporta consultas booleanas (AND, OR, NOT) e ranking simples.
242. (A) Desenvolva um sistema de autorização baseado em políticas (policy engine) com linguagem declarativa mínima.
243. (A) Implemente monitoramento de integridade de processos: supervisionar, reiniciar e reportar falhas.
244. (A) Crie um otimizador de imagens simples que reduz qualidade e tamanho sem bibliotecas externas (trabalhar sobre BMP/PPM simples).
245. (A) Desenvolva uma ferramenta de migração que converte dados CSV para um formato otimizado binário próprio e roda operações de qu





Aqui está um plano de 250 exercícios de JavaScript focados apenas em lógica e execução no modo “head‑less” (Node.js ou console), sem nenhum código HTML/CSS.

Dividi os exercícios em blocos temáticos para que você possa avançar progressivamente, reforçando conceitos fundamentais antes de passar para desafios mais avançados. Cada bloco contém o número de exercícios sugeridos, uma breve descrição do objetivo e, quando útil, um ponto de partida (esqueleto de código) que você pode copiar e colar no seu editor.

📚 Estrutura dos Blocos
Bloco	Tema	Nº de Exercícios	Principais Conceitos
1	Fundamentos da Sintaxe	20	Variáveis (let, const), tipos primitivos, operadores aritméticos e lógicos, template strings
2	Controle de Fluxo	30	if/else, operador ternário, switch, loops (for, while, do…while)
3	Funções	35	Declaração vs expressão, parâmetros padrão, retorno múltiplo (objetos/arrays), funções de ordem superior, closures
4	Arrays	40	Criação, métodos (push, pop, shift, unshift, splice, slice), iteração (forEach, map, filter, reduce), desestruturação
5	Objetos	30	Literais, propriedades dinâmicas, métodos, this, desestruturação, spread/rest
6	Strings & RegEx	25	Manipulação (split, replace, trim), padrões com expressões regulares, validações simples
7	Data & Hora	15	Date, timestamps, formatação básica, cálculo de diferença entre datas
8	Recursão	15	Funções recursivas simples, recursão de cauda, problemas clássicos (fatorial, fibonacci, árvore)
9	Estruturas de Dados Simples	20	Pilhas, filas, listas ligadas (implementação mínima)
10	Algoritmos Básicos	25	Ordenação (bubble, insertion, quick), busca (linear, binária), soma acumulada, máximo/mínimo
11	Programação Assíncrona	20	Callbacks, Promises, async/await, tratamento de erros, temporizadores (setTimeout, setInterval)
12	Módulos & ES6+	10	import/export, módulos CommonJS (require/module.exports), uso de pacotes NPM simples
13	Testes Unitários	10	Introdução ao Jest ou Mocha, escrita de testes básicos para funções puras
TOTAL	—	250	—
Dica: Se quiser gerar automaticamente novos exercícios a partir desses padrões, basta combinar variações de entrada/saída (por exemplo, trocar valores de arrays ou mudar condições). Isso permite criar infinitas versões “personalizadas”.

🚀 Exemplos de Exercícios por Bloco
A seguir, mostro alguns exemplos representativos de cada bloco. Você pode usar esses como modelo para criar os demais.

1️⃣ Fundamentos da Sintaxe (exercícios 1‑5)
// 1. Trocar valores de duas variáveis usando destructuring
let a = 5;
let b = 10;
// TODO: troque os valores sem usar variável temporária
[a, b] = [b, a];
console.log(a, b); // 10 5
// 2. Verificar se um número é par ou ímpar (operador ternário)
const num = 42;
const tipo = (num % 2 === 0) ? 'par' : 'ímpar';
console.log(`${num} é ${tipo}`);
// 3. Concatenar três strings usando template literals
const nome = 'Ana';
const idade = 27;
const cidade = 'São Paulo';
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
2️⃣ Controle de Fluxo (exercícios 21‑25)
// 21. Imprimir números de 1 a 100, mas substituir múltiplos de 3 por "Fizz",
// múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz".
for (let i = 1; i <= 100 i++) {
  let out = '';
  if (i % 3 === 0) out += 'Fizz';
  if (i % 5 === 0) out += 'Buzz';
  console.log(out || i);
}
// 22. Receber um número (1‑7) e imprimir o dia da semana usando switch
function diaDaSemana(num) {
  switch (num) {
    case 1: return 'Domingo';
    case 2: return 'Segunda-feira';
    case 3: return 'Terça-feira';
    case 4: return 'Quarta-feira';
    case 5: return 'Quinta-feira';
    case 6: return 'Sexta-feira';
    case 7: return 'Sábado';
    default: return 'Número inválido';
  }
}
3️⃣ Funções (exercícios 36‑40)
// 36. Função que recebe um array e retorna outro contendo apenas os números pares
function filtraPares(arr) {
  return arr.filter(n => n % 2 === 0);
}
// 37. Closure que cria um contador independente
function criaContador(inicial = 0) {
  let count = inicial;
  return () => ++count;
}
const contadorA = criaContador();
console.log(contadorA()); // 1
console.log(contadorA()); // 2
4️⃣ Arrays (exercícios 56‑60)
// 56. Dado um array de objetos {nome, idade}, ordenar por idade ascendente
const pessoas = [{nome:'Bob', idade:34},{nome:'Ada', idade:28},{nome:'Zoe', idade:45}];
pessoas.sort((a,b) => a.idade - b.idade);
console.log(pessoas);
// 57. Reduzir um array de números ao seu produto total
const nums = [2,3,4];
const produto = nums.reduce((acc, v) => acc * v, 1);
console.log(produto); // 24
5️⃣ Objetos (exercícios 86‑90)
// 86. Criar um objeto "carro" com método que calcula consumo (km/l)
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  kmRodado: 500,
  litrosUsados: 40,
  consumo() {
    return this.kmRodado / this.litrosUsados;
  }
};
console.log(carro.consumo()); // 12.5
6️⃣ Strings & RegEx (exercícios 111‑115)
// 111. Validar se uma string é um e‑mail simples (regex básico)
function validaEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
console.log(validaEmail('teste@dominio.com')); // true
7️⃣ Data & Hora (exercícios 126‑130)
// 126. Calcular a diferença em dias entre duas datas
function diffDias(data1, data2) {
  const msDia = 24 * 60 * 60 * 1000;
  return Math.abs((data2 - data1) / msDia);
}
const d1 = new Date('2025-01-01');
const d2 = new Date('2025-01-15');
console.log(diffDias(d1, d2)); // 14
8️⃣ Recursão (exercícios 141‑145)
// 141. Fatorial recursivo
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
9️⃣ Estruturas de Dados Simples (exercícios 166‑170)
// 166. Implementar pilha com array
class Pilha {
  constructor() { this.itens = []; }
  push(v) { this.itens.push(v); }
  pop() { return this.itens.pop(); }
  peek() { return this.itens[this.itens.length - 1]; }
  tamanho() { return this.itens.length; }
}
🔟 Algoritmos Básicos (exercícios 191‑195)
// 191. Ordenação Bubble Sort
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return a;
}
1️⃣1️⃣ Programação Assíncrona (exercícios 216‑220)
// 216. Simular uma chamada assíncrona que resolve após 2 segundos
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function exemplo() {
  console.log('Iniciando...');
  await delay(2000);
  console.log('2 segundos depois');
}
exemplo();
1️⃣2️⃣ Módulos & ES6+ (exercícios 236‑240)
// 236. Exportar e importar função utilitária (CommonJS)
// utils.js
module.exports.soma = (a,b) => a + b;

// app.js
const { soma } = require('./utils');
console.log(soma(3,4)); // 7
1️⃣3️⃣ Testes Unitários (exercícios 246‑250)
// 246. Teste simples com Jest para a função soma acima
// soma.test.js
const { soma } = require('./utils');
test('soma dois números positivos', () => {
  expect(soma(2,3)).toBe(5);
});
📂 Como Usar Essa Lista
Escolha um bloco que corresponda ao seu nível atual ou ao conceito que deseja praticar.
Copie o esqueleto (quando houver) para um arquivo .js e execute com node nome.js.
Resolva o “TODO” ou escreva sua própria solução.
Quando terminar, adicione variações (troque valores, aumente o tamanho dos arrays, modifique as condições) para gerar novos exercícios rapidamente.
Se precisar de mais detalhes sobre algum exercício específico, de explicações passo‑a‑passo ou de soluções completas, é só dizer! Estou aqui para ajudar a transformar esses 250 desafios em aprendizado sólido.

Aqui estão ideias para 250 exercícios em JavaScript, focando apenas no modo sem navegador (Node.js ou ambiente console), sem HTML. Eles estão organizados por temas para facilitar o estudo:

**1. Variáveis e Tipos de Dados**
1. Declare uma variável numérica.
2. Declare uma variável de texto.
3. Declare uma variável booleana.
4. Faça a soma de dois números.
5. Faça a subtração de dois números.
6. Multiplique dois números.
7. Divida dois números.
8. Calcule o resto da divisão entre dois números.
9. Converta um número para string.
10. Converta uma string para número.

**2. Operadores**
11. Use operadores de comparação (==, ===, !=, !==).
12. Use operadores lógicos (&&, ||, !).
13. Use operador ternário.
14. Incremente uma variável.
15. Decremente uma variável.

**3. Entrada e Saída**
16. Peça ao usuário para digitar um número (use prompt-sync ou readline).
17. Peça ao usuário para digitar seu nome.
18. Mostre uma mensagem de boas-vindas usando o nome digitado.
19. Mostre o resultado de uma operação matemática.
20. Mostre o tipo de uma variável usando typeof.

**4. Estruturas de Controle**
21. Faça um if para verificar se um número é positivo.
22. Faça um if para verificar se um número é par.
23. Faça um if-else para verificar se um número é maior que outro.
24. Faça um switch-case para determinar o dia da semana.
25. Faça um loop for para imprimir números de 1 a 10.
26. Faça um loop while para contar de 10 a 0.
27. Faça um loop do-while para pedir ao usuário uma senha até acertar.

**5. Funções**
28. Crie uma função que soma dois números.
29. Crie uma função que retorna o quadrado de um número.
30. Crie uma função que verifica se um número é primo.
31. Crie uma função que retorna o maior de três números.
32. Crie uma função que inverte uma string.
33. Crie uma função que retorna o comprimento de um array.
34. Crie uma função que recebe um array e retorna a soma dos elementos.
35. Crie uma função que filtra números pares de um array.
36. Crie uma função que gera uma lista de números de 1 a N.
37. Crie uma função recursiva para calcular fatorial.

**6. Arrays**
38. Crie um array de números.
39. Crie um array de nomes.
40. Adicione um elemento ao final de um array.
41. Adicione um elemento no início de um array.
42. Remova o último elemento de um array.
43. Remova o primeiro elemento de um array.
44. Encontre o índice de um elemento em um array.
45. Ordene um array de números.
46. Inverta um array.
47. Junte dois arrays em um só.
48. Filtre elementos maiores que 10 de um array.
49. Some todos os elementos do array.
50. Multiplique todos os elementos do array.

**7. Objetos**
51. Crie um objeto representando uma pessoa.
52. Acesse uma propriedade de um objeto.
53. Adicione uma propriedade a um objeto.
54. Remova uma propriedade de um objeto.
55. Liste todas as propriedades de um objeto.
56. Crie um array de objetos.
57. Filtre objetos por uma propriedade.
58. Atualize uma propriedade de um objeto.
59. Crie um método em um objeto.
60. Copie um objeto usando spread.

**8. Strings**
61. Junte duas strings.
62. Separe uma string por espaços.
63. Converta uma string para maiúsculas.
64. Converta uma string para minúsculas.
65. Remova espaços do início e fim de uma string.
66. Substitua parte de uma string por outra.
67. Conte quantas vezes uma letra aparece em uma string.
68. Verifique se uma string começa com determinada letra.
69. Verifique se uma string termina com determinada letra.
70. Pegue um pedaço de uma string (substring).

**9. Datas**
71. Mostre a data atual.
72. Mostre o ano atual.
73. Mostre o mês atual.
74. Mostre o dia da semana atual.
75. Calcule a diferença entre duas datas.
76. Adicione dias a uma data.
77. Formate uma data como “DD/MM/AAAA”.
78. Verifique se um ano é bissexto.

**10. Matemática**
79. Calcule a raiz quadrada de um número.
80. Calcule o valor absoluto de um número.
81. Arredonde um número para cima.
82. Arredonde um número para baixo.
83. Gere um número aleatório entre 1 e 100.
84. Calcule o seno de um número.
85. Calcule o cosseno de um número.
86. Calcule o logaritmo de um número.

**11. Conversão de tipos**
87. Converta número para booleano.
88. Converta booleano para número.
89. Converta string para booleano.
90. Converta array para string.
91. Converta objeto para array de pares.

**12. Manipulação de arquivos** *(Node.js)*
92. Leia um arquivo de texto.
93. Escreva em um arquivo de texto.
94. Liste arquivos de um diretório.
95. Apague um arquivo.
96. Renomeie um arquivo.
97. Leia um arquivo JSON.
98. Escreva um arquivo JSON.

**13. Tratamento de erros**
99. Use try-catch para tratar erro de divisão por zero.
100. Lance um erro personalizado.
101. Trate erro ao ler arquivo inexistente.

**14. Algoritmos clássicos**
102. Faça a ordenação bubble sort.
103. Faça a ordenação selection sort.
104. Faça a ordenação insertion sort.
105. Implemente busca binária.
106. Implemente busca linear.
107. Gere a sequência de Fibonacci.
108. Verifique se uma palavra é palíndromo.
109. Gere todos os anagramas de uma palavra.
110. Calcule MDC de dois números.
111. Calcule MMC de dois números.

**15. Exercícios lógicos**
112. Verifique se três lados formam um triângulo.
113. Classifique triângulo: equilátero, isósceles, escaleno.
114. Calcule área de um círculo.
115. Calcule área de um triângulo.
116. Calcule área de um retângulo.
117. Calcule área de um trapézio.
118. Calcule perímetro de um polígono.

**16. Listas e manipulação**
119. Remova elementos duplicados de um array.
120. Conte elementos únicos de um array.
121. Crie um array bidimensional (matriz).
122. Some os elementos de uma matriz.
123. Encontre maior valor em matriz.
124. Transponha uma matriz.

**17. Recursão**
125. Faça fatorial recursivo.
126. Faça Fibonacci recursivo.
127. Faça busca em árvore binária recursiva.
128. Crie função recursiva para potência.

**18. Programação funcional**
129. Use map para dobrar elementos de um array.
130. Use filter para selecionar ímpares.
131. Use reduce para somar elementos.
132. Use find para achar elemento específico.
133. Use every para verificar se todos são positivos.
134. Use some para verificar se algum é negativo.

**19. Modularização**
135. Crie um módulo para operações matemáticas.
136. Importe e use módulo em outro arquivo.
137. Exporte função de um arquivo.
138. Exporte objeto de um arquivo.

**20. Promises e async/await**
139. Crie uma promise simples.
140. Use .then e .catch para tratar promise.
141. Crie função async que retorna resultado após 1s.
142. Faça chamada assíncrona para ler arquivo.
143. Trate erro em função async.

**21. Estruturas de dados**
144. Implemente pilha (stack).
145. Implemente fila (queue).
146. Implemente lista encadeada simples.
147. Implemente árvore binária de busca.
148. Implemente grafo simples (adjacência).
149. Faça busca em largura (BFS).
150. Faça busca em profundidade (DFS).

**22. Simulações**
151. Simule lançamento de dados.
152. Simule sorteio de números.
153. Simule sistema de senhas.
154. Simule cadastro de usuários.
155. Simule sistema bancário simples.

**23. Exercícios de lógica de programação**
156. Troque valores de duas variáveis.
157. Inverta uma lista.
158. Encontre segundos em uma quantidade de minutos.
159. Converta Celsius para Fahrenheit.
160. Converta Fahrenheit para Celsius.

**24. Exercícios com objetos**
161. Crie objeto livro com título, autor, ano.
162. Liste livros publicados após 2000.
163. Atualize título de um livro.
164. Remova livro por título.
165. Ordene lista de livros por ano.

**25. Exercícios de manipulação de arrays**
166. Crie função para remover elemento pelo índice.
167. Crie função para inserir elemento em posição específica.
168. Crie função para copiar array sem referência.
169. Crie função para mesclar dois arrays sem duplicados.
170. Crie função para dividir array em dois.

**26. Exercícios matemáticos**
171. Calcule média aritmética de array.
172. Calcule moda.
173. Calcule mediana.
174. Calcule desvio padrão.
175. Calcule porcentagem.

**27. Exercícios com strings**
176. Remova vogais de uma string.
177. Remova consoantes de uma string.
178. Conte palavras em uma frase.
179. Separe frase em palavras.
180. Gere acrônimo de uma frase.

**28. Exercícios com datas**
181. Calcule idade a partir de data de nascimento.
182. Calcule dias entre duas datas.
183. Formate data para “YYYY-MM-DD”.
184. Adicione um mês a uma data.

**29. Exercícios de lógica**
185. Resolva o problema das Torres de Hanoi (recursivo).
186. Gere sudoku válido (simples).
187. Resolva sudoku (simples).
188. Simule jogo da velha.
189. Simule jogo de adivinhação.

**30. Exercícios de manipulação de arquivos**
190. Conte linhas em arquivo de texto.
191. Conte palavras em arquivo de texto.
192. Procure palavra em arquivo de texto.
193. Substitua palavra em arquivo de texto.

**31. Exercícios avançados**
194. Crie um CRUD simples em memória (array de objetos).
195. Implemente sistema de login simples.
196. Implemente sistema de cadastro com validações.
197. Implemente sistema de notas escolares.
198. Implemente lista de tarefas (to-do).

**32. Exercícios com funções**
199. Crie função que retorna função (closure).
200. Crie função que soma vários números (rest).
201. Crie função que aceita callback.

**33. Exercícios de ordenação**
202. Ordene array de strings por tamanho.
203. Ordene array de objetos por propriedade.
204. Ordene array de números decrescente.

**34. Exercícios com regex**
205. Valide e-mail com regex.
206. Valide CPF com regex.
207. Extraia números de uma string.
208. Extraia palavras de uma frase.

**35. Exercícios de lógica**
209. Resolva problema de lógica com operadores AND, OR, NOT.
210. Simule semáforo com switch-case.
211. Simule relógio digital.

**36. Exercícios com JSON**
212. Converta objeto para JSON.
213. Converta JSON para objeto.
214. Filtre objetos de um array JSON.

**37. Exercícios com Map e Set**
215. Crie Map para pares chave-valor.
216. Crie Set para valores únicos.
217. Adicione e remova itens de Map.
218. Adicione e remova itens de Set.

**38. Exercícios com Symbol**
219. Crie Symbol único.
220. Use Symbol como chave de propriedade.

**39. Exercícios com funções de ordem superior**
221. Crie função que recebe outra função como argumento.
222. Crie função que retorna outra função.

**40. Exercícios de simulação**
223. Simule sorteio de nomes.
224. Simule busca de produtos em estoque.

**41. Exercícios com estruturas condicionais**
225. Verifique se número está dentro de intervalo.
226. Valide senha com regras específicas.

**42. Exercícios com números**
227. Arredonde número para duas casas decimais.
228. Gere número aleatório inteiro.
229. Gere número aleatório com casas decimais.

**43. Exercícios com lógica condicional**
230. Verifique se ano é bissexto.
231. Verifique se palavra é palíndromo.

**44. Exercícios com arrays**
232. Gere array com N elementos aleatórios.
233. Remova elemento em array por valor.

**45. Exercícios extras**
234. Crie função para contar caracteres diferentes em string.
235. Crie função para encontrar todos os divisores de um número.
236. Crie função para verificar se número é perfeito.
237. Crie função para converter número romano para decimal.
238. Crie função para converter decimal para romano.

**46. Exercícios de manipulação de objetos**
239. Crie função para mesclar dois objetos.
240. Crie função para remover propriedades nulas de objeto.
241. Crie função para contar propriedades de objeto.

**47. Exercícios com funções**
242. Crie função que retorna array de funções.
243. Crie função que executa várias funções em sequência.

**48. Exercícios de lógica**
244. Calcule valor de expressão matemática (parser simples).
245. Implemente algoritmo de criptografia simples (Cesar).
246. Implemente algoritmo de decodificação Cesar.

**49. Exercícios com arrays**
247. Crie array de arrays (matriz).
248. Some elementos por linha de matriz.

**50. Exercícios finais**
249. Implemente agenda de contatos em memória.
250. Implemente calculadora de operações básicas (soma, subtração, multiplicação, divisão).

Se precisar do código de algum exercício específico, peça pelo número ou descrição!


# Coleção Completa de 250 Exercícios de JavaScript (Node.js)

Esta coleção abrangente apresenta 250 exercícios de JavaScript, cuidadosamente elaborados para serem executados em um ambiente Node.js. O foco principal é a lógica de programação e a manipulação de dados, sem a necessidade de um navegador web ou HTML. Os exercícios são organizados em três níveis de dificuldade – Básico, Intermediário e Avançado – para proporcionar uma jornada de aprendizado progressiva e desafiadora.

Cada exercício segue uma estrutura padronizada para facilitar a compreensão e a resolução:

*   **Título do Exercício**: Um nome descritivo para o problema.
*   **Descrição do Problema**: Detalhes sobre o que o exercício deve resolver.
*   **Entrada (Input)**: Exemplos de dados de entrada para a função ou lógica.
*   **Saída Esperada (Output)**: Exemplos da saída esperada com base na entrada fornecida.
*   **Restrições/Observações**: Condições especiais, dicas ou requisitos adicionais.
*   **Solução (Opcional)**: Um esqueleto de função ou uma solução completa para guiar o desenvolvimento ou para verificação.

Estes exercícios são ideais para estudantes, desenvolvedores iniciantes e até mesmo para profissionais experientes que desejam aprimorar suas habilidades em JavaScript puro e algoritmos. A prática regular com estes problemas ajudará a solidificar o conhecimento da linguagem e a desenvolver o raciocínio lógico necessário para resolver desafios de programação complexos.

---



# Exercícios de JavaScript - Nível Básico (1-80)

Esta seção contém 80 exercícios de JavaScript focados em conceitos fundamentais da linguagem, projetados para serem executados em um ambiente Node.js, sem a necessidade de um navegador ou HTML.

## Estrutura dos Exercícios

Cada exercício segue a estrutura definida no plano:

*   **Título do Exercício**: Nome do exercício.
*   **Descrição do Problema**: O que o exercício deve resolver.
*   **Entrada (Input)**: Exemplos de dados de entrada.
*   **Saída Esperada (Output)**: Exemplos da saída esperada.
*   **Restrições/Observações**: Condições especiais.
*   **Solução (Opcional)**: Esqueleto de função ou solução completa.

---

### Exercício 1: Declarar e Atribuir Variáveis

**Descrição do Problema**: Declare três variáveis: `nome` (string), `idade` (number) e `estaAtivo` (boolean). Atribua valores a elas e imprima cada uma no console.

**Entrada (Input)**:
Não há entrada direta para este exercício, os valores são atribuídos internamente.

**Saída Esperada (Output)**:
```
Nome: João
Idade: 30
Ativo: true
```
(Os valores podem variar dependendo da atribuição)

**Restrições/Observações**: Utilize `let` ou `const` para a declaração das variáveis.

**Solução (Esqueleto)**:
```javascript
function exercicio1() {
  // Declare e atribua as variáveis aqui
  let nome = "João";
  let idade = 30;
  let estaAtivo = true;

  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Ativo: " + estaAtivo);
}

// Para testar:
// exercicio1();
```

---

### Exercício 2: Operações Aritméticas Básicas

**Descrição do Problema**: Crie uma função que receba dois números como parâmetros e retorne a soma, subtração, multiplicação e divisão desses números. Imprima os resultados.

**Entrada (Input)**:
```
numero1 = 10
numero2 = 5
```

**Saída Esperada (Output)**:
```
Soma: 15
Subtração: 5
Multiplicação: 50
Divisão: 2
```

**Restrições/Observações**: Considere que o segundo número nunca será zero para a divisão.

**Solução (Esqueleto)**:
```javascript
function exercicio2(numero1, numero2) {
  let soma = numero1 + numero2;
  let subtracao = numero1 - numero2;
  let multiplicacao = numero1 * numero2;
  let divisao = numero1 / numero2;

  console.log("Soma: " + soma);
  console.log("Subtração: " + subtracao);
  console.log("Multiplicação: " + multiplicacao);
  console.log("Divisão: " + divisao);
}

// Para testar:
// exercicio2(10, 5);
```

---

### Exercício 3: Concatenação de Strings

**Descrição do Problema**: Crie uma função que receba um primeiro nome e um sobrenome como parâmetros e retorne o nome completo formatado como "Sobrenome, Nome".

**Entrada (Input)**:
```
primeiroNome = "Maria"
sobrenome = "Silva"
```

**Saída Esperada (Output)**:
```
Silva, Maria
```

**Restrições/Observações**: Utilize o operador `+` ou template literals para a concatenação.

**Solução (Esqueleto)**:
```javascript
function exercicio3(primeiroNome, sobrenome) {
  let nomeCompleto = sobrenome + ", " + primeiroNome;
  // Ou usando template literals:
  // let nomeCompleto = `${sobrenome}, ${primeiroNome}`;
  return nomeCompleto;
}

// Para testar:
// console.log(exercicio3("Maria", "Silva"));
```

---

### Exercício 4: Verificação de Número Par ou Ímpar

**Descrição do Problema**: Crie uma função que receba um número inteiro como parâmetro e retorne se ele é par ou ímpar.

**Entrada (Input)**:
```
numero = 7
```

**Saída Esperada (Output)**:
```
Ímpar
```

**Restrições/Observações**: Utilize o operador de módulo (`%`).

**Solução (Esqueleto)**:
```javascript
function exercicio4(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Para testar:
// console.log(exercicio4(7)); // Saída: Ímpar
// console.log(exercicio4(10)); // Saída: Par
```

---

### Exercício 5: Maior de Dois Números

**Descrição do Problema**: Crie uma função que receba dois números como parâmetros e retorne o maior entre eles.

**Entrada (Input)**:
```
num1 = 25
num2 = 18
```

**Saída Esperada (Output)**:
```
25
```

**Restrições/Observações**: Utilize uma estrutura condicional `if/else` ou o operador ternário.

**Solução (Esqueleto)**:
```javascript
function exercicio5(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
  // Ou com operador ternário:
  // return (num1 > num2) ? num1 : num2;
}

// Para testar:
// console.log(exercicio5(25, 18)); // Saída: 25
// console.log(exercicio5(10, 30)); // Saída: 30
```

---

### Exercício 6: Soma dos Elementos de um Array

**Descrição do Problema**: Crie uma função que receba um array de números como parâmetro e retorne a soma de todos os seus elementos.

**Entrada (Input)**:
```
array = [1, 2, 3, 4, 5]
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: O array conterá apenas números. Utilize um loop `for` ou `forEach`.

**Solução (Esqueleto)**:
```javascript
function exercicio6(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  // Ou com forEach:
  // array.forEach(numero => { soma += numero; });
  return soma;
}

// Para testar:
// console.log(exercicio6([1, 2, 3, 4, 5])); // Saída: 15
// console.log(exercicio6([10, 20, 30])); // Saída: 60
```

---

### Exercício 7: Inverter uma String

**Descrição do Problema**: Crie uma função que receba uma string como parâmetro e retorne a string invertida.

**Entrada (Input)**:
```
texto = "hello"
```

**Saída Esperada (Output)**:
```
olleh
```

**Restrições/Observações**: Utilize métodos de string e array.

**Solução (Esqueleto)**:
```javascript
function exercicio7(texto) {
  return texto.split(\'\').reverse().join(\'\');
}

// Para testar:
// console.log(exercicio7("hello")); // Saída: olleh
// console.log(exercicio7("JavaScript")); // Saída: tpircSavaJ
```

---

### Exercício 8: Contar Vogais em uma String

**Descrição do Problema**: Crie uma função que receba uma string como parâmetro e retorne o número de vogais (a, e, i, o, u, maiúsculas e minúsculas) presentes nela.

**Entrada (Input)**:
```
frase = "Programacao"
```

**Saída Esperada (Output)**:
```
5
```

**Restrições/Observações**: Considere apenas as vogais padrão do alfabeto latino.

**Solução (Esqueleto)**:
```javascript
function exercicio8(frase) {
  let count = 0;
  const vogais = "aeiouAEIOU";
  for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
      count++;
    }
  }
  return count;
}

// Para testar:
// console.log(exercicio8("Programacao")); // Saída: 5
// console.log(exercicio8("JavaScript")); // Saída: 3
```

---

### Exercício 9: Calcular Fatorial

**Descrição do Problema**: Crie uma função que receba um número inteiro não negativo como parâmetro e retorne o seu fatorial.

**Entrada (Input)**:
```
numero = 5
```

**Saída Esperada (Output)**:
```
120
```

**Restrições/Observações**: O fatorial de 0 é 1. Utilize um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio9(numero) {
  if (numero === 0) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

// Para testar:
// console.log(exercicio9(5)); // Saída: 120
// console.log(exercicio9(0)); // Saída: 1
// console.log(exercicio9(3)); // Saída: 6
```

---

### Exercício 10: Verificar Palíndromo

**Descrição do Problema**: Crie uma função que receba uma string como parâmetro e retorne `true` se ela for um palíndromo (lê-se da mesma forma de trás para frente) e `false` caso contrário. Ignore espaços e a capitalização.

**Entrada (Input)**:
```
texto = "Arara"
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Converta a string para minúsculas e remova espaços antes de verificar.

**Solução (Esqueleto)**:
```javascript
function exercicio10(texto) {
  const formatado = texto.toLowerCase().replace(/\s/g, \'\');
  const invertido = formatado.split(\'\').reverse().join(\'\');
  return formatado === invertido;
}

// Para testar:
// console.log(exercicio10("Arara")); // Saída: true
// console.log(exercicio10("Ame o poema")); // Saída: true
// console.log(exercicio10("Hello")); // Saída: false
```

---

### Exercício 11: Encontrar o Maior Elemento em um Array

**Descrição do Problema**: Crie uma função que receba um array de números e retorne o maior número presente no array.

**Entrada (Input)**:
```
numeros = [3, 8, 1, 9, 4]
```

**Saída Esperada (Output)**:
```
9
```

**Restrições/Observações**: O array não estará vazio. Utilize um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio11(numeros) {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
  // Ou usando Math.max e spread operator:
  // return Math.max(...numeros);
}

// Para testar:
// console.log(exercicio11([3, 8, 1, 9, 4])); // Saída: 9
// console.log(exercicio11([-5, -1, -10])); // Saída: -1
```

---

### Exercício 12: Encontrar o Menor Elemento em um Array

**Descrição do Problema**: Crie uma função que receba um array de números e retorne o menor número presente no array.

**Entrada (Input)**:
```
numeros = [3, 8, 1, 9, 4]
```

**Saída Esperada (Output)**:
```
1
```

**Restrições/Observações**: O array não estará vazio. Utilize um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio12(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
  // Ou usando Math.min e spread operator:
  // return Math.min(...numeros);
}

// Para testar:
// console.log(exercicio12([3, 8, 1, 9, 4])); // Saída: 1
// console.log(exercicio12([-5, -1, -10])); // Saída: -10
```

---

### Exercício 13: Remover Duplicatas de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne um novo array contendo apenas os elementos únicos, removendo duplicatas.

**Entrada (Input)**:
```
array = [1, 2, 2, 3, 4, 4, 5]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5]
```

**Restrições/Observações**: A ordem dos elementos únicos pode ser mantida ou não, dependendo da implementação.

**Solução (Esqueleto)**:
```javascript
function exercicio13(array) {
  return [...new Set(array)];
  // Ou com filter e indexOf:
  // return array.filter((item, index) => array.indexOf(item) === index);
}

// Para testar:
// console.log(exercicio13([1, 2, 2, 3, 4, 4, 5])); // Saída: [1, 2, 3, 4, 5]
// console.log(exercicio13(["a", "b", "a", "c"])); // Saída: ["a", "b", "c"]
```

---

### Exercício 14: Contar Ocorrências de um Caractere

**Descrição do Problema**: Crie uma função que receba uma string e um caractere como parâmetros e retorne o número de vezes que o caractere aparece na string (case-insensitive).

**Entrada (Input)**:
```
texto = "Banana"
caractere = "a"
```

**Saída Esperada (Output)**:
```
3
```

**Restrições/Observações**: Converta ambos para minúsculas antes de comparar.

**Solução (Esqueleto)**:
```javascript
function exercicio14(texto, caractere) {
  let count = 0;
  const textoLower = texto.toLowerCase();
  const caractereLower = caractere.toLowerCase();
  for (let i = 0; i < textoLower.length; i++) {
    if (textoLower[i] === caractereLower) {
      count++;
    }
  }
  return count;
}

// Para testar:
// console.log(exercicio14("Banana", "a")); // Saída: 3
// console.log(exercicio14("JavaScript", "A")); // Saída: 2
```

---

### Exercício 15: Calcular Média de um Array de Números

**Descrição do Problema**: Crie uma função que receba um array de números e retorne a média aritmética dos seus elementos.

**Entrada (Input)**:
```
numeros = [10, 20, 30, 40]
```

**Saída Esperada (Output)**:
```
25
```

**Restrições/Observações**: O array não estará vazio. Retorne 0 se o array estiver vazio.

**Solução (Esqueleto)**:
```javascript
function exercicio15(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma / numeros.length;
  // Ou com reduce:
  // return numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length;
}

// Para testar:
// console.log(exercicio15([10, 20, 30, 40])); // Saída: 25
// console.log(exercicio15([])); // Saída: 0
```

---

### Exercício 16: Converter Celsius para Fahrenheit

**Descrição do Problema**: Crie uma função que receba uma temperatura em Celsius e a converta para Fahrenheit. A fórmula é `F = C * 9/5 + 32`.

**Entrada (Input)**:
```
celsius = 25
```

**Saída Esperada (Output)**:
```
77
```

**Restrições/Observações**: Retorne um número.

**Solução (Esqueleto)**:
```javascript
function exercicio16(celsius) {
  return (celsius * 9/5) + 32;
}

// Para testar:
// console.log(exercicio16(25)); // Saída: 77
// console.log(exercicio16(0)); // Saída: 32
```

---

### Exercício 17: Converter Fahrenheit para Celsius

**Descrição do Problema**: Crie uma função que receba uma temperatura em Fahrenheit e a converta para Celsius. A fórmula é `C = (F - 32) * 5/9`.

**Entrada (Input)**:
```
fahrenheit = 77
```

**Saída Esperada (Output)**:
```
25
```

**Restrições/Observações**: Retorne um número.

**Solução (Esqueleto)**:
```javascript
function exercicio17(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Para testar:
// console.log(exercicio17(77)); // Saída: 25
// console.log(exercicio17(32)); // Saída: 0
```

---

### Exercício 18: Gerar Números Pares até N

**Descrição do Problema**: Crie uma função que receba um número inteiro `N` como parâmetro e retorne um array contendo todos os números pares de 1 até `N` (inclusive).

**Entrada (Input)**:
```
N = 10
```

**Saída Esperada (Output)**:
```
[2, 4, 6, 8, 10]
```

**Restrições/Observações**: `N` será um número positivo. Se `N` for menor que 2, retorne um array vazio.

**Solução (Esqueleto)**:
```javascript
function exercicio18(N) {
  const pares = [];
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
}

// Para testar:
// console.log(exercicio18(10)); // Saída: [2, 4, 6, 8, 10]
// console.log(exercicio18(5)); // Saída: [2, 4]
// console.log(exercicio18(1)); // Saída: []
```

---

### Exercício 19: Gerar Números Ímpares até N

**Descrição do Problema**: Crie uma função que receba um número inteiro `N` como parâmetro e retorne um array contendo todos os números ímpares de 1 até `N` (inclusive).

**Entrada (Input)**:
```
N = 10
```

**Saída Esperada (Output)**:
```
[1, 3, 5, 7, 9]
```

**Restrições/Observações**: `N` será um número positivo.

**Solução (Esqueleto)**:
```javascript
function exercicio19(N) {
  const impares = [];
  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }
  return impares;
}

// Para testar:
// console.log(exercicio19(10)); // Saída: [1, 3, 5, 7, 9]
// console.log(exercicio19(5)); // Saída: [1, 3, 5]
```

---

### Exercício 20: Calcular Potência

**Descrição do Problema**: Crie uma função que receba dois números, `base` e `expoente`, e retorne o resultado da `base` elevada ao `expoente`.

**Entrada (Input)**:
```
base = 2
expoente = 3
```

**Saída Esperada (Output)**:
```
8
```

**Restrições/Observações**: Utilize `Math.pow()` ou o operador `**`.

**Solução (Esqueleto)**:
```javascript
function exercicio20(base, expoente) {
  return Math.pow(base, expoente);
  // Ou com operador **:
  // return base ** expoente;
}

// Para testar:
// console.log(exercicio20(2, 3)); // Saída: 8
// console.log(exercicio20(5, 2)); // Saída: 25
```

---

### Exercício 21: Converter String para Maiúsculas

**Descrição do Problema**: Crie uma função que receba uma string e retorne a mesma string com todos os caracteres em maiúsculas.

**Entrada (Input)**:
```
texto = "javascript"
```

**Saída Esperada (Output)**:
```
JAVASCRIPT
```

**Restrições/Observações**: Utilize o método `toUpperCase()`.

**Solução (Esqueleto)**:
```javascript
function exercicio21(texto) {
  return texto.toUpperCase();
}

// Para testar:
// console.log(exercicio21("javascript")); // Saída: JAVASCRIPT
// console.log(exercicio21("Hello World")); // Saída: HELLO WORLD
```

---

### Exercício 22: Converter String para Minúsculas

**Descrição do Problema**: Crie uma função que receba uma string e retorne a mesma string com todos os caracteres em minúsculas.

**Entrada (Input)**:
```
texto = "JAVASCRIPT"
```

**Saída Esperada (Output)**:
```
javascript
```

**Restrições/Observações**: Utilize o método `toLowerCase()`.

**Solução (Esqueleto)**:
```javascript
function exercicio22(texto) {
  return texto.toLowerCase();
}

// Para testar:
// console.log(exercicio22("JAVASCRIPT")); // Saída: javascript
// console.log(exercicio22("Hello World")); // Saída: hello world
```

---

### Exercício 23: Retornar o Primeiro Elemento de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne o seu primeiro elemento.

**Entrada (Input)**:
```
array = [10, 20, 30]
```

**Saída Esperada (Output)**:
```
10
```

**Restrições/Observações**: O array não estará vazio.

**Solução (Esqueleto)**:
```javascript
function exercicio23(array) {
  return array[0];
}

// Para testar:
// console.log(exercicio23([10, 20, 30])); // Saída: 10
// console.log(exercicio23(["a", "b", "c"])); // Saída: "a"
```

---

### Exercício 24: Retornar o Último Elemento de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne o seu último elemento.

**Entrada (Input)**:
```
array = [10, 20, 30]
```

**Saída Esperada (Output)**:
```
30
```

**Restrições/Observações**: O array não estará vazio.

**Solução (Esqueleto)**:
```javascript
function exercicio24(array) {
  return array[array.length - 1];
}

// Para testar:
// console.log(exercicio24([10, 20, 30])); // Saída: 30
// console.log(exercicio24(["a", "b", "c"])); // Saída: "c"
```

---

### Exercício 25: Verificar se um Elemento Existe em um Array

**Descrição do Problema**: Crie uma função que receba um array e um elemento, e retorne `true` se o elemento estiver presente no array, `false` caso contrário.

**Entrada (Input)**:
```
array = [1, 2, 3, 4, 5]
elemento = 3
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `includes()` ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio25(array, elemento) {
  return array.includes(elemento);
  // Ou com loop for:
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === elemento) {
  //     return true;
  //   }
  // }
  // return false;
}

// Para testar:
// console.log(exercicio25([1, 2, 3, 4, 5], 3)); // Saída: true
// console.log(exercicio25([1, 2, 3, 4, 5], 6)); // Saída: false
```

---

### Exercício 26: Multiplicar Todos os Elementos de um Array por um Fator

**Descrição do Problema**: Crie uma função que receba um array de números e um fator, e retorne um novo array onde cada elemento do original foi multiplicado pelo fator.

**Entrada (Input)**:
```
numeros = [1, 2, 3]
fator = 2
```

**Saída Esperada (Output)**:
```
[2, 4, 6]
```

**Restrições/Observações**: Utilize o método `map()` ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio26(numeros, fator) {
  return numeros.map(numero => numero * fator);
  // Ou com loop for:
  // const novoArray = [];
  // for (let i = 0; i < numeros.length; i++) {
  //   novoArray.push(numeros[i] * fator);
  // }
  // return novoArray;
}

// Para testar:
// console.log(exercicio26([1, 2, 3], 2)); // Saída: [2, 4, 6]
// console.log(exercicio26([5, 10], 3)); // Saída: [15, 30]
```

---

### Exercício 27: Filtrar Números Maiores que um Valor

**Descrição do Problema**: Crie uma função que receba um array de números e um valor limite, e retorne um novo array contendo apenas os números do original que são maiores que o valor limite.

**Entrada (Input)**:
```
numeros = [10, 5, 20, 15, 25]
limite = 15
```

**Saída Esperada (Output)**:
```
[20, 25]
```

**Restrições/Observações**: Utilize o método `filter()` ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio27(numeros, limite) {
  return numeros.filter(numero => numero > limite);
  // Ou com loop for:
  // const novoArray = [];
  // for (let i = 0; i < numeros.length; i++) {
  //   if (numeros[i] > limite) {
  //     novoArray.push(numeros[i]);
  //   }
  // }
  // return novoArray;
}

// Para testar:
// console.log(exercicio27([10, 5, 20, 15, 25], 15)); // Saída: [20, 25]
// console.log(exercicio27([1, 2, 3], 5)); // Saída: []
```

---

### Exercício 28: Calcular a Raiz Quadrada de um Número

**Descrição do Problema**: Crie uma função que receba um número não negativo e retorne a sua raiz quadrada.

**Entrada (Input)**:
```
numero = 16
```

**Saída Esperada (Output)**:
```
4
```

**Restrições/Observações**: Utilize `Math.sqrt()`.

**Solução (Esqueleto)**:
```javascript
function exercicio28(numero) {
  return Math.sqrt(numero);
}

// Para testar:
// console.log(exercicio28(16)); // Saída: 4
// console.log(exercicio28(9)); // Saída: 3
```

---

### Exercício 29: Arredondar um Número para o Inteiro Mais Próximo

**Descrição do Problema**: Crie uma função que receba um número decimal e o arredonde para o inteiro mais próximo.

**Entrada (Input)**:
```
numero = 3.7
```

**Saída Esperada (Output)**:
```
4
```

**Restrições/Observações**: Utilize `Math.round()`.

**Solução (Esqueleto)**:
```javascript
function exercicio29(numero) {
  return Math.round(numero);
}

// Para testar:
// console.log(exercicio29(3.7)); // Saída: 4
// console.log(exercicio29(3.2)); // Saída: 3
// console.log(exercicio29(3.5)); // Saída: 4
```

---

### Exercício 30: Gerar um Número Aleatório entre Dois Valores

**Descrição do Problema**: Crie uma função que receba dois números inteiros, `min` e `max`, e retorne um número inteiro aleatório entre `min` (inclusive) e `max` (inclusive).

**Entrada (Input)**:
```
min = 1
max = 10
```

**Saída Esperada (Output)**:
```
(Um número inteiro entre 1 e 10, por exemplo, 7)
```

**Restrições/Observações**: Utilize `Math.random()` e `Math.floor()`.

**Solução (Esqueleto)**:
```javascript
function exercicio30(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Para testar:
// console.log(exercicio30(1, 10)); // Saída: Um número entre 1 e 10
// console.log(exercicio30(100, 200)); // Saída: Um número entre 100 e 200
```

---

### Exercício 31: Capitalizar a Primeira Letra de uma String

**Descrição do Problema**: Crie uma função que receba uma string e retorne uma nova string com a primeira letra em maiúscula e o restante em minúscula.

**Entrada (Input)**:
```
texto = "hello world"
```

**Saída Esperada (Output)**:
```
Hello world
```

**Restrições/Observações**: A string não estará vazia.

**Solução (Esqueleto)**:
```javascript
function exercicio31(texto) {
  if (texto.length === 0) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Para testar:
// console.log(exercicio31("hello world")); // Saída: Hello world
// console.log(exercicio31("JAVASCRIPT")); // Saída: Javascript
```

---

### Exercício 32: Verificar se um Número é Primo

**Descrição do Problema**: Crie uma função que receba um número inteiro positivo e retorne `true` se ele for primo, `false` caso contrário.

**Entrada (Input)**:
```
numero = 7
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Um número primo é maior que 1 e só é divisível por 1 e por ele mesmo.

**Solução (Esqueleto)**:
```javascript
function exercicio32(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Para testar:
// console.log(exercicio32(7)); // Saída: true
// console.log(exercicio32(10)); // Saída: false
// console.log(exercicio32(2)); // Saída: true
```

---

### Exercício 33: Somar Números de 1 a N

**Descrição do Problema**: Crie uma função que receba um número inteiro positivo `N` e retorne a soma de todos os números de 1 até `N`.

**Entrada (Input)**:
```
N = 5
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: Utilize um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio33(N) {
  let soma = 0;
  for (let i = 1; i <= N; i++) {
    soma += i;
  }
  return soma;
  // Ou usando a fórmula de Gauss:
  // return N * (N + 1) / 2;
}

// Para testar:
// console.log(exercicio33(5)); // Saída: 15
// console.log(exercicio33(10)); // Saída: 55
```

---

### Exercício 34: Contar Palavras em uma String

**Descrição do Problema**: Crie uma função que receba uma string e retorne o número de palavras nela. Considere palavras separadas por espaços.

**Entrada (Input)**:
```
frase = "Olá mundo JavaScript"
```

**Saída Esperada (Output)**:
```
3
```

**Restrições/Observações**: Ignore múltiplos espaços e espaços no início/fim da string.

**Solução (Esqueleto)**:
```javascript
function exercicio34(frase) {
  const palavras = frase.trim().split(/\s+/);
  return palavras.length;
}

// Para testar:
// console.log(exercicio34("Olá mundo JavaScript")); // Saída: 3
// console.log(exercicio34("  Uma frase com   muitos espaços  ")); // Saída: 5
// console.log(exercicio34("")); // Saída: 1 (ou 0 se considerar string vazia como 0 palavras)
// Ajuste para 0 se string vazia:
// function exercicio34(frase) {
//   const palavras = frase.trim().split(/\s+/);
//   return palavras[0] === "" ? 0 : palavras.length;
// }
```

---

### Exercício 35: Remover Espaços em Branco de uma String

**Descrição do Problema**: Crie uma função que receba uma string e retorne uma nova string sem nenhum espaço em branco (incluindo espaços, tabs e quebras de linha).

**Entrada (Input)**:
```
texto = "  Hello   World  \n  JavaScript  "
```

**Saída Esperada (Output)**:
```
HelloWorldJavaScript
```

**Restrições/Observações**: Utilize `replace()` com expressão regular.

**Solução (Esqueleto)**:
```javascript
function exercicio35(texto) {
  return texto.replace(/\s/g, \'\');
}

// Para testar:
// console.log(exercicio35("  Hello   World  \n  JavaScript  ")); // Saída: HelloWorldJavaScript
// console.log(exercicio35("SemEspacos")); // Saída: SemEspacos
```

---

### Exercício 36: Concatenar Arrays

**Descrição do Problema**: Crie uma função que receba dois arrays e retorne um novo array contendo todos os elementos de ambos os arrays, na ordem em que aparecem.

**Entrada (Input)**:
```
array1 = [1, 2]
array2 = [3, 4]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4]
```

**Restrições/Observações**: Utilize o método `concat()` ou o spread operator (`...`).

**Solução (Esqueleto)**:
```javascript
function exercicio36(array1, array2) {
  return array1.concat(array2);
  // Ou com spread operator:
  // return [...array1, ...array2];
}

// Para testar:
// console.log(exercicio36([1, 2], [3, 4])); // Saída: [1, 2, 3, 4]
// console.log(exercicio36(["a", "b"], ["c", "d"])); // Saída: ["a", "b", "c", "d"]
```

---

### Exercício 37: Obter Substring

**Descrição do Problema**: Crie uma função que receba uma string, um índice de início e um comprimento, e retorne a substring correspondente.

**Entrada (Input)**:
```
texto = "JavaScript"
inicio = 4
comprimento = 6
```

**Saída Esperada (Output)**:
```
Script
```

**Restrições/Observações**: Utilize o método `substring()` ou `slice()`.

**Solução (Esqueleto)**:
```javascript
function exercicio37(texto, inicio, comprimento) {
  return texto.substring(inicio, inicio + comprimento);
  // Ou com slice:
  // return texto.slice(inicio, inicio + comprimento);
}

// Para testar:
// console.log(exercicio37("JavaScript", 4, 6)); // Saída: Script
// console.log(exercicio37("Hello World", 0, 5)); // Saída: Hello
```

---

### Exercício 38: Verificar se uma String Contém Outra

**Descrição do Problema**: Crie uma função que receba duas strings, `textoPrincipal` e `subtexto`, e retorne `true` se `textoPrincipal` contiver `subtexto`, `false` caso contrário (case-sensitive).

**Entrada (Input)**:
```
textoPrincipal = "Programação JavaScript"
subtexto = "Java"
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `includes()`.

**Solução (Esqueleto)**:
```javascript
function exercicio38(textoPrincipal, subtexto) {
  return textoPrincipal.includes(subtexto);
}

// Para testar:
// console.log(exercicio38("Programação JavaScript", "Java")); // Saída: true
// console.log(exercicio38("Programação JavaScript", "python")); // Saída: false
// console.log(exercicio38("Programação JavaScript", "java")); // Saída: false (case-sensitive)
```

---

### Exercício 39: Substituir Caracteres em uma String

**Descrição do Problema**: Crie uma função que receba uma string, um caractere a ser substituído e um caractere substituto, e retorne a string com todas as ocorrências do primeiro caractere substituídas pelo segundo.

**Entrada (Input)**:
```
texto = "banana"
caractereAntigo = "a"
caractereNovo = "o"
```

**Saída Esperada (Output)**:
```
bonono
```

**Restrições/Observações**: Utilize o método `replace()` com expressão regular global (`/g`).

**Solução (Esqueleto)**:
```javascript
function exercicio39(texto, caractereAntigo, caractereNovo) {
  // Para substituir todas as ocorrências, é necessário usar uma RegExp com a flag \'g\'
  const regex = new RegExp(caractereAntigo, \'g\');
  return texto.replace(regex, caractereNovo);
}

// Para testar:
// console.log(exercicio39("banana", "a", "o")); // Saída: bonono
// console.log(exercicio39("mississippi", "s", "z")); // Saída: mizziZZippi
```

---

### Exercício 40: Calcular a Área de um Círculo

**Descrição do Problema**: Crie uma função que receba o raio de um círculo e retorne a sua área. A fórmula é `Área = π * raio²`.

**Entrada (Input)**:
```
raio = 5
```

**Saída Esperada (Output)**:
```
78.53981633974483
```

**Restrições/Observações**: Utilize `Math.PI` e `Math.pow()`.

**Solução (Esqueleto)**:
```javascript
function exercicio40(raio) {
  return Math.PI * Math.pow(raio, 2);
}

// Para testar:
// console.log(exercicio40(5)); // Saída: 78.53981633974483
// console.log(exercicio40(10)); // Saída: 314.1592653589793
```

---

### Exercício 41: Calcular a Área de um Retângulo

**Descrição do Problema**: Crie uma função que receba a largura e a altura de um retângulo e retorne a sua área.

**Entrada (Input)**:
```
largura = 10
altura = 5
```

**Saída Esperada (Output)**:
```
50
```

**Restrições/Observações**: A área é `largura * altura`.

**Solução (Esqueleto)**:
```javascript
function exercicio41(largura, altura) {
  return largura * altura;
}

// Para testar:
// console.log(exercicio41(10, 5)); // Saída: 50
// console.log(exercicio41(7, 7)); // Saída: 49
```

---

### Exercício 42: Verificar se um Ano é Bissexto

**Descrição do Problema**: Crie uma função que receba um ano como parâmetro e retorne `true` se ele for bissexto, `false` caso contrário.

**Entrada (Input)**:
```
ano = 2024
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Um ano é bissexto se for divisível por 4, exceto se for divisível por 100 mas não por 400.

**Solução (Esqueleto)**:
```javascript
function exercicio42(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// Para testar:
// console.log(exercicio42(2024)); // Saída: true
// console.log(exercicio42(2000)); // Saída: true
// console.log(exercicio42(1900)); // Saída: false
// console.log(exercicio42(2023)); // Saída: false
```

---

### Exercício 43: Gerar Sequência de Fibonacci até N Termos

**Descrição do Problema**: Crie uma função que receba um número inteiro `N` e retorne um array contendo os primeiros `N` termos da sequência de Fibonacci.

**Entrada (Input)**:
```
N = 7
```

**Saída Esperada (Output)**:
```
[0, 1, 1, 2, 3, 5, 8]
```

**Restrições/Observações**: A sequência começa com 0 e 1. Se `N` for 0, retorne um array vazio. Se `N` for 1, retorne `[0]`.

**Solução (Esqueleto)**:
```javascript
function exercicio43(N) {
  if (N <= 0) return [];
  if (N === 1) return [0];

  const fib = [0, 1];
  for (let i = 2; i < N; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Para testar:
// console.log(exercicio43(7)); // Saída: [0, 1, 1, 2, 3, 5, 8]
// console.log(exercicio43(1)); // Saída: [0]
// console.log(exercicio43(0)); // Saída: []
```

---

### Exercício 44: Remover o Último Elemento de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne um novo array com o último elemento removido. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3, 4]
```

**Saída Esperada (Output)**:
```
[1, 2, 3]
```

**Restrições/Observações**: O array não estará vazio. Utilize `slice()`.

**Solução (Esqueleto)**:
```javascript
function exercicio44(array) {
  return array.slice(0, -1);
  // Ou:
  // return array.slice(0, array.length - 1);
}

// Para testar:
// console.log(exercicio44([1, 2, 3, 4])); // Saída: [1, 2, 3]
// console.log(exercicio44(["a", "b"])); // Saída: ["a"]
```

---

### Exercício 45: Adicionar Elemento ao Final de um Array

**Descrição do Problema**: Crie uma função que receba um array e um elemento, e retorne um novo array com o elemento adicionado ao final. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3]
elemento = 4
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4]
```

**Restrições/Observações**: Utilize o spread operator (`...`) ou `concat()`.

**Solução (Esqueleto)**:
```javascript
function exercicio45(array, elemento) {
  return [...array, elemento];
  // Ou:
  // return array.concat(elemento);
}

// Para testar:
// console.log(exercicio45([1, 2, 3], 4)); // Saída: [1, 2, 3, 4]
// console.log(exercicio45(["a", "b"], "c")); // Saída: ["a", "b", "c"]
```

---

### Exercício 46: Remover o Primeiro Elemento de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne um novo array com o primeiro elemento removido. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3, 4]
```

**Saída Esperada (Output)**:
```
[2, 3, 4]
```

**Restrições/Observações**: O array não estará vazio. Utilize `slice()`.

**Solução (Esqueleto)**:
```javascript
function exercicio46(array) {
  return array.slice(1);
}

// Para testar:
// console.log(exercicio46([1, 2, 3, 4])); // Saída: [2, 3, 4]
// console.log(exercicio46(["a", "b"])); // Saída: ["b"]
```

---

### Exercício 47: Adicionar Elemento ao Início de um Array

**Descrição do Problema**: Crie uma função que receba um array e um elemento, e retorne um novo array com o elemento adicionado ao início. Não modifique o array original.

**Entrada (Input)**:
```
array = [2, 3, 4]
elemento = 1
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4]
```

**Restrições/Observações**: Utilize o spread operator (`...`) ou `concat()`.

**Solução (Esqueleto)**:
```javascript
function exercicio47(array, elemento) {
  return [elemento, ...array];
  // Ou:
  // return [elemento].concat(array);
}

// Para testar:
// console.log(exercicio47([2, 3, 4], 1)); // Saída: [1, 2, 3, 4]
// console.log(exercicio47(["b", "c"], "a")); // Saída: ["a", "b", "c"]
```

---

### Exercício 48: Juntar Elementos de um Array em uma String

**Descrição do Problema**: Crie uma função que receba um array de strings e um separador, e retorne uma única string com os elementos do array unidos pelo separador.

**Entrada (Input)**:
```
array = ["Maçã", "Banana", "Laranja"]
separador = ", "
```

**Saída Esperada (Output)**:
```
Maçã, Banana, Laranja
```

**Restrições/Observações**: Utilize o método `join()`.

**Solução (Esqueleto)**:
```javascript
function exercicio48(array, separador) {
  return array.join(separador);
}

// Para testar:
// console.log(exercicio48(["Maçã", "Banana", "Laranja"], ", ")); // Saída: Maçã, Banana, Laranja
// console.log(exercicio48(["um", "dois", "três"], "-")); // Saída: um-dois-três
```

---

### Exercício 49: Dividir uma String em um Array

**Descrição do Problema**: Crie uma função que receba uma string e um delimitador, e retorne um array de substrings divididas pelo delimitador.

**Entrada (Input)**:
```
texto = "Maçã,Banana,Laranja"
delimitador = ","
```

**Saída Esperada (Output)**:
```
["Maçã", "Banana", "Laranja"]
```

**Restrições/Observações**: Utilize o método `split()`.

**Solução (Esqueleto)**:
```javascript
function exercicio49(texto, delimitador) {
  return texto.split(delimitador);
}

// Para testar:
// console.log(exercicio49("Maçã,Banana,Laranja", ",")); // Saída: ["Maçã", "Banana", "Laranja"]
// console.log(exercicio49("um-dois-três", "-")); // Saída: ["um", "dois", "três"]
```

---

### Exercício 50: Verificar se Todos os Elementos de um Array Satisfazem uma Condição

**Descrição do Problema**: Crie uma função que receba um array de números e uma função de callback (condição), e retorne `true` se todos os elementos do array satisfizerem a condição, `false` caso contrário.

**Entrada (Input)**:
```
numeros = [2, 4, 6, 8]
condicao = (num) => num % 2 === 0 // Verifica se é par
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `every()`.

**Solução (Esqueleto)**:
```javascript
function exercicio50(numeros, condicao) {
  return numeros.every(condicao);
}

// Para testar:
// console.log(exercicio50([2, 4, 6, 8], (num) => num % 2 === 0)); // Saída: true
// console.log(exercicio50([1, 2, 3], (num) => num > 0)); // Saída: true
// console.log(exercicio50([1, 2, 3], (num) => num % 2 === 0)); // Saída: false
```

---

### Exercício 51: Verificar se Algum Elemento de um Array Satisfaz uma Condição

**Descrição do Problema**: Crie uma função que receba um array de números e uma função de callback (condição), e retorne `true` se pelo menos um elemento do array satisfizer a condição, `false` caso contrário.

**Entrada (Input)**:
```
numeros = [1, 3, 5, 8]
condicao = (num) => num % 2 === 0 // Verifica se é par
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `some()`.

**Solução (Esqueleto)**:
```javascript
function exercicio51(numeros, condicao) {
  return numeros.some(condicao);
}

// Para testar:
// console.log(exercicio51([1, 3, 5, 8], (num) => num % 2 === 0)); // Saída: true
// console.log(exercicio51([1, 3, 5], (num) => num > 10)); // Saída: false
```

---

### Exercício 52: Encontrar o Índice de um Elemento em um Array

**Descrição do Problema**: Crie uma função que receba um array e um elemento, e retorne o índice da primeira ocorrência do elemento no array. Se o elemento não for encontrado, retorne -1.

**Entrada (Input)**:
```
array = [10, 20, 30, 20, 40]
elemento = 20
```

**Saída Esperada (Output)**:
```
1
```

**Restrições/Observações**: Utilize o método `indexOf()`.

**Solução (Esqueleto)**:
```javascript
function exercicio52(array, elemento) {
  return array.indexOf(elemento);
}

// Para testar:
// console.log(exercicio52([10, 20, 30, 20, 40], 20)); // Saída: 1
// console.log(exercicio52([1, 2, 3], 5)); // Saída: -1
```

---

### Exercício 53: Encontrar o Último Índice de um Elemento em um Array

**Descrição do Problema**: Crie uma função que receba um array e um elemento, e retorne o índice da última ocorrência do elemento no array. Se o elemento não for encontrado, retorne -1.

**Entrada (Input)**:
```
array = [10, 20, 30, 20, 40]
elemento = 20
```

**Saída Esperada (Output)**:
```
3
```

**Restrições/Observações**: Utilize o método `lastIndexOf()`.

**Solução (Esqueleto)**:
```javascript
function exercicio53(array, elemento) {
  return array.lastIndexOf(elemento);
}

// Para testar:
// console.log(exercicio53([10, 20, 30, 20, 40], 20)); // Saída: 3
// console.log(exercicio53([1, 2, 3], 5)); // Saída: -1
```

---

### Exercício 54: Reverter a Ordem dos Elementos de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne um novo array com os elementos na ordem inversa. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3, 4]
```

**Saída Esperada (Output)**:
```
[4, 3, 2, 1]
```

**Restrições/Observações**: Utilize o método `reverse()` em uma cópia do array ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio54(array) {
  return [...array].reverse();
  // Ou com loop for:
  // const novoArray = [];
  // for (let i = array.length - 1; i >= 0; i--) {
  //   novoArray.push(array[i]);
  // }
  // return novoArray;
}

// Para testar:
// console.log(exercicio54([1, 2, 3, 4])); // Saída: [4, 3, 2, 1]
// console.log(exercicio54(["a", "b", "c"])); // Saída: ["c", "b", "a"]
```

---

### Exercício 55: Ordenar um Array de Números em Ordem Crescente

**Descrição do Problema**: Crie uma função que receba um array de números e retorne um novo array com os números ordenados em ordem crescente. Não modifique o array original.

**Entrada (Input)**:
```
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
```

**Saída Esperada (Output)**:
```
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Restrições/Observações**: Utilize o método `sort()` com uma função de comparação.

**Solução (Esqueleto)**:
```javascript
function exercicio55(numeros) {
  return [...numeros].sort((a, b) => a - b);
}

// Para testar:
// console.log(exercicio55([3, 1, 4, 1, 5, 9, 2, 6])); // Saída: [1, 1, 2, 3, 4, 5, 6, 9]
// console.log(exercicio55([10, 1, 5, 20])); // Saída: [1, 5, 10, 20]
```

---

### Exercício 56: Ordenar um Array de Números em Ordem Decrescente

**Descrição do Problema**: Crie uma função que receba um array de números e retorne um novo array com os números ordenados em ordem decrescente. Não modifique o array original.

**Entrada (Input)**:
```
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
```

**Saída Esperada (Output)**:
```
[9, 6, 5, 4, 3, 2, 1, 1]
```

**Restrições/Observações**: Utilize o método `sort()` com uma função de comparação.

**Solução (Esqueleto)**:
```javascript
function exercicio56(numeros) {
  return [...numeros].sort((a, b) => b - a);
}

// Para testar:
// console.log(exercicio56([3, 1, 4, 1, 5, 9, 2, 6])); // Saída: [9, 6, 5, 4, 3, 2, 1, 1]
// console.log(exercicio56([10, 1, 5, 20])); // Saída: [20, 10, 5, 1]
```

---

### Exercício 57: Calcular a Soma dos Quadrados de um Array

**Descrição do Problema**: Crie uma função que receba um array de números e retorne a soma dos quadrados de cada elemento.

**Entrada (Input)**:
```
numeros = [1, 2, 3]
```

**Saída Esperada (Output)**:
```
14 // (1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14)
```

**Restrições/Observações**: Utilize `map()` e `reduce()` ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio57(numeros) {
  return numeros.reduce((acc, curr) => acc + (curr * curr), 0);
  // Ou com map e reduce:
  // const quadrados = numeros.map(num => num * num);
  // return quadrados.reduce((acc, curr) => acc + curr, 0);
}

// Para testar:
// console.log(exercicio57([1, 2, 3])); // Saída: 14
// console.log(exercicio57([2, 4])); // Saída: 20 (4 + 16)
```

---

### Exercício 58: Remover Elemento por Valor de um Array

**Descrição do Problema**: Crie uma função que receba um array e um valor, e retorne um novo array com todas as ocorrências desse valor removidas. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3, 2, 4]
valor = 2
```

**Saída Esperada (Output)**:
```
[1, 3, 4]
```

**Restrições/Observações**: Utilize o método `filter()`.

**Solução (Esqueleto)**:
```javascript
function exercicio58(array, valor) {
  return array.filter(item => item !== valor);
}

// Para testar:
// console.log(exercicio58([1, 2, 3, 2, 4], 2)); // Saída: [1, 3, 4]
// console.log(exercicio58(["a", "b", "c", "a"], "a")); // Saída: ["b", "c"]
```

---

### Exercício 59: Obter o Comprimento de uma String

**Descrição do Problema**: Crie uma função que receba uma string e retorne o seu comprimento.

**Entrada (Input)**:
```
texto = "JavaScript"
```

**Saída Esperada (Output)**:
```
10
```

**Restrições/Observações**: Utilize a propriedade `length`.

**Solução (Esqueleto)**:
```javascript
function exercicio59(texto) {
  return texto.length;
}

// Para testar:
// console.log(exercicio59("JavaScript")); // Saída: 10
// console.log(exercicio59("")); // Saída: 0
```

---

### Exercício 60: Obter o Comprimento de um Array

**Descrição do Problema**: Crie uma função que receba um array e retorne o número de elementos nele.

**Entrada (Input)**:
```
array = [1, 2, 3, 4, 5]
```

**Saída Esperada (Output)**:
```
5
```

**Restrições/Observações**: Utilize a propriedade `length`.

**Solução (Esqueleto)**:
```javascript
function exercicio60(array) {
  return array.length;
}

// Para testar:
// console.log(exercicio60([1, 2, 3, 4, 5])); // Saída: 5
// console.log(exercicio60([])); // Saída: 0
```

---

### Exercício 61: Repetir uma String N Vezes

**Descrição do Problema**: Crie uma função que receba uma string e um número inteiro `N`, e retorne uma nova string que é a original repetida `N` vezes.

**Entrada (Input)**:
```
texto = "abc"
N = 3
```

**Saída Esperada (Output)**:
```
abcabcabc
```

**Restrições/Observações**: `N` será um número não negativo. Utilize o método `repeat()`.

**Solução (Esqueleto)**:
```javascript
function exercicio61(texto, N) {
  return texto.repeat(N);
}

// Para testar:
// console.log(exercicio61("abc", 3)); // Saída: abcabcabc
// console.log(exercicio61("hi", 0)); // Saída: ""
```

---

### Exercício 62: Verificar se uma String Começa com um Prefixo

**Descrição do Problema**: Crie uma função que receba duas strings, `texto` e `prefixo`, e retorne `true` se `texto` começar com `prefixo`, `false` caso contrário (case-sensitive).

**Entrada (Input)**:
```
texto = "JavaScript"
prefixo = "Java"
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `startsWith()`.

**Solução (Esqueleto)**:
```javascript
function exercicio62(texto, prefixo) {
  return texto.startsWith(prefixo);
}

// Para testar:
// console.log(exercicio62("JavaScript", "Java")); // Saída: true
// console.log(exercicio62("Hello World", "world")); // Saída: false
```

---

### Exercício 63: Verificar se uma String Termina com um Sufixo

**Descrição do Problema**: Crie uma função que receba duas strings, `texto` e `sufixo`, e retorne `true` se `texto` terminar com `sufixo`, `false` caso contrário (case-sensitive).

**Entrada (Input)**:
```
texto = "JavaScript"
sufixo = "Script"
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Utilize o método `endsWith()`.

**Solução (Esqueleto)**:
```javascript
function exercicio63(texto, sufixo) {
  return texto.endsWith(sufixo);
}

// Para testar:
// console.log(exercicio63("JavaScript", "Script")); // Saída: true
// console.log(exercicio63("Hello World", "hello")); // Saída: false
```

---

### Exercício 64: Encontrar o Mínimo de Três Números

**Descrição do Problema**: Crie uma função que receba três números e retorne o menor entre eles.

**Entrada (Input)**:
```
num1 = 10
num2 = 5
num3 = 15
```

**Saída Esperada (Output)**:
```
5
```

**Restrições/Observações**: Utilize `Math.min()`.

**Solução (Esqueleto)**:
```javascript
function exercicio64(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

// Para testar:
// console.log(exercicio64(10, 5, 15)); // Saída: 5
// console.log(exercicio64(100, 20, 30)); // Saída: 20
```

---

### Exercício 65: Encontrar o Máximo de Três Números

**Descrição do Problema**: Crie uma função que receba três números e retorne o maior entre eles.

**Entrada (Input)**:
```
num1 = 10
num2 = 5
num3 = 15
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: Utilize `Math.max()`.

**Solução (Esqueleto)**:
```javascript
function exercicio65(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Para testar:
// console.log(exercicio65(10, 5, 15)); // Saída: 15
// console.log(exercicio65(100, 20, 30)); // Saída: 100
```

---

### Exercício 66: Calcular a Média Ponderada

**Descrição do Problema**: Crie uma função que receba dois arrays: um de `notas` e outro de `pesos` correspondentes. Retorne a média ponderada.

**Entrada (Input)**:
```
notas = [70, 80, 90]
pesos = [0.2, 0.3, 0.5]
```

**Saída Esperada (Output)**:
```
83 // (70*0.2 + 80*0.3 + 90*0.5 = 14 + 24 + 45 = 83)
```

**Restrições/Observações**: Os arrays terão o mesmo comprimento e os pesos somarão 1.

**Solução (Esqueleto)**:
```javascript
function exercicio66(notas, pesos) {
  let somaPonderada = 0;
  let somaPesos = 0;
  for (let i = 0; i < notas.length; i++) {
    somaPonderada += notas[i] * pesos[i];
    somaPesos += pesos[i];
  }
  return somaPonderada / somaPesos;
}

// Para testar:
// console.log(exercicio66([70, 80, 90], [0.2, 0.3, 0.5])); // Saída: 83
// console.log(exercicio66([10, 20], [0.5, 0.5])); // Saída: 15
```

---

### Exercício 67: Converter Horas para Minutos

**Descrição do Problema**: Crie uma função que receba um número de horas e retorne o equivalente em minutos.

**Entrada (Input)**:
```
horas = 2
```

**Saída Esperada (Output)**:
```
120
```

**Restrições/Observações**: 1 hora = 60 minutos.

**Solução (Esqueleto)**:
```javascript
function exercicio67(horas) {
  return horas * 60;
}

// Para testar:
// console.log(exercicio67(2)); // Saída: 120
// console.log(exercicio67(0.5)); // Saída: 30
```

---

### Exercício 68: Converter Minutos para Horas e Minutos

**Descrição do Problema**: Crie uma função que receba um número total de minutos e retorne uma string formatada como "X horas e Y minutos".

**Entrada (Input)**:
```
minutosTotais = 150
```

**Saída Esperada (Output)**:
```
2 horas e 30 minutos
```

**Restrições/Observações**: Utilize `Math.floor()` para as horas e o operador de módulo (`%`) para os minutos restantes.

**Solução (Esqueleto)**:
```javascript
function exercicio68(minutosTotais) {
  const horas = Math.floor(minutosTotais / 60);
  const minutos = minutosTotais % 60;
  return `${horas} horas e ${minutos} minutos`;
}

// Para testar:
// console.log(exercicio68(150)); // Saída: 2 horas e 30 minutos
// console.log(exercicio68(60)); // Saída: 1 horas e 0 minutos
// console.log(exercicio68(45)); // Saída: 0 horas e 45 minutos
```

---

### Exercício 69: Verificar se um Número é Positivo, Negativo ou Zero

**Descrição do Problema**: Crie uma função que receba um número e retorne "Positivo", "Negativo" ou "Zero" conforme o valor.

**Entrada (Input)**:
```
numero = -5
```

**Saída Esperada (Output)**:
```
Negativo
```

**Restrições/Observações**: Utilize `if/else if/else`.

**Solução (Esqueleto)**:
```javascript
function exercicio69(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

// Para testar:
// console.log(exercicio69(-5)); // Saída: Negativo
// console.log(exercicio69(10)); // Saída: Positivo
// console.log(exercicio69(0)); // Saída: Zero
```

---

### Exercício 70: Calcular o Produto de um Array de Números

**Descrição do Problema**: Crie uma função que receba um array de números e retorne o produto de todos os seus elementos.

**Entrada (Input)**:
```
numeros = [1, 2, 3, 4]
```

**Saída Esperada (Output)**:
```
24 // (1 * 2 * 3 * 4 = 24)
```

**Restrições/Observações**: O array não estará vazio. Retorne 1 se o array estiver vazio.

**Solução (Esqueleto)**:
```javascript
function exercicio70(numeros) {
  if (numeros.length === 0) {
    return 1;
  }
  let produto = 1;
  for (let i = 0; i < numeros.length; i++) {
    produto *= numeros[i];
  }
  return produto;
  // Ou com reduce:
  // return numeros.reduce((acc, curr) => acc * curr, 1);
}

// Para testar:
// console.log(exercicio70([1, 2, 3, 4])); // Saída: 24
// console.log(exercicio70([5, 2])); // Saída: 10
// console.log(exercicio70([])); // Saída: 1
```

---

### Exercício 71: Inverter a Ordem das Palavras em uma Frase

**Descrição do Problema**: Crie uma função que receba uma string (frase) e retorne uma nova string com a ordem das palavras invertida.

**Entrada (Input)**:
```
frase = "Olá mundo JavaScript"
```

**Saída Esperada (Output)**:
```
JavaScript mundo Olá
```

**Restrições/Observações**: Considere palavras separadas por um único espaço.

**Solução (Esqueleto)**:
```javascript
function exercicio71(frase) {
  return frase.split(\' \').reverse().join(\' \');
}

// Para testar:
// console.log(exercicio71("Olá mundo JavaScript")); // Saída: JavaScript mundo Olá
// console.log(exercicio71("um dois três")); // Saída: três dois um
```

---

### Exercício 72: Remover Espaços Extras entre Palavras

**Descrição do Problema**: Crie uma função que receba uma string e retorne uma nova string onde múltiplos espaços entre palavras são substituídos por um único espaço, e espaços no início/fim são removidos.

**Entrada (Input)**:
```
frase = "  Olá   mundo    JavaScript  "
```

**Saída Esperada (Output)**:
```
Olá mundo JavaScript
```

**Restrições/Observações**: Utilize `trim()` e `replace()` com expressão regular.

**Solução (Esqueleto)**:
```javascript
function exercicio72(frase) {
  return frase.trim().replace(/\s+/g, \' \');
}

// Para testar:
// console.log(exercicio72("  Olá   mundo    JavaScript  ")); // Saída: Olá mundo JavaScript
// console.log(exercicio72("Apenas uma palavra")); // Saída: Apenas uma palavra
```

---

### Exercício 73: Verificar se um Objeto está Vazio

**Descrição do Problema**: Crie uma função que receba um objeto e retorne `true` se ele não tiver nenhuma propriedade própria enumerável, `false` caso contrário.

**Entrada (Input)**:
```
objeto1 = {}
objeto2 = {a: 1}
```

**Saída Esperada (Output)**:
```
true (para objeto1)
false (para objeto2)
```

**Restrições/Observações**: Utilize `Object.keys()` ou `Object.entries()`.

**Solução (Esqueleto)**:
```javascript
function exercicio73(obj) {
  return Object.keys(obj).length === 0;
}

// Para testar:
// console.log(exercicio73({})); // Saída: true
// console.log(exercicio73({a: 1})); // Saída: false
```

---

### Exercício 74: Obter as Chaves de um Objeto

**Descrição do Problema**: Crie uma função que receba um objeto e retorne um array contendo todas as chaves (nomes das propriedades) do objeto.

**Entrada (Input)**:
```
objeto = { nome: "João", idade: 30, cidade: "São Paulo" }
```

**Saída Esperada (Output)**:
```
["nome", "idade", "cidade"]
```

**Restrições/Observações**: Utilize `Object.keys()`.

**Solução (Esqueleto)**:
```javascript
function exercicio74(obj) {
  return Object.keys(obj);
}

// Para testar:
// console.log(exercicio74({ nome: "João", idade: 30, cidade: "São Paulo" })); // Saída: ["nome", "idade", "cidade"]
// console.log(exercicio74({ a: 1, b: 2 })); // Saída: ["a", "b"]
```

---

### Exercício 75: Obter os Valores de um Objeto

**Descrição do Problema**: Crie uma função que receba um objeto e retorne um array contendo todos os valores das propriedades do objeto.

**Entrada (Input)**:
```
objeto = { nome: "João", idade: 30, cidade: "São Paulo" }
```

**Saída Esperada (Output)**:
```
["João", 30, "São Paulo"]
```

**Restrições/Observações**: Utilize `Object.values()`.

**Solução (Esqueleto)**:
```javascript
function exercicio75(obj) {
  return Object.values(obj);
}

// Para testar:
// console.log(exercicio75({ nome: "João", idade: 30, cidade: "São Paulo" })); // Saída: ["João", 30, "São Paulo"]
// console.log(exercicio75({ a: 1, b: 2 })); // Saída: [1, 2]
```

---

### Exercício 76: Obter Pares Chave-Valor de um Objeto

**Descrição do Problema**: Crie uma função que receba um objeto e retorne um array de arrays, onde cada sub-array contém um par `[chave, valor]` das propriedades do objeto.

**Entrada (Input)**:
```
objeto = { nome: "João", idade: 30 }
```

**Saída Esperada (Output)**:
```
[["nome", "João"], ["idade", 30]]
```

**Restrições/Observações**: Utilize `Object.entries()`.

**Solução (Esqueleto)**:
```javascript
function exercicio76(obj) {
  return Object.entries(obj);
}

// Para testar:
// console.log(exercicio76({ nome: "João", idade: 30 })); // Saída: [["nome", "João"], ["idade", 30]]
// console.log(exercicio76({ a: 1, b: 2 })); // Saída: [["a", 1], ["b", 2]]
```

---

### Exercício 77: Criar um Objeto a Partir de Arrays de Chaves e Valores

**Descrição do Problema**: Crie uma função que receba dois arrays, um de `chaves` e outro de `valores`, e retorne um objeto onde cada chave corresponde ao seu valor no mesmo índice.

**Entrada (Input)**:
```
chaves = ["nome", "idade"]
valores = ["Maria", 25]
```

**Saída Esperada (Output)**:
```
{ nome: "Maria", idade: 25 }
```

**Restrições/Observações**: Os arrays terão o mesmo comprimento. Utilize `reduce()` ou um loop `for`.

**Solução (Esqueleto)**:
```javascript
function exercicio77(chaves, valores) {
  const obj = {};
  for (let i = 0; i < chaves.length; i++) {
    obj[chaves[i]] = valores[i];
  }
  return obj;
  // Ou com reduce:
  // return chaves.reduce((acc, chave, index) => {
  //   acc[chave] = valores[index];
  //   return acc;
  // }, {});
}

// Para testar:
// console.log(exercicio77(["nome", "idade"], ["Maria", 25])); // Saída: { nome: "Maria", idade: 25 }
// console.log(exercicio77(["a", "b"], [1, 2])); // Saída: { a: 1, b: 2 }
```

---

### Exercício 78: Clonar um Objeto Simples

**Descrição do Problema**: Crie uma função que receba um objeto simples (sem aninhamento ou funções) e retorne uma cópia exata dele. Não modifique o objeto original.

**Entrada (Input)**:
```
objetoOriginal = { a: 1, b: "hello" }
```

**Saída Esperada (Output)**:
```
{ a: 1, b: "hello" }
```

**Restrições/Observações**: Utilize o spread operator (`...`) ou `Object.assign()`.

**Solução (Esqueleto)**:
```javascript
function exercicio78(obj) {
  return { ...obj };
  // Ou:
  // return Object.assign({}, obj);
}

// Para testar:
// const original = { a: 1, b: "hello" };
// const clone = exercicio78(original);
// console.log(clone); // Saída: { a: 1, b: "hello" }
// console.log(original === clone); // Saída: false (verifica que é uma nova referência)
```

---

### Exercício 79: Mesclar Dois Objetos Simples

**Descrição do Problema**: Crie uma função que receba dois objetos simples e retorne um novo objeto que é a fusão dos dois. Se houver chaves duplicadas, o valor do segundo objeto deve prevalecer.

**Entrada (Input)**:
```
objeto1 = { a: 1, b: 2 }
objeto2 = { b: 3, c: 4 }
```

**Saída Esperada (Output)**:
```
{ a: 1, b: 3, c: 4 }
```

**Restrições/Observações**: Utilize o spread operator (`...`) ou `Object.assign()`.

**Solução (Esqueleto)**:
```javascript
function exercicio79(obj1, obj2) {
  return { ...obj1, ...obj2 };
  // Ou:
  // return Object.assign({}, obj1, obj2);
}

// Para testar:
// console.log(exercicio79({ a: 1, b: 2 }, { b: 3, c: 4 })); // Saída: { a: 1, b: 3, c: 4 }
// console.log(exercicio79({ x: 10 }, { y: 20 })); // Saída: { x: 10, y: 20 }
```

---

### Exercício 80: Calcular a Soma dos Dígitos de um Número

**Descrição do Problema**: Crie uma função que receba um número inteiro positivo e retorne a soma de seus dígitos.

**Entrada (Input)**:
```
numero = 123
```

**Saída Esperada (Output)**:
```
6 // (1 + 2 + 3 = 6)
```

**Restrições/Observações**: Converta o número para string para iterar sobre os dígitos.

**Solução (Esqueleto)**:
```javascript
function exercicio80(numero) {
  let soma = 0;
  const strNumero = String(numero);
  for (let i = 0; i < strNumero.length; i++) {
    soma += parseInt(strNumero[i], 10);
  }
  return soma;
  // Ou com split, map e reduce:
  // return String(numero).split(\'\').map(Number).reduce((acc, curr) => acc + curr, 0);
}

// Para testar:
// console.log(exercicio80(123)); // Saída: 6
// console.log(exercicio80(9876)); // Saída: 30
// console.log(exercicio80(0)); // Saída: 0
```

---



# Exercícios de JavaScript - Nível Intermediário (81-170)

Esta seção contém 90 exercícios de JavaScript focados em conceitos intermediários da linguagem, manipulação de dados e algoritmos mais complexos, projetados para serem executados em um ambiente Node.js, sem a necessidade de um navegador ou HTML.

## Estrutura dos Exercícios

Cada exercício segue a estrutura definida no plano:

*   **Título do Exercício**: Nome do exercício.
*   **Descrição do Problema**: O que o exercício deve resolver.
*   **Entrada (Input)**: Exemplos de dados de entrada.
*   **Saída Esperada (Output)**: Exemplos da saída esperada.
*   **Restrições/Observações**: Condições especiais.
*   **Solução (Opcional)**: Esqueleto de função ou solução completa.

---

### Exercício 81: Criar um Objeto Básico

**Descrição do Problema**: Crie um objeto `pessoa` com as propriedades `nome` (string), `idade` (number) e `cidade` (string). Atribua valores a elas e imprima o objeto completo.

**Entrada (Input)**:
Não há entrada direta, os valores são atribuídos internamente.

**Saída Esperada (Output)**:
```javascript
{ nome: \'Ana\', idade: 28, cidade: \'Rio de Janeiro\' }
```

**Restrições/Observações**: Utilize a sintaxe de objeto literal.

**Solução (Esqueleto)**:
```javascript
function exercicio81() {
  const pessoa = {
    nome: \'Ana\',
    idade: 28,
    cidade: \'Rio de Janeiro\'
  };
  console.log(pessoa);
}

// exercicio81();
```

---

### Exercício 82: Acessar Propriedades de um Objeto

**Descrição do Problema**: Dado o objeto `produto = { nome: \'Laptop\', preco: 1200, emEstoque: true }`, acesse e imprima o `nome` e o `preco`.

**Entrada (Input)**:
```javascript
produto = { nome: \'Laptop\', preco: 1200, emEstoque: true }
```

**Saída Esperada (Output)**:
```
Nome do produto: Laptop
Preço: 1200
```

**Restrições/Observações**: Utilize a notação de ponto ou colchetes.

**Solução (Esqueleto)**:
```javascript
function exercicio82() {
  const produto = { nome: \'Laptop\', preco: 1200, emEstoque: true };
  console.log(\'Nome do produto: \' + produto.nome);
  console.log(\'Preço: \' + produto[\'preco\']);
}

// exercicio82();
```

---

### Exercício 83: Adicionar e Modificar Propriedades de um Objeto

**Descrição do Problema**: Dado o objeto `carro = { marca: \'Ford\', modelo: \'Fiesta\' }`, adicione a propriedade `ano` com o valor `2020` e modifique o `modelo` para `\'Focus\'`. Imprima o objeto resultante.

**Entrada (Input)**:
```javascript
carro = { marca: \'Ford\', modelo: \'Fiesta\' }
```

**Saída Esperada (Output)**:
```javascript
{ marca: \'Ford\', modelo: \'Focus\', ano: 2020 }
```

**Restrições/Observações**: Modifique o objeto diretamente.

**Solução (Esqueleto)**:
```javascript
function exercicio83() {
  const carro = { marca: \'Ford\', modelo: \'Fiesta\' };
  carro.ano = 2020;
  carro.modelo = \'Focus\';
  console.log(carro);
}

// exercicio83();
```

---

### Exercício 84: Iterar sobre Propriedades de um Objeto

**Descrição do Problema**: Dado o objeto `usuario = { id: 1, nome: \'Carlos\', email: \'carlos@example.com\' }`, itere sobre suas propriedades e imprima cada chave e valor.

**Entrada (Input)**:
```javascript
usuario = { id: 1, nome: \'Carlos\', email: \'carlos@example.com\' }
```

**Saída Esperada (Output)**:
```
Chave: id, Valor: 1
Chave: nome, Valor: Carlos
Chave: email, Valor: carlos@example.com
```

**Restrições/Observações**: Utilize `for...in` ou `Object.keys().forEach()`.

**Solução (Esqueleto)**:
```javascript
function exercicio84() {
  const usuario = { id: 1, nome: \'Carlos\', email: \'carlos@example.com\' };
  for (const chave in usuario) {
    console.log(`Chave: ${chave}, Valor: ${usuario[chave]}`);
  }
  // Ou:
  // Object.keys(usuario).forEach(chave => {
  //   console.log(`Chave: ${chave}, Valor: ${usuario[chave]}`);
  // });
}

// exercicio84();
```

---

### Exercício 85: Objeto Aninhado

**Descrição do Problema**: Crie um objeto `empresa` com propriedades `nome`, `cnpj` e um objeto aninhado `endereco` com `rua`, `numero` e `cidade`. Imprima a cidade da empresa.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Cidade da empresa: São Paulo
```

**Restrições/Observações**: Acesso a propriedades aninhadas.

**Solução (Esqueleto)**:
```javascript
function exercicio85() {
  const empresa = {
    nome: \'Tech Solutions\',
    cnpj: \'12.345.678/0001-90\',
    endereco: {
      rua: \'Av. Paulista\',
      numero: 1000,
      cidade: \'São Paulo\'
    }
  };
  console.log(\'Cidade da empresa: \' + empresa.endereco.cidade);
}

// exercicio85();
```

---

### Exercício 86: Desestruturação de Objeto

**Descrição do Problema**: Dado o objeto `livro = { titulo: \'O Senhor dos Anéis\', autor: \'J.R.R. Tolkien\', ano: 1954 }`, use desestruturação para extrair `titulo` e `autor` em variáveis separadas e imprima-as.

**Entrada (Input)**:
```javascript
livro = { titulo: \'O Senhor dos Anéis\', autor: \'J.R.R. Tolkien\', ano: 1954 }
```

**Saída Esperada (Output)**:
```
Título: O Senhor dos Anéis
Autor: J.R.R. Tolkien
```

**Restrições/Observações**: Utilize a sintaxe de desestruturação.

**Solução (Esqueleto)**:
```javascript
function exercicio86() {
  const livro = { titulo: \'O Senhor dos Anéis\', autor: \'J.R.R. Tolkien\', ano: 1954 };
  const { titulo, autor } = livro;
  console.log(\'Título: \' + titulo);
  console.log(\'Autor: \' + autor);
}

// exercicio86();
```

---

### Exercício 87: Desestruturação de Array

**Descrição do Problema**: Dado o array `coordenadas = [10, 20, 30]`, use desestruturação para extrair o primeiro e o segundo elemento em variáveis `x` e `y` respectivamente. Imprima `x` e `y`.

**Entrada (Input)**:
```javascript
coordenadas = [10, 20, 30]
```

**Saída Esperada (Output)**:
```
X: 10
Y: 20
```

**Restrições/Observações**: Utilize a sintaxe de desestruturação de array.

**Solução (Esqueleto)**:
```javascript
function exercicio87() {
  const coordenadas = [10, 20, 30];
  const [x, y] = coordenadas;
  console.log(\'X: \' + x);
  console.log(\'Y: \' + y);
}

// exercicio87();
```

---

### Exercício 88: Parâmetros de Função com Desestruturação

**Descrição do Problema**: Crie uma função `imprimirDetalhes` que receba um objeto `produto` com `nome` e `preco` e use desestruturação nos parâmetros para imprimir esses detalhes.

**Entrada (Input)**:
```javascript
produto = { nome: \'Teclado\', preco: 75 }
```

**Saída Esperada (Output)**:
```
Produto: Teclado, Preço: 75
```

**Restrições/Observações**: A desestruturação deve ocorrer diretamente na assinatura da função.

**Solução (Esqueleto)**:
```javascript
function exercicio88() {
  function imprimirDetalhes({ nome, preco }) {
    console.log(`Produto: ${nome}, Preço: ${preco}`);
  }

  const produto = { nome: \'Teclado\', preco: 75 };
  imprimirDetalhes(produto);
}

// exercicio88();
```

---

### Exercício 89: Spread Operator em Arrays

**Descrição do Problema**: Dados dois arrays `arr1 = [1, 2]` e `arr2 = [3, 4]`, crie um novo array `arrCombinado` que contenha todos os elementos de `arr1` e `arr2` usando o spread operator. Imprima `arrCombinado`.

**Entrada (Input)**:
```javascript
arr1 = [1, 2]
arr2 = [3, 4]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4]
```

**Restrições/Observações**: O spread operator deve ser usado para combinar os arrays.

**Solução (Esqueleto)**:
```javascript
function exercicio89() {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const arrCombinado = [...arr1, ...arr2];
  console.log(arrCombinado);
}

// exercicio89();
```

---

### Exercício 90: Spread Operator em Objetos

**Descrição do Problema**: Dados dois objetos `obj1 = { a: 1, b: 2 }` e `obj2 = { c: 3, d: 4 }`, crie um novo objeto `objCombinado` que contenha todas as propriedades de `obj1` e `obj2` usando o spread operator. Imprima `objCombinado`.

**Entrada (Input)**:
```javascript
obj1 = { a: 1, b: 2 }
obj2 = { c: 3, d: 4 }
```

**Saída Esperada (Output)**:
```javascript
{ a: 1, b: 2, c: 3, d: 4 }
```

**Restrições/Observações**: O spread operator deve ser usado para combinar os objetos.

**Solução (Esqueleto)**:
```javascript
function exercicio90() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const objCombinado = { ...obj1, ...obj2 };
  console.log(objCombinado);
}

// exercicio90();
```

---

### Exercício 91: Rest Parameters em Funções

**Descrição do Problema**: Crie uma função `somarTudo` que receba um número variável de argumentos e retorne a soma de todos eles. Utilize rest parameters.

**Entrada (Input)**:
```javascript
somarTudo(1, 2, 3, 4, 5)
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: A função deve ser capaz de somar qualquer quantidade de números.

**Solução (Esqueleto)**:
```javascript
function exercicio91() {
  function somarTudo(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(somarTudo(1, 2, 3, 4, 5));
  console.log(somarTudo(10, 20));
}

// exercicio91();
```

---

### Exercício 92: `map()` para Dobrar Valores

**Descrição do Problema**: Dado um array de números `[1, 2, 3, 4, 5]`, use `map()` para criar um novo array onde cada número é dobrado. Imprima o novo array.

**Entrada (Input)**:
```javascript
numeros = [1, 2, 3, 4, 5]
```

**Saída Esperada (Output)**:
```
[2, 4, 6, 8, 10]
```

**Restrições/Observações**: Não modifique o array original.

**Solução (Esqueleto)**:
```javascript
function exercicio92() {
  const numeros = [1, 2, 3, 4, 5];
  const dobrados = numeros.map(num => num * 2);
  console.log(dobrados);
}

// exercicio92();
```

---

### Exercício 93: `filter()` para Números Pares

**Descrição do Problema**: Dado um array de números `[1, 2, 3, 4, 5, 6]`, use `filter()` para criar um novo array contendo apenas os números pares. Imprima o novo array.

**Entrada (Input)**:
```javascript
numeros = [1, 2, 3, 4, 5, 6]
```

**Saída Esperada (Output)**:
```
[2, 4, 6]
```

**Restrições/Observações**: Não modifique o array original.

**Solução (Esqueleto)**:
```javascript
function exercicio93() {
  const numeros = [1, 2, 3, 4, 5, 6];
  const pares = numeros.filter(num => num % 2 === 0);
  console.log(pares);
}

// exercicio93();
```

---

### Exercício 94: `reduce()` para Somar Elementos

**Descrição do Problema**: Dado um array de números `[1, 2, 3, 4, 5]`, use `reduce()` para calcular a soma de todos os elementos. Imprima a soma.

**Entrada (Input)**:
```javascript
numeros = [1, 2, 3, 4, 5]
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: Forneça um valor inicial para o acumulador.

**Solução (Esqueleto)**:
```javascript
function exercicio94() {
  const numeros = [1, 2, 3, 4, 5];
  const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
  console.log(soma);
}

// exercicio94();
```

---

### Exercício 95: `forEach()` para Imprimir Elementos

**Descrição do Problema**: Dado um array de strings `[\'maçã\', \'banana\', \'laranja\']`, use `forEach()` para imprimir cada fruta no console.

**Entrada (Input)**:
```javascript
frutas = [\'maçã\', \'banana\', \'laranja\']
```

**Saída Esperada (Output)**:
```
maçã
banana
laranja
```

**Restrições/Observações**: Apenas imprima, não retorne um novo array.

**Solução (Esqueleto)**:
```javascript
function exercicio95() {
  const frutas = [\'maçã\', \'banana\', \'laranja\'];
  frutas.forEach(fruta => console.log(fruta));
}

// exercicio95();
```

---

### Exercício 96: `find()` para Encontrar Objeto

**Descrição do Problema**: Dado um array de objetos `usuarios = [{ id: 1, nome: \'Alice\' }, { id: 2, nome: \'Bob\' }]`, use `find()` para encontrar o usuário com `id: 2`. Imprima o objeto encontrado.

**Entrada (Input)**:
```javascript
usuarios = [{ id: 1, nome: \'Alice\' }, { id: 2, nome: \'Bob\' }]
```

**Saída Esperada (Output)**:
```javascript
{ id: 2, nome: \'Bob\' }
```

**Restrições/Observações**: Retorna o primeiro elemento que satisfaz a condição.

**Solução (Esqueleto)**:
```javascript
function exercicio96() {
  const usuarios = [{ id: 1, nome: \'Alice\' }, { id: 2, nome: \'Bob\' }];
  const usuarioEncontrado = usuarios.find(usuario => usuario.id === 2);
  console.log(usuarioEncontrado);
}

// exercicio96();
```

---

### Exercício 97: `findIndex()` para Encontrar Índice

**Descrição do Problema**: Dado um array de números `[10, 20, 30, 40]`, use `findIndex()` para encontrar o índice do número `30`. Imprima o índice.

**Entrada (Input)**:
```javascript
numeros = [10, 20, 30, 40]
```

**Saída Esperada (Output)**:
```
2
```

**Restrições/Observações**: Retorna -1 se o elemento não for encontrado.

**Solução (Esqueleto)**:
```javascript
function exercicio97() {
  const numeros = [10, 20, 30, 40];
  const indice = numeros.findIndex(num => num === 30);
  console.log(indice);
}

// exercicio97();
```

---

### Exercício 98: `some()` para Verificar Existência

**Descrição do Problema**: Dado um array de números `[1, 3, 5, 7]`, use `some()` para verificar se há algum número par. Imprima `true` ou `false`.

**Entrada (Input)**:
```javascript
numeros = [1, 3, 5, 7]
```

**Saída Esperada (Output)**:
```
false
```

**Restrições/Observações**: Retorna `true` se pelo menos um elemento satisfaz a condição.

**Solução (Esqueleto)**:
```javascript
function exercicio98() {
  const numeros = [1, 3, 5, 7];
  const temPar = numeros.some(num => num % 2 === 0);
  console.log(temPar);
}

// exercicio98();
```

---

### Exercício 99: `every()` para Verificar Todos

**Descrição do Problema**: Dado um array de números `[2, 4, 6, 8]`, use `every()` para verificar se todos os números são pares. Imprima `true` ou `false`.

**Entrada (Input)**:
```javascript
numeros = [2, 4, 6, 8]
```

**Saída Esperada (Output)**:
```
true
```

**Restrições/Observações**: Retorna `true` se todos os elementos satisfazem a condição.

**Solução (Esqueleto)**:
```javascript
function exercicio99() {
  const numeros = [2, 4, 6, 8];
  const todosPares = numeros.every(num => num % 2 === 0);
  console.log(todosPares);
}

// exercicio99();
```

---

### Exercício 100: `sort()` para Ordenar Strings

**Descrição do Problema**: Dado um array de strings `[\'banana\', \'maçã\', \'abacaxi\']`, use `sort()` para ordenar as strings em ordem alfabética. Imprima o array ordenado.

**Entrada (Input)**:
```javascript
frutas = [\'banana\', \'maçã\', \'abacaxi\']
```

**Saída Esperada (Output)**:
```
[\'abacaxi\', \'banana\', \'maçã\']
```

**Restrições/Observações**: `sort()` modifica o array original. Faça uma cópia se necessário.

**Solução (Esqueleto)**:
```javascript
function exercicio100() {
  const frutas = [\'banana\', \'maçã\', \'abacaxi\'];
  const frutasOrdenadas = [...frutas].sort(); // Cria uma cópia para não modificar o original
  console.log(frutasOrdenadas);
}

// exercicio100();
```

---

### Exercício 101: `sort()` para Ordenar Números (Crescente)

**Descrição do Problema**: Dado um array de números `[3, 1, 4, 1, 5, 9]`, use `sort()` com uma função de comparação para ordenar os números em ordem crescente. Imprima o array ordenado.

**Entrada (Input)**:
```javascript
numeros = [3, 1, 4, 1, 5, 9]
```

**Saída Esperada (Output)**:
```
[1, 1, 3, 4, 5, 9]
```

**Restrições/Observações**: A função de comparação é essencial para números.

**Solução (Esqueleto)**:
```javascript
function exercicio101() {
  const numeros = [3, 1, 4, 1, 5, 9];
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  console.log(numerosOrdenados);
}

// exercicio101();
```

---

### Exercício 102: `sort()` para Ordenar Números (Decrescente)

**Descrição do Problema**: Dado um array de números `[3, 1, 4, 1, 5, 9]`, use `sort()` com uma função de comparação para ordenar os números em ordem decrescente. Imprima o array ordenado.

**Entrada (Input)**:
```javascript
numeros = [3, 1, 4, 1, 5, 9]
```

**Saída Esperada (Output)**:
```
[9, 5, 4, 3, 1, 1]
```

**Restrições/Observações**: A função de comparação deve ser `(a, b) => b - a`.

**Solução (Esqueleto)**:
```javascript
function exercicio102() {
  const numeros = [3, 1, 4, 1, 5, 9];
  const numerosOrdenados = [...numeros].sort((a, b) => b - a);
  console.log(numerosOrdenados);
}

// exercicio102();
```

---

### Exercício 103: `map()` com Objetos

**Descrição do Problema**: Dado um array de objetos `produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }]`, use `map()` para criar um novo array contendo apenas os nomes dos produtos. Imprima o novo array.

**Entrada (Input)**:
```javascript
produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }]
```

**Saída Esperada (Output)**:
```
[\'Caneta\', \'Caderno\']
```

**Restrições/Observações**: Extraia a propriedade `nome` de cada objeto.

**Solução (Esqueleto)**:
```javascript
function exercicio103() {
  const produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }];
  const nomesProdutos = produtos.map(produto => produto.nome);
  console.log(nomesProdutos);
}

// exercicio103();
```

---

### Exercício 104: `filter()` com Objetos

**Descrição do Problema**: Dado um array de objetos `produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }, { id: 3, nome: \'Lápis\', preco: 1 }]`, use `filter()` para obter apenas os produtos com `preco` maior que `5`. Imprima o novo array.

**Entrada (Input)**:
```javascript
produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }, { id: 3, nome: \'Lápis\', preco: 1 }]
```

**Saída Esperada (Output)**:
```javascript
[{ id: 2, nome: \'Caderno\', preco: 15 }]
```

**Restrições/Observações**: Filtre com base na propriedade `preco`.

**Solução (Esqueleto)**:
```javascript
function exercicio104() {
  const produtos = [{ id: 1, nome: \'Caneta\', preco: 2 }, { id: 2, nome: \'Caderno\', preco: 15 }, { id: 3, nome: \'Lápis\', preco: 1 }];
  const produtosCaros = produtos.filter(produto => produto.preco > 5);
  console.log(produtosCaros);
}

// exercicio104();
```

---

### Exercício 105: `reduce()` para Contar Ocorrências em Array de Objetos

**Descrição do Problema**: Dado um array de objetos `pedidos = [{ status: \'pendente\' }, { status: \'entregue\' }, { status: \'pendente\' }]`, use `reduce()` para contar quantos pedidos estão com `status: \'pendente\'`. Imprima a contagem.

**Entrada (Input)**:
```javascript
pedidos = [{ status: \'pendente\' }, { status: \'entregue\' }, { status: \'pendente\' }]
```

**Saída Esperada (Output)**:
```
2
```

**Restrições/Observações**: O acumulador deve ser um número.

**Solução (Esqueleto)**:
```javascript
function exercicio105() {
  const pedidos = [{ status: \'pendente\' }, { status: \'entregue\' }, { status: \'pendente\' }];
  const pendentes = pedidos.reduce((count, pedido) => {
    return pedido.status === \'pendente\' ? count + 1 : count;
  }, 0);
  console.log(pendentes);
}

// exercicio105();
```

---

### Exercício 106: `reduce()` para Agrupar Objetos por Propriedade

**Descrição do Problema**: Dado um array de objetos `pessoas = [{ nome: \'Ana\', idade: 30 }, { nome: \'João\', idade: 25 }, { nome: \'Maria\', idade: 30 }]`, use `reduce()` para agrupar as pessoas por idade. O resultado deve ser um objeto onde as chaves são as idades e os valores são arrays de pessoas com aquela idade.

**Entrada (Input)**:
```javascript
pessoas = [{ nome: \'Ana\', idade: 30 }, { nome: \'João\', idade: 25 }, { nome: \'Maria\', idade: 30 }]
```

**Saída Esperada (Output)**:
```javascript
{
  \'25\': [ { nome: \'João\', idade: 25 } ],
  \'30\': [ { nome: \'Ana\', idade: 30 }, { nome: \'Maria\', idade: 30 } ]
}
```

**Restrições/Observações**: O acumulador deve ser um objeto.

**Solução (Esqueleto)**:
```javascript
function exercicio106() {
  const pessoas = [{ nome: \'Ana\', idade: 30 }, { nome: \'João\', idade: 25 }, { nome: \'Maria\', idade: 30 }];
  const pessoasPorIdade = pessoas.reduce((acc, pessoa) => {
    const idade = pessoa.idade;
    if (!acc[idade]) {
      acc[idade] = [];
    }
    acc[idade].push(pessoa);
    return acc;
  }, {});
  console.log(pessoasPorIdade);
}

// exercicio106();
```

---

### Exercício 107: Funções de Alta Ordem - `map()` e `filter()` Encadeados

**Descrição do Problema**: Dado um array de números `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, primeiro filtre os números pares e depois dobre cada um deles. Imprima o array resultante.

**Entrada (Input)**:
```javascript
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Saída Esperada (Output)**:
```
[4, 8, 12, 16, 20]
```

**Restrições/Observações**: Encadeie os métodos `filter()` e `map()`.

**Solução (Esqueleto)**:
```javascript
function exercicio107() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = numeros.filter(num => num % 2 === 0).map(num => num * 2);
  console.log(resultado);
}

// exercicio107();
```

---

### Exercício 108: Funções de Alta Ordem - `map()` e `reduce()` Encadeados

**Descrição do Problema**: Dado um array de objetos `itens = [{ valor: 10, quantidade: 2 }, { valor: 5, quantidade: 3 }]`, calcule o valor total de todos os itens (valor * quantidade) usando `map()` e `reduce()`. Imprima o total.

**Entrada (Input)**:
```javascript
itens = [{ valor: 10, quantidade: 2 }, { valor: 5, quantidade: 3 }]
```

**Saída Esperada (Output)**:
```
35 // (10*2 + 5*3 = 20 + 15 = 35)
```

**Restrições/Observações**: Primeiro mapeie para os totais de cada item, depois reduza para a soma.

**Solução (Esqueleto)**:
```javascript
function exercicio108() {
  const itens = [{ valor: 10, quantidade: 2 }, { valor: 5, quantidade: 3 }];
  const total = itens
    .map(item => item.valor * item.quantidade)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(total);
}

// exercicio108();
```

---

### Exercício 109: Closures Básicas

**Descrição do Problema**: Crie uma função `criarContador()` que retorne outra função. A função interna deve incrementar um contador privado e retorná-lo a cada chamada. Demonstre o uso criando dois contadores independentes.

**Entrada (Input)**:
```javascript
contador1 = criarContador()
contador2 = criarContador()
contador1()
contador1()
contador2()
```

**Saída Esperada (Output)**:
```
1
2
1
```

**Restrições/Observações**: O contador deve ser encapsulado e não acessível diretamente.

**Solução (Esqueleto)**:
```javascript
function exercicio109() {
  function criarContador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }

  const contador1 = criarContador();
  const contador2 = criarContador();

  console.log(contador1()); // 1
  console.log(contador1()); // 2
  console.log(contador2()); // 1
}

// exercicio109();
```

---

### Exercício 110: Currying de Funções

**Descrição do Problema**: Crie uma função `multiplicar(a)` que retorne uma nova  que, por sua vez, retorne `a * b`. Demonstre o uso criando uma função `dobrar` e `triplicar` a partir dela.

**Entrada (Input)**:
```javascript
dobrar = multiplicar(2)
triplicar = multiplicar(3)
dobrar(5)
triplicar(5)
```

**Saída Esperada (Output)**:
```
10
15
```

**Restrições/Observações**: A função deve ser curried.

**Solução (Esqueleto)**:
```javascript
function exercicio110() {
  function multiplicar(a) {
    {
      return a * b;
    };
  }

  const dobrar = multiplicar(2);
  const triplicar = multiplicar(3);

  console.log(dobrar(5));
  console.log(triplicar(5));
}

// exercicio110();
```

---

### Exercício 111: Recursão - Fatorial

**Descrição do Problema**: Crie uma função recursiva `fatorial(n)` que calcule o fatorial de um número `n`.

**Entrada (Input)**:
```javascript
fatorial(5)
```

**Saída Esperada (Output)**:
```
120
```

**Restrições/Observações**: O caso base deve ser `n === 0` retornando `1`.

**Solução (Esqueleto)**:
```javascript
function exercicio111(n) {
  if (n === 0) {
    return 1;
  }
  return n * exercicio111(n - 1);
}

// console.log(exercicio111(5));
// console.log(exercicio111(0));
// console.log(exercicio111(3));
```

---

### Exercício 112: Recursão - Soma de Array

**Descrição do Problema**: Crie uma função recursiva `somaArray(arr)` que calcule a soma de todos os elementos de um array de números.

**Entrada (Input)**:
```javascript
somaArray([1, 2, 3, 4, 5])
```

**Saída Esperada (Output)**:
```
15
```

**Restrições/Observações**: O caso base deve ser um array vazio retornando `0`.

**Solução (Esqueleto)**:
```javascript
function exercicio112(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + exercicio112(arr.slice(1));
}

// console.log(exercicio112([1, 2, 3, 4, 5]));
// console.log(exercicio112([]));
// console.log(exercicio112([10]));
```

---

### Exercício 113: Callback Simples

**Descrição do Problema**: Crie uma função `executarDepois(callback)` que recebe uma função de callback e a executa após 2 segundos. Demonstre com um `console.log`.

**Entrada (Input)**:
```javascript
executarDepois(() => console.log(\'Executado após 2 segundos\'))
```

**Saída Esperada (Output)**:
```
// (Após 2 segundos)
Executado após 2 segundos
```

**Restrições/Observações**: Utilize `setTimeout()`.

**Solução (Esqueleto)**:
```javascript
function exercicio113() {
  function executarDepois(callback) {
    setTimeout(callback, 2000);
  }

  executarDepois(() => console.log(\'Executado após 2 segundos\'));
}

// exercicio113();
```

---

### Exercício 114: Callback com Parâmetros

**Descrição do Problema**: Crie uma função `processarDados(dados, callback)` que recebe um array de `dados` e uma função de `callback`. A função deve processar os dados (ex: dobrar cada número) e passar o resultado para o callback. Demonstre.

**Entrada (Input)**:
```javascript
processarDados([1, 2, 3], (resultado) => console.log(resultado))
```

**Saída Esperada (Output)**:
```
[2, 4, 6]
```

**Restrições/Observações**: O callback deve receber o resultado do processamento.

**Solução (Esqueleto)**:
```javascript
function exercicio114() {
  function processarDados(dados, callback) {
    const dadosProcessados = dados.map(item => item * 2);
    callback(dadosProcessados);
  }

  processarDados([1, 2, 3], (resultado) => console.log(resultado));
}

// exercicio114();
```

---

### Exercício 115: Criar e Formatar Objeto `Date`

**Descrição do Problema**: Crie um objeto `Date` para a data atual e imprima-o no formato `DD/MM/YYYY HH:MM:SS`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
// Exemplo: 05/10/2025 14:30:00
```

**Restrições/Observações**: Utilize métodos do objeto `Date` para obter dia, mês, ano, hora, minuto, segundo.

**Solução (Esqueleto)**:
```javascript
function exercicio115() {
  const dataAtual = new Date();

  const dia = String(dataAtual.getDate()).padStart(2, \'0\');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, \'0\'); // Mês é 0-indexado
  const ano = dataAtual.getFullYear();
  const horas = String(dataAtual.getHours()).padStart(2, \'0\');
  const minutos = String(dataAtual.getMinutes()).padStart(2, \'0\');
  const segundos = String(dataAtual.getSeconds()).padStart(2, \'0\');

  const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  console.log(dataFormatada);
}

// exercicio115();
```

---

### Exercício 116: Calcular Diferença entre Datas

**Descrição do Problema**: Crie duas datas: `data1 = new Date(\'2025-01-01\')` e `data2 = new Date(\'2025-01-31\')`. Calcule a diferença em dias entre elas e imprima o resultado.

**Entrada (Input)**:
```javascript
data1 = new Date(\'2025-01-01\')
data2 = new Date(\'2025-01-31\')
```

**Saída Esperada (Output)**:
```
Diferença em dias: 30
```

**Restrições/Observações**: A diferença de tempo é em milissegundos. 1 dia = 24 * 60 * 60 * 1000 milissegundos.

**Solução (Esqueleto)**:
```javascript
function exercicio116() {
  const data1 = new Date(\'2025-01-01\');
  const data2 = new Date(\'2025-01-31\');

  const diferencaMs = data2.getTime() - data1.getTime();
  const diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);

  console.log(\'Diferença em dias: \' + diferencaDias);
}

// exercicio116();
```

---

### Exercício 117: Adicionar Dias a uma Data

**Descrição do Problema**: Dada uma data `dataBase = new Date(\'2025-01-15\')`, adicione 10 dias a ela e imprima a nova data formatada como `YYYY-MM-DD`.

**Entrada (Input)**:
```javascript
dataBase = new Date(\'2025-01-15\')
diasParaAdicionar = 10
```

**Saída Esperada (Output)**:
```
Nova data: 2025-01-25
```

**Restrições/Observações**: Utilize `setDate()`.

**Solução (Esqueleto)**:
```javascript
function exercicio117() {
  const dataBase = new Date(\'2025-01-15\');
  const diasParaAdicionar = 10;

  dataBase.setDate(dataBase.getDate() + diasParaAdicionar);

  const ano = dataBase.getFullYear();
  const mes = String(dataBase.getMonth() + 1).padStart(2, \'0\');
  const dia = String(dataBase.getDate()).padStart(2, \'0\');

  console.log(`Nova data: ${ano}-${mes}-${dia}`);
}

// exercicio117();
```

---

### Exercício 118: Expressão Regular - Validar Email Simples

**Descrição do Problema**: Crie uma função `validarEmail(email)` que use uma expressão regular para verificar se uma string é um email em um formato básico (ex: `nome@dominio.com`). Retorne `true` ou `false`.

**Entrada (Input)**:
```javascript
email1 = \'teste@example.com\'
email2 = \'teste@example\'
```

**Saída Esperada (Output)**:
```
true (para email1)
false (para email2)
```

**Restrições/Observações**: A regex não precisa ser exaustiva, apenas cobrir o formato comum.

**Solução (Esqueleto)**:
```javascript
function exercicio118(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

// console.log(exercicio118(\'teste@example.com\'));
// console.log(exercicio118(\'teste@example\'));
// console.log(exercicio118(\'email.valido@sub.dominio.co.uk\'));
```

---

### Exercício 119: Expressão Regular - Extrair Números

**Descrição do Problema**: Crie uma função `extrairNumeros(texto)` que use uma expressão regular para extrair todos os números de uma string e retorná-los em um array de strings.

**Entrada (Input)**:
```javascript
texto = \'O preço é R$ 123.45 e o código é ABC-678.\'
```

**Saída Esperada (Output)**:
```
[\'123\', \'45\', \'678\']
```

**Restrições/Observações**: Utilize `match()` com a flag global (`g`).

**Solução (Esqueleto)**:
```javascript
function exercicio119(texto) {
  const regex = /\d+/g;
  return texto.match(regex) || [];
}

// console.log(exercicio119(\'O preço é R$ 123.45 e o código é ABC-678.\'));
// console.log(exercicio119(\'Não há números aqui.\'));
```

---

### Exercício 120: Expressão Regular - Substituir Padrões

**Descrição do Problema**: Crie uma função `anonimizarTelefone(texto)` que substitua todos os números de telefone no formato `(XX) XXXX-XXXX` por `(XX) ****-XXXX`.

**Entrada (Input)**:
```javascript
texto = \'Meu telefone é (11) 9876-5432 e o do trabalho é (21) 1234-5678.\'
```

**Saída Esperada (Output)**:
```
Meu telefone é (11) ****-5432 e o do trabalho é (21) ****-5678.
```

**Restrições/Observações**: Utilize `replace()` com expressão regular e grupos de captura.

**Solução (Esqueleto)**:
```javascript
function exercicio120(texto) {
  const regex = /(\(\d{2}\))\s*\d{4}-(\d{4})/g;
  return texto.replace(regex, \'$1 ****-$2\');
}

// console.log(exercicio120(\'Meu telefone é (11) 9876-5432 e o do trabalho é (21) 1234-5678.\'));
```

---

### Exercício 121: Tratamento de Erros com `try...catch`

**Descrição do Problema**: Crie uma função `dividir(a, b)` que retorne a divisão de `a` por `b`. Se `b` for `0`, lance um erro. Use `try...catch` para chamar a função e lidar com o erro, imprimindo uma mensagem apropriada.

**Entrada (Input)**:
```javascript
dividir(10, 2)
dividir(10, 0)
```

**Saída Esperada (Output)**:
```
Resultado da divisão: 5
Erro: Divisão por zero não permitida.
```

**Restrições/Observações**: O erro deve ser um `Error` com uma mensagem clara.

**Solução (Esqueleto)**:
```javascript
function exercicio121() {
  function dividir(a, b) {
    if (b === 0) {
      throw new Error(\'Divisão por zero não permitida.\');
    }
    return a / b;
  }

  try {
    console.log(\'Resultado da divisão: \' + dividir(10, 2));
  } catch (error) {
    console.log(\'Erro: \' + error.message);
  }

  try {
    console.log(\'Resultado da divisão: \' + dividir(10, 0));
  } catch (error) {
    console.log(\'Erro: \' + error.message);
  }
}

// exercicio121();
```

---

### Exercício 122: `try...catch...finally`

**Descrição do Problema**: Modifique o exercício anterior para incluir um bloco `finally` que sempre imprima a mensagem "Operação de divisão finalizada.", independentemente de ter ocorrido um erro ou não.

**Entrada (Input)**:
```javascript
dividir(10, 2)
dividir(10, 0)
```

**Saída Esperada (Output)**:
```
Resultado da divisão: 5
Operação de divisão finalizada.
Erro: Divisão por zero não permitida.
Operação de divisão finalizada.
```

**Restrições/Observações**: O bloco `finally` deve ser executado sempre.

**Solução (Esqueleto)**:
```javascript
function exercicio122() {
  function dividir(a, b) {
    if (b === 0) {
      throw new Error(\'Divisão por zero não permitida.\');
    }
    return a / b;
  }

  try {
    console.log(\'Resultado da divisão: \' + dividir(10, 2));
  } catch (error) {
    console.log(\'Erro: \' + error.message);
  } finally {
    console.log(\'Operação de divisão finalizada.\');
  }

  try {
    console.log(\'Resultado da divisão: \' + dividir(10, 0));
  } catch (error) {
    console.log(\'Erro: \' + error.message);
  } finally {
    console.log(\'Operação de divisão finalizada.\');
  }
}

// exercicio122();
```

---

### Exercício 123: Módulos CommonJS - Exportar Função

**Descrição do Problema**: Crie um arquivo `matematica.js` que exporte uma função `somar(a, b)`. Em um arquivo principal, importe e use essa função.

**Entrada (Input)**:
(Conteúdo de `matematica.js` e do arquivo principal)

**Saída Esperada (Output)**:
```
Soma: 7
```

**Restrições/Observações**: Utilize `module.exports` e `require()`.

**Solução (Esqueleto)**:
```javascript
// matematica.js
/*
function somar(a, b) {
  return a + b;
}
module.exports = somar;
*/

// Arquivo principal (ex: main.js)
/*
const somar = require(\'./matematica\');
console.log(\'Soma: \' + somar(3, 4));
*/

// Para simular no ambiente de exercício:
function exercicio123() {
  // Simulação do conteúdo de matematica.js
  const matematicaModule = {
    exports: null
  };
  (function(module, exports) {
    function somar(a, b) {
      return a + b;
    }
    module.exports = somar;
  })(matematicaModule, matematicaModule.exports);

  const somar = matematicaModule.exports;
  console.log(\'Soma: \' + somar(3, 4));
}

// exercicio123();
```

---

### Exercício 124: Módulos CommonJS - Exportar Objeto

**Descrição do Problema**: Crie um arquivo `utilidades.js` que exporte um objeto com duas funções: `multiplicar(a, b)` e `dividir(a, b)`. Em um arquivo principal, importe e use essas funções.

**Entrada (Input)**:
(Conteúdo de `utilidades.js` e do arquivo principal)

**Saída Esperada (Output)**:
```
Multiplicação: 20
Divisão: 5
```

**Restrições/Observações**: Utilize `module.exports = { ... }`.

**Solução (Esqueleto)**:
```javascript
// utilidades.js
/*
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
module.exports = { multiplicar, dividir };
*/

// Arquivo principal (ex: main.js)
/*
const { multiplicar, dividir } = require(\'./utilidades\');
console.log(\'Multiplicação: \' + multiplicar(4, 5));
console.log(\'Divisão: \' + dividir(25, 5));
*/

// Para simular no ambiente de exercício:
function exercicio124() {
  // Simulação do conteúdo de utilidades.js
  const utilidadesModule = {
    exports: null
  };
  (function(module, exports) {
    function multiplicar(a, b) {
      return a * b;
    }
    function dividir(a, b) {
      return a / b;
    }
    module.exports = { multiplicar, dividir };
  })(utilidadesModule, utilidadesModule.exports);

  const { multiplicar, dividir } = utilidadesModule.exports;
  console.log(\'Multiplicação: \' + multiplicar(4, 5));
  console.log(\'Divisão: \' + dividir(25, 5));
}

// exercicio124();
```

---

### Exercício 125: Módulos ES Modules - Exportar e Importar (Básico)

**Descrição do Problema**: Crie um arquivo `saudacao.mjs` que exporte uma função `dizerOla(nome)`. Em um arquivo principal `app.mjs`, importe e use essa função. (Assuma que o ambiente Node.js está configurado para ES Modules).

**Entrada (Input)**:
(Conteúdo de `saudacao.mjs` e `app.mjs`)

**Saída Esperada (Output)**:
```
Olá, Mundo!
```

**Restrições/Observações**: Utilize `export` e `import`.

**Solução (Esqueleto)**:
```javascript
// saudacao.mjs
/*
export function dizerOla(nome) {
  return `Olá, ${nome}!`;
}
*/

// app.mjs
/*
import { dizerOla } from \'./saudacao.mjs\';
console.log(dizerOla(\'Mundo\'));
*/

// Para simular no ambiente de exercício (não é possível simular import/export diretamente aqui):
function exercicio125() {
  console.log(\'Este exercício requer a execução em arquivos .mjs separados para demonstrar ES Modules.\');
  console.log(\'Exemplo de uso:\');
  console.log(\'// saudacao.mjs\');
  console.log(\'export function dizerOla(nome) { return `Olá, ${nome}!`; }\');
  console.log(\'// app.mjs\');
  console.log(\'import { dizerOla } from \'./saudacao.mjs\';\');
  console.log(\'console.log(dizerOla(\'Mundo\'));\');
}

// exercicio125();
```

---

### Exercício 126: Algoritmo de Busca Linear

**Descrição do Problema**: Crie uma função `buscaLinear(arr, alvo)` que receba um array e um valor `alvo`. A função deve retornar o índice da primeira ocorrência do `alvo` no array, ou `-1` se não for encontrado.

**Entrada (Input)**:
```javascript
arr = [5, 2, 8, 12, 3]
alvo1 = 8
alvo2 = 10
```

**Saída Esperada (Output)**:
```
2
-1
```

**Restrições/Observações**: Implemente a busca linear manualmente (sem `indexOf`).

**Solução (Esqueleto)**:
```javascript
function exercicio126(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      return i;
    }
  }
  return -1;
}

// console.log(exercicio126([5, 2, 8, 12, 3], 8));
// console.log(exercicio126([5, 2, 8, 12, 3], 10));
```

---

### Exercício 127: Algoritmo de Busca Binária (Array Ordenado)

**Descrição do Problema**: Crie uma função `buscaBinaria(arr, alvo)` que receba um array **ordenado** e um valor `alvo`. A função deve retornar o índice do `alvo` no array, ou `-1` se não for encontrado.

**Entrada (Input)**:
```javascript
arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
alvo1 = 23
alvo2 = 10
```

**Saída Esperada (Output)**:
```
5
-1
```

**Restrições/Observações**: O array de entrada deve estar ordenado. Implemente a busca binária.

**Solução (Esqueleto)**:
```javascript
function exercicio127(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === alvo) {
      return meio;
    } else if (arr[meio] < alvo) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  return -1;
}

// console.log(exercicio127([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
// console.log(exercicio127([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 10));
```

---

### Exercício 128: Algoritmo Bubble Sort

**Descrição do Problema**: Crie uma função `bubbleSort(arr)` que receba um array de números e o ordene em ordem crescente usando o algoritmo Bubble Sort. Retorne o array ordenado.

**Entrada (Input)**:
```javascript
arr = [64, 34, 25, 12, 22, 11, 90]
```

**Saída Esperada (Output)**:
```
[11, 12, 22, 25, 34, 64, 90]
```

**Restrições/Observações**: Implemente o Bubble Sort.

**Solução (Esqueleto)**:
```javascript
function exercicio128(arr) {
  const n = arr.length;
  const novoArr = [...arr]; // Criar uma cópia para não modificar o original

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (novoArr[j] > novoArr[j + 1]) {
        // Troca os elementos
        [novoArr[j], novoArr[j + 1]] = [novoArr[j + 1], novoArr[j]];
      }
    }
  }
  return novoArr;
}

// console.log(exercicio128([64, 34, 25, 12, 22, 11, 90]));
```

---

### Exercício 129: Algoritmo Selection Sort

**Descrição do Problema**: Crie uma função `selectionSort(arr)` que receba um array de números e o ordene em ordem crescente usando o algoritmo Selection Sort. Retorne o array ordenado.

**Entrada (Input)**:
```javascript
arr = [64, 25, 12, 22, 11]
```

**Saída Esperada (Output)**:
```
[11, 12, 22, 25, 64]
```

**Restrições/Observações**: Implemente o Selection Sort.

**Solução (Esqueleto)**:
```javascript
function exercicio129(arr) {
  const n = arr.length;
  const novoArr = [...arr]; // Criar uma cópia para não modificar o original

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (novoArr[j] < novoArr[minIndex]) {
        minIndex = j;
      }
    }
    // Troca o elemento mínimo encontrado com o primeiro elemento não ordenado
    if (minIndex !== i) {
      [novoArr[i], novoArr[minIndex]] = [novoArr[minIndex], novoArr[i]];
    }
  }
  return novoArr;
}

// console.log(exercicio129([64, 25, 12, 22, 11]));
```

---

### Exercício 130: Leitura de Arquivo de Texto (Síncrona)

**Descrição do Problema**: Crie um arquivo `dados.txt` com algum texto. Em seguida, use o módulo `fs` do Node.js para ler o conteúdo deste arquivo de forma síncrona e imprimi-lo no console.

**Entrada (Input)**:
(Conteúdo do arquivo `dados.txt`)
```
// dados.txt
Olá, este é um arquivo de teste.
```

**Saída Esperada (Output)**:
```
Conteúdo do arquivo:
Olá, este é um arquivo de teste.
```

**Restrições/Observações**: Utilize `fs.readFileSync()`. O arquivo `dados.txt` deve ser criado previamente.

**Solução (Esqueleto)**:
```javascript
// Para simular no ambiente de exercício, primeiro crie o arquivo:
// shell.exec(\'echo "Olá, este é um arquivo de teste." > dados.txt\');

function exercicio130() {
  const fs = require(\'fs\');
  try {
    const data = fs.readFileSync(\'dados.txt\', \'utf8\');
    console.log(\'Conteúdo do arquivo:\n\' + data);
  } catch (err) {
    console.error(\'Erro ao ler o arquivo:\', err);
  }
}

// exercicio130();
```

---

### Exercício 131: Escrita de Arquivo de Texto (Síncrona)

**Descrição do Problema**: Use o módulo `fs` do Node.js para escrever uma string em um arquivo `saida.txt` de forma síncrona. Após a escrita, imprima uma mensagem de sucesso.

**Entrada (Input)**:
```javascript
conteudo = \'Este é o conteúdo a ser escrito no arquivo.\'
```

**Saída Esperada (Output)**:
```
Arquivo saida.txt escrito com sucesso!
```

**Restrições/Observações**: Utilize `fs.writeFileSync()`.

**Solução (Esqueleto)**:
```javascript
function exercicio131() {
  const fs = require(\'fs\');
  const conteudo = \'Este é o conteúdo a ser escrito no arquivo.\';
  try {
    fs.writeFileSync(\'saida.txt\', conteudo, \'utf8\');
    console.log(\'Arquivo saida.txt escrito com sucesso!\');
  } catch (err) {
    console.error(\'Erro ao escrever no arquivo:\', err);
  }
}

// exercicio131();
```

---

### Exercício 132: Leitura de Arquivo de Texto (Assíncrona)

**Descrição do Problema**: Crie um arquivo `async_dados.txt` com algum texto. Em seguida, use o módulo `fs` do Node.js para ler o conteúdo deste arquivo de forma assíncrona e imprimi-lo no console.

**Entrada (Input)**:
(Conteúdo do arquivo `async_dados.txt`)
```
// async_dados.txt
Conteúdo assíncrono.
```

**Saída Esperada (Output)**:
```
Conteúdo do arquivo assíncrono:
Conteúdo assíncrono.
```

**Restrições/Observações**: Utilize `fs.readFile()` com callback.

**Solução (Esqueleto)**:
```javascript
// Para simular no ambiente de exercício, primeiro crie o arquivo:
// shell.exec(\'echo "Conteúdo assíncrono." > async_dados.txt\');

function exercicio132() {
  const fs = require(\'fs\');
  fs.readFile(\'async_dados.txt\', \'utf8\', (err, data) => {
    if (err) {
      console.error(\'Erro ao ler o arquivo assíncrono:\', err);
      return;
    }
    console.log(\'Conteúdo do arquivo assíncrono:\n\' + data);
  });
}

// exercicio132();
```

---

### Exercício 133: Escrita de Arquivo de Texto (Assíncrona)

**Descrição do Problema**: Use o módulo `fs` do Node.js para escrever uma string em um arquivo `async_saida.txt` de forma assíncrona. Após a escrita, imprima uma mensagem de sucesso.

**Entrada (Input)**:
```javascript
conteudo = \'Este é o conteúdo assíncrono a ser escrito.\'
```

**Saída Esperada (Output)**:
```
Arquivo async_saida.txt escrito com sucesso!
```

**Restrições/Observações**: Utilize `fs.writeFile()` com callback.

**Solução (Esqueleto)**:
```javascript
function exercicio133() {
  const fs = require(\'fs\');
  const conteudo = \'Este é o conteúdo assíncrono a ser escrito.\';
  fs.writeFile(\'async_saida.txt\', conteudo, \'utf8\', (err) => {
    if (err) {
      console.error(\'Erro ao escrever no arquivo assíncrono:\', err);
      return;
    }
    console.log(\'Arquivo async_saida.txt escrito com sucesso!\');
  });
}

// exercicio133();
```

---

### Exercício 134: Promises - Básico

**Descrição do Problema**: Crie uma função `simularOperacaoAssincrona(sucesso)` que retorne uma Promise. Se `sucesso` for `true`, a Promise deve resolver com "Operação concluída!". Se `false`, deve rejeitar com "Operação falhou!". Demonstre o uso com `.then()` e `.catch()`.

**Entrada (Input)**:
```javascript
simularOperacaoAssincrona(true)
simularOperacaoAssincrona(false)
```

**Saída Esperada (Output)**:
```
Sucesso: Operação concluída!
Erro: Operação falhou!
```

**Restrições/Observações**: A Promise deve resolver/rejeitar após um pequeno atraso (ex: 100ms) para simular assincronicidade.

**Solução (Esqueleto)**:
```javascript
function exercicio134() {
  function simularOperacaoAssincrona(sucesso) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sucesso) {
          resolve(\'Operação concluída!\');
        } else {
          reject(\'Operação falhou!\');
        }
      }, 100);
    });
  }

  simularOperacaoAssincrona(true)
    .then(resultado => console.log(\'Sucesso: \' + resultado))
    .catch(erro => console.log(\'Erro: \' + erro));

  simularOperacaoAssincrona(false)
    .then(resultado => console.log(\'Sucesso: \' + resultado))
    .catch(erro => console.log(\'Erro: \' + erro));
}

// exercicio134();
```

---

### Exercício 135: `async/await` - Básico

**Descrição do Problema**: Converta a função `simularOperacaoAssincrona` do exercício anterior para usar `async/await`. Crie uma função `executarOperacao()` que chame a função assíncrona e lide com o sucesso e o erro.

**Entrada (Input)**:
```javascript
executarOperacao(true)
executarOperacao(false)
```

**Saída Esperada (Output)**:
```
Sucesso: Operação concluída!
Erro: Operação falhou!
```

**Restrições/Observações**: A função `executarOperacao` deve ser `async` e usar `await`.

**Solução (Esqueleto)**:
```javascript
function exercicio135() {
  function simularOperacaoAssincrona(sucesso) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sucesso) {
          resolve(\'Operação concluída!\');
        } else {
          reject(\'Operação falhou!\');
        }
      }, 100);
    });
  }

  async function executarOperacao(sucesso) {
    try {
      const resultado = await simularOperacaoAssincrona(sucesso);
      console.log(\'Sucesso: \' + resultado);
    } catch (erro) {
      console.log(\'Erro: \' + erro);
    }
  }

  executarOperacao(true);
  executarOperacao(false);
}

// exercicio135();
```

---

### Exercício 136: `Promise.all()`

**Descrição do Problema**: Crie três Promises que resolvem com valores diferentes após tempos diferentes (ex: 100ms, 200ms, 50ms). Use `Promise.all()` para esperar que todas resolvam e imprima um array com seus resultados.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Todos resolvidos: [ \'Primeiro\', \'Segundo\', \'Terceiro\' ]
```

**Restrições/Observações**: Demonstre o comportamento de `Promise.all()`.

**Solução (Esqueleto)**:
```javascript
function exercicio136() {
  const p1 = new Promise(resolve => setTimeout(() => resolve(\'Primeiro\'), 100));
  const p2 = new Promise(resolve => setTimeout(() => resolve(\'Segundo\'), 200));
  const p3 = new Promise(resolve => setTimeout(() => resolve(\'Terceiro\'), 50));

  Promise.all([p1, p2, p3])
    .then(resultados => console.log(\'Todos resolvidos: \' + resultados))
    .catch(erro => console.log(\'Erro: \' + erro));
}

// exercicio136();
```

---

### Exercício 137: `Promise.race()`

**Descrição do Problema**: Crie três Promises que resolvem ou rejeitam com valores diferentes após tempos diferentes. Use `Promise.race()` para obter o resultado da primeira Promise a resolver ou rejeitar. Imprima o resultado.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Primeiro a terminar: Terceiro
```

**Restrições/Observações**: Demonstre o comportamento de `Promise.race()`.

**Solução (Esqueleto)**:
```javascript
function exercicio137() {
  const p1 = new Promise(resolve => setTimeout(() => resolve(\'Primeiro\'), 100));
  const p2 = new Promise(resolve => setTimeout(() => resolve(\'Segundo\'), 200));
  const p3 = new Promise(resolve => setTimeout(() => resolve(\'Terceiro\'), 50));

  Promise.race([p1, p2, p3])
    .then(resultado => console.log(\'Primeiro a terminar: \' + resultado))
    .catch(erro => console.log(\'Erro: \' + erro));
}

// exercicio137();
```

---

### Exercício 138: Classes - Criação Básica

**Descrição do Problema**: Crie uma classe `Animal` com um construtor que receba `nome` e `especie`. Adicione um método `apresentar()` que imprima uma saudação. Crie uma instância e chame o método.

**Entrada (Input)**:
```javascript
meuAnimal = new Animal(\'Rex\', \'Cachorro\')
meuAnimal.apresentar()
```

**Saída Esperada (Output)**:
```
Olá, meu nome é Rex e eu sou um Cachorro.
```

**Restrições/Observações**: Utilize a sintaxe `class`.

**Solução (Esqueleto)**:
```javascript
function exercicio138() {
  class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }

    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.especie}.`);
    }
  }

  const meuAnimal = new Animal(\'Rex\', \'Cachorro\');
  meuAnimal.apresentar();
}

// exercicio138();
```

---

### Exercício 139: Classes - Herança

**Descrição do Problema**: Crie uma classe `Cachorro` que herde de `Animal`. Adicione um construtor que também receba `raca` e um método `latir()` que imprima "Au au!". Crie uma instância de `Cachorro` e chame `apresentar()` e `latir()`.

**Entrada (Input)**:
```javascript
meuCachorro = new Cachorro(\'Bob\', \'Cachorro\', \'Golden Retriever\')
meuCachorro.apresentar()
meuCachorro.latir()
```

**Saída Esperada (Output)**:
```
Olá, meu nome é Bob e eu sou um Cachorro.
Au au!
```

**Restrições/Observações**: Utilize `extends` e `super()`.

**Solução (Esqueleto)**:
```javascript
function exercicio139() {
  class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }

    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.especie}.`);
    }
  }

  class Cachorro extends Animal {
    constructor(nome, especie, raca) {
      super(nome, especie);
      this.raca = raca;
    }

    latir() {
      console.log(\'Au au!\');
    }
  }

  const meuCachorro = new Cachorro(\'Bob\', \'Cachorro\', \'Golden Retriever\');
  meuCachorro.apresentar();
  meuCachorro.latir();
}

// exercicio139();
```

---

### Exercício 140: Classes - Getters e Setters

**Descrição do Problema**: Crie uma classe `Pessoa` com um construtor que receba `nome`. Adicione um getter e um setter para a propriedade `idade`. O setter deve validar que a idade é um número positivo. Demonstre o uso.

**Entrada (Input)**:
```javascript
joao = new Pessoa(\'João\')
joao.idade = 25
joao.idade = -5
```

**Saída Esperada (Output)**:
```
Idade definida: 25
Idade inválida: -5
Idade atual: 25
```

**Restrições/Observações**: Utilize `get` e `set`.

**Solução (Esqueleto)**:
```javascript
function exercicio140() {
  class Pessoa {
    constructor(nome) {
      this.nome = nome;
      this._idade = 0; // Convenção para propriedade interna
    }

    get idade() {
      return this._idade;
    }

    set idade(novaIdade) {
      if (novaIdade >= 0) {
        this._idade = novaIdade;
        console.log(`Idade definida: ${novaIdade}`);
      } else {
        console.log(`Idade inválida: ${novaIdade}`);
      }
    }
  }

  const joao = new Pessoa(\'João\');
  joao.idade = 25;
  joao.idade = -5;
  console.log(`Idade atual: ${joao.idade}`);
}

// exercicio140();
```

---

### Exercício 141: Pilha (Stack) - Implementação Básica

**Descrição do Problema**: Implemente uma classe `Pilha` com os métodos `push(elemento)`, `pop()` e `peek()`. `push` adiciona um elemento, `pop` remove e retorna o topo, `peek` retorna o topo sem remover.

**Entrada (Input)**:
```javascript
pilha = new Pilha()
pilha.push(10)
pilha.push(20)
```

**Saída Esperada (Output)**:
```
Topo: 20
Removido: 20
Topo: 10
```

**Restrições/Observações**: Utilize um array interno para armazenar os elementos.

**Solução (Esqueleto)**:
```javascript
function exercicio141() {
  class Pilha {
    constructor() {
      this.elementos = [];
    }

    push(elemento) {
      this.elementos.push(elemento);
    }

    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elementos.pop();
    }

    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elementos[this.elementos.length - 1];
    }

    isEmpty() {
      return this.elementos.length === 0;
    }

    size() {
      return this.elementos.length;
    }
  }

  const minhaPilha = new Pilha();
  minhaPilha.push(10);
  minhaPilha.push(20);
  console.log(\'Topo: \' + minhaPilha.peek());
  console.log(\'Removido: \' + minhaPilha.pop());
  console.log(\'Topo: \' + minhaPilha.peek());
}

// exercicio141();
```

---

### Exercício 142: Fila (Queue) - Implementação Básica

**Descrição do Problema**: Implemente uma classe `Fila` com os métodos `enqueue(elemento)`, `dequeue()` e `front()`. `enqueue` adiciona ao final, `dequeue` remove e retorna o primeiro, `front` retorna o primeiro sem remover.

**Entrada (Input)**:
```javascript
fila = new Fila()
fila.enqueue(\'A\')
fila.enqueue(\'B\')
```

**Saída Esperada (Output)**:
```
Frente: A
Removido: A
Frente: B
```

**Restrições/Observações**: Utilize um array interno para armazenar os elementos.

**Solução (Esqueleto)**:
```javascript
function exercicio142() {
  class Fila {
    constructor() {
      this.elementos = [];
    }

    enqueue(elemento) {
      this.elementos.push(elemento);
    }

    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elementos.shift();
    }

    front() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elementos[0];
    }

    isEmpty() {
      return this.elementos.length === 0;
    }

    size() {
      return this.elementos.length;
    }
  }

  const minhaFila = new Fila();
  minhaFila.enqueue(\'A\');
  minhaFila.enqueue(\'B\');
  console.log(\'Frente: \' + minhaFila.front());
  console.log(\'Removido: \' + minhaFila.dequeue());
  console.log(\'Frente: \' + minhaFila.front());
}

// exercicio142();
```

---

### Exercício 143: Lista Encadeada (Linked List) - Adicionar ao Final

**Descrição do Problema**: Implemente uma classe `Node` e uma classe `LinkedList`. A `LinkedList` deve ter um método `add(valor)` que adiciona um novo nó ao final da lista. Imprima os valores da lista.

**Entrada (Input)**:
```javascript
lista = new LinkedList()
lista.add(1)
lista.add(2)
lista.add(3)
```

**Saída Esperada (Output)**:
```
1 -> 2 -> 3 -> null
```

**Restrições/Observações**: Apenas a funcionalidade de adicionar ao final é necessária.

**Solução (Esqueleto)**:
```javascript
function exercicio143() {
  class Node {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(valor) {
      const newNode = new Node(valor);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.proximo) {
          current = current.proximo;
        }
        current.proximo = newNode;
      }
      this.size++;
    }

    printList() {
      let current = this.head;
      let result = \'\';
      while (current) {
        result += `${current.valor} -> `;
        current = current.proximo;
      }
      result += \'null\';
      console.log(result);
    }
  }

  const lista = new LinkedList();
  lista.add(1);
  lista.add(2);
  lista.add(3);
  lista.printList();
}

// exercicio143();
```

---

### Exercício 144: Árvore Binária de Busca (BST) - Inserção Básica

**Descrição do Problema**: Implemente uma classe `Node` e uma classe `BST`. A `BST` deve ter um método `insert(valor)` que insere um novo nó na posição correta. Não é necessário implementar balanceamento.

**Entrada (Input)**:
```javascript
bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
```

**Saída Esperada (Output)**:
(Não há saída direta para a inserção, mas a estrutura interna deve estar correta)

**Restrições/Observações**: Apenas a funcionalidade de inserção é necessária.

**Solução (Esqueleto)**:
```javascript
function exercicio144() {
  class Node {
    constructor(valor) {
      this.valor = valor;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    insert(valor) {
      const newNode = new Node(valor);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.valor < node.valor) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    // Para verificar a estrutura (opcional, para depuração)
    inOrderTraverse(node, callback) {
      if (node !== null) {
        this.inOrderTraverse(node.left, callback);
        callback(node.valor);
        this.inOrderTraverse(node.right, callback);
      }
    }
  }

  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);

  // Para verificar a ordem (opcional)
  // const resultados = [];
  // bst.inOrderTraverse(bst.root, valor => resultados.push(valor));
  // console.log(resultados); // Saída esperada: [3, 5, 7, 10, 15]
}

// exercicio144();
```

---

### Exercício 145: Algoritmo Quick Sort (Conceito)

**Descrição do Problema**: Crie uma função `quickSort` que receba um array de números e o ordene em ordem crescente usando o algoritmo Quick Sort. Retorne o array ordenado.

**Entrada (Input)**:
```
array = [3, 6, 8, 10, 1, 2, 1]
```

**Saída Esperada (Output)**:
```
[1, 1, 2, 3, 6, 8, 10]
```

**Restrições/Observações**: Implemente o algoritmo Quick Sort. Pode ser uma implementação simplificada.

**Solução (Esqueleto)**:
```javascript
function exercicio145(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return [...exercicio145(left), ...equal, ...exercicio145(right)];
}

// console.log(exercicio145([3, 6, 8, 10, 1, 2, 1]));
```

---

### Exercício 146: Algoritmo Merge Sort (Conceito)

**Descrição do Problema**: Crie uma função `mergeSort` que receba um array de números e o ordene em ordem crescente usando o algoritmo Merge Sort. Retorne o array ordenado.

**Entrada (Input)**:
```
array = [38, 27, 43, 3, 9, 82, 10]
```

**Saída Esperada (Output)**:
```
[3, 9, 10, 27, 38, 43, 82]
```

**Restrições/Observações**: Implemente o algoritmo Merge Sort.

**Solução (Esqueleto)**:
```javascript
function exercicio146(array) {
  if (array.length <= 1) {
    return array;
  }

  const meio = Math.floor(array.length / 2);
  const left = array.slice(0, meio);
  const right = array.slice(meio);

  const sortedLeft = exercicio146(left);
  const sortedRight = exercicio146(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(exercicio146([38, 27, 43, 3, 9, 82, 10]));
```

---

### Exercício 147: Design Pattern Singleton (Conceito)

**Descrição do Problema**: Implemente o padrão Singleton para uma classe `Configuracao`. Garanta que apenas uma instância de `Configuracao` possa ser criada e que todas as chamadas para obter a instância retornem a mesma.

**Entrada (Input)**:
```javascript
instancia1 = Configuracao.getInstance()
instancia2 = Configuracao.getInstance()
```

**Saída Esperada (Output)**:
```
true (instancia1 === instancia2)
```

**Restrições/Observações**: A classe deve ter um método estático `getInstance()`.

**Solução (Esqueleto)**:
```javascript
function exercicio147() {
  class Configuracao {
    constructor() {
      if (Configuracao.instance) {
        return Configuracao.instance;
      }
      this.settings = { theme: \'default\', language: \'en\' };
      Configuracao.instance = this;
    }

    static getInstance() {
      if (!Configuracao.instance) {
        Configuracao.instance = new Configuracao();
      }
      return Configuracao.instance;
    }

    getSettings() {
      return this.settings;
    }

    setSetting(key, value) {
      this.settings[key] = value;
    }
  }

  const instance1 = Configuracao.getInstance();
  const instance2 = Configuracao.getInstance();

  console.log(instance1 === instance2); // Deve ser true
  instance1.setSetting(\'theme\', \'dark\');
  console.log(instance2.getSettings().theme); // Deve ser \'dark\'
}

// exercicio147();
```

---

### Exercício 148: Design Pattern Factory (Conceito)

**Descrição do Problema**: Implemente um padrão Factory para criar diferentes tipos de veículos (Carro, Moto). Crie uma `VehicleFactory` com um método `createVehicle(tipo, marca)` que retorne a instância correta.

**Entrada (Input)**:
```javascript
carro = VehicleFactory.createVehicle(\'carro\', \'Toyota\')
moto = VehicleFactory.createVehicle(\'moto\', \'Honda\')
```

**Saída Esperada (Output)**:
```
Carro Toyota criado.
Moto Honda criada.
```

**Restrições/Observações**: As classes `Carro` e `Moto` devem ter um método `apresentar()`.

**Solução (Esqueleto)**:
```javascript
function exercicio148() {
  class Carro {
    constructor(marca) {
      this.marca = marca;
    }
    apresentar() {
      console.log(`Carro ${this.marca} criado.`);
    }
  }

  class Moto {
    constructor(marca) {
      this.marca = marca;
    }
    apresentar() {
      console.log(`Moto ${this.marca} criada.`);
    }
  }

  class VehicleFactory {
    static createVehicle(tipo, marca) {
      switch (tipo.toLowerCase()) {
        case \'carro\':
          return new Carro(marca);
        case \'moto\':
          return new Moto(marca);
        default:
          throw new Error(\'Tipo de veículo desconhecido.\');
      }
    }
  }

  const carro = VehicleFactory.createVehicle(\'carro\', \'Toyota\');
  carro.apresentar();

  const moto = VehicleFactory.createVehicle(\'moto\', \'Honda\');
  moto.apresentar();
}

// exercicio148();
```

---

### Exercício 149: Design Pattern Observer (Conceito)

**Descrição do Problema**: Implemente um padrão Observer. Crie uma classe `Subject` (observável) e uma classe `Observer` (observador). O `Subject` deve ter métodos para `adicionarObserver`, `removerObserver` e `notificarObservers`. O `Observer` deve ter um método `atualizar`.

**Entrada (Input)**:
```javascript
subject = new Subject()
observer1 = new Observer(\'Observer 1\')
observer2 = new Observer(\'Observer 2\')
subject.adicionarObserver(observer1)
subject.adicionarObserver(observer2)
subject.notificarObservers(\'Novo evento!\')
```

**Saída Esperada (Output)**:
```
Observer 1 recebeu: Novo evento!
Observer 2 recebeu: Novo evento!
```

**Restrições/Observações**: Demonstre a comunicação entre Subject e Observers.

**Solução (Esqueleto)**:
```javascript
function exercicio149() {
  class Subject {
    constructor() {
      this.observers = [];
    }

    adicionarObserver(observer) {
      this.observers.push(observer);
    }

    removerObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }

    notificarObservers(data) {
      this.observers.forEach(observer => observer.atualizar(data));
    }
  }

  class Observer {
    constructor(nome) {
      this.nome = nome;
    }

    atualizar(data) {
      console.log(`${this.nome} recebeu: ${data}`);
    }
  }

  const subject = new Subject();
  const observer1 = new Observer(\'Observer 1\');
  const observer2 = new Observer(\'Observer 2\');

  subject.adicionarObserver(observer1);
  subject.adicionarObserver(observer2);

  subject.notificarObservers(\'Novo evento!\');

  subject.removerObserver(observer1);
  subject.notificarObservers(\'Outro evento!\');
}

// exercicio149();
```

---

### Exercício 150: Manipulação de Strings com `slice`

**Descrição do Problema**: Crie uma função que receba uma string e dois índices (início e fim) e retorne a parte da string entre esses índices (exclusivo no fim).

**Entrada (Input)**:
```
texto = \'JavaScript\'
inicio = 0
fim = 4
```

**Saída Esperada (Output)**:
```
Java
```

**Restrições/Observações**: Utilize `String.slice()`.

**Solução (Esqueleto)**:
```javascript
function exercicio150(texto, inicio, fim) {
  return texto.slice(inicio, fim);
}

// console.log(exercicio150(\'JavaScript\', 0, 4));
// console.log(exercicio150(\'Hello World\', 6, 11));
```

---

### Exercício 151: Manipulação de Strings com `substring`

**Descrição do Problema**: Crie uma função que receba uma string e dois índices (início e fim) e retorne a parte da string entre esses índices. Se o índice de início for maior que o de fim, eles devem ser trocados automaticamente.

**Entrada (Input)**:
```
texto = \'JavaScript\'
inicio = 4
fim = 0
```

**Saída Esperada (Output)**:
```
Java
```

**Restrições/Observações**: Utilize `String.substring()`.

**Solução (Esqueleto)**:
```javascript
function exercicio151(texto, inicio, fim) {
  return texto.substring(inicio, fim);
}

// console.log(exercicio151(\'JavaScript\', 4, 0)); // Saída: Java
// console.log(exercicio151(\'Hello World\', 0, 5)); // Saída: Hello
```

---

### Exercício 152: Manipulação de Strings com `substr` (Deprecated)

**Descrição do Problema**: Crie uma função que receba uma string, um índice de início e um comprimento, e retorne a parte da string a partir do índice de início com o comprimento especificado.

**Entrada (Input)**:
```
texto = \'JavaScript\'
inicio = 4
comprimento = 6
```

**Saída Esperada (Output)**:
```
Script
```

**Restrições/Observações**: Utilize `String.substr()`. Note que `substr` é considerado obsoleto.

**Solução (Esqueleto)**:
```javascript
function exercicio152(texto, inicio, comprimento) {
  return texto.substr(inicio, comprimento);
}

// console.log(exercicio152(\'JavaScript\', 4, 6));
// console.log(exercicio152(\'Hello World\', 0, 5));
```

---

### Exercício 153: Converter String para Array de Caracteres

**Descrição do Problema**: Crie uma função que receba uma string e retorne um array contendo cada caractere da string como um elemento.

**Entrada (Input)**:
```
texto = \'abc\'
```

**Saída Esperada (Output)**:
```
[\'a\', \'b\', \'c\']
```

**Restrições/Observações**: Utilize `String.split(\'\')` ou o spread operator `[...string]`.

**Solução (Esqueleto)**:
```javascript
function exercicio153(texto) {
  return texto.split(\'\');
  // Ou:
  // return [...texto];
}

// console.log(exercicio153(\'abc\'));
```

---

### Exercício 154: Verificar se um Objeto Possui uma Propriedade

**Descrição do Problema**: Crie uma função que receba um objeto e o nome de uma propriedade (string), e retorne `true` se o objeto possuir essa propriedade, `false` caso contrário.

**Entrada (Input)**:
```javascript
objeto = { a: 1, b: 2 }
propriedade1 = \'a\'
propriedade2 = \'c\'
```

**Saída Esperada (Output)**:
```
true (para propriedade1)
false (para propriedade2)
```

**Restrições/Observações**: Utilize `Object.prototype.hasOwnProperty.call()` ou o operador `in`.

**Solução (Esqueleto)**:
```javascript
function exercicio154(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
  // Ou:
  // return prop in obj;
}

// console.log(exercicio154({ a: 1, b: 2 }, \'a\'));
// console.log(exercicio154({ a: 1, b: 2 }, \'c\'));
```

---

### Exercício 155: Clonar um Objeto Profundamente (JSON)

**Descrição do Problema**: Crie uma função que receba um objeto (que pode conter objetos aninhados) e retorne uma cópia profunda dele. Assuma que o objeto contém apenas tipos de dados que podem ser serializados para JSON.

**Entrada (Input)**:
```javascript
objetoOriginal = { a: 1, b: { c: 2 } }
```

**Saída Esperada (Output)**:
```javascript
{ a: 1, b: { c: 2 } }
// E objetoOriginal !== clone (referência diferente)
// E objetoOriginal.b !== clone.b (referência diferente para o objeto aninhado)
```

**Restrições/Observações**: Utilize `JSON.parse(JSON.stringify(obj))`.

**Solução (Esqueleto)**:
```javascript
function exercicio155(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// const original = { a: 1, b: { c: 2 } };
// const clone = exercicio155(original);
// console.log(clone);
// console.log(original === clone); // false
// console.log(original.b === clone.b); // false
```

---

### Exercício 156: Mesclar Objetos com `Object.assign()`

**Descrição do Problema**: Crie uma função que receba dois objetos e retorne um novo objeto que é a fusão dos dois. Se houver chaves duplicadas, o valor do segundo objeto deve prevalecer.

**Entrada (Input)**:
```javascript
objeto1 = { a: 1, b: 2 }
objeto2 = { b: 3, c: 4 }
```

**Saída Esperada (Output)**:
```javascript
{ a: 1, b: 3, c: 4 }
```

**Restrições/Observações**: Utilize `Object.assign()`.

**Solução (Esqueleto)**:
```javascript
function exercicio156(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// console.log(exercicio156({ a: 1, b: 2 }, { b: 3, c: 4 }));
```

---

### Exercício 157: Manipular Arrays com `splice()` - Remover Elementos

**Descrição do Problema**: Crie uma função que receba um array, um índice de início e um número de elementos a serem removidos. Retorne um novo array sem os elementos removidos. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 3, 4, 5]
inicio = 2
quantidade = 2
```

**Saída Esperada (Output)**:
```
[1, 2, 5]
```

**Restrições/Observações**: Utilize `slice()` para criar uma cópia e depois `splice()` na cópia.

**Solução (Esqueleto)**:
```javascript
function exercicio157(array, inicio, quantidade) {
  const novoArray = array.slice(); // Cria uma cópia
  novoArray.splice(inicio, quantidade);
  return novoArray;
}

// console.log(exercicio157([1, 2, 3, 4, 5], 2, 2));
```

---

### Exercício 158: Manipular Arrays com `splice()` - Adicionar Elementos

**Descrição do Problema**: Crie uma função que receba um array, um índice de início e um ou mais elementos a serem adicionados. Retorne um novo array com os elementos adicionados. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 5]
inicio = 2
elementos = [3, 4]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5]
```

**Restrições/Observações**: Utilize `slice()` para criar uma cópia e depois `splice()` na cópia.

**Solução (Esqueleto)**:
```javascript
function exercicio158(array, inicio, ...elementos) {
  const novoArray = array.slice(); // Cria uma cópia
  novoArray.splice(inicio, 0, ...elementos);
  return novoArray;
}

// console.log(exercicio158([1, 2, 5], 2, 3, 4));
```

---

### Exercício 159: Manipular Arrays com `splice()` - Substituir Elementos

**Descrição do Problema**: Crie uma função que receba um array, um índice de início, um número de elementos a serem removidos e um ou mais elementos a serem adicionados. Retorne um novo array com os elementos substituídos. Não modifique o array original.

**Entrada (Input)**:
```
array = [1, 2, 10, 11, 5]
inicio = 2
quantidadeRemover = 2
elementosAdicionar = [3, 4]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5]
```

**Restrições/Observações**: Utilize `slice()` para criar uma cópia e depois `splice()` na cópia.

**Solução (Esqueleto)**:
```javascript
function exercicio159(array, inicio, quantidadeRemover, ...elementosAdicionar) {
  const novoArray = array.slice(); // Cria uma cópia
  novoArray.splice(inicio, quantidadeRemover, ...elementosAdicionar);
  return novoArray;
}

// console.log(exercicio159([1, 2, 10, 11, 5], 2, 2, 3, 4));
```

---

### Exercício 160: Gerar um Array de Números em um Intervalo

**Descrição do Problema**: Crie uma função que receba dois números inteiros, `inicio` e `fim`, e retorne um array contendo todos os números inteiros nesse intervalo (inclusive).

**Entrada (Input)**:
```
inicio = 1
fim = 5
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5]
```

**Restrições/Observações**: Assuma `inicio <= fim`.

**Solução (Esqueleto)**:
```javascript
function exercicio160(inicio, fim) {
  const resultado = [];
  for (let i = inicio; i <= fim; i++) {
    resultado.push(i);
  }
  return resultado;
}

// console.log(exercicio160(1, 5));
// console.log(exercicio160(-2, 2));
```

---

### Exercício 161: Flattening de Array (Array de Arrays)

**Descrição do Problema**: Crie uma função que receba um array de arrays e retorne um novo array "achatado" (flattened), contendo todos os elementos dos sub-arrays em uma única dimensão.

**Entrada (Input)**:
```
arrayAninhado = [[1, 2], [3, 4], [5]]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5]
```

**Restrições/Observações**: Utilize `Array.prototype.flat()` ou `reduce()` com `concat()`.

**Solução (Esqueleto)**:
```javascript
function exercicio161(arrayAninhado) {
  return arrayAninhado.flat();
  // Ou com reduce:
  // return arrayAninhado.reduce((acc, val) => acc.concat(val), []);
}

// console.log(exercicio161([[1, 2], [3, 4], [5]]));
```

---

### Exercício 162: Contar Frequência de Elementos em um Array

**Descrição do Problema**: Crie uma função que receba um array de elementos e retorne um objeto onde as chaves são os elementos únicos e os valores são suas respectivas contagens (frequência).

**Entrada (Input)**:
```
array = [\'a\', \'b\', \'a\', \'c\', \'b\', \'a\']
```

**Saída Esperada (Output)**:
```javascript
{ a: 3, b: 2, c: 1 }
```

**Restrições/Observações**: Utilize `reduce()`.

**Solução (Esqueleto)**:
```javascript
function exercicio162(array) {
  return array.reduce((acc, elemento) => {
    acc[elemento] = (acc[elemento] || 0) + 1;
    return acc;
  }, {});
}

// console.log(exercicio162([\'a\', \'b\', \'a\', \'c\', \'b\', \'a\']));
```

---

### Exercício 163: Remover Propriedades de um Objeto (Retornar Novo Objeto)

**Descrição do Problema**: Crie uma função que receba um objeto e um array de chaves a serem removidas. Retorne um novo objeto sem essas propriedades. Não modifique o objeto original.

**Entrada (Input)**:
```javascript
objeto = { a: 1, b: 2, c: 3 }
chavesParaRemover = [\'b\', \'c\']
```

**Saída Esperada (Output)**:
```javascript
{ a: 1 }
```

**Restrições/Observações**: Utilize desestruturação com rest operator ou `reduce()`.

**Solução (Esqueleto)**:
```javascript
function exercicio163(obj, chavesParaRemover) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!chavesParaRemover.includes(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
  // Ou com desestruturação (mais complexo para múltiplas chaves dinâmicas)
  // const { b, c, ...rest } = obj; // Se as chaves fossem fixas
  // return rest;
}

// console.log(exercicio163({ a: 1, b: 2, c: 3 }, [\'b\', \'c\']));
```

---

### Exercício 164: Converter Objeto para Array de Pares Chave-Valor

**Descrição do Problema**: Crie uma função que receba um objeto e retorne um array de arrays, onde cada sub-array é um par `[chave, valor]`.

**Entrada (Input)**:
```javascript
objeto = { a: 1, b: \'dois\' }
```

**Saída Esperada (Output)**:
```javascript
[[\'a\', 1], [\'b\', \'dois\']]
```

**Restrições/Observações**: Utilize `Object.entries()`.

**Solução (Esqueleto)**:
```javascript
function exercicio164(obj) {
  return Object.entries(obj);
}

// console.log(exercicio164({ a: 1, b: \'dois\' }));
```

---

### Exercício 165: Converter Array de Pares Chave-Valor para Objeto

**Descrição do Problema**: Crie uma função que receba um array de pares `[chave, valor]` e retorne um objeto.

**Entrada (Input)**:
```javascript
pares = [[\'a\', 1], [\'b\', \'dois\']]
```

**Saída Esperada (Output)**:
```javascript
{ a: 1, b: \'dois\' }
```

**Restrições/Observações**: Utilize `Object.fromEntries()`.

**Solução (Esqueleto)**:
```javascript
function exercicio165(pares) {
  return Object.fromEntries(pares);
}

// console.log(exercicio165([["a", 1], ["b", "dois"]]));
```

---

### Exercício 166: Criar um Array com Valores Únicos de Múltiplos Arrays

**Descrição do Problema**: Crie uma função que receba dois ou mais arrays e retorne um novo array contendo todos os valores únicos de todos os arrays combinados.

**Entrada (Input)**:
```
array1 = [1, 2, 3]
array2 = [3, 4, 5]
array3 = [5, 6, 7]
```

**Saída Esperada (Output)**:
```
[1, 2, 3, 4, 5, 6, 7]
```

**Restrições/Observações**: Utilize `Set` e o spread operator.

**Solução (Esqueleto)**:
```javascript
function exercicio166(...arrays) {
  const combinado = [].concat(...arrays);
  return [...new Set(combinado)];
}

// console.log(exercicio166([1, 2, 3], [3, 4, 5], [5, 6, 7]));
```

---

### Exercício 167: Interseção de Dois Arrays

**Descrição do Problema**: Crie uma função que receba dois arrays e retorne um novo array contendo apenas os elementos que estão presentes em ambos os arrays (interseção).

**Entrada (Input)**:
```
array1 = [1, 2, 3, 4]
array2 = [3, 4, 5, 6]
```

**Saída Esperada (Output)**:
```
[3, 4]
```

**Restrições/Observações**: Utilize `filter()` e `includes()` ou `Set`.

**Solução (Esqueleto)**:
```javascript
function exercicio167(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => set2.has(item));
}

// console.log(exercicio167([1, 2, 3, 4], [3, 4, 5, 6]));
```

---

### Exercício 168: Diferença entre Dois Arrays

**Descrição do Problema**: Crie uma função que receba dois arrays e retorne um novo array contendo os elementos que estão no primeiro array, mas não no segundo.

**Entrada (Input)**:
```
array1 = [1, 2, 3, 4]
array2 = [3, 4, 5, 6]
```

**Saída Esperada (Output)**:
```
[1, 2]
```

**Restrições/Observações**: Utilize `filter()` e `includes()` ou `Set`.

**Solução (Esqueleto)**:
```javascript
function exercicio168(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}

// console.log(exercicio168([1, 2, 3, 4], [3, 4, 5, 6]));
```

---

### Exercício 169: Gerar um Array de Números Aleatórios

**Descrição do Problema**: Crie uma função que receba um número `quantidade` e dois limites `min` e `max`, e retorne um array com `quantidade` números inteiros aleatórios entre `min` e `max` (inclusive).

**Entrada (Input)**:
```
quantidade = 5
min = 1
max = 10
```

**Saída Esperada (Output)**:
```
// Exemplo: [3, 8, 1, 9, 4] (os números serão aleatórios)
```

**Restrições/Observações**: Utilize `Math.random()` e `Math.floor()`.

**Solução (Esqueleto)**:
```javascript
function exercicio169(quantidade, min, max) {
  const resultado = [];
  for (let i = 0; i < quantidade; i++) {
    const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.push(numAleatorio);
  }
  return resultado;
}

// console.log(exercicio169(5, 1, 10));
```

---

### Exercício 170: Validar CPF (Formato Básico)

**Descrição do Problema**: Crie uma função que receba uma string e retorne `true` se ela for um CPF válido no formato `XXX.XXX.XXX-XX`, `false` caso contrário. A validação é apenas do formato, não dos dígitos verificadores.

**Entrada (Input)**:
```
cpf1 = \'123.456.789-00\'
cpf2 = \'12345678900\'
```

**Saída Esperada (Output)**:
```
true (para cpf1)
false (para cpf2)
```

**Restrições/Observações**: Utilize expressão regular.

**Solução (Esqueleto)**:
```javascript
function exercicio170(cpf) {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
}

// console.log(exercicio170(\'123.456.789-00\'));
// console.log(exercicio170(\'12345678900\'));
```

---



# Exercícios de JavaScript - Nível Avançado (171-250)

Esta seção contém 80 exercícios de JavaScript focados em conceitos avançados, como programação assíncrona, estruturas de dados complexas, algoritmos, design patterns, testes e segurança, projetados para serem executados em um ambiente Node.js.

## Estrutura dos Exercícios

Cada exercício segue a estrutura definida no plano:

*   **Título do Exercício**: Nome do exercício.
*   **Descrição do Problema**: O que o exercício deve resolver.
*   **Entrada (Input)**: Exemplos de dados de entrada.
*   **Saída Esperada (Output)**: Exemplos da saída esperada.
*   **Restrições/Observações**: Condições especiais.
*   **Solução (Opcional)**: Esqueleto de função ou solução completa.

---

### Exercício 171: `Promise.allSettled()`

**Descrição do Problema**: Crie duas Promises, uma que resolve e outra que rejeita. Use `Promise.allSettled()` para esperar que ambas terminem e imprima o array de resultados, mostrando o status de cada uma.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```javascript
[
  { status: \'fulfilled\", value: \'Sucesso!\" },
  { status: \'rejected\", reason: \'Falha!\" }
]
```

**Restrições/Observações**: Demonstre o comportamento de `Promise.allSettled()`.

**Solução (Esqueleto)**:
```javascript
function exercicio171() {
  const p1 = Promise.resolve(\'Sucesso!\');
  const p2 = Promise.reject(\'Falha!\');

  Promise.allSettled([p1, p2])
    .then(resultados => console.log(resultados));
}

// exercicio171();
```

---

### Exercício 172: `Promise.any()`

**Descrição do Problema**: Crie três Promises, duas que rejeitam e uma que resolve. Use `Promise.any()` para obter o valor da primeira Promise a resolver. Imprima o resultado.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Primeiro a resolver: Sucesso rápido
```

**Restrições/Observações**: Demonstre o comportamento de `Promise.any()`.

**Solução (Esqueleto)**:
```javascript
function exercicio172() {
  const p1 = new Promise((_, reject) => setTimeout(() => reject(\'Falha lenta\"), 200));
  const p2 = new Promise(resolve => setTimeout(() => resolve(\'Sucesso rápido\"), 100));
  const p3 = Promise.reject(\'Falha imediata\');

  Promise.any([p1, p2, p3])
    .then(resultado => console.log(\'Primeiro a resolver: \' + resultado))
    .catch(erro => console.log(\'Todos falharam: \' + erro));
}

// exercicio172();
```

---

### Exercício 173: `async/await` com `Promise.all()`

**Descrição do Problema**: Crie uma função `async` que use `await` com `Promise.all()` para buscar múltiplos dados simultaneamente. Imprima os resultados combinados.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Resultados combinados: [ \'Dado 1\", \'Dado 2\" ]
```

**Restrições/Observações**: Combine `async/await` com `Promise.all()`.

**Solução (Esqueleto)**:
```javascript
async function exercicio173() {
  const buscarDado1 = new Promise(resolve => setTimeout(() => resolve(\'Dado 1\"), 100));
  const buscarDado2 = new Promise(resolve => setTimeout(() => resolve(\'Dado 2\"), 150));

  try {
    const resultados = await Promise.all([buscarDado1, buscarDado2]);
    console.log(\'Resultados combinados: \' + resultados);
  } catch (error) {
    console.error(\'Erro ao buscar dados:\", error);
  }
}

// exercicio173();
```

---

### Exercício 174: Geradores (Generators) - Básico

**Descrição do Problema**: Crie uma função geradora `contadorSimples()` que produza os números 1, 2 e 3. Use um loop `for...of` para iterar sobre o gerador e imprimir os valores.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
1
2
3
```

**Restrições/Observações**: Utilize `function*` e `yield`.

**Solução (Esqueleto)**:
```javascript
function* contadorSimples() {
  yield 1;
  yield 2;
  yield 3;
}

function exercicio174() {
  for (const valor of contadorSimples()) {
    console.log(valor);
  }
}

// exercicio174();
```

---

### Exercício 175: Geradores (Generators) - Passando Valores

**Descrição do Problema**: Crie uma função geradora que primeiro produz uma pergunta (`yield \'Qual o seu nome?\") e depois recebe uma resposta através de `.next(resposta)` e a imprime.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Pergunta: Qual o seu nome?
Resposta recebida: Gemini
```

**Restrições/Observações**: Demonstre a comunicação bidirecional com geradores.

**Solução (Esqueleto)**:
```javascript
function* dialogo() {
  const resposta = yield \'Qual o seu nome?\";
  console.log(\'Resposta recebida: \' + resposta);
}

function exercicio175() {
  const gen = dialogo();
  const pergunta = gen.next().value;
  console.log(\'Pergunta: \' + pergunta);
  gen.next(\'Gemini\');
}

// exercicio175();
```

---

### Exercício 176: Iteradores e Símbolo `Symbol.iterator`

**Descrição do Problema**: Crie um objeto `meuIteravel` que implemente o protocolo de iteração usando `Symbol.iterator`. Ele deve produzir os números de 1 a 3 quando iterado com `for...of`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
1
2
3
```

**Restrições/Observações**: O objeto deve ter uma propriedade `[Symbol.iterator]` que é uma função geradora.

**Solução (Esqueleto)**:
```javascript
function exercicio176() {
  const meuIteravel = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  };

  for (const valor of meuIteravel) {
    console.log(valor);
  }
}

// exercicio176();
```

---

### Exercício 177: `Map` - Estrutura de Dados

**Descrição do Problema**: Crie um `Map` para armazenar informações de usuários, onde a chave é o ID do usuário (número) e o valor é um objeto com nome e email. Adicione dois usuários e depois recupere e imprima os dados de um deles.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```javascript
{ nome: \'Ana\", email: \'ana@example.com\" }
```

**Restrições/Observações**: Utilize os métodos `set()` e `get()` do `Map`.

**Solução (Esqueleto)**:
```javascript
function exercicio177() {
  const usuarios = new Map();

  usuarios.set(1, { nome: \'João\", email: \'joao@example.com\" });
  usuarios.set(2, { nome: \'Ana\", email: \'ana@example.com\" });

  console.log(usuarios.get(2));
  console.log(\'Tamanho do Map: \' + usuarios.size);
}

// exercicio177();
```

---

### Exercício 178: `Set` - Estrutura de Dados

**Descrição do Problema**: Crie um `Set` e adicione alguns números, incluindo duplicatas. Imprima o tamanho do `Set` para mostrar que duplicatas são ignoradas. Em seguida, verifique se um número específico existe no `Set`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Tamanho do Set: 3
O Set contém o número 5: true
```

**Restrições/Observações**: Utilize os métodos `add()`, `has()` e a propriedade `size` do `Set`.

**Solução (Esqueleto)**:
```javascript
function exercicio178() {
  const numeros = new Set();

  numeros.add(1);
  numeros.add(5);
  numeros.add(1); // Duplicata
  numeros.add(10);

  console.log(\'Tamanho do Set: \' + numeros.size);
  console.log(\'O Set contém o número 5: \' + numeros.has(5));
}

// exercicio178();
```

---

### Exercício 179: `WeakMap` - Conceito

**Descrição do Problema**: Demonstre o conceito de `WeakMap`. Crie um objeto e use-o como chave em um `WeakMap`. Em seguida, defina o objeto como `null` para mostrar que a chave pode ser coletada pelo garbage collector (embora não seja possível provar isso diretamente no código).

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
WeakMap contém a chave? true
(Após a remoção da referência, a chave pode ser coletada pelo GC)
```

**Restrições/Observações**: Apenas demonstre a criação e o uso.

**Solução (Esqueleto)**:
```javascript
function exercicio179() {
  const weakMap = new WeakMap();
  let chave = { id: 1 };

  weakMap.set(chave, \'Informação secreta\');

  console.log(\'WeakMap contém a chave? \' + weakMap.has(chave));

  // Remover a única referência forte à chave
  chave = null;

  // Agora, a entrada no WeakMap pode ser coletada pelo garbage collector.
  // Não há como verificar isso programaticamente de forma confiável.
  console.log(\'(Após a remoção da referência, a chave pode ser coletada pelo GC)\");
}

// exercicio179();
```

---

### Exercício 180: `WeakSet` - Conceito

**Descrição do Problema**: Demonstre o conceito de `WeakSet`. Crie um objeto, adicione-o a um `WeakSet`. Em seguida, defina o objeto como `null` para mostrar que ele pode ser coletado pelo garbage collector.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
WeakSet contém o objeto? true
(Após a remoção da referência, o objeto pode ser coletado pelo GC)
```

**Restrições/Observações**: Apenas demonstre a criação e o uso.

**Solução (Esqueleto)**:
```javascript
function exercicio180() {
  const weakSet = new WeakSet();
  let obj = { valor: 100 };

  weakSet.add(obj);

  console.log(\'WeakSet contém o objeto? \' + weakSet.has(obj));

  // Remover a única referência forte ao objeto
  obj = null;

  // Agora, o objeto no WeakSet pode ser coletado pelo garbage collector.
  console.log(\'(Após a remoção da referência, o objeto pode ser coletado pelo GC)\");
}

// exercicio180();
```

---

### Exercício 181: `Proxy` - Interceptando Acessos (get)

**Descrição do Problema**: Crie um `Proxy` para um objeto que, ao tentar acessar uma propriedade inexistente, retorne uma mensagem padrão em vez de `undefined`.

**Entrada (Input)**:
```javascript
proxy.nome
proxy.idade
```

**Saída Esperada (Output)**:
```
João
Propriedade \'idade\' não existe.
```

**Restrições/Observações**: Implemente o handler `get` para o `Proxy`.

**Solução (Esqueleto)**:
```javascript
function exercicio181() {
  const alvo = { nome: \'João\" };
  const handler = {
    get(target, prop) {
      return prop in target ? target[prop] : `Propriedade \'${prop}\' não existe.`;
    }
  };

  const proxy = new Proxy(alvo, handler);

  console.log(proxy.nome);
  console.log(proxy.idade);
}

// exercicio181();
```

---

### Exercício 182: `Proxy` - Validando Atribuições (set)

**Descrição do Problema**: Crie um `Proxy` para um objeto que, ao tentar atribuir um valor a uma propriedade, valide se o valor é do tipo esperado. Por exemplo, a propriedade `idade` só pode aceitar números.

**Entrada (Input)**:
```javascript
proxy.idade = 25
proxy.idade = \'vinte e cinco\"
```

**Saída Esperada (Output)**:
```
Idade atribuída: 25
Erro: A propriedade \'idade\' só aceita números.
Idade atual: 25
```

**Restrições/Observações**: Implemente o handler `set` para o `Proxy`.

**Solução (Esqueleto)**:
```javascript
function exercicio182() {
  const alvo = { nome: \'Maria\" };
  const handler = {
    set(target, prop, value) {
      if (prop === \'idade\') {
        if (typeof value !== \'number\') {
          console.error(`Erro: A propriedade \'${prop}\' só aceita números.`);
          return false;
        } else {
          console.log(`Idade atribuída: ${value}`);
        }
      }
      target[prop] = value;
      return true;
    }
  };

  const proxy = new Proxy(alvo, handler);

  proxy.idade = 25;
  proxy.idade = \'vinte e cinco\';
  console.log(\'Idade atual: \' + proxy.idade);
}

// exercicio182();
```

---

### Exercício 183: `Reflect` API - Acessando Propriedades

**Descrição do Problema**: Use `Reflect.get()` e `Reflect.has()` para acessar uma propriedade de um objeto e verificar se ela existe. Compare com o acesso direto.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Valor com Reflect.get: 10
Existe com Reflect.has: true
Não existe com Reflect.has: false
```

**Restrições/Observações**: Demonstre o uso básico de `Reflect`.

**Solução (Esqueleto)**:
```javascript
function exercicio183() {
  const obj = { a: 10 };

  console.log(\'Valor com Reflect.get: \' + Reflect.get(obj, \'a\'));
  console.log(\'Existe com Reflect.has: \' + Reflect.has(obj, \'a\'));
  console.log(\'Não existe com Reflect.has: \' + Reflect.has(obj, \'b\'));
}

// exercicio183();
```

---

### Exercício 184: `Reflect` API - Modificando Propriedades

**Descrição do Problema**: Use `Reflect.set()` e `Reflect.defineProperty()` para modificar e definir propriedades de um objeto. Imprima o objeto resultante.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```javascript
{ a: 20, b: 30 }
```

**Restrições/Observações**: Demonstre o uso de `Reflect` para modificação.

**Solução (Esqueleto)**:
```javascript
function exercicio184() {
  const obj = { a: 10 };

  Reflect.set(obj, \'a\', 20);
  Reflect.defineProperty(obj, \'b\', { value: 30, writable: true, enumerable: true });

  console.log(obj);
}

// exercicio184();
```

---

### Exercício 185: `EventEmitter` do Node.js - Básico

**Descrição do Problema**: Crie uma instância de `EventEmitter`. Registre um listener para um evento `meuEvento` que imprima uma mensagem. Emita o evento e veja a mensagem ser impressa.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Meu evento foi acionado!
```

**Restrições/Observações**: Requer o módulo `events` do Node.js.

**Solução (Esqueleto)**:
```javascript
function exercicio185() {
  const EventEmitter = require(\'events\');
  const meuEmissor = new EventEmitter();

  meuEmissor.on(\'meuEvento\", () => {
    console.log(\'Meu evento foi acionado!\');
  });

  meuEmissor.emit(\'meuEvento\');
}

// exercicio185();
```

---

### Exercício 186: `EventEmitter` - Passando Dados

**Descrição do Problema**: Modifique o exercício anterior para que o evento `meuEvento` seja emitido com dados (ex: um objeto). O listener deve receber e imprimir esses dados.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```javascript
Evento recebido com dados: { tipo: \'notificação\", mensagem: \'Olá Mundo\" }
```

**Restrições/Observações**: Passe argumentos para o método `emit()`.

**Solução (Esqueleto)**:
```javascript
function exercicio186() {
  const EventEmitter = require(\'events\');
  const meuEmissor = new EventEmitter();

  meuEmissor.on(\'meuEvento\", (dados) => {
    console.log(\'Evento recebido com dados: \' + JSON.stringify(dados));
  });

  meuEmissor.emit(\'meuEvento\', { tipo: \'notificação\", mensagem: \'Olá Mundo\" });
}

// exercicio186();
```

---

### Exercício 187: `EventEmitter` - `once()`

**Descrição do Problema**: Use o método `once()` para registrar um listener que só será executado uma vez, mesmo que o evento seja emitido várias vezes.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Este evento só acontece uma vez.
```

**Restrições/Observações**: Emita o evento duas vezes para provar que o listener só roda na primeira.

**Solução (Esqueleto)**:
```javascript
function exercicio187() {
  const EventEmitter = require(\'events\');
  const meuEmissor = new EventEmitter();

  meuEmissor.once(\'eventoUnico\", () => {
    console.log(\'Este evento só acontece uma vez.\');
  });

  meuEmissor.emit(\'eventoUnico\');
  meuEmissor.emit(\'eventoUnico\'); // Esta emissão não fará nada
}

// exercicio187();
```

---

### Exercício 188: Streams - Leitura de Arquivo Grande

**Descrição do Problema**: Crie um arquivo de texto grande. Use `fs.createReadStream` para ler o arquivo em chunks e imprimir uma mensagem para cada chunk recebido, sem armazenar o arquivo inteiro na memória.

**Entrada (Input)**:
(Arquivo `grande.txt` criado previamente)

**Saída Esperada (Output)**:
```
Recebido chunk de dados...
Recebido chunk de dados...
(várias vezes)
Leitura do arquivo concluída.
```

**Restrições/Observações**: Requer o módulo `fs`.

**Solução (Esqueleto)**:
```javascript
// Para simular, crie um arquivo grande primeiro:
// shell.exec(\'node -e "require(\'fs\').writeFileSync(\'grande.txt\', \'a\".repeat(1024 * 1024))\"\");

function exercicio188() {
  const fs = require(\'fs\');
  const readStream = fs.createReadStream(\'grande.txt\");

  readStream.on(\'data\", (chunk) => {
    console.log(\'Recebido chunk de dados... Tamanho: \' + chunk.length);
  });

  readStream.on(\'end\", () => {
    console.log(\'Leitura do arquivo concluída.\');
  });

  readStream.on(\'error\", (err) => {
    console.error(\'Erro na stream de leitura:\", err);
  });
}

// exercicio188();
```

---

### Exercício 189: Streams - Escrita de Arquivo

**Descrição do Problema**: Use `fs.createWriteStream` para escrever dados em um arquivo `stream_saida.txt`. Escreva múltiplos pedaços de dados usando `writeStream.write()`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Escrita no arquivo concluída.
```

**Restrições/Observações**: Use o evento `finish` para saber quando a escrita terminou.

**Solução (Esqueleto)**:
```javascript
function exercicio189() {
  const fs = require(\'fs\');
  const writeStream = fs.createWriteStream(\'stream_saida.txt\');

  writeStream.write(\'Primeira linha.\n\');
  writeStream.write(\'Segunda linha.\n\');
  writeStream.end(); // Finaliza a stream

  writeStream.on(\'finish\", () => {
    console.log(\'Escrita no arquivo concluída.\');
  });

  writeStream.on(\'error\", (err) => {
    console.error(\'Erro na stream de escrita:\", err);
  });
}

// exercicio189();
```

---

### Exercício 190: Streams - `pipe()`

**Descrição do Problema**: Use o método `pipe()` para conectar uma `ReadStream` (lendo um arquivo) a uma `WriteStream` (escrevendo em outro arquivo), efetivamente copiando o arquivo de forma eficiente.

**Entrada (Input)**:
(Arquivo `origem.txt` criado previamente)

**Saída Esperada (Output)**:
```
Arquivo copiado com sucesso via pipe().
```

**Restrições/Observações**: O `pipe` gerencia o fluxo de dados automaticamente.

**Solução (Esqueleto)**:
```javascript
// Crie o arquivo de origem primeiro:
// shell.exec(\'echo "Conteúdo para ser copiado." > origem.txt\");

function exercicio190() {
  const fs = require(\'fs\');
  const readStream = fs.createReadStream(\'origem.txt\');
  const writeStream = fs.createWriteStream(\'destino.txt\');

  readStream.pipe(writeStream);

  writeStream.on(\'finish\", () => {
    console.log(\'Arquivo copiado com sucesso via pipe().\');
  });

  readStream.on(\'error\", (err) => console.error(\'Erro na leitura:\", err));
  writeStream.on(\'error\", (err) => console.error(\'Erro na escrita:\", err));
}

// exercicio190();
```

---

### Exercício 191: Streams - Transform (Ex: Gzip)

**Descrição do Problema**: Use `pipe()` para conectar uma `ReadStream`, uma `Transform Stream` (como `zlib.createGzip()`) e uma `WriteStream` para ler um arquivo, comprimi-lo e salvar o resultado em um arquivo `.gz`.

**Entrada (Input)**:
(Arquivo `arquivo_para_comprimir.txt` criado previamente)

**Saída Esperada (Output)**:
```
Arquivo comprimido com sucesso!
```

**Restrições/Observações**: Requer os módulos `fs` e `zlib`.

**Solução (Esqueleto)**:
```javascript
// Crie o arquivo primeiro:
// shell.exec(\'echo "Este é um texto para ser comprimido." > arquivo_para_comprimir.txt\");

function exercicio191() {
  const fs = require(\'fs\');
  const zlib = require(\'zlib\');

  const readStream = fs.createReadStream(\'arquivo_para_comprimir.txt\');
  const gzip = zlib.createGzip();
  const writeStream = fs.createWriteStream(\'arquivo_comprimido.txt.gz\');

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on(\'finish\", () => {
    console.log(\'Arquivo comprimido com sucesso!\');
  });
}

// exercicio191();
```

---

### Exercício 192: `Buffer` - Criação e Manipulação

**Descrição do Problema**: Crie um `Buffer` a partir de uma string. Imprima o conteúdo do buffer em formato de string e em formato hexadecimal.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
String: Olá Buffer
Hex: 4f6c6120427566666572
```

**Restrições/Observações**: Use `Buffer.from()` e `buf.toString()`.

**Solução (Esqueleto)**:
```javascript
function exercicio192() {
  const buf = Buffer.from(\'Olá Buffer\", \'utf8\');

  console.log(\'String: \' + buf.toString(\'utf8\'));
  console.log(\'Hex: \' + buf.toString(\'hex\'));
}

// exercicio192();
```

---

### Exercício 193: `Buffer` - Concatenação

**Descrição do Problema**: Crie dois `Buffer`s e use `Buffer.concat()` para uni-los em um único `Buffer`. Imprima a string resultante.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Buffer concatenado: Olá Mundo
```

**Restrições/Observações**: `Buffer.concat()` recebe um array de buffers.

**Solução (Esqueleto)**:
```javascript
function exercicio193() {
  const buf1 = Buffer.from(\'Olá \');
  const buf2 = Buffer.from(\'Mundo\');
  const bufConcatenado = Buffer.concat([buf1, buf2]);

  console.log(\'Buffer concatenado: \' + bufConcatenado.toString());
}

// exercicio193();
```

---

### Exercício 194: `worker_threads` - Básico

**Descrição do Problema**: Crie um worker thread que receba um número, calcule seu quadrado e envie o resultado de volta para a thread principal. A thread principal deve imprimir o resultado.

**Entrada (Input)**:
(Dois arquivos: `main.js` e `worker.js`)

**Saída Esperada (Output)**:
```
Resultado do worker: 81
```

**Restrições/Observações**: Requer o módulo `worker_threads`.

**Solução (Esqueleto)**:
```javascript
// worker.js
/*
const { parentPort } = require(\'worker_threads\');
parentPort.on(\'message\", (numero) => {
  const resultado = numero * numero;
  parentPort.postMessage(resultado);
});
*/

// main.js
/*
const { Worker } = require(\'worker_threads\');
const worker = new Worker(\'./worker.js\');

worker.on(\'message\", (resultado) => {
  console.log(\'Resultado do worker: \' + resultado);
});

worker.postMessage(9);
*/

// Simulação:
function exercicio194() {
  console.log(\'Este exercício requer a execução de dois arquivos separados.\");
}

// exercicio194();
```

---

### Exercício 195: `child_process` - `exec()`

**Descrição do Problema**: Use `child_process.exec()` para executar um comando do sistema operacional (ex: `ls -l` no Linux/macOS ou `dir` no Windows) e imprima a saída (stdout) no console.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(A listagem de arquivos do diretório atual)

**Restrições/Observações**: Requer o módulo `child_process`.

**Solução (Esqueleto)**:
```javascript
function exercicio195() {
  const { exec } = require(\'child_process\');
  const comando = process.platform === \'win32\" ? \'dir\" : \'ls -l\";

  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout:\n${stdout}`);
  });
}

// exercicio195();
```

---

### Exercício 196: `child_process` - `spawn()`

**Descrição do Problema**: Use `child_process.spawn()` para executar um comando que gera muita saída (ex: `find /` no Linux). Ouça os eventos `data` do stdout do processo filho e imprima os dados à medida que chegam.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(Um fluxo contínuo de nomes de arquivos e diretórios)

**Restrições/Observações**: `spawn` é mais adequado para processos de longa duração ou com muita saída.

**Solução (Esqueleto)**:
```javascript
function exercicio196() {
  const { spawn } = require(\'child_process\');
  // Use um comando que gere bastante saída. Cuidado com `find /` em sistemas reais.
  // Usaremos `ls -R` como um exemplo mais seguro.
  const ls = spawn(\'ls\", [\'-R\", \'./\']);

  ls.stdout.on(\'data\", (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on(\'data\", (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on(\'close\", (code) => {
    console.log(`Processo filho terminou com código ${code}`);
  });
}

// exercicio196();
```

---

### Exercício 197: `crypto` - Criar Hash SHA256

**Descrição do Problema**: Use o módulo `crypto` do Node.js para criar um hash SHA256 de uma string. Imprima o hash resultante em formato hexadecimal.

**Entrada (Input)**:
```
texto = \'minha senha secreta\"
```

**Saída Esperada (Output)**:
(Um hash SHA256 de 64 caracteres hexadecimais)

**Restrições/Observações**: Requer o módulo `crypto`.

**Solução (Esqueleto)**:
```javascript
function exercicio197(texto) {
  const crypto = require(\'crypto\');
  const hash = crypto.createHash(\'sha256\');
  hash.update(texto);
  return hash.digest(\'hex\');
}

// console.log(exercicio197(\'minha senha secreta\'));
```

---

### Exercício 198: `crypto` - Criptografia Simétrica (AES)

**Descrição do Problema**: Crie funções para criptografar e descriptografar um texto usando o algoritmo AES-256-CBC. Demonstre criptografando um texto e depois descriptografando-o de volta ao original.

**Entrada (Input)**:
```
texto = \'Mensagem super secreta.\"
```

**Saída Esperada (Output)**:
```
Texto criptografado: (string hexadecimal)
Texto descriptografado: Mensagem super secreta.
```

**Restrições/Observações**: Requer uma chave de 32 bytes e um IV (vetor de inicialização) de 16 bytes.

**Solução (Esqueleto)**:
```javascript
function exercicio198() {
  const crypto = require(\'crypto\');
  const algorithm = \'aes-256-cbc\";
  const key = crypto.randomBytes(32); // Chave de 32 bytes
  const iv = crypto.randomBytes(16);  // IV de 16 bytes

  function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString(\'hex\');
  }

  function decrypt(text) {
    let encryptedText = Buffer.from(text, \'hex\');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

  const textoOriginal = \'Mensagem super secreta.\';
  const textoCriptografado = encrypt(textoOriginal);
  const textoDescriptografado = decrypt(textoCriptografado);

  console.log(\'Texto criptografado: \' + textoCriptografado);
  console.log(\'Texto descriptografado: \' + textoDescriptografado);
}

// exercicio198();
```

---

### Exercício 199: Memoização (Memoization) para Otimização

**Descrição do Problema**: Crie uma função `memoize(fn)` que receba uma função e retorne uma versão memoizada dela. Demonstre com uma função de cálculo pesado (ex: fatorial recursivo) para mostrar que os resultados são cacheados.

**Entrada (Input)**:
```javascript
fatorialMemoizado(30)
fatorialMemoizado(30) // Segunda chamada
```

**Saída Esperada (Output)**:
```
Calculando fatorial para 30...
(Resultado grande)
(Resultado grande) // (sem a mensagem de cálculo)
```

**Restrições/Observações**: A função memoizada deve armazenar os resultados em um cache.

**Solução (Esqueleto)**:
```javascript
function exercicio199() {
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      console.log(`Calculando ${fn.name} para ${args}...`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }

  function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
  }

  const fatorialMemoizado = memoize(fatorial);

  console.log(fatorialMemoizado(10));
  console.log(fatorialMemoizado(10)); // Esta chamada deve ser instantânea
  console.log(fatorialMemoizado(12));
}

// exercicio199();
```

---

### Exercício 200: Testes Unitários - `assert` do Node.js

**Descrição do Problema**: Crie uma função simples `somar(a, b)`. Escreva um pequeno teste para ela usando o módulo `assert` do Node.js, verificando se `somar(2, 3)` é igual a `5`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Testes passaram!
```
(Ou um `AssertionError` se o teste falhar)

**Restrições/Observações**: Requer o módulo `assert`.

**Solução (Esqueleto)**:
```javascript
function exercicio200() {
  const assert = require(\'assert\');

  function somar(a, b) {
    return a + b;
  }

  try {
    assert.strictEqual(somar(2, 3), 5, \'2 + 3 deve ser 5\');
    assert.strictEqual(somar(-1, 1), 0, \'-1 + 1 deve ser 0\');
    console.log(\'Testes passaram!\');
  } catch (error) {
    console.error(\'Teste falhou: \' + error.message);
  }
}

// exercicio200();
```

---

### Exercício 201: Algoritmo de Dijkstra (Conceito)

**Descrição do Problema**: Implemente uma versão simplificada do algoritmo de Dijkstra para encontrar o caminho mais curto em um grafo ponderado. O grafo pode ser representado por um objeto.

**Entrada (Input)**:
```javascript
grafo = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
}
inicio = \'A\'
fim = \'D\'
```

**Saída Esperada (Output)**:
```
Caminho mais curto: 3, via: [ \'A\", \'B\", \'C\", \'D\" ]
```

**Restrições/Observações**: Esta é uma implementação complexa. Uma versão simplificada é suficiente.

**Solução (Esqueleto)**:
```javascript
function exercicio201(graph, startNode, endNode) {
  // Implementação simplificada de Dijkstra
  const distances = {};
  const visited = new Set();
  const paths = {};

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    paths[node] = null;
  });
  distances[startNode] = 0;

  let currentNode = startNode;
  while (currentNode) {
    const neighbors = graph[currentNode];
    const currentDistance = distances[currentNode];

    for (const neighbor in neighbors) {
      const newDist = currentDistance + neighbors[neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        paths[neighbor] = currentNode;
      }
    }

    visited.add(currentNode);

    currentNode = Object.keys(distances).reduce((minNode, node) => {
      if (!visited.has(node) && (!minNode || distances[node] < distances[minNode])) {
        return node;
      }
      return minNode;
    }, null);
  }

  // Reconstruir o caminho
  const shortestPath = [];
  let pathNode = endNode;
  while (pathNode) {
    shortestPath.unshift(pathNode);
    pathNode = paths[pathNode];
  }

  return {
    distance: distances[endNode],
    path: shortestPath
  };
}

// const graph = {
//   A: { B: 1, C: 4 },
//   B: { A: 1, C: 2, D: 5 },
//   C: { A: 4, B: 2, D: 1 },
//   D: { B: 5, C: 1 }
// };
// const result = exercicio201(graph, \'A\", \'D\');
// console.log(`Caminho mais curto: ${result.distance}, via: [ ${result.path.join(\", \'")} ]`);
```

---

### Exercício 202: Árvore Binária de Busca (BST) - Busca

**Descrição do Problema**: Adicione um método `search(valor)` à sua classe `BST` do exercício 144. O método deve retornar `true` se o valor existir na árvore e `false` caso contrário.

**Entrada (Input)**:
```javascript
bst.search(15)
bst.search(99)
```

**Saída Esperada (Output)**:
```
true
false
```

**Restrições/Observações**: A busca deve ser recursiva ou iterativa.

**Solução (Esqueleto)**:
```javascript
// Reutilizando e estendendo a classe BST do exercício 144
class Node {
  constructor(valor) { this.valor = valor; this.left = null; this.right = null; }
}
class BST {
  constructor() { this.root = null; }
  insert(valor) { /* ... implementação do ex 144 ... */
    const newNode = new Node(valor);
    if (this.root === null) { this.root = newNode; } else { this.insertNode(this.root, newNode); }
  }
  insertNode(node, newNode) {
    if (newNode.valor < node.valor) {
      if (node.left === null) { node.left = newNode; } else { this.insertNode(node.left, newNode); }
    } else {
      if (node.right === null) { node.right = newNode; } else { this.insertNode(node.right, newNode); }
    }
  }

  // Novo método
  search(valor) {
    return this.searchNode(this.root, valor);
  }

  searchNode(node, valor) {
    if (node === null) return false;
    if (valor < node.valor) return this.searchNode(node.left, valor);
    if (valor > node.valor) return this.searchNode(node.right, valor);
    return true; // valor === node.valor
  }
}

function exercicio202() {
  const bst = new BST();
  [10, 5, 15, 3, 7].forEach(v => bst.insert(v));
  console.log(bst.search(15)); // true
  console.log(bst.search(99)); // false
}

// exercicio202();
```

---

### Exercício 203: Árvore Binária de Busca (BST) - Travessia (In-Order)

**Descrição do Problema**: Adicione um método `inOrderTraverse()` à sua classe `BST` que retorne um array com os valores da árvore em ordem crescente.

**Entrada (Input)**:
```javascript
bst.inOrderTraverse()
```

**Saída Esperada (Output)**:
```
[3, 5, 7, 10, 15]
```

**Restrições/Observações**: A travessia in-order visita a sub-árvore esquerda, o nó e depois a sub-árvore direita.

**Solução (Esqueleto)**:
```javascript
// Estendendo a classe BST novamente
class BST_Ex203 extends BST {
  inOrderTraverse() {
    const result = [];
    this.traverse(this.root, result);
    return result;
  }

  traverse(node, result) {
    if (node !== null) {
      this.traverse(node.left, result);
      result.push(node.valor);
      this.traverse(node.right, result);
    }
  }
}

function exercicio203() {
  const bst = new BST_Ex203();
  [10, 5, 15, 3, 7].forEach(v => bst.insert(v));
  console.log(bst.inOrderTraverse());
}

// exercicio203();
```

---

### Exercício 204: Lista Encadeada - Remover Elemento

**Descrição do Problema**: Adicione um método `remove(valor)` à sua classe `LinkedList` do exercício 143. O método deve remover o primeiro nó que contém o valor especificado.

**Entrada (Input)**:
```javascript
lista.remove(2)
```

**Saída Esperada (Output)**:
```
1 -> 3 -> null
```

**Restrições/Observações**: Lide com os casos de remoção da cabeça (head) e de um nó no meio/fim.

**Solução (Esqueleto)**:
```javascript
// Estendendo a classe LinkedList do exercício 143
class Node_Ex204 { constructor(valor) { this.valor = valor; this.proximo = null; } }
class LinkedList_Ex204 {
  constructor() { this.head = null; this.size = 0; }
  add(valor) { /* ... implementação do ex 143 ... */
    const newNode = new Node_Ex204(valor);
    if (!this.head) { this.head = newNode; } else { let c = this.head; while (c.proximo) { c = c.proximo; } c.proximo = newNode; }
    this.size++;
  }
  printList() { /* ... implementação do ex 143 ... */
    let c = this.head; let r = \'\"; while (c) { r += `${c.valor} -> `; c = c.proximo; } r += \'null\"; console.log(r);
  }

  // Novo método
  remove(valor) {
    if (!this.head) return;

    if (this.head.valor === valor) {
      this.head = this.head.proximo;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.proximo && current.proximo.valor !== valor) {
      current = current.proximo;
    }

    if (current.proximo) {
      current.proximo = current.proximo.proximo;
      this.size--;
    }
  }
}

function exercicio204() {
  const lista = new LinkedList_Ex204();
  [1, 2, 3].forEach(v => lista.add(v));
  lista.remove(2);
  lista.printList();
}

// exercicio204();
```

---

### Exercício 205: Design Pattern Decorator (Conceito)

**Descrição do Problema**: Implemente o padrão Decorator. Crie uma classe base `Cafe` com um método `custo()`. Crie classes decoradoras como `ComLeite` e `ComAcucar` que adicionam custo ao café original.

**Entrada (Input)**:
```javascript
meuCafe = new Cafe()
meuCafe = new ComLeite(meuCafe)
meuCafe = new ComAcucar(meuCafe)
```

**Saída Esperada (Output)**:
```
Custo total: 7
```

**Restrições/Observações**: Os decoradores devem "envolver" o objeto original.

**Solução (Esqueleto)**:
```javascript
function exercicio205() {
  class Cafe {
    custo() { return 5; }
  }

  class ComLeite {
    constructor(cafe) {
      this.cafe = cafe;
    }
    custo() {
      return this.cafe.custo() + 1.5;
    }
  }

  class ComAcucar {
    constructor(cafe) {
      this.cafe = cafe;
    }
    custo() {
      return this.cafe.custo() + 0.5;
    }
  }

  let meuCafe = new Cafe();
  meuCafe = new ComLeite(meuCafe);
  meuCafe = new ComAcucar(meuCafe);

  console.log(`Custo total: ${meuCafe.custo()}`); // 5 + 1.5 + 0.5 = 7
}

// exercicio205();
```

---

### Exercício 206: Design Pattern Strategy (Conceito)

**Descrição do Problema**: Implemente o padrão Strategy. Crie um `Contexto` (ex: `CalculadoraDeFrete`) que use diferentes estratégias de cálculo (`FreteNormal`, `FreteExpresso`). O cliente deve poder trocar a estratégia em tempo de execução.

**Entrada (Input)**:
```javascript
calculadora.setStrategy(new FreteNormal())
calculadora.calcular(10)
calculadora.setStrategy(new FreteExpresso())
calculadora.calcular(10)
```

**Saída Esperada (Output)**:
```
Frete Normal: 10
Frete Expresso: 25
```

**Restrições/Observações**: O contexto delega o cálculo para a estratégia atual.

**Solução (Esqueleto)**:
```javascript
function exercicio206() {
  class FreteNormal {
    calcular(peso) { return peso * 1; }
  }

  class FreteExpresso {
    calcular(peso) { return peso * 2.5; }
  }

  class CalculadoraDeFrete {
    constructor() { this.strategy = null; }
    setStrategy(strategy) { this.strategy = strategy; }
    calcular(peso) {
      if (!this.strategy) throw new Error(\'Estratégia não definida\");
      return this.strategy.calcular(peso);
    }
  }

  const calculadora = new CalculadoraDeFrete();

  calculadora.setStrategy(new FreteNormal());
  console.log(\'Frete Normal: \' + calculadora.calcular(10));

  calculadora.setStrategy(new FreteExpresso());
  console.log(\'Frete Expresso: \' + calculadora.calcular(10));
}

// exercicio206();
```

---

### Exercício 207: `BigInt` - Operações Básicas

**Descrição do Problema**: Demonstre o uso de `BigInt` para realizar uma operação matemática que excederia `Number.MAX_SAFE_INTEGER`. Some dois `BigInt`s grandes.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(Um número `BigInt` muito grande)

**Restrições/Observações**: Use o sufixo `n` para criar `BigInt`s.

**Solução (Esqueleto)**:
```javascript
function exercicio207() {
  const numMaxSeguro = BigInt(Number.MAX_SAFE_INTEGER);
  console.log(\'Número máximo seguro: \' + numMaxSeguro);

  const numGrande1 = numMaxSeguro + 10n;
  const numGrande2 = numMaxSeguro + 20n;

  const soma = numGrande1 + numGrande2;
  console.log(\'Soma de BigInts: \' + soma);
}

// exercicio207();
```

---

### Exercício 208: Operador de Coalescência Nula (`??`)

**Descrição do Problema**: Crie uma função que receba uma variável que pode ser `null` ou `undefined`. Use o operador de coalescência nula para fornecer um valor padrão "Padrão" apenas para esses casos, mas não para `0` ou `\"\"` (string vazia).

**Entrada (Input)**:
```javascript
valor1 = null
valor2 = 0
valor3 = \"\"
```

**Saída Esperada (Output)**:
```
Resultado para null: Padrão
Resultado para 0: 0
Resultado para \"\": 
```

**Restrições/Observações**: Compare o resultado com o operador `||`.

**Solução (Esqueleto)**:
```javascript
function exercicio208(valor) {
  return valor ?? \'Padrão\";
}

// console.log(\'Resultado para null: \' + exercicio208(null));
// console.log(\'Resultado para undefined: \' + exercicio208(undefined));
// console.log(\'Resultado para 0: \' + exercicio208(0));
// console.log(\'Resultado para \"\": \' + exercicio208(\""));
```

---

### Exercício 209: Operador de Encadeamento Opcional (`?.`)

**Descrição do Problema**: Crie um objeto aninhado `usuario` que pode ou não ter a propriedade `endereco`, que por sua vez pode ou não ter a propriedade `rua`. Use o operador de encadeamento opcional para acessar `usuario.endereco.rua` sem causar um erro.

**Entrada (Input)**:
```javascript
usuario1 = { endereco: { rua: \'Rua A\" } }
usuario2 = { nome: \'Ana\" }
```

**Saída Esperada (Output)**:
```
Rua do usuário 1: Rua A
Rua do usuário 2: undefined
```

**Restrições/Observações**: Demonstre o acesso seguro a propriedades aninhadas.

**Solução (Esqueleto)**:
```javascript
function exercicio209() {
  const usuario1 = { endereco: { rua: \'Rua A\" } };
  const usuario2 = { nome: \'Ana\" };

  const rua1 = usuario1?.endereco?.rua;
  const rua2 = usuario2?.endereco?.rua;

  console.log(\'Rua do usuário 1: \' + rua1);
  console.log(\'Rua do usuário 2: \' + rua2);
}

// exercicio209();
```

---

### Exercício 210: `Atomics` e `SharedArrayBuffer` (Conceito)

**Descrição do Problema**: Demonstre o conceito de `SharedArrayBuffer` e `Atomics` para operações atômicas entre a thread principal e um worker. Crie um worker que incrementa um valor em um `SharedArrayBuffer` usando `Atomics.add()`.

**Entrada (Input)**:
(Dois arquivos: `main.js` e `worker.js`)

**Saída Esperada (Output)**:
```
Valor inicial: 0
Valor final (após worker): 1
```

**Restrições/Observações**: Este é um conceito avançado, focado na demonstração da API.

**Solução (Esqueleto)**:
```javascript
// worker.js
/*
const { parentPort } = require(\'worker_threads\');
parentPort.on(\'message\", (sab) => {
  const int32Array = new Int32Array(sab);
  Atomics.add(int32Array, 0, 1);
});
*/

// main.js
/*
const { Worker } = require(\'worker_threads\');
const sab = new SharedArrayBuffer(4); // 4 bytes para um Int32
const int32Array = new Int32Array(sab);

console.log(\'Valor inicial: \' + Atomics.load(int32Array, 0));

const worker = new Worker(\'./worker.js\');
worker.postMessage(sab);

worker.on(\'exit\", () => {
  console.log(\'Valor final (após worker): \' + Atomics.load(int32Array, 0));
});
*/

// Simulação:
function exercicio210() {
  console.log(\'Este exercício requer a execução de dois arquivos separados e é conceitual.\");
}

// exercicio210();
```

---

### Exercício 211: Internacionalização - `Intl.DateTimeFormat`

**Descrição do Problema**: Use `Intl.DateTimeFormat` para formatar uma data para os locales `pt-BR` e `en-US`, mostrando o nome do mês por extenso.

**Entrada (Input)**:
```javascript
data = new Date(2025, 9, 5) // 05 de Outubro de 2025
```

**Saída Esperada (Output)**:
```
pt-BR: 5 de outubro de 2025
en-US: October 5, 2025
```

**Restrições/Observações**: Use as opções do construtor `Intl.DateTimeFormat`.

**Solução (Esqueleto)**:
```javascript
function exercicio211() {
  const data = new Date(2025, 9, 5);
  const options = { year: \'numeric\', month: \'long\', day: \'numeric\' };

  const formatadorBR = new Intl.DateTimeFormat(\'pt-BR\", options);
  const formatadorUS = new Intl.DateTimeFormat(\'en-US\", options);

  console.log(\'pt-BR: \' + formatadorBR.format(data));
  console.log(\'en-US: \' + formatadorUS.format(data));
}

// exercicio211();
```

---

### Exercício 212: Internacionalização - `Intl.NumberFormat`

**Descrição do Problema**: Use `Intl.NumberFormat` para formatar um número como moeda para os locales `pt-BR` (Real) e `de-DE` (Euro).

**Entrada (Input)**:
```javascript
numero = 123456.789
```

**Saída Esperada (Output)**:
```
pt-BR: R$ 123.456,79
de-DE: 123.456,79 €
```

**Restrições/Observações**: Especifique `style: \'currency\'` e a moeda correspondente.

**Solução (Esqueleto)**:
```javascript
function exercicio212() {
  const numero = 123456.789;

  const formatadorBR = new Intl.NumberFormat(\'pt-BR\", { style: \'currency\', currency: \'BRL\' });
  const formatadorDE = new Intl.NumberFormat(\'de-DE\", { style: \'currency\', currency: \'EUR\' });

  console.log(\'pt-BR: \' + formatadorBR.format(numero));
  console.log(\'de-DE: \' + formatadorDE.format(numero));
}

// exercicio212();
```

---

### Exercício 213: Internacionalização - `Intl.Collator`

**Descrição do Problema**: Use `Intl.Collator` para ordenar um array de strings que contenham acentos, de acordo com as regras do locale `pt-BR`.

**Entrada (Input)**:
```javascript
palavras = [\'ímã\", \'avião\", \'elefante\"]
```

**Saída Esperada (Output)**:
```
[ \'avião\", \'elefante\", \'ímã\" ]
```

**Restrições/Observações**: Use o método `compare` do colator dentro de `Array.sort()`.

**Solução (Esqueleto)**:
```javascript
function exercicio213() {
  const palavras = [\'ímã\", \'avião\", \'elefante\"];
  const collator = new Intl.Collator(\'pt-BR\');

  palavras.sort(collator.compare);

  console.log(palavras);
}

// exercicio213();
```

---

### Exercício 214: Expressão Regular - Lookbehind Positivo

**Descrição do Problema**: Use uma expressão regular com lookbehind positivo (`(?<=...)`) para encontrar números que são precedidos pelo símbolo de dólar (`$`).

**Entrada (Input)**:
```
texto = \'O preço é $100, mas o custo é 50.\"
```

**Saída Esperada (Output)**:
```
[ \'100\" ]
```

**Restrições/Observações**: O lookbehind verifica o que vem antes sem incluir no match.

**Solução (Esqueleto)**:
```javascript
function exercicio214(texto) {
  const regex = /(?<=\$)\d+/g;
  return texto.match(regex);
}

// console.log(exercicio214(\'O preço é $100, mas o custo é 50.\'));
```

---

### Exercício 215: Expressão Regular - Lookbehind Negativo

**Descrição do Problema**: Use uma expressão regular com lookbehind negativo (`(?<!...)`) para encontrar números que **não** são precedidos pelo símbolo de dólar (`$`).

**Entrada (Input)**:
```
texto = \'O preço é $100, mas o custo é 50.\"
```

**Saída Esperada (Output)**:
```
[ \'50\" ]
```

**Restrições/Observações**: O lookbehind negativo garante que o padrão anterior não exista.

**Solução (Esqueleto)**:
```javascript
function exercicio215(texto) {
  // Adiciona um espaço antes para garantir que o lookbehind funcione no início da string
  const regex = /(?<!\$)\b\d+\b/g;
  return (\' \' + texto).match(regex);
}

// console.log(exercicio215(\'O preço é $100, mas o custo é 50.\'));
```

---

### Exercício 216: Expressão Regular - Grupos de Captura Nomeados

**Descrição do Problema**: Use grupos de captura nomeados para extrair o ano, mês e dia de uma data no formato `YYYY-MM-DD`. Imprima o objeto `groups` do resultado.

**Entrada (Input)**:
```
data = \'2025-10-05\"
```

**Saída Esperada (Output)**:
```javascript
{ ano: \'2025\", mes: \'10\", dia: \'05\" }
```

**Restrições/Observações**: Use a sintaxe `(?<nome>...)`.

**Solução (Esqueleto)**:
```javascript
function exercicio216(data) {
  const regex = /(?<ano>\d{4})-(?<mes>\d{2})-(?<dia>\d{2})/;
  const resultado = data.match(regex);
  return resultado.groups;
}

// console.log(exercicio216(\'2025-10-05\'));
```

---

### Exercício 217: `Array.prototype.flatMap()`

**Descrição do Problema**: Dado um array de frases, use `flatMap()` para primeiro dividir cada frase em palavras e depois achatar o resultado em um único array de palavras.

**Entrada (Input)**:
```javascript
frases = [\'Olá mundo\", \'JavaScript é incrível\"]
```

**Saída Esperada (Output)**:
```
[ \'Olá\", \'mundo\", \'JavaScript\", \'é\", \'incrível\" ]
```

**Restrições/Observações**: `flatMap` é equivalente a `map` seguido de `flat` com profundidade 1.

**Solução (Esqueleto)**:
```javascript
function exercicio217(frases) {
  return frases.flatMap(frase => frase.split(\' \'));
}

// console.log(exercicio217([\'Olá mundo\", \'JavaScript é incrível\"]));
```

---

### Exercício 218: `Object.fromEntries()`

**Descrição do Problema**: Dado um `Map`, converta-o de volta para um objeto usando `Object.fromEntries()`.

**Entrada (Input)**:
```javascript
map = new Map([ [\'a\", 1], [\'b\", 2] ])
```

**Saída Esperada (Output)**:
```javascript
{ a: 1, b: 2 }
```

**Restrições/Observações**: `Object.fromEntries` é o inverso de `Object.entries`.

**Solução (Esqueleto)**:
```javascript
function exercicio218(map) {
  return Object.fromEntries(map);
}

// const map = new Map([ [\'a\", 1], [\'b\", 2] ]);
// console.log(exercicio218(map));
```

---

### Exercício 219: `String.prototype.matchAll()`

**Descrição do Problema**: Use `matchAll()` para encontrar todas as ocorrências de uma palavra em uma string, incluindo seus índices. Itere sobre o resultado e imprima cada match.

**Entrada (Input)**:
```
texto = \'teste aqui, teste ali, teste em todo lugar.\"
palavra = /teste/g
```

**Saída Esperada (Output)**:
```
Encontrado \'teste\' no índice 0
Encontrado \'teste\' no índice 12
Encontrado \'teste\' no índice 23
```

**Restrições/Observações**: `matchAll` retorna um iterador.

**Solução (Esqueleto)**:
```javascript
function exercicio219(texto, regex) {
  const matches = texto.matchAll(regex);
  for (const match of matches) {
    console.log(`Encontrado \'${match[0]}\' no índice ${match.index}`);
  }
}

// exercicio219(\'teste aqui, teste ali, teste em todo lugar.\', /teste/g);
```

---

### Exercício 220: `globalThis`

**Descrição do Problema**: Escreva uma função que imprima o objeto global do ambiente (seja `window` no navegador, `global` no Node.js antigo, ou o objeto global em um Worker) de forma agnóstica, usando `globalThis`.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
O objeto global é igual a globalThis? true
```

**Restrições/Observações**: Demonstre que `globalThis` aponta para o objeto global correto no ambiente Node.js.

**Solução (Esqueleto)**:
```javascript
function exercicio220() {
  // No Node.js, o objeto global principal é `global`
  console.log(\'O objeto global é igual a globalThis? \' + (global === globalThis));
}

// exercicio220();
```

---

### Exercício 221: Validação de Senha Forte com Regex

**Descrição do Problema**: Crie uma função que use uma única expressão regular para validar se uma senha é forte. Critérios: mínimo 8 caracteres, pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.

**Entrada (Input)**:
```
- \'Senha@123\"
- \'senhafraca\"
- \'Senha123\"
```

**Saída Esperada (Output)**:
```
true
false
false
```

**Restrições/Observações**: Use lookaheads positivos para verificar a presença de cada tipo de caractere.

**Solução (Esqueleto)**:
```javascript
function exercicio221(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(senha);
}

// console.log(exercicio221(\'Senha@123\'));
// console.log(exercicio221(\'senhafraca\'));
// console.log(exercicio221(\'Senha123\'));
```

---

### Exercício 222: Recursão de Cauda (Tail Call Optimization) - Conceito

**Descrição do Problema**: Reescreva a função fatorial de forma que a chamada recursiva seja a última operação (recursão de cauda). Embora o Node.js não otimize isso por padrão, é um conceito importante.

**Entrada (Input)**:
```
fatorialDeCauda(5)
```

**Saída Esperada (Output)**:
```
120
```

**Restrições/Observações**: A função deve usar um acumulador como parâmetro.

**Solução (Esqueleto)**:
```javascript
function exercicio222(n, acumulador = 1) {
  if (n === 0) {
    return acumulador;
  }
  return exercicio222(n - 1, n * acumulador);
}

// console.log(exercicio222(5));
// console.log(exercicio222(10));
```

---

### Exercício 223: Composição de Funções

**Descrição do Problema**: Crie uma função `compose` que receba duas ou mais funções e retorne uma nova função que é a composição delas (ex: `compose(f, g)` é `x => f(g(x))`).

**Entrada (Input)**:
```javascript
dobrar = x => x * 2
somar1 = x => x + 1
funcaoComposta = compose(dobrar, somar1)
funcaoComposta(5) // dobrar(somar1(5)) = dobrar(6) = 12
```

**Saída Esperada (Output)**:
```
12
```

**Restrições/Observações**: Use `reduce()` para compor as funções.

**Solução (Esqueleto)**:
```javascript
function exercicio223(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

// const dobrar = x => x * 2;
// const somar1 = x => x + 1;
// const funcaoComposta = exercicio223(dobrar, somar1);
// console.log(funcaoComposta(5));
```

---

### Exercício 224: `Top-level await` (Conceito)

**Descrição do Problema**: Demonstre o conceito de `top-level await`. Crie um arquivo `.mjs` que use `await` fora de uma função `async` para buscar um dado e depois o utilize.

**Entrada (Input)**:
(Arquivo `app.mjs`)

**Saída Esperada (Output)**:
```
Dado buscado: { id: 1, nome: \'Exemplo\" }
```

**Restrições/Observações**: Requer um módulo ES (`.mjs`) e uma Promise para aguardar.

**Solução (Esqueleto)**:
```javascript
// app.mjs
/*
const buscarDado = new Promise(resolve => {
  setTimeout(() => resolve({ id: 1, nome: \'Exemplo\" }), 100);
});

console.log(\'Buscando dado...\');
const dado = await buscarDado;
console.log(\'Dado buscado: \' + JSON.stringify(dado));
*/

// Simulação:
function exercicio224() {
  console.log(\'Este exercício requer a execução em um arquivo .mjs separado.\");
}

// exercicio224();
```

---

### Exercício 225: Criar um Servidor HTTP Básico (Node.js)

**Descrição do Problema**: Use o módulo `http` do Node.js para criar um servidor web simples que escute na porta 3000 e responda a todas as requisições com "Olá, Mundo!".

**Entrada (Input)**:
(Executar o script e acessar `http://localhost:3000`)

**Saída Esperada (Output)**:
(Servidor rodando no console)

**Restrições/Observações**: Requer o módulo `http`.

**Solução (Esqueleto)**:
```javascript
function exercicio225() {
  const http = require(\'http\');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { \'Content-Type\': \'text/plain\' });
    res.end(\'Olá, Mundo!\');
  });

  server.listen(3000, () => {
    console.log(\'Servidor rodando em http://localhost:3000/\');
  });

  // Para parar o servidor após um tempo em um ambiente de teste:
  // setTimeout(() => server.close(), 1000);
}

// exercicio225();
```

---

### Exercício 226: Servidor HTTP com Rotas Simples

**Descrição do Problema**: Melhore o servidor anterior para responder de forma diferente com base na URL da requisição. Se a URL for `/`, responda "Página Inicial". Se for `/sobre`, responda "Página Sobre". Para outras, responda "Página não encontrada".

**Entrada (Input)**:
(Acessar `/` e `/sobre`)

**Saída Esperada (Output)**:
(Respostas diferentes no navegador/cliente)

**Restrições/Observações**: Verifique `req.url`.

**Solução (Esqueleto)**:
```javascript
function exercicio226() {
  const http = require(\'http\');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { \'Content-Type\': \'text/plain\' });
    if (req.url === \'/\') {
      res.end(\'Página Inicial\');
    } else if (req.url === \'/sobre\') {
      res.end(\'Página Sobre\');
    } else {
      res.writeHead(404);
      res.end(\'Página não encontrada\');
    }
  });

  server.listen(3001, () => {
    console.log(\'Servidor com rotas rodando em http://localhost:3001/\');
  });

  // setTimeout(() => server.close(), 1000);
}

// exercicio226();
```

---

### Exercício 227: Servidor HTTP que Serve JSON

**Descrição do Problema**: Crie um servidor HTTP que, ao receber uma requisição em `/api/usuario`, responda com um objeto JSON `{ id: 1, nome: \'Usuário Teste\" }`.

**Entrada (Input)**:
(Acessar `/api/usuario`)

**Saída Esperada (Output)**:
(Resposta JSON no cliente)

**Restrições/Observações**: Defina o `Content-Type` para `application/json`.

**Solução (Esqueleto)**:
```javascript
function exercicio227() {
  const http = require(\'http\');

  const server = http.createServer((req, res) => {
    if (req.url === \'/api/usuario\') {
      res.writeHead(200, { \'Content-Type\': \'application/json\' });
      const usuario = { id: 1, nome: \'Usuário Teste\" };
      res.end(JSON.stringify(usuario));
    } else {
      res.writeHead(404);
      res.end(\'Endpoint não encontrado\');
    }
  });

  server.listen(3002, () => {
    console.log(\'Servidor JSON rodando em http://localhost:3002/\');
  });

  // setTimeout(() => server.close(), 1000);
}

// exercicio227();
```

---

### Exercício 228: Cliente HTTP - `http.get`

**Descrição do Problema**: Use `http.get` para fazer uma requisição a uma API pública (ex: `http://jsonplaceholder.typicode.com/todos/1`) e imprima o corpo da resposta no console.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(O corpo da resposta JSON da API)

**Restrições/Observações**: A resposta chega em chunks, então é preciso concatená-los.

**Solução (Esqueleto)**:
```javascript
function exercicio228() {
  const http = require(\'http\');

  http.get(\'http://jsonplaceholder.typicode.com/todos/1\", (res) => {
    let data = \'\";
    res.on(\'data\", (chunk) => { data += chunk; });
    res.on(\'end\", () => {
      console.log(JSON.parse(data));
    });
  }).on(\'error\", (err) => {
    console.error(\'Erro: \' + err.message);
  });
}

// exercicio228();
```

---

### Exercício 229: Cliente HTTP - `http.request` (POST)

**Descrição do Problema**: Use `http.request` para fazer uma requisição POST para uma API de teste (ex: `jsonplaceholder.typicode.com/posts`), enviando um objeto JSON no corpo. Imprima a resposta.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(A resposta da API, geralmente o objeto criado com um novo ID)

**Restrições/Observações**: Configure os `options` (método, headers) e escreva os dados no corpo da requisição.

**Solução (Esqueleto)**:
```javascript
function exercicio229() {
  const http = require(\'http\');

  const postData = JSON.stringify({
    title: \'foo\",
    body: \'bar\",
    userId: 1,
  });

  const options = {
    hostname: \'jsonplaceholder.typicode.com\",
    port: 80,
    path: \'/posts\",
    method: \'POST\",
    headers: {
      \'Content-Type\': \'application/json\",
      \'Content-Length\': Buffer.byteLength(postData),
    },
  };

  const req = http.request(options, (res) => {
    let data = \'\";
    res.on(\'data\", (chunk) => { data += chunk; });
    res.on(\'end\", () => {
      console.log(\'Resposta do POST: \' + data);
    });
  });

  req.on(\'error\", (e) => console.error(`Problema com a requisição: ${e.message}`));
  req.write(postData);
  req.end();
}

// exercicio229();
```

---

### Exercício 230: `URLSearchParams`

**Descrição do Problema**: Crie um objeto `URLSearchParams` a partir de uma string de query `?id=123&categoria=livros`. Modifique um parâmetro, adicione um novo e imprima a string de query resultante.

**Entrada (Input)**:
```
query = \'id=123&categoria=livros\"
```

**Saída Esperada (Output)**:
```
Query final: id=123&categoria=tecnologia&pagina=1
```

**Restrições/Observações**: Use os métodos `set()`, `append()` e `toString()`.

**Solução (Esqueleto)**:
```javascript
function exercicio230() {
  const params = new URLSearchParams(\'id=123&categoria=livros\');
  params.set(\'categoria\", \'tecnologia\');
  params.append(\'pagina\", \'1\');
  console.log(\'Query final: \' + params.toString());
}

// exercicio230();
```

---

### Exercício 231: `URL` API

**Descrição do Problema**: Crie um objeto `URL` a partir de uma string de URL completa. Acesse e imprima diferentes partes da URL, como `protocol`, `hostname`, `pathname` e `searchParams`.

**Entrada (Input)**:
```
urlString = \'https://www.exemplo.com/caminho?id=123#secao\"
```

**Saída Esperada (Output)**:
```
Protocolo: https:
Hostname: www.exemplo.com
Pathname: /caminho
Search Param \'id\': 123
```

**Restrições/Observações**: O objeto `URL` parseia a string em componentes.

**Solução (Esqueleto)**:
```javascript
function exercicio231() {
  const myURL = new URL(\'https://www.exemplo.com/caminho?id=123#secao\');

  console.log(\'Protocolo: \' + myURL.protocol);
  console.log(\'Hostname: \' + myURL.hostname);
  console.log(\'Pathname: \' + myURL.pathname);
  console.log(\'Search Param \'id\': \' + myURL.searchParams.get(\'id\'));
}

// exercicio231();
```

---

### Exercício 232: `console.time` e `console.timeEnd`

**Descrição do Problema**: Use `console.time()` e `console.timeEnd()` para medir o tempo de execução de um loop que executa 1 milhão de vezes.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Loop: X.XXXms
```
(O tempo exato irá variar)

**Restrições/Observações**: Use o mesmo rótulo para `time` e `timeEnd`.

**Solução (Esqueleto)**:
```javascript
function exercicio232() {
  console.time(\'Loop\');
  for (let i = 0; i < 1000000; i++) {
    // Operação vazia para medir o tempo do loop
  }
  console.timeEnd(\'Loop\');
}

// exercicio232();
```

---

### Exercício 233: `console.table`

**Descrição do Problema**: Crie um array de objetos (representando usuários) e use `console.table()` para exibi-los em um formato de tabela no console.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(Uma tabela bem formatada no console)

**Restrições/Observações**: `console.table` é ótimo para visualizar arrays de objetos ou objetos.

**Solução (Esqueleto)**:
```javascript
function exercicio233() {
  const usuarios = [
    { id: 1, nome: \'Alice\', email: \'alice@email.com\" },
    { id: 2, nome: \'Bob\', email: \'bob@email.com\" },
    { id: 3, nome: \'Charlie\', email: \'charlie@email.com\" },
  ];
  console.table(usuarios);
}

// exercicio233();
```

---

### Exercício 234: `console.trace`

**Descrição do Problema**: Crie uma função aninhada que chame outra. Na função mais interna, use `console.trace()` para imprimir a pilha de chamadas (stack trace) até aquele ponto.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(Uma pilha de chamadas mostrando a sequência de funções chamadas)

**Restrições/Observações**: Útil para depurar de onde uma função está sendo chamada.

**Solução (Esqueleto)**:
```javascript
function exercicio234() {
  function funcaoA() {
    funcaoB();
  }

  function funcaoB() {
    funcaoC();
  }

  function funcaoC() {
    console.trace(\'Rastreando a chamada\');
  }

  funcaoA();
}

// exercicio234();
```

---

### Exercício 235: `process.argv`

**Descrição do Problema**: Escreva um script Node.js que leia argumentos da linha de comando usando `process.argv` e os imprima. Demonstre como executá-lo com argumentos.

**Entrada (Input)**:
(Linha de comando: `node meu_script.js arg1 arg2`)

**Saída Esperada (Output)**:
```
Argumentos: [ \'arg1\", \'arg2\" ]
```

**Restrições/Observações**: `process.argv` inclui o caminho do node e do script nos dois primeiros elementos.

**Solução (Esqueleto)**:
```javascript
function exercicio235() {
  // process.argv[0] é o executável do Node
  // process.argv[1] é o caminho para o script
  const args = process.argv.slice(2);
  console.log(\'Argumentos: \' + JSON.stringify(args));
}

// Para testar, execute no terminal: node -e \'(${exercicio235.toString()})()\' arg1 arg2
// exercicio235();
```

---

### Exercício 236: `process.env`

**Descrição do Problema**: Escreva um script Node.js que leia uma variável de ambiente (ex: `USUARIO`) e a imprima. Se não estiver definida, imprima um valor padrão.

**Entrada (Input)**:
(Linha de comando: `USUARIO=Gemini node meu_script.js`)

**Saída Esperada (Output)**:
```
Olá, Gemini!
```

**Restrições/Observações**: As variáveis de ambiente são acessadas através de `process.env`.

**Solução (Esqueleto)**:
```javascript
function exercicio236() {
  const nomeUsuario = process.env.USUARIO || \'Visitante\";
  console.log(`Olá, ${nomeUsuario}!`);
}

// Para testar, execute no terminal: USUARIO=Gemini node -e \'(${exercicio236.toString()})()\'
// exercicio236();
```

---

### Exercício 237: `process.exit()`

**Descrição do Problema**: Escreva um script que execute uma tarefa e, se um erro ocorrer, saia do processo com um código de status de erro (1). Se for bem-sucedido, saia com código 0.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
(O processo termina com um código de status específico)

**Restrições/Observações**: Use `process.exit(code)`.

**Solução (Esqueleto)**:
```javascript
function exercicio237(deveFalhar) {
  console.log(\'Iniciando tarefa...\');
  if (deveFalhar) {
    console.error(\'Ocorreu um erro! Saindo...\');
    process.exit(1);
  } else {
    console.log(\'Tarefa concluída com sucesso!\');
    process.exit(0);
  }
}

// Para testar, execute no terminal:
// node -e \'(${exercicio237.toString()})(false)\'
// node -e \'(${exercicio237.toString()})(true)\'
```

---

### Exercício 238: `os` Module - Informações do Sistema

**Descrição do Problema**: Use o módulo `os` do Node.js para obter e imprimir o tipo de sistema operacional, a memória total em GB e o número de CPUs.

**Entrada (Input)**:
Não há entrada direta.

**Saída Esperada (Output)**:
```
Tipo de SO: (ex: Linux)
Memória Total (GB): (ex: 15.5)
Número de CPUs: (ex: 8)
```

**Restrições/Observações**: Requer o módulo `os`.

**Solução (Esqueleto)**:
```javascript
function exercicio238() {
  const os = require(\'os\');

  console.log(\'Tipo de SO: \' + os.type());
  const memTotalGB = os.totalmem() / 1024 / 1024 / 1024;
  console.log(\'Memória Total (GB): \' + memTotalGB.toFixed(1));
  console.log(\'Número de CPUs: \' + os.cpus().length);
}

// exercicio238();
```

---

### Exercício 239: `path` Module - Manipulação de Caminhos

**Descrição do Problema**: Use o módulo `path` para juntar segmentos de um caminho, extrair o nome do arquivo e a extensão de um caminho completo.

**Entrada (Input)**:
```
caminho = \'/home/usuario/documentos/relatorio.pdf\"
```

**Saída Esperada (Output)**:
```
Caminho completo: /home/usuario/documentos/relatorio.pdf
Nome do arquivo: relatorio.pdf
Extensão: .pdf
```

**Restrições/Observações**: Requer o módulo `path`.

**Solução (Esqueleto)**:
```javascript
function exercicio239() {
  const path = require(\'path\');

  const caminhoCompleto = path.join(\'/home\", \'usuario\", \'documentos\", \'relatorio.pdf\');
  console.log(\'Caminho completo: \' + caminhoCompleto);

  const nomeArquivo = path.basename(caminhoCompleto);
  console.log(\'Nome do arquivo: \' + nomeArquivo);

  const extensao = path.extname(caminhoCompleto);
  console.log(\'Extensão: \' + extensao);
}

// exercicio239();
```

---

### Exercício 240: `fs.promises` API

**Descrição do Problema**: Reescreva o exercício de leitura de arquivo assíncrona (Exercício 132) usando a API de Promises do `fs` (`fs.promises`) com `async/await`.

**Entrada (Input)**:
(Arquivo `dados_promise.txt` criado previamente)

**Saída Esperada (Output)**:
```
Conteúdo do arquivo (Promise): Conteúdo para promises.
```

**Restrições/Observações**: Use `require(\'fs\').promises`.

**Solução (Esqueleto)**:
```javascript
// Crie o arquivo primeiro:
// shell.exec(\'echo "Conteúdo para promises." > dados_promise.txt\");

async function exercicio240() {
  const fs = require(\'fs\').promises;
  try {
    const data = await fs.readFile(\'dados_promise.txt\", \'utf8\');
    console.log(\'Conteúdo do arquivo (Promise): \' + data);
  } catch (err) {
    console.error(\'Erro ao ler arquivo com promises:\", err);
  }
}

// exercicio240();
```

---

### Exercício 241: Remover Duplicatas de Array de Objetos

**Descrição do Problema**: Crie uma função que receba um array de objetos e uma chave. A função deve retornar um novo array contendo apenas os objetos únicos com base no valor daquela chave.

**Entrada (Input)**:
```javascript
array = [{id: 1, nome: \'A\"}, {id: 2, nome: \'B\"}, {id: 1, nome: \'C\"}]
chave = \'id\"
```

**Saída Esperada (Output)**:
```javascript
[{id: 1, nome: \'A\"}, {id: 2, nome: \'B\"}]
```

**Restrições/Observações**: A primeira ocorrência do objeto deve ser mantida.

**Solução (Esqueleto)**:
```javascript
function exercicio241(array, chave) {
  const vistos = new Set();
  return array.filter(obj => {
    const valor = obj[chave];
    if (vistos.has(valor)) {
      return false;
    } else {
      vistos.add(valor);
      return true;
    }
  });
}

// const array = [{id: 1, nome: \'A\"}, {id: 2, nome: \'B\"}, {id: 1, nome: \'C\"}];
// console.log(exercicio241(array, \'id\'));
```

---

### Exercício 242: Agrupar Array de Objetos por Chave

**Descrição do Problema**: Crie uma função que receba um array de objetos e uma chave, e agrupe os objetos em um novo objeto com base nos valores da chave especificada.

**Entrada (Input)**:
```javascript
array = [{cat: \'A\", val: 1}, {cat: \'B\", val: 2}, {cat: \'A\", val: 3}]
chave = \'cat\"
```

**Saída Esperada (Output)**:
```javascript
{
  A: [{cat: \'A\", val: 1}, {cat: \'A\", val: 3}],
  B: [{cat: \'B\", val: 2}]
}
```

**Restrições/Observações**: Use `reduce()`.

**Solução (Esqueleto)**:
```javascript
function exercicio242(array, chave) {
  return array.reduce((acc, obj) => {
    const grupo = obj[chave];
    if (!acc[grupo]) {
      acc[grupo] = [];
    }
    acc[grupo].push(obj);
    return acc;
  }, {});
}

// const array = [{cat: \'A\", val: 1}, {cat: \'B\", val: 2}, {cat: \'A\", val: 3}];
// console.log(exercicio242(array, \'cat\'));
```

---

### Exercício 243: Debounce de Função

**Descrição do Problema**: Crie uma função `debounce(fn, delay)` que receba uma função e um atraso. A função retornada só deve ser executada após o atraso ter passado desde a última chamada.

**Entrada (Input)**:
(Chamadas rápidas e sucessivas da função debounced)

**Saída Esperada (Output)**:
(A função original é executada apenas uma vez, após a última chamada)

**Restrições/Observações**: Use `setTimeout` e `clearTimeout`.

**Solução (Esqueleto)**:
```javascript
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Exemplo de uso:
// const minhaFuncao = () => console.log(\'Função executada!\');
// const funcaoDebounced = debounce(minhaFuncao, 1000);
// funcaoDebounced();
// funcaoDebounced(); // Esta chamada reinicia o timer
```

---

### Exercício 244: Throttle de Função

**Descrição do Problema**: Crie uma função `throttle(fn, limit)` que receba uma função e um limite de tempo. A função retornada só poderá ser executada uma vez dentro do período de tempo especificado.

**Entrada (Input)**:
(Chamadas rápidas e sucessivas da função throttled)

**Saída Esperada (Output)**:
(A função original é executada no máximo uma vez a cada `limit` ms)

**Restrições/Observações**: Útil para controlar a taxa de eventos como scroll ou resize.

**Solução (Esqueleto)**:
```javascript
function throttle(fn, limit) {
  let emThrottle;
  return function(...args) {
    if (!emThrottle) {
      fn.apply(this, args);
      emThrottle = true;
      setTimeout(() => (emThrottle = false), limit);
    }
  };
}

// Exemplo de uso:
// const minhaFuncao = () => console.log(\'Função executada!\');
// const funcaoThrottled = throttle(minhaFuncao, 1000);
// setInterval(funcaoThrottled, 100); // Tenta chamar a cada 100ms
```

---

### Exercício 245: Validação de CNPJ (Formato)

**Descrição do Problema**: Crie uma função que use expressão regular para validar se uma string está no formato de CNPJ (`XX.XXX.XXX/XXXX-XX`).

**Entrada (Input)**:
```
- \'12.345.678/0001-90\"
- \'12345678000190\"
```

**Saída Esperada (Output)**:
```
true
false
```

**Restrições/Observações**: A validação é apenas do formato, não dos dígitos verificadores.

**Solução (Esqueleto)**:
```javascript
function exercicio245(cnpj) {
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  return regex.test(cnpj);
}

// console.log(exercicio245(\'12.345.678/0001-90\'));
// console.log(exercicio245(\'12345678000190\'));
```

---

### Exercício 246: Inverter Chaves e Valores de um Objeto

**Descrição do Problema**: Crie uma função que receba um objeto e retorne um novo objeto com as chaves e valores invertidos. Assuma que todos os valores são strings únicas.

**Entrada (Input)**:
```javascript
objeto = { a: \'1\", b: \'2\" }
```

**Saída Esperada (Output)**:
```javascript
{ \'1\": \'a\", \'2\": \'b\" }
```

**Restrições/Observações**: Use `Object.entries()` e `reduce()` ou `Object.fromEntries()`.

**Solução (Esqueleto)**:
```javascript
function exercicio246(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}

// console.log(exercicio246({ a: \'1\", b: \'2\" }));
```

---

### Exercício 247: Verificar se um Objeto está Vazio

**Descrição do Problema**: Crie uma função que receba um objeto e retorne `true` se ele não tiver nenhuma propriedade própria, e `false` caso contrário.

**Entrada (Input)**:
```
- {}
- { a: 1 }
```

**Saída Esperada (Output)**:
```
true
false
```

**Restrições/Observações**: Use `Object.keys()`.

**Solução (Esqueleto)**:
```javascript
function exercicio247(obj) {
  return Object.keys(obj).length === 0;
}

// console.log(exercicio247({}));
// console.log(exercicio247({ a: 1 }));
```

---

### Exercício 248: Implementar `Array.prototype.meuMap`

**Descrição do Problema**: Estenda o protótipo de `Array` com uma função `meuMap` que se comporte como o método `map` original.

**Entrada (Input)**:
```javascript
[1, 2, 3].meuMap(x => x * 2)
```

**Saída Esperada (Output)**:
```
[2, 4, 6]
```

**Restrições/Observações**: Não use o método `map` original na sua implementação. Modificar protótipos de objetos nativos não é uma boa prática em produção.

**Solução (Esqueleto)**:
```javascript
Array.prototype.meuMap = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i], i, this));
  }
  return resultado;
};

function exercicio248() {
  const arr = [1, 2, 3];
  console.log(arr.meuMap(x => x * 2));
}

// exercicio248();
```

---

### Exercício 249: Implementar `Array.prototype.meuFilter`

**Descrição do Problema**: Estenda o protótipo de `Array` com uma função `meuFilter` que se comporte como o método `filter` original.

**Entrada (Input)**:
```javascript
[1, 2, 3, 4].meuFilter(x => x % 2 === 0)
```

**Saída Esperada (Output)**:
```
[2, 4]
```

**Restrições/Observações**: Não use o método `filter` original na sua implementação.

**Solução (Esqueleto)**:
```javascript
Array.prototype.meuFilter = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  return resultado;
};

function exercicio249() {
  const arr = [1, 2, 3, 4];
  console.log(arr.meuFilter(x => x % 2 === 0));
}

// exercicio249();
```

---

### Exercício 250: Implementar `Promise.all`

**Descrição do Problema**: Crie uma função `meuPromiseAll` que receba um array de promises e se comporte como `Promise.all`.

**Entrada (Input)**:
```javascript
meuPromiseAll([p1, p2])
```

**Saída Esperada (Output)**:
(Uma promise que resolve com um array de resultados)

**Restrições/Observações**: Lide com o caso de sucesso (todas resolvem) e de falha (qualquer uma rejeita).

**Solução (Esqueleto)**:
```javascript
function meuPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resultados = [];
    let promisesConcluidas = 0;
    const totalPromises = promises.length;

    if (totalPromises === 0) {
      resolve(resultados);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(valor => {
          resultados[index] = valor;
          promisesConcluidas++;
          if (promisesConcluidas === totalPromises) {
            resolve(resultados);
          }
        })
        .catch(reject); // Rejeita assim que a primeira promise falhar
    });
  });
}

// Exemplo de uso:
// const p1 = Promise.resolve(1);
// const p2 = new Promise(resolve => setTimeout(() => resolve(2), 100));
// meuPromiseAll([p1, p2]).then(console.log); // [1, 2]
```

---



# Conclusão

Esta coleção de 250 exercícios de JavaScript foi projetada para fornecer uma jornada de aprendizado abrangente e progressiva, desde os conceitos mais básicos até os tópicos mais avançados da linguagem. Ao trabalhar através destes exercícios, você terá a oportunidade de solidificar seu conhecimento em manipulação de dados, programação funcional, orientação a objetos, algoritmos, estruturas de dados, programação assíncrona e muito mais, tudo dentro de um ambiente Node.js puro, sem a necessidade de um navegador.

Esperamos que este material sirva como uma ferramenta valiosa para estudo, prática e aprimoramento de suas habilidades em JavaScript. Continue explorando, construindo e desafiando a si mesmo para se tornar um desenvolvedor cada vez mais proficiente.

Bons estudos!


Lista 1 - Expressões, entrada e saída de dados
Leia dois números inteiros e escreva o resultado de sua soma.
Leia dois números inteiros e escreva o resultado de sua subtração.
Leia dois números inteiros e escreva o resultado de sua multiplicação.
Leia dois números inteiros (a e b) e escreva o resultado da divisão a / b.
Leia dois números inteiros (a e b) e escreva o resultado do resto da divisão a % b.
Leia dois números reais e escreva o resultado de sua soma.
Leia o nome de uma pessoa e escreva uma frase de saudação, como: Olá, Fulano.
A média aritmética de dois ou mais termos é o quociente do resultado da divisão da soma dos números dados pela quantidade de números somados. Elabore um algoritmo que leia as 4 notas de um aluno e escreva sua média aritmética.
A autonomia de um veículo é baseada em quantos quilômetros ele consegue percorrer a cada litro de combustível consumido. Por exemplo, é comum afirmar que tal carro é capaz de fazer 15 quilômetros por litro de combustível. Com base nisso, elabore um algoritmo que leia uma distância percorrida em quilômetros e uma quantidade de litros de combustível consumidos, e informe quantos quilômetros este veículo pode percorrer com cada litro.
A velocidade média de um veículo pode ser calculada se tivermos os seguintes valores: a distância percorrida e o tempo gasto para percorrer esta distância. Com base nisso, elabore um algoritmo que leia uma distância percorrida em quilômetros e o tempo gasto em horas, e informe a velocidade média desse veículo.
Alguns países de língua inglesa, como os EUA, utilizam da unidade de medida grau Fahrenheit como escala de temperatura. Para converter uma temperatura de Celsius para Fahrenheit, podemos aplicar a fórmula F=(9*C+160)/5 ou a fórmula F=C*1.8+32, onde F é a temperatura em Fahrenheit e C a temperatura em Celsius. Elabore um algoritmo que leia uma temperatura em graus Celsius e a escreva convertida em graus Fahrenheit.
Para auxiliar uma loja que deseja parcelar o valor das compras de seus clientes, elabore um algoritmo que leia o valor de uma compra e o número de prestações desejadas, e escreva o valor das prestações.
No comércio, os preços dos produtos geralmente são definidos com base em uma margem percentual de lucro. Considere um produto adquirido por uma loja pelo valor de R$ 100,00. Se esta loja aplicar a este produto um percentual de 15% de lucro, o produto será revendido pelo valor de R$ 115,00. Elabore um algoritmo que leia o valor de compra de um produto e o percentual de lucro desejado, e escreva o valor de revenda deste produto.
Você foi encarregado de realizar uma pesquisa sobre Inclusão Digital. A sua pesquisa deverá apresentar o percentual de alunos da sua escola que possuem acesso à internet. Para isso, elabore um algoritmo que leia o número total de alunos da sua escola e o número de alunos que possuem acesso à internet, por fim, com base nestes dados, escreva o percentual de alunos com acesso à internet. Ex.: Em uma escola com 200 alunos, apenas 50 alunos possuem acesso à internet, o que equivale a 25% destes 200 alunos.
Em uma pequena loja de eletrônica são vendidos resistores, diodos e transistores. Seus preços são R$ 0.70, R$ 0.80 e R$ 0.95, respectivamente. Têm-se os preços unitários de cada tipo de peça e sabe-se que sobre estes preços incidem descontos de 5% para resistores, 6% para diodos e 9% para transistores. Elabore um programa que leia o nome do cliente e as quantidades de cada item comprado; e escreva o valor total de desconto e o valor líquido a ser pago pela compra.
Lista 2 - Estruturas de decisão: Se/Senão
Leia um número inteiro e informe se este número é par ou ímpar.
Leia a idade de uma pessoa e informe se ela já chegou à maioridade. Se ela ainda não chegou, informe quantos anos faltam para a maioridade.
Construa um algoritmo que leia um número inteiro A e um número inteiro B. Verifique qual dos dois números é maior e o escreva.
Considerando uma pista em que a velocidade máxima permitida é de 110 km/h, leia a velocidade de um veículo e informe se ele excedeu ou não a velocidade máxima permitida.
Considerando que a temperatura média ideal do corpo humano varia entre 36° C e 36,7° C, elabore um algoritmo que, dada uma temperatura lida, informe se esta pessoa está com febre.
Complemente o algoritmo anterior, adicionando a ele a capacidade de informar se a pessoa está com hipotermia (abaixo da temperatura média ideal); dentro da temperatura média ideal ou com febre.
Elabore um algoritmo que leia um número inteiro e informe se este número é um múltiplo de 7.
Leia um número inteiro e informe se este número é par e também divisível por 3.
Para auxiliar um cliente a escolher o produto mais barato em um conjunto de 3 produtos, crie um programa que leia os preços de 3 produtos e informe qual deles é o mais barato.
Construa um programa que leia um caractere e informe se este caractere é uma vogal.
Leia dois números inteiros x e y, e informe se x é divisível por y.
Considerando que no Brasil é possível votar a partir dos 16 anos de idade, leia o ano de nascimento de uma pessoa e informe se ela poderá votar no ano atual. Ignore mês e dia de nascimento.
Considerando que o ano possui 12 meses, leia um número inteiro de 1 a 12 e informe o mês que corresponde a este número.
Leia dois números inteiros x e y e escreva dentre as seguintes hipóteses a verdadeira: 1. x e y são pares; 2. x e y são ímpares; 3. x é par e y é ímpar; 4. x é ímpar e y é par.
Para auxiliar a definir os períodos mais quente e mais frio do dia, elabore um algoritmo que leia a temperatura do período matutino, a temperatura do período vespertino e a temperatura do período noturno, ao fim escreva qual destes períodos foi o mais frio e qual foi o mais quente.
Construa um algoritmo que leia as medidas dos lados de um triângulo e informe se este triângulo é equilátero, isósceles ou escaleno.
Construa um algoritmo que leia um número real e, se ele for maior do que 5, então escreva a metade deste número. Ex.: se leio o número 12, 12 é maior que 5; a metade de 12 é 6; devo escrever 6.
Construa um algoritmo que leia um número inteiro e, se ele for positivo, escreva uma mensagem que informe se este número é ou não divisível por 2.
Construa um algoritmo que leia dois números inteiros diferentes e escreva-os em ordem crescente.
Construa um algoritmo que leia três números inteiros e escreva-os em ordem decrescente.
Crie um algoritmo que leia dois números inteiros e escreva uma mensagem dizendo se estes números são iguais ou diferentes.
O IMC (Índice de Massa Corporal) é uma unidade de medida internacional usada para calcular se uma pessoa está no seu peso ideal. A fórmula mais genérica de cálculo de IMC é imc = peso / (altura * altura), onde o peso é dado em quilos e a altura em metros. Há uma tabela que define uma classificação para cada faixa de IMC. Segundo esta tabela, pessoas com IMC menor ou igual a 18.5 estão abaixo do peso; pessoas com IMC maior que 18.5 e menor que 25 estão no peso ideal; já as pessoas com IMC maior ou igual a 25 estão acima do peso. Elabore um algoritmo que leia peso e altura de uma pessoa, informe seu IMC e também se ela está abaixo do peso, no peso ideal ou acima do peso.
Lista 3 - Estruturas de decisão: Escolha/Caso
Elabore um programa que leia uma letra e informe se esta letra é uma vogal ou uma consoante.
Elabore um programa que funcione como uma calculadora simples. Seu programa deverá começar mostrando uma mensagem de apresentação, depois solicitar que o usuário entre com dois números reais (a e b) e finalmente ler os dois números reais digitados. Logo após, o programa deverá solicitar ao usuário que escolha uma das seguintes opções: somar, subtrair, multiplicar ou dividir. Com base na escolha do usuário, exiba o resultado da operação escolhida envolvendo a e b.
Considerando que o ano possui 12 meses, leia um número inteiro entre 1 e 12 e, com o uso da estrutura de controle escolha/caso, informe o nome do mês que corresponde a este número.
Verificar a quantidade de combustível que será gasta em uma viagem é de grande importância para o condutor. Considerando que um carro do tipo A é capaz de percorrer 12 quilômetros a cada litro de combustível gasto, um do tipo B percorre 9 quilômetros a cada litro e um do tipo C, 8 quilômetros por litro, elabore um programa que leia a distância a ser viajada e o tipo de carro, e com base nestes dados informe quantos litros de combustível serão gastos.
Construa um programa que funcione como um menu para uma lanchonete. Seu programa deverá iniciar mostrando o nome da sua lanchonete. Em seguida, seu programa deverá pedir o nome do usuário e, após lê-lo, exibir uma mensagem de boas-vindas. Após isso, seu programa deverá mostrar as opções de lanches disponíveis e seus preços: mostre pelo menos 6 opções de lanches diferentes. Permita que o usuário escolha uma das opções de lanches e, após a escolha, mostre a ele uma mensagem informando a opção que ele escolheu e quanto seu pedido irá custar. Lembre-se de avisar ao usuário caso ele escolha uma opção inexistente.
Construa um programa que leia a primeira letra do mês de nascimento de uma pessoa e informe em quais meses essa pessoa pode ter nascido. Caso não exista um mês que comece com a letra lida, informe ao usuário que ele se enganou.
Meses
Lista 4 - Laços de Repetição: Enquanto e Faça/Enquanto
Elabore um algoritmo que escreva todos os números inteiros de 1 a 100.
Elabore um algoritmo que escreva apenas os números pares de 1 a 100.
Elabore um algoritmo que escreva apenas os números ímpares de 1 a 100.
Elabore um algoritmo que escreva todos os números inteiros de 200 a 400.
Elabore um algoritmo que escreva apenas os números pares de 300 a 600.
Elabore um algoritmo que escreva apenas os números ímpares de 750 a 1500.
Construa um programa que leia um número inteiro e escreva todos os números inteiros de 1 até o número lido.
Construa um programa que leia um número inteiro, verifique se ele é par ou ímpar. Se o número for ímpar, escreva todos os números ímpares menores que ele em ordem crescente. Se o número for par, escreva todos os números pares menores que ele em ordem crescente.
Repita a questão anterior, desta vez imprimindo os números em ordem decrescente, desde o número lido.
Construa um programa que comece lendo um número inteiro qualquer. Este número será chamado de piso. Após isso, seu programa deverá ler um outro número inteiro (que poderá ser chamado de proximo) enquanto proximo for maior ou igual a piso.
Elabore um algoritmo que leia dois números inteiros diferentes: ini e fim, sendo que ini deve ser menor que fim. Escreva em ordem crescente todos os números inteiros entre ini e fim, inclusive eles mesmos.
Repita a questão anterior, desta vez presumindo que ini pode ou não ser maior que fim. Se ini for maior que fim, siga a ordem decrescente.
Construa um programa que repita a tarefa de ler um número inteiro, enquanto o número lido for maior que 1. Ao término das repetições, escreva o resultado da soma de todos os números lidos.
Construa um algoritmo que leia dois números inteiros diferentes: ini e fim, sendo que ini deve ser menor que fim. Em seguida, escreva o resultado da soma de todos os números inteiros entre ini e fim, contando com eles mesmos.
Construa um programa que calcule as médias aritméticas de todos os alunos de uma turma. Seu programa deverá funcionar da seguinte maneira: leia o nome do aluno; leia as notas dos 4 bimestres; mostre a média aritmética do aluno; pergunte se o usuário deseja continuar; se o usuário desejar continuar, repita todo o processo, senão, pare.
Lista 5 - Laços de Repetição: Para
Elabore um algoritmo que escreva todos os números inteiros de 1 a 100.
Elabore um algoritmo que escreva apenas os números pares de 1 a 100.
Elabore um algoritmo que escreva apenas os números ímpares de 1 a 100.
Elabore um algoritmo que escreva todos os números inteiros de 200 a 400.
Elabore um algoritmo que escreva apenas os números pares de 300 a 600.
Elabore um algoritmo que escreva apenas os números ímpares de 750 a 1500.
Lista 6 - Desafios com Laços de Repetição
Você recebeu a tarefa de elaborar um programa que calcule o IMC médio da sua turma. Sabendo que o IMC é dado pela fórmula imc = peso / (altura * altura), elabore um programa que seja capaz de calcular o IMC de quantos alunos for necessário. A cada IMC calculado, o usuário deverá confirmar se deseja continuar. Quando o usuário optar por não continuar mais, exiba a média aritmética dos IMCs calculados.
Construa um algoritmo que leia a idade de várias pessoas e, ao fim da execução, escreva o total de pessoas com menos de 18 anos e o total de pessoas com mais de 65 anos. Seu algoritmo deve parar de ler idades quando o usuário digitar uma idade menor que 1.
Na matemática, o fatorial de um número inteiro a, representado por a!, é o produto de todos os inteiros positivos menores ou iguais a a. Por exemplo, 3! ou 3 fatorial é dado por 3 * 2 * 1, que é igual a 6. Construa um programa que seja capaz de ler um número inteiro e apresentar seu fatorial.
A Sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores. Os 10 primeiros termos desta sequência são 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Construa um programa que escreva todos os termos da sequência de Fibonacci menores que 10000.
Dado o problema anterior, construa um programa que leia um número inteiro N e escreva apenas N termos da sequência de Fibonacci.
Ainda baseado no problema da sequência de Fibonacci, construa um programa que leia um número inteiro N e escreva a soma dos N primeiros termos da sequência de Fibonacci.
Um número primo é um número inteiro não negativo, maior que 1, e divisível apenas por 1 e por ele mesmo. Construa um programa que leia um número inteiro N e informe se este é ou não é um número primo.
O Máximo Divisor Comum (MDC) entre dois números naturais (números inteiros positivos) é o maior número natural que divide ambos. Desenvolva um programa que leia dois números inteiros positivos X e Y e escreva seu MDC.
Um número perfeito é um número natural (inteiro positivo {1,2,3,4...}) cujo valor é igual à soma de seus divisores naturais, sem contar com ele mesmo. Ex.: 6 é um número perfeito porque a soma de seus divisores é igual a ele mesmo: 1 + 2 + 3 = 6. Construa um programa que leia um número natural e informe se este é um número perfeito.
Lista 7 - Vetores
Com um vetor, leia 5 números inteiros e imprima-os.
Com um vetor, leia 5 nomes e imprima-os.
Com um vetor, leia 5 números inteiros e imprima-os em ordem inversa. Ex.: 5,1,4,8,0 – 0,8,4,1,5.
Com um vetor, leia 10 números reais. Imprima os números lidos, multiplicando os números de posições ímpares por 1.05, e os de posições pares por 1.02.
Com um vetor, leia 5 números reais, imprima-os na ordem lida e na ordem inversa.
Declare dois vetores, preencha o primeiro com 10 números inteiros lidos, copie o conteúdo do primeiro para o segundo, depois imprima os dois vetores lado a lado.
Em um vetor que contém as médias de uma turma de 10 alunos, calcule a média da turma e conte quantos alunos obtiveram nota acima da média da turma. Escreva a média da turma e o total de alunos acima da média.
Declare um vetor com 5 nomes de pessoas diferentes. Em seguida, permita que o usuário digite um nome. Se este nome estiver no vetor, informe que tal pessoa foi encontrada. Senão, informe que tal pessoa não foi encontrada.
Declare três vetores. Preencha o primeiro e depois o segundo, cada um com 5 números inteiros lidos. Por fim, percorra os três vetores simultaneamente, preenchendo o terceiro com as somas dos outros dois. Imprima os três lado a lado.
Vetores
Lista 8 - Matrizes
Na presente lista de exercícios, quando o enunciado disser "Gere uma matriz", você deverá declarar a matriz vazia e utilizar estruturas de repetição para percorrê-la e atribuir valores automaticamente. Nesse caso, os valores não serão informados pelo usuário; exceto o tamanho da matriz, quando especificado. Por exemplo, poderíamos atribuir um número inteiro aleatório, entre 1 e 100, à variável x da seguinte maneira:

let x = parseInt(Math.random() * 100 + 1);
Quando se disser "Leia uma matriz", entenda que todos os elementos da matriz deverão ser lidos; ou seja, informados pelo usuário.

1. Leia e armazene nome, idade e salário de 5 pessoas em uma única matriz. Ao fim, exiba a matriz em formato tabular. Ex.:

José        30      3000.00
Maria       28      3200.00
Carlos      41      9500.00
Joaquim     56      12000.00
Silvia      32      10000.00
2. Leia uma matriz 3 x 3 de inteiros. Ao fim, exiba a matriz em formato tabular e também o elemento do centro. Ex.:


1   2   3
4   5   6
7   8   9

Elemento do centro: 5
3. Leia uma matriz quadrada N x N de inteiros, onde N é um inteiro informado pelo usuário. Exiba a matriz em formato tabular.

4. Leia uma matriz N x M de inteiros, onde N e M são inteiros informados pelo usuário. Exiba a matriz em formato tabular.

5. Gere uma matriz 4 x 4 de inteiros. Ao fim, exiba a matriz em formato tabular e também os elementos dos cantos. Ex.:

1   7   5   3
5   2   0   9
3   4   8   1
2   5   3   9

Elementos dos cantos: 1, 3, 2 e 9
6. Gere uma matriz 3 x 3 de inteiros aleatórios. Exiba a matriz em formato tabular e também os resultados das somas dos elementos da diagonal principal e da diagonal secundária. Ex.:

5   3   2
8   5   4
7   2   3

Soma da diagonal principal: 13
Soma da diagonal secundária: 14
7. Gere uma matriz 10 x 10 de inteiros, onde o valor de cada elemento é dado pela soma de seus índices. Exiba a matriz em formato tabular. Ex.:

0   1   2   3   4   5   6   7   8   9
1   2   3   4   5   6   7   8   9   10
2   3   4   5   6   7   8   9   10  11
...
9   10  11  12  13  14  15  16  17  18
8. Gere uma matriz identidade N x N, onde N é um inteiro informado pelo usuário. Uma matriz identidade é uma matriz quadrada em que os elementos de sua diagonal principal são todos iguais a 1 e os demais elementos iguais a 0. Exiba a matriz identidade em formato tabular. Ex.:

1   0   0   0
0   1   0   0
0   0   1   0
0   0   0   1
9. Gere uma matriz 3 x 3 inteiros aleatórios, exiba a matriz em formato tabular, depois escreva os elementos pares e os ímpares dessa matriz, separados e na ordem em que aparecem. Ex.:

8   1   3
5   6   7
3   4   2

Pares: 8, 6, 4, 2
Ímpares: 1, 3, 5, 7, 3
10. Leia uma matriz 2 x 3 de inteiros e exiba essa matriz em formato tabular. Logo após, leia um inteiro D e escreva os elementos dessa matriz que sejam divisíveis por D.

11. Gere duas matrizes 4 x 2 de inteiros aleatórios, A e B. Em seguida, gere uma matriz resultante de A + B e exiba as três em formato tabular.

12. Considerando que N é um inteiro >= 3 informado pelo usuário, gere uma matriz quadrada N x N, em que os elementos às margens da matriz sejam iguais a 1 e os internos sejam iguais a 0. Ao fim, exiba a matriz em formato tabular. Ex.:

1   1   1       1   1   1   1       1   1   1   1   1
1   0   1       1   0   0   1       1   0   0   0   1
1   1   1       1   0   0   1       1   0   0   0   1
                1   1   1   1       1   0   0   0   1
                                    1   1   1   1   1
13. Considerando que N e M são inteiros informados pelo usuário, leia uma matriz N x M de inteiros, e gere uma matriz transposta a partir dela. Exiba a matriz original e a matriz transposta em formato tabular. Ex.:

Matriz original:
1   2   3
4   5   6

Matriz transposta:
1   4
2   5
3   6
14. Considerando que N e M são inteiros informados pelo usuário, leia uma matriz N x M de inteiros, e gere uma matriz rotacionada em 90 graus em sentido horário a partir dela. Exiba a matriz original e a matriz rotacionada em formato tabular. Ex.:

Matriz original:
1   2
3   4
5   6

Matriz rotacionada:
5   3   1
6   4   2
15. Utilizando uma matriz de 3 x 3, construa um Jogo da Velha que possa ser jogado por duas pessoas. Ao fim do jogo, informe quem venceu ou se houve empate.

Lista 9 - Funções
Crie uma função escreva(texto) que receba um texto como parâmetro e exiba esse texto no console.
Crie uma função soma(x, y) que receba dois números como parâmetros e retorne sua soma.
Crie uma função hora() que retorne o horário atual do sistema no formato horas:minutos:segundos.
Crie uma função mostrarHora() que escreva no console o horário atual do sistema no formato horas:minutos:segundos.
Crie uma função quadrado(num) que receba um número como parâmetro e retorne o seu quadrado.
Crie uma função cubo(num) que receba um número como parâmetro e retorne o seu cubo.
Crie uma função potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente.
Crie uma função recursiva potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente. Nesta função não são permitidas estruturas de repetição.
Crie uma função imc(peso, altura) que receba os parâmetros peso e altura, e retorne o Índice de Massa Corporal resultante.
Crie uma função calculaAreaQuadrado(lado) que calcule e retorne a área de um quadrado com base na medida de seu lado.
Crie uma função calculaAreaRetangulo(largura, altura) que calcule e retorne a área de um retângulo com base em sua largura e altura.
Crie uma função calculaAreaCirculo(raio) que calcule e retorne a área de um círculo com base em seu raio.
Crie uma função mostrarLista(lista) que receba um array como parâmetro, percorra cada uma de suas posições e as escreva separadamente no console.
Crie uma função matrizNula(matriz) que receba uma matriz como parâmetro, retorne true caso a matriz seja nula e false caso contrário.
Crie uma função matrizQuadrada(matriz) que receba uma matriz como parâmetro, retorne true caso a matriz seja quadrada e false caso contrário.
Crie uma função matrizDiagonal(matriz) que receba uma matriz como parâmetro, retorne true caso a matriz seja diagonal e false caso contrário. Utilize a função matrizQuadrada(matriz) para verificar se a matriz é quadrada antes de verificar se é uma matriz diagonal.
Crie uma função soma(...termos) que retorne o resultado da soma de um número indefinido de termos.
Crie uma função escreva(...valores) que funcione exatamente como a console.log(): escreva um número indefinido de valores no console.
Crie uma função mediaAritmetica(...termos) que receba como parâmetro um número indefinido de termos e retorne sua média aritmética.
Crie uma função ehPrimo(numero) que receba um número natural como parâmetro e retorne true caso o número seja primo ou false caso contrário.
Crie uma função ehPerfeito(numero) que receba um número natural como parâmetro e retorne true caso o número seja perfeito ou false caso contrário. Um número é perfeito quando é igual à soma dos seus divisores sem contar com ele mesmo. Ex.: 6 é perfeito porque 1 + 2 + 3 = 6.
Lista 10 - Objetos
Construa uma classe Pessoa, contendo algumas propriedades, como nome, idade e sexo e um método apresenta(), que exiba uma mensagem de apresentação com os dados desta pessoa.
Construa uma classe Retangulo, contendo as propriedades altura e largura, e um método area() ou calculaArea(). A área de um retângulo é dada pela seguinte fórmula: A = b * h, onde A representa área, b representa base e h representa altura.
Construa uma classe Cubo, contendo a propriedade aresta e um método volume() ou calculaVolume(). Um cubo possui medidas iguais em todas as suas arestas, o que resulta em seus lados todos iguais. O volume de um cubo é dado pela fórmula V = a ** 3, onde V representa o volume e a a medida da aresta.
Construa uma classe Carro, contendo as propriedades modelo, marca, cor, portas, ano, anoModelo, ligado, farolLigado velocidade, e os métodos ligaDesliga(), acelera(), freia() e ligaDesligaFarol(). Os métodos devem interagir com as propriedades do objeto. Seja criativo.


Perfeito, Flame! Vou te organizar **100 exercícios de Programação Orientada a Objetos (POO) em Python**, divididos por níveis de dificuldade: iniciante, intermediário e avançado. Vou fazer de forma que você possa praticar conceitos como **classes, objetos, atributos, métodos, herança, polimorfismo, encapsulamento, e muito mais**.

---

## **Exercícios Iniciais (1–30)**

1. Crie uma classe `Pessoa` com atributos `nome` e `idade`. Crie um método `apresentar()` que imprime os dados da pessoa.
2. Crie uma classe `Carro` com atributos `marca`, `modelo` e `ano`. Adicione método `detalhes()` que imprime suas informações.
3. Crie uma classe `Retangulo` com atributos `largura` e `altura`. Crie métodos para calcular `área` e `perímetro`.
4. Crie uma classe `ContaBancaria` com atributos `titular` e `saldo`. Adicione métodos `depositar` e `sacar`.
5. Crie uma classe `Aluno` com atributos `nome` e `notas` (uma lista). Crie método `media()` que retorna a média das notas.
6. Crie uma classe `Livro` com atributos `titulo`, `autor` e `ano`. Adicione método que retorna uma string descritiva.
7. Crie uma classe `Funcionario` com atributos `nome` e `salario`. Adicione método `aumentar_salario(percentual)`.
8. Crie uma classe `Lampada` com atributo `ligada` (booleano) e métodos `ligar()` e `desligar()`.
9. Crie uma classe `Telefone` com atributos `numero` e `mensagens` (lista). Adicione método para enviar mensagem.
10. Crie uma classe `Animal` com atributo `nome` e método `falar()`, que imprime algo genérico.
11. Crie uma classe `Cachorro` que herda de `Animal` e sobrescreve `falar()` para imprimir "Au au!".
12. Crie uma classe `Gato` que herda de `Animal` e sobrescreve `falar()` para imprimir "Miau!".
13. Crie uma classe `Produto` com atributos `nome` e `preco`. Adicione método para aplicar desconto.
14. Crie uma classe `Pessoa` com método estático `dizer_ola()` que imprime "Olá!".
15. Crie uma classe `Circulo` com atributo `raio` e método para calcular a `área`.
16. Crie uma classe `ContaBancaria` com método de classe que retorna o número total de contas criadas.
17. Crie uma classe `Temperatura` com atributo `celsius` e métodos para converter para `fahrenheit` e `kelvin`.
18. Crie uma classe `Aluno` com método `adicionar_nota(nota)`.
19. Crie uma classe `Carro` que registra o total de carros criados (atributo de classe).
20. Crie uma classe `Livro` que mantém um histórico de todos os títulos criados.
21. Crie uma classe `Pessoa` que impede a alteração direta do atributo `idade` (encapsulamento).
22. Crie uma classe `Funcionario` com métodos privados para calcular bônus.
23. Crie uma classe `Elevador` com atributos `andar_atual` e `total_andares` e métodos `subir()` e `descer()`.
24. Crie uma classe `Cafeteira` com método `preparar_cafe()` que imprime uma mensagem.
25. Crie uma classe `Relogio` com método que retorna a hora atual (use `datetime`).
26. Crie uma classe `Agenda` com métodos para adicionar e remover compromissos.
27. Crie uma classe `ContaPoupanca` que herda de `ContaBancaria` e adiciona método `render_juros()`.
28. Crie uma classe `Funcionario` com método `__str__()` para mostrar os dados formatados.
29. Crie uma classe `Carro` que calcula a velocidade média a partir de distância e tempo.
30. Crie uma classe `Aluno` que sobrescreve o método `__repr__()` para mostrar um resumo do aluno.

---

## **Exercícios Intermediários (31–70)**

31. Crie uma classe `Veiculo` com atributos genéricos e métodos `ligar()` e `desligar()`.
32. Crie classes `Carro` e `Moto` que herdam de `Veiculo` e sobrescrevem um método.
33. Crie uma classe `Banco` que contém várias `ContaBancaria`.
34. Crie uma classe `Estudante` que mantém um histórico de notas em diferentes disciplinas.
35. Crie uma classe `Time` com método para adicionar jogadores (classe `Jogador`).
36. Crie uma classe `Quadrado` que herda de `Retangulo` e sobrescreve métodos de área e perímetro.
37. Crie uma classe `Funcionario` com atributo `salario` protegido e método para acessar via `getter`.
38. Crie uma classe `Funcionario` com método `__eq__()` que compara funcionários pelo salário.
39. Crie uma classe `ListaDeCompras` que mantém uma lista de itens únicos.
40. Crie uma classe `Pedido` que calcula o total baseado em itens e preços.
41. Crie uma classe `Filme` com atributos `titulo`, `diretor`, `ano` e método que verifica se é clássico (>20 anos).
42. Crie uma classe `Cliente` que registra histórico de compras.
43. Crie uma classe `Funcionario` que implementa polimorfismo com método `calcular_pagamento()`.
44. Crie uma classe `Animal` com método `alimentar()` que aceita quantidade de comida.
45. Crie uma classe `Gato` e `Cachorro` com comportamento diferente de `alimentar()`.
46. Crie uma classe `Livro` com método que retorna se o livro é recente (<5 anos).
47. Crie uma classe `Pessoa` com método que calcula o IMC a partir de altura e peso.
48. Crie uma classe `Carro` com método para alterar combustível restante e verificar autonomia.
49. Crie uma classe `Banco` que realiza transferências entre contas.
50. Crie uma classe `Agenda` que permite buscar compromissos por data.
51. Crie uma classe `Funcionario` com método que calcula imposto baseado no salário.
52. Crie uma classe `Aluno` que calcula nota final considerando peso das provas.
53. Crie uma classe `Curso` que mantém uma lista de alunos matriculados.
54. Crie uma classe `Pessoa` com método que verifica se é maior de idade.
55. Crie uma classe `Funcionario` com método `promover()` que aumenta o cargo.
56. Crie uma classe `ContaBancaria` que gera extrato detalhado de todas transações.
57. Crie uma classe `Produto` que lança exceção se o preço for negativo.
58. Crie uma classe `Carro` com método que calcula tempo de viagem baseado em velocidade média.
59. Crie uma classe `Funcionario` com método que retorna uma string resumida do funcionário.
60. Crie uma classe `Estudante` que calcula a maior e menor nota.
61. Crie uma classe `Livro` que verifica se está disponível (booleano).
62. Crie uma classe `Cliente` que registra histórico de pontos de fidelidade.
63. Crie uma classe `ContaBancaria` com método que impede saque maior que saldo.
64. Crie uma classe `Funcionario` com método `__lt__()` para comparar salários.
65. Crie uma classe `Animal` com atributo `idade` e método que calcula anos humanos (para cachorro ou gato).
66. Crie uma classe `Cachorro` que herda de `Animal` e adiciona método `correr()`.
67. Crie uma classe `Carro` com método que calcula consumo de combustível.
68. Crie uma classe `Funcionario` que gera um relatório de horas trabalhadas.
69. Crie uma classe `Aluno` que imprime boletim completo com notas e média.
70. Crie uma classe `Pedido` que calcula desconto dependendo do valor total.

---

## **Exercícios Avançados (71–100)**

71. Crie uma classe abstrata `Forma` com métodos abstratos `area()` e `perimetro()`.
72. Crie classes `Triangulo` e `Quadrado` que implementam `Forma`.
73. Crie uma classe `Funcionario` com polimorfismo para calcular bônus de acordo com tipo de funcionário.
74. Crie uma classe `ContaBancaria` com transações salvas em arquivo (persistência).
75. Crie uma classe `Aluno` que mantém histórico em arquivo JSON.
76. Crie uma classe `Estoque` com métodos que lançam exceção se não houver produto.
77. Crie uma classe `Veiculo` abstrata com método `mover()`.
78. Crie uma classe `Moto` que sobrescreve `mover()` com comportamento próprio.
79. Crie uma classe `Funcionario` com decoradores para validar salário e cargo.
80. Crie uma classe `Cliente` que valida CPF ou CNPJ ao criar o objeto.
81. Crie uma classe `Jogo` que gerencia jogadores (herança e polimorfismo).
82. Crie uma classe `ContaBancaria` que permite contas correntes e poupança com comportamento diferente.
83. Crie uma classe `Funcionario` que calcula aposentadoria considerando idade e tempo de serviço.
84. Crie uma classe `Produto` que registra histórico de preço e quantidade em estoque.
85. Crie uma classe `Pedido` que registra histórico de status (pendente, enviado, entregue).
86. Crie uma classe `Banco` que valida transferências (saldo, limites e existência de contas).
87. Crie uma classe `Funcionario` que gera relatório completo em CSV.
88. Crie uma classe `Aluno` que permite calcular estatísticas (média, mediana, moda).
89. Crie uma classe `Veiculo` que registra manutenção e alertas automáticos.
90. Crie uma classe `Carro` que implementa herança múltipla (por exemplo, Carro + VeiculoEletrico).
91. Crie uma classe `ContaBancaria` com método `__add__()` que soma saldos de duas contas.
92. Crie uma classe `Funcionario` com método `__mul__()` que calcula bônus multiplicativo.
93. Crie uma classe `Pedido` com polimorfismo para calcular frete de acordo com tipo de produto.
94. Crie uma classe `Aluno` que valida notas para não permitir valores negativos.
95. Crie uma classe `Cliente` que implementa comparação pelo valor total gasto.
96. Crie uma classe `Funcionario` que valida entrada de dados usando `@property`.
97. Crie uma classe `ContaBancaria` que registra todas operações com carimbo de data/hora.
98. Crie uma classe `Produto` que gera alertas quando o estoque estiver baixo.
99. Crie uma classe `Biblioteca` que controla empréstimos e devoluções de livros.
100. Crie uma aplicação completa com classes `Aluno`, `Curso` e `Professor` e interações entre elas.

---

Se você quiser, posso **montar esses 100 exercícios já com exemplos de código prontos para testar**, para você ir aprendendo POO de forma prática e acelerada.

Quer que eu faça isso?


# 100 Exercícios de Programação Orientada a Objetos em Python

## Nível Básico (1-30)

### Classes e Objetos Simples
1. Crie uma classe `Pessoa` com atributos nome e idade
2. Crie uma classe `Cachorro` com atributos nome, raça e idade
3. Crie uma classe `Carro` com atributos marca, modelo e ano
4. Crie uma classe `Livro` com atributos título, autor e número de páginas
5. Crie uma classe `Retangulo` com atributos largura e altura

### Métodos Básicos
6. Adicione um método `apresentar()` à classe Pessoa que exiba as informações
7. Adicione um método `latir()` à classe Cachorro que retorne "Au au!"
8. Adicione um método `acelerar()` à classe Carro
9. Adicione um método `info()` à classe Livro que retorne todas as informações
10. Adicione métodos `calcular_area()` e `calcular_perimetro()` à classe Retangulo

### Construtores (__init__)
11. Crie uma classe `ContaBancaria` com saldo inicial no construtor
12. Crie uma classe `Produto` com nome, preço e quantidade no construtor
13. Crie uma classe `Aluno` com nome, matrícula e notas no construtor
14. Crie uma classe `Funcionario` com nome, cargo e salário no construtor
15. Crie uma classe `Circulo` com raio no construtor

### Métodos com Lógica
16. Adicione métodos `depositar()` e `sacar()` à classe ContaBancaria
17. Adicione um método `aplicar_desconto()` à classe Produto
18. Adicione um método `calcular_media()` à classe Aluno
19. Adicione um método `dar_aumento()` à classe Funcionario
20. Adicione métodos para calcular área e circunferência à classe Circulo

### Encapsulamento Básico
21. Crie uma classe `Pessoa` com atributo privado `__cpf`
22. Crie getters e setters para o atributo privado de Pessoa
23. Crie uma classe `Senha` com atributo privado `__senha`
24. Adicione validação no setter da classe Senha
25. Crie uma classe `Email` com validação de formato

### Métodos Especiais
26. Implemente `__str__()` na classe Pessoa
27. Implemente `__repr__()` na classe Produto
28. Implemente `__len__()` em uma classe `Lista`
29. Implemente `__eq__()` para comparar dois objetos Pessoa
30. Implemente `__add__()` para somar dois objetos ContaBancaria

## Nível Intermediário (31-65)

### Herança Simples
31. Crie classes `Animal` e `Gato` (herda de Animal)
32. Crie classes `Veiculo` e `Moto` (herda de Veiculo)
33. Crie classes `FormaGeometrica` e `Triangulo` (herda de FormaGeometrica)
34. Crie classes `Funcionario` e `Gerente` (herda de Funcionario)
35. Crie classes `ContaBancaria` e `ContaPoupanca` (herda de ContaBancaria)

### Sobrescrita de Métodos
36. Sobrescreva o método `fazer_som()` em diferentes classes de animais
37. Sobrescreva o método `calcular_salario()` em diferentes tipos de funcionários
38. Sobrescreva o método `calcular_area()` em diferentes formas geométricas
39. Sobrescreva o método `__str__()` em classes derivadas
40. Sobrescreva o método `acelerar()` em diferentes tipos de veículos

### Polimorfismo
41. Crie uma função que receba diferentes animais e chame `fazer_som()`
42. Crie uma lista de formas geométricas e calcule a área total
43. Crie um sistema de pagamentos com diferentes métodos (PIX, cartão, boleto)
44. Crie diferentes tipos de notificações (Email, SMS, Push)
45. Crie diferentes estratégias de desconto para produtos

### Herança Múltipla
46. Crie classes `Nadador`, `Corredor` e `Triatleta` (herda das duas)
47. Crie classes `Voador`, `Nadador` e `Pato` (herda das duas)
48. Crie um sistema de permissões com múltiplas interfaces
49. Resolva um problema de diamante na herança
50. Crie mixins para adicionar funcionalidades a classes

### Classes Abstratas
51. Crie uma classe abstrata `Forma` com método abstrato `calcular_area()`
52. Crie uma classe abstrata `Veiculo` com métodos abstratos
53. Crie uma interface `Pagavel` para diferentes tipos de pagamento
54. Crie uma classe abstrata `Animal` com métodos abstratos e concretos
55. Crie uma hierarquia de classes abstratas para um sistema de arquivos

### Composição
56. Crie uma classe `Motor` e use-a em `Carro`
57. Crie uma classe `Endereco` e use-a em `Pessoa`
58. Crie classes `Roda`, `Motor`, `Carro` com composição
59. Crie um sistema de pedidos com composição de produtos
60. Crie uma classe `Universidade` que contém `Departamentos`

### Agregação
61. Crie classes `Professor` e `Turma` com agregação
62. Crie classes `Livro` e `Biblioteca` com agregação
63. Crie um sistema de times e jogadores
64. Crie um sistema de playlist e músicas
65. Crie um carrinho de compras com agregação de produtos

## Nível Avançado (66-100)

### Properties e Decoradores
66. Use `@property` para criar atributos calculados
67. Crie uma classe com `@property`, `@setter` e `@deleter`
68. Implemente validação usando properties
69. Crie atributos read-only usando `@property`
70. Use `@classmethod` para criar factory methods

### Métodos Estáticos e de Classe
71. Crie métodos estáticos para validações
72. Use `@classmethod` para criar construtores alternativos
73. Crie um contador de instâncias usando atributos de classe
74. Implemente o padrão Singleton
75. Crie métodos utilitários estáticos

### Métodos Mágicos Avançados
76. Implemente `__getitem__()` e `__setitem__()`
77. Implemente `__iter__()` e `__next__()`
78. Implemente `__enter__()` e `__exit__()` (context manager)
79. Implemente `__call__()` para tornar objetos chamáveis
80. Implemente operadores matemáticos (`__add__`, `__sub__`, etc.)

### Design Patterns
81. Implemente o padrão Factory
82. Implemente o padrão Builder
83. Implemente o padrão Observer
84. Implemente o padrão Strategy
85. Implemente o padrão Decorator

### Sistemas Complexos
86. Crie um sistema de gerenciamento de biblioteca completo
87. Crie um sistema de e-commerce com carrinho e pagamentos
88. Crie um sistema de gerenciamento escolar
89. Crie um jogo simples (RPG, card game, etc.)
90. Crie um sistema de reservas de hotel

### Metaclasses e Avançado
91. Crie uma metaclass personalizada
92. Use `__new__()` para controlar criação de objetos
93. Implemente um sistema de plugins dinâmico
94. Crie um ORM simples
95. Implemente descriptors personalizados

### Projetos Integradores
96. Sistema bancário completo com diferentes tipos de contas e transações
97. Rede social simples com posts, comentários e usuários
98. Sistema de gerenciamento de tarefas (to-do list) avançado
99. Simulador de ecossistema com diferentes animais e interações
100. Framework web minimalista com roteamento e middlewares

---

## Dicas para Resolver os Exercícios

- Comece pelos exercícios básicos e vá progredindo
- Teste cada classe criada com diferentes cenários
- Use docstrings para documentar suas classes e métodos
- Aplique os princípios SOLID quando possível
- Refatore seu código para melhorar a qualidade
- Crie testes unitários para suas classes

## Conceitos Importantes para Revisar

- **Encapsulamento**: Ocultar detalhes de implementação
- **Herança**: Reutilização de código através de hierarquias
- **Polimorfismo**: Mesma interface, comportamentos diferentes
- **Abstração**: Simplificar sistemas complexos
- **Composição vs Herança**: Quando usar cada abordagem
- **SOLID Principles**: Boas práticas de design orientado a objetos


Escreva um programa que receba um número inteiro n e calcule a soma dos quadrados dos números até n. Exemplo: se n for igual a 3, seu programa deve dar o resultado da soma dos números 1² (1) + 2² (4) + 3² (9).
Escreva um programa que gere o seguinte padrão usando laços encaixados:
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*


Escreva uma função que dada uma nota entre 0.0 e 10.0 imprima na tela um
conceito entre ‘A’ e ‘E’, segundo a tabela:
A ≥ 9.0 9.0 > B ≥ 8.0 8.0 > C ≥ 7.0 7.0 > D ≥ 5.0 E < 5.0
O que acontece com o seu programa se for digitada nota menor que zero ou maior
que dez?
