function removeDuplicatas(array) {
    let unicos = [];

    for (let x = 0; x < array.length; x++) {
        if (!unicos.includes(array[x])) {
            unicos.push(array[x]);
        }
    }

    return unicos;
}

console.log(removeDuplicatas([1, 2, 2, 3]));
console.log(removeDuplicatas([3, 3, 0, 1]));
console.log(removeDuplicatas([7, 7, 6, 7, 4, 1, 1, 0, 0, 4, 3]));
