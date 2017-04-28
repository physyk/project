#Javascript 

Javascript é uma linguagem utilizada essencialmente no ambiente web.

Resultado de alguns meses de trabalho, a sua primeira versão foi introduzida por Brendan Eich em 1995, durante sua passagem pela Netscape.

Há uma confusão recorrente entre Javascript e Java. Contudo, não há nenhuma correlação direta entre elas.

Desde o início, o desenvolvimento desta linguagem foi orientada para a construçao de websites, o que a restrigiu ao ambiente dos webrowsers. Porém, desde o final dos anos 2000 tem se visto uma evolução vestiginosa que vem permitindo o seu uso em servidores (NodeJS), bem como no desenvolvimento de aplicações para celulares(React Native, Cordova, Ionic, e etc).

A escolha dessa linguagem neste trabalho é explicada pela facilidade de uso proporcionada por ela. Para a compilação do nosso código precisaremos apenas de um browser. Nesse intuito recomendamos o Chrome, disponível em `https://www.google.com/chrome/browser/desktop/`

Nas próximos linhas, oferecemos uma panorama sobre os seus fundamentos, apresentado os conceitos necessários para a evolução da proposta dessa monografia.


##Sintaxe básica 

A sintaxe básica do Javascript é similar a outras linguagem de programação. Entre os aspectos estritamente fundamentais destacamos: 

* Javascript é `case-sensitive`, o que equivale a dizer que há diferenciação entre letras maiúsculas e minúsculas

* Blocos sao delimitados por delimitados por chaves `{ }`. Exemplos:


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


* Comentários como multiplas linhas são delimitados por `/* */`. Em caso de linha única usamos `//`. Exemplos

```javascript

    /*
        Esse bloco de texto não é lido pelo
        compilador
    */

    //essa linha tão pouco

```

## Variáveis e tipos

Ao introduzirmos o nome de uma variável em javascript a precedemos com  `let`, `const`, ou `var`.

Ao usarmos `let` ou `const` a abrangência da definição da variável estará restrita apenas ao bloco (escopo) onde a declaramos.

Considere um exemplo prático para o uso de `var`.

```javascript

    if(3>2){
        var numero = 4
        console.log(numero) // IMPRIME "4" 
    }

    console.log(numero) // IMPRIME "4"

```

A variável `número` é declarada dentro do bloco `if`. Imprimindo o seu valor - usando `console.log` - percebemos que ela está disponível dentro e fora do bloco.

Vejamos o que ocorre ao usarmos `const` e `let` dentro do mesmo bloco.

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

Perceba que no caso acima, a variáveis `numero` e `outroNumero` não estão disponíveis fora de `if`. O nosso console, neste caso, nos avisará que as variáveis estão indefinidas, ou **undefined**.

A diferença entre entre `const` e `let` é mais pragmática. 

Como sugere a nomenclatura, `const` é usada para a definição de constantes, não podendo, assim, serem modificadas. Elas são portanto `read-only`.

A palavra-chave `let`, que pode ser traduzida livremente como "Seja", é mais flexível, pois permite a mudança futura do valor da variável.


Considere o exemplo

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



