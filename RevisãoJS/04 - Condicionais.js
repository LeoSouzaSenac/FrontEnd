// 04-condicionais.js
// Estruturas condicionais permitem que o programa tome decisões com base em condições.
/*
// Condicional 'if':
let hora = 10;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Condicional 'switch':
let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia");
}
*/





let idade = 20
let temCarteira = true

if (idade >= 18 && temCarteira === true ) {

    console.log("Você tem idade para dirigir e tem carteira.")
} else if (idade >= 18) {
    console.log("Você até tem idade para dirigir, mas não tem carteira. Chame uber.")
}   else {
    console.log("Você não pode dirigir.")
}






/*

depois do meio dia, é tarde

depois das 18, é noite

depois da meia noite, é madrugada

a partir das 6, é manhã


criem uma variável que recebe a hora (exemplo: 10, 8, 19)

crie um código usando condicionais que mostre se é manhã, se é tarde, se é noite, se é madrugada

*/

/*
let hora = 3

if (hora > 6 && hora < 12){
    console.log("É de manhã. Hora de tomar Nesquik com bolacha.")
} else if (hora >= 12 && hora < 18){
    console.log("É de tarde. Hora de assistir Ben 10.")
} else if (hora >= 18 && hora <= 23) {
    console.log("É de noite. Hora de jogar Read Dead Redemption II.")
} else {
    console.log("É de madrugada. O que você está fazendo acordado? Vai dormir!")
}
    */



let jogo = "Dark Souls"

/*
if (jogo === "Red Dead Redemption II") {
    console.log("Jogo do Velho Oeste")
} else if (jogo === "Skyrim") {
    console.log("Melhor jogo já feito pela humanidade")
} else if (jogo === "Dark Souls") {
    console.log("Meu deus, eu só morro nessa joça")
} else if (jogo === "Far Cry") {
    console.log("Mds, o vilão é mutcho loco")
} else if (jogo === "Cuphead") {
    console.log("Só não é mais difícil que Dark Souls")
} else {
    console.log("Não conheço esse jogo")
}
*/



switch(jogo) {
    case "Red Dead Redemption II":
        console.log("Jogo do Velho Oeste")
    break

    case "Skyrim":
        console.log("Melhor jogo já feito pela humanidade")
    break

    case "Dark Souls":
        console.log("Meu deus, eu só morro nessa joça")
    break

    default:
        console.log("Não conheço esse jogo!")
    break
}






