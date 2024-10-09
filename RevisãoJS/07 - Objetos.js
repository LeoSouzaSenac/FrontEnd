// 07-objetos.js
// Objetos são coleções de propriedades, que são pares de chave e valor.

// Declaração de um objeto:
let pessoa = {
    nome: "Carlos",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// Acessando propriedades do objeto:
console.log(pessoa.nome); // Carlos
console.log(pessoa["idade"]); // 25

// Alterando propriedades:
pessoa.idade = 26;
console.log(pessoa.idade); // 26

// Adicionando novas propriedades:
pessoa.profissao = "Engenheiro";
console.log(pessoa.profissao); // Engenheiro

// Métodos em objetos (funções dentro de objetos):
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    buzinar: function() {
        console.log("Buzinando!");
    }
};

carro.buzinar(); // Buzinando!





