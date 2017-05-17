# Javascript 

Javascript é uma linguagem utilizada essencialmente no ambiente web.

Resultado de alguns meses de trabalho, a sua primeira versão foi introduzida por Brendan Eich em 1995, durante sua passagem pela Netscape.

Há uma confusão recorrente entre Javascript e Java. Contudo, não há nenhuma correlação direta entre eles.

Desde o início, o desenvolvimento desta linguagem foi orientada para a construçao de websites, o que a restrigiu ao ambiente dos webrowsers. Porém, desde o final dos anos 2000 tem se visto uma evolução vestiginosa que vem permitindo o seu uso em servidores (NodeJS), bem como no desenvolvimento de aplicações para celulares(React Native, Cordova, Ionic, e etc).

A escolha dessa linguagem neste trabalho é explicada pela facilidade de uso proporcionada por ela. Para a compilação do nosso código precisaremos apenas de um browser. Nesse intuito recomendamos o Chrome, disponível em `https://www.google.com/chrome/browser/desktop/`. Para a compilação dos exemplos no Chrome utilizaremos o modo desenvolvedor, acessível com a tecla `f12` na aba `console`.

Nas próximos linhas, oferecemos uma panorama sobre os seus fundamentos, apresentado os conceitos necessários para a evolução da proposta dessa monografia.


## Sintaxe básica 

A sintaxe básica do Javascript é similar a outras linguagem de programação. Entre os aspectos estritamente fundamentais destacamos: 

* Javascript é `case-sensitive`, o que equivale a dizer que há diferenciação entre letras maiúsculas e minúsculas. Portanto `numero` e `Numero` serão indentificados diferentemente.

* Blocos são delimitados por chaves `{ }`. Exemplos:

```javascript
if (numero > 2) {
    declaracao_1;
    declaracao_2;
    ...
    declaracao_n;
}
```


```javascript
while (numero > 2) {
    declaracao_1;
    declaracao_2;
    ...
    declaracao_n;
}   
```


* Comentários com multiplas linhas são delimitados por `/* */`. Em caso de linha única usamos `//`. Exemplos

```javascript

/*
    Esse bloco de texto não é lido pelo
    compilador
*/

//  essa linha tão pouco

```

## Variáveis e tipos

### `var`, `const` e `var`

Ao inicializarmos uma variável em javascript devemos precedê-la com  `let`, `const`, ou `var`. A opção de não fazê-la é válida, mas não é considerada boa prática pois pode introduzir consequências indesejáveis.

Ao usarmos `let` ou `const` a abrangência da definição da variável estará restrita apenas ao bloco (escopo) onde a declaramos.

Considere um exemplo prático para o uso de `var`.

```javascript

if(3>2){
    var numero = 4
    console.log(numero) // IMPRIME "4" 
}

console.log(numero) // IMPRIME "4"

```

A variável `numero` é declarada dentro do bloco `if`. Imprimindo o seu valor - usando a função `console.log` - percebemos que ela está disponível dentro e fora do bloco.

Vejamos o que ocorre ao usarmos `const` e `let` dentro do mesmo.

```javascript

if(3>2){
    const numero = 4
    console.log(numero) // IMPRIME "4" 

    let outroNumero = 5
    console.log(outroNumero) // IMPRIME "5"
}

console.log(numero) //AVISO DE ERRO: "numero está indefinido"
console.log(outroNumero) // AVISO DE ERRO:  "outroNumero está indefinido"

```

Perceba que no caso acima, a variáveis `numero` e `outroNumero` não estão disponíveis fora de `if`. O nosso console, neste caso, nos avisará que as variáveis não estão definidas.

A diferença entre `const` e `let` é mais pragmática. 

Como sugere a nomenclatura, `const` é usada para a definição de constantes, não permitindo assim substituições futuras da variável. Ela será portanto `read-only`.

A palavra-chave `let`, que pode ser traduzida livremente como "Seja", é mais flexível, pois permite substituições futuras.

Considere os exemplos

```javascript
const numero = 4
console.log(numero) // IMPRIME "4" 

numero = 3 // AVISO DE ERRO:  "Erro de tipagem: atribuição de variável constantate"
console.log(numero) 
```

```javascript
let numero = 4
console.log(numero) //IMPRIME "4" 

numero = 3 
console.log(numero) //IMPRIME "3" 
```

### Tipos de variáveis

Em javascript as variáveis podem assumir seis tipos diferentes, mas apenas cinco serão relevantes para nós:   

* **Number** - como em `1`, `2`, e `3`
* **Boolean** - `true` ou `false`
* **Undefined** - indefinido
* **String** - usado para representação textual, como "Por que não me liberam dessa monografia?"
* **Object** - Similar a um dicionário, esse tipo permite a associação de variáveis a palavras-chave. Explicações a frente.  


Diferentemente de outras linguagens, como C, C++ ou Java, não é exigido durante a declaração da variável a explicitação o seu tipo. Para tanto, o uso de `var`, `let` ou `const` é suficiente.

Dizemos que Javacript é uma linguagem de "tipagem dinânica", pois enquanto a variável `numero` pode equivaler a um número, na linha seguinte podemos substituir o seu valor por um sequência de caracteres, uma `string`.

Para descrobrirmos o tipo de uma variável podemos usar o operador `typeof`. Exemplo.

```javascript

var numero = 3
console.log(typeof numero) //Imprime "number"

var palavras = {brasil: 'Michel Temer', eua: 'Donald Trump'} 
console.log(typeof palavras) //Imprime "object"

const indefinido
console.log(typeof indefinido) //Imprime 'undefined'

```

#### Number

`Number`'é o tipo utilizado quando necessitamos manipular números.

Para procedemos com as quatro operações básicas, os já conhecidos operadores `+`, `-`, `*` e `/` são suficientes. 

Caso necessitarmos de funções mais elaboradas, como um cálculo trigonométrico ou logarítmico, por exemplo, possivelmente a biblioteca `Math` nos dará o que precisamos.  Exemplifiquemos alguns de seus métodos.

```javascript
Math.abs(x) //Valor absolute de -3.
Math.cos(x) //cosseno de um número
Math.sin(x) //seno de um número
Math.tan(x) //tangente de um número
Math.exp(x) // e^x
Math.log(x) // logaritmo na base 
Math.pow(x,y)// base x elevada a potencia y
Math.random() // retorna um número pseudo-aleatório entre 0 e 1
Math.round(x) // retorna valor arredondado de um número x para o inteiro mais próximo
Math.sqrt(x) // Retorna a raiz quadrada
Math.floor(x) //Retorna o maior inteiro que é menor ou igual a x. Exemplo: Math.floor(2.9) = 2
Math.ceil(x) //Retorna o menor inteiro que é maior ou igual a x. Exemplo: Math.ceil(2.9) = 3
```

Quando falamos de `Number` alguns fatos são dignos de nota.

* O uso errôneo de uma variável diferente de `number` numa operação numérica normalmente resulta no valor `NaN` - *not a number*. Essa informação é relevante para detectarmos erros em nossas contas.

```javascript
Math.sqrt('capitão américa') //Imprime NaN

3/'8' //Imprime NaN

3 - 'sabonete' //NaN
```

* Divisão por zero resulta em `Infinity`

```javascript
10/0 //Infinity
-10/0 // -Infinity
```

#### String

`Strings` são muito simples. Trata-se de um tipo que usamos para a representação de uma sequência de caracteres. Podemos envolver uma `string` com aspas duplas ou simples.

```javascript

"Esta é uma string"

'esta é também uma string'

```

Podemos descrobrir o número de caracteres de uma string com a propriedade `length`.

```javascript
console.log("oi".length) //Imprime 2
console.log("o i".length) //Imprime 3. Perceba que o espaçamento entre 'o' e 'i' é contado.
console.log("o  i".length) //Imprime 4
```


Para concaternamos uma sequencia de caracteres basta apenas o uso do operador `+`.


```javascript
var stringConcatenada = 'string' +  " concatenada"

console.log(stringConcatenada) //Imprime "string concatenada"
```

Podemos transformar uma `number` em uma string da seguinte forma

```javascript
const numero = 3
console.log(typeof numero) //Imprime "number"

const convertido = numero + ''
console.log(convertido) // "3"
console.log(typeof convertido) //Imprime "string"
``` 

#### `null` e `undefined`

Tanto `undefined` quanto `null` são uteis quando quisermos expressar ausência de valor. 

Quando declaramos uma variável e não atribuímos a ela nenhum valor, ela equivalerá a `undefined`. Exemplo:

```javascript
var time
console.log(time) //Imprime "undefined"
``` 

Se ao a declararmos quisermos deixar claro que o seu conteúdo está vazio, podemos utilizar `null`. Com esse recurso estamos indicando que apesar de esperarmos uma valor para ela, seu conteúdo é nulo.

A diferença entre `undefined` e `null` não é apenas semântica. Em quase todas as operações, ao não deixarmos explicito a ausencia de conteúdo, atribuindo a ela o valor `null`, o nosso compilador nos apontará um erro. O exemplo a seguir ilustra esse fato.


```javascript
let numero = null
console.log(numero + 3) //Imprime 3

let outroNumero // como não atribuimos nenhum valor, outroNumero ainda está indefinido.
console.log(outroNumero + 3) //AVISO DE ERRO: "outroNumero não está definido"
```

Perceba que em uma operação algébrica `null` é interpretado como 0. 


#### Boolean

Por `boolean` designamos os valores lógicos `true` e `false`.

```javascript

var verdadeiro = true
console.log(typeof verdadeiro) //Imprime "boolean" 

var falso = false
console.log(typeof falso) //Imprime "boolean" 

```

#### Objeto

Em essencia, quando falamos em `Object` estamos nos referindo a uma estrutura de dados comparável a um dicionário, onde associamos palavra-chave a informações específicas.

Podemos criar um objeto por exemplo que represente a ficha cadastral de uma pessoa.

Exemplo

```javascript
const pessoa = {
    nome: 'Paulo Henrique',
    idade: 85,
    endereco: 'Rua das acácias, 15 - São Paulo'
}
```

Acima temos `nome`, `idade`, e `endereco` como palavras-chave, indexando os dados da ficha cadastral. 

A leitura dos dados de um objeto é simples. Basta procedermos  conforme o trecho de código abaixo.

```javascript
console.log(pessoa['nome']) //Imprime "José de Assunção"
console.log(pessoa['idade']) //Imprime 25
console.log(pessoa.endereco) //Imprime "Rua das acácias, 15"
```

Perceba que utilizmos dois procedimentos. No primeiro colocando entre colchetes uma string com o nome da chave (`pessoa['nome']`), e no segundo a posicionamos, seguindo o nome da variável e um ponto (`pessoa.endereco`)

Perceba que podemos inserir como dado qualquer tipo, seja uma `string` e `number` , comos os indexados por `nome` e `idade`, respectivamente.

Se ainda desejarmos, podemos incluir todo o patrimônio do nosso personagem na mesma estrutura.

```javascript
pessoa.patrimonio = [
    {
        descricao: 'Apartamento na Avenue Foch, Paris', 
        valor: '3.000.000 euros'
    },
    {
        descricao: 'Jato Embraer Legacy 500', 
        valor: '5.000.000 reais'
    }
]
```

Um atribuição usando a notação `pessoa['patrimonio']` também é uma alternativa. 

Pela centralidade desse tipo dentro do javascript, iremos dedicar uma seção inteira a ele, quando discutirmos o paradigma de orientações a objetos.

## Array

`Array` é uma coleção ordenada de valores. Cada elemento dessa coleção é indexada, podendo inclusive ser de tipos diferentes.

Exemplos:

```javascript
const a = [] //
const b = ['1', '2', '3']
const c = ['', 2, null, false, undefined]
const d = [ 1, 2, 34 , 5, Infinity]
```

Caso quisermos saber o número de elementos de um `array` basta lermos sua propriedade `length`.

```javascript
const a = [1,2,3]
console.log(a.length) //Imprime 3
```



### Lendo e escrevendo arrays

A indexação de um array é iniciada com o número 0. Assim caso quisermos ler o primeiro elemento, escrevemos `a[0]`; para o segundo `a[1]`; para o terceiro `a[2]` e daí por diante.

Exemplo

```javascript
const a = [1,2,3,7,5]
console.log(a[0])// Imprime 1
console.log(a[3])// Imprime 7
```

Como sabemos que o número total de elementos de `a` é dado por `a.length`, e que o enésimo item é indexado por `n-1`, o valor do ultimo será dado por `a[a.length-1]`.

Exemplo

```javascript
const a = ['a', 'b', 'c', 'd', 'e']

//Ultimo item de a
console.log(a[a.length - 1]) //imprime 'e'
```

A alteração de um array é também bastante simples. Basta que para o enésimo item da coleção a ser alterado você faça `a[n-1] = novoValor`.

Exemplo

```javascript
const a = [1,2,3,4,5]
a[3] = - Infinity

console.log(a) //Imprime [1,2,3, Infinity, 5]
```

Perceba que estamos "alterando" uma constante, o que seria contrário ao que dizermos na seção (INDICAR SEÇÃO). Aqui cabe um esclarecimento: ao usarmos `const` durante a declaração, o que permanece inalterado não é o valor da variável e sim o seu endereço alocado na memória, a sua referência. Isso impede uma reatribuição, uma substituição, do valor de `a`, mas não a alteração da sua estrutura, dos valores dos seus elementos.

Exemplo:

```javascript
//alteração da estrutura do 
const a = [1,2,3,4,5]
a[3] = - Infinity

console.log(a) //Imprime [1,2,3, Infinity, 5]

a = 3 // AVISO DE ERRO: "reatribuição de variável constante"
```

Perceba que a alteração dos valores internos do array são permitidos, e não a reatribuição, a sua substituição.


### Adicionando e deletando itens

Da mesma forma que podemos substituir um elemento em uma array, podemos simplesmente adicionar outro na posição que desejarmos.

Exemplo

```javascript
const a = [1,2,3]
a[5] = 'abacate'

console.log(a) // Imprime [1,2,3, undefined, undefined, 'abacate']
```

Perceba que as posições 4 e 5 estão órfãs, por isso elas receberam o valor `undefined`. 

Ainda podemos contar com outras estratégias para adicionar e ate mesmo deletar um item de uma coleção.

O método `pop` por exemplo remove o último elemento de um array.

Exemplo

```javascript
const a = ["laranja", "abacate", "uva"]
const b = a.pop() 

console.log(b) //Imprime "uva"
console.log(a) // Imprime ["laranja", "abacate"]
```

A função `push` por outro insere um item na última poisição

Exemplo

 ```javascript
const a = ["laranja", "abacate", "uva"]
a.push("pera") 

console.log(a) // Imprime ["laranja", "abacate", "uva", "pera"]
 ```


Essas duas função serão suficientes para a manipulação de arrays durante o desenvolvimento desse trabalho. Para maiores informações visite (ARRAY REFERENCE EM PORTUGUES)

Antes de encerramos essa seção é importante ressaltar que, apesar de corresponder a uma estrutura de dados com finalidades diferentes, `array` corresponde a uma especialização do tipo `object`. Essa afirmação pode ser verificada abaixo.

```javascript
console.log(typeof [1,2,3,4,5,6]) //Imprime "object"
```


## Operadores

#### Operadores aritméticos

Como mencionado acima, operações aritméticas básicas são feitas com o uso dos operadores `+`, `-`, `*`, `/`.

```javascript
const a = 6 + 5 //11
const b = 6 - 5 //1
const c = 6 * 5 //30
const d = 6/5 //1.2
```

Acrescentamos a essa lista a negação unária, onde temos a mudança de sinal pelo acrescimo do sinal negativo antes de um número.

```javascript
const a = 15  
const b = - (a+3) //-18
```

Podemos operar aritméticamente com booleans também. Nestes casos `true` valerá 1  e `false` igual 0.

```javascript
true + true = 2
false + 3 = 0
```

Como dito há alguma seções atrás, a soma de uma string com qualquer tipo resulta em uma concatenação.

```javascript
true + 'olá'  = 'trueolá'
3 + 'teste' = '3teste'
undefined + 'visão' = 'undefinedvisão'
```

Vale mencionar o operador `remainder`, a partir do qual obtemos o resto de uma divisão

```javascript
5/2 // 1
5/98 //5
``` 

Já para exponenciação usamos `**`

```javascript
5**3 //125
2**3 //8
1**0 //1
```

Por fim temos os operadores incremento (`++`) e decremento (`--`) onde aumentamos ou diminuindo uma unidade de uma variável retornando um valor.

Ambos podem ser expressos de duas formas: prefixa ou pósfixa. 

Vamos à primera, a prefixa, onde operador precede o operando (`++variavel`)

```javascript

//Incremento
var a = 1
var b = ++a //b= 2 e a =2

//Decremento
var c = 3
var d = --c // c = 2 e d = 2

```

Perceba que nos dois casos o operando foi modificado, retornando em seguida o valor assumido após a modificação.

No caso do segunda, pósfixa, ao contrário, o valor original do operando é retornado e em seguida alterado.  

```javascript

//Incremento
var a = 1
var b = a++ //b=1 e a=2

//Decremento
var c = 3
var d = c-- // c=3 e d = 2
```

### Operadores de igualdade

Para a simples verificação de igualdades utilizamos os operadores `===` , `!==`. O valor resultante dessa verificação será simplesmente `true` ou `false`

Com o primeiro, `===` nos certificamos se duas variaveis são iguais ou não. A mesma verificação é feito a respeito da diferença, quando usamos `!==`.

Exemplos

```javascript
const a = 5
const b = 3

console.log(a===b) //Imprime false
console.log(a!==b) //Imprime true
```

Para nos certificamos sobre a igualdade entre duas variáveis também podemos usar simplesmente `==` - dois sinais de igualdade ao invés de três. Contudo, como o seu uso não é recomendado, não entraremos em detalhes sobre a diferença entre `==` e `===`. Neste trabalho ficaremos com a segunda opção.  

Uma nota sobre a igualdade entre dois objetos. 

Algo curioso ocorre quando comparamos duas dessas duas estruturas. A forma que javascript interpreta a igualdade entre eles, não é mesma utilizada para comparar números ou strings, por exemplo.

Observe o exemplo.

```javascript
const pessoa1 = {nome:'fernando', idade:15}
const pessoa2 = {nome: 'fernando', idade: 15}

console.log(pessoa1 === pessoa2) //Imprime false
```

Sendo o conteúdo entre `pessoa1` e `pessoa2` idêntico, por que a igualdade é falsa ?

A resposta para esse fato é explicada quando descobrimos que ao comparar dois objetos, javascript não compara conteúdo, e sim o endereço na memória reservado para paras cada uma das variáveis `pessoa1` e `pessoa2`, as suas referências, que são evidentemente diferentes.

Agora observe uma situção diferente

```javascript
const pessoa1  = {nome:'fernando', idade:15}
const pessoa2 = pessoa1

console.log(pessoa1===pessoa2) //Imprime true
```

Quando atribuímos a `pessoa1` a quantidade `pessoa2` estamos passando para ela o endereço na memória da primeira. Como a comparação entre objetos é feita por referência e não por valor, a igualdade entre elas será verdadeira.

Como a estrutura `array` é uma especialização de `object`, o princípio descrito acima será aplicada também a ela.

### Operadores de comparação

O exemplo abaixo ilustra o uso de operadores de comparação em javascript. 

```javascript
2>3 //false
3<=3 //true
4>3 //true
5>=10 //true
```

Como é vísivel não há diferenças relevantes com relação a outras linguagens.

### Operadores lógicos

Para os operadores lógicos temos `&&` (*and*) e `||` (*or*). Exemplos abaixo.

```javascript
var a = true && false;  // a => false
var b = true || false;  // b => true
```

Podemos também negar logicamente uma variável, utilizando o operador 

```javascript
var a = true;
console.log(!a) //Imprime false

var b = false;
console.log(!b) //Imprime true
```

Com o mesmo artifício podemos verificar se o conteúdo de uma variável está indefinido ou nulo.

```javascript
var a = null
console.log(!a) //Imprime true

var b 
console.log(b) //Imprime undefined

var c = !b
console.log(c) //Imprime true

var d = 0
console.log(!d) //Imprime true

var e = ''
console.log(!e) //Imprime true

var f = 7
console.log(!f) //Imprime false

var g = 'batata'
console.log(!g) //Imprime false
```

Perceba pelos casos em que `var d = 0` e  `var e = ''`, o número zero e strings vazias também são interpretadas como conteúdo nulo. Fato que explica o porquê que elas se tornam verdadeiras quando negadas.

Por outro lado, pelos dois últimos exemplos, percebemos que se uma variável contém conteúdo não-nulo a sua negação resultará em um valor `false`. Lê-se portanto que "as variáveis `f` e `g` **NÃO** estão vazias."


### Operador `in`

Para verificarmos se um objeto contém uma determinada propriedade, usamos o operador `in`. Exemplos

```javascript
const a = {
    prop1: 'valor 1', 
    prop2: 'valor 2'
}

console.log('prop2' in a) //Imprime true
console.log('prop3' in b) //Imprime false
```


## Afirmações

### Afirmação condicional

#### if...else

Uma afirmação `if` é executada se uma condição específica é atendida. Em caso contrários as afirmações `else` são testadas.

Façamo-nos claro com um exemplo

```javascript
if(a===b){
    console.log("a é idêntico b")
}else if(b === 3){
    console.log("b é idêntico a 3")
}else if(!c){
    console.log('c contém conteúdo nulo ou indefinido')
}else {
    console.log('Nenhuma das condições acima foram atendidas')
}
```

No exemplo acima, se `a` for identico a `b` o bloco `if` será executado. 

Caso contrário, a afirmação dada por `else if` será verificada. Sendo verdadeiro, seu bloco será executado. Se falso, o compilador lerá o próximo `else if`. 

Se todos as asserções anteriores a `else` forem falsas o conteúdo do seu bloco será processado.

#### switch

A estrutura `switch` nos permite avaliar o valor de uma determinada variável. O bloco referente à avalição correta será executado.

```javascript
var numero;
switch (numero) {
  case 5:
    avaliacao = 'A variável número é inteira';
    break;
  case 3.5:
    avaliacao = 'O número é menor que 5';
    break;
  default:
    avaliacao = 'A avalição será padrão';
    break;
}
```

Acima estamos avaliando o valor da variável número. Vê-se que ela é comparada com todos os casos - `case` - seguintes. Sendo nenhum verdadeiro, o bloco que corresponde a `default` é processado.

Para o funcionamento correto dessa estrutura, devemos finalizar cada caso com a palavra-chave `break`.

### Funções

Com funções podemos criar rotinas executáveis. Exemplo:

```javascript
function dobrar (numero){
    return numero*2
}

console.log(dobrar(4)) //Imprime 8
console.log(dobrar(2000)) //Imprime 4000
```

Acima temos uma função que retorna o dobro de qualquer numero entregue como argumento.

Podemos escreve uma funçaõ, também seguinte forma:

```javascript
const dobrar = (numero) => {
    return numero*2
}
```

Ainda de forma mais sucinta 

```javascript
const dobrar = numero => numero*2
console.log(dobrar(10)) //Imprime 20
```


### Loops e iteração

Loops são estruturas úteis quando desejamos a repetição de um conjunto de procedimentos. Em javscript há diversas formas de repetir um determinado processo ou conjunto de passos. Apesar da linguagem ofecerer um bom número delas, destacaremos apenas o `for`, `do...while` e outras duas úteis para iteração de arrays  `forEach` e `map` . 

#### for

O uso do `for` segue a seguinte forma.

```javascript
for(inicialiazao; condição; incremento){
    bloco de codigo    
}
```

Para fins de ilustração, considere os exemplos abaixo 

```javascript
for(let i = 100; i>=1; --i){
    console.log(i)
}
```

No exemplo acima,iniciamos a nossa variável `i` com valor igual a 100 (`let i = 100`). É com esse valor que processamos as instruções do bloco.

Na iteração seguinte, `i` é decrementado (`i--`), passando a valer 99 na nova iteração.

A execução das instruções do bloco se repetirá até que  `i` esteja de acordo com o limite estabelecido, neste caso "maior ou igual a um" (`i>=1`)

#### do...while

Em tradução livre *do...while* corresponde à "faça...enquanto". É exatamente isso o que acontece no exemplo a seguir.

```javascript
var i = 0;
do{
    ++i
}while(i<=100)
```

No trecho acima `i` é incrementado enquanto seu valor é inferior ou igual a 100.

Podemeos de expressar as mesmas instruções com uso de um simples `while`.

```javascript
while(i<=100){
    ++i
}
```

#### Array.forEach

O `Array.forEach` é uma das estruturas mais utilizadas para iteração de arrays. Exemplificamos o seu uso a seguir.

```javascript
const itens = ['Abacaxi', 1, 105]

itens.forEach(function(item, index){
    console.log(item, index)
})
```

Com o código acima, iteramos sobre os itens de um array, o de `itens` nesse caso. Para cada item da coleção a função é executada, tendo como o primeiro argumento o elemento corrente e o respectivo item. Nos seções seguintes faremos uma discussão aprofundada sobre funções.

#### Array.map 

Já o Array.map nos permite transformar os elementos do `array` através da iteração.

```javascript
const numeros = [1,2,3,4,5]

const resultado = numeros.map(function(numero){
    return numero*2 
})

console.log(resultado) //Imprime [2,4,6,8,10]
```

Perceba que cada valor de `numero` foi dobrado. O resultado final desse processamento é retornado para a variável `resultado`.

## Programação orientada a objetos. Noções Elementares.

Como descrito anteriormente, objeto é um tipo cuja estrutura é comparada a um dicionários. Nele associamos palavras-chave (propriedades) a determidados valores, de qualquer tipo. Com ele podemos fazer a descrição de qualquer entidade, seja ela um poste, um cachorro ou até mesmo deputado. 

Tomemos um cachorro como exemplo. Como poderíamos descrevê-lo?  Um objeto representativo dessa entidade poderia ser dado seguinte forma.

```javascript
const felpudo = {
    nome: 'Felpudo',
    raca: 'Chow Chow',
    pelagem: 'Longa', 
    idade: '5 anos'
}
```

Podemos associar comportamentos ao nosso cão, introduzindo um função "latir".

```javascript
felpudo.latir = function (){
    console.log("AU AU")
}

felpudo.latir() // "Au Au"
```

A tarefa de descrever cães passará ficar complicada se desejarmos classificar outros. Ao descrever mais um poderíamos escrever:

```javascript
const barney = {
    nome: 'Barney',
    raca: 'Pastor Alemão',
    pelagem: 'Curta', 
    idade: '3 anos', 
    latir: function (){
        console.log("Au Au")
    }
}
```

É com objetivo de facilitar essa tarefa que podemos recorrer a uma *Classe*. Classe são estruturas comparáveis a uma fôrma, úteis portanto para modelar entidades. Poderímos, por exemplo, modelar um cão da seguinte forma.


```javascript
class Cao {
    
    constructor(nome, raca, velocidadeMaxima){
        this.nome = nome
        this.raca = raca
        this.velocidadeMaxima = velocidadeMaxima
    }

    latir(){
        console.log("AU AU")        
    }

    correr(){
        console.log("Correndo a "+this.velocidadeMaxima+"km/h")
    }
}
```

Atente para a função `constructor`. Ela é a porta de entrada da classe. Como argumentos passamos a ela todos os dados relevantes para criação do nosso cão. 

Com `this` temos acesso ao escopo do objeto. Portanto com `this.raca = raca` estamos instruindo a classe para criar dentro dela uma varivel `raca` cujo valor é dado pela variável de mesmo nome, recebido pelo construtor.
 

Com a classe estabelecida, a tarefa de criar um ou um milhão de cães passa a ser trivial.

```javascript
    const felpudo = new Cao('Felpudo', 'Chow Chow', 20)
   
    const pangare = new Cao('Pangare', 'Dálmata', 10)
    pangare.latir() // Imprime "Au au"
   
    const minotauro = new Cao('Minotauro', 'Pit Bull', 50)
    minotauro.correr() //Imprime "Correndo a 50km/h"
```

Perceba que ao fazermos `this.velocidadeMaxima = velocidadeMaxima` no construtor, todo objeto passa a a ter acesso a essa propriedade. E é por esse motivo que, no exemplo acima, colocando o nosso cão minotauro para correr - `minotauro.correr()` - conseguimos imprimir o seu valor,.


## Considerações finais

Durante este capítulo abordamos apenas os aspectos essenciais do Javascript, necessários para evolução dos próximos capítulos. Mais informações estão disoponiveis em ....

<!--TODO: MELHORAR!!!!!!!!!! -->

<!--Com esta seção buscamos apenas abordar aspectos essenciais para discussão dos proximos capítulos. A tarefa de descrever por completo a programação orientada a objetos exigiria algumas centenas de pagina.

Nessa seção buscamos apenas pincelar aspectos

Para compreendermos o 




A 

Programação orientada a objetos é um topico que para ser coberto por inteiro, necessitariamos a quantidade de paginas 


-->
