// ex011: Crie uma função `fatorial(n)` que retorna o fatorial de `n` (iterativo).
function fatorial(n) {
    let soma = 1;

    for (let i = 1; i <= n; i++) {
        soma *= i;
    }

    return soma;
}


console.log(fatorial(5)); // 120
console.log(fatorial(6)); // 720
console.log(fatorial(4)); // 24
console.log(fatorial(12)); // 479001600
