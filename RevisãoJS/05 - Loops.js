// 05-loops.js
// Loops são usados para repetir blocos de código enquanto uma condição for verdadeira.


/*
// Loop 'for':
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Loop 'while':
let contador = 0;
while (contador < 5) {
    console.log(contador); // 0, 1, 2, 3, 4
    contador++;
}

// Loop 'do...while':
let numero = 0;
do {
    console.log(numero); // 0, 1, 2, 3, 4
    numero++;
} while (numero < 5);
*/







//Loops ou laços são estruturas de código que se repetem até que uma condição seja falsa

/*
//while
let voltas = 0

//enquanto o ciclista não completar 10 voltas, ele tem que continuar pedalando
while (voltas < 10) {
    console.log(`Pedale, você já deu ${voltas} voltas.`)
    //isso incrementa voltas em 1
    voltas ++ //voltas += 1  ou então voltas = voltas + 1

}

console.log("Você ganhou a corrida")
*/




//for significa para
for (let voltas1 = 0; voltas1 < 10; voltas1 ++){
    console.log(`Você já deu ${voltas1} voltas.`)
}

console.log("Parabéns, você ganhou a corrida!")