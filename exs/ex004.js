// ex004: Gere um número aleatório entre 1 a 100 e diga se o número é par ou ímpar
const numero = Math.floor(Math.random() * 100) + 1;

if (numero % 2 == 0) {
    console.log(`O número sorteado é ${numero} e é PAR`)
} else {
    console.log(`O número sorteado é ${numero} e é ÍMPAR`)
}
