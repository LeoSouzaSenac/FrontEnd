Conforme nosso projeto cresce, fica difícil manter toda estilização em um só arquivo. 
Para evitar arquivos CSS gigantescos e manter seu código bem organizado, a melhor prática é **dividir o CSS em múltiplos arquivos 
com responsabilidades específicas**.

---

### 📁 **1. Estrutura Modular**

Claro! Vamos explicar **cada arquivo CSS** de uma estrutura organizada, para que você entenda sua função e como usá-lo corretamente. Essa divisão é essencial para **evitar CSS gigantescos** e facilitar a manutenção do projeto.

---

## 📁 Estrutura Completa e Explicada

```bash
/css
  ├── reset.css
  ├── base.css
  ├── layout.css
  ├── components.css
  ├── pages/
  │    ├── home.css
  │    └── contato.css
  ├── media-queries.css
  └── main.css
```

---

### 1. `reset.css` ou `normalize.css` 🧼

**Função:** Remove os estilos padrão dos navegadores, deixando todos os elementos com um ponto de partida comum.

**Exemplo:**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Por que usar?** Para garantir que seu site tenha a **mesma aparência em diferentes navegadores**.

---

### 2. `base.css` 📚

**Função:** Define os estilos globais da aplicação — cores, fontes, espaçamentos e elementos básicos.

**Inclui:**

* Tipografia padrão (fontes, tamanhos)
* Cores principais
* Estilo de links
* Estilo do `body`, `html`, títulos (`h1`, `h2`, etc.)

**Exemplo:**

```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

a {
  text-decoration: none;
  color: #0066cc;
}
```

---

### 3. `layout.css` 🧱

**Função:** Cuida da estrutura da página — **header, footer, sidebar, grid de colunas**, containers principais.

**Inclui:**

* Posições
* Tamanhos
* Flexbox ou Grid
* Espaçamento entre seções

**Exemplo:**

```css
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
```

---

### 4. `components.css` 🧩

**Função:** Guarda os estilos reutilizáveis de **componentes pequenos** como:

* Botões
* Cards
* Formulários
* Navegação
* Ícones

**Exemplo:**

```css
.btn {
  background-color: #ff6600;
  padding: 10px 20px;
  color: white;
  border-radius: 8px;
}

.card {
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
}
```

---

### 5. `pages/home.css` e `pages/contato.css` 🗂️

**Função:** Guarda estilos **específicos de cada página**, que não são reutilizados em outras partes do site.

**Exemplo (home.css):**

```css
.banner-home {
  height: 400px;
  background-image: url('banner.jpg');
  background-size: cover;
}
```

**Exemplo (contato.css):**

```css
.form-contato {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```

---

### 6. `media-queries.css` 📱

**Função:** Define as **regras de responsividade** para diferentes tamanhos de tela.

**Inclui:**

* Ajustes para celular, tablet e desktop
* Mudança no layout (colunas viram linhas, por exemplo)

**Exemplo:**

```css
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .card {
    width: 100%;
  }
}
```

---

### 7. `main.css` 🧠 (arquivo principal)

**Função:** É o **arquivo central** que importa todos os outros. Ele organiza a ordem de carregamento dos estilos.

**Exemplo:**

```css
@import 'reset.css';
@import 'base.css';
@import 'layout.css';
@import 'components.css';
@import 'pages/home.css';
@import 'media-queries.css';
```

Esse arquivo será incluído no seu HTML:

```html
<link rel="stylesheet" href="css/main.css">
```

---

## ✅ Vantagens dessa Organização

| Vantagem             | Explicação                                                  |
| -------------------- | ----------------------------------------------------------- |
| 🔍 Fácil manutenção  | Você sabe exatamente onde está o estilo que precisa alterar |
| 📦 Reutilização      | Componentes podem ser usados em várias páginas              |
| 📄 Código mais limpo | Evita arquivos gigantescos e desorganizados                 |
| 📐 Escalabilidade    | Fica mais fácil trabalhar em equipe ou crescer o projeto    |


---
## reset.css

O arquivo **`reset.css`** serve para **“zerar” ou “normalizar”** os estilos padrões que cada navegador aplica aos elementos HTML. 
Isso ajuda a evitar diferenças visuais entre navegadores diferentes (Chrome, Firefox, Edge, Safari etc).

---

## O que geralmente vai no `reset.css`?

### 1. Remover margens e paddings padrões

Muitos navegadores aplicam margens e espaçamentos padrão em elementos como `<body>`, `<h1>`, `<p>`, `<ul>`, etc.

```css
* {
  margin: 0;
  padding: 0;
}
```

---

### 2. Definir o `box-sizing` para todos os elementos

O `box-sizing: border-box;` faz com que o padding e a borda sejam incluídos na largura e altura do elemento — isso facilita o controle de layouts.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

### 3. Remover estilos de listas (quando não forem usados)

```css
ul,
ol {
  list-style: none;
}
```

---

### 4. Resetar bordas, fontes e cores padrões de elementos básicos

```css
img,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  border: 0;
}

a {
  text-decoration: none;
  color: inherit; /*  faz o elemento herdar o valor da propriedade do seu elemento pai. */
}
```

---

### 5. Resetar botões, inputs e formulários

```css
button,
input,
select,
textarea {
  background: none;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
}
```

---

### 6. Resetar tabelas

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

---
