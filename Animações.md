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

## 📌 Dicas Finais

* Use `transition` para **mudanças simples** (hover, click, focus).
* Use `@keyframes` para **animações complexas ou contínuas**.
* Combine `transform`, `opacity` e `ease` para suavidade.
* Use `animation-fill-mode: forwards` para manter o último estado.
* Teste com ferramentas como [https://codepen.io](https://codepen.io).

---


