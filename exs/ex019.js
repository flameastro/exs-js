function verificaPalindromo(string) {
    string = string.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Código gerado por pesquisa
    let invertido = "";

    for (let x = string.length-1; x >= 0; x--) {
        invertido = invertido + string[x];
    }

    if (invertido === string) {
        return "A string é palíndromo";
    } else {
        return "A string NÃO é palíndromo";
    }
}

console.log(verificaPalindromo("teste"));
console.log(verificaPalindromo("subi no ônibus"));
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("arara"));
