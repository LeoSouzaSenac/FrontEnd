### Passo 1: Estrutura HTML

Vamos começar criando o arquivo `index.html`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Cobra</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        canvas {
            border: 1px solid #000; /* Borda do canvas */
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

#### Explicação do HTML:
- **`<canvas>`:** Esta tag cria uma área onde podemos desenhar usando JavaScript. Definimos uma largura e altura de 400 pixels.
- **Estilos CSS:** Usamos um pouco de CSS para centralizar o canvas na tela e adicionar uma borda.

### Passo 2: Configuração do Jogo em JavaScript

Agora, vamos criar o arquivo `script.js` e adicionar o código inicial:

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
```

#### Explicação:
- **`const canvas = document.getElementById('gameCanvas');`**: Aqui estamos selecionando o canvas que criamos no HTML e armazenando em uma variável chamada `canvas`.
- **`const ctx = canvas.getContext('2d');`**: O contexto 2D nos permite desenhar no canvas. A variável `ctx` será usada para desenhar formas, texto e imagens.

### Passo 3: Variáveis do Jogo

Agora, precisamos de algumas variáveis para armazenar a cobra, a direção e a comida.

```javascript
const box = 20; // Tamanho de cada quadrado
let snake = [{ x: box * 5, y: box * 5 }]; // Posição inicial da cobra
let direction = 'RIGHT'; // Direção inicial
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
```

#### Explicação:
- **`const box = 20;`**: Esta variável define o tamanho de cada quadrado que representa a cobra e a comida. Assim, cada segmento da cobra terá 20x20 pixels.
- **`let snake = [{ x: box * 5, y: box * 5 }];`**: Aqui, estamos inicializando a cobra como um array com um único segmento na posição (100, 100) (5 * 20).
- **`let direction = 'RIGHT';`**: Define a direção inicial da cobra como "direita".
- **`let food = {...};`**: A comida é posicionada aleatoriamente dentro do canvas. Usamos `Math.random()` para gerar um número entre 0 e 19 (multiplicado por 20 para se ajustar à grade).

### Passo 4: Capturando Teclado

Vamos adicionar um ouvinte de eventos para mudar a direção da cobra.

```javascript
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}
```

#### Explicação:
- **`document.addEventListener('keydown', changeDirection);`**: Aqui estamos adicionando um ouvinte para eventos de teclado. Quando uma tecla é pressionada, a função `changeDirection` é chamada.
- **`changeDirection(event)`**: Esta função muda a direção da cobra dependendo da tecla pressionada (setas do teclado). Asseguramos que a cobra não possa voltar imediatamente sobre si mesma.

### Passo 5: Desenhando o Jogo

Vamos implementar a função que desenha todos os elementos do jogo.

```javascript
function draw() {
    ctx.fillStyle = '#f0f0f0'; // Cor de fundo
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'lightgreen'; // A cabeça é verde, o resto é verde claro
        ctx.fillRect(snake[i].x, snake[i].y, box, box); // Desenha cada segmento
        ctx.strokeStyle = 'darkgreen'; // Borda dos segmentos
        ctx.strokeRect(snake[i].x, snake[i].y, box, box); // Desenha a borda
    }

    ctx.fillStyle = 'red'; // Cor da comida
    ctx.fillRect(food.x, food.y, box, box); // Desenha a comida
```

#### Explicação:
- **`ctx.fillStyle = '#f0f0f0';`**: Define a cor de fundo.
- **`ctx.fillRect(...)`**: Limpa a tela desenhando um retângulo com a cor de fundo.
- **Loop for**: Percorre cada segmento da cobra e os desenha. A cabeça da cobra é desenhada em verde e o restante em verde claro.
- **`ctx.fillStyle = 'red';`**: Define a cor da comida e a desenha.

### Passo 6: Movendo a Cobra

Agora, precisamos mover a cobra e verificar se ela comeu a comida.

```javascript
let snakeX = snake[0].x;
let snakeY = snake[0].y;

if (direction === 'LEFT') snakeX -= box;
if (direction === 'UP') snakeY -= box;
if (direction === 'RIGHT') snakeX += box;
if (direction === 'DOWN') snakeY += box;

if (snakeX === food.x && snakeY === food.y) {
    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
} else {
    snake.pop(); // Remove a cauda
}

const newHead = { x: snakeX, y: snakeY };
```

#### Explicação:
- **`let snakeX = snake[0].x;` e `let snakeY = snake[0].y;`**: Captura a posição atual da cabeça da cobra.
- **Movimentação**: Dependendo da direção, ajustamos a posição da cabeça da cobra.
- **Comer a comida**: Se a cabeça da cobra estiver na mesma posição que a comida, geramos uma nova comida em um local aleatório. Caso contrário, removemos o último segmento da cobra (cauda).

### Passo 7: Verificando Colisões

Precisamos verificar se a cobra colidiu com a parede ou com ela mesma.

```javascript
if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
    clearInterval(game);
    alert('Game Over!');
}
snake.unshift(newHead); // Adiciona nova cabeça
```

#### Explicação:
- **Colisões com paredes**: Verificamos se a cabeça da cobra ultrapassou os limites do canvas.
- **Colisões com ela mesma**: Chamamos a função `collision` para verificar se a nova cabeça está colidindo com algum segmento da cobra.
- **`clearInterval(game);`**: Para o jogo se houver uma colisão, e exibimos um alerta de "Game Over".
- **`snake.unshift(newHead);`**: Adiciona a nova cabeça da cobra no início do array.

### Passo 8: Função de Colisão

Agora, vamos implementar a função `collision`.

```javascript
function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true; // Colidiu com ela mesma
        }
    }
    return false; // Não colidiu
}
```

#### Explicação:
- Esta função percorre o array da cobra (exceto a cabeça) e verifica se a nova cabeça está na mesma posição de qualquer segmento. Se sim, retorna `true`.

### Passo 9: Iniciando o Jogo

Por fim, chamamos a função `draw` em intervalos regulares para criar a animação do jogo.

```javascript
const game = setInterval(draw, 100);
```

#### Explicação:
- **`setInterval(draw, 100);`**: Chama a função `draw` a cada 100 milissegundos (0,1 segundo), o que faz o jogo ser atualizado continuamente.

### Código Completo

Aqui está o código completo para que seus alunos vejam como

 tudo se junta:

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [{ x: box * 5, y: box * 5 }];
let direction = 'RIGHT';
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

function draw() {
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    const newHead = { x: snakeX, y: snakeY };

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over!');
    }

    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

const game = setInterval(draw, 100);
