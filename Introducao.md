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














