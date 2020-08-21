console.log('>> CALCULADORA DE MÉDIA <<');

const input = require("readline-sync");

const nome = input.question('Por favor, digite o nome da aluna: ');

let nota01 = parseFloat(input.question('Digite a primeira nota: '));
    if (isNaN (nota01) || nota01 > 10) {
        nota01 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
let nota02 = parseFloat(input.question('Digite a segunda nota: '));
    if (isNaN (nota02) || nota02 > 10) {
        nota02 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
let nota03 = parseFloat(input.question('Digite a terceira nota: '));
    if (isNaN (nota03) || nota03 > 10) {
        nota03 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
let nota04 = parseFloat(input.question('Digite a quarta nota: '));
    if (isNaN (nota04) || nota04 > 10) {
        nota04 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
let nota05 = parseFloat(input.question('Digite a quinta nota: '));
    if (isNaN (nota05) || nota05 > 10) {
        nota05 = parseFloat(input.question('Por favor, digite uma nota valida: '));
}
let nota06 = parseFloat(input.question('Digite a sexta nota: '));
    if (isNaN (nota06) || nota06 > 10) {
        nota06= parseFloat(input.question('Por favor, digite uma nota valida: '));
    }

    const media = ((nota01 + nota02 + nota03 + nota04 + nota05 + nota06) / 6 ).toFixed(2);
        if (media >= 7) {
            console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está aprovada.');
        } else if (media < 5) {
            console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está reprovada.');
        } else {
            console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está em recuperação.');
        }

console.log('Fim!')

/*
let nota02 = parseFloat(input.question('Digite a segunda nota: '));
    if (typeof nota02 != Number) {
        let nota02 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
let nota03 = parseFloat(input.question('Digite a terceira nota: '));
    if (typeof nota03 != Number) {
        let nota03 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
var nota04 = parseFloat(input.question('Digite a quarta nota: '));
    if (typeof nota04 != Number) {
        var nota04 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
var nota05 = parseFloat(input.question('Digite a quinta nota: '));
    if (typeof nota05 != Number) {
        var nota05 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
var nota06 = parseFloat(input.question('Digite a sexta nota: '));
    if (typeof nota06 != Number) {
        var nota06 = parseFloat(input.question('Por favor, digite uma nota valida: '));
    }
*/

// Duvidas:
// como obrigar o usuário a digitar um número, não deixar faltando informação
// como fazer o código voltar para o início caso nenhuma consição seja satisfeita