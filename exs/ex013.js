// ex013: Conte quantas vogais existem em uma string (sem considerar acentuações)
function contaVogais(string) {
    string = string.toLowerCase();

    let vogais = 0;

    for (let x = 0; x < string.length; x++) {
        if (["a", "e", "i", "o", "u"].includes(string[x])) {
            vogais++;
        }
    }

    return vogais;
};

console.log(contaVogais("teste"));
