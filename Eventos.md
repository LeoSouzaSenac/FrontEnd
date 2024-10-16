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

---

## Conclusão

Nesta aula, aprendemos a:
- Usar o método `getElementById` para acessar elementos HTML.
- Manipular eventos como `click` com `addEventListener`.
- Aplicar métodos como `textContent` para modificar o conteúdo de elementos.

Pratique adicionando outros eventos e experimentando diferentes interações!

--- 

### Exercício para os Alunos

1. Adicione outro botão que mude a cor do parágrafo.
2. Crie um evento `mouseover` para o botão que mude o texto temporariamente quando o mouse passar por cima dele.

