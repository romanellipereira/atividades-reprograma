const input = require("readline-sync")

// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

// function potenciaDeDois(num) {
//     let resultado = 1
//     for (i = 1 ; i <= num ; i++) {
//         resultado = resultado * 2
//     }
// return resultado
// }
// console.log(potenciaDeDois(10))

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

// ***************

// function retornarNumeroMaior(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else if (num3 > num1 && num3 > num2) {
//         return num3
//     } else return "Os 3 números são iguais."
// }
// console.log(retornarNumeroMaior(50, 50, 50))

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um
// número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é
// divisível por outro.

// function numeroPrimo(num) {
//         *i comaça em 2 porque todo numero é divisível por 0 e por 1
//     for (i = 2 ; i < num ; i++) {
//         if (num % i === 0) {
//             return 'false'
//         } else return 'true'
//     }
// }
// console.log(numeroPrimo(8))

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2

// function contarVogais(palavra) {
//     let soma = 0
//     for (i = 0 ; i < palavra.length ; i++) {
//         if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u' ) {
//             soma = soma + 1
//         } else soma = soma
//     }
//     return soma
// }
// console.log(contarVogais('catarata'))
