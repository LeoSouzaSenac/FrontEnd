# Aula: Método `getElementById` e Eventos no JavaScript

## Objetivo

Ensinar o uso do método `getElementById` para acessar elementos HTML e a manipulação de eventos em JavaScript, aplicando-os a um botão.

---

## O que é o método `getElementById`?

O método `getElementById` é utilizado para selecionar um elemento HTML pelo seu ID, permitindo que você manipule ou recupere informações desse elemento.

**Sintaxe:**

```javascript
document.getElementById('id-do-elemento');
```

Aqui, `id-do-elemento` é o valor do atributo `id` do elemento HTML que você quer acessar.

---

## O que são eventos?

Eventos são ações ou ocorrências que acontecem na página web, como o clique de um botão, o carregamento da página, ou o envio de um formulário. Em JavaScript, podemos ouvir e reagir a esses eventos usando **event listeners**.

---

## Exemplo Prático

Vamos criar um botão que, ao ser clicado, muda o texto dentro de um parágrafo.

### 1. HTML

Crie o seguinte código HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Eventos e getElementById</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Exemplo de Botão com Evento</h1>

    <p id="texto">Clique no botão para mudar este texto.</p>

    <button id="meuBotao">Clique Aqui</button>

    <script src="script.js"></script>
</body>
</html>
```

Neste código, temos um parágrafo com `id="texto"` e um botão com `id="meuBotao"`. Vamos usar o `getElementById` para selecionar esses elementos no JavaScript.

---

### 2. CSS

Agora, adicione um arquivo `styles.css` para estilizar a página:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

h1 {
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

#texto {
    font-size: 18px;
    margin-bottom: 20px;
}
```

Aqui, o botão é estilizado com uma cor azul, e o texto muda de cor ao passar o mouse sobre ele.

---

### 3. JavaScript

Agora, crie o arquivo `script.js` com o seguinte conteúdo:

```javascript
// Seleciona o parágrafo e o botão usando getElementById
const meuParagrafo = document.getElementById('texto');
const meuBotao = document.getElementById('meuBotao');

// Adiciona um event listener ao botão para escutar o clique
meuBotao.addEventListener('click', function() {
    // Muda o conteúdo do parágrafo
    meuParagrafo.textContent = 'O texto foi alterado!';
});
```

### Explicação:

1. **`getElementById`**: Usamos esse método para selecionar o parágrafo (`texto`) e o botão (`meuBotao`) com base nos seus respectivos IDs.
2. **`addEventListener`**: Este método adiciona um ouvinte de evento ao botão que escuta cliques. Quando o botão é clicado, a função altera o conteúdo do parágrafo usando `textContent`.

---

## Métodos Comuns para Eventos

Além de `click`, você pode usar outros eventos comuns em botões e outros elementos:

1. **`mouseover`**: Ocorre quando o mouse passa sobre o elemento.
2. **`mouseout`**: Ocorre quando o mouse sai de cima do elemento.
3. **`dblclick`**: Ocorre quando o elemento é clicado duas vezes rapidamente.
4. **`keydown`**: Ocorre quando uma tecla é pressionada no teclado.

**Exemplo de `mouseover`**:

```javascript
meuBotao.addEventListener('mouseover', function() {
    meuParagrafo.textContent = 'Você passou o mouse sobre o botão!';
});
```

### Outros Métodos de Manipulação

1. **`innerHTML`**: Altera o conteúdo HTML dentro do elemento.
2. **`style`**: Modifica estilos CSS diretamente no JavaScript.
3. **`classList`**: Adiciona ou remove classes de um elemento.

Aqui está uma explicação completa sobre os diferentes tipos de eventos em JavaScript, que podem ser utilizados para interagir com elementos de uma página web. Estes eventos ajudam os alunos a criar interações dinâmicas e reativas em suas páginas HTML.

---

# Tipos de Eventos no JavaScript

## Objetivo

Ensinar os principais tipos de eventos em JavaScript, como usá-los, e como eles podem ser aplicados a diferentes elementos HTML.

---

## Principais Categorias de Eventos

1. **Eventos de Mouse**
2. **Eventos de Teclado**
3. **Eventos de Formulário**
4. **Eventos de Documento e Janela**
5. **Eventos de Toque (Mobile)**

---

## 1. Eventos de Mouse

Esses eventos ocorrem quando o usuário interage com o mouse, seja clicando, movendo, ou passando sobre os elementos.

### Principais Eventos de Mouse:

- **`click`**: Ocorre quando o elemento é clicado.
- **`dblclick`**: Ocorre quando o elemento é clicado duas vezes.
- **`mousedown`**: Ocorre quando o botão do mouse é pressionado.
- **`mouseup`**: Ocorre quando o botão do mouse é solto.
- **`mouseover`**: Ocorre quando o cursor do mouse passa sobre o elemento.
- **`mouseout`**: Ocorre quando o cursor do mouse sai de cima do elemento.
- **`mousemove`**: Ocorre quando o mouse é movido dentro do elemento.

### Exemplo:

```javascript
const botao = document.getElementById('meuBotao');

// Evento de clique
botao.addEventListener('click', function() {
    alert('Botão foi clicado!');
});

// Evento de mouseover
botao.addEventListener('mouseover', function() {
    botao.style.backgroundColor = 'lightblue';
});

// Evento de mouseout
botao.addEventListener('mouseout', function() {
    botao.style.backgroundColor = '';
});
```

---

## 2. Eventos de Teclado

Esses eventos ocorrem quando o usuário interage com o teclado, seja pressionando ou soltando teclas.

### Principais Eventos de Teclado:

- **`keydown`**: Ocorre quando uma tecla é pressionada.
- **`keyup`**: Ocorre quando uma tecla é solta.
- **`keypress`**: Ocorre quando uma tecla é pressionada e mantida (agora menos utilizado, pois o `keydown` é mais abrangente).

### Exemplo:

```javascript
document.addEventListener('keydown', function(event) {
    console.log('Tecla pressionada: ' + event.key);
});

document.addEventListener('keyup', function(event) {
    console.log('Tecla solta: ' + event.key);
});
```

---

## 3. Eventos de Formulário

Esses eventos são disparados quando interagimos com elementos de formulário, como caixas de texto, campos de senha, e botões de envio.

### Principais Eventos de Formulário:

- **`submit`**: Ocorre quando um formulário é enviado.
- **`focus`**: Ocorre quando um elemento (como um campo de entrada) ganha foco.
- **`blur`**: Ocorre quando o elemento perde o foco.
- **`change`**: Ocorre quando o valor de um campo de formulário é alterado (aplicado a `<input>`, `<select>`, etc.).
- **`input`**: Ocorre sempre que o valor de um `<input>` muda (inclui cada tecla digitada).

### Exemplo:

```javascript
const form = document.getElementById('meuFormulario');
const campoTexto = document.getElementById('meuInput');

// Evento de envio de formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert('Formulário enviado!');
});

// Evento de foco no campo de texto
campoTexto.addEventListener('focus', function() {
    campoTexto.style.backgroundColor = 'yellow';
});

// Evento de mudança no campo de texto
campoTexto.addEventListener('change', function() {
    console.log('Valor alterado para: ' + campoTexto.value);
});
```

---

## 4. Eventos de Documento e Janela

Esses eventos estão relacionados ao documento da página (HTML) ou à janela do navegador.

### Principais Eventos de Documento e Janela:

- **`DOMContentLoaded`**: Ocorre quando o documento HTML foi completamente carregado e processado.
- **`load`**: Ocorre quando todos os recursos da página (imagens, scripts, etc.) foram completamente carregados.
- **`resize`**: Ocorre quando a janela do navegador é redimensionada.
- **`scroll`**: Ocorre quando a página é rolada (scrolling).

### Exemplo:

```javascript
// Evento de carregamento da página
window.addEventListener('load', function() {
    console.log('Todos os recursos da página foram carregados');
});

// Evento de redimensionamento da janela
window.addEventListener('resize', function() {
    console.log('Janela redimensionada para: ' + window.innerWidth + ' x ' + window.innerHeight);
});

// Evento de rolagem da página
window.addEventListener('scroll', function() {
    console.log('A página foi rolada. Posição de scroll: ' + window.scrollY);
});
```

---

## 5. Eventos de Toque (Mobile)

Para dispositivos móveis, podemos usar eventos de toque para capturar interações do usuário com a tela.

### Principais Eventos de Toque:

- **`touchstart`**: Ocorre quando um dedo toca a tela.
- **`touchend`**: Ocorre quando o dedo é removido da tela.
- **`touchmove`**: Ocorre quando o dedo é movido pela tela.
- **`touchcancel`**: Ocorre quando o sistema cancela o toque (exemplo: uma ligação interrompe o toque).

### Exemplo:

```javascript
const areaDeToque = document.getElementById('areaDeToque');

// Evento de toque na área
areaDeToque.addEventListener('touchstart', function(event) {
    console.log('Toque detectado!');
});

// Evento de movimento de toque
areaDeToque.addEventListener('touchmove', function(event) {
    console.log('Movendo o toque...');
});
```

---

## Conclusão

Nesta aula, aprendemos sobre os principais tipos de eventos em JavaScript, incluindo:
- Eventos de mouse (`click`, `mouseover`, etc.).
- Eventos de teclado (`keydown`, `keyup`).
- Eventos de formulário (`submit`, `change`).
- Eventos de documento e janela (`DOMContentLoaded`, `resize`).
- Eventos de toque para dispositivos móveis (`touchstart`, `touchmove`).

### Exercício para os Alunos:

1. Adicione um evento `keydown` que detecte quando a tecla "Enter" for pressionada e mostre uma mensagem na tela.
2. Crie uma caixa de texto que altere seu conteúdo quando o usuário focar ou desfocar do campo (`focus` e `blur`).

---

Esse arquivo `.md` pode ser usado para ensinar sobre a variedade de eventos que o JavaScript oferece e como esses eventos podem ser manipulados para criar interações dinâmicas e responsivas na web.

### Exercício para os Alunos

1. Adicione outro botão que mude a cor do parágrafo.
2. Crie um evento `mouseover` para o botão que mude o texto temporariamente quando o mouse passar por cima dele.

