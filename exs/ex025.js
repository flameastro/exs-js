function multiplicarElementosFator(array, fator) {
    let arrayMultiplicado = [];

    for (let x = 0; x < array.length; x++) {
        arrayMultiplicado.push(array[x] * fator);
    }

    return arrayMultiplicado;
}

console.log(multiplicarElementosFator([1, 2, 3], 2));
console.log(multiplicarElementosFator([5, 4, 3], 5));
console.log(multiplicarElementosFator([5, 8, 7], 30));
