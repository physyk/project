Um dos métodos mais utilizados em dinâmica moleculara é o conhecemos como algoritmo de Verlet.

Para derivá-lo, escrevemos duas expanções de Taylor para uma posição $\vector{r}(t)$, nos instantes t+\delta(t) e t-\delta(t).

        - equações nos instantes t+\delta(t) e t-\delta(t. (1) e (2)

Podemos simplificar a nossa notação tomando r(t) simplesmente como x_(n+1)

Adicionando as duas expressões, teremos:

      - adicaao (3)

Caso fizermos a subtração, teremos.

     - subtração (4)

Perceba que o erro local para para (3) é de de ordem 2 e para 4 de ordem (4)

Encontremos agora uma solução explicita para x_(n+1).

Comecemos resolvendo a solução (4) para x_(n-1) teremos 

x_(n-1) = x_(n+1) - 2 v_n*$\delta(t)

Substittuindo a equação na equação (3) teremos

x_(n+1) = x_n + v_n \delta(t)+ \dfrac{1}{2} \a_n (\delta t)^2 


Encontremos agora uma solução para v_(n+1).

Podemos reescrever (4) da seguinte forma

v_(n+1) = \dfrac{x_(n+2) - x_n}{2 \delta t}

Usando a equação (2) para obter 

x_{n+2} = 2x_{n+1} - x_n + a_{n+1} (\delta t) ^ 2

E substituindo na equação anterior, teremos.

v_(n+1)  = \dfrac{x_(n+1) - x_n}{\delta t} + \dfrac{1}{2} a_{n+1} \delta t

Finalmente usando equação (x_(n+1)) (5) para eliminar $x_{n+1} - x_n$ teremos

v_{n+1} = v_{n} + \dfrac{1}{2}(a_{n+1}+a_{n}) \delta t

