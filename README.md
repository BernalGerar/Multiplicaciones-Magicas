## Definición Formal de Grupo

Sea un conjunto $\mathcal{G}$ y una operación binaria, la estructura $(\mathcal{G}, \cdot)$ es un grupo si satisface los siguientes axiomas:

### 1. Asociatividad
$$\forall a, b, c \in \mathcal{G} : (a \cdot b) \cdot c = a \cdot (b \cdot c)$$

### 2. Elemento Neutro
$$\exists e \in \mathcal{G} \text{ tal que } \forall a \in \mathcal{G} : a \cdot e = e \cdot a = a$$

### 3. Elemento Simétrico (Inverso)
$$\forall a \in \mathcal{G}, \exists a^{-1} \in \mathcal{G} : a \cdot a^{-1} = a^{-1} \cdot a = e$$

---

### 🔹 Grupos Abelianos
El grupo $\mathcal{G}$ es **abeliano** si además cumple con la conmutatividad:

### 4. Conmutatividad
$$\forall a, b \in \mathcal{G} : a \cdot b = b \cdot a$$