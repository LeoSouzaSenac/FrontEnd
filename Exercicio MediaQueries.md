## 🎯 **Exercício Prático: Portfólio Responsivo com Flexbox e Media Queries**

### 🧩 Objetivo:

Criar uma página de **portfólio para um(a) designer** que se adapta a diferentes tamanhos de tela utilizando **Flexbox** para estruturar o layout e **Media Queries** para torná-lo responsivo.

---

### 📐 Estrutura da Página:

Sua página deve conter as seguintes seções **usando tags semânticas**:

1. **Cabeçalho (`<header>`)**

   * Nome ou logotipo à esquerda
   * Menu de navegação à direita com 3 links: **Sobre**, **Projetos**, **Contato**

2. **Seção de Apresentação (`<section class="hero">`)**

   * Foto do(a) designer
   * Texto de apresentação ao lado

3. **Seção de Projetos (`<section class="projetos">`)**

   * 3 cards lado a lado
   * Cada card deve conter: imagem, título e botão “Ver mais”

4. **Rodapé (`<footer>`)**

   * Redes sociais exibidas em linha

---

### 🧠 Regras do Exercício:

Implemente os seguintes comportamentos com **Flexbox** e **Media Queries**:

#### 📱 Telas pequenas (até 768px):

* Menu no header deve virar vertical (links empilhados)
* Seção de apresentação deve ficar em coluna (imagem acima do texto)
* Cards dos projetos devem ser exibidos um abaixo do outro

#### 💻 Telas médias (769px até 1024px):

* Menu horizontal
* Apresentação em linha, centralizada
* Cards dos projetos em duas colunas

#### 🖥️ Telas grandes (acima de 1024px):

* Layout principal em linha
* Cards dos projetos em três colunas

---

### ✅ Requisitos Obrigatórios:

> **Estes itens são obrigatórios e fazem parte da avaliação do exercício.**

✅ Uso de **CSS externo** (arquivo separado chamado `style.css`)
✅ Importar e usar **uma fonte do Google Fonts** no projeto
✅ Aplicar um **favicon** na aba do navegador
✅ Utilizar **tags semânticas HTML5**, incluindo obrigatoriamente:
    ✔️ `<header>`
    ✔️ `<main>`
    ✔️ `<footer>`
✅ Aplicar **uso correto de cores** para contraste e legibilidade
✅ Usar Flexbox para layout: `display: flex`, `flex-direction`, `gap`, `justify-content`, `align-items`, etc.
✅ Criar **Media Queries** para diferentes tamanhos de tela conforme descrito

---

### 📁 Arquivos esperados:

* `index.html`
* `style.css`
* Imagens
* Favicon (pode ser baixado de [favicon.io](https://favicon.io/) ou outro site gratuito)

---

### 💡 Dicas para os alunos:

* Use `flex-wrap: wrap` para permitir quebra de linha entre os elementos
* Use `gap` e `padding` para dar espaçamento e organização visual
* Garanta contraste adequado entre fundo e texto
* Use o [Google Fonts](https://fonts.google.com/) e adicione a importação no `<head>`
