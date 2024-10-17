// Seleciona o parágrafo e o botão usando getElementById
const meuParagrafo = document.getElementById('texto'); //no documento html, pegue o elemento que tem o id 'texto'
const meuBotao = document.getElementById('meuBotao'); //no documento html, pegue o elemento que tem o id 'meuBotao'

// Define a função que altera o conteúdo do parágrafo
function alterarTexto() {
    //textContend altera o conteúdo de texto de algum elemento html
    meuParagrafo.textContent = "O texto foi alterado!"
    
}



// Adiciona um event listener ao botão para escutar o clique
meuBotao.addEventListener('click', alterarTexto);

/*
click: Ocorre quando o elemento é clicado.
dblclick: Ocorre quando o elemento é clicado duas vezes.
mousedown: Ocorre quando o botão do mouse é pressionado.
mouseup: Ocorre quando o botão do mouse é solto.
mouseover: Ocorre quando o cursor do mouse passa sobre o elemento.
mouseout: Ocorre quando o cursor do mouse sai de cima do elemento.
mousemove: Ocorre quando o mouse é movido dentro do elemento.
*/


//Exercicio 1: adicione outro botão que mude a cor do parágrafo. DICA: use meuParagrafo.style.color = 'red' para poder alterar a cor de um elemento

//Exercicio 2: adicione outro botão que muda a cor de fundo dele mesmo quando clicado duas vezes

//Exercicio 3: altere a função 'alterarTexto' para que, toda vez que clicar, o texto altera entre 'Clique Aqui' e 'O texto foi alterado!'. DICA: você vai ter que usar if e else para isso.


















