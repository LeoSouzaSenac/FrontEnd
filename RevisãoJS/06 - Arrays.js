// 06-arrays.js
// Arrays são coleções de dados, como uma lista de valores.

// Declaração de um array:
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessando elementos do array:
console.log(frutas[0]); // Maçã
console.log(frutas[2]); // Laranja

// Métodos de array:
frutas.push("Uva"); // Adiciona no final
console.log(frutas); // ["Maçã", "Banana", "Laranja", "Uva"]

frutas.pop(); // Remove o último elemento
console.log(frutas); // ["Maçã", "Banana", "Laranja"]

// Iterar sobre arrays:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Maçã, Banana, Laranja
}
