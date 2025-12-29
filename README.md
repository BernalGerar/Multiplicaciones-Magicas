# Multiplicaciones Mágicas de Dudeney

El propósito de este proyecto es proporcionar herramientas para resolver una variante del problema de las multiplicaciones mágicas de Henry Dudeney, como el ejemplo:

$$ \displaystyle 267606 \times 81 = 2{\color{red}1}6760{\color{red}8}6 $$

Se buscan todos los pares de números $(x, y)$, tales que $x$ tenga cualquier cantidad de cifras, $y$ sea un número de 2 cifras, y su producto cumpla con la propiedad de inserción mostrada.

Para ello, nos valdremos de la siguiente igualdad:

$$ 
\displaystyle x(10(c - 1) + d) = 9a \cdot 10^n + d \cdot 10^n + 10c - 9b 
$$

Donde se cumplen las siguientes condiciones:
- $y = 10c + d$
- $x = a \cdot 10^{n-1} + 10x' + b$
- $10^2 \le x < 10^n$
- $a, b, c, d$ son cifras individuales ($0 \le a,b,c,d \le 9$)

Denotaremos al número $10(c - 1) + d$ como $m$.


$$
\begin{array}{|c|c|c|c|}
\hline
x & y & m & n \\
\hline
16393442622950819672131147540983606557377049180327870 & 71 & - & 53 \\
\hline
\end{array}
$$
