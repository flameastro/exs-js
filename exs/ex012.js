// ex012: Converta uma string para maiúsculas e minúsculas.
function converteMaiusculasMinusculas(string) {
    return `Maiúsculas: ${string.toUpperCase()}\nMinúsculas: ${string.toLowerCase()}`;
}


console.log(converteMaiusculasMinusculas("CONvertEndo ParA minúSCUlas e MaiÚsCULas")); // Maiúsculas: CONVERTENDO PARA MINÚSCULAS E MAIÚSCULAS; Minúsculas: convertendo para minúsculas e maiúsculas
console.log(converteMaiusculasMinusculas("STrINg")); // Maiúsculas: STRING; Minúsculas: string
