function contarOcorrencias(string, caractere) {
    let ocorrencias = 0;

    for (let x = 0; x < string.length; x++) {
        if (string[x] == caractere) {
            ocorrencias++
        }
    }

    return ocorrencias;
}

console.log(contarOcorrencias("banana", "a"));
console.log(contarOcorrencias("paralelepipedo", "e"));
console.log(contarOcorrencias("teste", "s"));
