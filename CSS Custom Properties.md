# 🎨 CSS Custom Properties (Variáveis CSS) — Guia Didático

As **Custom Properties** (ou **variáveis CSS**) são uma forma moderna e poderosa de armazenar valores reutilizáveis no seu CSS. Elas ajudam a manter o código limpo, organizado e fácil de manter.

---

## 🧠 O que são variáveis CSS?

São como "caixinhas" onde você guarda valores (como cores, tamanhos e fontes) que podem ser reutilizados em vários lugares do CSS.

### 📌 Sintaxe:
```css
:root {
  --nome-da-variavel: valor;
}
````

### ✅ Exemplo:

```css
:root {
  --cor-principal: #ff6600;
  --fonte-base: 'Arial', sans-serif;
}
```

---

## 💡 Como usar as variáveis no CSS?

Use a função `var()` para aplicar o valor da variável:

```css
body {
  background-color: var(--cor-principal);
  font-family: var(--fonte-base);
}
```

---

## 🌱 O que é `:root`?

O seletor `:root` representa o elemento raiz do documento HTML — ou seja, o `<html>`.

### 📌 Exemplo:

```css
:root {
  --cor-fundo: #ffffff;
}
```

É equivalente a:

```css
html {
  --cor-fundo: #ffffff;
}
```

### 🔍 Mas qual a diferença?

| Seletor | Especificidade |
| ------- | -------------- |
| `html`  | 0,0,0,1        |
| `:root` | 0,0,1,0        |

➡️ `:root` tem **maior especificidade**, então é o preferido para definir **variáveis globais** que você quer ter certeza de que prevalecem.

---

## 🧩 Vantagens de usar Custom Properties

✅ Reutilização de código
✅ Facilidade de manutenção
✅ Organização visual do CSS
✅ Temas dinâmicos (claro/escuro)
✅ Atualização em tempo real com JavaScript

---

## 🌗 Exemplo com tema claro/escuro

```css
:root {
  --cor-fundo: #ffffff;
  --cor-texto: #000000;
}

.tema-escuro {
  --cor-fundo: #121212;
  --cor-texto: #f5f5f5;
}

body {
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
}
```

### Alterando com JavaScript:

```js
document.body.classList.toggle('tema-escuro');
```

---

## 🛠️ Exemplo prático completo

```css
:root {
  --cor-primaria: #3498db;
  --cor-secundaria: #2c3e50;
  --espacamento: 16px;
}

body {
  font-family: sans-serif;
  margin: var(--espacamento);
  color: var(--cor-secundaria);
}

button {
  background-color: var(--cor-primaria);
  padding: var(--espacamento);
  border: none;
  color: white;
  border-radius: 4px;
}
```

---

## 📌 Conclusão

* Use `:root` para definir variáveis globais.
* Use `var(--nome)` para aplicar as variáveis.
* Elas deixam seu CSS mais limpo, organizado e fácil de alterar.
