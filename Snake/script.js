// Seleciona o canvas pelo ID e armazena na variável 'canvas'
const canvas = document.getElementById('gameCanvas');

// Obtém o contexto 2D do canvas, que permite desenhar nele
const ctx = canvas.getContext('2d');

// Define o tamanho de cada quadrado (para a cobra e a comida)
const box = 20;

// Inicializa a cobra como um array com um segmento na posição (100, 100)
let snake = [{ x: box * 5, y: box * 5 }];

// Define a direção inicial da cobra como 'RIGHT'
let direction = 'RIGHT';

// Gera a posição inicial da comida aleatoriamente dentro do canvas
let food = {
    x: Math.floor(Math.random() * 20) * box, // Coordenada X da comida
    y: Math.floor(Math.random() * 20) * box  // Coordenada Y da comida
};

let pontos = 0;

let texto = document.getElementById("pontos");

let dificuldade = 200;




// Adiciona um ouvinte para eventos de tecla que chama a função changeDirection
document.addEventListener('keydown', changeDirection);





// Função para mudar a direção da cobra com base na tecla pressionada
function changeDirection(event) {
    // Verifica se a tecla pressionada é a seta esquerda e se a direção não é 'RIGHT'
    if (event.keyCode === 37 && direction !== 'RIGHT') {direction = 'LEFT'};
    // Verifica se a tecla pressionada é a seta para cima e se a direção não é 'DOWN'
    if (event.keyCode === 38 && direction !== 'DOWN') {direction = 'UP'};
    // Verifica se a tecla pressionada é a seta direita e se a direção não é 'LEFT'
    if (event.keyCode === 39 && direction !== 'LEFT') {direction = 'RIGHT'};
    // Verifica se a tecla pressionada é a seta para baixo e se a direção não é 'UP'
    if (event.keyCode === 40 && direction !== 'UP') {direction = 'DOWN'};
}








// Função que desenha todos os elementos do jogo
function draw() {
    // Define a cor de fundo do canvas
    ctx.fillStyle = '#00afdb'; //estilo de fundo
    // Desenha um retângulo preenchido com a cor que pedimos
    /*
        param1 = a coordenada X do canto superior esquerdo do retângulo.

        param2 = a coordenada Y do canto superior esquerdo do retângulo.

        param3 = a largura do retângulo.

        param4 = a altura do retângulo.

    */
    ctx.fillRect(0, 0, canvas.width, canvas.height);










   // Loop para desenhar cada segmento da cobra
    for (let i = 0; i < snake.length; i++) {
    // Define a cor do segmento
    if (i === 0) {
        ctx.fillStyle = 'green'; // Cabeça
    } else {
        ctx.fillStyle = 'lightgreen'; // Resto do corpo
    }
    
    // Desenha o segmento da cobra na posição (x, y)
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    
    // Define a cor da borda do segmento
    ctx.strokeStyle = 'darkgreen'; //strokeStyle = estilo de borda
    
    // Desenha a borda do segmento
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);

    }


    

    // Define a cor da comida como vermelha
    ctx.fillStyle = 'red';
    // Desenha a comida na posição gerada aleatoriamente
    ctx.fillRect(food.x, food.y, box, box);


    // Define a cor da borda do segmento
    ctx.strokeStyle = 'white'; //strokeStyle = estilo de borda
    
    // Desenha a borda do segmento
    ctx.strokeRect(food.x, food.y, box, box);


    // Captura a posição atual da cabeça da cobra
    let snakeX = snake[0].x; //pega a posição horizontal da cabeça do snake
    let snakeY = snake[0].y; //pega a posição vertical da cabeça do snake



    // Atualiza a posição da cabeça da cobra com base na direção
if (direction === 'LEFT') {
    snakeX -= box; // Move para a esquerda
} else if (direction === 'UP') {
    snakeY -= box; // Move para cima
} else if (direction === 'RIGHT') {
    snakeX += box; // Move para a direita
} else if (direction === 'DOWN') {
    snakeY += box; // Move para baixo
} 


    // Verifica se a cabeça da cobra está na mesma posição que a comida
    if (snakeX === food.x && snakeY === food.y) {

        pontos ++;

        texto.textContent = "Pontuação: " + pontos;

        dificuldade -= 10;

        clearInterval(game);

        game = setInterval(draw, dificuldade);

        // Gera uma nova posição aleatória para a comida
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        // Se a cobra não comeu, remove o último segmento (cauda)
        snake.pop();
    }

    // Cria um novo objeto para a nova cabeça da cobra
    const newHead = { x: snakeX, y: snakeY };

    // Adiciona a nova cabeça da cobra ao início do array
    snake.unshift(newHead);


        // Verifica colisões: com as bordas do canvas ou com ela mesma
        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
            // Para o jogo se houver uma colisão e exibe um alerta de Game Over
            clearInterval(game);
            alert('Game Over!');
       }


}

 
// Função que verifica se a nova cabeça colidiu com algum segmento da cobra
function collision(head, array) {
    // Loop para verificar se a nova cabeça coincide com qualquer segmento da cobra
    for (let i = 1; i < array.length; i++) {
        // Se colidir, retorna true
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    // Se não colidir, retorna false
    return false;
}
    
// Inicia o jogo chamando a função draw a cada 100 milissegundos
let game = setInterval(draw, dificuldade);

 
