## 📖 Definición de Grupo

Un grupo es un conjunto en el que hay definido un producto que cumple las propiedades siguientes:

### 1. Asociatividad
Para todos $a, b, c \in \mathcal{G}$:
$$(ab)c = a(bc)$$

---

### 2. Elemento neutro
Existe un elemento $1 \in \mathcal{G}$ tal que para todo $a \in \mathcal{G}$:
$$a \cdot 1 = 1 \cdot a = a$$

---

### 3. Elemento simétrico (inverso)
Para todo $a \in \mathcal{G}$ existe un elemento $a^{-1} \in \mathcal{G}$ tal que:
$$a a^{-1} = a^{-1} a = 1$$

---

### 💎 Grupos Abelianos

El grupo $\mathcal{G}$ es **abeliano** si además se cumple:

### 4. Conmutatividad

Para todos $a, b \in \mathcal{G}$:
$$ab = ba$$


## ✨ Orden de un Elemento y Teorema

Se dice que $g$ tiene **orden finito** si existe un $m > 0$ tal que $g^m = 1$. En tal caso se define el **orden de $g$** como el menor número natural $m > 0$ que cumple esto, y se representa por $o(g)$. En caso contrario se dice que $g$ tiene **orden infinito**, y se representa por $o(g) = \infty$.

---

### Teorema

Sea $g$ un elemento de un grupo. Entonces:

1.  Si $o(g) = d$, entonces $g^m = g^n$ si y sólo si $m \equiv n \pmod d$. En particular, $g^m = 1$ si y sólo si $d \mid m$.
2.  Si $o(g) = \infty$, entonces $g^m = g^n$ si y sólo si $m = n$.