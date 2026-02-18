function somaDigitos(numero) {
    numero = String(numero);
    let soma = 0;

    for (let x = 0; x < numero.length; x++) {
        soma = soma + Number(numero[x]);
    }

    return soma;
}

console.log(somaDigitos(123));
console.log(somaDigitos(55555));
console.log(somaDigitos(369));
