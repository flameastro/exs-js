// ex014: Inverta uma string
function inverteString(string) {
    let invertido = "";

    for (let x = string.length-1; x >= 0; x--) {
        invertido = invertido + string[x];
    }

    return invertido;
}

console.log(inverteString("12345"));
console.log(inverteString("abcdefg"));
console.log(inverteString("teste"));
