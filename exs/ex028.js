function fatorial(numero) {
    let resultado = 1;

    for (let x = 1; x <= numero; x++) {
        resultado = resultado * x;
    }

    return resultado;
}

console.log(fatorial(5));
console.log(fatorial(3));
console.log(fatorial(12));
