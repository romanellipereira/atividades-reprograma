// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const arrei = ["banana", "gatinho", "brócolis"]

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`)
  }
}

// imprimeIndiceEElemento(arrei)

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const arrNums = [10,11,12,10,11,12,10,11,12,10,11,12]

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

// console.log(soma(arrNums))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maioresQueCinco(arr) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

// console.log(maioresQueCinco([88,55,0,2,85,81,24,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maioresQueNumero(arr, num) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

// console.log(maioresQueNumero([88,55,0,2,85,81,24,12], 20))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número 
// encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

function retornarMaiorNumero(arr) {
    let numeroMaior = Math.max.apply(Math, arr);
    for (i = -1; i < arr.length; i++) {
      if (arr[i] > numeroMaior) {
        numeroMaior = arr[i]
      } else numeroMaior = numeroMaior
    }
    return numeroMaior
  }
  // console.log(retornarMaiorNumero([-40, -35, -30, -25, -20]))
  
  
  // 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e
  // o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
  // Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59
  // e o menor número é -5"
  
function retornarValores(arr) {
  let numeroMaiorzao = Math.max.apply(Math, arr);
  let numeroMenorzinho = Math.min.apply(Math, arr);
  for (i = 0 ; i < arr.length; i++) {
    if (arr[i] > numeroMaiorzao) {
      numeroMaiorzao = arr[i]
    } else if (arr[i] < numeroMenorzinho) {
      numeroMenorzinho = arr[i]
    } else 
      numeroMaiorzao = numeroMaiorzao
      numeroMenorzinho = numeroMenorzinho
  }
return `O menor número é ${numeroMenorzinho} e o maior número é ${numeroMaiorzao}.`
}

//   console.log(retornarValores([-1, -5, 10, 20, 30, 40, 50]))
