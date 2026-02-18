function multiplicaElementos(array) {
    let resultado = 1;

    for (let x = 0; x < array.length; x++) {
        resultado = resultado * array[x];
    }

    return resultado;
}

console.log(multiplicaElementos([1, 2, 3]));
console.log(multiplicaElementos([3, 6, 9]));
console.log(multiplicaElementos([3, 3, 3]));
