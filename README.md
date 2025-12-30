# Multiplicaciones Mágicas de Dudeney

El propósito de este proyecto es proporcionar herramientas para resolver una variante del problema de las multiplicaciones mágicas de Henry Dudeney, como el ejemplo:

$$ \displaystyle 267606 \times 81 = 2{\color{red}1}6760{\color{red}8}6 $$

Se buscan todos los pares de números $(x, y)$, tales que $x$ tenga cualquier cantidad de cifras, $y$ sea un número de 2 cifras, y su producto cumpla con la propiedad de inserción mostrada.

Para ello, nos valdremos de la siguiente igualdad:

$$ 
\huge x(10(c - 1) + d) = 9a \cdot 10^n + d \cdot 10^n + 10c - 9b 
$$

Donde se cumplen las siguientes condiciones:
- $y = 10c + d$
- $x = a \cdot 10^{n-1} + 10x' + b$
- $x' < 10^{n-2}$
- $10^2 \le x < 10^n$
- $a, b, c, d$ son cifras individuales ($0 \le a,b,c,d \le 9$)

Denotaremos al número $10(c - 1) + d$ como $m$.


A continuación, recogemos en la tabla los valores de $x$, $y$, $m$, $n$ (para el exponente $n$, se recoge el menor de todos los posibles) para los cuales se cumple la relación que hemos definido para las cifras $a, b, c, d$.

---

## Resultados Encontrados

$$
\begin{array}{|c|c|c|c|}
\hline
x & y & m & n \\
\hline
16393442622950819672131147540983606557377049180327870 & 71 & 61 & 53 \\
\hline
16393442622950819672132 & 71 & 61 & 23 \\
\hline
1639344263 & 71 & 61 & 10 \\
\hline
16394 & 71 & 61 & 5 \\
\hline
163934426229508196721311475409836065573770491803278688525 & 71 & 61 & 57\\
\hline
1639344262295081967213114754098360656 & 71 & 61 & 37 \\
\hline
1639344262295081967213114754098360655737704918032787 & 71 & 61 & 52 \\
\hline
1639344262295081967213114754098360655737704918 & 71 & 61 & 46 \\
\hline
16393442622950819672131147540983606557377049 & 71 & 61 & 44 \\
\hline
14084507042253522 & 81 & 71 & 17 \\
\hline
14084507043 & 81 & 71 & 11 \\
\hline
14084507042253521126760564 & 81 & 71 & 26 \\
\hline
14085 & 81 & 71 & 5 \\
\hline
140845070422535211267606 & 81 & 71 & 24 \\
\hline
14084507042253521127 & 81 & 71 & 20 \\
\hline
1408450704225352112676056338028169 & 81 & 71 & 34 \\
\hline
2676056338028169014084507042253522 & 81 & 71 & 34 \\
\hline
2676056338028169014084507043 & 81 & 71 & 28 \\
\hline
26760564 & 81 & 71 & 8 \\
\hline
2676056338028169014085 & 81 & 71 & 22 \\
\hline
267606 & 81 & 71 & 6 \\
\hline
27 & 81 & 71 & 2 \\
\hline
2676056338028169 & 81 & 71 & 16 \\
\hline
3943661971830985915492957746480 & 81 & 71 & 31 \\
\hline
394366197183098591549295774648 & 81 & 71 & 30 \\
\hline
197368421052631580 & 86 & 76 & 18 \\
\hline
19736842105263158 & 86 & 76 & 17 \\
\hline
15 & 93 & 83 & 2 \\
\hline
2530120481927710843373493975903615 & 93 & 83 & 34 \\
\hline
3615 & 93 & 83 & 4 \\
\hline
46987951807230 & 93 & 83 & 14 \\
\hline
5783132530120481927710843373493975903615 & 93 & 83 & 40 \\
\hline
686746987951807230 & 93 & 83 & 18 \\
\hline
7951807230 & 93 & 83 & 10 \\
\hline
174418604652 & 96 & 86 & 12 \\
\hline
2790697674418604652 & 96 & 86 & 19 \\
\hline
3837209302326 & 96 & 86 & 13 \\
\hline
48837209302326 & 96 & 86 & 14 \\
\hline
59302326 & 96 & 86 & 8 \\
\hline
697674418604652 & 96 & 86 & 15 \\
\hline
\end{array}
$$

### Ejemplo de resolución (Fila 21)

Ahora vamos a ver cómo podemos encontrar todas las soluciones haciendo un caso particular. Para ello, tomamos los valores de la **fila 21** de la tabla, de modo que tenemos:
$ a = 2, \quad b = 6, \quad c = 8, \quad d = 1, \quad m = 71 $

Sustituyendo en la igualdad y reduciendo módulo $m$, obtenemos:
$ 18 \cdot 10^n + 10^n + 80 - 54 \equiv 0 \pmod{71} $

Lo cual se simplifica como:
$ 19 \cdot 10^n \equiv 45 \pmod{71} $

Para despejar $10^n$, calculamos el inverso modular:
$ 10^n \equiv 19^{-1} \cdot 45 \pmod{71} $
$ 10^n \equiv 36 \pmod{71} $

La solución mínima es $n = 6$. Calculando el orden de 10 módulo 71, obtenemos $o_{71}(10) = 35$, por lo que el conjunto de soluciones para $n$ es:
$ 10^{6 + 35k} \equiv 36 \pmod{71} $

Finalmente, la fórmula general para hallar $x$ en este grupo será:
$ \large x = \frac{19 \cdot 10^{6 + 35k} + 26}{71} $