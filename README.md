## 📘 Teoría Básica de Grupos y una Aplicación

Este repositorio contiene herramientas matemáticas implementadas en JavaScript para trabajar con estructuras algebraicas, factorización y propiedades en aritmética modular.  
Antes de presentar las funciones, comenzamos con una breve introducción a la teoría de grupos.

## 🔷 Definición de Grupo

Un **grupo** es un conjunto \( G \) junto con una operación binaria  
\[
\cdot : G \times G \to G
\]
que cumple las siguientes propiedades:

### 1. Asociatividad
Para todos \( a, b, c \in G \):
\[
(ab)c = a(bc)
\]

### 2. Elemento neutro
Existe un elemento \( 1 \in G \) tal que para todo \( a \in G \):
\[
a \cdot 1 = 1 \cdot a = a
\]

### 3. Elemento simétrico (inverso)
Para todo \( a \in G \) existe un elemento \( a^{-1} \in G \) tal que:
\[
a a^{-1} = a^{-1} a = 1
\]

## 🔷 Grupos Abelianos

El grupo \( G \) es **abeliano** si además se cumple:

### 4. Conmutatividad
Para todos \( a, b \in G \):
\[
ab = ba
\]
