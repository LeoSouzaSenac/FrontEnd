// 02-operadores.js
// Operadores são usados para realizar operações com variáveis e valores.

// Operadores aritméticos:
let soma = 10 + 5; // Soma
let subtracao = 10 - 5; // Subtração
let multiplicacao = 10 * 5; // Multiplicação
let divisao = 10 / 5; // Divisão
let modulo = 10 % 3; // Resto da divisão (módulo)

console.log("Soma", soma)
console.log("Subtração", subtracao)
console.log("Multiplicação", multiplicacao)
console.log("Divisão", divisao)
console.log("Módulo/Resto", modulo)

/*
Crie uma variável que receba a soma de dois números e imprima o resultado
Crie uma variável que receba a subtração de dois números e imprima o resultado
Crie uma variável que receba a multiplicação de dois números e imprima o resultado
Crie uma variável que receba a divisão de dois números e imprima o resultado
Crie uma variável que receba o resto da divisão de dois números e imprima o resultado
*/





// Operadores de comparação:
//Maior que
console.log(10 > 5); // true

//Maior OU igual
console.log(10 >= 10); // true

//Menor que
console.log(10 < 5); // false

//Menor OU igual
console.log(10 <= 10); // true

//Igual a
console.log(10 === 70); // false (igualdade)


/*

Crie duas varáveis, numero1 e numero2
Imprima a comparação delas com maior, menor, maior ou igual, menor ou igual, e igual

*/









//console.log((10 >= 10) || (9 === 5))

let ligado = false

console.log(!ligado)








// Operadores lógicos:
console.log(true && false); // false (E lógico)
console.log(true || false); // true (OU lógico)
console.log(!true); // false (não lógico)

/*  */


// Armazena a idade e vê se a pessoa tem carteira
let idade = 29
let temCarteira = false
let maiorDeIdade = idade >= 18


// Verificar se o usuário tem mais de 18 anos E também se tem carteira. Se os dois forem true, retorna true, se não, retorna false.
let podeDirigir = maiorDeIdade && temCarteira
                // true        ||  false

console.log(`Veja se você pode dirigir: ${podeDirigir}`);



