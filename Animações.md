# 🎬 Guia de Animações em CSS

As animações em CSS deixam sua interface mais interativa e moderna, sem a necessidade de JavaScript. Existem dois métodos principais para animar elementos:

---

## ✅ 1. Animações com `transition`

### 📌 O que é?
`transition` permite criar animações **suaves** entre dois estados (por exemplo: normal e hover).

### 🧪 Exemplo:
```html
<style>
.botao {
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.5s ease;
}

.botao:hover {
  background-color: #cc5200;
}
</style>

<button class="botao">Passe o mouse</button>
````

---

## ✅ 2. Animações com `@keyframes`

### 📌 O que é?

`@keyframes` define as **etapas** de uma animação mais complexa. Pode ser contínua, controlada por classes, ou iniciar automaticamente.

---

## 🎨 Animações Mais Utilizadas com `@keyframes`

---

### ✅ Fade In (aparecer suavemente)

```html
<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease forwards;
}
</style>

<div class="fade-in">Olá, eu apareci suavemente!</div>
```

---

### ✅ Fade Out (sumir suavemente)

```html
<style>
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-out {
  animation: fadeOut 1s ease forwards;
}
</style>

<div class="fade-out">Estou sumindo...</div>
```

---

### ✅ Slide In (deslizar para dentro)

```html
<style>
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.slide-in {
  animation: slideIn 1s ease-out forwards;
}
</style>

<div class="slide-in">Deslizei da esquerda!</div>
```

---

### ✅ Slide Out (deslizar para fora)

```html
<style>
@keyframes slideOut {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}

.slide-out {
  animation: slideOut 1s ease-in forwards;
}
</style>

<div class="slide-out">Estou saindo para a direita...</div>
```

---

### ✅ Zoom In (aumentar ao aparecer)

```html
<style>
@keyframes zoomIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.zoom-in {
  animation: zoomIn 0.6s ease-out forwards;
}
</style>

<div class="zoom-in">Apareci com zoom!</div>
```

---

### ✅ Zoom Out (diminuir e sumir)

```html
<style>
@keyframes zoomOut {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.5); opacity: 0; }
}

.zoom-out {
  animation: zoomOut 0.6s ease-in forwards;
}
</style>

<div class="zoom-out">Estou sumindo com zoom!</div>
```

---

### ✅ Pulsar (efeito de batida/sinalização)

```html
<style>
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 1s infinite;
}
</style>

<button class="pulse">Clique Aqui</button>
```

---

### ✅ Girar (animação contínua)

```html
<style>
@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.girar {
  animation: girar 2s linear infinite;
}
</style>

<div class="girar">🔄</div>
```

---

### ✅ Digitando (efeito de digitação com cursor)

```html
<style>
.digitando {
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  animation: digita 3s steps(22), pisca 0.5s step-end infinite alternate;
}

@keyframes digita {
  from { width: 0; }
  to { width: 22ch; }
}

@keyframes pisca {
  from { border-color: transparent; }
  to { border-color: black; }
}
</style>

<p class="digitando">Estou sendo digitado no CSS!</p>
```

---

### ✅ Loading Circular

```html
<style>
.loader {
  border: 6px solid #eee;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 30px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<div class="loader"></div>
```

---

## ✅ **Resumo rápido:**

| Situação                                                     | Use `transition` quando... | Use `@keyframes` quando... |
| ------------------------------------------------------------ | -------------------------- | -------------------------- |
| ✅ Animação simples entre dois estados (ex: hover)            | ✔️                         | ❌                          |
| ✅ Você quer uma animação contínua (ex: loading)              | ❌                          | ✔️                         |
| ✅ Precisa de múltiplas etapas (ex: ir e voltar, ou "bounce") | ❌                          | ✔️                         |
| ✅ Quer animar com eventos simples (hover, focus, etc.)       | ✔️                         | ❌                          |
| ✅ Animação deve rodar sozinha ou infinitamente               | ❌                          | ✔️                         |

---

## 🧩 **Diferenças com exemplos**

### 📌 `transition`: muda de um estado para outro

Funciona apenas quando um **estado muda** (como `hover`, `focus`, `click`, `classList.toggle()` no JS...).

```css
.caixa {
  background-color: blue;
  transition: background-color 0.5s ease;
}
.caixa:hover {
  background-color: red;
}
```

* **✅ Simples e leve**
* **❌ Só funciona quando algo muda**

---

### 📌 `@keyframes`: define **etapas personalizadas** da animação

Útil para fazer animações mais elaboradas, com controle total do início, meio e fim.

```css
@keyframes mover {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.caixa {
  animation: mover 2s ease-in-out infinite;
}
```

* **✅ Pode rodar automaticamente**
* **✅ Aceita várias etapas**
* **✅ Funciona até sem interação do usuário**
* **✅ Ideal para loops e efeitos contínuos**
* **❌ Mais verboso que `transition`**

---

## 🧠 Quando escolher cada um?

| Desejo fazer...                     | Melhor escolha                               |
| ----------------------------------- | -------------------------------------------- |
| Animação ao passar o mouse          | `transition`                                 |
| Efeito que se repete infinitamente  | `@keyframes`                                 |
| Simulação de digitação              | `@keyframes`                                 |
| Botão que muda de cor ao clicar     | `transition`                                 |
| Círculo girando (loading)           | `@keyframes`                                 |
| Movimento com "vai e volta"         | `@keyframes`                                 |
| Sumir/aparecer suavemente ao clicar | `transition` (ou `@keyframes` com `opacity`) |

---

## 📌 Dicas Finais

* Use `transition` para **mudanças simples** (hover, click, focus).
* Use `@keyframes` para **animações complexas ou contínuas**.
* Combine `transform`, `opacity` e `ease` para suavidade.
* Use `animation-fill-mode: forwards` para manter o último estado.
* Teste com ferramentas como [https://codepen.io](https://codepen.io).

---

# 📌 Como Usar `IntersectionObserver` para Animar Elementos Quando Aparecem na Tela

Neste guia, você aprenderá como usar o `IntersectionObserver` para disparar uma animação CSS **somente quando um elemento entra no campo de visão do usuário** (viewport).

---

## ✅ O que é o `IntersectionObserver`?

É uma API do JavaScript que permite **observar quando um elemento entra ou sai da área visível da página**, sem precisar usar eventos de scroll manuais.

---

## 📦 Exemplo Prático: Animação Fade-In

### 1. 🔧 HTML

```html
<div class="box">Conteúdo que aparecerá com animação</div>
````

---

### 2. 🎨 CSS

```css
/* Estilo base: começa invisível */
.box {
  opacity: 0;
}

/* Quando a animação for ativada */
.box.visible {
  animation: fade-in 1s ease-out forwards;
}

/* Definindo a animação */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### 3. 🧠 JavaScript com `IntersectionObserver`

```javascript
// Seleciona o elemento a ser observado
const box = document.querySelector('.box');

// Cria o observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe que inicia a animação
      entry.target.classList.add('visible');
      // Para observar apenas uma vez:
      observer.unobserve(entry.target);
    }
  });
});

// Inicia a observação
observer.observe(box);
```

---

## ✅ Resultado

* O elemento `.box` começa invisível.
* Quando o usuário rolar a página e ele **entrar na área visível**, a classe `visible` é adicionada.
* A classe ativa a animação `fade-in`.
* O `unobserve()` impede que a animação se repita.

---

## 🧪 Dica Extra: Observando Vários Elementos

Se quiser aplicar o mesmo comportamento em **vários elementos**, use `querySelectorAll`:

```javascript
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  observer.observe(box);
});
```

---

## 📌 Quando usar isso?

* Para animações suaves ao rolar a página.
* Para otimizar desempenho (não anima o que o usuário não vê).
* Para criar efeitos de entrada em seções, cards, imagens etc.

---

## 🛠️ Requisitos

* Funciona em todos os navegadores modernos.
* Não precisa de biblioteca externa.
* Muito leve e eficiente.

---

Com isso, suas animações só serão ativadas **quando o usuário realmente ver os elementos na tela**, deixando seu site mais profissional e fluido. 🚀

---

# ✨ AOS (Animate On Scroll)

## 📌 O que é o AOS?

AOS (Animate On Scroll) é uma biblioteca leve de JavaScript que permite adicionar **animações em elementos HTML quando eles entram na tela** ao rolar a página.

Ela é ideal para deixar seu site mais dinâmico, responsivo e visualmente agradável, sem a necessidade de escrever JavaScript para detectar o scroll.

---

## ✅ Principais vantagens

- Sem escrever JS para animações simples
- Fácil de integrar com HTML e CSS
- Diversos efeitos prontos como fade, slide, zoom, flip etc.
- Personalizável (tempo, delay, repetir ou não)

---

## 📦 Como Usar o AOS (Passo a Passo)

### 1. Adicione os arquivos da biblioteca no seu HTML

No `<head>`, adicione o **CSS**:

```html
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
````

Antes de fechar o `</body>`, adicione o **JavaScript**:

```html
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init(); // Inicializa a biblioteca
</script>
```

---

### 2. Adicione o atributo `data-aos` nos elementos HTML

Use o atributo `data-aos` para definir o tipo de animação desejada:

```html
<div data-aos="fade-up">
  Este conteúdo aparece com efeito de fade para cima!
</div>
```

---

### 3. Personalize com CSS (opcional)

O AOS não altera o estilo do elemento, apenas aplica a animação:

```css
div {
  padding: 20px;
  background: lightblue;
  margin: 50px 0;
  border-radius: 10px;
}
```

---

## ✨ Tipos de animações disponíveis

Você pode usar vários valores no atributo `data-aos`:

| Tipo de animação | Exemplo de uso           |
| ---------------- | ------------------------ |
| Fade             | `data-aos="fade"`        |
| Fade Up          | `data-aos="fade-up"`     |
| Fade Down        | `data-aos="fade-down"`   |
| Slide Left       | `data-aos="slide-left"`  |
| Slide Right      | `data-aos="slide-right"` |
| Zoom In          | `data-aos="zoom-in"`     |
| Flip Left        | `data-aos="flip-left"`   |

---

## ⚙️ Personalização com atributos extras

Você pode controlar o comportamento da animação:

```html
<div 
  data-aos="fade-up"
  data-aos-duration="1000"     <!-- duração em ms -->
  data-aos-delay="300"         <!-- atraso para começar -->
  data-aos-once="true"         <!-- anima só 1 vez -->
>
  Elemento com animação personalizada
</div>
```

---

## 🧪 Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo AOS</title>
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  <style>
    .box {
      background: coral;
      padding: 40px;
      margin: 100px 0;
      color: white;
      text-align: center;
      font-size: 1.5em;
      border-radius: 10px;
    }
  </style>
</head>
<body>

  <div class="box" data-aos="fade-up">Box 1</div>
  <div class="box" data-aos="zoom-in">Box 2</div>
  <div class="box" data-aos="flip-left" data-aos-delay="500">Box 3</div>

  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>
```

---

## 🧠 Dica final

Use o AOS quando quiser **animar elementos conforme o usuário rola a página**, sem precisar escrever lógica de scroll manual com JavaScript.

---

## 🔗 Documentação oficial

Site do AOS: [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)




