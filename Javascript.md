#Javascript 

Javascript é uma linguagem utilizada essencialmente no ambiente web.

Resultado de alguns meses de trabalho, a sua primeira versão foi introduzida por Brendan Eich em 1995, durante sua passagem pela Netscape.

Há uma confusão recorrente entre Javascript e Java. Contudo, não há nenhuma correlação direta entre elas.

Desde o início, o desenvolvimento desta linguagem foi orientada para a construçao de websites, o que a restrigiu ao ambiente dos webrowsers. Porém, desde o final dos anos 2000 tem se visto uma evolução vestiginosa que vem permitindo o seu uso em servidores (NodeJS), bem como no desenvolvimento de aplicações para celulares(React Native, Cordova, Ionic, e etc).

A escolha dessa linguagem neste trabalho é explicada pela facilidade de uso proporcionada por ela. Para a compilação do nosso código precisaremos apenas de um browser. Nesse intuito recomendamos o Chrome, disponível em `https://www.google.com/chrome/browser/desktop/`. Para a compilação dos exemplos no Chrome utilizaremos o modo desenvolvedor, acessível com a tecla `f12` na aba `console`.

Nas próximos linhas, oferecemos uma panorama sobre os seus fundamentos, apresentado os conceitos necessários para a evolução da proposta dessa monografia.


##Sintaxe básica 

A sintaxe básica do Javascript é similar a outras linguagem de programação. Entre os aspectos estritamente fundamentais destacamos: 

* Javascript é `case-sensitive`, o que equivale a dizer que há diferenciação entre letras maiúsculas e minúsculas. Portanto `numero` e `Numero` serão indentificados diferentemente.

* Blocos são delimitados por chaves `{ }`. Exemplos:


```javascript
    if (numbero > 2) {
        declaracao_1;
        declaracao_2;
        ...
        declaracao_n;
    }
```


```javascript
    while (numbero > 2) {
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

    //essa linha tão pouco

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

Perceba que no caso acima, a variáveis `numero` e `outroNumero` não estão disponíveis fora de `if`. O nosso console, neste caso, nos avisará que as variáveis estão indefinidas, ou *undefined*.

A diferença entre `const` e `let` é mais pragmática. 

Como sugere a nomenclatura, `const` é usada para a definição de constantes, não permitindo assim modificações futuras da variável. Ela será portanto `read-only`.

A palavra-chave `let`, que pode ser traduzida livremente como "Seja", é mais flexível, pois permite a mudança futura do valor da variável.

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

###Tipos de variáveis

Em javascript as variáveis podem sete assumir tipos diferentes, mas apenas seis serão relevantes para nós:   

* **Boolean** - `true` ou `false`
* **Null** - vazio, em tradução livre
* **Undefined** - indefinido
* **Number** - como em `1`, `2`, e `3`
* **String** - usado para representação textual, como "Por que não me liberam dessa monografia?"
* **Object** - Similar a um dicionário, esse tipo permite a associação de variáveis a palavras-chave. Explicações a frente.  

Diferentemente de outras linguagens, como C, C++ ou Java, não é exigido durante a declaração da variável a explicitação o seu tipo. Para tanto, o uso de `var`, `let` ou `const` é suficiente.

Dizemos que Javacript é uma linguagem de "tipagem dinânica", pois enquanto a variável `numero` pode equivaler a um número, na linha seguinte podemos substituir o seu valor por um sequência de caracteres, uma `string`.





