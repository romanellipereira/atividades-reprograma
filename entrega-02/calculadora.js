const input = require("readline-sync");

const nome = input.question('Por favor, digite o nome da aluna: ');

const nota01 = parseFloat(input.question('Digite a primeira nota: '));
const nota02 = parseFloat(input.question('Digite a segunda nota: '));
const nota03 = parseFloat(input.question('Digite a terceira nota: '));
const nota04 = parseFloat(input.question('Digite a quarta nota: '));
const nota05 = parseFloat(input.question('Digite a quinta nota: '));
const nota06 = parseFloat(input.question('Digite a sexta nota: '));

const media = ((nota01 + nota02 + nota03 + nota04 + nota05 + nota06) / 6 ).toFixed(2);

if (media >= 7) {
    console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está aprovada.');
} else if (media < 5) {
    console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está reprovada.');
} else {
    console.log('A média da aluna ' + nome + ' é ' + media + ', portanto ela está em recuperação.');
}
    console.log('Fim!')

// Duvidas:
// como obrigar o usuário a digitar um número, não deixar faltando informação
// como fazer o código voltar para o início caso nenhuma consição seja satisfeita