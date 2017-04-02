##Introdução

Com o desenvolvimento desse trabalho buscamos exemplificar a construção de uma engine física. 

Engines físicas são softwares cujo o único objetivo é simulação de aspectos físicos da realidade, sendo úteis por isso tanto desenvolvimento de jogos eletrônicos quanto na pesquisa cientíca.

Nesse trabalho iremos ilustrar a construção uma engine física simples, com a qual iremos explorar três aspectos essenciais da realidade: a translação, rotação e colisão.

O seu desenvolvimento se dará a aplicação do método de Verlet, procedimento numérico utilizado para o estudo das leis de Newton.

A linguagem de programação aqui utilizada será o Javascript. Essa escolha está apoiada nas facildades oferecidas pela linguagem, tanto para cálculos numérico quanto para representação gráfica dos seus resultados. Outro aspecto levado em consideração é a portabilidade: o Javascript é facilmente interpretados por qualquer navegador web, o que permite a fácil reprodução desse trabalho por qualquer interessado. Todos os conceitos pertinentes à linguagem e que são necessários à compreensão do texto serão discutidas.  

Esse texto também visa uma finalidade didática, oferecendo ao professor de física um material de apoio para introdução do tema da computação física em sala de aula.

A estrutura dessa trabalho é formada pela apresentação do modelo de Verlet e, de outra com propósito similar mas mais simples: o método de Euler. Uma breve comparação entre as duas será esboçada, numa discução em que vantagens de desvantagens de cada uma será discutida. Ao fim mostraremos porque o primeiro método é mais apropriado.

Em seguida lançaremos as bases computacionais propriamente dita, apresentando sucintamente a linguagem Javascript e explicando os seus aspectos conceituais mais importantes para o nosso objetivo.

No terceiro capítulo, será dedicado a **to get our hands durty**, onde iremos, com o foco estrito na prática, desenhar e implementar nossos algoritmos para translação, rotação e colisão.

Ao longo do quarto e último capítulo, iremos vamos fazer um apanhado sobre o que foi discutido e apontar alguns possíveis desdobramentos didáticos para esse trabalho. 

Todos as simulações aqui apresentadas estarão disponível no endereço http://physik.github.io. 


##Euler e Verlet 

###Euler

Para descrição mecânica de um ponto material necissatamos apenas da sua posição e velocidade em determinados instantes de tempo.

O procedimento numérico mais elementar a que podemos recorrer para simulação desse sistema é o conhecemos por método de Euler.

A partir dele, os dois parametros que desejamos conhecer podem ser descritos do seguinte modo.

$$x(t+\delta t) = x(t) + v(t)\delta t $$
$$v(t+\delta t) = v(t) + a(t)\delta t $$

O conjunto de passos que podemos seguir, o que conhecemos como algoritmo, para a determinação dos consecutivos valores de $v$ e $x$ poderia ser o seguinte

1. para $t_0$ ,nosso tempo inicial, calculamos $x(t_0)$ e $v(t_0)$ e determinamos valor da aceleração nesse instante, $a_0$. Em um instante seguinte teremos

$$x(t_1) = x(t_0) + v(t_0)\delta t $$
$$v(t_1) = v(t_0) + a(t_0)\delta t $$

2. Utilizando os valores calculados para $x_1$ e $v_1$, teriamos no passo seguinte. 

$$x(t_2) = x(t_1) + v(t_1)\delta t $$
$$v(t_2) = v(t_1) + a(t_1)\delta t $$

3. Repetindos os passos acima tantas vezes quanto necessário, poderiamos fazer a seguinte generalização.

$$x(t_n) = x(t_(n-1)) + v(t_(n-1))\delta t $$
$$v(t_n) = v(t_(n-1)) + a(t_(n-1))\delta t $$

O os valores numérico de $x$ e $v$ durante o intervalo deseja desejado nos faculta assim a descrição do comportamento do corpo.


### Euler no lançamento de um projétil

Lancemos um projétil a 30 m/s, com angulação de $30\deg$ com relação ao chão. Uma descrição simplificada para trajetória é dada do seguinte modo

//
    DESCRIÇÃO DO MODELO
//




















