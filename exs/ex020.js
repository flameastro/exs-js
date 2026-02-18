function somaArray(array) {
    let soma = 0;

    for (let x = 0; x < array.length; x++) {
        soma = soma + array[x];
    }

    array.push(soma);

    return array;
}

console.log(somaArray([1, 2, 3]));
console.log(somaArray([7, 6, 4]));
console.log(somaArray([0, 0, 7]));
