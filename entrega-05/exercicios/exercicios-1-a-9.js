// 1. Liste números de 0 a 10 no console

// for (let i = 0; i <= 10 ; i++) {
//     console.log(i)
// }

// 2. Liste a tabuada do 6 (do 1 ao 10)

// for (let i = 1; i <= 10; i++) {
//     console.log(i*6)
// }

// 3. Liste uma lista de mercado

// const listaDeMercado = ['maçã', 'banana', 'chamyto', 'nutella', 'coca-cola', 'bisnaguinha', 'rap10']

// for (i = 0; i < listaDeMercado.length; i++) {
//     console.log(listaDeMercado[i])
// }

// 4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

const listaDeMercado = [
    {
      nome: 'Maçã',
      comprado: true
    },
    {
      nome: 'Chamyto',
      comprado: false
    },
    {
      nome: 'Nutella',
      comprado: false
    },
    {
      nome: 'Sorvete',
      comprado: true
    },
    {
      nome: 'Suco',
      comprado: false
    }
  ]
  
  const listaAtualizada = listaDeMercado.filter(function(item){
    return item.comprado === false
  })

console.log(listaAtualizada)

// 5. Some uma lista de notas de escola

// const notas = [5, 4, 3, 0, 10]

// const notasSomadas = notas.reduce(function(acc, item) {
//     return acc + item
// })

// console.log(`Soma das notas: ${notasSomadas}`)

// 6. Some o total dos valores de itens de uma lista de mercado. Bônus: arredonde o valor para até 2 casas decimais!

// const listaDeMercado = [
//     {
//       nome: 'Maçã',
//       comprado: true,
//       valor: 4.64
//     },
//     {
//       nome: 'Chamyto',
//       comprado: false,
//       valor: 6.99
//     },
//     {
//       nome: 'Nutella',
//       comprado: false,
//       valor: 23.90
//     },
//     {
//       nome: 'Sorvete',
//       comprado: true,
//       valor: 12.99
//     },
//     {
//       nome: 'Suco',
//       comprado: false,
//       valor: 6.99
//     }
//   ]
  
  // const listaDeValores = listaDeMercado.map(function(listaDeMercado) {
  //   return listaDeMercado.valor
  // })
  
  // const valoresSomados = listaDeValores.reduce(function(acc, item) {
  //   return acc + item
  // })
  // console.log(valoresSomados.toFixed(2))

// console.log(((listaDeMercado.map(listaDeMercado => listaDeMercado.valor)).reduce((acc, item) => acc + item)).toFixed(2))

// 7. Some somente os valores ímpares de uma lista

// const valores = [2, 34, 56, 3, 9, 6, 55, 106];

// console.log((valores.filter(item => item % 2 !== 0)).reduce((acc, item) => acc + item))

// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

// const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

// console.log(nomes.filter(nomes => nomes.substr(0,1) == 'A'))

// 9. Desafio surpresa (:

// const bala = ['[<O>]'];
// const pessoa = {
//   nome: 'Anna',
//   comer(bala) {
//     console.log(`${this.nome} comeu a bala: ${bala}`);
//   }
// }
// pessoa.comer(bala)