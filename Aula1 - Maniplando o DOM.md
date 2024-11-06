# Manipulando o DOM com JavaScript 🖥️✨

## O que é o DOM? 🤔

O **DOM (Document Object Model)** é como se fosse o "esqueleto" da nossa página HTML. Ele organiza todos os elementos (como textos, imagens, botões) em uma estrutura que o JavaScript consegue entender e modificar. Em outras palavras, com o DOM, o JavaScript consegue “conversar” com os elementos da página.

Imagine que o DOM é um mapa de todos os elementos de uma página. Com JavaScript, conseguimos ir até esses elementos, mudar textos, cores, tamanhos, adicionar ou remover partes da página... enfim, quase tudo!

---

## O Que é `document`? 📄

No JavaScript, o `document` é uma **representação da página HTML** atual. Ele é o ponto de partida para manipular o DOM e acessar elementos HTML da página. Sempre que queremos fazer algo com um elemento, começamos usando o `document`.

### Exemplo

```javascript
console.log(document); // Mostra toda a estrutura HTML da página no console
```

Com `document`, podemos **selecionar, criar, modificar e remover elementos** na página.

---

## O Que Podemos Fazer com o DOM? 🎨💡

Aqui estão as principais ações que podemos realizar ao manipular o DOM:

1. **Selecionar Elementos** – Encontrar e "pegar" um elemento específico da página.
2. **Modificar Conteúdo** – Alterar o texto ou HTML de um elemento.
3. **Alterar Estilos** – Mudar a cor, fonte, tamanho e outros estilos de um elemento.
4. **Adicionar ou Remover Elementos** – Criar elementos novos ou remover os existentes.
5. **Atribuir Atributos** – Adicionar ou modificar atributos como `src`, `href`, `class`, `id`, etc.
6. **Eventos** – Fazer com que algo aconteça ao interagir com a página, como ao clicar em um botão ou passar o mouse.

---

## Selecionando Elementos com JavaScript 🕵️‍♂️

Para manipular qualquer elemento HTML, primeiro precisamos "encontrá-lo". Existem algumas maneiras de fazer isso:

### 1. `getElementById()`

Se o elemento tiver um `id`, use `getElementById`.

```javascript
const titulo = document.getElementById('titulo');
```

### 2. `getElementsByClassName()`

Para selecionar elementos com uma `class`, usamos `getElementsByClassName`, que retorna uma lista de todos os elementos com essa classe.

```javascript
const descricoes = document.getElementsByClassName('descricao');
```

### 3. `querySelector()` e `querySelectorAll()`

Esses métodos funcionam com seletores CSS. Use `querySelector` para pegar o **primeiro** elemento que encontra e `querySelectorAll` para pegar **todos**.

```javascript
const titulo = document.querySelector('#titulo');
const descricoes = document.querySelectorAll('.descricao');
```

---

## Manipulando Conteúdo e Estilo ✏️🎨

Depois de selecionar um elemento, podemos alterar seu conteúdo e estilo:

### Alterando Conteúdo

```javascript
const titulo = document.getElementById('titulo');
titulo.textContent = 'Olá, JavaScript!';
```

### Alterando Estilos

```javascript
titulo.style.color = 'blue';
titulo.style.fontSize = '2em';
```

---

## Criando e Removendo Elementos 🆕❌

### Criando um Novo Elemento

```javascript
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo!';
document.body.appendChild(novoParagrafo);
```

### Removendo um Elemento

```javascript
const paragrafo = document.querySelector('.descricao');
paragrafo.remove();
```

---

## Eventos: Fazendo a Página Interativa! 🎉

**Eventos** são ações que ocorrem na página, como clicar em um botão, passar o mouse sobre um elemento, ou pressionar uma tecla. Com JavaScript, podemos "escutar" esses eventos e fazer algo em resposta a eles.

### Principais Tipos de Eventos

- **`click`** – Quando um elemento é clicado.
- **`mouseover`** – Quando o mouse passa sobre um elemento.
- **`mouseout`** – Quando o mouse sai de um elemento.
- **`keydown`** – Quando uma tecla é pressionada.
- **`submit`** – Quando um formulário é enviado.

### Como Usar Eventos com `addEventListener`

Usamos `addEventListener` para "ouvir" eventos em um elemento. Aqui está um exemplo de cada tipo de evento:

1. **Clique (click)**

   ```javascript
   const botao = document.getElementById('botao-mudar');
   botao.addEventListener('click', () => {
     alert('Você clicou no botão!');
   });
   ```

2. **Mouse passando sobre o elemento (mouseover)**

   ```javascript
   const titulo = document.getElementById('titulo');
   titulo.addEventListener('mouseover', () => {
     titulo.style.color = 'red';
   });
   ```

3. **Mouse saindo do elemento (mouseout)**

   ```javascript
   titulo.addEventListener('mouseout', () => {
     titulo.style.color = 'black';
   });
   ```

4. **Pressionar uma tecla (keydown)**

   ```javascript
   document.addEventListener('keydown', (event) => {
     console.log('Você apertou a tecla: ' + event.key);
   });
   ```

5. **Envio de um formulário (submit)**

   ```html
   <form id="formulario">
     <input type="text" name="nome" placeholder="Digite seu nome">
     <button type="submit">Enviar</button>
   </form>
   ```

   ```javascript
   const formulario = document.getElementById('formulario');
   formulario.addEventListener('submit', (event) => {
     event.preventDefault(); // Impede o envio do formulário para que possamos manipulá-lo
     alert('Formulário enviado!');
   });
   ```

---

## Exemplo Completo com Eventos 🚀

Vamos fazer uma página onde podemos:
1. Mudar o texto do título ao clicar no botão.
2. Adicionar um parágrafo novo.
3. Remover o título.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulação de DOM com Eventos</title>
</head>
<body>
  <h1 id="titulo">Bem-vindo ao DOM!</h1>
  <p class="descricao">Vamos aprender a manipular eventos no DOM.</p>
  <button id="botao-mudar">Mudar Texto</button>
  <button id="botao-adicionar">Adicionar Parágrafo</button>
  <button id="botao-remover">Remover Título</button>

  <script>
    // Selecionando os elementos
    const titulo = document.getElementById('titulo');
    const botaoMudar = document.getElementById('botao-mudar');
    const botaoAdicionar = document.getElementById('botao-adicionar');
    const botaoRemover = document.getElementById('botao-remover');

    // Mudando o texto do título quando o botão é clicado
    botaoMudar.addEventListener('click', () => {
      titulo.textContent = 'Título alterado com JavaScript!';
    });

    // Adicionando um novo parágrafo ao clicar no botão
    botaoAdicionar.addEventListener('click', () => {
      const novoParagrafo = document.createElement('p');
      novoParagrafo.textContent = 'Este é um novo parágrafo criado agora!';
      document.body.appendChild(novoParagrafo);
    });

    // Removendo o título ao clicar no botão
    botaoRemover.addEventListener('click', () => {
      titulo.remove();
    });
  </script>
</body>
</html>
```

Neste exemplo:
1. Mudamos o texto do título ao clicar no botão "Mudar Texto".
2. Adicionamos um novo parágrafo ao clicar em "Adicionar Parágrafo".
3. Removemos o título ao clicar em "Remover Título".

---

## Experimente! 🥳

Agora que você conhece o básico, experimente esses exemplos e crie seus próprios eventos para manipular o DOM! Quanto mais praticar, mais fácil será entender e criar páginas interativas.
