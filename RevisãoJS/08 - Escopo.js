// 09-escopo.js
// O escopo refere-se à visibilidade das variáveis dentro de diferentes partes do código.

// Escopo global:
let cor = "azul"; // Variável global, acessível em qualquer parte do código

function exibirCor() {
    console.log(cor); // Acessa a variável global 'cor'
}

exibirCor(); // azul

// Escopo local (de função):
function definirCor() {
    let corLocal = "verde"; // Variável local, só acessível dentro da função
    console.log(corLocal); // verde
}

definirCor();
// console.log(corLocal); // Erro! 'corLocal' não está definida no escopo global

// Escopo de bloco:
if (true) {
    let idade = 20; // 'let' tem escopo de bloco, só acessível dentro do 'if'
    console.log(idade); // 20
}

// console.log(idade); // Erro! 'idade' não está acessível fora do bloco
