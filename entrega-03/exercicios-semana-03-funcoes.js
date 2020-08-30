// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

const input = require("readline-sync")

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

// ------ Resposta das questões 1 e 2 ---------

// function soma(numero1, numero2) {
//     return (numero1 + numero2)
// }
// function subtracao(numero1, numero2) {
//     return (numero1 - numero2)
// }
function multiplicacao(numero1, numero2) {
    if(numero1 !== 0 && numero2 !== 0) {
        return (numero1 * numero2)
     } else return `eror404`
}
// function divisao(numero1, numero2) {
//     if(numero1 !== 0 && numero2 !== 0) {
//         return (numero1 / numero2)
//      } else return `eror404`
// }

// console.log(soma(8,0));
// console.log(subtracao(8,0));
// console.log(multiplicacao(8,0));
// console.log(divisao(8,0));


// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

// function mostrarResultado(numero1, numero2) {
//     console.log(`O resultado da operaçção é ${multiplicacao(numero1, numero2)}`)
//   }

// mostrarResultado(8, 2)

// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva a conta 36325 * (9824 + 777).

// function resolveConta() {
//     return multiplicacao(36325, soma(9824, 777))
// }

// console.log(resolveConta())

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

// function gerarValorAleatorio() {
//     let valor1 = input.question("Por favor, digite um numero: ");
//     let valor2 = input.question("Por favor, digite um numero maior que o anterior: ");
//     let aleatorio1 = Math.floor(Math.random() * (valor2 - valor1 + 1) + valor1)
//     let aleatorio2 = Math.floor(Math.random() * (valor2 - valor1 + 1) + valor1)
//     console.log(`A soma de ${aleatorio1} e ${aleatorio2} é ${soma(aleatorio1, aleatorio2)}`)
// }

// gerarValorAleatorio()

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

// function parametros() {
//     let valor1 = input.question("Por favor, digite um numero: ");
//     let valor2 = input.question("Por favor, digite outro numero: ");
//     let valor3 = input.question("Por favor, digite outro numero: ");
//     if (valor1 === ''  || valor2 === '' || valor3 === '') {
//         console.log("Preencha todos os valores corretamente!")
//     } else 
//         return ((valor1 * valor2 * valor3) + 2)
// }

// console.log(parametros())

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

// function parametrosComplexos() {
//     let valor1 = input.question("Por favor, digite um numero: ");
//     let valor2 = input.question("Por favor, digite outro numero: ");
//     let valor3 = input.question("Por favor, digite outro numero: ");
//     if (valor1 !== '' && valor2 === '' && valor3 === '') {
//         return valor1
//     } else if (valor1 === '' && valor2 !== '' && valor3 === '') {
//         return valor2
//     } else if (valor1 === '' && valor2 === '' && valor3 !== '') {
//         return valor3
//     } else if (valor1 !== '' && valor2 !== '' && valor3 === '') {
//         return (parseFloat(valor1) + parseFloat(valor2))
//     } else if (valor1 !== '' && valor2 === '' && valor3 !== '') {
//         return (parseFloat(valor1) + parseFloat(valor3))
//     } else if (valor1 === '' && valor2 !== '' && valor3 !== '') {
//         return (parseFloat(valor2) + parseFloat(valor3))
//     } else if (valor1 !== '' && valor2 !== '' && valor3 !== '') {
//         return (parseFloat(valor1) + parseFloat(valor2)) / parseFloat(valor3)
//     } else return ("Não recebeu parâmetro.")
// }

// console.log(parametrosComplexos())

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. 
// Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

// function inverter() {
//     let palavra = input.question("Por favor, digite uma palavra: ")
//     palavraInversa = palavra.split('').reverse().join('')
//     return palavraInversa
// }

// console.log(inverter())

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

// function inverter() {
//     let palavra = input.question("Por favor, digite uma palavra: ")
//     palavraInversa = palavra.split('').reverse().join('')
//     return (palavra === palavraInversa)
// }

// console.log(inverter())

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

// function retornaMaior(palavra1, palavra2) {
//     let caracteresPalavra1 = palavra1.length;
//     let caracteresPalavra2 = palavra2.length;
//     if (caracteresPalavra1 > caracteresPalavra2) {
//         return palavra1
//     } else if (caracteresPalavra2 > caracteresPalavra1) {
//         return palavra2
//     } else return (`As palavras ${palavra1} e ${palavra2} têm a mesma quantidade de caracteres.`)
// }

// console.log(retornaMaior("chocolate", "banana"))
